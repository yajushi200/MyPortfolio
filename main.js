const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
}); 

// Select the heading element
const myHeading = document.getElementById('myHeading');

// Function to add fade-in animation
function fadeIn(element) {
  let opacity = 0;
  const interval = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(interval);
    }
  }, 100);
}

// Call the fadeIn function when the page loads
/* window.addEventListener('load', () => {
  fadeIn(myHeading);
});
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        spans.forEach((span, index) => {
            const percentage = percentages[index];
            if (entry.isIntersecting) {
                span.classList.add('animate');
                percentage.classList.add('animate');
            } else {
                span.classList.remove('animate');
                percentage.classList.remove('animate');
            }
        });
    });
}); */

// ── Intro splash: particle network + typewriter + split-screen exit ──
(function () {
  var screen   = document.getElementById('intro-screen');
  var typedEl  = document.getElementById('intro-typed');
  var subEl    = document.querySelector('.intro-sub');
  var canvas   = document.getElementById('intro-particles');
  var ctx      = canvas.getContext('2d');
  var NAME     = 'Yajushi Garg';
  var PCOUNT   = 65;
  var LINK_DIST = 130;
  var particles = [];
  var rafId;

  function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function makeParticle() {
    return {
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      r:     Math.random() * 1.8 + 0.4,
      dx:    (Math.random() - 0.5) * 0.45,
      dy:    (Math.random() - 0.5) * 0.45,
      alpha: Math.random() * 0.45 + 0.2,
      teal:  Math.random() > 0.45
    };
  }

  for (var i = 0; i < PCOUNT; i++) particles.push(makeParticle());

  function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connecting lines first (below dots)
    for (var a = 0; a < particles.length; a++) {
      for (var b = a + 1; b < particles.length; b++) {
        var dx = particles[a].x - particles[b].x;
        var dy = particles[a].y - particles[b].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.strokeStyle = 'rgba(53,169,156,' + (0.18 * (1 - dist / LINK_DIST)).toFixed(3) + ')';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // Draw dots
    particles.forEach(function (p) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.teal
        ? 'rgba(53,169,156,' + p.alpha + ')'
        : 'rgba(130,160,255,' + p.alpha + ')';
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    rafId = requestAnimationFrame(drawFrame);
  }
  drawFrame();

  // Typewriter
  var charIndex = 0;
  function typeNext() {
    if (charIndex < NAME.length) {
      typedEl.textContent += NAME[charIndex++];
      setTimeout(typeNext, 75);
    } else {
      // Subtitle slides in after typing finishes
      setTimeout(function () {
        subEl.classList.add('intro-sub-visible');
      }, 220);
      // Trigger split exit
      setTimeout(triggerExit, 1150);
    }
  }
  setTimeout(typeNext, 320);

  function triggerExit() {
    screen.classList.add('intro-exit');
    setTimeout(function () {
      cancelAnimationFrame(rafId);
      screen.style.display = 'none';
    }, 850);
  }
})();

// ── Certification flip cards ────────────────────────────────
const certifications = [
  {
    name: 'Implementing Data Engineering Solutions Using Azure Databricks',
    issuer: 'Microsoft',
    date: 'Date earned: Add date',
    category: 'azure',
    badgeImage: 'https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png',
    monogram: 'MS',
    isNew: true,
    skills: ['Azure Databricks', 'Data engineering solutions', 'Lakehouse architecture'],
    verifyUrl: '#',
    projectUrl: 'https://github.com/yajushi200/f1-azure-databricks-lakehouse'
  },
  {
    name: 'Microsoft Azure Data Fundamentals (DP-900)',
    issuer: 'Microsoft',
    date: 'Date earned: Add date',
    category: 'azure',
    badgeImage: 'https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png',
    monogram: 'MS',
    skills: ['Core data concepts', 'Relational and non-relational data', 'Azure data services'],
    verifyUrl: '#',
    projectUrl: 'https://github.com/yajushi200/f1-azure-databricks-lakehouse'
  },
  {
    name: 'Databricks Lakehouse Fundamentals',
    issuer: 'Databricks',
    date: 'Date earned: Add date',
    category: 'databricks',
    badgeImage: 'https://www.databricks.com/sites/default/files/2022-05/databricks-logo.png',
    monogram: 'DB',
    skills: ['Lakehouse architecture', 'Delta Lake', 'Data and AI workloads'],
    verifyUrl: '#',
    projectUrl: 'https://github.com/yajushi200/f1-azure-databricks-lakehouse'
  },
  {
    name: 'Google Cloud Essentials',
    issuer: 'Google Cloud',
    date: 'Date earned: Add date',
    category: 'google-cloud',
    badgeImage: 'https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png',
    monogram: 'GC',
    skills: ['Cloud computing foundations', 'Google Cloud services', 'Cloud security basics'],
    verifyUrl: '#',
    projectUrl: 'https://github.com/yajushi200/f1-azure-databricks-lakehouse'
  }
];

(function renderCertificationCards() {
  const grid = document.getElementById('certs-grid');
  const template = document.getElementById('cert-card-template');
  const emptyState = document.getElementById('cert-empty');
  if (!grid || !template) return;

  function createCard(certification) {
    const card = template.content.firstElementChild.cloneNode(true);
    const image = card.querySelector('.cert-image');
    const monogram = card.querySelector('.cert-monogram');

    image.src = certification.badgeImage;
    image.alt = certification.issuer + ' badge';
    monogram.textContent = certification.monogram;
    monogram.hidden = true;
    image.addEventListener('error', function () {
      image.hidden = true;
      monogram.hidden = false;
    });

    card.querySelector('.cert-new').hidden = !certification.isNew;
    card.querySelector('.cert-title').textContent = certification.name;
    card.querySelector('.cert-issuer').textContent = certification.issuer;
    card.querySelector('.cert-date').textContent = certification.date;
    card.querySelector('.cert-back-title').textContent = certification.name;
    card.querySelector('.cert-verify').href = certification.verifyUrl;
    card.querySelector('.cert-project').href = certification.projectUrl;

    const skills = card.querySelector('.cert-skills');
    certification.skills.forEach(function (skill) {
      const item = document.createElement('li');
      item.textContent = skill;
      skills.appendChild(item);
    });

    card.addEventListener('click', function (event) {
      if (event.target.closest('a')) return;
      card.classList.toggle('is-flipped');
      card.setAttribute('aria-expanded', card.classList.contains('is-flipped'));
    });

    card.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      card.classList.toggle('is-flipped');
      card.setAttribute('aria-expanded', card.classList.contains('is-flipped'));
    });

    return card;
  }

  function showCategory(category) {
    const cards = Array.from(grid.children);
    cards.forEach(function (card) {
      card.classList.add('is-hiding');
    });

    setTimeout(function () {
      let visibleCount = 0;
      cards.forEach(function (card, index) {
        const matches = category === 'all' || certifications[index].category === category;
        card.hidden = !matches;
        if (matches) {
          visibleCount += 1;
          card.classList.remove('is-hiding');
        }
      });
      emptyState.hidden = visibleCount > 0;
    }, 180);
  }

  certifications.forEach(function (certification) {
    grid.appendChild(createCard(certification));
  });

  document.querySelectorAll('[data-cert-filter]').forEach(function (button) {
    button.addEventListener('click', function () {
      document.querySelectorAll('[data-cert-filter]').forEach(function (filter) {
        filter.classList.toggle('is-active', filter === button);
      });
      showCategory(button.dataset.certFilter);
    });
  });
})();
