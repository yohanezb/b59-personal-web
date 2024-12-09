let projects = []; // length nya adalah 0

function addProject(e) {
  e.preventDefault();

  let projectTitle = document.getElementById("input-project-title").value;
  let startDate = document.getElementById("input-project-start-date").value;
  let  endDate = document.getElementById("input-project-end-date").value;
  let projectDescription = document.getElementById("input-project-description").value;
  let projectImage = document.getElementById("input-project-image").files;

  let selectedTechnologies =[];
  if (document.getElementById("node-js").checked) {
    selectedTechnologies.push(`<img src="assets/img/node-js.png" />`)
  }
  if (document.getElementById("react-js").checked) {
    selectedTechnologies.push(`<img src="assets/img/react-js.png" />`)
  }
  if (document.getElementById("next-js").checked) {
    selectedTechnologies.push(`<img src="assets/img/next-js.png" />`)
  }
  if (document.getElementById("typescript").checked) {
    selectedTechnologies.push(`<img src="assets/img/typescript.png" />`)
  }
  

  // if (projectTitle == "" || startDate == "" || imageInput.files.length === 0) {
  //   return alert("All input fields cannot be empty");
  // }

  if (projectTitle == "") {
    return alert("Title cannot be empty")
  }
  if (startDate == "" || endDate == "") {
    return alert("date cannot be empty")
  }
  if (projectDescription == "") {
    return alert("Description cannot be empty")
  }
  if (selectedTechnologies == "") {
    return alert("Please select at least 1 technologies")
  }
  if (projectImage.length < 1) {
    return alert("Image cannot be empty")
  }


  let image = URL.createObjectURL(projectImage[0]);

  let project = {
    author: "Yohanes B",
    title: projectTitle,
    startDate : startDate,
    endDate : endDate,
    duration: calculateDuration(endDate, startDate),
    description: projectDescription,
    technologies : selectedTechnologies,
    image: image,
    createdAt: new Date(),
  };

  projects.push(project);
  console.log(project);

  renderProject();
}

function renderProject() {
  let projectList = document.getElementById("projectList");
  let html = ""

  console.log(projects);

  for (let i = 0; i < projects.length; i++) {
    console.log (projects[i]);
    html += `
    <a href="project-detail.html">
      <div id="${i}" class="project-card">
      <img src="${projects[i].image}"/>
      <div>
        <h3>${projects[i].title}</h3>
        <h4>Durasi :${projects[i].duration}</h4>
        <div>
          <p>${projects[i].description}</p>
        </div>
      </div>
      <div class="technologies-icon">
        ${projects[i].technologies.join("")}
      </div>
      <div class="button-container">
        <a href="" class="button">Edit</a>
        <a href="" class="button">Delete</a>
      </div>
      </div>
    </a>
    `
  }
  projectList.innerHTML = html;
}


function calculateDuration(endDate, startDate) {

  const start = new Date(startDate);
  const end = new Date(endDate);

  const ms= end - start;
  
  const days = ms / (1000 * 60 * 60 * 24);
  if (days < 2) {
    return `${Math.floor(days)} day`;
  }
  if (days < 30) {
    return `${Math.floor(days)} days`;
  }

  const months = days / 30;
  if (months < 2) {
    return `${Math.floor(months)} month`;
  }
  if (months< 12) {
      return `${Math.floor(months)} months`;
  }

  const years = months / 12;
  if (years < 2) {
    return `${Math.floor(years)} year`;
  }
  else {}
  return `${Math.floor(years)} year(s)`;
}

