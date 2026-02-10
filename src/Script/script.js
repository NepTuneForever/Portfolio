/* ===============================
   GALAXY PARTICLES (BACKGROUND)
================================ */

const canvas = document.createElement("canvas")
canvas.style.position = "fixed"
canvas.style.inset = "0"
canvas.style.zIndex = "-2"

document.body.appendChild(canvas)

const ctx = canvas.getContext("2d")

let w, h
function resize() {
  w = canvas.width = window.innerWidth
  h = canvas.height = window.innerHeight
}
window.addEventListener("resize", resize)
resize()

const particles = Array.from({ length: 120 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  r: Math.random() * 1.5 + 0.5,
  vx: (Math.random() - 0.5) * 0.2,
  vy: (Math.random() - 0.5) * 0.2,
  o: Math.random()
}))

function drawParticles() {
  ctx.clearRect(0, 0, w, h)

  particles.forEach(p => {
    p.x += p.vx
    p.y += p.vy

    if (p.x < 0) p.x = w
    if (p.x > w) p.x = 0
    if (p.y < 0) p.y = h
    if (p.y > h) p.y = 0

    ctx.beginPath()
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(180,120,255,${p.o})`
    ctx.fill()
  })

  requestAnimationFrame(drawParticles)
}

drawParticles()

/* ===============================
   PAGE NAVIGATION
================================ */

const pages = document.querySelectorAll(".page")

function showPage(id) {
  pages.forEach(page => {
    page.classList.add("hidden")
  })

  const target = document.getElementById(id)
  if (target) {
    target.classList.remove("hidden")

    target.style.animation = "none"
    target.offsetHeight
    target.style.animation = ""
  }
}

showPage("home")
