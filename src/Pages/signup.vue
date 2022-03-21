<template >
  <div>
    <body>
      <form
        action=""
        class="form-body center"
        @submit.prevent="onSubmit()"
      
      >
        <div class="text-center">
          <h3>SignUp</h3>
        </div>
        <div class="page-body p-2 mr-3">
          <div class="col-md-15">
            <div class="form-group">
              <label for="" class="mr-0">Full Name </label>
              <k-input
                type="text"
                v-model="fullName"
                :style="{ width: '100%' }"
                :name="'fullName'"
              >
              </k-input>
            </div>
          </div>
          <div class="col-md-15">
            <div class="form-group">
              <label for="">Email</label>
              <k-input
                type="email"
                v-model="emailId"
                :style="{ width: '100%' }"
                :name="'emailId'"
              >
              </k-input>
            </div>
          </div>
          <div class="col-md-15">
            <div class="form-group">
              <label for="">Password</label>
              <k-input
                type="password"
                v-model="password"
                :style="{ width: '100%' }"
              >
              </k-input>
            </div>
          </div>
          <div class="col-md-15">
            <div class="form-group">
              <label for="">Phone Number</label>
              <k-input
                type="tel"
                v-model="phoneNumber"
                :style="{ width: '100%' }"
              >
              </k-input>
            </div>
          </div>
          <div class="btn">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </body>
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
      fullName: "",
      emailId: "",
      password: "",
      phoneNumber: "",
      id: null,
    };
  },
  methods: {
    onSubmit() {
      this.signupData = {
        FullName: this.fullName,
        Email: this.emailId,
        Password: this.password,
        PhoneNumber: this.phoneNumber,
        Id: this.id + 1,
      };
      console.log("this.data", this.signupData);
      this.$store.dispatch("bookstore/userSignupData", this.signupData);
    },

    setup: function () {
      return {
        rules: {
          getFullName(input) {
            if (input.is("[name='fullName'") && input.val() == "") {
              return false;
            }
          },
          getEmailId(input) {
            if (input.is("[name='emailId'") && input.val() == "") {
              return false;
            }
          },
          getPassword(input) {
            if (input.is("[name='password'") && input.val() == "") {
              return false;
            }
          },
          getPhoneNumber(input) {
            if (input.is("[name='phNbr'") && input.val() == "") {
              return false;
            }
          },
        },
        messages: {
          getFullName: "Full Name is Required",
          getEmailId: "Email Id is required",
          getPassword: "Password is require",
          getPhoneNumber: "Phone Number is Required",
        },
      };
    },
  },
};
</script>
<style scoped>
.form-body {
  background-color: burlywood;
  border-radius: 10px;
  width: 350px;
  height: 400px;
  margin-left: 400px;
}

.btn {
  margin-left: 60px;
  margin-top: -5px;
}
</style>