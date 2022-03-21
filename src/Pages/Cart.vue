<template >
  <div>
    <div class="subhead text-left">
      <b>Home/My cart ({{ cartItemLength }})</b>
    </div>
    <br />

    <div v-for="cart in cartItemsList" :key="cart.id">
      <div class="headercontainer col-md-7">
        <div class="text-left p-2">My Cart</div>

        <div class="row">
          <img
            :src="cart.url"
            class="p-3 ml-3"
            height="130"
            width="120"
            alt=""
          />
          <div class="rightcontainer column">
            <div class="text-left">
              <b>{{ cart.bookName }}</b>
            </div>
            <div class="text-left">
              <sub>{{ cart.authorName }}</sub>
            </div>
            <div class="row text-leftt">
              <div class="price">
                <b>Rs.{{ cart.discountprice }}</b>
              </div>
             
              <div class="subprice">
                <s>Rs.{{ cart.actualPrice }}</s>
              </div>
            </div>

            <div class="row text-left bookquantity">
              <div type="button" class="quantitybtn">
                <img
                  @click="incremenBookQuantity(cart)"
                  src="../assets/addCircle.svg"
                  alt=""
                />
                &nbsp;
                <span>{{ cart.quantityToBuy }}</span> &nbsp;
                <img
                  @click="decremenBookQuantity(cart)"
                  src="../assets/remove.svg"
                  alt=""
                />
              </div>
            </div>
            <div
              class="remove text-right"
              data-toggle="tooltip"
              data-placement="top"
              title="Delete"
              @click="delteCart(cart)"
            >
              Remove
            </div>
          </div>
        </div>
        <div class="">
          <button class="placeorderbtn" @click="placeorder(cart)">
            Place Order
          </button>
        </div>
      </div>
    </div>
    <div class="Profilecontainer" v-if="profilrContainer">
      <div class="text-left userHead"><b>User Details</b></div>
      <form action="" class="ml-5 mt-3" @submit.prevent="onConfirm" >
        <div class="row">
          <div class="form-group text-left">
            <label for="" class="inputfieldname">First Name</label>
            <k-input
              type="text"
              :style="{ width: '100%' }"
              v-model="this.userData.FirstName"
               class="inputfieldname"
            ></k-input>
          </div>
          <div class="form-group text-left">
            <label for="" class="inputfieldname">Last Name</label>
            <k-input
              placeholder=""
              type="text"
              :style="{ width: '100%' }"
               v-model="this.userData.LastName"
                class="inputfieldname"
            ></k-input>
          </div>
        </div>
        <div class="row">
          <div class="form-group text-left">
            <label for="" class="inputfieldname">Email</label>
            <k-input
              placeholder=""
              type="email"
              :style="{ width: '112%' }"
               v-model="this.userData.EmailId"
                class="inputfieldname"
            ></k-input>
          </div>
        </div>
        <div class="row">
          <div class="form-group text-left">
            <label for="" class="inputfieldname">Address</label>
            <k-input
              placeholder=""
              type="text"
              :style="{ width: '106%' }"
               v-model="this.userData.Address"
                class="inputfieldname"
            ></k-input>
          </div>
        </div>
        <div class="row">
          <div class="form-group text-left">
            <label for="" class="inputfieldname">City/Town</label>
            <k-input
              placeholder=""
              type="text"
              :style="{ width: '102%' }"
               class="inputfieldname"
               v-model="this.userData.City"
            ></k-input>
          </div>
          <div class="form-group text-left">
            <label for="" class="inputfieldname">State</label>
            <k-input
            
              placeholder=""
              type="text"
              :style="{ width: '100%' }"
               v-model="this.userData.State"
                class="inputfieldname"
            ></k-input>
          </div>
        </div>

        <div class="row">
          <div class="form-group text-left">
            <label for="" class="inputfieldname">Phone Number</label>
            <k-input
              placeholder=""
              type="tel"
              :style="{ width: '92%' }"
               v-model="this.userData.MobileNumber"
                class="inputfieldname"
            ></k-input>
          </div>
          <div class="form-group text-left">
            <label for="" class="inputfieldname">Zip Code</label>
            <k-input
              placeholder=""
              type="tel"
              :style="{ width: '100%' }"
               v-model="userData.ZipCode"
                class="inputfieldname"
            ></k-input>
          </div>
        </div>
        <div class="text-right">
          <button type="submit" class="confirmbtn" >Confirm</button>
        </div>
      </form>
    </div>
    <div v-for="item in confirmOrderDetailsinCart" :key="item.id">
      <div
        v-if="showconfirmOrder"
        class="placeordercontainer mt-2 col-md-7 text-left p-5"
      >
        <div>
          Product Name:<b>&nbsp; {{ item.productName }} </b>
        </div>
        <br />
        <div>
          Total Quantity:<b>&nbsp; {{ item.quantityToBuy }}</b>
        </div>
        <br />
        <div>
          Total Price:<b>&nbsp;Rs. {{ item.totalPrice }}</b>
        </div>
        <div class="">
          <button class="placeorderbtn" @click="cancelOrder(item)">
            Cancel
          </button>
          <button class="placeorderbtn" @click="confirmOrder(item)">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Input } from "@progress/kendo-vue-inputs";

