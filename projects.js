const projects = {
    "Ene GIS": `
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
            </div>`,
    "Password Cracker": `<div class="col s12 m6 l4">
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
          </div>`
}

document.addEventListener("DOMContentLoaded", (e) => {
    const projects_section = document.getElementById('projects');
    const title = document.createElement('h3');
    const container = document.createElement('div');
    const row = document.createElement('div');
    const project = document.createElement('div');
    
    title.innerText = "Projects";
    projects_section.appendChild(container);
    container.appendChild(row);
    project.classList = "col s12 m6 l4";
    project.innerHTML = projects["Ene GIS"];
    row.appendChild(project);
});