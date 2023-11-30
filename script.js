

const imgArr = [
    {
      id: "project1_id",
      class: "project1",
      project_name: "Zomato Clone",
      img: [
        { imgs: "img/project1_img/img7.png" },
        { imgs: "img/project1_img/img1.png" },
        { imgs: "img/project1_img/img2.png" },
        { imgs: "img/project1_img/img3.png" },
        { imgs: "img/project1_img/img4.png" },
        { imgs: "img/project1_img/img5.png" },
        { imgs: "mg/project1_img/img6.png" },
      ],
    },
    {
      id: "project2_id",
      class: "project2",
      project_name: "Todo App",
      img: [
        { imgs: "img/Project2_img/img1.png" },
        { imgs: "img/Project2_img/img2.png" },
        { imgs: "img/Project2_img/img3.png" },
        { imgs: "img/Project2_img/img4.png" },
        { imgs: "img/Project2_img/img5.png" },
        { imgs: "img/Project2_img/img6.png" },
        { imgs: "img/Project2_img/img7.png" },
      ],
    },
    {
      id: "project3_id",
      class: "project3",
      project_name: "Employee-Directory",
      img: [
        { imgs: "img/Project3_img/img1.png" },
        { imgs: "img/Project3_img/img2.png" },
        { imgs: "img/Project3_img/img3.png" },
        { imgs: "img/Project3_img/img4.png" }
      ],
    },
    {
      id: "project4_id",
      class: "project4",
      project_name: "FrontEnd App",
      img: [
        { imgs: "img/Project4_img/img1.png" },
        { imgs: "img/Project4_img/img2.png" },
        { imgs: "img/Project4_img/img3.png" },
        { imgs: "img/Project4_img/img4.png" }
      ],
    }
  ];


const project_img_id = document.getElementById("project_img_id");
const projects_card_id = document.getElementById("projects_card_id");

imgArr.map((curelem) =>
  projects_card_id.insertAdjacentHTML(
    "beforeend",
    `
<div id=${curelem.id} class=${curelem.class}>
                                
                                    <div class="project_img">
                                    ${curelem.img
                                      .map(
                                        (item) =>
                                          ` <div class="slide_up">
                                            <img src=${item.imgs} alt="" >
                                      </div>
                                      `
                                      )
                                      .join("")}
                                    </div>
                               
                                <p class="project_title">
                                    ${curelem.project_name}
                                </p>
                            </div>
`
  )
);

const project1_id = document.getElementById("project1_id");

project1_id.onclick = () => {
  window.open("https://zomatoappclone4.netlify.app", "_blank");
};

const project2_id = document.getElementById("project2_id");

project2_id.onclick = () => {
  window.open("https://todoappbytsumit.netlify.app", "_blank");
};


const project3_id = document.getElementById("project3_id");

project3_id.onclick = () => {
  window.open("https://employeedirectorybysumit.netlify.app", "_blank");
};

const project4_id = document.getElementById("project4_id");

project4_id.onclick = () => {
  window.open("https://frontendproject23.netlify.app", "_blank");
};


const openNav = document.querySelector('.openNav')
const closeNav = document.querySelector('.closeNav')
const Navbar = document.querySelector('.Navbar')

openNav.onclick = () => {

    Navbar.style.height = '40vh'
    openNav.style.display = 'none'
    closeNav.style.display = 'block'
  
 

}

closeNav.onclick = () => {
  Navbar.style.height = '0vh'
  openNav.style.display = 'block'
  closeNav.style.display = 'none'
}

const ResponsivenavigationContainer = document.querySelector('.ResponsivenavigationContainer');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    ResponsivenavigationContainer.classList.add('sticky');
  } else {
    ResponsivenavigationContainer.classList.remove('sticky');
  }
});