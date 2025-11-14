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
      location: 'Louisville, KY',
      highlights: [
        'Directed project teams, allocated resources, and balanced competing demands to keep initiatives on schedule.',
        'Managed project risks, issues, and change requests to ensure stakeholder satisfaction.',
        'Leveraged advanced Excel reporting, pivot tables, and complex formulas to visualize data for stakeholders.'
      ]
    },
    {
      role: 'Implementation Coordinator',
      company: 'Bank of America',
      timeframe: 'April 2006 – December 2011',
      location: 'Mississippi',
      highlights: [
        'Promoted to automate high-volume data updates with speed and accuracy.',
        'Reduced SLA times by delivering a Work in Progress report via Microsoft Access.',
        'Served as Vital subject matter expert and supported the release of the new database.'
      ]
    }
  ],
  projects: [
    {
      name: 'Care Coordination Angular Portal',
      description:
        'Angular-based workflow portal that automates utilization management routing and provides self-service tooling for clinical teams.',
      repo: 'https://github.com/HillaryZelasko/angular-care-coordination'
    },
    {
      name: 'Mobile Care Companion',
      description:
        'Cross-platform mobile application that equips field staff with offline task tracking, secure documentation, and rapid status updates.',
      repo: 'https://github.com/HillaryZelasko/mobile-care-companion'
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
    <a class="project-link" href="${project.repo}" target="_blank" rel="noreferrer">View Repository</a>
  `;
  return card;
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
