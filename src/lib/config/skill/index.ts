export interface Skill {
  name: string;
  href?: string | null;
  icon: any; // TODO: add icon
}

export const skills: Skill[] = [
  { name: "Svelte", href: "https://svelte.dev", icon: null },
  { name: "Next.js", href: "https://nextjs.org", icon: null },
  { name: "Node.js", href: "https://nodejs.org", icon: null },
  { name: "Golang", href: "https://go.dev", icon: null },
  { name: "TypeScript", href: "https://www.typescriptlang.org", icon: null },
  { name: "Docker", href: "https://www.docker.com", icon: null },
  { name: "PostgreSQL", href: "https://www.postgresql.org", icon: null },
  { name: "MongoDB", href: "https://www.mongodb.com", icon: null },
];
