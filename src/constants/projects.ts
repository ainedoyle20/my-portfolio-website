import GoodBooksPNG from "../assets/projects/good-books.png";
import PinItPNG from "../assets/projects/pin-it.png";
import ProductivityBoostPNG from "../assets/projects/productivity-boost.png";
import StudyBuddyPNG from "../assets/projects/study-buddy.jpeg";
import DoyleClothingPNG from "../assets/projects/doyle-clothing.png";
import CrownClothingPNG from "../assets/projects/crown-clothing.png";

export const projects = [
  {
    num: 2,
    name: "Good Books",
    cover_image: GoodBooksPNG,
    description: `A website based on Good Reads. After creating an account users can search for books and save them to their bookshelves. Users can create groups and discuss the books they are reading. They can also message their friends and discuss books privately.`,
    features: [
      "Tailwind CSS",
      "Next JS",
      "Sanity",
      "Zustand",
      "Rapid API"
    ],
    sources: {
      github: "https://github.com/ainedoyle20/good-books",
      live: "https://good-books-rho.vercel.app/"
    }
  },
  {
    num: 1,
    name: "Pin It",
    cover_image: PinItPNG,
    description: `A website based on Pinterest. Users can create and share pins. Users can give feedback to the pin creator by leaving a comment. They can also save pins and organise them into Boards they created.`,
    features: [
      "Material UI",
      "React JS",
      "Sanity",
      "Firebase",
      "Context API",
      "Rapid API"
    ],
    sources: {
      github: "https://github.com/ainedoyle20/pin-it",
      live: "https://pin-it-s3pv.vercel.app/"
    }
  },
  {
    num: 2,
    name: "Productivity Boost",
    cover_image: ProductivityBoostPNG,
    description: `Create an account, schedule todos and tick them off as you complete them with this Productivity boost web application. You can track your progress over a daily, weekly or monthly period on the progress chart. Productivity Boost helps you hit your goals.`,
    features: [
      "CSS Modules",
      "Chart JS",
      "React JS",
      "React Router V6",
      "Redux Toolkit",
      "Firebase"
    ],
    sources: {
      github: "https://github.com/ainedoyle20/productivity-boost",
      live: "https://productivity-boost.vercel.app/"
    }
  },
  {
    num: 1,
    name: "Study Buddy",
    cover_image: StudyBuddyPNG,
    description: `Ace your exams with the help of Study Buddy. Create question & answer flashcards and organise them by subject into decks. You can make these decks public so that other users can add them to their own deck collection. You can also search public decks for a certain topic and add them to your collection.`,
    features: [
      "Sass",
      "React JS",
      "React Router V6",
      "Redux Toolkit & RTK Query",
      "Firebase"
    ],
    sources: {
      github: "https://github.com/ainedoyle20/study-buddy",
      live: "https://study-buddy-delta.vercel.app/"
    }
  },
  {
    num: 1,
    name: "Doyle Clothing",
    cover_image: DoyleClothingPNG,
    description: `An online retail store with style (& products) inspiration from H&M. Search through clothing categories and add items to your shopping bag. Checkout and pay using Stripe. You can see your order and past orders by navigating to your Orders page.`,
    features: [
      "Tailwind CSS",
      "Next JS",
      "TypeScript",
      "Stripe",
      "Firebase (Authentication)",
      "Sanity",
      "Zustand"
    ],
    sources: {
      github: "https://github.com/ainedoyle20/doyle-clothing-next",
      live: "https://doyle-clothing-next.vercel.app/"
    }
  }
];
