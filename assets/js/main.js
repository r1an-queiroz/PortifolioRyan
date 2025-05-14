document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("particles-js2")) {
    particlesJS("particles-js2", {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: { value: "#8e44ad" },
        shape: { type: "circle" },
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
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: { opacity: 1 }
          },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }
});




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



// Função para criar formas roxas paradas
const createStationaryPurpleShapes = () => {
  // Cria um container para as formas paradas
  const container = document.createElement('div');
  container.id = 'purple-objects-container';
  document.body.appendChild(container);
  

  // Define a quantidade de formas que deseja criar
  const shapeCount = 5;
  
  for (let i = 0; i < shapeCount; i++) {
    const shape = document.createElement('div');
    shape.classList.add('purple-shape');
    // Posicionamento aleatório dentro da tela
    shape.style.left = Math.random() * 100 + '%';
    shape.style.top = Math.random() * 100 + '%';
    container.appendChild(shape);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Chama a função para criar as formas roxas paradas
  createStationaryPurpleShapes();
  
  // ... o restante do seu código de inicialização ...
});

// Cria objetos roxos animados
const createMovingPurpleObjects = () => {
  // Cria um container para os objetos (opcional)
  const container = document.createElement('div');
  container.id = 'purple-objects-container';
  // Permite que os objetos não interfiram na interação do usuário
  container.style.pointerEvents = 'none';
  document.body.appendChild(container);

  // Quantidade de objetos a criar
  const objectCount = 10;
  
  for (let i = 0; i < objectCount; i++) {
    const obj = document.createElement('div');
    obj.classList.add('purple-object');
    // Posicionamento inicial aleatório
    obj.style.left = Math.random() * 100 + '%';
    obj.style.top = Math.random() * 100 + '%';
    container.appendChild(obj);
    
    // Animação com GSAP: movimento aleatório contínuo com efeito "yoyo"
    gsap.to(obj, {
      x: Math.random() * 200 - 100,  // deslocamento aleatório horizontal
      y: Math.random() * 200 - 100,  // deslocamento aleatório vertical
      duration: 4 + Math.random() * 2, // duração entre 4 e 6 segundos
      repeat: -1,                  // repete infinitamente
      yoyo: true,                  // volta ao ponto inicial
      ease: "sine.inOut"
    });
  }
};




// Chama a função para criar e animar os objetos roxos
createMovingPurpleObjects();



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


function createGradientBubbles() {
  const bubbleContainer = document.createElement("div");
  bubbleContainer.id = "light-mode-bubbles";
  document.body.appendChild(bubbleContainer);

  for (let i = 0; i < 10; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.top = `${Math.random() * 100}%`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubbleContainer.appendChild(bubble);
  }
}

// Cria bolhas somente se o modo claro for ativado
if (document.body.classList.contains("light-mode")) {
  createGradientBubbles();
}

