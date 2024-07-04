import audiophileDark from "@/assets/project-images/audiophile-project-dark.png";
import audiophileLight from "@/assets/project-images/audiophile-project-light.png";
import kanbanDark from "@/assets/project-images/kanban-project-dark.png";
import kanbanLight from "@/assets/project-images/kanban-project-light.png";
import pomodoroDark from "@/assets/project-images/pomodoro-project-dark.png";
import pomodoroLight from "@/assets/project-images/pomodoro-project-light.png";

export type ProjectType = (typeof projects)[number];

export const projects = [
  {
    keywords: [
      "Kanban Web App",
      "task management",
      "full-stack MERN app",
      "dark mode",
      "light mode",
      "sign up",
      "local storage",
      "drag-and-drop",
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind",
      "Zustand",
      "project preview",
      "view code",
      "project screenshot",
      "project description",
      "project insights",
      "purpose and goal",
      "problems and thought process",
      "lessons learned",
      "web development",
      "portfolio",
      "Simon Camacho"
    ],
    ogImage: "/ogs/kanban-og.png",
    otherProjectSlugs: ["fem-pomodoro-app", "audiophile"],
    previewProjectUrl: "https://fem-kanban.onrender.com/",
    slug: "kanban-web-app",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      author: {
        "@type": "Person",
        name: "Simon Camacho",
        url: "https://simoncamacho.com"
      },
      dateModified: "2024-07-03",
      datePublished: "2024-07-03",
      description:
        "Manage and track your tasks with my full-stack MERN web app. Switch between dark and light modes to suit your style. You can sign up to save your data or use it without an account, thanks to local storage. Enjoy intuitive drag-and-drop task management.",
      headline: "Kanban Web App",
      image: "https://simoncamacho.com/ogs/kanban-og.png",
      mainEntityOfPage: {
        "@id": "https://simoncamacho.com/en/projects/kanban-web-app",
        "@type": "WebPage"
      },
      publisher: {
        "@type": "Organization",
        logo: {
          "@type": "ImageObject",
          url: "https://simoncamacho.com/favicons/android-chrome-512x512.png"
        },
        name: "Simon Camacho"
      }
    },
    technologies: [
      { logo: "mongodb", name: "MongoDB" },
      { logo: "expressjs", name: "Express.js" },
      { logo: "react", name: "React" },
      { logo: "nodejs", name: "Node.js" },
      { logo: "tailwind", name: "Tailwind" },
      { logo: "zustand", name: "Zustand" }
    ],
    thumbnailDark: kanbanDark,
    thumbnailLight: kanbanLight,
    title: "Kanban Web App",
    translations: {
      en: {
        description:
          "Manage and track your tasks with my full-stack MERN web app. Switch between dark and light modes to suit your style. You can sign up to save your data or use it without an account, thanks to local storage. Enjoy intuitive drag-and-drop task management.",
        lessonsLearned:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!",
        problemsAndThoughtProcess:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!",
        purposeAndGoal:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!",
        webStackAndExplanation:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!"
      },
      fil: {
        description:
          "Pamahalaan at subaybayan ang iyong mga gawain gamit ang aking <i>full-stack MERN web app</i>. Piliin ang <i>dark</i> o <i>light mode</i> ayon sa iyong gusto. Puwede kang mag-<i>sign up</i> para i-<i>save</i> ang iyong <i>data</i> o gamitin ito nang walang <i>account</i>, salamat sa <i>local storage</i>. Masiyahan sa madaling <i>drag-and-drop</i> na pamamahala ng gawain.",
        lessonsLearned:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!",
        problemsAndThoughtProcess:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!",
        purposeAndGoal:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!",
        webStackAndExplanation:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!"
      }
    },
    viewCodeUrl: "https://fem-kanban.onrender.com/"
  },
  {
    keywords: [
      "Audiophile E-commerce Website",
      "e-commerce",
      "multi-page website",
      "Next.js",
      "responsive design",
      "local storage",
      "cart items",
      "modern design",
      "intuitive navigation",
      "shopping experience",
      "Tailwind",
      "Zustand",
      "project preview",
      "view code",
      "project screenshot",
      "project description",
      "project insights",
      "purpose and goal",
      "problems and thought process",
      "lessons learned",
      "web development",
      "portfolio",
      "Simon Camacho"
    ],
    ogImage: "/ogs/audiophile-og.png",
    otherProjectSlugs: ["kanban-web-app", "fem-pomodoro-app"],
    previewProjectUrl: "https://officialaudiophile.vercel.app/",
    slug: "audiophile",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      author: {
        "@type": "Person",
        name: "Simon Camacho",
        url: "https://simoncamacho.com"
      },
      dateModified: "2024-07-03",
      datePublished: "2024-07-03",
      description:
        "This multi-page e-commerce website, built with Next.js, is fully responsive and uses local storage to retain cart items. It features a modern design and intuitive navigation for an enhanced shopping experience.",
      headline: "Audiophile E-commerce Website",
      image: "https://simoncamacho.com/ogs/audiophile-og.png",
      mainEntityOfPage: {
        "@id": "https://simoncamacho.com/en/projects/audiophile",
        "@type": "WebPage"
      },
      publisher: {
        "@type": "Organization",
        logo: {
          "@type": "ImageObject",
          url: "https://simoncamacho.com/favicons/android-chrome-512x512.png"
        },
        name: "Simon Camacho"
      }
    },
    technologies: [
      { logo: "nextjs", name: "Next.js" },
      { logo: "tailwind", name: "Tailwind" },
      { logo: "zustand", name: "Zustand" }
    ],
    thumbnailDark: audiophileDark,
    thumbnailLight: audiophileLight,
    title: "Audiophile E-commerce Website",
    translations: {
      en: {
        description:
          "This multi-page e-commerce website, built with Next.js, is fully responsive and uses local storage to retain cart items. It features a modern design and intuitive navigation for an enhanced shopping experience.",
        lessonsLearned:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!",
        problemsAndThoughtProcess:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!",
        purposeAndGoal:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!",
        webStackAndExplanation:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!"
      },
      fil: {
        description:
          "Ang <i>multi-page e-commerce website</i> na ito, na ginawa gamit ang Next.js, ay ganap na <i>responsive</i> at gumagamit ng <i>local storage</i> upang mapanatiling naka-<i>store</i> ang mga <i>item</i> sa <i>cart</i>. Mayroon itong modernong disenyo at madaling pag-<i>navigate</i> para sa mas pinagbuting karanasan sa pagbili.",
        lessonsLearned:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!",
        problemsAndThoughtProcess:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!",
        purposeAndGoal:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!",
        webStackAndExplanation:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!"
      }
    },
    viewCodeUrl:
      "https://github.com/CarlosSimon02/fem-audiophile-ecommerce-website"
  },
  {
    keywords: [
      "FEM Pomodoro App",
      "Pomodoro timer",
      "progressive web app",
      "offline use",
      "customizable appearance",
      "notification alerts",
      "JavaScript",
      "Sass",
      "HTML",
      "project preview",
      "view code",
      "project screenshot",
      "project description",
      "project insights",
      "purpose and goal",
      "problems and thought process",
      "lessons learned",
      "web development",
      "portfolio",
      "Simon Camacho"
    ],
    ogImage: "/ogs/pomodoro-og.png",
    otherProjectSlugs: ["kanban-web-app", "audiophile"],
    previewProjectUrl: "https://fempomodoro.netlify.app/",
    slug: "fem-pomodoro-app",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      author: {
        "@type": "Person",
        name: "Simon Camacho",
        url: "https://simoncamacho.com"
      },
      dateModified: "2024-07-03",
      datePublished: "2024-07-03",
      description:
        "A Pomodoro-inspired timer that is a progressive web app, allowing offline use. It features customizable appearance options and provides notification alerts.",
      headline: "FEM Pomodoro App",
      image: "https://simoncamacho.com/ogs/pomodoro-og.png",
      mainEntityOfPage: {
        "@id": "https://simoncamacho.com/en/projects/fem-pomodoro-app",
        "@type": "WebPage"
      },
      publisher: {
        "@type": "Organization",
        logo: {
          "@type": "ImageObject",
          url: "https://simoncamacho.com/favicons/android-chrome-512x512.png"
        },
        name: "Simon Camacho"
      }
    },
    technologies: [
      { logo: "javascript", name: "Javascript" },
      { logo: "sass", name: "Sass" },
      { logo: "html", name: "HTML" }
    ],
    thumbnailDark: pomodoroDark,
    thumbnailLight: pomodoroLight,
    title: "FEM Pomodoro App",
    translations: {
      en: {
        description:
          "A Pomodoro-inspired timer that is a progressive web app, allowing offline use. It features customizable appearance options and provides notification alerts.",
        lessonsLearned: `<p>Oh boy! Where do I begin? This Frontend Mentor Challenge has provided me with some of the most valuable knowledge I've acquired so far, including Open Graph (OG), accessibility, search engine optimization (SEO), Block Element Modifier (BEM), MVC (Model View Controller) architecture, validations, closures, progressive web applications (PWA), and, most importantly, Node Package Manager (NPM). NPM has opened my mind to using libraries that are immensely helpful for my projects.</p><p>Initially, like my previous Frontend Mentor projects, I intended to write the code quickly without much consideration for quality. However, everything changed when I watched a <a href="https://www.youtube.com/watch?v=GEr--yTShz8&t=394s">video</a> from one of my favorite C++ channels, <a href="https://www.youtube.com/@TheCherno">The Cherno</a>. In it, he emphasized that the time spent on a project doesn't guarantee its quality. If you only focus on coding without learning, the resulting code might not be of high quality. His words deeply resonated with me because I had been approaching these Frontend Mentor challenges merely to test my coding speed and project completion time.</p><p>This realization inspired me to step out of my comfort zone and delve deeper into research and learning. As a result, I dedicated more time to learning and improving my skills.</p>`,
        problemsAndThoughtProcess:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!",
        purposeAndGoal:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!",
        webStackAndExplanation:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!"
      },
      fil: {
        description:
          "Ang <i>progressive web app</i> na ito ay isang <i>timer</i> na inspirado sa Pomodoro at may kakayahang magamit ng <i>user</i> kahit naka-<i>offline</i>. May mga pagpipilian para baguhin ang hitsura nito at nagbibigay ng abiso sa mga <i>notification</i>.",
        lessonsLearned:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!",
        problemsAndThoughtProcess:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!",
        purposeAndGoal:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!",
        webStackAndExplanation:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!"
      }
    },
    viewCodeUrl: "https://github.com/CarlosSimon02/fem-pomodoro-app"
  }
] as const;
