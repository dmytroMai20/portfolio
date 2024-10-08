export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience"},
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with relocation",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently developing a p2p loan platform",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Cricket weather app",
      des: "An app which can bookmark and store cricket pitch locations to monitor weather conditions and display the combined score of conditions.",
      img: "/cricket_app.png",
      iconLists: ["/java.svg","/JavaFX.png", "/xml.svg", "/cache.svg"],
      iconClassnames:["bg-white", "bg-white", "bg-black", "bg-white"],
      link: "https://github.com/dmytroMai20/myCricket",
    },
    {
      id: 2,
      title: "Social stock analyser",
      des: "Analyse past data and sentiment about tickers scraped from social platforms to calculate correlation between social markers and stock features.",
      img: "/stockanalyser.png",
      iconLists: ["/python.svg", "/docker.svg", "/aws.svg", "/selenium.svg", "/numpy.svg", "mysql.svg"],
      iconClassnames:["bg-black", "bg-black", "bg-white", "bg-black", "bg-black", "bg-white"],
      link: "https://github.com/InvestmentProvenance/SocialStockAnalyser",
    },
    {
      id: 3,
      title: "Platform for managing SoulBound Tokens (NFT)",
      des: "Produced a platform for companies and agencies to issue SBTs to represent certificates of employment or completion of courses that can be obtained by people.",
      img: "/mike_nft.png",
      iconLists: ["/Node.js_logo.svg", "/re.svg", "/aws.svg", "/solidity.svg", "/ethereum.svg"],
      iconClassnames:["bg-white", "bg-black", "bg-white", "bg-black", "bg-white"],
      link: "https://github.com/ychunwei/mike-nft",
    },
    {
      id: 4,
      title: "Portfolio website",
      des: "You are looking at it right now! This project is like a recursive function that references itself—only this time, there's no base case.",
      img: "/portfolio_ss.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/sentry.svg"],
      iconClassnames:["bg-black", "bg-black", "bg-black", "bg-black"],
      link: "https://github.com/dmytroMai20/portfolio",
    },
  ];
  
  
  export const workExperience = [
    {
      id: 1,
      title: "ML Intern - Cambridge Quantum Computing",
      desc: "Worked on a research project to investigate the use of DNNs to de-noise quantum circuits in NISQ computing.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Software Engineering Intern - Unibot",
      desc: "Designed and developed a meeting database (MongoDB) and messenger notification bot (Node.JS).",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/dmytroMai20",
    },
    {
      id: 2,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/dmytro-mai-4681a2264/",
    },
  ];