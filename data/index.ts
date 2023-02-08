export type Project = {
  title: string;
  link: string;
  website?: string;
  content: string;
  image: string;
}

export type Job = {
  position: string;
  description: string;
  link: string;
  company: string;
  date: string;
  city: string;
  skills: string[];
  tags: string[];
  content: string[];
  logo: string;
}

export type Profile = {
  name: string;
  email: string;
  avatar: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  content: string;
  links: {
    linkedin: string;
    github: string;
  };
  projects: Project[];
  experience: Job[];
  cv_link: string;
}

export const profile: Profile = {
  name: "gustavo peña",
  email: "gustavo.pema@gmail.com",
  avatar: "/avatar.jpg",
  eyebrow: "hi, my name is Gustavo Peña",
  title: "I build things for the web",
  subtitle: "i build things for the web",
  content:
    "i'm a <strong>frontend developer</strong> with 3+ years of experience developing web applications with Javascript, Vue.js and React, following best practices and working closely with UI teams to match beautiful designs with well-written code",
  links: {
    linkedin: "https://www.linkedin.com/in/gustavo-s-pena/",
    github: "https://github.com/gustavvopenna",
  },
  projects: [
    {
      title: "pokedex",
      link: "https://github.com/gustavvopenna/react-pokedex",
      website: "https://react-pokedex-gustavvopenna.vercel.app/",
      content:
        "Made with React, React Query, Tailwind and PokeAPI. It's a simple Pokedex that allows you to search for pokemons and see their stats.",
      image: "/pokemon-mockup-2.png",
    },
    {
      title: "bitso clone",
      link: "https://github.com/gustavvopenna/bitso-clone",
      content:
        "Made with React Native, Expo and React Navigation. It's a clone of the Bitso app, a mexican crypto exchange.",
      image: "/bitso-mockup.png",
    },
  ],
  experience: [
    {
      position: "Frontend developer",
      description: "",
      link: "https://bejamas.io/",
      company: "Bejamas",
      logo: "/bejamas_logo.png",
      date: "Sep 2022 - Feb 2023",
      city: "Poland - remote",
      skills: ["React.js", "Next.js", "Gatsby", "Astro", "Hugo", "Go", "Javascript", "HTML", "CSS", "SASS", "Tailwind", "Git"],
      tags: ["full-time", "contractor", "remote"],
      content: ["test", "test"]
    },
    {
      position: "Web UI Developer SSr",
      description: "",
      link: "https://globant.com/",
      company: "Globant",
      logo: "/globant_logo.jpeg",
      date: "Sep 2021 - Nov 2021",
      city: "Mexico City - remote",
      skills: ["React.js", "Javascript", "Redux", "HTML", "CSS", "SASS", "Git"],
      tags: ["full-time", "remote"],
      content: ["test", "test"]
    },
    {
      position: "Frontend developer",
      description: "HR SaaS provides solutions for 100+ small and medium companies, including time clock, recruitment, training, incidences management, and many more modules.",
      link: "https://worky.mx/",
      company: "Worky.mx",
      logo: "/worky_logo.png",
      date: "Sep 2020 - Sep 2021",
      city: "Mexico City - remote",
      skills: ["Vue.js", "Javascript", "Vuex", "HTML", "CSS", "Tailwind", "Git", "Jest", "Firebase"],
      tags: ["full-time", "remote"],
      content: [
        "Refactored incidences module for mobile devices, reducing bugs reported by 30%.",
        "Implemented a time clock module which increased daily sessions by 10% and as it was delivered before the deadline, it was the deal-breaker to get new companies. 3 months alive, it became the second most used module in the platform."
      ]
    },
    {
      position: "Frontend developer jr",
      description: "A fintech that has provided free financial advising to more than 2 million people and suggests personalized financial products based on credit bureau information.",
      link: "https://www.rocket.la/",
      company: "Rocket.la",
      logo: "/rocket_logo.png",
      date: "Jul 2019 - Sep 2020",
      city: "Mexico City - onsite",
      skills: ["Vue.js", "Nuxt.js", "Javascript", "HTML", "CSS", "Tailwind", "SASS", "Git"],
      tags: ["full-time", "hybrid"],
      content: [
        "Developed web app v2 from scratch, taking part in the research, design, and architecture decisions. Thanks to the new technologies we used, several metrics were improved like first-time load, user average time session, monthly active sessions, lighthouse performance, and retention through the onboarding funnel. All of this also was reflected in the increase of the NPS from 40 to 75 and the reduction of bugs reported by 80%.",
        "Developed a new feature to allow users to create their own financial goals and track their progress. This feature was developed using Vue.js and Tailwind CSS, and it was integrated with the backend team to allow users to save their goals in the database.",
        "Proposed and led the integration of a content manager(CMS) which increased the speed of making text changes from 15 to 1 minute and liberate the tech team from making those changes."
      ]
    },
  ],
  cv_link: "https://res.cloudinary.com/dkr0nb41v/image/upload/v1675737496/docs/GUSTAVO_PEN%CC%83A__RESUME_ehcoju.pdf"
};

