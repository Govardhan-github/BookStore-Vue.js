<template >

    <div class="container">
      <div class="row ml-4 pt-2">
        <div class="text-center mr-3 pt-4 mt-2">
          <img
            src="../assets/logoimage.png"
            class="image"
            height="250"
            width="250"
            alt="..."
          />
          <div class="py-3"><h5><b>Online Book Shopping</b></h5></div>
        </div>
        <div class="loginPage ">
        <Navigation />
        </div>
      </div>
    </div>
      


</template>
<script>
 import Navigation from "./login.vue";
export default {
  components: {
     Navigation,
  },
};
</script>
<style scoped >

.container {
  height: 350px;
  width: 450px;
  background-color: grey;
  border-radius: 28px;
  margin-top: 120px;
  margin-left: 350px;
}
h5{
color: white;
}
.image {
  border-radius: 150px;
  
}
Titleheading{
color: white;
}
.loginPage{
position: relative;
margin-top: -375px;
margin-left: 280px;
}
</style>