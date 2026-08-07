document.body.classList.add("is-loading");

const root = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const INTRO_DURATION_MS = reduceMotion.matches ? 80 : 3800;
const LANGUAGE_STORAGE_KEY = "neptune-site-language";
const DEFAULT_LANGUAGE = "en";

const content = {
  en: {
    strings: {
      "meta.title": "Neptune | Developer",
      "meta.description": "Fullstack developer and AI engineer",
      "intro.line1": '<span class="prompt">neptune@boot~$</span> initialize visual intro',
      "intro.line2": '<span class="prompt">neptune@boot~$</span> staging interface layers...',
      "intro.line3": '<span class="prompt">neptune@boot~$</span> syncing product cases',
      "intro.line4": '<span class="prompt">neptune@boot~$</span> routing videos',
      "intro.line5": '<span class="prompt">neptune@boot~$</span> mounting fullstack stack',
      "intro.line6": '<span class="prompt">neptune@boot~$</span> unlocking contact relay',
      "intro.line7": '<span class="prompt">neptune@boot~$</span> process done',
      "nav.home": "home",
      "nav.systems": "systems",
      "nav.projects": "projects",
      "nav.proof": "proof",
      "nav.contact": "contact",
      "topbar.language": "language",
      "topbar.profile": "about me",
      "topbar.online": "online",
      "hero.kicker": "Root Session",
      "hero.badge": "Fullstack / AI / Systems",
      "hero.title": "I build websites, systems, and AI tools;",
      "hero.text": "I work on APIs, dashboards, automations, internal tools, and game systems. The goal is simple: build something useful and make it run well.",
      "hero.primaryCta": "inspect projects",
      "hero.secondaryCta": "open contact",
      "hero.typed": "fullstack developer / ai tools / automations / game systems",
      "identity.label": "Identity Map",
      "identity.codenameLabel": "codename",
      "identity.roleLabel": "role",
      "identity.roleValue": "Fullstack Engineer & AI Engineer",
      "identity.focusLabel": "focus",
      "identity.focusValue": "Websites, APIs, automations, dashboards, and game systems",
      "identity.styleLabel": "style",
      "identity.styleValue": "Simple, clean, and built to work",
      "metrics.label": "Live Metrics",
      "metrics.builds": "highlighted builds",
      "metrics.technologies": "technologies listed",
      "metrics.certificates": "certificates shown",
      "metrics.signal": "signal active",
      "about.label": "About",
      "about.title": "I turn ideas into working products and tools;",
      "about.body1": "This portfolio includes websites, APIs, dashboards, AI tools, automations, and Roblox systems. Different projects, same focus: make it useful, stable, and easy to use.",
      "about.body2": "I care about clean structure, clear flow, and how the system behaves when people actually start using it.",
      "rates.longLabel": "Long Term",
      "rates.longText": "Ideal for ongoing systems, continuous iteration and larger technical scopes.",
      "rates.shortLabel": "Short Term",
      "rates.shortText": "Best for tight deadlines, urgent fixes and focused high-speed implementation.",
      "stack.label": "Skills",
      "stack.title": "Tech Stacks;",
      "projects.label": "Indexed Projects",
      "projects.title": "Some of the projects I have worked on;",
      "viewer.label": "Project Playback",
      "viewer.play": "play",
      "viewer.pause": "pause",
      "viewer.fullscreen": "fullscreen",
      "viewer.exitFullscreen": "exit fullscreen",
      "viewer.close": "close",
      "viewer.playAria": "Play {title} video",
      "viewer.pauseAria": "Pause video",
      "viewer.playToggleAria": "Play video",
      "viewer.fullscreenAria": "Enter fullscreen",
      "viewer.exitFullscreenAria": "Exit fullscreen",
      "proof.label": "Testimonials",
      "proof.title": "What clients said;",
      "proof.featured": "Featured",
      "proof.client": "Client",
      "proof.partner": "Partner",
      "testimonials.sonder": '"Neptune is a very proficient and reliable developer. His scripting was high-quality and made in a timely matter. He was very respectful and understanding enough to keep us updated with progress until reaching our goal."',
      "testimonials.kartz": '"Neptune delivered an insanely polished system, fast and extremely well structured."',
      "testimonials.rodevs1": '"Delivered the lines of code I needed quickly and at a reasonable price. As for his communication he does very well, friendly and easy to talk with, I recommend him to others."',
      "testimonials.raijin": '"Very good work, did the work pretty quickly even though he was not on his main setup or equipment."',
      "testimonials.society": '"Very good, quick, and clear even while not on his main work setup. I would definitely recommend to new customers."',
      "testimonials.rodevs2": '"This scripter is very fast in completing tasks, but his value for money does not really work for me. Overall 9/10."',
      "testimonials.rodevs3": '"He works very fast and responds fast and professional."',
      "testimonials.rodevs4": '"This dude really helped me out so much and is an awesome scripter. I really suggest getting work done by them!"',
      "certificates.label": "Certificates",
      "certificates.title": "Courses and certificates;",
      "certificates.harvard": "Computer Science - Harvard",
      "certificates.phub": "Ethical Hacking - Programming Hub",
      "certificates.emprestact": "EmprestaCT - UFPB Extension Project",
      "contact.label": "Contact",
      "contact.title": "Need a website, system, or AI tool?",
      "contact.text": "Send the idea and the scope. If it makes sense, we can work on it.",
      "contact.typed": "response :: checking new projects",
      "contact.github": "GitHub",
      "contact.website": "Website",
      "contact.discord": "Discord Server",
      "footer.copy": "© Neptune | 2026",
      "language.label": "Language",
      "language.title": "Choose your language",
      "language.text": "Pick how you want to browse the site.",
      "profile.close": "close",
      "profile.label": "Personal Information",
      "profile.title": "About me",
      "profile.nameLabel": "Name",
      "profile.emailLabel": "Contact email",
      "profile.ageLabel": "Age",
      "profile.studyLabel": "Studying",
      "profile.studyValue": "Computer Science",
      "profile.languagesLabel": "Languages I speak",
      "profile.languagePortuguese": "Portuguese: Native",
      "profile.languageEnglish": "English: Fluent",
      "profile.languageFrench": "French: Basic to intermediate"
    },
    projects: {
      emprestact: {
        title: "EmprestaCT",
        description: "Equipment loan management platform created in a university extension project for the Federal University of Paraiba (UFPB), designed to organize internal equipment requests, loan tracking, approvals, and returns across the institution.",
        meta: ["featured", "university", "extension project", "ufpb", "management"]
      },
      rocketleagueAI: {
        title: "Rocket League AI Agent",
        description: "A custom AI solution for Rocket League focused on advanced bot behavior, match simulation, decision-making logic, and controlled testing scenarios for training and evaluating agent performance.",
        meta: ["featured", "ai engineer", "ai", "python", "nepops"]
      },
      resgatepet: {
        title: "Resgate Pet",
        description: "Pet rescue website built with modern technologies to streamline the animal adoption process, connecting shelters, NGOs, and adopters with filtering, listings, and direct contact flows.",
        meta: ["social impact", "website", "python", "api", "django"]
      },
      ollama: {
        title: "NepAI Agent",
        description: "Custom AI agent built with Python and Ollama, designed to provide intelligent responses and perform specific tasks based on user input on a local machine.",
        meta: ["ai engineer", "llm", "python"]
      },
      website: {
        title: "Neptune's Portfolio",
        description: "A custom portfolio with a system-driven interface, layered motion, and deliberate positioning, built to present my work in a way that feels intentional and far from a generic template.",
        meta: ["featured", "portfolio"]
      },
      animefighting: {
        title: "Anime Fighting Simulator",
        description: "A skills training system for Anime Fighting Simulator designed to support progression loops, stat growth, repeated actions, and smoother gameplay feedback.",
        meta: ["game system", "lua", "rojo"]
      },
      hatchmerge: {
        title: "Hatch and Merge Brainrots",
        description: "A full cashgrab-style game fully scripted by me, structured around lightweight systems, fast iteration, and low memory usage while keeping the reward loop responsive.",
        meta: ["game system", "lua"]
      },
      tickets: {
        title: "Tickets Service",
        description: "A ticket service built with Python and JSON-based communication, including separate client and admin panels to organize requests, responses, and support workflow clearly.",
        meta: ["support platform", "python", "oop", "django"]
      },
      cripto: {
        title: "Online Cripto Calculator",
        description: "Online cryptocurrency calculator using the Gecko API to provide updated data in real time, with GET and POST methods for conversion and utility flows.",
        meta: ["realtime data", "utility", "python", "flask", "website"]
      },
      combat: {
        title: "Combat System",
        description: "Parry-based combat system for battleground games, using modern tech stacks such as BridgeNet2 and Leif DataStore for responsive PvP and PvE flow.",
        meta: ["game system", "lua", "pvp & pve"]
      },
      djangoapi: {
        title: "Cripto Dashboard",
        description: "A RESTful API built with Django for clean integration with modern frontend applications, exposing structured data and reliable endpoints for dashboard and product features.",
        meta: ["api", "django", "python", "rest", "postgres", "website"]
      },
      morph: {
        title: "Morph System (Armor + Sword)",
        description: "A complete armor morph system with animations, sword handling, and sound effects, organized with a modular structure and clean code so the full setup could be built quickly without becoming messy.",
        meta: ["roblox", "game system", "luau", "lua", "fullstack"]
      }
    }
  },
  pt: {
    strings: {
      "meta.title": "Neptune | Desenvolvedor",
      "meta.description": "Desenvolvedor fullstack e engenheiro de IA",
      "intro.line1": '<span class="prompt">neptune@boot~$</span> inicializando intro visual',
      "intro.line2": '<span class="prompt">neptune@boot~$</span> preparando camadas da interface...',
      "intro.line3": '<span class="prompt">neptune@boot~$</span> sincronizando casos de produto',
      "intro.line4": '<span class="prompt">neptune@boot~$</span> roteando videos',
      "intro.line5": '<span class="prompt">neptune@boot~$</span> montando stack fullstack',
      "intro.line6": '<span class="prompt">neptune@boot~$</span> liberando relay de contato',
      "intro.line7": '<span class="prompt">neptune@boot~$</span> processo concluido',
      "nav.home": "inicio",
      "nav.systems": "sistemas",
      "nav.projects": "projetos",
      "nav.proof": "provas",
      "nav.contact": "contato",
      "topbar.language": "idioma",
      "topbar.profile": "sobre mim",
      "topbar.online": "online",
      "hero.kicker": "Sessao Raiz",
      "hero.badge": "Fullstack / IA / Sistemas",
      "hero.title": "Eu construo sites, sistemas e ferramentas de IA;",
      "hero.text": "Eu trabalho com APIs, dashboards, automacoes, ferramentas internas e sistemas de jogos. O objetivo e simples: construir algo util e fazer funcionar bem.",
      "hero.primaryCta": "ver projetos",
      "hero.secondaryCta": "abrir contato",
      "hero.typed": "desenvolvedor fullstack / ferramentas de ia / automacoes / sistemas de jogos",
      "identity.label": "Mapa de Identidade",
      "identity.codenameLabel": "codinome",
      "identity.roleLabel": "cargo",
      "identity.roleValue": "Engenheiro Fullstack e Engenheiro de IA",
      "identity.focusLabel": "foco",
      "identity.focusValue": "Sites, APIs, automacoes, dashboards e sistemas de jogos",
      "identity.styleLabel": "estilo",
      "identity.styleValue": "Simples, limpo e feito para funcionar",
      "metrics.label": "Metricas ao Vivo",
      "metrics.builds": "projetos em destaque",
      "metrics.technologies": "tecnologias listadas",
      "metrics.certificates": "certificados exibidos",
      "metrics.signal": "sinal ativo",
      "about.label": "Sobre",
      "about.title": "Eu transformo ideias em produtos e ferramentas funcionais;",
      "about.body1": "Este portfolio inclui sites, APIs, dashboards, ferramentas de IA, automacoes e sistemas Roblox. Projetos diferentes, mesmo foco: tornar util, estavel e facil de usar.",
      "about.body2": "Eu me importo com estrutura limpa, fluxo claro e com a forma como o sistema se comporta quando as pessoas comecam a usar de verdade.",
      "rates.longLabel": "Longo Prazo",
      "rates.longText": "Ideal para sistemas continuos, iteracao constante e escopos tecnicos maiores.",
      "rates.shortLabel": "Curto Prazo",
      "rates.shortText": "Melhor para prazos apertados, correcoes urgentes e implementacao focada em alta velocidade.",
      "stack.label": "Habilidades",
      "stack.title": "Stacks Tecnicas;",
      "projects.label": "Projetos Indexados",
      "projects.title": "Alguns dos projetos em que trabalhei;",
      "viewer.label": "Exibicao do Projeto",
      "viewer.play": "play",
      "viewer.pause": "pausar",
      "viewer.fullscreen": "tela cheia",
      "viewer.exitFullscreen": "sair da tela cheia",
      "viewer.close": "fechar",
      "viewer.playAria": "Reproduzir video de {title}",
      "viewer.pauseAria": "Pausar video",
      "viewer.playToggleAria": "Reproduzir video",
      "viewer.fullscreenAria": "Entrar em tela cheia",
      "viewer.exitFullscreenAria": "Sair da tela cheia",
      "proof.label": "Depoimentos",
      "proof.title": "O que clientes disseram;",
      "proof.featured": "Destaque",
      "proof.client": "Cliente",
      "proof.partner": "Parceiro",
      "testimonials.sonder": '"Neptune e um desenvolvedor muito proficiente e confiavel. O scripting dele teve alta qualidade e foi feito no prazo. Ele foi muito respeitoso e compreensivo, mantendo a gente atualizado ate chegar no objetivo."',
      "testimonials.kartz": '"Neptune entregou um sistema absurdamente polido, rapido e extremamente bem estruturado."',
      "testimonials.rodevs1": '"Entregou as linhas de codigo que eu precisava rapidamente e por um preco razoavel. Na comunicacao ele foi muito bem, amigavel e facil de conversar. Recomendo para outros."',
      "testimonials.raijin": '"Muito bom trabalho, fez tudo bem rapido mesmo sem estar no setup principal."',
      "testimonials.society": '"Muito bom, rapido e claro mesmo sem estar no setup principal de trabalho. Eu recomendaria para novos clientes."',
      "testimonials.rodevs2": '"Esse scripter e muito rapido para concluir tarefas, mas o custo-beneficio nao funciona tanto para mim. No geral 9/10."',
      "testimonials.rodevs3": '"Ele trabalha muito rapido e responde de forma rapida e profissional."',
      "testimonials.rodevs4": '"Esse cara realmente me ajudou muito e e um scripter incrivel. Eu realmente recomendo fazer trabalhos com ele!"',
      "certificates.label": "Certificados",
      "certificates.title": "Cursos e certificados;",
      "certificates.harvard": "Ciencia da Computacao - Harvard",
      "certificates.phub": "Hacking Etico - Programming Hub",
      "certificates.emprestact": "EmprestaCT - Projeto de Extensao da UFPB",
      "contact.label": "Contato",
      "contact.title": "Precisa de um site, sistema ou ferramenta de IA?",
      "contact.text": "Mande a ideia e o escopo. Se fizer sentido, a gente pode trabalhar nisso.",
      "contact.typed": "resposta :: verificando novos projetos",
      "contact.github": "GitHub",
      "contact.website": "Site",
      "contact.discord": "Servidor do Discord",
      "footer.copy": "© Neptune | 2026",
      "language.label": "Idioma",
      "language.title": "Escolha seu idioma",
      "language.text": "Escolha como voce quer navegar no site.",
      "profile.close": "fechar",
      "profile.label": "Informacoes Pessoais",
      "profile.title": "Sobre mim",
      "profile.nameLabel": "Nome",
      "profile.emailLabel": "Email para contato",
      "profile.ageLabel": "Idade",
      "profile.studyLabel": "Cursando",
      "profile.studyValue": "Ciencias da Computacao",
      "profile.languagesLabel": "Linguas que eu falo",
      "profile.languagePortuguese": "Portugues: Nativo",
      "profile.languageEnglish": "Ingles: Fluente",
      "profile.languageFrench": "Frances: Basico para intermediario"
    },
    projects: {
      emprestact: {
        title: "EmprestaCT",
        description: "Plataforma de gerenciamento de emprestimo de equipamentos criada em um projeto de extensao para a Universidade Federal da Paraiba (UFPB), pensada para organizar solicitacoes internas, emprestimos, aprovacoes e devolucoes dentro da instituicao.",
        meta: ["destaque", "universidade", "extensao", "ufpb", "gestao"]
      },
      rocketleagueAI: {
        title: "Agente de IA para Rocket League",
        description: "Uma solucao de IA para Rocket League focada em comportamento avancado de bots, simulacao de partidas, logica de decisao e cenarios controlados de teste para treinar e avaliar desempenho.",
        meta: ["destaque", "engenharia de ia", "ia", "python", "nepops"]
      },
      resgatepet: {
        title: "Resgate Pet",
        description: "Site de resgate de animais feito com tecnologias modernas para simplificar o processo de adocao, conectando abrigos, ONGs e adotantes com filtros, listagens e contato direto.",
        meta: ["impacto social", "site", "python", "api", "django"]
      },
      ollama: {
        title: "Agente NepAI",
        description: "Agente de IA customizado com Python e Ollama, feito para fornecer respostas inteligentes e executar tarefas especificas com base na entrada do usuario em maquina local.",
        meta: ["engenharia de ia", "llm", "python"]
      },
      website: {
        title: "Portfolio do Neptune",
        description: "Um portfolio customizado com interface orientada a sistema, motion em camadas e posicionamento intencional, feito para apresentar meu trabalho de forma marcante e nada generica.",
        meta: ["destaque", "portfolio"]
      },
      animefighting: {
        title: "Anime Fighting Simulator",
        description: "Sistema de treino de habilidades para Anime Fighting Simulator, projetado para sustentar progresso, crescimento de status, acoes repetidas e feedback mais fluido no gameplay.",
        meta: ["sistema de jogo", "lua", "rojo"]
      },
      hatchmerge: {
        title: "Hatch and Merge Brainrots",
        description: "Jogo estilo cashgrab totalmente scriptado por mim, estruturado com sistemas leves, iteracao rapida e baixo uso de memoria, mantendo o loop de recompensa responsivo.",
        meta: ["sistema de jogo", "lua"]
      },
      tickets: {
        title: "Servico de Tickets",
        description: "Servico de tickets feito com Python e comunicacao em JSON, incluindo paineis separados para cliente e administrador para organizar melhor pedidos, respostas e o fluxo de suporte.",
        meta: ["plataforma de suporte", "python", "poo", "django"]
      },
      cripto: {
        title: "Calculadora Online de Cripto",
        description: "Calculadora online de criptomoedas usando a API Gecko para fornecer dados atualizados em tempo real, com metodos GET e POST para conversao e fluxos utilitarios.",
        meta: ["dados em tempo real", "utilitario", "python", "flask", "site"]
      },
      combat: {
        title: "Sistema de Combate",
        description: "Sistema de combate baseado em parry para jogos battleground, usando stacks modernas como BridgeNet2 e Leif DataStore para fluxo responsivo em PvP e PvE.",
        meta: ["sistema de jogo", "lua", "pvp e pve"]
      },
      djangoapi: {
        title: "Dashboard de Cripto",
        description: "API RESTful feita com Django para integracao limpa com aplicacoes frontend modernas, expondo dados estruturados e endpoints confiaveis para dashboards e produtos.",
        meta: ["api", "django", "python", "rest", "postgres", "site"]
      },
      morph: {
        title: "Sistema de Morph (Armadura + Espada)",
        description: "Sistema completo de morph com armadura, animacoes, espada e efeitos sonoros, organizado com estrutura modular e codigo limpo para ser construido rapido sem virar bagunca.",
        meta: ["roblox", "sistema de jogo", "luau", "lua", "fullstack"]
      }
    }
  },
  fr: {
    strings: {
      "meta.title": "Neptune | Developpeur",
      "meta.description": "Developpeur fullstack et ingenieur IA",
      "intro.line1": '<span class="prompt">neptune@boot~$</span> initialisation de l intro visuelle',
      "intro.line2": '<span class="prompt">neptune@boot~$</span> preparation des couches de l interface...',
      "intro.line3": '<span class="prompt">neptune@boot~$</span> synchronisation des cas produit',
      "intro.line4": '<span class="prompt">neptune@boot~$</span> routage des videos',
      "intro.line5": '<span class="prompt">neptune@boot~$</span> montage de la stack fullstack',
      "intro.line6": '<span class="prompt">neptune@boot~$</span> ouverture du relais de contact',
      "intro.line7": '<span class="prompt">neptune@boot~$</span> processus termine',
      "nav.home": "accueil",
      "nav.systems": "systemes",
      "nav.projects": "projets",
      "nav.proof": "preuves",
      "nav.contact": "contact",
      "topbar.language": "langue",
      "topbar.profile": "a propos de moi",
      "topbar.online": "en ligne",
      "hero.kicker": "Session Racine",
      "hero.badge": "Fullstack / IA / Systemes",
      "hero.title": "Je construis des sites, des systemes et des outils IA;",
      "hero.text": "Je travaille sur des API, des dashboards, des automatisations, des outils internes et des systemes de jeu. L objectif est simple: construire quelque chose d utile et le faire tourner proprement.",
      "hero.primaryCta": "voir les projets",
      "hero.secondaryCta": "ouvrir le contact",
      "hero.typed": "developpeur fullstack / outils ia / automatisations / systemes de jeux",
      "identity.label": "Carte d Identite",
      "identity.codenameLabel": "nom de code",
      "identity.roleLabel": "role",
      "identity.roleValue": "Ingenieur Fullstack et Ingenieur IA",
      "identity.focusLabel": "focus",
      "identity.focusValue": "Sites, API, automatisations, dashboards et systemes de jeux",
      "identity.styleLabel": "style",
      "identity.styleValue": "Simple, propre et fait pour fonctionner",
      "metrics.label": "Metriques en Direct",
      "metrics.builds": "projets en avant",
      "metrics.technologies": "technologies listees",
      "metrics.certificates": "certificats affiches",
      "metrics.signal": "signal actif",
      "about.label": "A propos",
      "about.title": "Je transforme des idees en produits et outils fonctionnels;",
      "about.body1": "Ce portfolio comprend des sites, des API, des dashboards, des outils IA, des automatisations et des systemes Roblox. Des projets differents, mais le meme objectif: utile, stable et simple a utiliser.",
      "about.body2": "Je fais attention a la structure, au flux et a la facon dont le systeme se comporte quand les gens commencent vraiment a l utiliser.",
      "rates.longLabel": "Long Terme",
      "rates.longText": "Ideal pour les systemes continus, l iteration permanente et les scopes techniques plus larges.",
      "rates.shortLabel": "Court Terme",
      "rates.shortText": "Mieux pour les delais serres, les corrections urgentes et l implementation rapide.",
      "stack.label": "Competences",
      "stack.title": "Stacks Techniques;",
      "projects.label": "Projets Indexes",
      "projects.title": "Quelques projets sur lesquels j ai travaille;",
      "viewer.label": "Lecture du Projet",
      "viewer.play": "lecture",
      "viewer.pause": "pause",
      "viewer.fullscreen": "plein ecran",
      "viewer.exitFullscreen": "quitter plein ecran",
      "viewer.close": "fermer",
      "viewer.playAria": "Lire la video de {title}",
      "viewer.pauseAria": "Mettre la video en pause",
      "viewer.playToggleAria": "Lire la video",
      "viewer.fullscreenAria": "Entrer en plein ecran",
      "viewer.exitFullscreenAria": "Quitter le plein ecran",
      "proof.label": "Temoignages",
      "proof.title": "Ce que les clients ont dit;",
      "proof.featured": "Mis en avant",
      "proof.client": "Client",
      "proof.partner": "Partenaire",
      "testimonials.sonder": '"Neptune est un developpeur tres competent et fiable. Son scripting etait de haute qualite et livre rapidement. Il a ete respectueux et nous a tenus informes jusqu au resultat final."',
      "testimonials.kartz": '"Neptune a livre un systeme incroyablement poli, rapide et extremement bien structure."',
      "testimonials.rodevs1": '"Il a livre les lignes de code dont j avais besoin rapidement et a un prix raisonnable. Sa communication etait tres bonne, amicale et facile. Je le recommande."',
      "testimonials.raijin": '"Tres bon travail, realise assez vite meme sans son setup principal."',
      "testimonials.society": '"Tres bon, rapide et clair meme sans son setup principal. Je le recommanderais a de nouveaux clients."',
      "testimonials.rodevs2": '"Ce scripter est tres rapide pour terminer les taches, mais le rapport qualite prix ne me convient pas vraiment. Globalement 9/10."',
      "testimonials.rodevs3": '"Il travaille tres vite et repond vite avec professionnalisme."',
      "testimonials.rodevs4": '"Ce gars m a beaucoup aide et c est un scripter genial. Je recommande vraiment de travailler avec lui!"',
      "certificates.label": "Certificats",
      "certificates.title": "Cours et certificats;",
      "certificates.harvard": "Informatique - Harvard",
      "certificates.phub": "Hacking Ethique - Programming Hub",
      "certificates.emprestact": "EmprestaCT - Projet d extension de l UFPB",
      "contact.label": "Contact",
      "contact.title": "Besoin d un site, d un systeme ou d un outil IA?",
      "contact.text": "Envoyez l idee et le scope. Si cela a du sens, on peut travailler dessus.",
      "contact.typed": "reponse :: verification de nouveaux projets",
      "contact.github": "GitHub",
      "contact.website": "Site",
      "contact.discord": "Serveur Discord",
      "footer.copy": "© Neptune | 2026",
      "language.label": "Langue",
      "language.title": "Choisissez votre langue",
      "language.text": "Choisissez comment vous voulez parcourir le site.",
      "profile.close": "fermer",
      "profile.label": "Informations Personnelles",
      "profile.title": "A propos de moi",
      "profile.nameLabel": "Nom",
      "profile.emailLabel": "Email de contact",
      "profile.ageLabel": "Age",
      "profile.studyLabel": "Etudes",
      "profile.studyValue": "Informatique",
      "profile.languagesLabel": "Langues que je parle",
      "profile.languagePortuguese": "Portugais: Natif",
      "profile.languageEnglish": "Anglais: Courant",
      "profile.languageFrench": "Francais: Niveau basique a intermediaire"
    },
    projects: {
      emprestact: {
        title: "EmprestaCT",
        description: "Plateforme de gestion de pret d equipements creee dans un projet d extension pour l Universite Federale de Paraiba (UFPB), concue pour organiser les demandes internes, les prets, les validations et les retours.",
        meta: ["mis en avant", "universite", "projet d extension", "ufpb", "gestion"]
      },
      rocketleagueAI: {
        title: "Agent IA Rocket League",
        description: "Solution IA pour Rocket League axee sur le comportement avance des bots, la simulation de matchs, la logique de decision et des scenarios de test controles pour l entrainement.",
        meta: ["mis en avant", "ingenierie ia", "ia", "python", "nepops"]
      },
      resgatepet: {
        title: "Resgate Pet",
        description: "Site de sauvetage d animaux construit avec des technologies modernes pour simplifier l adoption en reliant refuges, ONG et adoptants avec filtres, annonces et contact direct.",
        meta: ["impact social", "site", "python", "api", "django"]
      },
      ollama: {
        title: "Agent NepAI",
        description: "Agent IA personnalise construit avec Python et Ollama pour fournir des reponses intelligentes et executer des taches specifiques sur machine locale.",
        meta: ["ingenierie ia", "llm", "python"]
      },
      website: {
        title: "Portfolio de Neptune",
        description: "Portfolio personnalise avec interface inspiree d un systeme, motion en couches et positionnement intentionnel pour presenter mon travail de facon memorables et non generique.",
        meta: ["mis en avant", "portfolio"]
      },
      animefighting: {
        title: "Anime Fighting Simulator",
        description: "Systeme d entrainement de competences pour Anime Fighting Simulator, pense pour soutenir la progression, la croissance des stats et un meilleur retour de gameplay.",
        meta: ["systeme de jeu", "lua", "rojo"]
      },
      hatchmerge: {
        title: "Hatch and Merge Brainrots",
        description: "Jeu de type cashgrab entierement scripté par moi, structure avec des systemes legers, une iteration rapide et une faible consommation memoire tout en gardant une boucle de recompense reactive.",
        meta: ["systeme de jeu", "lua"]
      },
      tickets: {
        title: "Service de Tickets",
        description: "Service de tickets construit avec Python et une communication basee sur JSON, avec panneaux separes client et admin pour mieux organiser le support.",
        meta: ["plateforme de support", "python", "poo", "django"]
      },
      cripto: {
        title: "Calculateur Crypto en Ligne",
        description: "Calculateur de cryptomonnaies en ligne utilisant l API Gecko pour fournir des donnees en temps reel, avec des methodes GET et POST pour les conversions.",
        meta: ["donnees temps reel", "outil", "python", "flask", "site"]
      },
      combat: {
        title: "Systeme de Combat",
        description: "Systeme de combat base sur le parry pour les jeux battleground, utilisant des stacks modernes comme BridgeNet2 et Leif DataStore pour un flux PvP et PvE reactif.",
        meta: ["systeme de jeu", "lua", "pvp et pve"]
      },
      djangoapi: {
        title: "Dashboard Crypto",
        description: "API RESTful construite avec Django pour une integration propre avec des applications frontend modernes, exposant des donnees structurees et des endpoints fiables.",
        meta: ["api", "django", "python", "rest", "postgres", "site"]
      },
      morph: {
        title: "Systeme de Morph (Armure + Epee)",
        description: "Systeme complet de morph avec armure, animations, gestion de l epee et effets sonores, organise avec une structure modulaire et un code propre pour une construction rapide.",
        meta: ["roblox", "systeme de jeu", "luau", "lua", "fullstack"]
      }
    }
  }
};

