document.addEventListener("DOMContentLoaded", () => {
  // Efeito Typed.js no título principal
  const typedOptions = {
    strings: ["Desenvolvedor", "Criativo", "Transformador"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true,
    backDelay: 2000
  };
  new Typed("#typed-text", typedOptions);

  // Navegação suave para links do menu
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
      // Atualiza a classe "active" no menu
      navLinks.forEach(item => item.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Animação de revelação com GSAP e ScrollTrigger
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

  // Botão "Voltar ao Topo"
  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = "↑";
  backToTopButton.id = "back-to-top";
  document.body.appendChild(backToTopButton);

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Exibe o botão de acordo com a posição do scroll (usando requestAnimationFrame para melhor performance)
  const scrollThreshold = 300;
  const toggleBackToTop = () => {
    backToTopButton.style.display = window.scrollY > scrollThreshold ? "block" : "none";
    requestAnimationFrame(toggleBackToTop);
  };
  requestAnimationFrame(toggleBackToTop);

  // Toggle de Modo Claro/Escuro
  const modeToggle = document.createElement('button');
  modeToggle.textContent = "Modo Claro";
  modeToggle.id = "mode-toggle";
  document.body.appendChild(modeToggle);

  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    modeToggle.textContent = document.body.classList.contains("light-mode") ? "Modo Escuro" : "Modo Claro";
  });

  // Inicialização do Particles.js se o elemento existir
  if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#8e44ad"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.5,
          random: true
        },
        size: {
          value: 3,
          random: true
        },
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
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }
});
