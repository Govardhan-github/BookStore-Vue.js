<template >
  <div class="text-left heading">
    <b>My Orders({{ ordersListLength }})</b>
  </div>
  <div>
    <table class="tablebody table col-md-11">
      <thead class="thead-dark">
        <tr>
          <th scope="col">OrderName</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Ordered On</th>

          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody v-for="order in ordersList" :key="order.id">
        <tr>
          <th scope="row">{{ order.productName }}</th>
          <td>{{ order.quantityToBuy }}</td>
          <td>{{ order.totalPrice }}</td>
           <td>{{ order.Ordered_Date }}</td>
          <td><button class=" btn btn-outline-secondary" @click="viewBookOrderDetails(order)">View</button>
         <!-- <button type="button" class="btn btn-outline-warning">Warning</button> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import router from '../Router/index'

export default {
  computed: {
    ordersList() {
      return this.$store.getters["bookstore/orderItemList"];
    },
    ordersListLength() {
      return this.$store.getters["bookstore/ordersLength"];
    },
  },
    methods: {
      viewBookOrderDetails(event){
        console.log(event);
        this.$store.dispatch("bookstore/quickviewDataDetails",event)
        router.push("/bookdetails");
      }
  },
};
</script>
<style scoped>
.heading {
  font-size: 25px;
  margin-left: 60px;
  margin-top: 50px;
}
.tablebody {
  margin-top: 30px;
  margin-left: 60px;
}
.viewButton{
border: none;
background-color: gray;
width: 80px;
height: 30px;
border-radius: 6px;
color: white;

}
</style>