<script setup lang="ts">
import { vue3dLoader } from "vue-3d-loader"

</script>

<template>
<v-vue3dLoader
  :height="200"
  :showFps="true"
  :filePath="['/calo_shower_back_only.glb']"
  :mtlPath="[null]"
  :backgroundColor="0xff00ff"
></v-vue3dLoader>
</template>