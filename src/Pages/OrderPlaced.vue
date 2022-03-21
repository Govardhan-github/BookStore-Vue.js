<template >
  <div>
    <div class="hederContainer">
      <img
        :src="url"
        class="img"
        height="250"
        width="250"
        alt=""
      />
      <div class="heading">Your Order is Placed</div>
    </div>
    <table class="tablebody table table-bordered col-md-5 mt-2 ">
      <thead class="thead">
        <tr>
          <th  scope="col">Address</th>
          <th scope="col">For Reference To</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <td  scope="row">{{ profileUserData.Address}}</td>
          <td> +91 9666110767 </td>
          
          <td><button class="viewButton" @click="viewBookOrderDetails(order)">View</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

export default {
  data() {
    return {
      url:'https://cdn.dribbble.com/users/282075/screenshots/4756095/media/2c39d98f22740b1094616201a68e7d08.gif'
    }
  },
  computed: {
    profileUserData() {
      return this.$store.getters["bookstore/UserProfileData"];
    },

  },
  mounted() {
    console.log(this.profileUserData);
  },
};
</script>
<style scoped>
.hederContainer {
  height: 370px;
  width: 400px;
  box-shadow: 10px;
  background-color: coral;
  margin-left: 360px;
  border-radius: 55px;
  margin-top: 45px;
}
.img {
  margin-top: 50px;
  border-radius: 150px;
}
.heading {
  font-size: 28px;
  font-weight: 700;
  margin-left: 0px;
  color: aliceblue;
}
.tablebody{
  margin-left: 300px;
}
</style>