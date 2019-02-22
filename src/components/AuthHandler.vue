<template>
  <div>
    <p>Please Wait...</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AuthHandler",
  methods: mapActions(["finalizedLogin"]),
  created() {
    this.finalizedLogin(window.location.hash);
  }
};
</script>

