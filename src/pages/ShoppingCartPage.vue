<template>
  <h1>Shopping Cart Page</h1>
  <ShoppingCartList :products="cartItems"></ShoppingCartList>
  <div v-if="cartItems.length > 0">
    <button class="checkout-button">Proceed to Checkout</button>
  </div>
  <div v-if="cartItems.length === 0">No items Available</div>
</template>
<script>
import ShoppingCartList from "../components/ShoppingCartList.vue";
import { cartItems } from "../temp-data";
export default {
  name: "ShoppingCartPage",
  components: { ShoppingCartList },
  data() {
    return { cartItems };
  },
};
</script>
