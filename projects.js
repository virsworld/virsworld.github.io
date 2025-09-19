const projects = [
        `
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="music streaming app" src="/assets/img/gis_cover.png" style="height: 100%; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator teal-text hoverline">Ene GIS<i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                  Environmentally conscious Geographic Information System (GIS).
                </p>
              </div>
              <div class="card-reveal">
                <!-- TODO: change this -- only close button -->
                <!-- <span class="card-title brown-text">Accomplishments<i class="mdi-navigation-close right"></i></span> -->
                <span class="card-title grey-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
                <ul>
                  <li><b>Tools:</b> C++</li>
                  <li>Generate directions to and from places in popular cities.</li>
                  <li>Access bike share locations available in urban cities</li>
                  <li>Access electric vehicle charging locations</li>
                </ul>
                <div class="card-action">
                  <a aria-label="Visit " href="https://www.linkedin.com/in/vir-patel/overlay/1755130631501/single-media-viewer/?type=DOCUMENT&profileId=ACoAAEms4UMBDTOFNgpzjIul5UyZPgpDvqY4u0E" target="_blank" data-position="top"
                    data-tooltip="View Online"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-external-link"></i></a>
                </div>
              </div>
            </div>
        `,
        `
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="quiz app" src="/assets/img/cracker_project.png" style="height: 100%; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator teal-text hoverline">Password Cracker<i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                  Attempts to crack user passwords taken from leaked hash data by hashing common passwords and cross-referencing.
                </p>
              </div>
              <div class="card-reveal">
                <!-- TODO: change this -- only close button -->
                <!-- <span class="card-title brown-text">Accomplishments<i class="mdi-navigation-close right"></i></span> -->
                <span class="card-title grey-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
                <ul>
                  <li><b>Tools:</b> Verilog, ModelSim</li>
                  <li>Reveal the password of users affected by a data leak.</li>
                  <li>Two modes avaialbe, all and target.</li>

                </ul>
                <div class="card-action">
                  <a aria-label="Visit " href="https://docs.google.com/presentation/d/1Uy7J0Y0WWg2kw5RO47jo83wm7phxgxnKt66pGZyQ9IQ/edit?slide=id.g3258c218dd2_0_0#slide=id.g3258c218dd2_0_0" target="_blank" data-position="top"
                    data-tooltip="View Online"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-external-link"></i></a>
                </div>
              </div>
            </div>
        `,
        `
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="quiz app" src="/assets/img/tcdb.png" style="height: 100%; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator teal-text hoverline">TestcaseDB<i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                  Made for programming students to ensure their program can handle more than the public test cases available. Students should create their own test cases but use this as a resource to check out what their peers have come up with and share their testing. I plan on continuing to add more features for fun :D (like editing the uploaded test cases)
                </p>
              </div>
              <div class="card-reveal">
                <!-- TODO: change this -- only close button -->
                <!-- <span class="card-title brown-text">Accomplishments<i class="mdi-navigation-close right"></i></span> -->
                <span class="card-title grey-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
                <ul>
                  <li><b>Tools:</b> React.js, JavaScript, Node.js</li>
                  <li>Upload/delete test cases.</li>
                  <li>View other peoples test cases</li>

                </ul>
                <div class="card-action">
                  <a aria-label="Visit " href="https://testcasedb.netlify.app" target="_blank" data-position="top"
                    data-tooltip="View Online"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-external-link"></i></a>
                </div>
              </div>
            </div>
        `];

document.addEventListener("DOMContentLoaded", () => {
    const projects_section = document.getElementById('projects');
    const title = document.createElement('h3');
    const container = document.createElement('div');
    const row = document.createElement('div');
    const project = document.createElement('div');
    
    title.classList = "page-title white-text teal";
    title.innerText = "Recent Projects";
    projects_section.appendChild(title);
    projects_section.appendChild(container);
    container.appendChild(row);
    project.classList = "col s12 m6 l4";
    project.innerHTML = projects[0];
    row.classList = "row";
    row.appendChild(project);

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
        projects.forEach((element, i) => {
            if (i) {
                const projDiv = document.createElement('div');
                projDiv.classList = "col s12 m6 l4";
                projDiv.innerHTML = element;
                row.appendChild(projDiv);
            }
        });
        more_btn_col.style.display = 'none';
    }
});