// ─────────────────────────────────────────
// data.js — ALL YOUR CONTENT LIVES HERE
// Edit this file to update the site content
// ─────────────────────────────────────────

// Logo helper — uses Clearbit for company logos (free, reliable)
const LOGOS = {
  nyu:        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/New_York_University_Seal.svg/200px-New_York_University_Seal.svg.png", alt: "NYU" },
  goldman:    { src: "https://logo.clearbit.com/goldmansachs.com", alt: "Goldman Sachs" },
  esusu:      { src: "https://logo.clearbit.com/esusu.org", alt: "Esusu" },
  daiict:     { src: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/DA-IICT_logo.png/200px-DA-IICT_logo.png", alt: "DA-IICT" },
  endless:    { src: "https://logo.clearbit.com/endlessfrontierlabs.com", alt: "Endless Frontier Labs" },
  quantit:    { src: "https://logo.clearbit.com/quantit.io", alt: "Quantit" },
  nyu_accel:  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/New_York_University_Seal.svg/200px-New_York_University_Seal.svg.png", alt: "NYU AI Accelerator" },
};

// Ticker items — shown in the sliding bar
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
    id: "esusu",
    title: "AI Mortgage Underwriting",
    company: "Esusu · PM Intern",
    year: "2025",
    description: "Owned 0→1 strategy for an AI-powered mortgage underwriting product leveraging verified rental cash-flow data. Improved pilot-to-contract conversion by 22%.",
    tags: ["0→1 Product", "Fintech", "SQL", "AI/ML", "Roadmapping"],
    stats: [
      { num: "22%", label: "pilot-to-contract conversion lift" },
      { num: "0→1", label: "product built from scratch" },
      { num: "3", label: "cross-functional teams aligned" }
    ],
    detail: {
      overview: "Led the full product lifecycle for Esusu's AI-powered mortgage underwriting product — from market research and competitive benchmarking through roadmap definition and partner alignment.",
      bullets: [
        "Defined product vision and roadmap aligned with compliance and lending partner requirements",
        "Built competitive landscape benchmarking alternative income verification, embedded finance, and neobank models",
        "Used SQL-driven analysis and user feedback to validate assumptions and prioritize features",
        "Partnered with Risk, Compliance, and external mortgage lenders to design scalable underwriting decision frameworks",
        "Translated regulatory and business constraints into clear engineering requirements"
      ]
    }
  },
  {
    id: "goldman",
    title: "Capital Optimization Platform",
    company: "Goldman Sachs · Associate PM",
    year: "2022 – 2024",
    description: "Led a firmwide, multi-quarter capital optimization initiative across trading and secured financing businesses, improving capital buffer efficiency by $1.2B.",
    tags: ["Enterprise PM", "Capital Markets", "Experimentation", "SQL", "10+ Regions"],
    stats: [
      { num: "$1.2B", label: "capital buffer efficiency improved" },
      { num: "$25M", label: "annual P&L impact" },
      { num: "32%", label: "faster insight generation" }
    ],
    detail: {
      overview: "Owned end-to-end strategic workstreams across Goldman Sachs' trading and secured financing businesses, driving one of the firm's largest capital efficiency initiatives.",
      bullets: [
        "Drove ~$25M in annual P&L impact through capital buffer efficiency improvements",
        "Coordinated Risk, Trading, Legal, Compliance, and Engineering across 10+ regions",
        "Designed experimentation frameworks accelerating insight generation by 32% and improving adoption of new capital strategies",
        "Supported cross-border regulatory execution during Goldman Sachs' China entity acquisition",
        "Reduced manual effort by 30% through benchmarking and automation improvements"
      ]
    }
  },
  {
    id: "awaydays",
    title: "AwayDays NYC",
    company: "Side Project · Soccer Matchday Guide",
    year: "2025",
    description: "Built a soccer matchday companion for NYC fans — helping supporters plan away trips, discover viewing parties, and connect with the local soccer community.",
    tags: ["Product Design", "Community", "Soccer", "NYC"],
    emoji: "⚽",
    detail: {
      overview: "A passion project born from the NYC soccer scene — built to help away fans navigate the city on matchday. Aggregates pub guides, supporter culture, and event info in one place.",
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
    description: "Built an AI-powered demand forecasting and warehouse optimization tool — reducing overstock and improving fulfillment efficiency through ML-driven inventory predictions.",
    tags: ["AI Forecasting", "Operations", "ML", "Python"],
    emoji: "🏭",
    detail: {
      overview: "Designed and built an end-to-end ML forecasting system for a friend's business to optimize warehouse inventory and reduce fulfillment inefficiencies.",
      bullets: [
        "Analyzed historical sales data to build demand forecasting models",
        "Reduced overstock by identifying slow-moving SKUs and seasonal demand patterns",
        "Delivered recommendations via a simple dashboard the business owner could act on"
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
  }
];

const JOURNEY = [
  {
    logo: "NYU",
    role: "MBA Candidate",
    org: "NYU Stern School of Business · Strategy, Product Management & Finance",
    year: "2024 – 2026",
    description: "GMAT 750 (98th percentile) · Dean's List · Microsoft AI Hackathon runners-up. Developed AI-driven platform to record and optimize employee workflows.",
    tags: ["MBA", "Strategy", "Product Management", "Finance"],
    detail: {
      overview: "Pursuing MBA at NYU Stern with specialization in Strategy, Product Management, and Finance.",
      bullets: [
        "GMAT 750 — 98th percentile",
        "Dean's List honoree",
        "Microsoft AI Hackathon — Runners-up: built AI-driven platform to record and optimize employee workflows",
        "VP positions in Stern Technology Association, Asian Business Society, and Arts, Culture & Cuisine Club"
      ]
    }
  },
  {
    logo: "ES",
    role: "Product Manager Intern",
    org: "Esusu · Credit-Building Fintech · New York",
    year: "Summer 2025",
    description: "Owned 0→1 AI mortgage underwriting product. Improved pilot-to-contract conversion by 22% using SQL analysis and user research.",
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
  },
  {
    logo: "GS",
    role: "Associate · Product Manager",
    org: "Goldman Sachs · Bangalore",
    year: "2022 – 2024",
    description: "Led capital optimization initiative improving efficiency by $1.2B and ~$25M annual P&L. Designed experimentation frameworks accelerating insight generation by 32%.",
    tags: ["Capital Markets", "Enterprise PM", "Experimentation"],
    detail: {
      overview: "Promoted to Associate PM, leading firmwide capital optimization across trading and secured financing businesses.",
      bullets: [
        "Improved capital buffer efficiency by $1.2B with ~$25M annual P&L impact",
        "Coordinated 10+ regions across Risk, Trading, Legal, Compliance, and Engineering",
        "Designed experimentation frameworks accelerating insight generation by 32%",
        "Supported Goldman Sachs' China entity acquisition with cross-border regulatory execution"
      ]
    }
  },
  {
    logo: "GS",
    role: "Analyst · Software Engineer",
    org: "Goldman Sachs · Bangalore",
    year: "2019 – 2021",
    description: "Redesigned global risk assessment workflows using SQL and API integrations, reducing cycle time from 8 hours to 2 hours.",
    tags: ["Software Engineering", "SQL", "APIs", "Risk"],
    detail: {
      overview: "Started career as a Software Engineer at Goldman Sachs, partnering with Controllers and Credit teams.",
      bullets: [
        "Redesigned global risk assessment and monitoring workflows",
        "Used SQL and API integrations to reduce cycle time from 8 hours to 2 hours",
        "Partnered cross-functionally with Controllers and Credit teams"
      ]
    }
  },
  {
    logo: "DA",
    role: "B.Tech in ICT",
    org: "DA-IICT · Gandhinagar, India",
    year: "2015 – 2019",
    description: "Information and Communication Technology. Captained soccer team to 5 national tournament victories. Coached women's team to win a 64-team event.",
    tags: ["Engineering", "ICT", "Leadership"],
    detail: {
      overview: "Bachelor of Technology in Information and Communication Technology from DA-IICT, Gandhinagar.",
      bullets: [
        "Captained the soccer team to victory in 5 national tournaments",
        "Coached the women's team to win a 64-team event",
        "Organized annual sports tournaments with over 200 participants",
        "Managed a team of 12 members"
      ]
    }
  }
];