export default {
  components: {
    "k-input": Input,
  },
  data() {
    return {
      cartItems: [],
      showconfirmOrder: false,
      firstName:'',
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      zip: "",
      state: "",
      userData:{},
      profilrContainer:false
    };
  },
  computed: {
    cartItemsList() {
      return this.$store.getters["bookstore/cartList"];
    },
    cartItemLength() {
      return this.$store.getters["bookstore/cartItemslength"];
    },
    confirmOrderDetailsinCart() {
      return this.$store.getters["bookstore/getconfirmOrderDetails"];
    },
    showconfirmordervalue() {
      return this.$store.getters["bookstore/showConfirmOrderValue"];
    },
    userProfileData(){
      return this.$store.getters["bookstore/UserProfileData"]
    }
  },
  methods: {
    placeorder(event) {
      console.log(event);
      this.payload = {
        id: event.id,
        productName: event.bookName,
        quantityToBuy: event.quantityToBuy,
        totalPrice: event.quantityToBuy * event.discountprice,
        Ordered_Date: this.dateMethod(),
      };
      console.log("this.payload", this.payload);
      this.$store.dispatch("bookstore/getConfirmOrder", this.payload);
      this.profilrContainer=true;
      this.userData =this.$store.getters["bookstore/UserProfileData"]
     
      console.log("userdata",this.userData);
      // this.showconfirmOrder = this.showconfirmordervalue
    },
    onConfirm(){
       let payload ={
         FirstName: this.userData.FirstName,
        LastName: this.userData.LastName,
        EmailId: this.userData.EmailId,
        MobileNumber: this.userData.MobileNumber,
        Address: this.userData.Address,
        City: this.userData.City,
        State: this.userData.State,
        ZipCode: this.userData.ZipCode
      }
      console.log(payload);
      this.$store.dispatch("bookstore/showConfirmOrder")
      this.showconfirmOrder=true
      console.log(this.showconfirmordervalue);
    },
    dateMethod() {
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();
      const result =
        +day +
        "/" +
        month +
        "/" +
        year +
        " " +
        h +
        "hr" +
        ":" +
        m +
        "min" +
        ":" +
        s +
        "sec";
      console.log(result);
      return result;
    },
    confirmOrder(event) {
      this.$store.dispatch("bookstore/orderData", event);
      console.log("event",event);
      // this.$store.commit("bookstore/cancelConfirmOrder", event);
    },
    delteCart(cart) {
      this.$store.dispatch("bookstore/deleteCartItem", cart);
    },
    incremenBookQuantity(cart) {
      cart.quantityToBuy++;
    },
    decremenBookQuantity(cart) {
      cart.quantityToBuy--;
      if (cart.quantityToBuy < 1) {
        cart.quantityToBuy = 0;
      }
    },
    cancelOrder(item) {
      this.$store.commit("bookstore/cancelConfirmOrder", item);
    },
   
  },
};
</script>
<style scoped>
.subhead {
  margin-left: 200px;
  margin-top: 80px;
}
.headercontainer {
  height: 235px;
  border: 1px solid green;
  margin-left: 200px;
}
.text {
  margin-left: 10px;
}
.rightcontainer {
  margin-left: 15px;
  width: 250px;
  margin-top: 17px;
}
.price {
  margin-top: 18px;
  margin-left: 15px;
}
.subprice {
  margin-top: 20px;
  font-size: 13px;
}
.remove {
  cursor: pointer;
  font-size: 12px;
  margin-right: 15px;
  margin-top: -20px;
}
.placeorderbtn {
  border: none;
  position: relative;
  float: right;
  height: 40px;
  width: 180px;
  background-color: brown;
  color: white;
  border-radius: 5px;
}
.placeordercontainer {
  border: 1px solid red;
  height: 220px;
  margin-left: 200px;
}
.bookquantity {
  margin-top: 0px;
}
.quantitybtn {
  border: none;
  margin-left: 15px;
  margin-top: 10px;
}
.Profilecontainer {
  border: 1px solid red;
  height: 500px;
  width: 715px;
  margin-left: 200px;
  margin-top: 20px;
}
.row{
  gap: 20px;
}
.inputfieldname{
  font-size: 12px;
}
.userHead{
  margin-top: 15px;
  margin-left: 25px;
}
.kinput{
  border-radius: 15px;
}
.confirmbtn{
  margin-right: 20px;
  border-radius: 7px;
  border: none;
 height: 40px;
  width: 180px;
  background-color: brown;
color: white;
}
</style>