// Image lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');

  function openLightbox(src, title){
    lightboxImage.src = src;
    lightboxImage.alt = title;
    lightboxTitle.textContent = title;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox(){
    lightbox.classList.remove('open');
    lightboxImage.src = '';
    document.body.style.overflow = '';
  }

  lightbox.addEventListener('click', (event) => {
    if(event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape') closeLightbox();
  });

  document.querySelectorAll('main img').forEach((img) => {
    img.style.cursor = 'zoom-in';
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.addEventListener('click', (event) => {
      event.stopPropagation();
      openLightbox(img.currentSrc || img.src, img.alt || 'Image preview');
    });
    img.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(img.currentSrc || img.src, img.alt || 'Image preview');
      }
    });
  });

  // Project title navigation: open the selected project's details directly beneath its card.
  const projectGrid = document.querySelector('.projects-grid');
  const projectItems = [...document.querySelectorAll('.project-item')];
  function closeProjectDetails(){
    projectItems.forEach(item => {
      item.classList.remove('open');
      const btn = item.querySelector('.project-title-link');
      if(btn) btn.setAttribute('aria-expanded','false');
    });
    if (projectGrid && window.innerWidth > 860) projectGrid.style.paddingBottom = '';
  }
  function openProject(item){
    const wasOpen = item.classList.contains('open');
    closeProjectDetails();
    if(wasOpen) return;
    item.classList.add('open');
    const btn = item.querySelector('.project-title-link');
    if(btn) btn.setAttribute('aria-expanded','true');
    if(window.innerWidth > 860 && projectGrid){
      requestAnimationFrame(() => {
        const detail = item.querySelector('.project-case-study');
        projectGrid.style.paddingBottom = (detail.offsetHeight + 24) + 'px';
      });
    }
  }
  projectItems.forEach(item => {
    const btn = item.querySelector('.project-title-link');
    if(btn) btn.addEventListener('click', () => openProject(item));

    // The main project image above the title also opens that project's details.
    const cardImage = item.querySelector('.project-card-media, .project-thumb');
    if(cardImage){
      cardImage.style.cursor = 'pointer';
      cardImage.setAttribute('title', 'Click to view project details');
      cardImage.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        openProject(item);
      }, true);
    }
  });

  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

  // Active section highlight
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('nav.links a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const match = document.querySelector(`nav.links a[href="#${entry.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sections.forEach(s => observer.observe(s));
