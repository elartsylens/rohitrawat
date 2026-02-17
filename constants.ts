import { Profile } from './types';

export const PROFILE: Profile = {
  name: "ROHIT RAWAT",
  title: "Strategy Analytics | Applied Econometrics",
  role: "Strategy Consultant",
  company: "Deloitte",
  practice: "Strategic Pricing & Growth",
  email: "rawatrohit0299@gmail.com",
  linkedin: "https://linkedin.com/in/rohitrawat072",
  linkedinHandle: "rohitrawat072",
  photography: "https://elartsylens.com",
  logoUrl: "https://lh3.googleusercontent.com/pw/AP1GczPm6uDEw6eSc0Tn1CY1QjfRTba1__LCLXCgGHyIEIqnnt949UGNZje7RbwAbAY9AWNWVpyPQyrTNB8ufD7eAsmlMTmsp29qR_afvcmCREbs6k0L6kXsNaIMuNLtHCpciEjy8aFN_yJCP7N1Sok0FwfvsA=w454-h406-s-no-gm?authuser=0",
  work: [
    { 
        id: "01", 
        title: "Economic Impact Analysis", 
        subtitle: "Mahakumbh Mela ", 
        impact: "$23.5B GDP Contribution", 
        desc: "National income accounting model estimating sectoral demand across hospitality and retail..", 
        tags: ["Input-Output Model", "R"],
        hasDetailedView: true,
        details: {
            type: "Event Impact",
            title: "Mahakumbh 2025: National Accounts–Consistent Impact Model",
            objective: "Developed a demand-to-value framework to estimate the ~$23.5B macroeconomic shock of the world's largest religious gathering.",
            stats: [
                { label: "Pilgrim Visits", val: "663 Mn" },
                { label: "Avg Per-Capita Spend", val: "₹3,529 (~$41.5)" },
                { label: "Total Stimulus", val: "$29.8B" }
            ],
            demandMap: [
                { sector: "Transport", share: "46%" },
                { sector: "Hotels & Rest.", share: "20%" },
                { sector: "Trade & Retail", share: "20%" },
                { sector: "Other Services", share: "14%" }
            ],
            valueChain: [
                { sector: "Transport", value: "4.09" },
                { sector: "Trade & Retail", value: "4.10" },
                { sector: "Hotels & Rest.", value: "1.59" },
                { sector: "Other Services", value: "2.42" }
            ],
            transmission: [
                { sector: "Manufacturing", value: "3.02", desc: "Production Shock" },
                { sector: "Agriculture", value: "2.20", desc: "Food Supply Chain" },
                { sector: "Real Estate", value: "1.42", desc: "Professional Services" },
                { sector: "Financial Services", value: "0.87", desc: "Capital Flows" },
                { sector: "Construction", value: "0.96", desc: "Infrastructure" }
            ],
            validation: [
                { metric: "Air Passengers", change: "+34% YoY" },
                { metric: "Toll Traffic", change: "+146% YoY" },
                { metric: "Vehicle Flow", change: "+186% MoM" }
            ],
            anchors: [
                "SUT 2019–20 aligned tax and margin adjustments",
                "Formal and informal supply chains quantified in single framework",
                "Empirical closure via high-frequency activity indicators"
            ]
        }
    },
    { 
        id: "02", 
        title: "Risk & Anomaly Detection", 
        subtitle: "Behavioral Analytics", 
        impact: "$90M Potential Recovery", 
        desc: "PCA-based scoring system for 20,000+ entities to automate high-risk flagging.", 
        tags: ["PCA", "Anomaly Detection"] 
    },
    { 
        id: "03", 
        title: "Industrial Index Rebasing", 
        subtitle: "Value Discovery", 
        impact: "$700M Value Addition", 
        desc: "Correcting MSME contribution underestimation using alternative activity proxies.", 
        tags: ["Metric Design", "Nowcasting"] 
    },
    { 
        id: "04", 
        title: "Pricing Optimization", 
        subtitle: "Revenue Strategy", 
        impact: "10% Margin Increase", 
        desc: "Elasticity-driven optimization model for cross-market benchmarking.", 
        tags: ["Elasticity", "Optimization"],
        hasDetailedView: true,
        details: {
            title: "Elasticity-Driven Pricing Optimization Model",
            objective: "Revenue ↑ through elasticity-based tax redesign",
            microPoints: [
                "Modeled volume response by price band",
                "Simulated multi-rate scenarios",
                "Benchmarked against cross-state structures"
            ],
            table: [
                { type: "Country Liquor (CL)", price: "+10%", consumption: "−14%", revenue: "−5.4%", elasticity: "−1.4 Elastic", val: -5.4 },
                { type: "Foreign Liquor (FL)", price: "+10%", consumption: "−4%", revenue: "+5.6%", elasticity: "−0.4 Inelastic", val: 5.6 },
                { type: "Beer", price: "−5%", consumption: "+12%", revenue: "+6.4%", elasticity: "−2.4 Highly Elastic", val: 6.4 }
            ],
            insight: "A uniform rate increase is structurally inefficient. Premium FL delivers a 5.6% revenue lift under a 10% hike due to brand stickiness and prestige consumption. The same action in CL produces a 5.4% contraction, as highly price-sensitive consumers shift to illicit or cross-border supply.",
            mechanisms: [
                { title: "Price Floor Detection", desc: "Detects the effective price floor constraint in CL and substitution risk." },
                { title: "Brand Inelasticity", desc: "Quantifies brand-driven inelasticity in FL for premiumization strategies." },
                { title: "Arbitrage Benchmarking", desc: "Incorporates inter-state leakage elasticity into benchmarking as a core decision variable." },
                { title: "Scenario Testing", desc: "Enables segment-wise simulation to identify revenue-maximizing bands." }
            ],
            outcome: "Transforms pricing from uniform excise revisions to a segment-wise revenue optimization strategy."
        }
    },
    { 
        id: "05", 
        title: "Performance Gap Diagnostics", 
        subtitle: "Structural Leakage", 
        impact: "Identified ~12% Structural Leakage", 
        desc: "Utilized tax-to-output ratios and trend-divergence to identify structural revenue leakages across sectors and districts.", 
        tags: ["Tax-to-Output", "Trend Divergence"] 
    },
    { 
        id: "06", 
        title: "Workforce Nowcasting", 
        subtitle: "Employment Response", 
        impact: "85%+ Prediction Accuracy", 
        desc: "Developed elasticity-based models using high-frequency proxies (mandi flows, logistics) to estimate real-time employment response.", 
        tags: ["Elasticity Modeling", "Logistics Proxies"] 
    },
    { 
        id: "07", 
        title: "Market Opportunity Scoring", 
        subtitle: "Credit Prioritization", 
        impact: "4.2% NIM Increase", 
        desc: "Ranked 75 regions for credit flow prioritization, reallocating capital from saturated metros to high-growth, under-banked hubs.", 
        tags: ["Scoring Model", "Capital Allocation"] 
    },
    { 
        id: "08", 
        title: "Multiplier Impact Analysis", 
        subtitle: "Dependency Mapping", 
        impact: "3x Output Effect", 
        desc: "Identified high-impact sectors demonstrating that downstream industries delivered 2-3x higher economy-wide output than primary production.", 
        tags: ["Dependency Mapping", "Multiplier Effect"] 
    }
  ]
};