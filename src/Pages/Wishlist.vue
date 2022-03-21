<template >
  <div>
    <div class="column" >
      <div class="c1 container col-md-8 text-left" >
        <b>My Wishlist&nbsp;({{ wishLitArraylength }})</b>
      </div>
      <div v-for="wishlist in wishList" :key="wishlist.id">
        <div class="c2 container col-md-8 text-left">
          <div class="row">
            <div class="imageContainer">
              <img
               :src=wishlist.url
                height="100"
                width="80"
                alt="http://www.w3.org/2000/svg"
                @click="gotoBookdetails(wishlist)"
              />
            </div>
            <div class="bookdetailscontainer col-md-6">
              <div class="column text-left">
                <div class="booktitle">
                  <b>{{ wishlist.bookName }}</b>
                </div>
                <span class="authortitle">{{ wishlist.authorName }}</span>
                <div class="row">
                  <div class="price ml-3">
                    <b>Rs.{{ wishlist.discountprice }}</b>
                  </div>
                  &nbsp;
                  <div class="subprice ml-1">
                    <s>Rs.{{ wishlist.actualPrice }}</s>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <img
                src="../assets/Delete.png"
                @click="deleteItem(wishlist)"
                data-toggle="tooltip"
                data-placement="top"
                title="Delete"
                class="deleteImg"
                height="20"
                width="20"
                alt=""
              />              
            </div>
          </div>
        </div>
      </div>
     <div id="snackbar">Item Deleted </div>
    </div>
  </div>
</template>
<script>
import router from "../Router/index";

export default {
  data() {
    return {
      wishListdata: [],
      mode:'dark'
    };
  },
  computed: {
    wishList() {
      return this.$store.getters["bookstore/wishList"];
    },
    wishLitArraylength() {
      return this.$store.getters["bookstore/wishListItemsLength"];
    },
    
  },
  methods: {
    gotoBookdetails(wishlist){
      console.log(wishlist);
       this.$store.dispatch("bookstore/quickview", wishlist);
       router.push("/bookdetails");
    },
    deleteItem(event) {
      console.log(event);
      this.$store.dispatch("bookstore/deleteFromWishlist", event);
       var x = document.getElementById('snackbar')
       x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    },
     darkMode() {

     this.mode="dark"
      

      },
       lightMode() {
        this.mode="light"
      }

  },
};
</script>
<style scoped>
.c1 {
  background-color: lightgrey;
  border-radius: 5px;
  margin-top: 50px;
  height: 50px;
  padding-top: 15px;
  margin-left: 180px;
}
.c2 {
  border: 1px solid gainsboro;
  margin-left: 180px;
  height: 150px;
}
.imageContainer {
  padding: 20px 50px;
}
.bookdetailscontainer {
  margin-top: 20px;
  height: 100px;
  width: 200px;
  margin-left: -25px;
  width: 150px;
}
.booktitle {
  font-size: 18px;
}
.authortitle {
  font-size: 14px;
}
.price {
  margin-top: 15px;
  font-size: 20px;
}
.subprice {
  margin-top: 21px;
  font-size: 14px;
}
.deleteImg {
  float: right;
  margin-left: 190px;
  margin-top: 50px;
  cursor: pointer;
}
.dark{
background: #192734;
color: #f3f3f3;
}
#snackbar {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: #333; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius:5px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  bottom: 30px; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}


</style>