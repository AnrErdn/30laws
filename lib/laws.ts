import lawsData from "@/data/laws.json";
import type { Law } from "@/types/law";

export const laws: Law[] = lawsData as Law[];

export function getLawBySlug(slug: string): Law | undefined {
  return laws.find((law) => law.slug === slug);
}

export function getLawById(id: number): Law | undefined {
  return laws.find((law) => law.id === id);
}

export function getAdjacentLaws(currentId: number): {
  prev: Law | undefined;
  next: Law | undefined;
} {
  return {
    prev: laws.find((l) => l.id === currentId - 1),
    next: laws.find((l) => l.id === currentId + 1),
  };
}

export const categoryOrder: Record<string, number> = {
  "behavior-emotion": 0,
  "cognitive-load": 1,
  "decision-making": 2,
  "perception-gestalt": 3,
  "system-engineering": 4,
};

export function getLawsByCategory(): Record<string, Law[]> {
  return laws.reduce(
    (acc, law) => {
      if (!acc[law.category]) acc[law.category] = [];
      acc[law.category].push(law);
      return acc;
    },
    {} as Record<string, Law[]>
  );
}
