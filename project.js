const project = [
  {
    id: "1",
    projectName: "How well do you know?",
    projectDes: "A game built using CLI with JavaScript language for fun. The game asks you some basics questions about me.",
    liveLink:
      "https://replit.com/@pritamkr/How-well-do-you-know-my-friend#index.js",
    gitLink: "https://github.com/pritam-kr/you-know-me",
  },
  {
    id: "1",
    projectName: "Marvel quiz",
    projectDes: "A quiz application on CLI. It asks some questions about MARVEL TV SERIES.",
    liveLink: "https://replit.com/@pritamkr/Marvel-quiz",
    gitLink: "https://github.com/pritam-kr/MarvelQuizs",
  },
  {
    id: "1",
    projectName: "My portfolio",
    projectDes: "Built a web portfolio using only HTML and CSS and hosted on netlify.",
    liveLink: "https://neogcamp-portfolio-of-pritam.netlify.app/",
    gitLink: "https://github.com/pritam-kr/neogcamp-portfoli",
  },
  {
    id: "1",
    projectName: "Banana talk",
    projectDes: "A translation app using HTML, CSS and VanilaJS.",
    liveLink: "https://banana-talk-by-pritam.netlify.app/",
    gitLink: "https://github.com/pritam-kr/Banana-talk",
  },
  {
    id: "1",
    projectName: "Pirate speak translator",
    projectDes: " An application that can translate your English language into a pirate language.",
    liveLink: "https://pirate-translator-by-pritam.netlify.app/",
    gitLink: "https://github.com/pritam-kr/pirate-speak-translator",
  },
  {
    id: "1",
    projectName: "Emoji emotions",
    projectDes: "This app is my first react app using code sandbox. So. This app will help you to understand your emoji emotions.",
    liveLink: "https://csb-t1k4t.netlify.app/",
    gitLink: "https://github.com/pritam-kr/emoji-emotions",
  },
  {
    id: "1",
    projectName: "Book recommendation app",
    projectDes: "An application that can show you the best books on specific topics, also it'll show you the rating of these books. It is built on code sandbox.",
    liveLink: "https://csb-j30gy.netlify.app/",
    gitLink: "https://github.com/pritam-kr/my-favorite-book-with-react",
  },
  {
    id: "1",
    projectName: "My favorite movies",
    projectDes: "This is a simple movie list app when you click on specific tags such as Comedy, Horror, Action. It will show to all movies related to these tags.",
    liveLink: "https://csb-sg8sk.netlify.app/",
    gitLink: "https://github.com/pritam-kr/my-movies",
  },
  {
    id: "1",
    projectName: "Palindrome birthday",
    projectDes: "Built an app using ReactJS to check if entered birthdate is Palindrome. If it is not a palindrome, then it will show the nearest palindrome date and by how many days it got missed.",
    liveLink: "https://palindrome-with-js-by-pritam.netlify.app/",
    gitLink: "https://github.com/pritam-kr/Palindrome_with_JS",
  },
  {
    id: "1",
    projectName: "Triangle",
    projectDes: "A triangle web app using HTML, CSS, and VanilaJS. That can find the area of triangle and quizzes on the triangle.",
    liveLink: "https://triangle-app-by-pritam.netlify.app/index.html",
    gitLink: "https://github.com/pritam-kr/Triangle",
  },
  {
    id: "1",
    projectName: "Is your birth date lucky?",
    projectDes: "A vanilaJs application to know how lucky your birth date is?",
    liveLink: "https://wizardly-nobel-ae8892.netlify.app/",
    gitLink: "https://github.com/pritam-kr/Lucky_birthday",
  },
  {
    id: "1",
    projectName: "Cash manager",
    projectDes: "This app takes input as bill amount and cash given by customer, and shows output of number of notes to return.",
    liveLink: "https://elastic-morse-c51461.netlify.app/",
    gitLink: "https://github.com/pritam-kr/Cash-manager",
  },
  {
    id: "1",
    projectName: "Stock! profit and loss",
    projectDes: "An application that can tell you your loss and profit on the share market.",
    liveLink: "https://dreamy-swanson-2de3d4.netlify.app/",
    gitLink: "https://github.com/pritam-kr/Stock",
  }
];

var box = "";
project.forEach((el) => {
  box += `
      <div class="project-box">
        <h1 class="project-name">${el.projectName}</h1>
        <p class="project-des">${el.projectDes}</p>
        <button class="btn btn-live"><a href="${el.liveLink}">Live</a></button><button class="btn btn-git"><a href="${el.gitLink}">Github</a></button>
      </div>
      `;
  document.querySelector(".project-list").innerHTML = box;
});
