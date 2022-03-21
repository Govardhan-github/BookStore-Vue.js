<template>
  <div class="image bg-secondary">
    <img :src="url" height="597" width="1227" alt=""  />
    <div class="note">Welcome <br>
    To <br>
    Bookstore
    </div>
    <div class="btns row text-right">
    <button class="btn1" @click="gotoHome()">Login</button>
        <button class="btn1" @click="gotoSingup()">SignUp</button>
    </div>
  </div>
</template>
<script>
import router from '../Router/index'
export default {
  
  data() {
    return {
      url: "https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg",
        welcomeurl:'https://i.pinimg.com/originals/5d/52/48/5d524836f0119f072bb605ff9c1a2582.png'
        };
  },
  methods: {
    gotoHome(){
       router.push("/Home")
    },
    gotoSingup(){
      router.push("/Signup")
    }
  },
};
</script>
<style >
.image {
  object-fit: cover;
  margin-top: -60px;
  opacity: 0.9;
  
}
.note{
    color: beige;
    margin-top: -490px;
    margin-left: 800px;
    color-adjust: 1px;
    font-size: 60px;
    font-family: cursive;
    font-weight: italic;
}
.btns{
    margin-left:900px;
    gap: 50px;
}
.btn1{
    height: 45px;
    width:100px;
    border-radius: 10px;
    border: none;
    background-color: brown;
    color: white;
}
</style>