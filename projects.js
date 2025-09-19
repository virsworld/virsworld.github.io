const projects = [
  {
    img: "/assets/img/gis_cover.png",
    alt: "music streaming app",
    title: "Ene GIS",
    description: "Environmentally conscious Geographic Information System (GIS).",
    tools: "C++",
    accomplishments: [
      "Generate directions to and from places in popular cities.",
      "Access bike share locations available in urban cities",
      "Access electric vehicle charging locations"
    ],
    link: "https://www.linkedin.com/in/vir-patel/overlay/1755130631501/single-media-viewer/?type=DOCUMENT&profileId=ACoAAEms4UMBDTOFNgpzjIul5UyZPgpDvqY4u0E"
  },
  {
    img: "/assets/img/cracker_project.png",
    alt: "quiz app",
    title: "Password Cracker",
    description: "Attempts to crack user passwords taken from leaked hash data by hashing common passwords and cross-referencing.",
    tools: "Verilog, ModelSim",
    accomplishments: [
      "Reveal the password of users affected by a data leak.",
      "Two modes avaialbe, all and target."
    ],
    link: "https://docs.google.com/presentation/d/1Uy7J0Y0WWg2kw5RO47jo83wm7phxgxnKt66pGZyQ9IQ/edit?slide=id.g3258c218dd2_0_0#slide=id.g3258c218dd2_0_0"
  },
  {
    img: "/assets/img/tcdb.png",
    alt: "quiz app",
    title: "TestcaseDB",
    description: "Made for programming students to ensure their program can handle more than the public test cases available. Students should create their own test cases but use this as a resource to check out what their peers have come up with and share their testing. I plan on continuing to add more features for fun :D (like editing the uploaded test cases)",
    tools: "React.js, JavaScript, Node.js",
    accomplishments: [
      "Upload/delete test cases.",
      "View other peoples test cases"
    ],
    link: "https://testcasedb.netlify.app"
  }
];

function buildProjectCard(project) {
  const projDiv = document.createElement("div");
  projDiv.classList = "col s12 m6 l4";
  projDiv.innerHTML = `
    <div class="card medium">
      <div class="card-image waves-effect waves-block waves-light">
        <img alt="${project.alt}" src="${project.img}" style="height: 100%; width: 100%" class="activator" />
      </div>
      <div class="card-content">
        <span class="card-title activator teal-text hoverline">${project.title}<i
            class="mdi-navigation-more-vert right"></i></span>
        <p>${project.description}</p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text"><small>Accomplishments</small><i
            class="mdi-navigation-close right"></i></span>
        <ul>
          <li><b>Tools:</b> ${project.tools}</li>
          ${project.accomplishments.map(acc => `<li>${acc}</li>`).join("")}
        </ul>
        <div class="card-action">
          <a aria-label="Visit " href="${project.link}" target="_blank" data-position="top"
            data-tooltip="View Online"
            class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
              class="fa fa-external-link"></i></a>
        </div>
      </div>
    </div>
  `;
  return projDiv;
}

document.addEventListener("DOMContentLoaded", () => {
  const projects_section = document.getElementById('projects');
  const title = document.createElement('h3');
  const container = document.createElement('div');
  const row = document.createElement('div');

  title.classList = "page-title white-text teal";
  title.innerText = "Recent Projects";
  projects_section.appendChild(title);
  projects_section.appendChild(container);
  container.appendChild(row);
  row.classList = "row";

  // first project
  row.appendChild(buildProjectCard(projects[0]));

  // load more button
  const more_btn_col = document.createElement('div');
  more_btn_col.classList = "col s12 m6 l4";
  const more_btn_card = document.createElement('div');
  more_btn_card.classList = "card medium center-align";

  const more_btn = document.createElement('button');
  more_btn.style.width = "100%";
  more_btn.style.height = "100%";
  more_btn.innerText = "Load More";
  more_btn.classList = "btn waves-effect waves-light teal";

  more_btn_card.appendChild(more_btn);
  more_btn_col.appendChild(more_btn_card);
  row.appendChild(more_btn_col);

  more_btn.onclick = () => {
    projects.forEach((project, i) => {
      if (i) row.appendChild(buildProjectCard(project));
    });
    more_btn_col.style.display = 'none';
  };
});