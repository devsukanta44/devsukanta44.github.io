<template>
  <div>
    <main id="main">
      <section id="about" class="about">
        <div class="container">

          <div class="section-title">
            <h2>About</h2>
            <p>
              {{ aboutMe }}
            </p>
          </div>

          <div class="row">
            <div class="col-lg-4" data-aos="fade-right">
              <img src="assets/img/profile-img-1.jpg" class="img-fluid image-about" alt="">
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Freelancer, Web &amp; Software Developer.</h3>
              <p class="font-italic">
                {{ description }}
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li><i class="icofont-rounded-right"></i> <strong>Birthday:</strong> {{ birthDay }}</li>
                    <li><i class="icofont-rounded-right"></i> <strong>Website:</strong> <span class="badge badge-info">https://devsukanta.me/</span></li>
                    <li><i class="icofont-rounded-right"></i> <strong>Phone:</strong> {{ mobileNo }}</li>
                    <li><i class="icofont-rounded-right"></i> <strong>City:</strong> {{city}}</li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li><i class="icofont-rounded-right"></i> <strong>Age:</strong> {{ age }}</li>
                    <li><i class="icofont-rounded-right"></i> <strong>Degree:</strong> {{ degree }}</li>
                    <li><i class="icofont-rounded-right"></i> <strong>Email:</strong> {{ email }}</li>
                    <li><i class="icofont-rounded-right"></i> <strong>Freelance:</strong> <span :class="{ 'badge badge-success' :  availability, 'badge badge-danger' : !availability}">{{ availability ? "Available" : "Not Available" }}</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default{
  name: "About",
  data(){
    return {
      birthDay : "30 October, 1995",
      age : 26,
      city : "Sylhet-3100, Bangladesh",
      degree : "MIT, IICT-SUST",
      email : "sukantap@student.sust.edu",
      availability : true,
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
.image-about{
  background: #151731;
  padding: 5px;
}
p{
  color: #3a403a;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 1px;
  text-align: justify-all;
}
</style>
