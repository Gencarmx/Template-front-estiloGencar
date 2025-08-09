<template>
  <header class="w-full flex justify-center bg-transparent">
    <!-- Contenedor centrado limitado en ancho -->
    <div
      class="flex justify-between items-center w-full max-w-5xl border-b border-white/100 pb-5 mb-8"
      style="border-bottom-color: white;"
    >
      <!-- Ruta actual -->
      <nav
        class="text-white font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-xs pl-15"
        aria-label="Ruta actual"
      >
        {{ currentRoutePath }}
      </nav>

      <!-- Barra de búsqueda + usuario -->
      <div class="flex items-center space-x-6 pr-15 text-white">
        <!-- Search bar simple -->
         <div class="relative w-80 pr-10">
        <input
          type="search"
          placeholder="Buscar..."
          icon="LucideSearch"
          class="w-full pl-10 pr-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
          v-model="searchQuery"
          @keyup.enter="onSearch"
          aria-label="Buscar"
        />
        <LucideSearch
      class="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5 pointer-events-none"
    />
          </div>
        <!-- Icono usuario -->
        <div
          class="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold cursor-pointer "
          title="Usuario"
        >
          R
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { LucideSearch } from "lucide-vue-next";

const currentRoutePath = ref("Perfil / Información personal");
const searchQuery = ref("");

function onSearch() {
  alert(`Buscar: ${searchQuery.value}`);
}
</script>

<style scoped>
/* Dejamos transparente el header excepto la línea debajo del contenido centrado */
header {
  background-color: transparent;
}

/* Estilos extra para input ya están en Tailwind */
</style>
