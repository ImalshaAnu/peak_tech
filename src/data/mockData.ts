export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'cloud' | 'ai' | 'security' | 'devops' | 'software';
  icon: string;
  metrics: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  logoText: string;
  title: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string; detail: string }[];
  tags: string[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  metric: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'cloud-architecture',
    title: 'Cloud Architecture & Migration',
    tagline: 'Multi-Cloud Scalability with Zero Downtime',
    description: 'Modernize legacy infrastructure with containerized, auto-scaling architectures across AWS, Microsoft Azure, and Google Cloud Platform. We cut cloud spend by up to 45% while boosting reliability.',
    category: 'cloud',
    icon: 'Cloud',
    metrics: '99.999% Availability Achieved',
    features: [
      'Multi-cloud strategy & vendor lock-in mitigation',
      'Zero-downtime database and microservices migration',
      'Cloud cost optimization (FinOps audits & reserved instances)',
      'Serverless architectures & event-driven compute',
    ],
    technologies: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Terraform', 'OpenTofu'],
    deliverables: ['Cloud Readiness Audit', 'Architecture Blueprint', 'Automated IaC Pipelines', 'FinOps Dashboard']
  },
  {
    id: 'devops-sre',
    title: 'Enterprise DevOps & DevSecOps',
    tagline: 'Accelerate Releases from Weeks to Minutes',
    description: 'Transform your development lifecycle with automated CI/CD pipelines, container orchestration, automated security scans, and 24/7 SRE monitoring.',
    category: 'devops',
    icon: 'GitBranch',
    metrics: '8x Faster Deployment Cadence',
    features: [
      'Containerized microservices design & management',
      'GitOps automated deployment pipelines (ArgoCD, GitHub Actions)',
      'Infrastructure as Code (IaC) governance and drift detection',
      'Chaos engineering and automated disaster recovery tests',
    ],
    technologies: ['Docker', 'ArgoCD', 'GitHub Actions', 'Datadog', 'Prometheus', 'Terraform'],
    deliverables: ['CI/CD Pipeline Setup', 'Container Infrastructure Provisioning', 'Monitoring & Alerting Setup', 'SRE Runbooks']
  },
  {
    id: 'ai-data-solutions',
    title: 'Applied AI & Data Engineering',
    tagline: 'Intelligent Enterprise Automation & Analytics',
    description: 'Harness enterprise generative AI, predictive machine learning models, and real-time streaming data pipelines to drive actionable business intelligence and automated workflows.',
    category: 'ai',
    icon: 'Cpu',
    metrics: '10x Faster Data Processing',
    features: [
      'Custom LLM fine-tuning & enterprise AI pipelines',
      'Real-time streaming data pipelines (Kafka, Apache Flink)',
      'Modern data warehousing (Snowflake, BigQuery, Databricks)',
      'Intelligent computer vision and natural language automation',
    ],
    technologies: ['OpenAI', 'LangChain', 'Python', 'Snowflake', 'Apache Kafka', 'PyTorch'],
    deliverables: ['Data Pipeline Architecture', 'AI Model Integration', 'Enterprise AI Knowledge System', 'Analytics BI Dashboards']
  },
  {
    id: 'cybersecurity-zero-trust',
    title: 'Cybersecurity & Zero-Trust Architecture',
    tagline: 'Proactive Defenses & Enterprise Compliance',
    description: 'Fortify your corporate perimeter with end-to-end Zero Trust security, continuous penetration testing, SOC 2 / ISO 27001 readiness, and 24/7 Security Operations Center monitoring.',
    category: 'security',
    icon: 'ShieldCheck',
    metrics: 'Zero Breaches Across 500+ Clients',
    features: [
      'Zero-Trust Network Architecture (ZTNA) implementation',
      'Automated Vulnerability Management & Pentesting',
      'Compliance Automation (SOC 2, ISO 27001, HIPAA, GDPR)',
      'Identity & Access Management (IAM / Okta / Azure AD)',
    ],
    technologies: ['CrowdStrike', 'Wiz', 'HashiCorp Vault', 'Okta', 'Palo Alto Networks'],
    deliverables: ['Security Risk Assessment', 'Compliance Roadmap', 'IAM Hardening', 'SOC Incident Playbook']
  },
  {
    id: 'custom-software',
    title: 'Custom Enterprise Software Engineering',
    tagline: 'High-Performance Web, Mobile & API Systems',
    description: 'Engineer mission-critical software solutions tailored precisely to your operational needs. High-concurrency microservices, intuitive modern web frontends, and cross-platform mobile apps.',
    category: 'software',
    icon: 'Layers',
    metrics: '< 80ms Global API Response Times',
    features: [
      'Microservices architecture & resilient GraphQL/REST APIs',
      'Ultra-responsive Next.js, React, and TypeScript web platforms',
      'Native & cross-platform mobile apps (React Native, Flutter)',
      'Legacy system modernization and headless integrations',
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Go', 'GraphQL', 'PostgreSQL'],
    deliverables: ['Full Source Code Repository', 'Automated Test Suites', 'API Swagger Specs', 'Production Deploy Script']
  },
  {
    id: 'managed-it-sre',
    title: '24/7 Managed IT & Site Reliability',
    tagline: 'Uninterrupted Operations Around the Clock',
    description: 'Ensure 99.999% uptime with our global follow-the-sun Site Reliability Engineering team. Proactive issue remediation before your customers ever notice.',
    category: 'devops',
    icon: 'Activity',
    metrics: '< 5 Minute Critical Incident MTTR',
    features: [
      '24/7/365 Tier 1-3 SRE monitoring and incident response',
      'Automated failover and disaster recovery orchestration',
      'Quarterly security patching and infrastructure health audits',
      'Dedicated Technical Account Manager & SLA guarantee',
    ],
    technologies: ['Datadog', 'PagerDuty', 'Grafana', 'New Relic', 'Splunk'],
    deliverables: ['24/7 NOC/SOC Coverage', 'SLA Agreement', 'Monthly Health Reports', 'Escalation Protocol']
  }
];

