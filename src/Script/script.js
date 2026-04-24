document.body.classList.add("is-loading");

const INTRO_DURATION_MS = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ? 80
  : 3800;

window.setTimeout(() => {
  document.body.classList.remove("is-loading");
  document.body.classList.add("intro-complete");
}, INTRO_DURATION_MS);

const root = document.documentElement;
const canvas = document.createElement("canvas");
canvas.className = "starfield";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let width = 0;
let height = 0;
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

const stars = Array.from({ length: 135 }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  radius: Math.random() * 1.7 + 0.4,
  speedX: (Math.random() - 0.5) * 0.18,
  speedY: (Math.random() - 0.5) * 0.18,
  opacity: Math.random() * 0.7 + 0.18,
}));

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

function updateMousePosition(x, y) {
  mouseX = x;
  mouseY = y;
  root.style.setProperty("--mouse-x", `${x}px`);
  root.style.setProperty("--mouse-y", `${y}px`);
}

function drawConnections() {
  for (let i = 0; i < stars.length; i += 1) {
    const a = stars[i];
    const mouseDistance = Math.hypot(a.x - mouseX, a.y - mouseY);

    if (mouseDistance < 150) {
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(mouseX, mouseY);
      ctx.strokeStyle = `rgba(116, 255, 217, ${0.18 - mouseDistance / 1000})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }

    for (let j = i + 1; j < stars.length; j += 1) {
      const b = stars[j];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);

      if (distance < 96) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(106, 148, 255, ${0.13 - distance / 930})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }
  }
}

function drawStarfield() {
  ctx.clearRect(0, 0, width, height);

  stars.forEach((star) => {
    if (!reduceMotion.matches) {
      const driftX = (mouseX / width - 0.5) * 0.12;
      const driftY = (mouseY / height - 0.5) * 0.12;
      star.x += star.speedX + driftX;
      star.y += star.speedY + driftY;
    }

    if (star.x < -20) star.x = width + 20;
    if (star.x > width + 20) star.x = -20;
    if (star.y < -20) star.y = height + 20;
    if (star.y > height + 20) star.y = -20;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(216, 255, 243, ${star.opacity})`;
    ctx.fill();
  });

  if (!reduceMotion.matches) {
    drawConnections();
    requestAnimationFrame(drawStarfield);
  }
}

resizeCanvas();
drawStarfield();
updateMousePosition(mouseX, mouseY);

window.addEventListener("resize", resizeCanvas);
window.addEventListener("mousemove", (event) => {
  updateMousePosition(event.clientX, event.clientY);
});

window.addEventListener(
  "touchmove",
  (event) => {
    const touch = event.touches[0];
    if (!touch) return;
    updateMousePosition(touch.clientX, touch.clientY);
  },
  { passive: true }
);

const toggle = document.querySelector(".nav-toggle");
const navLinks = [...document.querySelectorAll(".top-nav a")];
const revealItems = document.querySelectorAll(".reveal");
const trackedSections = [...document.querySelectorAll("main section[id]")];

if (toggle) {
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.14 }
);

if (reduceMotion.matches) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  revealItems.forEach((item) => revealObserver.observe(item));
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-active", active);
      });
    });
  },
  {
    rootMargin: "-35% 0px -45% 0px",
    threshold: 0.01,
  }
);

trackedSections.forEach((section) => sectionObserver.observe(section));

const projectCards = [...document.querySelectorAll(".project-card")];
const projectViewer = document.querySelector(".project-viewer");
const projectViewerDialog = document.querySelector(".project-viewer-dialog");
const projectViewerTitle = document.querySelector("#project-viewer-title");
const projectViewerMeta = document.querySelector(".project-viewer-meta");
const projectViewerDescription = document.querySelector(".project-viewer-description");
const projectViewerVideo = document.querySelector(".project-viewer-video");
const projectViewerCloseButtons = [...document.querySelectorAll("[data-viewer-close]")];
const projectPlayerToggle = document.querySelector(".project-player-toggle");
const projectPlayerProgress = document.querySelector(".project-player-progress");
const projectPlayerFullscreen = document.querySelector(".project-player-fullscreen");

let activeProjectButton = null;

function syncPlayerToggleLabel() {
  if (!projectPlayerToggle || !projectViewerVideo) return;
  const paused = projectViewerVideo.paused || projectViewerVideo.ended;
  projectPlayerToggle.textContent = paused ? "play" : "pause";
  projectPlayerToggle.setAttribute("aria-label", paused ? "Play video" : "Pause video");
}

