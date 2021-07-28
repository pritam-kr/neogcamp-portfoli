const blogs = [
  {
    heading: "Introduction to Python",
    des: "Welcome! Are you completely new to programming? If not then we presume you will be looking for information about why and how to get started with Python. ",
    link: "https://neogcamp-portfolio-of-pritam.netlify.app/python.html",
  },
  {
    heading: "Introduction of javaScript",
    des: "JavaScript was initially created to “make web pages alive”.The programs in this language are called scripts. ",
    link: "https://neogcamp-portfolio-of-pritam.netlify.app/javascript.html",
  },
  {
    heading: "JavaScript array",
    des: "Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. ",
    link: "https://javascript.info/intro",
  },
  {
    heading: "Check your string is palindrome or not?",
    des: "What is a palindrome? If a string read the same from forward or backward. Example:- madam, dad, pop, radar, etc.  ",
    link: "https://pritamkumar.hashnode.dev/check-your-string-is-palindrome-or-not",
  },
  {
    heading: "CSS: Flex-box property",
    des: "It makes, easier to design a flexible responsive layout without using positioning and float property.",
    link: "https://pritamkumar.hashnode.dev/css-flex-box-property",
  },
  {
    heading: "How well do you know my friend?",
    des: "A game built using CLI with JavaScript language for fun. The game asks you some basics questions about me. ",
    link: "https://pritamkumar.hashnode.dev/how-well-do-you-know-my-friend",
  }
];

var post = "";

blogs.forEach((el) => {
  post += `
    
    <div class="blog-box">
        <h2>${el.heading}</h2>
        <p>${el.des}</p>
       <a href="${el.link}" target="_blank"> <button>Read more...</button></a>
    </div>

    `
    document.querySelector('.blog-list').innerHTML = post;
});