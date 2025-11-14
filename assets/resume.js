const resume = {
  tagline:
    'Experienced healthcare administrative professional with a strong background in utilization management and operational efficiency. Skilled in automating workflows, improving data accuracy, and supporting cross-functional teams to enhance productivity and quality. Known for identifying process gaps and developing practical, technology-driven solutions using Power Automate Desktop and Excel. Passionate about optimizing systems that improve both team performance and the member experience.',
  contact: [
    { label: 'Phone', value: '502-902-7727', href: 'tel:5029027727' },
    {
      label: 'Email',
      value: 'hillary.zelasko@outlook.com',
      href: 'mailto:hillary.zelasko@outlook.com'
    }
  ],
  skills: [
    'Process Tools: Power Automate, SharePoint Lists, Lucidchart',
    'Data Analytics: Advanced Excel, MySQL',
    'Programming: CSS/HTML/JavaScript, SQL/RDBMS, C#/.NET, Python',
    'Soft Skills: Time Management, Collaboration, Analytical Thinking, Process Optimization'
  ],
  experience: [
    {
      role: 'UM Administrative Coordinator 3',
      company: 'Humana Inc.',
      timeframe: 'April 2025 – Present',
      location: 'Remote',
      highlights: [
        'Lead process improvements by building Power Automate flows that increased productivity by 200% and eliminated manual errors across multiple workflows.',
        'Serve as subject matter expert for the upcoming Epic release to guide readiness across partner teams.',
        'Manage and update OneHome/Epic SharePoint content to ensure data accuracy and workflow alignment.',
        'Conduct associate quality audits and facilitate team meetings to drive operational consistency and compliance.',
        'Provide queue oversight and workload redistribution to maintain SLA targets.'
      ]
    },
    {
      role: 'UM Administrative Coordinator 2',
      company: 'Humana Inc.',
      timeframe: 'March 2023 – April 2025',
      location: 'Remote',
      highlights: [
        'Served as Wellbeing Advocate, Preceptor, and Transition Team member to mentor peers and strengthen process adoption.',
        'Acted as subject matter expert across multiple utilization management workflows to uphold consistency and compliance.',
        'Processed home health authorization requests with a focus on accuracy and timely submission.'
      ]
    },
    {
      role: 'Owner & Lead Videographer',
      company: 'Zelasko Productions LLC',
      timeframe: 'May 2022 – April 2024',
      location: 'Louisville, KY',
      highlights: [
        'Developed an RDBMS in C# and MySQL to track client accounts, payments, and schedules with accurate reporting.',
        'Created and maintained the company website with continuously updated content to expand the client base.'
      ]
    },
    {
      role: 'Project Coordinator',
      company: 'Network Technology Services LLC',
      timeframe: 'October 2019 – March 2022',
      location: 'Remote',
      highlights: [
        'Directed project teams, allocated resources, and balanced competing demands to keep initiatives on schedule.',
        'Managed project risks, issues, and change requests to ensure stakeholder satisfaction.',
        'Leveraged advanced Excel reporting, pivot tables, and complex formulas to visualize data for stakeholders.'
      ]
    },
    {
      role: 'Implementation Coordinator',
      company: 'Bank of America Merchant Services',
      timeframe: 'April 2006 – December 2011',
      location: 'Louisville, KY',
      highlights: [
        'Promoted to automate high-volume data updates with speed and accuracy.',
        'Reduced SLA times by delivering a Work in Progress report via Microsoft Access.',
        'Served as Vital subject matter expert and supported the release of the new database.'
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
    'C#/.NET',
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
    },
        {
      school: 'Western Governors University',
      degree: 'M.S. Data Analytics',
      timeframe: 'In Progress',
      details: [
        'Focusing on statistical data mining, machine learning, and data optimization.'
      ]
    }
  ],
  resumeDownload: 'assets/Hillary Zelasko - Resume 2025.docx',
  careerStartYear: 2006
};

const formatContact = (item) => {
  const span = document.createElement('span');
  span.innerHTML = `<strong>${item.label}:</strong> ${
    item.href
      ? `<a href="${item.href}" target="_blank" rel="noreferrer">${item.value}</a>`
      : item.value
  }`;
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
  card.innerHTML = `
    <h3>${experience.role}</h3>
    <h4>${experience.company}</h4>
    <div class="meta">
      <span>${experience.timeframe}</span>
      <span>${experience.location}</span>
    </div>
  `;
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
  card.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.description}</p>
  `;

  const links = document.createElement('div');
  links.className = 'project-links';

  const repoLink = document.createElement('a');
  repoLink.className = 'project-link';
  repoLink.href = project.repo;
  repoLink.target = '_blank';
  repoLink.rel = 'noreferrer';
  repoLink.textContent = 'View Repository';
  links.appendChild(repoLink);

  if (project.download) {
    const downloadLink = document.createElement('a');
    downloadLink.className = 'project-link';
    downloadLink.href = project.download;
    downloadLink.target = '_blank';
    downloadLink.rel = 'noreferrer';
    downloadLink.textContent = 'Download App';
    links.appendChild(downloadLink);
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
    modal.innerHTML = `
      <div class="image-modal__backdrop" data-modal-close></div>
      <figure class="image-modal__figure">
        <img src="" alt="" />
      </figure>
      <button type="button" class="image-modal__close" aria-label="Close image" data-modal-close>&times;</button>
    `;
    document.body.appendChild(modal);
  }

  const modalImage = modal.querySelector('img');
  const closeElements = modal.querySelectorAll('[data-modal-close]');

  const closeModal = () => {
    modal.classList.remove('is-open');
    modalImage.src = '';
    modalImage.alt = '';
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
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modal.classList.add('is-open');
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
  card.innerHTML = `
    <h3>Professional Certifications</h3>
  `;
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
  card.innerHTML = `
    <h3>${edu.degree}</h3>
    <h4>${edu.school}</h4>
    <div class="meta">
      <span>${edu.timeframe}</span>
    </div>
  `;
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
  download.setAttribute('download', 'Hillary Zelasko - Resume 2025.docx');
};

const toggleTheme = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('prefers-dark-resume', document.body.classList.contains('dark'));
};

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

const prefersDark = localStorage.getItem('prefers-dark-resume');
if (prefersDark === 'true' || (prefersDark === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.body.classList.add('dark');
}

hydrate();
