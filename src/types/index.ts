export interface Disease {
  id: string;
  name: string;
  plantType: string;
  description: string;
  treatment: string;
  symptoms: string[];
  severity: 'low' | 'medium' | 'high';
}

export interface DiagnosisResult {
  disease: Disease;
  confidence: number;
  timestamp: Date;
  imageData: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}
