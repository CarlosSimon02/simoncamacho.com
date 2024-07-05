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
        description: `Manage and track your tasks with my full-stack MERN web app. Switch between dark and light modes to suit your style. You can sign up to save your data or use it without an account, thanks to local storage. Enjoy intuitive drag-and-drop task management.`,
        lessonsLearned: `<p>This project was a treasure trove of lessons. Creating a working and complete project using the MERN stack was a major milestone. Building a full-stack application from scratch gave me a deep understanding of how the different parts interact, from database management with MongoDB to creating dynamic user interfaces with React and server-side scripting with Node.js.</p><p>Tailwind CSS changed my perspective on styling. Its utility-first approach allowed me to iterate quickly on the design, making the development process more enjoyable and productive.</p><p>State management with Zustand was another big learning point. Managing complex states in a feature-rich application can be daunting, but Zustand’s straightforward API made it manageable. I learned how to implement state management patterns that are both scalable and maintainable.</p><p>Radix UI was a game-changer in terms of accessibility and customization. It taught me the importance of building inclusive applications that everyone can use. The pre-built components saved me time and ensured a polished, professional look.</p><p>Beautiful DnD was an eye-opener for drag-and-drop interactions. It made creating a dynamic and interactive user experience much easier, which is essential for a Kanban board.</p>`,
        problemsAndThoughtProcess: `<p>Of course, this project wasn’t without its challenges. Managing the intricate state of the application was tough. With dynamic task updates, drag-and-drop functionality, and user authentication, keeping everything in sync was a real challenge. But Zustand’s simple yet powerful state management capabilities made it all possible.</p><p>Performance and responsiveness were critical. An app like this needs to be fast and intuitive. The MERN stack provided a solid foundation, but I had to ensure efficient database queries and optimize the React components for better performance. Tailwind CSS played a crucial role here, enabling me to build a responsive and clean UI without getting bogged down in the process.</p><p>Designing with Radix UI had its own learning curve. Initially, integrating these components required some adjustments, but the payoff was huge. Radix UI ensured that my app was accessible and visually appealing, which was a key goal from the start.</p><p>Beautiful DnD added another layer of complexity. Implementing smooth and intuitive drag-and-drop interactions was challenging but ultimately rewarding. This library helped me create a dynamic and user-friendly experience, which is essential for a Kanban board.</p><p>Throughout the project, I focused on creating a seamless and efficient user experience. I wanted to build an app that looked great and performed exceptionally well. The lessons from my previous projects, like the importance of a clean codebase and efficient state management, were invaluable in guiding my decisions.</p><p>Looking back, this project was a turning point. It pushed me to refine my skills and broaden my understanding of full-stack development. The challenges I faced and overcame taught me crucial lessons about performance, design, and state management, all of which will serve me well in future projects.</p>`,
        purposeAndGoal: `<p>After completing several projects, I was itching to create something that would really up my productivity game. That’s when I decided to build a Kanban web app. I needed an efficient tool to manage tasks, and what better way to improve my skills than by building something I’d actually use every day? My main goal was to master the MERN stack and develop a tool that could help others streamline their workflow just as much as it would help me.</p>`,
        webStackAndExplanation: `<p>For this project, I went with the MERN stack (MongoDB, Express, React, Node.js), Tailwind CSS, Zustand, Radix UI, and Beautiful DnD.</p><p><strong>MERN Stack</strong>: The MERN stack was a solid choice. MongoDB was perfect for storing all the task data with its flexible, document-based structure. Express provided a strong backbone for the backend, allowing me to build a robust API. React’s component-based architecture made the frontend development smooth, and Node.js brought everything together on the server-side. It felt like having a well-oiled machine at my fingertips.</p><p><strong>Tailwind CSS</strong>: When it came to styling, Tailwind CSS was my best friend. Its utility-first approach let me build a clean, responsive UI without drowning in custom CSS. The consistency and responsiveness provided by Tailwind were crucial for the dynamic nature of a Kanban board.</p><p><strong>Zustand</strong>: For state management, I chose Zustand. Considering the complexity of a Kanban app, with features like dynamic task updates and user authentication, Zustand’s simplicity and flexibility were a lifesaver. It allowed me to manage state efficiently and keep interactions smooth.</p><p><strong>Radix UI</strong>: To take the user experience up a notch, I used Radix UI. This library gave me accessible and customizable UI components that fit seamlessly with my design. It ensured a consistent look and feel across the app while making it accessible for everyone.</p><p><strong>Beautiful DnD</strong>: For drag-and-drop functionality, I went with Beautiful DnD. This library made implementing smooth and intuitive drag-and-drop interactions straightforward, which was key for the dynamic reordering of tasks on the Kanban board.</p>`
      },
      fil: {
        description: `Pamahalaan at subaybayan ang iyong mga gawain gamit ang aking <i>full-stack MERN web app</i>. Piliin ang <i>dark</i> o <i>light mode</i> ayon sa iyong gusto. Puwede kang mag-<i>sign up</i> para i-<i>save</i> ang iyong <i>data</i> o gamitin ito nang walang <i>account</i>, salamat sa <i>local storage</i>. Masiyahan sa madaling <i>drag-and-drop</i> na pamamahala ng gawain.`,
        lessonsLearned: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!`,
        problemsAndThoughtProcess: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!`,
        purposeAndGoal: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!`,
        webStackAndExplanation: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!`
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
        description: `This multi-page e-commerce website, built with Next.js, is fully responsive and uses local storage to retain cart items. It features a modern design and intuitive navigation for an enhanced shopping experience.`,
        lessonsLearned: `<p>The audiophile e-commerce website offered numerous learning opportunities. One significant takeaway was the importance of performance optimization in a real-world application. Server-side rendering with Next.js taught me how to build applications that load quickly and are SEO-friendly, which is crucial for any e-commerce site.</p><p>Using Tailwind CSS was eye-opening. I learned how to create beautiful, responsive designs with minimal effort, and it highlighted the power of a utility-first CSS framework. This experience significantly improved my design workflow and made me appreciate the importance of efficient styling solutions.</p><p>State management with Zustand was another major learning point. Managing complex states in a large application can be daunting, but Zustand’s simplicity and flexibility made it manageable. I gained a deeper understanding of state management patterns and how to implement them effectively in a scalable way.</p>`,
        problemsAndThoughtProcess: `<p>Developing this e-commerce website presented several challenges. One of the biggest issues was managing the intricate state of the application. With features like a dynamic shopping cart, user authentication, and product filtering, keeping everything in sync was tricky. Zustand came to the rescue with its straightforward API and efficient state management capabilities.</p><p>Another challenge was ensuring the site’s performance and SEO. E-commerce websites need to be fast and discoverable by search engines. Using Next.js for server-side rendering helped me tackle these challenges head-on, providing a smooth and speedy user experience while ensuring good SEO practices.</p><p>Designing with Tailwind CSS had its own set of challenges. Initially, adapting to the utility-first approach was overwhelming, but once I got the hang of it, it became incredibly powerful. Tailwind allowed me to build a cohesive and responsive design system that was easy to maintain and extend.</p><p>Throughout the project, my thought process was driven by the goal of creating a seamless user experience. I focused on optimizing performance, ensuring design consistency, and managing state effectively. The MVC architecture and BEM methodology I learned from previous projects also played a significant role in organizing my code and maintaining a clean, scalable structure.</p><p>Looking back, this project was a pivotal experience that pushed my skills to new heights. It reinforced the importance of choosing the right tools and approaches for the job and taught me invaluable lessons about performance, design, and state management.</p>`,
        purposeAndGoal: `<p>The audiophile e-commerce website from Frontend Mentor presented the perfect opportunity to tackle something more complex. This project allowed me to delve into the intricacies of building a full-fledged e-commerce platform. My primary goal was to create a seamless, high-quality shopping experience for users while demonstrating my ability to develop robust web applications. I aimed to master new technologies and design patterns, pushing the boundaries of my capabilities as a developer.</p>`,
        webStackAndExplanation: `<p>For this project, I selected Next.js, Tailwind CSS, and Zustand, as they provided a powerful and efficient development experience.</p><p>Next.js was chosen for its excellent server-side rendering capabilities, which are crucial for performance and SEO in an e-commerce site. Its flexibility and ease of integration with other tools made it an ideal framework for this project.</p><p>Tailwind CSS brought a new level of styling efficiency. Its utility-first approach allowed me to create a clean, responsive design without writing extensive custom CSS. Tailwind’s built-in responsiveness and design consistency were perfect for achieving the visually appealing and user-friendly interface I envisioned.</p><p>Zustand was my state management tool of choice. Given the complexity of an e-commerce site with features like shopping carts, user authentication, and product management, Zustand provided a simple yet powerful state management solution. It allowed me to manage state in a way that was easy to understand and maintain, making the development process smoother.</p>`
      },
      fil: {
        description: `Ang <i>multi-page e-commerce website</i> na ito, na ginawa gamit ang Next.js, ay ganap na <i>responsive</i> at gumagamit ng <i>local storage</i> upang mapanatiling naka-<i>store</i> ang mga <i>item</i> sa <i>cart</i>. Mayroon itong modernong disenyo at madaling pag-<i>navigate</i> para sa mas pinagbuting karanasan sa pagbili.`,
        lessonsLearned: `<p>The audiophile e-commerce website offered numerous learning opportunities. One significant takeaway was the importance of performance optimization in a real-world application. Server-side rendering with Next.js taught me how to build applications that load quickly and are SEO-friendly, which is crucial for any e-commerce site.</p><p>Using Tailwind CSS was eye-opening. I learned how to create beautiful, responsive designs with minimal effort, and it highlighted the power of a utility-first CSS framework. This experience significantly improved my design workflow and made me appreciate the importance of efficient styling solutions.</p><p>State management with Zustand was another major learning point. Managing complex states in a large application can be daunting, but Zustand’s simplicity and flexibility made it manageable. I gained a deeper understanding of state management patterns and how to implement them effectively in a scalable way.</p>`,
        problemsAndThoughtProcess: `<p>Developing this e-commerce website presented several challenges. One of the biggest issues was managing the intricate state of the application. With features like a dynamic shopping cart, user authentication, and product filtering, keeping everything in sync was tricky. Zustand came to the rescue with its straightforward API and efficient state management capabilities.</p><p>Another challenge was ensuring the site’s performance and SEO. E-commerce websites need to be fast and discoverable by search engines. Using Next.js for server-side rendering helped me tackle these challenges head-on, providing a smooth and speedy user experience while ensuring good SEO practices.</p><p>Designing with Tailwind CSS had its own set of challenges. Initially, adapting to the utility-first approach was overwhelming, but once I got the hang of it, it became incredibly powerful. Tailwind allowed me to build a cohesive and responsive design system that was easy to maintain and extend.</p><p>Throughout the project, my thought process was driven by the goal of creating a seamless user experience. I focused on optimizing performance, ensuring design consistency, and managing state effectively. The MVC architecture and BEM methodology I learned from previous projects also played a significant role in organizing my code and maintaining a clean, scalable structure.</p><p>Looking back, this project was a pivotal experience that pushed my skills to new heights. It reinforced the importance of choosing the right tools and approaches for the job and taught me invaluable lessons about performance, design, and state management.</p>`,
        purposeAndGoal: `<p>The audiophile e-commerce website from Frontend Mentor presented the perfect opportunity to tackle something more complex. This project allowed me to delve into the intricacies of building a full-fledged e-commerce platform. My primary goal was to create a seamless, high-quality shopping experience for users while demonstrating my ability to develop robust web applications. I aimed to master new technologies and design patterns, pushing the boundaries of my capabilities as a developer.</p>`,
        webStackAndExplanation: `<p>For this project, I selected Next.js, Tailwind CSS, and Zustand, as they provided a powerful and efficient development experience.</p><p>Next.js was chosen for its excellent server-side rendering capabilities, which are crucial for performance and SEO in an e-commerce site. Its flexibility and ease of integration with other tools made it an ideal framework for this project.</p><p>Tailwind CSS brought a new level of styling efficiency. Its utility-first approach allowed me to create a clean, responsive design without writing extensive custom CSS. Tailwind’s built-in responsiveness and design consistency were perfect for achieving the visually appealing and user-friendly interface I envisioned.</p><p>Zustand was my state management tool of choice. Given the complexity of an e-commerce site with features like shopping carts, user authentication, and product management, Zustand provided a simple yet powerful state management solution. It allowed me to manage state in a way that was easy to understand and maintain, making the development process smoother.</p>`
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
        description: `A Pomodoro-inspired timer that is a progressive web app, allowing offline use. It features customizable appearance options and provides notification alerts.`,
        lessonsLearned: `<p>Oh boy! Where do I begin? This Frontend Mentor Challenge has provided me with some of the most valuable knowledge I have acquired so far, including Open Graph (OG), accessibility, search engine optimization (SEO), Block Element Modifier (BEM), MVC (Model View Controller) architecture, validations, closures, progressive web applications (PWA), and, most importantly, Node Package Manager (NPM). NPM has opened my mind to using libraries that are immensely helpful for my projects.</p><p>Initially, like my previous Frontend Mentor projects, I intended to write the code quickly without much consideration for quality. However, everything changed when I watched a <a href="https://www.youtube.com/watch?v=GEr--yTShz8&t=394s">video</a> from one of my favorite C++ channels, <a href="https://www.youtube.com/@TheCherno">The Cherno</a>. In it, he emphasized that the time spent on a project does not guarantee its quality. If you only focus on coding without learning, the resulting code might not be of high quality. His words deeply resonated with me because I had been approaching these Frontend Mentor challenges merely to test my coding speed and project completion time.</p><p>This realization inspired me to step out of my comfort zone and delve deeper into research and learning. As a result, I dedicated more time to learning and improving my skills.</p>`,
        problemsAndThoughtProcess: `<p>While coding the settings part of my Pomodoro app, I noticed my JavaScript file was ballooning to 587 lines! I knew I had to get organized. After scouring the internet, I realized there's no one right way to structure JavaScript code. I often look for the "correct" method, but in reality, there are many ways to approach a problem. I found the MVC architecture and decided to use it even though it’s not the most common choice for JavaScript. Sometimes, you have to go with what works for you, even if it’s unconventional.</p><p>Another challenge was understanding technical documentation. Implementing push notifications was tough because the language was so technical. This highlighted the need for me to get comfortable with these texts and technical terms to be more efficient in my work.</p><p>Other than that, most of my questions were basic, like how to implement a timer, make it accessible, or add a progress bar, but I found answers quickly thanks to the amazing online community. Overall, it was a fantastic learning experience that helped me improve my coding practices and problem-solving skills.</p>`,
        purposeAndGoal: `<p>After wrapping up my CodeGuage course on JavaScript, I was itching to put my newfound skills to the test. Building a Pomodoro web app seemed like the perfect challenge. Not only could it help me stay productive, but its sleek design also made it an exciting project to dive into. My main goal was simple: to gain hands-on experience by building a high-quality, functional project that I could be proud of.</p>`,
        webStackAndExplanation: `<p>For this project, I went with HTML, Sass, and JavaScript. I chose these technologies to solidify my understanding of the core tools in web development before jumping into more complex frameworks. Now, you might wonder why I picked Sass over plain old CSS. Well, dealing with one massive CSS file can be a nightmare. Sass, on the other hand, keeps everything organized and tidy. If I need to tweak a style, I can do it without tearing my hair out searching through lines of code.</p>`
      },
      fil: {
        description: `Ang <i>progressive web app</i> na ito ay isang <i>timer</i> na inspirado sa Pomodoro at may kakayahang magamit ng <i>user</i> kahit naka-<i>offline</i>. May mga pagpipilian para baguhin ang hitsura nito at nagbibigay ng abiso sa mga <i>notification</i>.`,
        lessonsLearned: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!`,
        problemsAndThoughtProcess: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!`,
        purposeAndGoal: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!`,
        webStackAndExplanation: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo libero cumque sint, facere fuga, voluptatum velit quae debitis sequi modi voluptate unde vero harum rem quis molestiae repellendus tempora!`
      }
    },
    viewCodeUrl: "https://github.com/CarlosSimon02/fem-pomodoro-app"
  }
] as const;
