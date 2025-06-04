<script setup lang="ts">
import { vue3dLoader } from "vue-3d-loader"

</script>

<template>
<vue3dLoader
  :height="460"
  :filePath="['/public/calo_shower_back_only.glb']"
  :backgroundColor="0xffffff"
  :enableDamping="true"
  :dampingFactor="0.05"
  outputEncoding="sRGB"
></vue3dLoader>
</template>
