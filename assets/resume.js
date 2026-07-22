const resume = {
  tagline:
    'Process Improvement Professional and Software Engineer with a strong foundation in application development, automation, debugging, and systems analysis. Experienced in creating Power Apps, building Power Automate workflows, improving SharePoint-based processes, supporting Epic transition readiness, and translating operational requirements into reliable, user-focused solutions that reduce processing time while improving quality and output. Skilled in C#, SQL, Git, and Agile practices. Recognized for quick learning, process improvement, and writing clean, maintainable code.',
  contact: [
    { label: 'Phone', value: '502-902-7727', href: 'tel:5029027727' },
    {
      label: 'Email',
      value: 'hillary.zelasko@outlook.com',
      href: 'mailto:hillary.zelasko@outlook.com'
    }
  ],
  skills: [
    'Process Improvement: Workflow Analysis, Process Mapping, Quality Improvement, Operational Efficiency',
    'Power Platform: Power Apps, Power Automate, Power BI, SharePoint Lists, Microsoft 365',
    'Data & Reporting: Advanced Excel, MySQL, Audits, Queue Analysis, Performance Tracking',
    'Software Development: HTML/CSS/JavaScript, C#, Python, SQL/RDBMS, Git',
    'Collaboration: Epic Transition Support, Documentation, Stakeholder Feedback, Training Support'
  ],
  experience: [
    {
      role: 'Process Improvement Professional 2',
      company: 'Humana Inc.',
      timeframe: 'December 14, 2025 - Present',
      location: 'Remote',
      highlights: [
        'Analyze utilization management workflows, identify friction points, and translate requirements into practical process improvements.',
        'Create Power Apps, Power Automate flows, Power BI reports, and SharePoint tools that reduce manual work while improving quality and output.',
        'Support Epic transition readiness through workflow documentation, process validation, partner coordination, and associate preparation.',
        'Use Excel, Power BI, audits, and queue analysis to monitor performance and recommend targeted improvements.'
      ]
    },
    {
      role: 'UM Administrative Coordinator 3',
      company: 'Humana Inc.',
      timeframe: 'April 2025 - December 2025',
      location: 'Remote',
      highlights: [
        'Built Power Automate flows that increased productivity by 200% and reduced manual workflow errors.',
        'Managed OneHome/Epic SharePoint content for data accuracy and workflow alignment.',
        'Conducted quality audits and team meetings to improve consistency and compliance.'
      ]
    },
    {
      role: 'UM Administrative Coordinator 2',
      company: 'Humana Inc.',
      timeframe: 'March 2023 - April 2025',
      location: 'Remote',
      highlights: [
        'Created and refined Power Automate flows for Letters and P2P workflows to reduce repetitive manual work and improve consistency.',
        'Served as subject matter expert across utilization management workflows to support consistency and compliance.',
        'Processed home health authorization requests with accuracy and timely submission.'
      ]
    },
    {
      role: 'Owner & Lead Videographer',
      company: 'Zelasko Productions LLC',
      timeframe: 'May 2022 - April 2024',
      location: 'Louisville, KY',
      highlights: [
        'Developed a C#/MySQL RDBMS to track client accounts, payments, schedules, and reporting.',
        'Created and maintained the company website with up-to-date content to support client growth.'
      ]
    },
    {
      role: 'Project Coordinator',
      company: 'Network Technology Services LLC',
      timeframe: 'October 2019 - March 2022',
      location: 'Remote',
      highlights: [
        'Directed project teams, allocated resources, and kept work on schedule amid competing demands.',
        'Managed risks, issues, and change requests to support stakeholder satisfaction.',
        'Used advanced Excel reporting, pivot tables, and formulas to visualize stakeholder data.'
      ]
    }
  ],
  projects: [
    {
      name: 'Angular World Map',
      description:
        'Angular-based world map listing basic API based country information.',
      repo: 'https://github.com/hillaryzelasko/Angular-Map',
      images: [
        { src: 'imgs/img1.png', alt: 'Angular world map project landing view' },
        { src: 'imgs/img2.png', alt: 'Country details panel in Angular world map' }
      ]
    },
    {
      name: 'Term Tracking Mobile Application',
      description:
        'Cross-platform mobile application with offline term, courses, note, and assessment tracking.',
      repo: 'https://github.com/hillaryzelasko/D424-MobileApp',
      download:
        'https://github.com/hillaryzelasko/D424-MobileApp/raw/refs/heads/main/WGUTermTracker/WGUTermTracker/bin/Release/net9.0-android/publish/com.companyname.wgutermtracker-Signed.apk',
      imageSize: 'small',
      images: [
        { src: 'imgs/img3.jpg', alt: 'Mobile app dashboard for tracking terms' },
        { src: 'imgs/img4.jpg', alt: 'Course detail view in term tracking mobile app' }
      ]
    }
  ],
  certifications: [
    'Microsoft Client/Server',
    'CSS/HTML/JavaScript',
    'C#',
    'Python',
    'Project+',
    'AWS Cloud',
    'Front-End Developer'
  ],
  education: [
    {
      school: 'Western Governors University',
      degree: 'B.S. Software Engineering',
      timeframe: 'Graduated',
      details: [
        'Focused on software engineering principles, automation, and data-driven problem solving.'
      ]
    }
  ],
  resumeDownload:
    'https://hillaryzelasko.github.io/my-github-page/assets/Hillary Zelasko - Resume 2026 - Updated.docx?v=2026-07-22',
  careerStartYear: 2006
};

