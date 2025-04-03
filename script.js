document.getElementById("startButton")?.addEventListener("click", function() {
    alert("Você começou a ganhar agora!");
  });
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.3
  });
  
  document.querySelectorAll('.scroll-fade-left, .scroll-fade-right, .scroll-fade-up').forEach(el => {
    observer.observe(el);
  });
  
  console.log('Script carregado e observando elementos de scroll...');
  
  function animatePercentage(target, duration) {
    const el = document.getElementById("progress-num");
    let start = 0;
    const stepTime = Math.floor(duration / target);
  
    const counter = setInterval(() => {
      start++;
      el.textContent = `${start}%`;
      if (start >= target) clearInterval(counter);
    }, stepTime);
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    animatePercentage(54, 2000); // 2 segundos até 54%
  });
  

  const wrapper = document.querySelector('.slider-wrapper');
const dots = document.querySelectorAll('.slider-dot');

let currentIndex = 0; // Slide atual
const totalSlides = dots.length;

// Função para atualizar o slide
function goToSlide(index) {
  wrapper.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(d => d.classList.remove('active'));
  dots[index].classList.add('active');
}

// Inicia mostrando o primeiro slide
goToSlide(currentIndex);

// Troca automática de slide a cada 6 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  goToSlide(currentIndex);
}, 6000); // 6000ms = 6 segundos

// Permite clique nos dots também
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    goToSlide(currentIndex);
  });
});


const observerEstudos = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.scroll-slide-left').forEach(el => {
  observerEstudos.observe(el);
});
