import type { Project, Experience, Education, Certification, SkillCategory } from '../types';

export const personalInfo = {
  name: 'Varsha R S',
  role: 'Computer Science and Engineering Student',
  eyebrow: 'COMPUTER SCIENCE ENGINEERING · AI/ML · FULL-STACK',
  headline: 'Building intelligent solutions for real-world problems.',
  bio: `I'm a Computer Science and Engineering student passionate about AI/ML, data-driven applications, full-stack development, and intuitive digital experiences. Through internships and hands-on projects, I've explored AI, data analysis, full-stack application development, and user-centered design. I enjoy learning new technologies, solving practical problems, and creating experiences that combine functionality with thoughtful design.`,
  shortBio: `Curious engineer focused on machine learning models, end-to-end full-stack architectures, and turning raw data into actionable intelligence.`,
  availability: 'Open to internships & opportunities',
  location: 'Tamil Nadu, India',
  email: 'varsha14official@gmail.com',
  phone: '+91 6379338827',
  phoneFormatted: '+91 63793 38827',
  linkedin: 'https://www.linkedin.com/in/varsha214',
  githubPlaceholder: 'https://github.com/varsha214',
};

export const educationData: Education = {
  institution: 'Dhanalakshmi Srinivasan University',
  degree: 'B.Tech in Computer Science & Engineering',
  duration: '2024 – 2028',
  cgpa: '9.2',
  maxCgpa: '10.0',
  highlights: [
    'Maintained exceptional academic standing with a 9.2 / 10 CGPA',
    'Core focus on Machine Learning, Algorithms, Data Structures & DBMS',
    'Active participation in technical projects, hackathons & research workshops',
  ],
};

export const focusAreas = [
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Developing predictive models, supervised & unsupervised algorithms, feature engineering, and evaluating model accuracy on complex datasets.',
    tags: ['Machine Learning', 'TensorFlow', 'Scikit-learn', 'Model Evaluation'],
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Engineering',
    description: 'Designing responsive web applications, integrating secure REST APIs, handling database operations, and crafting intuitive user interfaces.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Modern JavaScript'],
  },
  {
    id: 'analytics-ux',
    title: 'Data Analytics & UI/UX',
    description: 'Transforming messy raw datasets into coherent visual narratives with Power BI and Pandas, paired with human-centered wireframing and prototyping.',
    tags: ['Power BI', 'Exploratory Data Analysis', 'UI/UX Design', 'Data Cleaning'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages for algorithmic problem solving and software architecture.',
    skills: [
      { name: 'Python' },
      { name: 'Java' },
    ],
  },
  {
    title: 'Machine Learning',
    description: 'Model paradigms, learning architectures, and performance verification.',
    skills: [
      { name: 'Supervised Learning' },
      { name: 'Unsupervised Learning' },
      { name: 'Model Evaluation' },
    ],
  },
  {
    title: 'Libraries & Frameworks',
    description: 'Scientific computing, data manipulation, visualization, and deep learning libraries.',
    skills: [
      { name: 'NumPy' },
      { name: 'Pandas' },
      { name: 'Scikit-learn' },
      { name: 'Matplotlib' },
      { name: 'Seaborn' },
      { name: 'TensorFlow' },
    ],
  },
  {
    title: 'Data Analysis',
    description: 'Methodologies to extract insights, clean noise, and visualize statistical distributions.',
    skills: [
      { name: 'Data Cleaning' },
      { name: 'Data Visualization' },
      { name: 'Exploratory Data Analysis (EDA)' },
    ],
  },
  {
    title: 'Tools & Platforms',
    description: 'Development environments, version control, and enterprise BI suites.',
    skills: [
      { name: 'Power BI' },
      { name: 'Jupyter Notebook' },
      { name: 'VS Code' },
      { name: 'Git' },
      { name: 'GitHub' },
    ],
  },
  {
    title: 'Web Technologies',
    description: 'Foundations for responsive, accessible, and high-performance digital interfaces.',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 'shiksha-vertex',
    role: 'Artificial Intelligence Intern',
    organization: 'Shiksha Vertex',
    duration: 'January 2026 – March 2026',
    period: 'Jan 2026 – Mar 2026',
    status: 'Completed',
    location: 'Remote / Internship',
    description: [
      'Gained practical experience in machine learning, data analysis, and data visualization.',
      'Used Python, SQL, and Power BI to analyze datasets and develop data-driven solutions.',
      'Applied data preprocessing, exploratory data analysis, and machine learning techniques to practical projects.',
    ],
    technologies: ['Python', 'SQL', 'Power BI', 'Machine Learning', 'Data Preprocessing', 'EDA'],
  },
  {
    id: 'novitech-uiux',
    role: 'UI/UX Design Intern',
    organization: 'NoviTech R&D Private Limited',
    duration: 'May 2026 – June 2026',
    period: 'May 2026 – Jun 2026',
    status: 'Completed',
    location: 'Chennai / R&D Division',
    description: [
      'Explored user research, wireframing, prototyping, and interface design.',
      'Developed responsive, user-centered design solutions.',
      'Refined interface designs using feedback, usability principles, and visual design best practices.',
    ],
    technologies: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Responsive UI', 'Usability Testing'],
  },
  {
    id: 'novitech-mern',
    role: 'MERN Stack Developer Intern',
    organization: 'NoviTech R&D Private Limited',
    duration: 'September 2026 – December 2026',
    period: 'Sep 2026 – Dec 2026',
    status: 'Upcoming',
    location: 'Planned Internship',
    description: [
      'Worked with MongoDB, Express.js, React.js, and Node.js to build full-stack web applications.',
      'Explored responsive, database-driven application development.',
      'Applied API integration, version control, and application architecture practices.',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'Git'],
  },
];