const currentLanguage = {
  value: localStorage.getItem(LANGUAGE_STORAGE_KEY) || DEFAULT_LANGUAGE,
};

const canvas = document.createElement("canvas");
canvas.className = "starfield";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
let width = 0;
let height = 0;
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let activeProjectButton = null;
let currentProjectKey = null;
let languageChoicePending = !localStorage.getItem(LANGUAGE_STORAGE_KEY);
let lastModalTrigger = null;

const stars = Array.from({ length: 135 }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  radius: Math.random() * 1.7 + 0.4,
  speedX: (Math.random() - 0.5) * 0.18,
  speedY: (Math.random() - 0.5) * 0.18,
  opacity: Math.random() * 0.7 + 0.18,
}));

const toggle = document.querySelector(".nav-toggle");
const navLinks = [...document.querySelectorAll(".top-nav a")];
const revealItems = document.querySelectorAll(".reveal");
const trackedSections = [...document.querySelectorAll("main section[id]")];
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
const languageModal = document.querySelector("#language-modal");
const profileModal = document.querySelector("#profile-modal");
const languageOpenButton = document.querySelector("#language-open");
const profileOpenButton = document.querySelector("#profile-open");
const languageButtons = [...document.querySelectorAll("[data-language-choice]")];
const modalCloseButtons = [...document.querySelectorAll("[data-modal-close]")];
const modalDialogs = [...document.querySelectorAll(".overlay-dialog")];
const ogDescription = document.querySelector('meta[property="og:description"]');
const pageDescription = document.querySelector('meta[name="description"]');

