const resume = {
  tagline:
    'Product-focused software engineer blending mobile development with intuitive UI craftsmanship.',
  contact: [
    { label: 'Location', value: 'Austin, TX' },
    { label: 'Email', value: 'hillary.zelasko@example.com', href: 'mailto:hillary.zelasko@example.com' },
    { label: 'GitHub', value: 'github.com/hillaryzelasko', href: 'https://github.com/hillaryzelasko' },
    { label: 'LinkedIn', value: 'linkedin.com/in/hillaryzelasko', href: 'https://linkedin.com/in/hillaryzelasko' }
  ],
  skills: [
    'Mobile App Architecture',
    'React Native & Kotlin Multiplatform',
    'Android (Jetpack Compose)',
    'React & TypeScript',
    'REST & GraphQL APIs',
    'CI/CD Automation',
    'Product Discovery',
    'Mentoring & Team Leadership'
  ],
  experience: [
    {
      role: 'Senior Mobile Engineer',
      company: 'Bluebonnet Labs',
      timeframe: '2021 — Present',
      location: 'Remote',
      highlights: [
        'Led a cross-functional squad to launch a subscription management feature that increased retention by 18%.',
        'Built a design system in React Native + TypeScript to unify the experience across iOS and Android.',
        'Automated release pipelines with GitHub Actions, cutting time-to-store by 40%.'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Summit Health Tech',
      timeframe: '2017 — 2021',
      location: 'Austin, TX',
      highlights: [
        'Delivered patient engagement apps using Kotlin and FHIR-compliant APIs serving 300k+ monthly users.',
        'Collaborated with designers to craft accessible interfaces that met WCAG AA standards.',
        'Introduced telemetry dashboards with Datadog to surface app stability metrics in real time.'
      ]
    }
  ],
  projects: [
    {
      name: 'WGU Term Tracker',
      description:
        'Android app that helps Western Governors University students track course milestones, sync due dates, and receive tailored study nudges.',
      link: {
        label: 'Download APK',
        url: 'https://github.com/hillaryzelasko/D424-MobileApp/raw/refs/heads/main/WGUTermTracker/WGUTermTracker/bin/Release/net9.0-android/publish/com.companyname.wgutermtracker-Signed.apk'
      },
      tech: ['.NET MAUI', 'SQLite', 'Azure App Center']
    },
    {
      name: 'Habits Dashboard',
      description:
        'Progressive web app delivering personalized streak insights and atomic habit recommendations with offline-first support.',
      link: {
        label: 'View Case Study',
        url: 'https://example.com/habits-dashboard'
      },
      tech: ['React', 'Workbox', 'Airtable']
    }
  ],
  education: [
    {
      school: 'Western Governors University',
      degree: 'B.S. Software Development',
      timeframe: '2015 — 2017',
      details: ['Graduated with Honors', 'Capstone project built an appointment triage system for community clinics.']
    }
  ],
  resumeDownload: 'assets/Hillary-Zelasko-Resume.pdf',
  careerStartYear: 2015
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
  card.className = 'card';
  card.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    <div class="meta">
      <span>${project.tech.join(' · ')}</span>
      <a class="pill" href="${project.link.url}" target="_blank" rel="noreferrer">${project.link.label}</a>
    </div>
  `;
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
  mountList('#education .grid', resume.education, renderEducation);

  const years = new Date().getFullYear() - resume.careerStartYear;
  document.getElementById('experience-years').textContent = `${years}+ years crafting software products`;
  const download = document.getElementById('download-resume');
  download.href = resume.resumeDownload;
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
