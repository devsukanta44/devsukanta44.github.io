<template>
  <SideNav/>
  <router-view/>
  <Footer/>
</template>
<script>
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
  export default {
    name: "MainLayout",
    components:{
      SideNav,
      Footer
    },
    data(){
      return {
        //
      }
    }
  }
</script>
