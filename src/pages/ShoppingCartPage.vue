<template>
  <h1>Shopping Cart Page</h1>
  <ShoppingCartList
    @remove-from-cart="removeFromCart($event)"
    :products="cartItems"
  ></ShoppingCartList>
  <div v-if="cartItems.length > 0">
    <button class="checkout-button">Proceed to Checkout</button>
  </div>
  <div v-if="cartItems.length === 0">No items Available</div>
</template>
<script>
import ShoppingCartList from "../components/ShoppingCartList.vue";
import axios from "axios";
export default {
  name: "ShoppingCartPage",
  components: { ShoppingCartList },
  data() {
    return { cartItems: {} };
  },
  methods: {
    async removeFromCart(productId) {
      const response = await axios.delete(`/api/users/888/cart/${productId}`);
      const updatedCart = response.data;
      this.cartItems = updatedCart;
    },
  },
  async created() {
    const response = await axios.get("/api/users/888/cart");
    const products = response.data;
    this.cartItems = products;
  },
};
</script>
