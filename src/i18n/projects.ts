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
        lessonsLearned: `<p>This project was a treasure trove of lessons. Creating a working and complete project using the MERN stack was a major milestone. Building a full-stack application from scratch gave me a deep understanding of how the different parts interact, from database management with MongoDB to creating dynamic user interfaces with React and server-side scripting with Node.js.</p><p>Radix UI was a game-changer in terms of accessibility and customization. It taught me the importance of building inclusive applications that everyone can use. The pre-built components saved me time and ensured a polished, professional look.</p><p>Lastly, Beautiful DnD made creating a dynamic and interactive user experience much easier, which is essential for a Kanban board.</p>`,
        problemsAndThoughtProcess: `<p>Keeping everything in sync with tasks updating, drag-and-drop features, and user logins was tough. But, thanks to Zustand's easy-to-use tools, managing the app’s state became possible.</p><p>Making the app fast and easy to use was essential. The MERN stack (MongoDB, Express.js, React, and Node.js) gave me a strong base, but I had to make sure database queries were quick and React components were optimized for better performance. Tailwind CSS was a big help in creating a responsive and clean interface without much hassle.</p><p>Using Radix UI had its learning moments. It took some time to get the hang of it, but it made the app accessible and visually appealing, which was a key goal.</p><p>Adding drag-and-drop functionality with Beautiful DnD added complexity. It was challenging but rewarding to implement smooth interactions, making the Kanban board user-friendly.</p><p>Throughout the project, my focus was on creating a seamless and efficient user experience. I wanted the app to look great and work well. Lessons from my previous projects, like maintaining clean code and effective state management, were invaluable.</p><p>In hindsight, this project was a turning point. It helped me refine my skills and deepen my understanding of full-stack development. The challenges I faced taught me important lessons about performance, design, and state management, which will benefit me in future projects.</p>`,
        purposeAndGoal: `<p>After completing several projects, I was itching to create something that would really up my productivity game. That’s when I decided to build a Kanban web app. I needed an efficient tool to manage tasks, and what better way to improve my skills than by building something I’d actually use every day? My main goal was to master the MERN stack and develop a tool that could help others streamline their workflow just as much as it would help me.</p>`,
        webStackAndExplanation: `<p>For this project, I used the MERN stack (MongoDB, Express, React, Node.js), Tailwind CSS, Zustand, Radix UI, and Beautiful DnD.</p><p><strong>MERN Stack:</strong> The MERN stack was a solid choice. MongoDB was perfect for storing all the task data with its flexible, document-based structure. Express provided a strong backbone for the backend, allowing me to build a robust API. React’s component-based architecture made the frontend development smooth, and Node.js brought everything together on the server-side. It felt like having a well-oiled machine at my fingertips.</p><p><strong>Tailwind CSS and Zustand:</strong> I used Tailwind CSS and Zustand because I’m already familiar with them from previous projects. Tailwind’s utility-first approach let me build a clean, responsive UI without drowning in custom CSS, and Zustand’s simplicity and flexibility made state management a breeze.</p><p><strong>Radix UI and Beautiful DnD:</strong> To enhance the user experience, I used Radix UI for accessible and customizable UI components, ensuring a consistent look and feel across the app. For drag-and-drop functionality, Beautiful DnD made implementing smooth and intuitive interactions straightforward, essential for the dynamic reordering of tasks on the Kanban board.</p>`
      },
      fil: {
        description: `Pamahalaan at subaybayan ang iyong mga gawain gamit ang aking <i>full-stack MERN web app</i>. Piliin ang <i>dark</i> o <i>light mode</i> ayon sa iyong gusto. Puwede kang mag-<i>sign up</i> para i-<i>save</i> ang iyong <i>data</i> o gamitin ito nang walang <i>account</i>, salamat sa <i>local storage</i>. Masiyahan sa madaling <i>drag-and-drop</i> na pamamahala ng gawain.`,
        lessonsLearned: `<p>Ang proyektong ito ay puno ng mahahalagang aral. Ang paglikha ng isang gumaganang at kumpletong proyekto gamit ang MERN stack ay isang malaking tagumpay. Ang paggawa ng isang <i>full-stack</i> na <i>application</i> mula sa simula ay nagbigay sa akin ng malalim na pag-unawa kung paano nag-iinteraksyon ang iba't ibang bahagi, mula sa pamamahala ng <i>database</i> gamit ang MongoDB hanggang sa paglikha ng <i>dynamic</i> na mga <i>user interface</i> gamit ang React at <i>server-side scripting</i> gamit ang Node.js.</p><p>Ang Radix UI ay isang malaking tulong pagdating sa <i>accessibility</i> at <i>customization</i>. Tinuruan ako nito ng kahalagahan ng pagbuo ng mga <i>inclusive</i> na <i>application</i> na magagamit ng lahat. Ang mga pre-<i>built</i> na komponent ay nakatipid sa akin ng oras at nagbigay ng isang pulido at propesyonal na hitsura.</p><p>Sa huli, ang Beautiful DnD ay nagpabilis ng paglikha ng isang <i>dynamic</i> at <i>interactive</i> na karanasan para sa gumagamit, na mahalaga para sa isang Kanban <i>board</i>.</p>`,
        problemsAndThoughtProcess: `<p>Mahirap panatilihing naka-<i>sync</i> ang lahat ng pag-<i>update</i> ng mga gawain, <i>drag-and-drop</i> na mga tampok, at mga pag-<i>login</i> ng gumagamit. Ngunit, dahil sa madaling gamitin na mga <i>tool</i> ng Zustand, naging posible ang pamamahala sa estado ng <i>app</i>.</p><p>Mahalaga ang pagpapabilis at pagiging madaling gamitin ng <i>app</i>. Ang MERN stack (MongoDB, Express.js, React, at Node.js) ay nagbigay ng matibay na <i>base</i>, ngunit kailangan kong tiyakin na mabilis ang mga <i>query</i> sa <i>database</i> at <i>optimized</i> ang mga React na bahagi para sa mas mahusay na pagganap. Malaking tulong ang Tailwind CSS sa paglikha ng <i>responsive</i> at malinis na <i>interface</i> nang walang gaanong abala.</p><p>Ang paggamit ng Radix UI ay may mga sandaling pagkatuto. Inabot ng kaunting panahon upang makasanayan ito, ngunit ginawa nitong <i>accessible</i> at kaakit-akit ang <i>app</i>, na isang mahalagang layunin.</p><p>Ang pagdaragdag ng <i>drag-and-drop functionality</i> gamit ang Beautiful DnD ay nagdagdag ng komplikasyon. Mahirap ngunit <i>rewarding</i> na ipatupad ang mga <i>polish</i> na interaksyon, na nagpapadali sa paggamit ng Kanban board.</p><p>Sa kabuuan ng proyekto, nakatuon ako sa paglikha ng isang <i>seamless</i> at mahusay na karanasan para sa mga gumagamit. Gusto kong magmukhang maganda ang app at mahusay itong gumana. Ang mga aral mula sa aking mga nakaraang proyekto, tulad ng pagpapanatili ng malinis na <i>code</i> at epektibong pamamahala sa estado, ay napakahalaga.</p><p>Sa pagbabalik-tanaw, ang proyektong ito ay isang <i>turning point</i>. Tinulungan ako nitong patalasin ang aking mga kakayahan at palalimin ang aking pag-unawa sa <i>full-stack development</i>. Ang mga hamong aking hinarap ay nagturo sa akin ng mahahalagang aral tungkol sa pagganap, disenyo, at pamamahala ng estado, na makakatulong sa akin sa mga susunod na proyekto.</p>`,
        purposeAndGoal: `<p>Pagkatapos makumpleto ang ilang proyekto, sabik akong lumikha ng isang bagay na talagang magpapataas ng aking <i>productivity game</i>. Kaya't nagpasya akong bumuo ng isang <i>Kanban web app</i>. Kailangan ko ng isang epektibong <i>tool</i> upang pamahalaan ang mga <i>task</i>, at ano pa bang mas magandang paraan upang mapabuti ang aking mga kasanayan kundi ang paggawa ng isang bagay na talagang gagamitin ko araw-araw? Ang aking pangunahing layunin ay ma-<i>master</i> ang MERN stack at makabuo ng isang tool na makakatulong sa iba na mapadali ang kanilang <i>workflow</i> tulad ng makakatulong ito sa akin.</p>`,
        webStackAndExplanation: `<p>Para sa proyektong ito, ginamit ko ang MERN stack (MongoDB, Express, React, Node.js), Tailwind CSS, Zustand, Radix UI, at Beautiful DnD.</p><p><strong>MERN Stack:</strong> Ang MERN stack ay isang solidong pagpipilian. Ang MongoDB ay perpekto para sa pag-iimbak ng lahat ng task data dahil sa <i>flexible</i>, <i>document-based</i> na istruktura nito. Ang Express ay nagbigay ng matibay na pundasyon para sa <i>backend</i>, na nagpapahintulot sa akin na bumuo ng isang <i>robust</i> na API. Ang <i>component-based</i> na <i>architecture</i> ng React ay nagpagaan ng <i>frontend development</i>, at ang Node.js ay nagdala ng lahat ng bagay sa <i>server-side</i>. Parang may isang mahusay na makina sa aking mga kamay.</p><p><strong>Tailwind CSS at Zustand:</strong> Ginamit ko ang Tailwind CSS at Zustand dahil pamilyar na ako sa kanila mula sa mga nakaraang proyekto. Ang <i>utility-first approach</i> ng Tailwind ay nagbigay-daan sa akin na bumuo ng isang malinis at <i>responsive</i> na UI nang hindi nalulunod sa <i>custom</i> CSS, at ang <i>simplicity</i> at <i>flexibility</i> ng Zustand ay nagpagaan sa <i>state management</i>.</p><p><strong>Radix UI at Beautiful DnD:</strong> Para mapaganda ang karanasan ng gumagamit, ginamit ko ang Radix UI para sa <i>accessible</i> at <i>customizable</i> na UI <i>components</i>, na tinitiyak ang isang <i>consistent</i> na hitsura at pakiramdam sa buong <i>app</i>. Para sa <i>drag-and-drop functionality</i>, ang Beautiful DnD ay nagpabilis ng pag-<i>implement</i> ng makinis at <i>intuitive</i> na <i>interactions</i>, na mahalaga para sa <i>dynamic</i> na pag-aayos ng mga <i>task</i> sa Kanban <i>board</i>.</p>`
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
        purposeAndGoal: `<p>The main goal of this project is to become a strong React developer. I want to try out different technologies to understand how other skilled programmers build their websites. Also, I aim to improve my ability to perfectly match designs.</p><p>In addition, I want to create something I can showcase in my portfolio. By building a real project, I can demonstrate my skills and the knowledge I’ve gained. I also hope to improve my problem-solving skills by tackling the challenges that come with developing a fully functional website.</p>`,
        webStackAndExplanation: `<p>At first, I planned to use Create React App for this project. However, I read that using frameworks like Next.js is recommended. I chose Next.js because its documentation is complete, easy to use, and very helpful. It made me feel confident that I wouldn't have a hard time using it, and I was right.</p><p>This project is also a great chance to use Tailwind CSS. Tailwind makes it easy to add styles by just adding classes. It also resets styles for you. Initially, I didn’t like seeing classes on every element or having to remember all the class names and sizes. But, over time, I got used to it, and now I think it’s totally fine.</p>`
      },
      fil: {
        description: `Ang <i>multi-page e-commerce website</i> na ito, na ginawa gamit ang Next.js, ay ganap na <i>responsive</i> at gumagamit ng <i>local storage</i> upang mapanatiling naka-<i>store</i> ang mga <i>item</i> sa <i>cart</i>. Mayroon itong modernong disenyo at madaling pag-<i>navigate</i> para sa mas pinagbuting karanasan sa pagbili.`,
        lessonsLearned: `<p>Ang pagbuo ng proyektong ito ay nagbigay ng maraming pagkakataon para matuto. Isa sa mga mahalagang natutunan ko ay ang kahalagahan ng <i>performance optimization</i> sa isang tunay na aplikasyon. Sa paggamit ng <i>server-side rendering</i> gamit ang Next.js, natutunan ko kung paano gumawa ng mga application na mabilis mag-<i>load</i> at SEO-<i>friendly</i>, na mahalaga para sa anumang <i>e-commerce site</i>.</p><p>Ang paggamit ng Tailwind CSS ay napakaganda. Natutunan ko kung paano lumikha ng magaganda at <i>responsive</i> na disenyo nang walang kahirap-hirap, at ito'y nagpakita sa akin ng kapangyarihan ng <i>utility-first</i> CSS <i>framework</i>. Ang karanasang ito ay lubos na nagpabuti ng aking <i>design workflow</i> at <i>efficient styling solutions</i>.</p><p>Isa pang mahalagang natutunan ko ay ang <i>state management</i> gamit ang Zustand. Ang pamamahala ng mga kumplikadong estado sa isang malaking aplikasyon ay maaaring nakakatakot, ngunit ang pagiging simple at <i>flexibility</i> ng Zustand ay nakatulong upang ito'y maging mas madali. Nakakuha ako ng mas malalim na pag-unawa sa mga <i>state management patterns</i> at kung paano ito ipatupad ng epektibo sa isang <i>scalable</i> na paraan.</p>`,
        problemsAndThoughtProcess: `<p>Isa sa pinakamalaking isyu ay ang pamamahala ng masalimuot na estado ng aplikasyon. Sa mga <i>feature</i> tulad ng dynamic na <i>shopping cart</i>, naging mahirap panatilihing <i>synchronized</i>. Nakatulong ang Zustand sa pamamagitan ng kanyang simpleng API at <i>efficient</i> na <i>state</i> management capabilities.</p><p>Isa pang hamon ay ang pagtiyak sa performance at SEO ng site. Ang mga e-commerce website ay kailangang mabilis at madaling makita ng mga search engine. Ang paggamit ng Next.js para sa server-side rendering ay nakatulong sa akin upang direktang harapin ang mga hamong ito, na nagbibigay ng isang maayos at mabilis na karanasan para sa mga user habang tinitiyak ang magandang SEO practices.</p><p>Ang pagdisenyo gamit ang Tailwind CSS ay may sarili ring mga hamon. Sa una, ang pag-adapt sa utility-first na approach ay nakakalito, ngunit nang matutunan ko na ito, naging napakalakas nito. Ang Tailwind ay nagbigay-daan upang makabuo ako ng isang cohesive at responsive na design system na madaling i-maintain at i-extend.</p><p>Sa kabuuan ng proyekto, ang aking thought process ay nakatuon sa layuning makalikha ng seamless na karanasan para sa mga user. Nagtutok ako sa pag-optimize ng performance, pagtiyak ng design consistency, at epektibong pamamahala ng estado. Ang MVC architecture at BEM methodology na natutunan ko mula sa mga nakaraang proyekto ay may malaking papel sa pag-oorganisa ng aking code at pagpapanatili ng isang malinis at scalable na istruktura.</p><p>Sa paglingon, ang proyektong ito ay isang mahalagang karanasan na nagtulak sa aking mga kakayahan sa bagong antas. Pinagtibay nito ang kahalagahan ng pagpili ng tamang mga kasangkapan at diskarte para sa trabaho at nagturo sa akin ng napakahalagang mga aral tungkol sa performance, disenyo, at state management.</p>`,
        purposeAndGoal: `<p>Ang pangunahing layunin ng proyektong ito ay maging isang mahusay na React <i>developer</i>. Gusto kong subukan ang iba't ibang teknolohiya upang maunawaan kung paano bumuo ng mga <i>website</i> ang iba pang mga bihasang <i>programmer</i>. Gayundin, layunin kong mapahusay ang aking kakayahan na perpektong itugma ang mga disenyo.</p><p>Bukod dito, nais kong lumikha ng isang bagay na maipapakita ko sa aking <i>portfolio</i>. Sa pamamagitan ng pagbuo ng isang totoong proyekto, maipapakita ko ang aking mga kasanayan at kaalaman na aking nakuha. Umaasa rin akong mapabuti ang aking mga kakayahan sa paglutas ng mga problema sa pamamagitan ng pagharap sa mga hamon na kasama sa pagbuo ng isang ganap na <i>functional</i> na <i>website</i>.</p>`,
        webStackAndExplanation: `<p>Noong una, plano kong gamitin ang Create React App para sa proyektong ito. Gayunpaman, nabasa ko na inirerekomenda ang paggamit ng mga <i>frameworks</i> tulad ng Next.js. Pinili ko ang Next.js dahil ang dokumentasyon nito ay kumpleto, madaling gamitin, at napaka-kapaki-pakinabang. Naging tiwala ako na hindi ako mahihirapan sa paggamit nito, at tama nga ako.</p><p>Ang proyektong ito ay isang mahusay na pagkakataon din upang magamit ang Tailwind CSS. Ginagawa ng Tailwind na madali ang pagdagdag ng mga estilo sa pamamagitan ng simpleng pagdagdag ng mga klase. Pinapadali din nito ang pag-reset ng mga estilo. Sa una, hindi ko nagustuhan ang pagtingin ng mga klase sa bawat elemento o ang pangangailangang tandaan lahat ng pangalan at laki ng klase. Ngunit, sa paglipas ng panahon, nasanay ako, at ngayon ay sa tingin ko ay ayos lang ito.</p>`
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
        lessonsLearned: `<p>Naku! Saan ba ako magsisimula? Ang Frontend Mentor Challenge na ito ay nagbigay sa akin ng ilan sa mga pinakamahalagang kaalaman na nakuha ko, kabilang ang Open Graph (OG), <iaccessibility</i>, Search Engine Optimization (SEO), Block Element Modifier (BEM), MVC (Model View Controller) <i>architecture</i>, <i>validations</i>, <i>closures</i>, Progressive Web Applications (PWA), at higit sa lahat, ang Node Package Manager (NPM). Ang NPM ay nagbukas ng aking isipan sa paggamit ng mga <i>library</i> na lubos na nakakatulong sa aking mga proyekto.</p><p>Sa simula, tulad ng aking mga nakaraang proyekto sa Frontend Mentor, balak kong isulat ang code nang mabilis nang hindi masyadong iniisip ang kalidad. Ngunit nagbago ang lahat nang mapanood ko ang isang <a href="https://www.youtube.com/watch?v=GEr--yTShz8&t=394s">bidyo</a> mula sa isa sa aking mga paboritong C++ <i>channel</i>, <a href="https://www.youtube.com/@TheCherno">The Cherno</a>. Sa bidyo, binigyang-diin niya na ang oras na ginugol sa isang proyekto ay hindi garantiya ng kalidad nito. Kung ikaw ay mag-<i>code</i> nang hindi natututo, maaaring hindi maganda ang kalalabasan ng code. Tumama sa akin ang kanyang mga salita dahil ginagawa ko ang mga Frontend Mentor <i>challenge</i> na ito upang subukan lamang ang aking bilis sa pag-<i>code</i> at oras ng pagkumpleto ng proyekto.</p><p>Ang realization na ito ay nag-udyok sa akin na lumabas sa aking <i>comfort zone</i> at mas malalim na mag-<i>research</i> at matuto. Bilang resulta, naglaan ako ng mas maraming oras sa pag-aaral at pagpapabuti ng aking mga kasanayan.</p>`,
        problemsAndThoughtProcess: `<p>Habang kino-<i>code</i> ko ang <i>settings</i> part ng aking Pomodoro app, napansin kong lumalaki na ang JavaScript <i>file</i> ko—umabot na sa 587 <i>lines</i>! Alam kong kailangan ko itong ayusing. Pagkatapos maghanap sa <i>internet</i>, napagtanto kong walang iisang tamang paraan para istraktura ang JavaScript <i>code</i>. Madalas akong naghahanap ng "tamang" pamamaraan, pero sa realidad, maraming paraan para resolbahin ang isang problema. Natagpuan ko ang MVC <i>architecture</i> at nagpasya akong gamitin ito kahit hindi ito karaniwang pagpipilian para sa JavaScript. Minsan, kailangan mong gamitin ang kung ano ang gumagana para sa iyo, kahit na hindi ito ang karaniwan.</p><p>Isa pang hamon ay ang pag-unawa sa <i>technical documentation</i>. Mahirap intindihin ang mga ito, lalo na noong sinusubukan kong i-<i>implement</i> ang <i>push notifications</i>. Napaka-teknikal ng wika. Ito ang nagpakita ng pangangailangan kong masanay sa ganitong mga teksto at mga teknikal na termino upang maging mas mabilis at epektibo sa aking trabaho.</p><p>Maliban doon, karamihan sa aking mga tanong ay <i>basic</i>, tulad ng paano mag-<i>implement</i> ng <i>timer</i>, gawing <i>accessible</i>, o magdagdag ng <i>progress bar</i>, pero nakuha ko ang mga sagot nang mabilis salamat sa <i>online community</i> na maaasahan. Sa kabuuan, isa itong napakagandang karanasan sa pag-aaral na tumulong sa akin na mapabuti ang aking mga kasanayan sa pag-<i>code</i> at pagresolba ng mga problema.</p>`,
        purposeAndGoal: `<p>Pagkatapos kong tapusin ang aking CodeGuage <i>course</i> tungkol sa JavaScript, sabik na akong subukan ang mga bagong natutunan ko. Ang paggawa ng Pomodoro <i>web app</i> ang tila perpektong hamon. Bukod sa makakatulong ito sa akin na maging produktibo, ang magandang disenyo nito ay isang kapanapanabik na proyekto na talagang nakakaengganyo. Simple lang ang aking pangunahing layunin: makakuha ng ><i>hands-on</i> na karanasan sa pamamagitan ng paggawa ng isang de-kalidad at <i>functional</i> na proyekto na maipagmamalaki ko.</p>`,
        webStackAndExplanation: `<p>Para sa proyektong ito, ginamit ko ang HTML, Sass, at JavaScript. Pinili ko ang mga teknolohiyang ito upang patatagin ang aking pag-unawa sa mga pangunahing kasangkapan sa <i>web development</i> bago sumabak sa mas komplikadong mga <i>framework</i>. Siguro nagtataka ka kung bakit pinili ko ang Sass kaysa sa <i>plain old </i>CSS. Ang pagbasa sa isang napakalaking CSS <i>file</i> ay pwedeng maging bangungot. Ang Sass, sa kabilang banda, ay nagpapanatili ng lahat ng bagay na maayos at malinis. Kung kailangan kong baguhin ang isang estilo, magagawa ko ito nang hindi nasisiraan ng ulo sa paghahanap sa mga linya ng code.</p>`
      }
    },
    viewCodeUrl: "https://github.com/CarlosSimon02/fem-pomodoro-app"
  }
] as const;
