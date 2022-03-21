<template >
  <div>
    <div class="container1">
      <div class="row headers mt-4">
        <div style="font-size: 18px"><b>Home/</b></div>
        <div style="font-size: 17px">Profile</div>
      </div>
      <div class="row subhead">
          <div><h3><b>Personal Details</b></h3></div>
      </div>
      <div class="container mt-1 ">
        <form action="" @submit.prevent="onSubmit()" class="p-4">
          <div class="row">
            <div class="form-group text-left">
              <label class="text-left">First Name</label>
              <k-input
                :style="{ width: '100%' }"
                type="text"
                v-model="firstName"
              ></k-input>
            </div>
            <div class="form-group text-left ml-5">
              <label class="text-left">Last Name</label>
              <k-input
                :style="{ width: '100%' }"
                type="text"
                v-model="lastName"
              ></k-input>
            </div>
          </div>
          <div class="row">
            <div class="form-group text-left">
              <label class="text-left">Email</label>
              <k-input
                :style="{ width: '140%' }"
                type="text"
                v-model="getProfileName.Email"
              ></k-input>
            </div>
          </div>
          <div class="row">
            <div class="form-group text-left">
              <label class="text-left">Address</label>
              <k-input
                :style="{ width: '130%' }"
                type="text"
                v-model="address"
              ></k-input>
            </div>
          </div>
          <div class="row">
            <div class="form-group text-left">
              <label class="text-left">City/Town</label>
              <k-input
                :style="{ width: '100%' }"
                type="text"
                v-model="city"
              ></k-input>
            </div>
            <div class="form-group text-left ml-5">
              <label class="text-left">State Name</label>
              <k-input
                :style="{ width: '100%' }"
                type="text"
                v-model="state"
              ></k-input>
            </div>
          </div>

          <div class="row">
            <div class="form-group text-left">
              <label class="text-left">Phone Number</label>
              <k-input
                :style="{ width: '88%' }"
                type="text"
                v-model="getProfileName.PhoneNumber"
              ></k-input>
            </div>
            <div class="form-group text-left ml-2">
              <label class="text-left">Zip Code</label>
              <k-input
                :style="{ width: '100%' }"
                type="text"
                v-model="zip"
              ></k-input>
            </div>
          </div>
          <div><button type="submit" class="submitbtn">Submit</button></div>
        </form>
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
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      zip: "",
      state: "",
    };
  },
  computed:{
    getProfileName(){
      return this.$store.getters["bookstore/profileName"]
    }
  },
  methods: {
    onSubmit() {
      this.userData = {
        FirstName: this.firstName,
        LastName: this.lastName,
        EmailId: this.getProfileName.Email,
        MobileNumber: this.getProfileName.PhoneNumber,
        Address: this.address,
        City: this.city,
        State: this.state,
        ZipCode: this.zip,
      };
      console.log("profileData", this.userData);
      this.$store.dispatch("bookstore/profileData",this.userData)
    },
  },
};
</script>
<style scoped>
.container {
  position: relative;
  border: 1px solid grey;
  width: 750px;
  margin-left: 130px;
}
.headers {
  margin-top: 30px;
  margin-left: 70px;
}
.subhead{
  margin-left: 130px;
  margin-top: 30px;
}
.row {
  gap: 10px;
}
.submitbtn {
  border: none;
  background-color: brown;
  border-radius: 7px;
  color: white;
  height: 40px;
  width: 70px;
}
</style>