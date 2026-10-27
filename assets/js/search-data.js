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
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Download my CV (last updated October 27, 2026).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-joined-university-of-california-santa-barbara-as-a-visiting-student-in-the-department-of-mechanical-engineering-feel-free-to-reach-out-to-chat",
          title: 'Joined University of California, Santa Barbara as a visiting student in the department...',
          description: "",
          section: "News",},{id: "news-our-paper-a-complex-spatial-frequency-approach-to-optimal-control-of-finite-extent-linear-evolution-systems-was-conditionally-accepted-by-ieee-transactions-on-automatic-control",
          title: 'Our paper “A complex spatial frequency approach to optimal control of finite-extent linear...',
          description: "",
          section: "News",},{id: "news-our-paper-output-feedback-adaptive-model-predictive-control-for-ramp-metering-a-set-membership-approach-was-provisionally-accepted-by-automatica",
          title: 'Our paper “Output-feedback adaptive model predictive control for ramp metering: a set-membership approach”...',
          description: "",
          section: "News",},{id: "news-invited-talk-at-the-school-of-science-and-engineering-the-chinese-university-of-hong-kong-shenzhen",
          title: 'Invited talk at the School of Science and Engineering, the Chinese University of...',
          description: "",
          section: "News",},{id: "news-invited-talk-at-the-department-of-decision-and-control-kth-royal-institute-of-technology",
          title: 'Invited talk at the Department of Decision and Control, KTH Royal Institute of...',
          description: "",
          section: "News",},{id: "news-informal-seminar-talk-at-the-center-for-control-dynamical-systems-and-computation-university-of-california-santa-barbara",
          title: 'Informal seminar talk at the Center for Control, Dynamical Systems, and Computation, University...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%65%78%69%61%6E@%75%6D%69%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zhexian-li-74511a194", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=rvxVkakAAAAJ", "_blank");
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