const projectSources = new Map(
  projectCards.map((card) => [card.dataset.project, card.querySelector("video")?.getAttribute("src") || ""])
);

function getLocale() {
  return content[currentLanguage.value] || content[DEFAULT_LANGUAGE];
}

function translateString(key) {
  return getLocale().strings[key] || content[DEFAULT_LANGUAGE].strings[key] || "";
}

function templateString(key, values = {}) {
  return translateString(key).replace(/\{(\w+)\}/g, (_, token) => values[token] ?? "");
}

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

function updateBodyLock() {
  const hasOverlayModal = [...document.querySelectorAll(".overlay-modal")].some((modal) => !modal.hidden);
  const viewerOpen = projectViewer && !projectViewer.hidden;
  document.body.classList.toggle("viewer-open", Boolean(viewerOpen || hasOverlayModal));
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  if (modalId === "language-modal" && languageChoicePending) return;

  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  updateBodyLock();
  if (lastModalTrigger instanceof HTMLElement) {
    lastModalTrigger.focus();
  }
}

function openModal(modalId, triggerButton = null) {
  const modal = document.getElementById(modalId);
  const dialog = modal?.querySelector(".overlay-dialog");
  if (!modal || !dialog) return;

  if (triggerButton) {
    lastModalTrigger = triggerButton;
  }

  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  updateBodyLock();
  window.setTimeout(() => dialog.focus(), 30);
}