export const TECH_STACK = [
  { name: 'Docker & Containers', category: 'DevOps & Cloud', level: 'Core', icon: 'Box' },
  { name: 'AWS Cloud', category: 'DevOps & Cloud', level: 'Premier Partner', icon: 'Cloud' },
  { name: 'Google Cloud', category: 'DevOps & Cloud', level: 'Certified', icon: 'Cloud' },
  { name: 'Microsoft Azure', category: 'DevOps & Cloud', level: 'Gold Partner', icon: 'Cloud' },
  { name: 'Terraform', category: 'DevOps & Cloud', level: 'IaC Standard', icon: 'Cpu' },
  { name: 'Docker', category: 'DevOps & Cloud', level: 'Standard', icon: 'Server' },
  { name: 'Next.js & React', category: 'Full Stack', level: 'Enterprise', icon: 'Code' },
  { name: 'TypeScript', category: 'Full Stack', level: 'Standard', icon: 'FileCode' },
  { name: 'Go / Golang', category: 'Full Stack', level: 'High Concurrency', icon: 'Zap' },
  { name: 'Node.js', category: 'Full Stack', level: 'Microservices', icon: 'Server' },
  { name: 'PostgreSQL', category: 'Data & AI', level: 'Relational DB', icon: 'Database' },
  { name: 'OpenAI / LLMs', category: 'Data & AI', level: 'Applied AI', icon: 'Cpu' },
  { name: 'Apache Kafka', category: 'Data & AI', level: 'Streaming', icon: 'Layers' },
  { name: 'Snowflake', category: 'Data & AI', level: 'Data Warehouse', icon: 'Database' },
  { name: 'CrowdStrike', category: 'Cybersecurity', level: 'EDR / XDR', icon: 'ShieldCheck' },
  { name: 'HashiCorp Vault', category: 'Cybersecurity', level: 'Secret Management', icon: 'Lock' },
  { name: 'Datadog', category: 'Observability', level: 'APM & Logs', icon: 'Activity' },
  { name: 'ArgoCD', category: 'DevOps & Cloud', level: 'GitOps Engine', icon: 'GitPullRequest' },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fintech-neobank',
    client: 'Apex Global Financial',
    industry: 'FinTech & Banking',
    logoText: 'APEX BANK',
    title: 'Migrating 8 Million Accounts to AWS with Zero Downtime',
    challenge: 'Apex Financial suffered from bottlenecked monolithic on-prem servers during peak trading hours, leading to latency spikes and high operational overhead.',
    solution: 'Engineered an active-active multi-region microservices topology on AWS with automated RDS Aurora failover and real-time Kafka transaction processing.',
    results: [
      { label: 'Cloud Cost Reduction', value: '42%', detail: 'Optimized auto-scaling and spot instances' },
      { label: 'Transaction Latency', value: '< 18ms', detail: 'Down from 340ms average response' },
      { label: 'Uptime SLA', value: '99.999%', detail: 'Zero outages in 18 consecutive months' },
    ],
    tags: ['AWS', 'Microservices', 'Kafka', 'Zero Downtime', 'FinOps'],
    quote: {
      text: 'Peak Tech’s engineering mastery allowed us to migrate seamlessly without a single minute of customer downtime. Their DevSecOps practices are best-in-class.',
      author: 'Marcus Vance',
      role: 'Chief Technology Officer, Apex Global'
    }
  },
  {
    id: 'healthcare-ai-pipeline',
    client: 'Vitalis Health Systems',
    industry: 'Healthcare & Life Sciences',
    logoText: 'VITALIS HEALTH',
    title: 'HIPAA-Compliant AI Medical Imaging & Diagnostics Pipeline',
    challenge: 'Radiology departments were overwhelmed by scan backlogs. Vitalis needed an ultra-secure, HIPAA-compliant pipeline to process and triage high-resolution MRI scans.',
    solution: 'Designed an encrypted computer-vision pipeline running on private GPU clusters with automated anonymization, audit logs, and diagnostic assistance algorithms.',
    results: [
      { label: 'Diagnostic Speed', value: '6x Faster', detail: 'Emergency triage reduced from hours to minutes' },
      { label: 'Compliance Level', value: '100% HIPAA', detail: 'Zero audit findings across 3 consecutive years' },
      { label: 'Radiologist Capacity', value: '+75%', detail: 'Significant boost in daily throughput' },
    ],
    tags: ['HIPAA', 'Computer Vision', 'PyTorch', 'GPU Cloud', 'Encrypted S3'],
    quote: {
      text: 'The Peak Tech team built an AI solution that directly improves patient outcomes while maintaining stringent regulatory compliance.',
      author: 'Dr. Elena Rostova',
      role: 'Head of Clinical Innovation, Vitalis'
    }
  },
  {
    id: 'retail-global-ecommerce',
    client: 'OmniTrade Global',
    industry: 'Retail & E-Commerce',
    logoText: 'OMNITRADE',
    title: 'Black Friday Resiliency: 120,000 Orders/Min Auto-Scaling',
    challenge: 'Past flash sales triggered database deadlocks and cart abandonment during global shopping spikes.',
    solution: 'Implemented edge-cached Next.js storefronts with headless Go microservices, distributed Redis caching, and automated cloud burst capacity.',
    results: [
      { label: 'Order Throughput', value: '120k /min', detail: 'Highest recorded volume in brand history' },
      { label: 'Cart Conversion', value: '+28%', detail: 'Sub-second page speeds boosted checkout rate' },
      { label: 'Infrastructure Savings', value: '$650k', detail: 'Saved through elastic off-peak scale-down' },
    ],
    tags: ['Next.js', 'Go', 'Redis', 'Multi-Region', 'High Concurrency'],
    quote: {
      text: 'Our biggest sales day went off without a single glitch. Peak Tech engineered pure performance.',
      author: 'Sarah Chen',
      role: 'VP of Engineering, OmniTrade'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'David Sterling',
    role: 'Chief Information Officer',
    company: 'Nexus Global Logistics',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    content: 'Peak Tech revamped our entire logistics tracking cloud architecture. We went from daily incident alarms to total tranquility. Their team feels like an elite in-house unit.',
    metric: '45% Cost Reduction'
  },
  {
    id: '2',
    name: 'Amina Al-Mansoor',
    role: 'VP of Cybersecurity',
    company: 'Quantis Financial Group',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    content: 'Their Zero-Trust implementation and SOC 2 Type II audit readiness program sailed us through compliance in record time. Impeccable technical depth and precision.',
    metric: 'SOC 2 Certified in 90 Days'
  },
  {
    id: '3',
    name: 'Liam Henderson',
    role: 'Founder & CEO',
    company: 'CloudFlow SaaS',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    content: 'From our Seed stage to Series B scaling, Peak Tech handled our cloud infrastructure and CI/CD pipelines flawlessly. We ship features 5x faster than our competitors.',
    metric: '5x Deployment Speed'
  }
];

