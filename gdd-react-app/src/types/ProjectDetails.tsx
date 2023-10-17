export interface UserInput {
    user: string;
    projectAbstract: string;
    projectRegion: string;
    projectTitle: string;
    projectDetails: ProjectDetails;
  }

  export interface ProjectDetails {
    ethical: Ethicality;
    desire: Desirability;
    eco: string;
    feasibility: Feasbility;
    viable: Viability;
  }

  export interface Ethicality {
    problem: string;
    ethicalDeliberation: string;
    societalImpact: string;
  }

  export interface Desirability {
    opportunity: string;
    stakeholders: string;
    valueProposition: string;
    outcomes: string;
  }

  export interface Feasbility {
    activities: string;
    partners: string;
    channels: string;
  }

  export interface Viability {
    resources: string;
    revenue: string;
    cost: string;
  }