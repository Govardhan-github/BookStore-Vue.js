<template >
  <div>
    <div class="headercontainer ml-0 mr-1">
      <div class="row">
        <div class="">
          <img
            @click="gotoHomepage()"
            src="../assets/education.svg"
            height="35"
            class="bookImage pt-2"
            alt=""
          />
        </div>
        <div class="heading p-2" @click="gotoHomepage()">
          <span>BookStore</span>
        </div>
        <div class="searchbar col-md-5">
          <input
            class="form-control mt-1 ml-5"
            type="text"
            v-model="searchText"
            placeholder="Search"
            aria-label="Search"
          />
        </div>

        <div @click="gotoCartList()" class="cart">
          <div class="ml-1 mt-1">
            <img src="../assets/cart.svg" height="20" alt="" />
            <div class="subHead" style="color: white">
              Cart
              <span class="cartbadge badge badge-danger">{{
                cartItemLength
              }}</span>
            </div>
          </div>
        </div>

        <div @click="gotowishlist()" class="wishlistbtn mt-1">
          <div>
            <img src="../assets/favorite_white_24dp.svg" height="20" alt="" />
          </div>
          <div class="subHead1">
            Wishlist<span class="cartbadge badge badge-danger">{{
              wishlistLength
            }}</span>
          </div>
        </div>
        <div class="ordersbtn ml-5 mt-1" @click="gotoOrders()">
          <img src="../assets/order.jpg" height="20" alt="" />
          <div class="subHead2">
            Orders<span class="cartbadge badge badge-danger">{{
              ordersLength
            }}</span>
          </div>
        </div>
        <div class="profile ml-5 mt-1" @click="gotoProfile()">
          <img src="../assets/profileW.svg" height="20" alt="" />
          <div class="subHead2">
          {{getProfileName.FullName}}</div>
        </div>



        <!-- <div class="dropdown text-right " >
          <span
            class="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{getProfileName.FullName}}
          </span>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" @click="lowToHighPrice()" href="#"
              >Profile</a
            >
            <a class="dropdown-item" @click="highToLowPrice()" href="#"
              >Logout</a
            >
           
          </div>
        </div> -->


       
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import router from "../Router/index";
export default {
  data() {
    return {
      searchText:'',
    }
  
 
  },
  methods: {
    gotoHomepage() {
      router.push("/Getbooks");
    },
    gotowishlist() {
      router.push("/wishlist");
    },
    gotoCartList() {
      router.push("/cartList");
    },
    gotoOrders() {
      router.push("/myorders");
      console.log(this.getProfileName);
    },
    gotoProfile(){
      router.push("/profile");
    }
  },
  computed: {
    cartItemLength() {
      return this.$store.getters["bookstore/cartItemslength"];
    },
    wishlistLength() {
      return this.$store.getters["bookstore/wishListItemsLength"];
    },
    ordersLength() {
      return this.$store.getters["bookstore/ordersLength"];
    },
    getBooks() {
      return this.$store.getters["bookstore/books"];
    },
    getProfileName(){
      return this.$store.getters["bookstore/profileName"]
    }
  },
  //  mounted:{
  //   get:function(){
  //     const k = this.getBooks.filter((data) => 
  //     JSON.stringify(data).toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1)
  //     console.log(k);
  //   }
  //  }
};
</script>
<style scoped >
.headercontainer {
  background-color: #8f2b2f;
  margin-top: -59px;
  height: 50px;
  width: 1227px;
}
.bookImage {
  cursor: pointer;
  margin-left: 70px;
}
.heading {
  cursor: pointer;
  font-size: 20px;
  color: white;
}
.active-pink-2 input[type="text"]:focus:not([readonly]) {
  border-bottom: 1px solid #f48fb1;
  box-shadow: 0 1px 0 0 #f48fb1;
}
.active-pink input[type="text"] {
  border-bottom: 1px solid #f48fb1;
  box-shadow: 0 1px 0 0 #f48fb1;
}
.searchbar {
  margin-left: 35px;
}
.cart {
  cursor: pointer;
  margin-left: 85px;
}
.subHead {
  font-size: 13px;
}
.subHead1 {
  font-size: 13px;
  margin-left: 0px;
  color: white;
}
.subHead2 {
  font-size: 13px;
  margin-left: -6px;
  color: white;
}
.wishlistbtn {
margin-left: 38px;
  border: none;
  background-color: #8f2b2f;
  cursor: pointer;
}
.wishlistbtn:focus {
  border: none;
}
.cartbadge {
  float: right;
  margin-top: -25px;
}
.ordersbtn {
  cursor: pointer;
}
.btn{
cursor: pointer;
border: none;
color: white;
background-color: #8f2b2f;
margin-top: 25px;
height: 10px;

}
.profile{
cursor: pointer;
}

</style>