<template >
  <div>
    <form action="" class="form">
      <div class="text-center p-4">
        <h3>Login</h3>
        <hr />
      </div>
      <div class="alert alert-danger p-1 mr-5 ml-5" v-if="error" role="alert">
        {{ error }}
      </div>

      <div class="page-body p-1 ml-4 mr-4">
        <div class="col-md-15">
          <div class="form-group text-left">
            <label class="text-left" for=""
              >Email
              <span style="color: red">*</span>
            </label>
            <k-input type="email" :style="{ width: '100%' }" v-model="email">
            </k-input>
          </div>
        </div>
        <div class="col-md-15">
          <div class="form-group text-left">
            <label for="">Password <span style="color: red">*</span></label>
            <k-input
              type="password"
              :style="{ width: '100%' }"
              v-model="password"
            >
            </k-input>
          </div>
        </div>

        <div class="pt-4">
          <button
            type="button"
            class="btn btn-primary mr-1"
            @click="onSubmit()"
          >
            Submit</button
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <router-link type="button" class="btn2 ml-4" to="/signUp"
            >Register here</router-link
          >
        </div>
      </div>
    </form>
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
      email: null,
      password: null,
      error: null,
    };
  },
  methods: {
    onSubmit() {
      this.loginData = {
        Email: this.email,
        Password: this.password,
      };
      console.log("this.loginData", this.loginData);
      this.$store.dispatch("bookstore/LoginData", this.loginData);
      this.error = this.$store.getters["bookstore/showError"];
    },
  },
};
</script>
<style  >
.form {
  background-color: aliceblue;
  border-radius: 10px;
  width: 350px;
  height: 405px;
}
.btn2 {
  background: none;
  color: blue;
  border: none;
}
</style>