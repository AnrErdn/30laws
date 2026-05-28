export type LawCategory =
  | "cognitive-load"
  | "decision-making"
  | "perception-gestalt"
  | "behavior-emotion"
  | "system-engineering";

export interface Law {
  id: number;
  slug: string;
  title: string;
  category: LawCategory;
  categoryLabel: string;
  accentColor: string;
  definition: string;
  principle: string[];
  physicalExample: {
    title: string;
    description: string;
  };
  digitalExample: {
    title: string;
    description: string;
  };
  takeaway: string;
  hasDemo?: boolean;
}