const createElement = (tagName, options = {}) => {
  const element = document.createElement(tagName);
  if (options.className) {
    element.className = options.className;
  }
  if (options.text) {
    element.textContent = options.text;
  }
  return element;
};

const createExternalLink = (href, text) => {
  const link = createElement('a', { className: 'project-link', text });
  link.href = href;
  link.target = '_blank';
  link.rel = 'noreferrer';
  return link;
};

const createMeta = (...items) => {
  const meta = createElement('div', { className: 'meta' });
  items.filter(Boolean).forEach((item) => {
    meta.appendChild(createElement('span', { text: item }));
  });
  return meta;
};

const formatContact = (item) => {
  const span = document.createElement('span');
  const label = createElement('strong', { text: `${item.label}:` });
  span.append(label, ' ');
  if (item.href) {
    const link = createElement('a', { text: item.value });
    link.href = item.href;
    span.appendChild(link);
  } else {
    span.append(item.value);
  }
  return span;
};

const mountList = (selector, items, renderItem) => {
  const container = document.querySelector(selector);
  if (!container) return;
  container.innerHTML = '';
  items.forEach((item) => container.appendChild(renderItem(item)));
};

const renderExperience = (experience) => {
  const card = document.createElement('article');
  card.className = 'card';
  card.append(
    createElement('h3', { text: experience.role }),
    createElement('h4', { text: experience.company }),
    createMeta(experience.timeframe, experience.location)
  );
  const list = document.createElement('ul');
  experience.highlights.forEach((point) => {
    const li = document.createElement('li');
    li.textContent = point;
    list.appendChild(li);
  });
  card.appendChild(list);
  return card;
};

const renderProject = (project) => {
  const card = document.createElement('article');
  card.className = 'card project-card';
  card.append(
    createElement('h3', { text: project.name }),
    createElement('p', { text: project.description })
  );

  const links = document.createElement('div');
  links.className = 'project-links';
  links.appendChild(createExternalLink(project.repo, 'View Repository'));

  if (project.download) {
    links.appendChild(createExternalLink(project.download, 'Download App'));
  }

  card.appendChild(links);

  if (project.images?.length) {
    const gallery = document.createElement('div');
    const classNames = ['project-images'];
    if (project.imageSize) {
      classNames.push(`project-images--${project.imageSize}`);
    }
    gallery.className = classNames.join(' ');
    project.images.forEach((image) => {
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt || `${project.name} screenshot`;
      img.loading = 'lazy';
      gallery.appendChild(img);
    });
    card.appendChild(gallery);
  }
  return card;
};