export const COMPANY_STATS = [
  { value: '500+', label: 'Enterprise Deployments', detail: 'Across North America, Europe & APAC' },
  { value: '99.999%', label: 'Infrastructure Uptime', detail: 'Backed by strict SLA commitments' },
  { value: '$45M+', label: 'Client Cloud Costs Saved', detail: 'Via FinOps & resource optimization' },
  { value: '< 15min', label: 'Average Critical MTTR', detail: '24/7/365 Follow-the-Sun SRE SOC' },
];

export const FAQS = [
  {
    q: 'How does Peak Tech approach legacy system and cloud migration?',
    a: 'We utilize a phased, risk-mitigated approach beginning with an in-depth Architectural Assessment & Dependency Mapping. We isolate workloads into containerized microservices and implement parallel runs and canary deployments so your production users never experience disruptions.'
  },
  {
    q: 'Can Peak Tech augment our existing engineering team or manage everything?',
    a: 'We offer both flexible co-engineering (integrating senior architects alongside your squad) and fully managed Dedicated DevSecOps & SRE teams who oversee your 24/7 infrastructure, alerts, and continuous optimization.'
  },
  {
    q: 'What cloud providers and infrastructure stacks do you specialize in?',
    a: 'We are certified partners across Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure, alongside private cloud / on-premise container clusters, hybrid setups, OpenTofu, and Terraform.'
  },
  {
    q: 'How does your IT Cost & Project Estimator work?',
    a: 'Our calculator models realistic cloud compute, database replication, compliance posture, and engineering hours based on data from over 500 enterprise rollouts, giving you an immediate estimate before our technical deep-dive discovery call.'
  },
  {
    q: 'What security certifications does Peak Tech adhere to?',
    a: 'We are ISO 27001 certified, SOC 2 Type II compliant, and strictly adhere to HIPAA, GDPR, and PCI-DSS compliance requirements for all code and infrastructure architectures.'
  }
];
