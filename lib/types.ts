// lib/types.ts
export interface Post {
  slug: string;
  title: string;
  date: string;
  summary?: string; // Das '?' bedeutet, dass das Feld optional ist
  description?: string;
  headerImage?: string;
  heroImage?: string;
  tags?: string[];
  author?: {
    name: string;
  } | null;
}