const setupProjectImageModal = () => {
  const projectImages = document.querySelectorAll('.project-images img');
  if (!projectImages.length) {
    return;
  }

  let modal = document.querySelector('.image-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-hidden', 'true');

    const backdrop = createElement('div', { className: 'image-modal__backdrop' });
    backdrop.dataset.modalClose = 'true';

    const figure = createElement('figure', { className: 'image-modal__figure' });
    figure.appendChild(document.createElement('img'));

    const closeButton = createElement('button', {
      className: 'image-modal__close',
      text: 'x'
    });
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'Close image');
    closeButton.dataset.modalClose = 'true';

    modal.append(backdrop, figure, closeButton);
    document.body.appendChild(modal);
  }

  const modalImage = modal.querySelector('img');
  const closeElements = modal.querySelectorAll('[data-modal-close]');
  const closeButton = modal.querySelector('.image-modal__close');
  let lastFocusedElement;

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    modalImage.src = '';
    modalImage.alt = '';
    lastFocusedElement?.focus();
  };

  if (!modal.dataset.bound) {
    closeElements.forEach((element) => {
      element.addEventListener('click', closeModal);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });
    modal.dataset.bound = 'true';
  }

  const openModal = (image) => {
    lastFocusedElement = document.activeElement;
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    closeButton.focus();
  };

  projectImages.forEach((image) => {
    if (image.dataset.modalBound) {
      return;
    }
    image.dataset.modalBound = 'true';
    if (!image.hasAttribute('tabindex')) {
      image.setAttribute('tabindex', '0');
    }
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `${image.alt || 'Project'} (click to enlarge)`);
    image.addEventListener('click', () => openModal(image));
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(image);
      }
    });
  });
};

const renderCertifications = (certifications) => {
  const card = document.createElement('article');
  card.className = 'card compact-card';
  card.appendChild(createElement('h3', { text: 'Professional Certifications' }));
  const list = document.createElement('ul');
  list.className = 'certifications-list';
  certifications.forEach((certification) => {
    const item = document.createElement('li');
    item.textContent = certification;
    list.appendChild(item);
  });
  card.appendChild(list);
  return card;
};

const renderEducation = (edu) => {
  const card = document.createElement('article');
  card.className = 'card';
  card.append(
    createElement('h3', { text: edu.degree }),
    createElement('h4', { text: edu.school }),
    createMeta(edu.timeframe)
  );
  const list = document.createElement('ul');
  edu.details.forEach((detail) => {
    const li = document.createElement('li');
    li.textContent = detail;
    list.appendChild(li);
  });
  card.appendChild(list);
  return card;
};

const hydrate = () => {
  document.getElementById('tagline').textContent = resume.tagline;
  mountList('#contact', resume.contact, formatContact);
  mountList('#skills .skills-list', resume.skills, (skill) => {
    const li = document.createElement('li');
    li.textContent = skill;
    return li;
  });
  mountList('#experience .grid', resume.experience, renderExperience);
  mountList('#projects .grid', resume.projects, renderProject);
  setupProjectImageModal();

  const certificationGrid = document.querySelector('#certifications .grid');
  if (certificationGrid) {
    certificationGrid.innerHTML = '';
    certificationGrid.appendChild(renderCertifications(resume.certifications));
  }
  mountList('#education .grid', resume.education, renderEducation);

  const years = new Date().getFullYear() - resume.careerStartYear;
  document.getElementById('experience-years').textContent = `${years}+ years driving operational excellence`;
  const download = document.getElementById('download-resume');
  download.href = encodeURI(resume.resumeDownload);
  download.setAttribute('download', 'Hillary Zelasko - Resume 2026 - Updated.docx');
};

const themeToggle = document.getElementById('theme-toggle');

const syncThemeToggle = () => {
  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? 'Use Light Theme' : 'Use Dark Theme';
  themeToggle.setAttribute('aria-pressed', String(isDark));
};

const toggleTheme = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('prefers-dark-resume', document.body.classList.contains('dark'));
  syncThemeToggle();
};

themeToggle.addEventListener('click', toggleTheme);

const prefersDark = localStorage.getItem('prefers-dark-resume');
if (prefersDark === 'true' || (prefersDark === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.body.classList.add('dark');
}

syncThemeToggle();
hydrate();
