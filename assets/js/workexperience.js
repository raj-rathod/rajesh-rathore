const workexperiences = [
    {
        position: 'Sr. Frontend Developer',
        companyNameAndLoaction: 'Stylework | Gurgaon | India',
        url: 'https://www.stylework.city/',
        startDate: 'March 2021',
        endDate: 'Present',
        description: 'I have actively contributed to the development and maintenance of web applications using Angular 10+ and various frontend technologies. My role involved creating dynamic and responsive user interfaces by utilizing Angular components, directives, services, pipes, and modules. Collaboration with backend developers was integral to my work, as I ensured the seamless integration of REST APIs to maintain data consistency and security.',
        skills: ['Angular', 'TypeScript', 'JavaScript', 'Bootstrap', 'Html', 'CSS|SCSS', 'SSR|SEO', 'REST Api'],

    }
]

const setWorkexperienceData = () => {
    const workexperienceElement = document.getElementById('workexperience');
    let workexperienceHtml = '';
    workexperiences.forEach((workexperience) => {
        let skillshtml = '';
        workexperience.skills.forEach((skill) => {
            skillshtml += `<div class="skill-badge me-md-3 me-2 mb-md-3 mb-2 rounded-pill">
            ${skill}
        </div>`
        });
        workexperienceHtml += `<div class="experience-card-container mt-3 p-lg-3 p-2">
        <h5>
            ${workexperience.position} | <a href="${workexperience.url}" target="new">${workexperience.companyNameAndLoaction}</a>
        </h5>
        <p class="text-muted text-small">
           ${workexperience.startDate} - ${workexperience.endDate}
        </p>
        <p>
          ${workexperience.description}
        </p>

        <div class="d-flex flex-wrap">
     ${skillshtml}
        </div>
    </div>`
    });
    workexperienceHtml += ` <div class="d-flex justify-content-center mt-3">
    <div class="btn-hover color-9 text-uppercase" onclick="getResume()">
        Resume
    </div>
</div>`
    workexperienceElement.innerHTML = workexperienceHtml;
}
setWorkexperienceData();