function syncPlayerToggleLabel() {
  if (!projectPlayerToggle || !projectViewerVideo) return;
  const paused = projectViewerVideo.paused || projectViewerVideo.ended;
  projectPlayerToggle.textContent = paused ? translateString("viewer.play") : translateString("viewer.pause");
  projectPlayerToggle.setAttribute(
    "aria-label",
    paused ? translateString("viewer.playToggleAria") : translateString("viewer.pauseAria")
  );
}

function syncFullscreenLabel() {
  if (!projectPlayerFullscreen || !projectViewerDialog) return;
  const isFullscreen = document.fullscreenElement === projectViewerDialog;
  projectPlayerFullscreen.textContent = isFullscreen
    ? translateString("viewer.exitFullscreen")
    : translateString("viewer.fullscreen");
  projectPlayerFullscreen.setAttribute(
    "aria-label",
    isFullscreen ? translateString("viewer.exitFullscreenAria") : translateString("viewer.fullscreenAria")
  );
}

function renderProjectViewer(projectKey, resetTime = false) {
  const project = getLocale().projects[projectKey];
  const source = projectSources.get(projectKey);
  if (!project || !source || !projectViewerTitle || !projectViewerDescription || !projectViewerMeta || !projectViewerVideo) {
    return;
  }

  projectViewerTitle.textContent = project.title;
  projectViewerDescription.textContent = project.description;
  projectViewerMeta.replaceChildren();
  project.meta.forEach((tag) => {
    const badge = document.createElement("span");
    badge.textContent = tag;
    projectViewerMeta.appendChild(badge);
  });

  if (projectViewerVideo.getAttribute("src") !== source) {
    projectViewerVideo.src = source;
  }

  if (resetTime) {
    projectViewerVideo.currentTime = 0;
    projectPlayerProgress.value = "0";
  }
}