export const projects: Project[] = [
  {
    id: 'student-performance',
    title: 'Student Performance Analysis Dashboard',
    category: 'Data Analytics',
    description: 'Analyzed student performance data and transformed it into meaningful visual insights using Python and Power BI.',
    features: [
      'Data cleaning and analysis using Python and Pandas.',
      'Visualizations using Matplotlib and Seaborn.',
      'Interactive dashboard developed using Power BI.',
    ],
    technologies: ['Python', 'Pandas', 'Power BI', 'Matplotlib', 'Seaborn'],
    visualType: 'dashboard',
    deepDive: {
      problem: 'Educational datasets often contain missing values, multi-dimensional score distributions, and unstructured demographics that make tracking student risk factors difficult.',
      solution: 'Developed an end-to-end data pipeline in Python using Pandas to clean and impute student metrics, coupled with an interactive Power BI dashboard featuring dynamic slicing by subject, cohort, and study hours.',
      architecture: [
        'Raw dataset ingestion and automated anomaly detection',
        'Imputation and feature normalization in Python',
        'Statistical distribution analysis with Seaborn heatmaps',
        'Power BI interactive KPI cards and cross-filtered charts',
      ],
      technicalHighlights: [
        'Pandas DataFrame manipulation and missing value treatment',
        'Correlation matrices identifying key drivers of academic performance',
        'Power BI DAX measures for comparative grade percentiles',
      ],
    },
  },
  {
    id: 'salary-prediction',
    title: 'Employee Salary Prediction System',
    category: 'Machine Learning',
    description: 'A machine learning project focused on predicting employee salaries from available input features.',
    features: [
      'Data preprocessing and exploratory data analysis.',
      'Feature scaling and machine learning model development.',
      'Evaluation using appropriate regression metrics.',
    ],
    technologies: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Supervised Learning'],
    visualType: 'prediction',
    deepDive: {
      problem: 'Compensation benchmarking requires objective, data-backed models that account for multiple attributes such as years of experience, education level, role scope, and skill certifications without human bias.',
      solution: 'Constructed a supervised machine learning regression pipeline that preprocesses categorical and numerical features, applies standard scaling, trains regression algorithms, and verifies residual patterns.',
      architecture: [
        'Data cleaning and Outlier removal using IQR method',
        'One-Hot Encoding for categorical variables & StandardScaler for numerical ranges',
        'Train/Test split (80/20) with cross-validation',
        'Model evaluation using standard regression metrics',
      ],
      technicalHighlights: [
        'Supervised learning model training and hyperparameter tuning',
        'Evaluation against baseline heuristics using residual diagnostics',
        'Production-ready inference function for real-time salary estimation',
      ],
    },
  },
  {
    id: 'defense-grid',
    title: 'Cognitive Defense Grid',
    category: 'AI-Based Cybersecurity',
    description: 'An AI-powered cybersecurity project designed to detect and classify potential cyber threats.',
    features: [
      'AI-based threat detection and classification.',
      'Real-time alert mechanisms for proactive threat response.',
    ],
    technologies: ['Python', 'Machine Learning', 'TensorFlow', 'Network Analytics'],
    visualType: 'cybersecurity',
    deepDive: {
      problem: 'Modern enterprise networks face diverse vectors of intrusion, from signature-based port attacks to subtle anomalous traffic patterns that bypass static rule engines.',
      solution: 'Formulated a cognitive threat classification model trained to ingest packet features and flow patterns, discriminating between benign telemetry and anomalous threat vectors to trigger immediate defense alerts.',
      architecture: [
        'Simulated network telemetry ingest and feature extraction',
        'AI classification engine categorizing threat types',
        'Confidence scoring and threshold verification',
        'Real-time visual alert and incident event logger',
      ],
      technicalHighlights: [
        'Multi-class threat categorization algorithms',
        'Proactive alert dispatch logic with severity tiering',
        'Telemetry monitoring pipeline design',
      ],
    },
  },
  {
    id: 'youtube-focus-buddy',
    title: 'YouTube Focus Buddy',
    category: 'Browser Extension',
    description: 'A Chrome extension designed to support distraction-free YouTube browsing.',
    features: [
      'JavaScript-based functionality.',
      'Chrome API integration.',
      'Productivity-oriented user experience.',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'Chrome Extension API'],
    visualType: 'extension',
    deepDive: {
      problem: 'Online video platforms employ algorithmic recommendation feeds, comment sections, and auto-playing sidebars that severely derail students and engineers attempting to watch educational tutorials.',
      solution: 'Engineered a streamlined Chrome browser extension that injects targeted DOM filters and toggles UI elements (recommendation rabbit holes, comments, infinite sidebar scroll) into a clean zen study environment.',
      architecture: [
        'Chrome Manifest V3 configuration with declarative permissions',
        'Content scripts targeting YouTube DOM mutations in real time',
        'Popup control panel allowing one-click distraction elimination',
        'Chrome Storage API for persistent user preferences',
      ],
      technicalHighlights: [
        'Zero-dependency vanilla JavaScript DOM observer',
        'Low memory footprint and instantaneous state toggle',
        'Accessible, minimal popup interface with instant feedback',
      ],
    },
  },
  {
    id: 'accident-detection',
    title: 'Smart Accident Detection & Emergency Response System',
    category: 'IoT & Emergency Response',
    description: 'An IoT-based concept for detecting accidents and improving emergency response.',
    features: [
      'Real-time accident detection and emergency alerts.',
      'GPS-based location tracking.',
      'Automated notifications for faster incident response.',
    ],
    technologies: ['IoT Architecture', 'Python', 'GPS Integration Concept', 'Emergency Telemetry'],
    visualType: 'iot',
    deepDive: {
      problem: 'Crucial minutes are lost during vehicle collisions when occupants are incapacitated and cannot manually alert emergency medical services or transmit exact geographical coordinates.',
      solution: 'Designed an integrated IoT emergency architecture combining impact sensor thresholds, GPS coordinates acquisition, and automated priority alerts dispatched directly to emergency response units.',
      architecture: [
        'Telemetry sensor threshold monitoring (accelerometer/gyroscope)',
        'GPS coordinate extraction and string formatting',
        'Automated cellular / SMS distress notification trigger',
        'Central dispatcher map visualization mock showing incident coordinates',
      ],
      technicalHighlights: [
        'Rapid alert dispatch protocol to minimize the golden hour delay',
        'Fail-safe detection logic to prevent false positive triggers',
        'Geospatial coordinate mapping and alert routing design',
      ],
    },
  },
];

export const certifications: Certification[] = [
  {
    id: 'nptel-ml-dl',
    issuer: 'NPTEL',
    title: 'Machine Learning and Deep Learning – Fundamentals and Applications',
    description: 'Comprehensive certification covering foundational algorithms, loss functions, optimization, neural networks, and applied deep learning paradigms.',
    skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Optimization'],
    badgeColor: '#8B5CF6',
  },
  {
    id: 'microsoft-azure-defender',
    issuer: 'Microsoft',
    title: 'Connect Azure Assets to Microsoft Defender for Cloud',
    description: 'Official credential validating cloud security posture management, asset connection, and threat protection architecture within Microsoft Azure.',
    skills: ['Azure Cloud', 'Microsoft Defender', 'Cloud Security', 'Posture Management'],
    badgeColor: '#22D3EE',
  },
  {
    id: 'gemini-certified',
    issuer: 'Google Gemini',
    title: 'Gemini Certified Student',
    description: 'Recognized for demonstrated competency in utilizing Google Gemini models, prompt engineering, generative AI workflows, and modern AI development.',
    skills: ['Generative AI', 'Prompt Engineering', 'Gemini Models', 'AI Workflows'],
    badgeColor: '#A855F7',
    hasFile: true,
  },
];
