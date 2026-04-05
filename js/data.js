// ─────────────────────────────────────────
// data.js — ALL YOUR CONTENT LIVES HERE
// ─────────────────────────────────────────

const LOGOS = {
  nyu:        { src: "https://www.google.com/s2/favicons?domain=stern.nyu.edu&sz=64", alt: "NYU" },
  goldman:    { src: "https://www.google.com/s2/favicons?domain=goldmansachs.com&sz=64", alt: "Goldman Sachs" },
  esusu:      { src: "https://www.google.com/s2/favicons?domain=esusu.org&sz=64", alt: "Esusu" },
  daiict:     { src: "https://www.google.com/s2/favicons?domain=daiict.ac.in&sz=64", alt: "DA-IICT" },
  endless:    { src: "https://www.google.com/s2/favicons?domain=endlessfrontierlabs.com&sz=64", alt: "Endless Frontier Labs" },
  quantit:    { src: "https://www.google.com/s2/favicons?domain=quantit.io&sz=64", alt: "Quantit" },
  nyu_accel:  { src: "https://www.google.com/s2/favicons?domain=nyu.edu&sz=64", alt: "NYU AI Accelerator" },
};

const TICKER = [
  { name: "NYU Stern",                     logo: LOGOS.nyu },
  { name: "Goldman Sachs",                 logo: LOGOS.goldman },
  { name: "Esusu",                         logo: LOGOS.esusu },
  { name: "NYU AI Innovation Accelerator", logo: LOGOS.nyu_accel },
  { name: "Endless Frontier Labs",         logo: LOGOS.endless },
  { name: "Quantit · Korea",               logo: LOGOS.quantit },
  { name: "DA-IICT",                       logo: LOGOS.daiict },
];

const WORK = [
  {
    id: "awaydays",
    title: "AwayDayz NYC",
    company: "Side Project · Soccer Matchday Guide",
    year: "2025 – Present",
    url: "awaydays.html",
    description: "Built a two-sided platform connecting NYC soccer fans with bars showing their team's game. 15 bars onboarded, 188 matches listed across 6 leagues.",
    tags: ["0→1 Product", "Marketplace", "React", "Node.js", "Supabase"],
    detail: {
      overview: "A passion project born from the NYC soccer scene — built to help away fans navigate the city on matchday.",
      bullets: [
        "Identified gap in existing soccer fan platforms for away matchday planning",
        "Built full product from concept to launch — design, content, and distribution",
        "Focused on NYC's growing soccer community across MLS, EPL, and international fixtures"
      ]
    }
  },
  {
    id: "warehouse",
    title: "AI Warehouse Optimization",
    company: "Side Project · ML Forecasting",
    year: "2025",
    url: "warehouse.html",
    description: "Built a demand forecasting dashboard for a toy manufacturer using Prophet and TimeGPT. 23% reduction in excess inventory after 3 months.",
    tags: ["Prophet", "TimeGPT", "Python", "Streamlit", "Pandas"],
    detail: {
      overview: "Designed and built an end-to-end ML forecasting system for a friend's business to optimize warehouse inventory and reduce fulfillment inefficiencies.",
      bullets: [
        "Analyzed 4 years of historical sales data to build demand forecasting models",
        "Used Prophet and TimeGPT to generate and compare forecasts",
        "Delivered recommendations via a Streamlit dashboard"
      ]
    }
  }
];

