<template>
  <main id="main">
    <section id="skills" class="skills section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Skills</h2>
          <h3>Some of my skills :</h3>
        </div>

        <div class="row skills-content">

          <div class="col-lg-4 mb-3" data-aos="fade-up">
            <div class="card">
              <div class="card-header">
                <h2 class="badge badge-primary">Frontend Development</h2>
              </div>
              <div class="card-body">
                <ul>
                  <li>HTML 5</li>
                  <li>CSS3
                    <ul>
                      <li>Bootstrap</li>
                      <li>Material Design</li>
                      <li>Responsive Design</li>
                    </ul>
                  </li>
                  <li>JavaScript / jQuery
                    <ul>
                      <li>VueJs</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div class="col-lg-4 mb-3" data-aos="fade-down" data-aos-delay="100">
            <div class="card">
              <div class="card-header">
                <h2 class="badge badge-warning">Backend Development</h2>
              </div>
              <div class="card-body">
                <ul>
                  <li>PHP
                    <ul>
                      <li>Laravel</li>
                    </ul>
                  </li>
                  <li>Databases
                    <ul>
                      <li>MariaDb / MySQL</li>
                    </ul>
                  </li>
                  <li>Server Management</li>
                </ul>
              </div>
            </div>

          </div>
          <div class="col-lg-4" data-aos="fade-up">
            <div class="card">
              <div class="card-header">
                <h2 class="badge badge-info">Other Skills</h2>
              </div>
              <div class="card-body">
                <ul>
                  <li>Version Control / GIT</li>
                  <li>Browser Developer Tool</li>
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Skills"
}
</script>

<style scoped>
h3{
  color: #4e534e;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 3px;
}
.card-body{
  height: 226px;
}
</style>