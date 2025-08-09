<template>
  <div class="flex min-h-screen">
  
     
    <SidebarNav class="fixed left-0 top-0 h-screen w-20" />

    <div class=" min-h-screen flex-1 flex flex-col justify-center items-center p-1"  style="min-height: 100vh;">
      <MainHeader />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
;
import SidebarNav from './components/SidebarNav.vue';
</script>
