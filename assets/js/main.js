particlesJS("particles-js2", {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: "#8e44ad" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#8e44ad",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

  
  // Navegação suave para links do menu
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      navLinks.forEach(item => item.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Typed.js e ScrollTrigger
  const typedOptions = {
    strings: ["Desenvolvedor", "Criativo", "Transformador"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true,
    backDelay: 2000
  };
  new Typed("#typed-text", typedOptions);

  gsap.utils.toArray('.reveal').forEach(elem => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top 80%"
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out"
    });
  });

  // Botão "Voltar ao topo"
  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = "↑";
  backToTopButton.id = "back-to-top";
  document.body.appendChild(backToTopButton);

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const scrollThreshold = 300;
  const toggleBackToTop = () => {
    backToTopButton.style.display = window.scrollY > scrollThreshold ? "block" : "none";
    requestAnimationFrame(toggleBackToTop);
  };
  requestAnimationFrame(toggleBackToTop);

  // Toggle de modo claro/escuro
  const modeToggle = document.createElement('button');
  modeToggle.textContent = "Modo Claro";
  modeToggle.id = "mode-toggle";
  document.body.appendChild(modeToggle);

  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    modeToggle.textContent = document.body.classList.contains("light-mode") ? "Modo Escuro" : "Modo Claro";

    // Atualiza cor das partículas se quiser alterar no modo claro (opcional)
    const newColor = "#8e44ad";
    if (window.pJSDom && window.pJSDom[0]) {
      window.pJSDom[0].pJS.particles.line_linked.color = newColor;
      window.pJSDom[0].pJS.particles.color.value = newColor;
      window.pJSDom[0].pJS.fn.particlesRefresh();
    }
  });

  const btnVerMais = document.getElementById('ver-mais-btn');
  const extras = document.querySelectorAll('.extra-project');
  
  btnVerMais.addEventListener('click', () => {
    const isShown = extras[0].classList.contains('show');
  
    extras.forEach(proj => {
      if (isShown) {
        proj.classList.remove('show');
      } else {
        proj.classList.add('show');
      }
    });
  
    btnVerMais.textContent = isShown ? 'Ver mais' : 'Ver menos';
  });
  
  
  const projetosCustomizados = [
    {
      nome: "",
      descricao: "",
      imagem: "",
      link: ""
    },
    {
      nome: "",
      descricao: "",
      imagem: "",
      link: ""
    }
  ];
  
  function carregarProjetosCustomizados() {
    const container = document.getElementById("github-projects");
  
    projetosCustomizados.forEach(proj => {
      const card = document.createElement("div");
      card.classList.add("project-card");
  
      card.innerHTML = `
        <img src="${proj.imagem}" alt="${proj.nome}" class="project-image" />
        <h3>${proj.nome}</h3>
        <p>${proj.descricao}</p>
        <a href="${proj.link}" class="btn" target="_blank">Ver Projeto</a>
      `;
  
      container.appendChild(card);
    });
  }
  
  carregarProjetosCustomizados();
  
  
  
  
