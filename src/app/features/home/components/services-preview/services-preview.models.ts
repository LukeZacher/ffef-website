export interface ServicesGroup {
  groupName: string;
  servicesList: Service[];
}

export interface Service {
  serviceName: string;
  subText?: string;
}

export interface BenefitsGroup {
  ageGroup: string;
  benefitsList: Benefit[];
  shared?: boolean;
}

export interface Benefit {
  benefitDescription: string;
}
