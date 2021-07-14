<template>
  <div>
    <!-- ======= Mobile nav toggle button ======= -->
    <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

    <!-- ======= Header ======= -->
    <header id="header">
      <div class="d-flex flex-column">
        <div class="profile">
          <img src="assets/img/profile-img-1.jpg" alt="" class="img-fluid rounded-circle">
          <h1 class="text-light"><a href="#">Sukanta <br/> Purkayastha</a></h1>
          <div class="social-links mt-3 text-center">
            <a target="_blank" href="https://twitter.com/sp_showrav" class="twitter"><i class="bx bxl-twitter"></i></a>
            <a target="_blank" href="https://www.facebook.com/showrav.purkayastha.9/" class="facebook"><i class="bx bxl-facebook"></i></a>
            <a target="_blank" href="https://www.instagram.com/s__p__showrav/" class="instagram"><i class="bx bxl-instagram"></i></a>
            <a target="_blank" href="https://join.skype.com/invite/cM7xu8oB27J2" class="google-plus"><i class="bx bxl-skype"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/sukanta-purkayastha-624b13134/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            <a target="_blank" href="https://github.com/sukanta7660" class="github"><i class="bx bxl-github"></i></a>
          </div>
        </div>

        <nav class="nav-menu">
          <ul>
            <li class="active"><router-link to="/"><i class="bx bx-home"></i> <span>Home</span></router-link></li>
            <li><router-link to="/about"><i class="bx bx-user"></i> <span>About</span></router-link></li>
            <li><router-link to="/skills"><i class="bx bx-bulb"></i> <span>Skills</span></router-link></li>
            <li><router-link to="resume"><i class="bx bx-file-blank"></i> <span>Resume</span></router-link></li>
<!--            <li><router-link to="#"><i class="bx bx-book-content"></i> Portfolio</router-link></li>-->
<!--            <li><router-link to="/testimonial"><i class="bx bx-microphone"></i> Testimonial</router-link></li>-->
            <li><router-link to="/contact"><i class="bx bx-envelope"></i> Contact</router-link></li>

          </ul>
        </nav><!-- .nav-menu -->
        <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "SideNav"
}
</script>

<style scoped>

</style>