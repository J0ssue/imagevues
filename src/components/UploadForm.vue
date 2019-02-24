<template>
  <div class="dropper">
    <input type="file" @change="uploadImages($event.target.files)" accept="image/*" multiple>
    <span>Drag files here!</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UploadForm",
  methods: mapActions(["uploadImages"])
};
</script>

<style scoped>
.dropper {
  height: 30vh;
  border: 2px dashed black;
  display: flex;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  position: relative;
  transition-duration: 0.5s;
}

.dropper:hover {
  background-color: #eee;
}

input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
}
</style>



