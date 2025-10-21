export interface Dhikr {
  id: string;
  resource: string;
  resourceAr: string;
  content: string;
  contentAr: string;
  repetitions: number;
}

export interface Feeling {
  id: string;
  nameEn: string;
  nameAr: string;
  icon: string;
  bgColor: string;
  textColor: string;
  adhkarList: Dhikr[];
}