function openProjectViewer(card, triggerButton) {
  const projectKey = card.dataset.project;
  if (!projectKey || !projectViewer || !projectViewerDialog) return;

  currentProjectKey = projectKey;
  activeProjectButton = triggerButton;
  renderProjectViewer(projectKey, true);
  projectViewer.hidden = false;
  projectViewer.setAttribute("aria-hidden", "false");
  updateBodyLock();
  syncFullscreenLabel();
  projectViewerVideo.play().catch(() => {
    syncPlayerToggleLabel();
  });
  syncPlayerToggleLabel();
  window.setTimeout(() => projectViewerDialog.focus(), 30);
}

function closeProjectViewer() {
  if (!projectViewer || !projectViewerVideo) return;

  if (document.fullscreenElement === projectViewerDialog) {
    document.exitFullscreen().catch(() => {});
  }

  projectViewer.hidden = true;
  projectViewer.setAttribute("aria-hidden", "true");
  projectViewerVideo.pause();
  projectViewerVideo.removeAttribute("src");
  projectViewerVideo.load();
  currentProjectKey = null;
  projectPlayerProgress.value = "0";
  syncPlayerToggleLabel();
  syncFullscreenLabel();
  updateBodyLock();
  activeProjectButton?.focus();
}

function renderProjects() {
  const localeProjects = getLocale().projects;

  projectCards.forEach((card) => {
    const projectKey = card.dataset.project;
    const project = localeProjects[projectKey];
    const titleNode = card.querySelector("h3");
    const descriptionNode = card.querySelector("p");
    const metaNode = card.querySelector(".project-meta");
    const playButton = card.querySelector(".project-play-button");
    const playLabel = playButton?.querySelector("span");

    if (!project || !titleNode || !descriptionNode || !metaNode || !playButton || !playLabel) return;

    titleNode.textContent = project.title;
    descriptionNode.textContent = project.description;
    metaNode.replaceChildren();
    project.meta.forEach((tag) => {
      const badge = document.createElement("span");
      badge.textContent = tag;
      metaNode.appendChild(badge);
    });
    playLabel.textContent = translateString("viewer.play");
    playButton.setAttribute("aria-label", templateString("viewer.playAria", { title: project.title }));
  });
}

