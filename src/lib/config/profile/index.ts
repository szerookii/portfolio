interface EducationItem {
  period: string;
  title: string;
  detail: string;
}

interface ContactItem {
  name: string;
  link: string;
  icon: any; // TODO: add icon
}

export interface Profile {
  education: EducationItem[];
  contacts: ContactItem[];
  interests: string[];
}

export const profile: Profile = {
  education: [
    {
      period: "2020 - 2023",
      title: "Baccalauréat technologique STI2D",
      detail: "Lycée Polyvalent Louis Pasteur",
    },
    {
      period: "2023",
      title: "BUT Informatique",
      detail: "Université A de Lille",
    },
  ],
  contacts: [
    {
      name: "Discord",
      link: "https://discord.com/users/810596177857871913",
      icon: null,
    },
    {
      name: "Email",
      link: "mailto:contact@szeroki.fr",
      icon: null,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mathis-lutic-604a3a265",
      icon: null,
    },
    {
      name: "GitHub",
      link: "https://github.com/szerookii",
      icon: null,
    },
  ],
  interests: [
    "développement",
    "rétro-ingénierie",
    "jeux-vidéo",
    "open-source",
    "musique",
  ],
};