export const profileEs: Profile = {
  name: "gustavo peña",
  email: "gustavo.pema@gmail.com",
  avatar: "/avatar.jpg",
  eyebrow: "hola, mi nombre es Gustavo Peña",
  title: "Construyo páginas web",
  subtitle: "Construyo cosas para la web",
  content:
    "soy un <strong>desarrollador de frontend</strong> con más de 3 años de experiencia desarrollando aplicaciones web con Javascript, Vue.js y React, siguiendo las mejores practicas y trabajanco muy de cerca con equipos de UI para crear experiencias de usuario increíbles.",
  links: {
    linkedin: "https://www.linkedin.com/in/gustavo-s-pena/",
    github: "https://github.com/gustavvopenna",
  },
  projects: [
    {
      title: "pokedex",
      link: "https://github.com/gustavvopenna/react-pokedex",
      website: "https://react-pokedex-gustavvopenna.vercel.app/",
      content:
        "Hecho con React, React Query, Tailwind y PokeAPI. Es un simple Pokedex que te permite buscar pokemones y ver sus estadísticas.",
        image: "/pokemon-mockup-2.png",
    },
    {
      title: "bitso clone",
      link: "https://github.com/gustavvopenna/bitso-clone",
      content: "Hecho con React Native, Expo y React Navigation. Es un clon de la app de Bitso, una exchange de criptomonedas mexicana.",
      image: "/bitso-mockup.png",
    },
  ],
  experience: [
    {
      position: "Frontend developer",
      description: "",
      link: "https://bejamas.io/",
      company: "Bejamas",
      logo: "/bejamas_logo.png",
      date: "Sep 2022 - Feb 2023",
      city: "Polonia - remoto",
      skills: ["React.js", "Next.js", "Gatsby", "Astro", "Hugo", "Go", "Javascript", "HTML", "CSS", "SASS", "Tailwind", "Git"],
      tags: ["full-time", "contractor", "remote"],
      content: ["test", "test"]
    },
    {
      position: "Web UI Developer SSr",
      description: "",
      link: "https://globant.com/",
      company: "Globant",
      logo: "/globant_logo.jpeg",
      date: "Sep 2021 - Nov 2021",
      city: "Ciudad de México - remoto",
      skills: ["React.js", "Javascript", "Redux", "HTML", "CSS", "SASS", "Git"],
      tags: ["full-time", "remote"],
      content: ["test", "test"]
    },
    {
      position: "Frontend developer",
      description: "HR SaaS provides solutions for 100+ small and medium companies, including time clock, recruitment, training, incidences management, and many more modules.",
      link: "https://worky.mx/",
      company: "Worky.mx",
      logo: "/worky_logo.png",
      date: "Sep 2020 - Sep 2021",
      city: "Ciudad de México - remoto",
      skills: ["Vue.js", "Javascript", "Vuex", "HTML", "CSS", "Tailwind", "Git", "Jest", "Firebase"],
      tags: ["full-time", "remote"],
      content: [
        "Refactorizamos el módulo de incidencias para dispositivos móviles, reduciendo los errores reportados en un 30%.", "Implementamos un módulo de reloj de tiempo que aumentó las sesiones diarias en un 10% y como se entregó antes de la fecha límite, fue el factor decisivo para obtener nuevas empresas. 3 meses después de su lanzamiento, se convirtió en el segundo módulo más utilizado en la plataforma."
      ]
    },
    {
      position: "Frontend developer jr",
      description: "A fintech that has provided free financial advising to more than 2 million people and suggests personalized financial products based on credit bureau information.",
      link: "https://www.rocket.la/",
      company: "Rocket.la",
      logo: "/rocket_logo.png",
      date: "Jul 2019 - Sep 2020",
      city: "Ciudad de México - presencial",
      skills: ["Vue.js", "Nuxt.js", "Javascript", "HTML", "CSS", "Tailwind", "SASS", "Git"],
      tags: ["full-time", "hybrid"],
      content: ["Desarrolle la web app v2 desde cero, participando en la investigación, diseño y decisiones de arquitectura. Gracias a las nuevas tecnologías que usamos, varias métricas se mejoraron como la carga inicial, el tiempo promedio de sesión del usuario, las sesiones activas mensuales, el rendimiento de lighthouse y la retención a través del embudo de adquisición. Todo esto también se reflejó en el aumento del NPS de 40 a 75 y la reducción de los errores reportados en un 80%.", "Desarrollé una nueva función que permite a los usuarios crear sus propios objetivos financieros y rastrear su progreso. Esta función se desarrolló usando Vue.js y Tailwind CSS y se integró con el equipo de backend para permitir a los usuarios guardar sus metas en la base de datos.", "Propuse y lideré la integración de un administrador de contenido (CMS) que aumentó la velocidad de realizar cambios de texto de 15 a 1 minuto y liberó al equipo de tecnología de realizar esos cambios.", "Propuse y lideré la integración de un administrador de contenido (CMS) que aumentó la velocidad de realizar cambios de texto de 15 a 1 minuto y liberó al equipo de tecnología de realizar esos cambios."],
    },
  ],
  cv_link: "https://res.cloudinary.com/dkr0nb41v/image/upload/v1675737496/docs/GUSTAVO_PEN%CC%83A__RESUME_ehcoju.pdf"
};