function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = translateString(key);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.getAttribute("data-i18n-html");
    node.innerHTML = translateString(key);
  });
}

function syncLanguageButtons() {
  languageButtons.forEach((button) => {
    const selected = button.dataset.languageChoice === currentLanguage.value;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function applyTranslations() {
  applyStaticTranslations();
  renderProjects();
  syncLanguageButtons();
  syncPlayerToggleLabel();
  syncFullscreenLabel();

  document.querySelector(".project-viewer-close")?.setAttribute("aria-label", translateString("viewer.close"));
  document.querySelector(".overlay-close")?.setAttribute("aria-label", translateString("profile.close"));
  projectPlayerProgress?.setAttribute("aria-label", translateString("viewer.label"));

  if (currentProjectKey) {
    renderProjectViewer(currentProjectKey, false);
  }

  document.title = translateString("meta.title");
  root.lang = currentLanguage.value;
  if (pageDescription) {
    pageDescription.setAttribute("content", translateString("meta.description"));
  }
  if (ogDescription) {
    ogDescription.setAttribute("content", translateString("meta.description"));
  }
}

function setLanguage(languageCode) {
  currentLanguage.value = content[languageCode] ? languageCode : DEFAULT_LANGUAGE;
  localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage.value);
  languageChoicePending = false;
  applyTranslations();
}

resizeCanvas();
drawStarfield();
updateMousePosition(mouseX, mouseY);
applyTranslations();

window.setTimeout(() => {
  document.body.classList.remove("is-loading");
  document.body.classList.add("intro-complete");
  if (languageChoicePending) {
    openModal("language-modal");
  }
}, INTRO_DURATION_MS);

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

languageOpenButton?.addEventListener("click", () => {
  openModal("language-modal", languageOpenButton);
});

profileOpenButton?.addEventListener("click", () => {
  openModal("profile-modal", profileOpenButton);
});

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal-close");
    if (modalId) {
      closeModal(modalId);
    }
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const languageCode = button.dataset.languageChoice;
    setLanguage(languageCode);
    closeModal("language-modal");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  if (projectViewer && !projectViewer.hidden) {
    closeProjectViewer();
    return;
  }

  if (profileModal && !profileModal.hidden) {
    closeModal("profile-modal");
    return;
  }

  if (languageModal && !languageModal.hidden && !languageChoicePending) {
    closeModal("language-modal");
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
