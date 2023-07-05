<template>
  <div class="nav-bar">
    <div class="logo-warp">
      <img :src="logo" />
    </div>
    <button>Shopping Cart</button>
  </div>
</template>
<script>
import logo from "../assets/logo-hexagon";
export default {
  name: "NavBar",
  data() {
    return { logo };
  },
};
</script>
