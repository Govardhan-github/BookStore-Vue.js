<template >
  <div>
    <div class="headerconatiner">
      <div class="row">
        <div class="text text-left">Books({{ booksLength }})</div>
        <!-- Button trigger modal -->
<!-- <div class="input-group mb-3">
  <select class="custom-select" id="inputGroupSelect02">
    <option selected>Choose...</option>
    <option value="1" @click="hi(event)">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <div class="input-group-append">
    <label class="input-group-text" for="inputGroupSelect02">Options</label>
  </div>
</div> -->
<div class="searchbar col-md-5">
          <input
            class="form-control mt-1 ml-5"
            type="text"
            v-model="searchText"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div class="dropdown text-right">
          <button
            class="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" @click="lowToHighPrice()" href="#"
              >Low To High Price</a
            >
            <a class="dropdown-item" @click="highToLowPrice()" href="#"
              >High To Low Price</a
            >
            <a class="dropdown-item" @click="newArrivals()" href="#"
              >Latest Arrivals</a
            >
          </div>
        </div>
      </div>

      <div class="cards mt-3">
        <div
          v-for="item in getfilterdBooks"
          :key="item.name"
          class="card border-dark mb-3"
          style="width: 240px"
        >
          <img
            class="book card-img-top"
            data-toggle="tooltip"
            data-placement="top"
            title="Quick View"
            @click="quickview(item)"
            :src="item.url"
            height="220"
          />
          <div class="cardBody">
            <div class="text-left">
              <div>
                <b>{{ item.bookName }}</b>
              </div>
              <div class="mb-2">
                By. <b>{{ item.authorName }}</b>
              </div>
              <div class="row">
                <div class="ratebutton">
                  <button type="button" class="ratebtn">
                    {{ item.Rating }}
                    <img
                      src="../assets/start.svg"
                      height="25"
                      width="15"
                      class="star"
                    />&nbsp;
                  </button>
                </div>
                <div>({{ item.booksQuantity }})</div>
              </div>
              <div class="row price">
                Rs.<b>{{ item.discountprice }}</b>
                <sub class="subprice"
                  ><s>Rs.{{ item.actualPrice }}</s></sub
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import router from "../Router/index";

export default {
  data() {
    return {
      searchText:'',
    };
  },

  methods: {
    quickview(event) {
      console.log(event);
      this.$store.dispatch("bookstore/quickview", event);
      this.$store.getters["bookstore/quickviewBook"];
      router.push("/bookdetails");
    },
    lowToHighPrice() {
      this.getBooks = this.getBooks.sort((a, b) =>
        a.discountprice > b.discountprice ? 1 : -1
      );
      console.log("cliked");
    },
    highToLowPrice() {
      this.getBooks = this.getBooks.sort((a, b) =>
        a.discountprice < b.discountprice ? 1 : -1
      );
      console.log("cliked");
    },
    newArrivals() {
      this.getBooks = this.getBooks.reverse();
      console.log("cliked");
    },
    modal() {
      console.log("click");
    },
    hi(event){
      console.log("hjhhh",event);
    }
  },
  computed: {
    getBooks() {
      return this.$store.getters["bookstore/books"];
    },
    booksLength() {
      return this.$store.getters["bookstore/booksLength"];
    },
    getfilterdBooks(){
      return this.getBooks.filter((book)=>{
        return book.bookName.toLowerCase().includes(this.searchText.toLowerCase())
      })
    }
  },
};
</script>

<style scoped >
.dashboard {
  width: 100%;
}
.text {
  margin-left: 65px;
}
.select {
  margin-left: 880px;
}
.searchbar {
  margin-left: 180px;
}
.dropdown {
  margin-left: 250px;
}
.dropdown-menu {
  width: 70px;
}
.selectBox {
  width: 150px;
  height: 25px;
}
.book {
  cursor: pointer;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  column-gap: 5px;
  row-gap: 30px;
}
.card {
  border: none;
}
.headerconatiner {
  margin-top: 55px;
  width: 1200px;
}
.cardBody {
  background-color: lightgray;
}
.star {
  margin-top: -5px;
  margin-left: 0px;
}
.ratebtn {
  height: 25px;
  width: 55px;
  border: none;
  border-radius: 5px;
  background-color: green;
}
.ratebutton {
  margin-left: 16px;
}
.price {
  margin-left: 0px;
}
.subprice {
  margin-top: 10px;
  margin-left: 6px;
}
</style>