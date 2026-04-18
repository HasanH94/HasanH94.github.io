// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Research projects I have worked on as a research assistant at the American University of Beirut.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Coursework and competition projects I built at AUB — from autonomous racing to generative modeling.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-extracurricular",
          title: "extracurricular",
          description: "Volunteering, consulting, and community-service work I&#39;ve been part of during my years at AUB.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/extracurricular/";
          },
        },{id: "nav-talks-amp-workshops",
          title: "talks &amp; workshops",
          description: "A running list of workshops and talks I&#39;ve been part of.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-autonomous-racing-at-the-limits-of-handling",
          title: 'Autonomous Racing at the Limits of Handling',
          description: "Team project for the NXP Cup — a motion controller for a small-scale autonomous race car that compensates for the nonlinear tire dynamics that emerge near the friction limit.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/autonomous-racing/";
            },},{id: "projects-context-aware-autonomous-navigation",
          title: 'Context-Aware Autonomous Navigation',
          description: "Final-year project — a self-driving perception and planning stack designed for unstructured urban traffic. Winner of the Dean&#39;s Creative Achievement Award.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/context-aware-navigation/";
            },},{id: "projects-modeling-customer-purchase-behavior-as-a-markov-chain",
          title: 'Modeling Customer Purchase Behavior as a Markov Chain',
          description: "A solo project using an absorbing Markov chain to find the highest-leverage step in a real e-commerce funnel.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/customer-purchase/";
            },},{id: "projects-geometry-aware-generative-modeling-for-ood-detection",
          title: 'Geometry-Aware Generative Modeling for OOD Detection',
          description: "A solo research project on using spherical (von Mises–Fisher) variational autoencoders to detect out-of-distribution inputs for foundation-model embeddings.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/geometry-aware-vae/";
            },},{id: "projects-physics-based-and-data-driven-heat-sink-design",
          title: 'Physics-Based and Data-Driven Heat-Sink Design',
          description: "Team project combining classical heat-transfer optimization with a neural-network surrogate to design a finned aluminum heat sink under a pressure-drop constraint.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/heat-exchanger/";
            },},{id: "projects-higgs-boson-signal-classification",
          title: 'Higgs-Boson Signal Classification',
          description: "Team project using the HIGGS kinematic dataset to separate real signal events from background — with 20+ model architectures benchmarked head-to-head.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/higgs-classification/";
            },},{id: "projects-autonomous-drone-for-forest-parasite-treatment",
          title: 'Autonomous Drone for Forest-Parasite Treatment',
          description: "Research assistant on a multirotor UAV that precision-injects a biopesticide into pine-parasite nests.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ppm-drone/";
            },},{id: "projects-networked-epidemic-model-with-vaccination-sirsv",
          title: 'Networked Epidemic Model with Vaccination (SIRSV)',
          description: "Co-authored research extending the classical SIRS epidemic model to a networked process that accounts for both permanent and temporary immunity, validated on Lebanese COVID-19 data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sirsv-network/";
            },},{id: "projects-stochastic-modeling-of-highway-traffic-flow",
          title: 'Stochastic Modeling of Highway Traffic Flow',
          description: "A solo project fitting homogeneous and non-homogeneous Poisson processes to real toll-highway data to test whether a memoryless model can explain vehicle arrivals.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/stochastic-traffic/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%6D%68%39%34@%6D%61%69%6C.%61%75%62.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/HasanH94", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hassan-hammoud-42a475229", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
