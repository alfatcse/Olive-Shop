<template>
  <h1>Shopping Cart Page</h1>
  <div v-if="cartItems.length > 0">
    <div
      class="product-container"
      :key="product.id"
      v-for="product in cartItems"
    >
      <img class="product-image" :src="product.imageName" />
      <div class="details-warp">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
      </div>
      <button class="remove-button">Remove from Cart</button>
    </div>
    <button class="checkout-button">Proceed to Checkout</button>
  </div>
  <div v-if="cartItems.length === 0">No items Available</div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { cartItems } from "../temp-data";
export default {
  name: "ShoppingCartPage",
  data() {
    return { cartItems };
  },
};
</script>
