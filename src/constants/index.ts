// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  AM,
  Sii,
  ONCF,
  threejs,
  project1,
  project2,
  project3,
  project5,
  project6,
  user1,
  linkedin,
  github,
  selenium,
  robotframwork,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "À propos de moi",
    link: null,
  },
  {
    id: "work",
    title: "Experience",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Mon cv",
    link: "https://www.linkedin.com/ambry/?x-li-ambry-ep=AQK1SH0pkZpwKQAAAZTWb-JJcP7T4jiLFEsDddXDiTf-T0PccJ-xKN2Hhu0YojW8E7T3Qet7tyfExIHO2bZvcmoAoC-zVGV8FJz_tbN_810eXtH58M4Xntq4crBI4Wl2ZnlO6iZlWR3XYk5CZ1nmWhjNgLPLhhmRH4ZvNRWB_SKRgOSK5FSla2hbnTUV3l5GDNe5P5VTKfChOQsaaVmDMaJMXKutPJGJy75tMYHwQtQBKWA1HRMjCbEgpjjaTHfbrKIcQYMDh80938Z-ajIUs67r5UZ0poENGG1WSTyvuHRPHLh2Ci4Nhe0_GmVOSd1pOw4Em43K-I5VkJJk3ePIaMGFAMr9lZV97y9mImVo3wpOwAO_A8aJLuI14qgBrYetUHhJiy5rAxIv9w_n-dtA7LL9lQbbpWSAuDt-_j5au1Zu8PCSkQ8jP5_JcmGHp4znoOnfdqAS6noScJVgpusEwO88v4CNG55RZQAViPOpJITT-aO517VKzSdYuFC-7i2yJLXlfuxB8aeHmJ0FYF176uIVF48hmO-tfkjLLbi0lOfz2QaLURrt785N_XJglt5ikzyTtw",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Testeur de logiciel",
    icon: web,
  },
  {
    title: "Backend développeur",
    icon: mobile,
  },
  {
    title: "Frontend développeur\n",
    icon: backend,
  },
  {
    title: "Qualité Assurance",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [

  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

  {
    name: "Selenium",
    icon: selenium,
  },
  {
    name: "robotframwork",
    icon: robotframwork,
  },

] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Ingénieur en Test et Automatisation - Stage PFE\n",
    company_name: "Sii Services Maroc",
    icon: Sii,
    iconBg: "#fff",
    date: "Avr 2024 - sept 2024",
    points: [
      "Rédaction de la conception des tests en fonction des exigences fonctionnelles et techniques.",
      "Automatisation des scénarios de test en utilisant Robot Framework et Selenium.",
      "Développement de scripts de test en Python et JavaScript.",
      "Exécution des tests manuels pour valider les nouvelles fonctionnalités et corriger les anomalies",
      "Gestion des cas de test et suivi des résultats dans TestRail.",
      "Participation à l'intégration continue en configurant et en maintenant des pipelines CI/CD dans GitLab",
    ],
  },

  {
    title: "Stage Technique",
    company_name: "ONCF, Rabat ",
    icon: ONCF,
    iconBg: "#fff",
    date: "Juil 2023 - Sept 2023",
    points: [
      "Digitalisation d'une application de demande matériel (DM).",
      "Collaborer avec des équipes dynamique, notamment des concepteurs, et d'autres développeurs, pour créer une numérisation de haute qualité.",
      "Mettre en œuvre une conception réactive et assurer la compatibilité entre navigateurs.",
      "Participer aux révisions de code et fournir des commentaires constructifs aux autres développeurs.",
    ],
  },
  {
    title: "PHP Développeur",
    company_name: "AM NEGOCE",
    icon: AM,
    iconBg: "#fff",
    date: "Juil 2022 - Août 2022",
    points: [
      "Développer et maintenir des applications Web utilisant PHP et d'autres technologies connexes.",
      "Le travail requis lors de ce projet est de créer une application web concernant la facturation client et la gestion des stocks avec PHP",
      "Mettre en œuvre une conception réactive et assurer la compatibilité entre navigateurs.",

    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Hail El Mehdi a été un stagiaire exemplaire à l'ONCF. Il s'est montré professionnel, engagé et curieux tout au long de son stage.",

    name: "Mohssin Azzabi",
    designation: "Gérant Fondateur spécialisée en Domotique et SMART Things of SMART-WAY Maroc Nav",

    company: "Acme Co",
    image: user1,
  },

] as const;

// Projects
export const PROJECTS = [
  {
    name: "Gestion De Transport\n",
    description:
      "L'application de gestion de transport développée avec Java EE est une solution complète pour la gestion efficace des opérations de transport professionnel",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JEE",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Robot4/Robot4-Gestion-Transport-JEE",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
  {
    name: "Gestion De Stock",
    description:
        "L'application de gestion de stock développée en PHP est une solution complète pour optimiser la gestion des stocks de l'entreprise AM NEGOCE ",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Robot4/Gestion-Stock",
    live_site_link: "http://gestion-stock.42web.io/",
  },
  {
    name: "Club De Sport",
    description:
        "L'application de gestion de club de sport développée en PHP est une solution complète dédiée à simplifier la gestion quotidienne d'un club sportif",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Robot4/Club_sport",
    live_site_link: "https://emsiproject.netlify.app/index.html",
  },

  {
    name: "Gestion DM",
    description:
        "une application qui facilitera la collaboration entre les districts, le DRIC, le DMI et les magasiniers, tout en améliorant l'efficacité et la traçabilité de ce processus essentiel.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/Robot4/Gestion_dm",
    live_site_link: "",
  },
  {
    name: "Conseiller en voyages",
    description:
        "Application Web qui vous permet de visualiser vos restaurants, hôtels et attractions à proximité, qui peuvent être triés par notes, prix et bien plus encore..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
] as const;

export const SOCIALS = [

  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/hail-el-mehdi-873131197/",
  },

  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Robot4",
  },
] as const;
