<template >
  <div>
    <div class="container">
      <div class="row">
        <div class="column">
          <div class="Leftcontainer p-3">
            <div class="book">
              <img :src=details.url height="350" width="280" alt="" />
            </div>
          </div>
          <div class="btns">
            <button type="button" @click="addToCart(details)" class="cartBtn">
              ADD TO CART
            </button>

            &nbsp;

            <button
              type="button"
              @click="addToWishlist(details)"
              class="wishlistbtn"
            >
              <img src="../assets/favorite_white_24dp.svg" alt="" /> WISHLIST
            </button>
          </div>
          <div id="snackbar">Item Added </div>
        </div>
        <div class="Rightcontainer">
          <div class="text-left">
            <div class="p">
              <div>
                <h3>
                  <b>{{ details.bookName }}</b>
                </h3>
              </div>
              <div class="mb-2" style="opacity: 0.5">
                By. {{ details.authorName }}
              </div>
              <div class="rating row">
                <button type="button" class="ratebtn">
                  &nbsp;{{ details.Rating }}
                  <img
                    src="../assets/start.svg"
                    height="25"
                    width="15"
                    class="star"
                  />&nbsp;</button
                >&nbsp;
                <div>({{ details.booksQuantity }})</div>
              </div>

              <div class="row price p-2">
                Rs.<b>{{ details.discountprice }}</b
                >&nbsp;
                <sub class="subprice mt-3"
                  ><s>Rs.{{ details.actualPrice }}</s></sub
                >
              </div>
              <hr />
              <div>
                <li><b>Book Details</b></li>
                <div class="description p-3">{{ details.description }}</div>
              </div>
              <hr />
              <div class="column">
                <b>Customer Feedback</b>
                <div class="feedbackcontainer p-2 mt-3 ml-2">
                  <div>
                    <span class="feedbackheading"> overall rating</span>
                  </div>
                  <div class="rate">
                    <input
                      type="radio"
                      id="star5"
                      name="rate"
                      v-model="value"
                      value="5"
                    />
                    <label for="star5" title="text">5 stars</label>
                    <input
                      type="radio"
                      id="star4"
                      name="rate"
                      v-model="value"
                      value="4"
                    />
                    <label for="star4" title="text">4 stars</label>
                    <input
                      type="radio"
                      id="star3"
                      name="rate"
                      v-model="value"
                      value="3"
                    />
                    <label for="star3" title="text">3 stars</label>
                    <input
                      type="radio"
                      id="star2"
                      name="rate"
                      v-model="value"
                      value="2"
                    />
                    <label for="star2" title="text">2 stars</label>
                    <input
                      type="radio"
                      id="star1"
                      name="rate"
                      v-model="value"
                      value="1"
                    />
                    <label for="star1" title="text">1 star</label>
                  </div>
                </div>
                <div class="feedbacktextarea p-4">
                  <textarea
                    name=""
                    id=""
                    cols="55"
                    rows="3"
                    class="feedbacktext"
                    v-model="feedBack"
                    placeholder="Write Review here"
                  ></textarea>
                  <div>
                    <button class="feedbacksubmitbtn" @click="feedBackSubmit()">
                      Submit
                    </button>
                  </div>
                </div>
                <div class="column">
                  <div>
                    <div class="feebacksContainer"><b>Total Feedback</b></div>
                    <hr>
                      <div v-if="getFeedBacks" class="feedbackusername">
                      <div v-for="user in getuserName" :key="user.name">
                      <b>{{user.FullName}}</b>
                      </div>
                    </div>    
                    <div class="feedBacks" v-for="review in getFeedBacks" :key="review.id">
                      <div>Rating:<b>{{review.rating}}</b></div>
                      <div><b>{{review.review}}</b></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      details: "",
      addQuantity: false,
      bookQuantity: 0,
      feedBack: "",
      value: null,
      showfeedback:false,
    };
  },
  computed: {
    getFeedBacks(){
      return this.$store.getters['bookstore/feedBacks']
    },
    getuserName(){
       return this.$store.getters['bookstore/signupDetailsList']
    }

  },
  mounted() {
    this.details = this.$store.getters["bookstore/quickviewBook"];
    console.log(this.details);
  },
  methods: {
    addToWishlist(event) {
      this.$store.dispatch("bookstore/addBookToWishlist", event);
      this.message = this.$store.getters["bookstore/showwishlisterror"];
      var x = document.getElementById('snackbar')
       x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    },
    addToCart(event) {
      this.$store.dispatch("bookstore/addBookToCartList", event);
      console.log(event);
      var x = document.getElementById('snackbar')
       x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    
    },
    increaseQuantity(event) {
      this.$store.dispatch("bookstore/addBookToCartList", event);
      return this.bookQuantity++;
    },
    decreaseQuantity() {
      return this.bookQuantity--;
    },
   

    feedBackSubmit() {
      this.payload = {
        rating: this.value,
        review: this.feedBack,
        id:this.details.id

      };
      console.log(this.payload);
      this.$store.dispatch("bookstore/addFeedBack", this.payload);
    },
  },
};
</script>


<style scoped>
.container {
  margin-top: 60px;
}
.btns {
  margin-top: 10px;
}
#snackbar{

}
.cartBtn {
  width: 180px;
  height: 40px;
  border: none;
  color: white;
  background-color: #8f2b2f;
  border-radius: 8px;
  margin-left: 155px;
}
.wishlistbtn {
  width: 180px;
  height: 40px;
  border: none;
  color: white;
  background-color: black;
  border-radius: 8px;
}
.Leftcontainer {
  border: 1px solid grey;
  background-color: lightgrey;
  width: 360px;
  height: 400px;
  margin-left: 155px;
}
.Rightcontainer {
  margin-left: 25px;
  height: 150px;
  width: 550px;
}
.price {
  margin-left: -10px;
  font-size: 25px;
}
.ratebtn {
  margin-left: 2px;
  background-color: green;
  border: none;
  border-radius: 5px;
}
.subprice {
  font-size: 15px;
  opacity: 0.5;
}
.rating {
  margin-left: -2px;
}
.description {
  font-size: 13px;
  max-width: 550px;
}
.feedbackcontainer {
  height: 250px;
  width: 500px;
  background-color: grey;
  border-radius: 7px;
  opacity: 0.87;
}
.feedbackheading {
  text-align: left;
  color: black;
}
* {
  margin: 0;
  padding: 0;
}
.rate {
  margin-top: 0px;
  float: left;
  height: 46px;
  justify-content: space-evenly;
  padding: 0 0px;
}
.rate label {
  float: left;
}
.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}
.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: aliceblue;
}
.rate:not(:checked) > label:before {
  content: "★ ";
}
.rate > input:checked ~ label {
  color: #ffc700;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
}
.feedbacktextarea {
  position: relative;
  margin-top: -170px;
  border-radius: 15px;
}
.feedbacktext {
  border-radius: 5px;
}
.feedbacksubmitbtn {
  float: right;
  width: 75px;
  height: 35px;
  margin-top: 12px;
  margin-right: 50px;
  border: none;
  border-radius: 5px;
  background-color: #8f2b2f;
  color: white;
}
.feebacksContainer {
  margin-top: 60px;
  width: 150px;
  font-size: 18px;
}
.feedBacks {
  height: 70px;
  width: 400px;
  border: 1px solid lightgray;
  margin-top: 10px;
}
.feedbackusername{
  width: 250px;
  margin-top: 20px;
}
/* The snackbar - position it at the bottom and in the middle of the screen */
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