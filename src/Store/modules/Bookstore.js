import router from '../../Router/index'


const state = {
    Books: [
        {
        id: 1,
        bookName: "VueJs",
        authorName: "VueOrg",
        Rating: 4.5,
        booksQuantity: 10,
        quantityToBuy:1,
        discountprice: 1500,
        actualPrice: 1800,
        totalPrice:null,
      
        url:'https://d2sofvawe08yqg.cloudfront.net/vuejs/s_hero2x?1620505333',
        description:
            "Developed by Facebook, React is one of the leading frameworks to build efficient web user interfaces. ... In this book, we take you on a fun, hands-on and pragmatic journey to master React from a web development point of view. You will start building React apps within minutes.",
    },
    {
        id: 2,
        bookName: "React",
        authorName: "ReactOrg",
        Rating: 4.4,
        booksQuantity: 15,
        quantityToBuy:1,
        discountprice: 1400,
        actualPrice: 1800,
        totalPrice:null,
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlEF_yPjr9mxkJqsp86RsIYtjXxpGQiEElAA&usqp=CAU',
        description:
            "Developed by Facebook, React is one of the leading frameworks to build efficient web user interfaces. ... In this book, we take you on a fun, hands-on and pragmatic journey to master React from a web development point of view. You will start building React apps within minutes.",
    },
    {
        id: 3,
        bookName: "Angular",
        authorName: "AngularOrg",
        Rating: 4.5,
        booksQuantity: 10,
        quantityToBuy:1,
        discountprice: 1300,
        actualPrice: 1500,
        totalPrice:null,
        url:"https://static.packt-cdn.com/products/9781785880230/cover/smaller",
        description:
            "Developed by Facebook, React is one of the leading frameworks to build efficient web user interfaces. ... In this book, we take you on a fun, hands-on and pragmatic journey to master React from a web development point of view. You will start building React apps within minutes.",
    },
    {
        id: 4,
        bookName: "JavaScript",
        authorName: "JavaScriptOrg",
        Rating: 4.4,
        booksQuantity: 12,
        quantityToBuy:1,
        discountprice: 1350,
        actualPrice: 1800,
        totalPrice:null,
        url:'https://miro.medium.com/max/1200/1*zBRkcBbsjWzcPjtcxqhb3Q.jpeg',
        description:
            "Developed by Facebook, React is one of the leading frameworks to build efficient web user interfaces. ... In this book, we take you on a fun, hands-on and pragmatic journey to master React from a web development point of view. You will start building React apps within minutes.",
    },
    {
        id: 5,
        bookName: "Java",
        authorName: "JavaOrg",
        Rating: 4.5,
        booksQuantity: 17,
        quantityToBuy:1,
        discountprice: 1200,
        actualPrice: 1800,
        totalPrice:null,
        url:'https://www.ikbooks.com/uploads/BookImages/ikbooks-size200/9789385909665.jpg',
        description:
            "Developed by Facebook, React is one of the leading frameworks to build efficient web user interfaces. ... In this book, we take you on a fun, hands-on and pragmatic journey to master React from a web development point of view. You will start building React apps within minutes.",
    },
    {
        id: 6,
        bookName: "SQL",
        authorName: "SqlOrg",
        Rating: 4.2,
        booksQuantity: 15,
        quantityToBuy:1,
        discountprice: 1000,
        actualPrice: 1800,
        totalPrice:null,
        url:'https://static.docsity.com/documents_first_pages/2019/04/13/2c09deb795793f2f3e39104b5f6f21fe.png',
        description:
            "Developed by Facebook, React is one of the leading frameworks to build efficient web user interfaces. ... In this book, we take you on a fun, hands-on and pragmatic journey to master React from a web development point of view. You will start building React apps within minutes.",
    },
    {
        id: 7,
        bookName: "Python",
        authorName: "PythonOrg",
        Rating: 4.4,
        booksQuantity: 15,
        quantityToBuy:1,
        discountprice: 1220,
        actualPrice: 1800,
        totalPrice:null,
        url:'https://static.wixstatic.com/media/6ef6a7_b4ddb905474440fca486a1873fc8c950~mv2.png/v1/fill/w_340,h_481,al_c,q_85,usm_0.66_1.00_0.01/Python%20The%20100%20page%20book%20-%20cover.webp',
        description:
            "Developed by Facebook, React is one of the leading frameworks to build efficient web user interfaces. ... In this book, we take you on a fun, hands-on and pragmatic journey to master React from a web development point of view. You will start building React apps within minutes.",
    },
    {
        id: 8,
        bookName: "Linux",
        authorName: "LinuxOrg",
        Rating: 4.5,
        booksQuantity: 15,
        quantityToBuy:1,
        discountprice: 900,
        actualPrice: 1800,
        totalPrice:null,
        url:'https://images-na.ssl-images-amazon.com/images/I/51PF7ZXRFDL.jpg',
        description:
            "Developed by Facebook, React is one of the leading frameworks to build efficient web user interfaces. ... In this book, we take you on a fun, hands-on and pragmatic journey to master React from a web development point of view. You will start building React apps within minutes.",
    },
    {
        id: 9,
        bookName: "DevOps",
        authorName: "DevOpsOrg",
        Rating: 4.5,
        booksQuantity: 15,
        quantityToBuy:1,
        discountprice: 1050,
        actualPrice: 1800,
        totalPrice:null,
        url:'https://m.media-amazon.com/images/I/41uYueSpXCL.jpg',
        description:
            "Developed by Facebook, React is one of the leading frameworks to build efficient web user interfaces. ... In this book, we take you on a fun, hands-on and pragmatic journey to master React from a web development point of view. You will start building React apps within minutes.",
    },
    {
        id: 10,
        bookName: "TypeScript",
        authorName: "TypeScriptOrg",
        Rating: 4.4,
        booksQuantity: 15,
        quantityToBuy:1,
        discountprice: 1150,
        actualPrice: 1800,
        totalPrice:null,
        url:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1542299697l/42818572._SX318_.jpg',
        description:
            "Developed by Facebook, React is one of the leading frameworks to build efficient web user interfaces. ... In this book, we take you on a fun, hands-on and pragmatic journey to master React from a web development point of view. You will start building React apps within minutes.",
    },
    ],
    signupDetails: [],
    newuser: '',
    userDetails: null,
    error: null,
    viewBookData: '',
    wishlistItems: [],
    cartItems: [],
    newBookToWishlist: '',
    wishlistLength: '',
    cartlength: '',
    result: '',
    orders: [],
    message :null,
    showconfirmOrder:false,
    feedBacks:[],
    combinedfeedbacks:[],
    feedBack:[],
    totalPrice:null,
    confirmOrderDetails:[],
    profileUserData:{}

}
const getters = {
    profileName : state => state.userDetails,
    books: state => state.Books,
    booksLength: state => state.Books.length,
    lowtohih: state => state.Books.sort((a, b) => a.discountprice > b.discountprice ? 0 : -0),
    signupDetailsList: state => state.signupDetails,
    showError: state => state.error,
    quickviewBook: state => state.viewBookData,
    wishList: state => state.wishlistItems,
    wishListItemsLength: state => state.wishlistLength,
    showwishlisterror:state => state.message,
    cartList: state => state.cartItems,
    cartItemslength: state => state.cartlength,
    orderItemList: state => state.orders,
    ordersLength: state => state.orderItemsLength,
    getconfirmOrderDetails:state => state.confirmOrderDetails,
    feedBacks:state => state.feedBacks,
    showConfirmOrderValue :state => state.showconfirmOrder,
    UserProfileData : state => state.profileUserData

}
const actions = {
    userSignupData({ commit }, userdata) {
        console.log("data", userdata);
        commit('get', userdata)
    },
    LoginData({ commit }, loginData) {
        state.error =null;
        if (loginData.Email === state.userDetails.Email && loginData.Password === state.userDetails.Password) {
            console.log("email is correct");
            commit('login', loginData)
        }
        else {
            state.error = "Please Enter Valid Details"
        }
    },
    quickview({ commit }, bookData) {
        commit('quickviewData', bookData)
    },
    quickviewDataDetails({commit},event){
         commit('quickviewDataBook', event)
    },
    addBookToWishlist({ commit }, addtoWishlistData) {
        console.log("addtoWishlistData1", addtoWishlistData);
        commit('addToWishlisttBook', addtoWishlistData)

    },
    addBookToCartList({ commit }, addtocartData) {
        commit('addToCartListBook', addtocartData)
    },
    deleteFromWishlist({ commit }, selectedDeleteData) {
        console.log("selectedDeleteData", selectedDeleteData);
        commit('deleteItemFromWishList', selectedDeleteData)
    },
    deleteCartItem({ commit }, cartdata) {
        commit('deleteItemFromCart', cartdata)

    },
    getConfirmOrder({commit},orderItemData){
         const cartItemId = state.cartItems.map((item) => item.id)
        //  const totalPrice =  state.cartItems.map((items) => items.quantityToBuy * items.discountprice)
        //   state.totalPrice =totalPrice.toString()
        //  state.cartItems.unshift(totalPrice)
        //  console.log("price",state.totalPrice);
        //  console.log("cartitems", state.cartItems);
       
        if(cartItemId.includes(orderItemData.id)){
            console.log(orderItemData);
            commit('getconfirmationOrder',orderItemData)
        }
    },
    orderData({ commit }, orderData) {
        console.log("orderItem",orderData);
        commit('OrderItems', orderData)
    },
    addFeedBack({commit },addFeedBack){
        commit('getFeedBack',addFeedBack)
    },
    profileData({commit},userData){
        console.log(userData);
        commit('profile',userData)
    },
    showConfirmOrder({commit}){
        commit('getConfirmorder')
    }

}
const mutations = {
    get(state, newuser) {
        state.signupDetails.push(newuser);
        console.log(state.signupDetails);
        state.userDetails = newuser
        localStorage.setItem('userData', newuser )
        console.log("data", state.userDetails.Email);
        router.push("/Home")
    },
    login(state, loginUser) {
        console.log("logincommit", loginUser);
        router.push("/Getbooks")
    },
    quickviewData(state, quickviewData) {
        console.log("quickviewData", quickviewData);
        state.viewBookData = quickviewData;
        console.log(state.viewBookData);
    },
    quickviewDataBook(state,event){
        console.log("event",event.id);
        console.log("state",state.viewBookData.id);
        if(event.id === state.viewBookData.id){
            state.viewBookData
        }
    },
    addToWishlisttBook(state, newBookToWishlist) {
        state.message =null; 
        var items = state.wishlistItems
         const indexId = items.map(element => 
             element.id
         );
        if(indexId.includes(newBookToWishlist.id)){ 
           state.message = "item already added"
        }else{
            state.wishlistItems.push(newBookToWishlist)
            state.wishlistLength = state.wishlistItems.length
            console.log("wishlistData", state.wishlistItems);
            // router.push({ name: 'wishlistpage' })
        }
      
    },
    addToCartListBook(state, newBookToCartLsit) {
        state.message = null;
        var items = state.cartItems;
        const indexId = items.map((item) => item.id)
        if(indexId.includes(newBookToCartLsit.id)){
            state.message = "item already added"
        }
        else{
        state.cartItems.push(newBookToCartLsit)
        state.cartlength = state.cartItems.length
        console.log("cartdata", state.cartlength);
        // router.push({ name: 'cartListPage' })
        }
    },
    deleteItemFromWishList(state, selectedDeleteData) {
        if(confirm('Are you sure Want to delete'))
        var deleteitem = state.wishlistItems
        console.log(deleteitem);
        const index = deleteitem.map((item) => item.id).indexOf(selectedDeleteData.id)
        console.log(index);
        state.wishlistItems.splice(index, 1)
        state.wishlistLength = state.wishlistItems.length

    },
    deleteItemFromCart(state, cartdata) {
        var deleteitem = state.cartItems
        console.log(deleteitem);
        const index = deleteitem.map((item) => item.id).indexOf(cartdata.id)
        console.log(index);
         state.cartItems.splice(index, 1)
        state.cartlength = state.cartItems.length
    },
    getconfirmationOrder(state,orderItemData){
        const confirmorderId= state.confirmOrderDetails.map((item) => item.id)
        console.log(confirmorderId);
        const id = orderItemData.id;
        console.log(id);
        if(confirmorderId.includes(id)){
            console.log("item Already there");
        }
        else{
            state.confirmOrderDetails.push(orderItemData);
            console.log(state.confirmOrderDetails);
        }
    },
    cancelConfirmOrder(state,item){
        console.log(item.id);
        var cancelItem = state.confirmOrderDetails
        console.log(cancelItem);
        const cancelItesmsId= cancelItem.map((item) => item.id).toString()
        
        console.log(cancelItesmsId);
        if(cancelItesmsId==item.id){
        const index = cancelItem.map((item) => item.id).indexOf(item.id)
        console.log(index);
         state.confirmOrderDetails.splice(index, 1)
        state.showconfirmOrder = false
        }
    },
    orderData(state,commit,data){
        console.log(data);
        commit('cancelConfirmOrder',data)
    },

    OrderItems(state,neworderData,) {
        state.orders.push(neworderData)
        console.log("orders", state.orders);
        state.orderItemsLength = state.orders.length
        // commit('deleteItemFromCart',neworderData)

        router.push("/placeOrder")
        state.showconfirmOrder = false

    },
    getFeedBack(state,feedBackData){
        console.log(feedBackData.id);
        console.log(state.viewBookData.id);
        if(feedBackData.id === state.viewBookData.id){
            state.feedBacks.push(feedBackData)
            console.log("state.",state.feedBacks);
            console.log("state.signupDetails",state.signupDetails);
        }
    },
    profile(state,profileData){
        state.profileUserData=profileData;
        console.log(state.profileUserData);
    },
    getConfirmorder(){
        state.showconfirmOrder=true
    }



}


export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}