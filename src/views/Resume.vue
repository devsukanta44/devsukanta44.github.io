<template>
  <main id="main">
    <section id="resume" class="resume">
      <div class="container">
        <div class="section-title">
          <h2>Resume</h2>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>{{ name }}</h4>
              <p><em>{{ description }}</em></p>
              <ul>
                <li>{{ city }}</li>
                <li>{{ mobileNo }}</li>
                <li>{{ email }}</li>
              </ul>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>{{degree.masters.name}}</h4>
              <h5>{{degree.masters.session}}</h5>
              <p><em>{{degree.masters.university}}</em></p>
            </div>
            <div class="resume-item">
              <h4>{{degree.bsc.name}}</h4>
              <h5>{{degree.bsc.session}}</h5>
              <p><em>{{degree.bsc.university}}</em></p>
            </div>
            <h3 class="resume-title">Professional Certificate</h3>
            <div class="resume-item">
              <h4>{{profession.level_3.name}}</h4>
              <p><em>{{profession.level_3.institution}}</em></p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>{{ profession.level_1.name }}</h4>
              <h5>{{ profession.level_1.session }}</h5>
              <p><em>{{ profession.level_1.institution }} </em></p>
            </div>
            <div class="resume-item">
              <h4>{{ profession.level_2.name }}</h4>
              <h5>{{ profession.level_2.session }}</h5>
              <p><em>{{ profession.level_2.institution }} </em></p>
            </div>
            <h3 class="resume-title">Extra-Curriculum Activities</h3>
            <div class="resume-item">
              <h4>{{ extra.level_1.name }}</h4>
              <h5>{{ extra.level_1.session }}</h5>
              <p><em>{{ extra.level_1.institution }} </em></p>
            </div>
            <div class="resume-item">
              <h4>{{ extra.level_2.name }}</h4>
              <h5>{{ extra.level_2.session }}</h5>
              <p><em>{{ extra.level_2.institution }} </em></p>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>


<script>
export default{
  name: "Resume",
  data(){
    return {
      name : "Sukanta Purkayastha",
      city : "Sylhet-3100, Bangladesh",
      degree : {
        masters : {
          name : "Masters in Information Technology",
          session : "2019 - 2020",
          university : "Shahjalal University of Science & Technology, Sylhet-3100"
        },
        bsc : {
          name : "B.Sc in Computer Science & Engineering",
          session : "2014 - 2018",
          university : "Leading University, Sylhet-3100"
        }
      },
      profession : {
        level_1 : {
          name : "Laravel Trainer",
          session : "2020 - present",
          institution : "Infinity Flame Soft, Sylhet-3100"
        },
        level_2 : {
          name : "Junior Software Developer",
          session : "2019 - 2020",
          institution : "Infinity Flame Soft, Sylhet-3100"
        },
        level_3 : {
          name : "SQL for Data Science",
          institution : "University of California"
        }
      },
      extra : {
        level_1 : {
          name : "Senior Executive Member",
          session : "2017 - 2018 (Committee)",
          institution : "Leading University Computer Club"
        },
        level_2 : {
          name : "Joint Secretary",
          session : "2018 - 2019 (Committee)",
          institution : "Leading University Photographic Society"
        }
      },
      email : "sukantap@student.sust.edu",
      mobileNo : "+880 1719-894414",
      description : "I am an energetic developer, keen to learn new\n" +
          "                technologies. Also skilled with, Laravel, Vue js, And\n" +
          "                REST API. In addition, Experience with over 3 years in\n" +
          "                web development sector. Excellent reputation for\n" +
          "                resolving problems and improving customer\n" +
          "                satisfaction.",
      aboutMe : "The name’s Sukanta Purkayastha. " +
          "Highly motivated Back-end developer.I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me."


    }
  }
}
</script>

<style scoped>

</style>