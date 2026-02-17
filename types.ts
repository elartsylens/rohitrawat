export interface Mechanism {
  title: string;
  desc: string;
}

export interface TableRow {
  type: string;
  price: string;
  consumption: string;
  revenue: string;
  elasticity: string;
  val: number;
}

export interface Stat {
  label: string;
  val: string;
}

export interface DemandSector {
  sector: string;
  share: string;
}

export interface ValueChainSector {
  sector: string;
  value: string;
}

export interface TransmissionSector {
  sector: string;
  value: string;
  desc: string;
}

export interface ValidationMetric {
  metric: string;
  change: string;
}

export interface ProjectDetails {
  title: string;
  objective: string;
  type?: string;

  // For Project 04 (Pricing)
  microPoints?: string[];
  table?: TableRow[];
  insight?: string;
  mechanisms?: Mechanism[];
  outcome?: string;

  // For Project 01 (Impact)
  stats?: Stat[];
  demandMap?: DemandSector[];
  valueChain?: ValueChainSector[];
  transmission?: TransmissionSector[];
  validation?: ValidationMetric[];
  anchors?: string[];
}

export interface WorkItem {
  id: string;
  title: string;
  subtitle: string;
  impact: string;
  desc: string;
  tags?: string[];
  hasDetailedView?: boolean;
  details?: ProjectDetails;
}

export interface Profile {
  name: string;
  title: string;
  role: string;
  company: string;
  practice: string;
  email: string;
  linkedin: string;
  linkedinHandle: string;
  photography: string;
  logoUrl: string;
  work: WorkItem[];
}