const CONSULTING = [
  {
    id: "endless-frontier",
    label: "Endless Frontier Labs",
    title: "Lightning Rod Labs",
    description: "Market discovery, customer segmentation, and GTM analysis for an AI infrastructure and training data startup.",
    tags: ["GTM", "AI Infra", "Market Entry"],
    detail: {
      overview: "Conducted deep market discovery and GTM analysis for an AI infrastructure startup, evaluating vertical entry opportunities and enterprise adoption drivers.",
      bullets: [
        "Identified key customer segments and evaluated pricing hypotheses",
        "Assessed vertical entry opportunities across AI training data market",
        "Delivered competitive analysis and enterprise adoption framework"
      ]
    }
  },
  {
    id: "quantit",
    label: "Stern Signature Project",
    title: "Quantit · Seoul",
    description: "Strategy and execution for a Seoul-based AI FinTech firm — growth opportunities, competitive positioning, and international expansion.",
    tags: ["Strategy", "FinTech", "Korea", "International"],
    detail: {
      overview: "Led strategy and execution workstream for Quantit, a Seoul-based AI FinTech focused on automated investment and asset management platforms.",
      bullets: [
        "Assessed growth opportunities and competitive positioning in Korean FinTech market",
        "Evaluated potential international expansion through customer research and industry analysis",
        "Delivered strategic recommendations on product-market fit for global expansion"
      ]
    }
  },
  {
    id: "enerzai",
    label: "NYU AI Innovation Accelerator",
    title: "EnerzAI",
    description: "Commercialization strategy, pricing framework, and execution roadmap for an ML inference optimization platform.",
    tags: ["ML", "Pricing", "Commercialization", "SaaS"],
    detail: {
      overview: "Developed go-to-market strategy and pricing framework for EnerzAI, an ML inference optimization platform, as part of the NYU AI Innovation Accelerator.",
      bullets: [
        "Defined target customer segments and ideal customer profile",
        "Built pricing framework comparing usage-based vs. subscription models",
        "Delivered phased commercialization roadmap with go-to-market milestones"
      ]
    }
  }
];

const SKILLS = [
  {
    title: "Product Strategy",
    tags: ["0–1 Product Dev", "Roadmapping", "PRDs", "Prioritization", "GTM", "Platform Thinking"]
  },
  {
    title: "Analytics & Data",
    tags: ["SQL", "REST APIs", "A/B Testing", "Metric Trees", "Relational DBs"]
  },
  {
    title: "AI & Emerging Tech",
    tags: ["AI Prototyping", "OpenAI", "Claude", "ML Forecasting", "LLM Integration"]
  },
  {
    title: "Delivery & Tools",
    tags: ["Agile/Scrum", "Jira", "GitHub", "Figma", "Design Systems"]
  },
  {
    title: "Engineering",
    tags: ["Python", "React", "Node.js", "SQL", "Supabase", "REST APIs", "Streamlit", "Git"]
  }
];

const JOURNEY = [
  {
    logo: LOGOS.goldman,
    abbr: "GS",
    role: "Product Manager",
    org: "Goldman Sachs · Bangalore",
    year: "2019 – 2024",
    url: "goldman.html",
    description: "5 years at Goldman Sachs, starting in software engineering and growing into Product Management. Led capital optimization initiative improving efficiency by $1.2B with ~$25M annual P&L impact across 10+ regions.",
    tags: ["Product Management", "Capital Markets", "SQL", "Risk", "Software Engineering"],
    detail: {
      overview: "5 years at Goldman Sachs spanning software engineering and product management.",
      bullets: [
        "Built and redesigned global risk assessment workflows, reducing cycle time from 8 hours to 2 hours",
        "Grew into PM role leading firmwide capital optimization across 10+ regions",
        "Improved capital buffer efficiency by $1.2B with ~$25M annual P&L impact",
        "Supported Goldman Sachs China entity acquisition with cross-border regulatory execution"
      ]
    }
  },
  {
    logo: LOGOS.esusu,
    abbr: "ES",
    role: "MBA Product Manager Intern",
    org: "Esusu · Credit-Building Fintech · New York",
    year: "Summer 2025",
    url: "esusu.html",
    description: "Owned 0→1 AI mortgage underwriting product. Improved pilot-to-contract conversion by 22%, engaged 8+ lenders, and helped surface a $2M potential pipeline in lender contracts.",
    tags: ["PM", "Fintech", "AI", "0→1"],
    detail: {
      overview: "Summer internship at Esusu, a credit-building fintech focused on mortgage and consumer lending.",
      bullets: [
        "Owned full 0→1 strategy for AI-powered mortgage underwriting product",
        "Leveraged verified rental cash-flow data to define product vision and roadmap",
        "Built competitive landscape benchmarking alternative income verification models",
        "Improved pilot-to-contract conversion by 22% via SQL analysis and user feedback"
      ]
    }
  }
];