const getDevBlogs = () => {
  fetch("https://dev.to/api/articles?username=rajrathod")
    .then((response) => response.json())
    .then((data) => {
        setBlogsData(data);
    })
    .catch((error) => console.log(error));
};

const setBlogsData = (data) => {
    const blogSectionElement = document.getElementById('blogSection');
    if(data.length === 0){
      blogSectionElement.innerHTML = `<div class="col-sm-12">
      <p class='text-muted mt-5'>Oops!, No Blogs Found</p>
      </div>`;
      return
    }
    const blogData = data.slice(0,3);
    let blogs ='';
    blogData.forEach( (blog) => {
        blogs += ` <div class="col-sm-4">
        <div class="card experience-card-container h-100">
            <img src="${blog.cover_image}" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="d-flex">
                    <div>
                        <img class="profile-image" src="${blog.user.profile_image}" alt="Rajesh Rathore">
                    </div>
                    <div class="ms-2">
                        <p class="m-0 fw-bold text-small">${blog.user.name}</p>
                        <span class="text-muted text-smaller">${blog.readable_publish_date} | ${blog.reading_time_minutes} min read</span>
                    </div>
                </div>
                <h5 class="card-title mt-2">
                    ${blog.title}
                </h5>
    
                <p class="card-text">${blog.description}</p>
                <div class="d-flex flex-wrap">
                    <div class="tag-badge  me-2  mb-2 ">
                        #${blog.tag_list[0]}
                    </div>
                    <div class="tag-badge  me-2  mb-2">
                        #${blog.tag_list[1]}
                    </div>
                    <div class="tag-badge  me-2 mb-2 ">
                        #${blog.tag_list[2]}
                    </div>
                    <div class="tag-badge me-2  mb-2 ">
                        #${blog.tag_list[3]}
                    </div>
                   
                </div>
            </div>
            <a target="new" href="${blog.url}" class="stretched-link"></a>
        </div>
    </div>` 
    });
  
    blogSectionElement.innerHTML = blogs;
    console.log(blogs);
}



getDevBlogs();
