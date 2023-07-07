<template>
  <div class="navbar">
    <router-link to="/products" class="product-link">
      <div>
        <img :src="logo" /></div
    ></router-link>
    <div class="nav-buttons-warp">
      <button @click="signOut" v-if="user">Sign Out</button>
      <router-link to="/cart" class="cart-link">
        <button>Shopping Cart</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import logo from "../assets/logo-hexagon.svg";
import { getAuth, signOut } from "firebase/auth";
export default {
  name: "NavBar",
  props: ["user"],
  data() {
    return { logo };
  },
  methods: {
    signOut() {
      const auth = getAuth();
      signOut(auth);
    },
  },
};
</script>
