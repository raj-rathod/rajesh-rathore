const Skills = {
    languages: [
      {
        src: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",
        alt: "JAVA",
      },
      {
        src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
        alt: "JavaScript",
      },
      {
        src: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
        alt: "TypeScript",
      },
      {
        src: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
        alt: "Python",
      },
      {
        src: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
        alt: "Html5",
      },
      {
        src: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
        alt: "Css3",
      },
    ],
    frameworks: [
        {
          src: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
          alt: "Node.js",
        },
        {
          src: "https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white",
          alt: "Angular",
        },
        {
          src: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
          alt: "Express.js",
        },
        {
          src: "https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white",
          alt: "NPM",
        },
        {
          src: "https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white",
          alt: "RXJS",
        },
        {
          src: "https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white",
          alt: "jquery",
        },
        {
          src: "https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
          alt: "bootstrap",
        },
        {
          src: "https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black",
          alt: "webpack",
        },
        {
          src: "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
          alt: "SASS",
        },
        {
          src: "https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white",
          alt: "Chart.js",
        },
        
      ],

      developmentTool:[
        {
            src:"https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white",
            alt: "VS Code"
        },
        {
            src:"https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
            alt: "git"
        },
        {
            src:"https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
            alt: "github"
        },
        {
            src:"https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white",
            alt: "bitbucket"
        },
        {
            src:"https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white",
            alt: "github-actions"
        },
        {
            src:"https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white",
            alt: "jira"
        },
        {
            src:"https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
            alt: "postman"
        },
      ],
      database:[
        {
            src:"https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white",
            alt:"Firebase"
        },
        {
            src:"https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
            alt:"mongodb"
        },
        {
            src:"https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
            alt:"mysql"
        },
      ]
  };

  const setLanguagesSkillData = (data) => {
    const languagesElements = document.getElementById("languageSkill");
    let skills = '';
    data.forEach(language => {
        skills += `<img class="mb-lg-2 mb-1 rounded me-1"
        src="${language.src}"
        alt="${language.alt}">`
    });
    languagesElements.innerHTML = skills;
  }

  const setFrameworkSkillData = (data) => {
    const frameworkElements = document.getElementById("frameworkSkill");
    let skills = '';
    data.forEach(framework => {
        skills += `<img class="mb-lg-2 mb-1 rounded me-1"
        src="${framework.src}"
        alt="${framework.alt}">`
    });
    frameworkElements.innerHTML = skills;
  }

  const setDevelopmentToolSkillData = (data) => {
    const developmentToolElements = document.getElementById("developmentToolSkill");
    let skills = '';
    data.forEach(developmentTool => {
        skills += `<img class="mb-lg-2 mb-1 rounded me-1"
        src="${developmentTool.src}"
        alt="${developmentTool.alt}">`
    });
    developmentToolElements.innerHTML = skills;
  }

  const setDatabaseSkillData = (data) => {
    const databaseElements = document.getElementById("databaseSkill");
    let skills = '';
    data.forEach(database => {
        skills += `<img class="mb-lg-2 mb-1 rounded me-1"
        src="${database.src}"
        alt="${database.alt}">`
    });
    databaseElements.innerHTML = skills;
  }

  setLanguagesSkillData(Skills.languages);
  setFrameworkSkillData(Skills.frameworks);
  setDevelopmentToolSkillData(Skills.developmentTool);
  setDatabaseSkillData(Skills.database);

 