function syncFullscreenLabel() {
  if (!projectPlayerFullscreen || !projectViewerDialog) return;
  const isFullscreen = document.fullscreenElement === projectViewerDialog;
  projectPlayerFullscreen.textContent = isFullscreen ? "exit fullscreen" : "fullscreen";
  projectPlayerFullscreen.setAttribute(
    "aria-label",
    isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
  );
}

function closeProjectViewer() {
  if (!projectViewer || !projectViewerVideo) return;

  if (document.fullscreenElement === projectViewerDialog) {
    document.exitFullscreen().catch(() => {});
  }

  projectViewer.hidden = true;
  projectViewer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("viewer-open");
  projectViewerVideo.pause();
  projectViewerVideo.removeAttribute("src");
  projectViewerVideo.load();
  projectPlayerProgress.value = "0";
  syncPlayerToggleLabel();
  syncFullscreenLabel();
  activeProjectButton?.focus();
}

function openProjectViewer(card, triggerButton) {
  if (
    !projectViewer ||
    !projectViewerTitle ||
    !projectViewerMeta ||
    !projectViewerDescription ||
    !projectViewerVideo ||
    !projectViewerDialog
  ) {
    return;
  }

  const title = card.querySelector("h3")?.textContent?.trim() || "Project";
  const description = card.querySelector("p")?.textContent?.replace(/\s+/g, " ").trim() || "";
  const source = card.querySelector("video")?.getAttribute("src") || "";
  const tags = [...card.querySelectorAll(".project-meta span")].map((tag) => tag.textContent?.trim()).filter(Boolean);

  activeProjectButton = triggerButton;
  projectViewerTitle.textContent = title;
  projectViewerDescription.textContent = description;
  projectViewerMeta.replaceChildren();
  tags.forEach((tag) => {
    const badge = document.createElement("span");
    badge.textContent = tag;
    projectViewerMeta.appendChild(badge);
  });
  projectViewerVideo.src = source;
  projectViewer.hidden = false;
  projectViewer.setAttribute("aria-hidden", "false");
  document.body.classList.add("viewer-open");
  projectPlayerProgress.value = "0";
  syncFullscreenLabel();

  projectViewerVideo.currentTime = 0;
  projectViewerVideo.play().catch(() => {
    syncPlayerToggleLabel();
  });
  syncPlayerToggleLabel();
  window.setTimeout(() => projectViewerDialog.focus(), 30);
}

projectCards.forEach((card) => {
  const playButton = card.querySelector(".project-play-button");
  if (!playButton) return;

  playButton.addEventListener("click", () => {
    openProjectViewer(card, playButton);
  });
});

projectViewerCloseButtons.forEach((button) => {
  button.addEventListener("click", closeProjectViewer);
});

projectViewer?.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLElement)) return;
  if (event.target.hasAttribute("data-viewer-close")) {
    closeProjectViewer();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && projectViewer && !projectViewer.hidden) {
    closeProjectViewer();
  }
});

projectPlayerToggle?.addEventListener("click", () => {
  if (!projectViewerVideo) return;

  if (projectViewerVideo.paused) {
    projectViewerVideo.play().catch(() => {});
  } else {
    projectViewerVideo.pause();
  }

  syncPlayerToggleLabel();
});

projectViewerVideo?.addEventListener("play", syncPlayerToggleLabel);
projectViewerVideo?.addEventListener("pause", syncPlayerToggleLabel);
projectViewerVideo?.addEventListener("ended", syncPlayerToggleLabel);

projectViewerVideo?.addEventListener("timeupdate", () => {
  if (!projectViewerVideo.duration || !projectPlayerProgress) return;
  projectPlayerProgress.value = String(
    Math.round((projectViewerVideo.currentTime / projectViewerVideo.duration) * 1000)
  );
});

projectViewerVideo?.addEventListener("loadedmetadata", () => {
  if (!projectPlayerProgress) return;
  projectPlayerProgress.value = "0";
});

projectPlayerProgress?.addEventListener("input", () => {
  if (!projectViewerVideo.duration) return;
  const progress = Number(projectPlayerProgress.value) / 1000;
  projectViewerVideo.currentTime = progress * projectViewerVideo.duration;
});

projectPlayerFullscreen?.addEventListener("click", async () => {
  if (!projectViewerDialog) return;

  try {
    if (document.fullscreenElement === projectViewerDialog) {
      await document.exitFullscreen();
    } else {
      await projectViewerDialog.requestFullscreen();
    }
  } catch (error) {
    console.error(error);
  }

  syncFullscreenLabel();
});

document.addEventListener("fullscreenchange", syncFullscreenLabel);
