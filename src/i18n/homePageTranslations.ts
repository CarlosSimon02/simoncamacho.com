import type { AboutSectionUITranslationsType } from "@/components/organisms/home-page/About.astro";
import type { ConnectSectionUITranslationsType } from "@/components/organisms/home-page/Connect.astro";
import type { IntroSectionUITranslationsType } from "@/components/organisms/home-page/Intro.astro";
import type { ProjectsSectionUITranslationsType } from "@/components/organisms/home-page/Projects.astro";
import type { LanguageKeys } from "@/i18n/languages";

import {
  messageFormUITranslations,
  projectCardUITranslations
} from "@/i18n/commonPageTranslations";

type HomePageTranslationsType = {
  about: AboutSectionUITranslationsType;
  connect: ConnectSectionUITranslationsType;
  intro: IntroSectionUITranslationsType;
  projects: ProjectsSectionUITranslationsType;
};

export const homePageTranslations: {
  [K in LanguageKeys]: HomePageTranslationsType;
} = {
  en: {
    about: {
      "myJourney.content": `
    <p>
      My journey in web development began when I discovered Frontend Mentor. At that time, my knowledge of HTML and CSS was limited, but this did not stop me from starting the challenge. After several hours of Googling and searching for solutions, I completed <a href="https://github.com/CarlosSimon02/fem-product-preview-card-component">my very first project</a>. The joy I felt when I saw it working motivated me to take on more difficult challenges.
    </p>
    <p>
      Next, I started building the <a href="https://github.com/CarlosSimon02/fem-bmi-calculator">BMI Calculator</a>. It uses JavaScript, but fortunately, I didn't have much difficulty learning it because before I entered web development, I was already creating games in C++. I completed the challenge, but to deepen my knowledge of this technology, I enrolled in the <a href="https://www.codeguage.com/courses/js/">JavaScript course at codeguage.com</a>.
    </p>
    <p>
      I continued my studies and tackled various challenges on Frontend Mentor. After learning JavaScript, I decided to study React JS, TypeScript, and Node.js. By creating dynamic web pages and projects like a <a href="https://github.com/CarlosSimon02/fem-todo-app">To-Do List App</a>, <a href="https://github.com/CarlosSimon02/fem-countries">REST Countries API</a> and <a href="https://github.com/CarlosSimon02/fem-kanban-task-management">Kanban Task Management App</a>, I became more proficient in understanding these technologies. Free online resources and documentation were a great help in my progress. My studies and practical application of these technologies paved the way for a deeper understanding and broader skills in the field of web development.
    </p>
    <p>
      I love learning and creating, and every project is a new adventure. This journey is just the beginning, and I'm so excited for what's next. Right now, I'm looking for a full-time role where I can bring my skills and enthusiasm to help companies reach their goals. I'm eager to join innovative projects and work with talented teams in the wonderful world of web development.
    </p>`,
      "myJourney.title": "My Journey",
      "mySkills.title": "My Skills",
      profileImgAlt: "A man smiling in a long-sleeve shirt",
      title: "About Me"
    },
    connect: {
      "getInTouch.description":
        "Whether you have an exciting project in mind, an amazing job opportunity, or just want to say hello, I'd be thrilled to hear from you!",
      "getInTouch.messageForm": messageFormUITranslations.en,
      "getInTouch.title": "Get in touch!",
      "onFrontendMentor.description": `Frontend Mentor is an excellent platform to sharpen your skills, and that's based on my experience. <a href="https://www.frontendmentor.io/profile/CarlosSimon02">Follow me</a> so we can share ideas and solutions, discuss various topics, and check out my work!`,
      "onFrontendMentor.screenshotsAlt":
        "Screenshots of my Frontend Mentor challenge solutions",
      "onFrontendMentor.title": "Join me on Frontend Mentor!",
      "playChess.description": `Do you play chess? I do too! It's what I often do in my free time because it's relaxing and it sharpens my mind. <a href="https://www.chess.com/member/simon1129">Add me on Chess.com</a> and challenge me to a game. I'm excited to play and learn from you!`,
      "playChess.title": "Let's Play Chess!",
      title: "Connect"
    },
    intro: {
      contactButtonLabel: "Contact",
      description:
        "I am a developer passionate about learning and expanding knowledge in the field of web. I am also determined to create solutions that provide excellent online experiences. Explore my portfolio to see my growing skills and dedication to quality development.",
      developerName: "Simon Camacho",
      greetings: "Hi there, I am",
      position: "Dedicated Web Developer",
      resumeButtonLabel: "Resume"
    },
    projects: {
      projectCardUI: projectCardUITranslations.en,
      title: "Projects"
    }
  },
  fil: {
    about: {
      "myJourney.content": `
      <p>
        Nagsimula ang aking pakikipagsapalaran sa <i>web development</i> noong natuklasan ko ang Frontend Mentor. Noong panahon na iyon, kaunti lamang ang aking kaalaman sa HTML at CSS, pero hindi ito naging hadlang para simulan ang hamon. Matapos ang ilang oras ng pag-<i>Google</i> at paghahanap ng solusyon, nabuo ko ang <a href="https://github/CarlosSimon02/fem-product-preview-card-component">aking kauna-unahang proyekto</a>. Ang kasiyahan na idinulot sa akin nang makita kong gumagana ito ay nagtulak sa akin na gawin ang mas mahihirap na hamon.
      </p>
      <p>
        Sumunod, sinimulan ko namang buuin ang <a href="https://github.com/CarlosSimon02/fem-bmi-calculator">BMI Calculator</a>. Gumagamit ito ng JavaScript, pero sa kabutihang-palad, hindi na ako masyadong nahirapan matutunan ito dahil bago pa man ako pumasok sa web development, gumagawa na ako ng mga games sa C++. Natapos ko ang challenge, pero upang mas mapalalim pa ang aking kaalaman sa teknolohiyang ito, nag-enroll ako sa <a href="https://www.codeguage.com/courses/js/">kursong JavaScript sa codeguage.com</a>.
      </p>
      <p>
        Patuloy ang aking pag-aaral at paglutas ng mga <i>challenges</i> sa Frontend Mentor. Pagkatapos ng JavaScript, nagpasiya akong pag-aralan ang React JS, TypeScript, at Node.js. Sa pamamagitan ng paggawa ng mga dynamic na web page at mga proyekto tulad ng <a href="https://github.com/CarlosSimon02/fem-todo-app">To-Do List App</a>, <a href="https://github.com/CarlosSimon02/fem-countries">REST Countries API</a> at <a href="https://github.com/CarlosSimon02/fem-kanban-task-management">Kanban Task Management App</a>, naging mas mahusay ako sa pag-unawa sa mga teknolohiyang ito. Ang mga libreng online resources at dokumentasyon ay malaking tulong sa akin sa pag-unlad. Ang aking pag-aaral at praktikal na aplikasyon ng mga teknolohiyang ito ay nagbigay daan sa mas malalim na pang-unawa at mas malawak na kakayahan sa larangan ng <i>web development</i>.
      </p>
      <p>
        Mahilig akong mag-aral at lumikha, at bawat proyekto ay isang bagong karanasan. Ang paglalakbay na ito ay nagsisimula pa lamang, at ako ay nasasabik para sa mga susunod na mangyayari. Sa ngayon, naghahanap ako ng <i>full-time</i> na posisyon kung saan maaari kong dalhin ang aking mga kasanayan at sigasig upang matulungan ang mga kumpanya na maabot ang kanilang mga layunin. Sabik akong sumali sa mga makabagong proyekto at makipagtulungan sa mga talentadong team sa kamangha-manghang mundo ng <i>web development</i>.
      </p>`,
      "myJourney.title": "Ang Aking Paglalakbay",
      "mySkills.title": "Ang Aking Mga Kasanayan",
      profileImgAlt: "Isang lalaking ngumingiti na naka long-sleeve shirt",
      title: "Tungkol sa Akin"
    },
    connect: {
      "getInTouch.description":
        "Kung mayroon kang kapana-panabik na proyekto sa isip, isang kamangha-manghang oportunidad sa trabaho, o nais mo lang bumati, ikagagalak ko itong marinig mula sa iyo!",
      "getInTouch.messageForm": messageFormUITranslations.fil,
      "getInTouch.title": "Makipag-ugnayan!",
      "onFrontendMentor.description": `Ang Frontend Mentor ay isang napakagandang <i>platform</i> upang hasain ang iyong mga kasanayan, at base iyon sa aking karanasan. <a href="https://www.frontendmentor.io/profile/CarlosSimon02">I-<i>follow</i> mo</a> ako upang makapagbahaginan tayo ng mga ideya at solusyon, talakayin ang iba't ibang paksa, at tingnan ang aking mga gawa!`,
      "onFrontendMentor.screenshotsAlt":
        "Screenshots mula sa aking mga Frontend Mentor challenge solutions",
      "onFrontendMentor.title": "Samahan mo ako sa Frontend Mentor!",
      "playChess.description": `Naglalaro ka ba ng chess? Ako rin! Ito ang madalas kong gawin sa aking bakanteng oras dahil nakaka<i>relax</i> ito at nakakapaghasa ng aking pag-iisip. <a href="https://www.chess.com/member/simon1129">I-<i>add</i> mo ako sa Chess.com</a> at hamunin sa isang laro. Nasasabik akong makipaglaro at matuto mula sa iyo!`,
      "playChess.title": "Maglaro tayo ng Chess!",
      title: "Kumonekta"
    },
    intro: {
      contactButtonLabel: "Kumonekta",
      description:
        "Ako ay isang <i>developer</i> na labis ang pagsusumikap sa pag-aaral at pagpapalawak ng kaalaman sa larangan ng <i>web</i>. Determinado rin akong gumawa ng mga solusyon na nagbibigay ng magandang karanasan sa <i>online</i>. Lakbayin ang aking <i>portfolio</i> para makita ang aking lumalawak na kasanayan at dedikasyon sa dekalidad na pagbuo.",
      developerName: "Simon Camacho",
      greetings: "Kumusta! Ako si",
      position: "Dedikadong Web Developer",
      resumeButtonLabel: "Resume"
    },
    projects: {
      projectCardUI: projectCardUITranslations.fil,
      title: "Mga Gawa"
    }
  }
};
