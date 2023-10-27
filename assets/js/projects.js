const projects = [
    {
        title:'DSA Visualization',
        description:'DSA Visualization is a project on data structures and algorithms. In this project all points of data structures and algorithms like as working approach, properties, operations, applications, advantages and disadvantages are well explained and visualize the operations for better understanding',
        url:'https://raj-rathod.github.io/DSA-visualisation-in-angular/',
        image:'assets/images/dsa-project.png',
        startDate:'January 2022',
        endDate:'Inprogress',
        tags:['Angular', 'TypeScript', 'PWA','DSA','Github','Github Actions']
    },
    {
        title:'DSA NPM package',
        description:'The provided package is a comprehensive library developed for the functionality of data structures and algorithms. It includes a wide range of standard algorithms that are commonly used in computer science and programming.',
        url:'https://www.npmjs.com/package/@raj-rathod/dsa-methods',
        image:'assets/images/dsa-npm-project.png',
        startDate:'January 2022',
        endDate:'Inprogress',
        tags:['NPM Package', 'TypeScript','DSA','Github']
    },

     {
        title:'The Custom Calendar',
        description:'The Custom Calendar project is meticulously crafted without reliance on third-party libraries or external APIs. This standalone calendar offers a wide array of features to make your calendar experience different. One of its standout features is the robust search, which allows users to find the day of the week for any specific date',
        url:'https://raj-rathod.github.io/Calendar_without_Third_Party_api/',
        image:'assets/images/calendar-project.png',
        startDate:'December 2021',
        endDate:'January 2022',
        tags:['Angular', 'TypeScript','Number Theory','Github','Github Actions']
    },

]

const setProjectData = () => {
    const projectsElements = document.getElementById('projects');
    let projecthtml = ''
    projects.forEach((project) => {
        let tags = '';
        project.tags.forEach((tag) =>{
            tags += ` <div class="skill-badge me-md-3 me-2 mb-md-3 mb-2 rounded-pill">
            ${tag}
        </div>`
        })
         projecthtml += `<div class="col-sm-4 mb-3">
         <div class="card experience-card-container h-100">
             <img src="${project.image}" class="card-img-top" alt="${project.title}">
             <div class="card-body">
                 <h5 class="card-title">
                     <a href="${project.url}" target="new">${project.title}</a>
                 </h5>
                 <h6 class="card-subtitle mb-2 text-muted">${project.startDate} - ${project.endDate}</h6>
                 <p class="card-text">${project.description}</p>
                 <div class="d-flex flex-wrap">
                    ${tags}
                 </div>
             </div>
         </div>
     </div>`
    });
    projectsElements.innerHTML = projecthtml;
}

setProjectData();