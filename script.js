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
  