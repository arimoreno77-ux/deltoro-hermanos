export interface Project {
  id: number;
  title: string;
  description: string;
  roleStack: string[];
  link: string;
}

export interface Content {
  hero: {
    name: string;
    role: string;
    tagline: string;
  };
  projects: Project[];
  about: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    cv: string;
  };
}

export const content: Content = {
  hero: {
    name: "Ramon Ariel Moreno",
    role: "UX/UI Designer & Design Engineer / Product Builder",
    tagline: "Diseño de interfaces, sistemas de diseño y desarrollo enfocado en producto.",
  },
  projects: [
    {
      id: 1,
      title: "Design System & Architecture",
      description: "Sistema de diseño escalable con tokens tipográficos, componentes atómicos y documentación interactiva para productos digitales complejos.",
      roleStack: ["UX/UI Design", "Frontend", "Design Tokens"],
      link: "#",
    },
    {
      id: 2,
      title: "Product Building & Workflow",
      description: "Desarrollo de herramientas de productividad y flujos de trabajo automatizados para equipos de diseño y desarrollo.",
      roleStack: ["Product Design", "System Architecture", "React"],
      link: "#",
    },
    {
      id: 3,
      title: "Interface Prototyping Engine",
      description: "Prototipado rápido de interfaces de alta fidelidad con microinteracciones y validación temprana de usabilidad.",
      roleStack: ["Interface Design", "Prototyping", "TypeScript"],
      link: "#",
    },
  ],
  about: "Diseñador UX/UI enfocado en evolucionar hacia Design Engineering y Product Building. Especializado en sistemas de diseño, tokens, prototipado e integración con código.",
  contact: {
    email: "ramon@example.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    cv: "#",
  },
};
