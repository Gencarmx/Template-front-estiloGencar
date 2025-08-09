<template>
  <div>
    
    <div class="bg-[#0F090C] w-20 h-screen p-4 flex flex-col items-center gap-6 fixed top-0 left-0 z-20">
      <img src="../assets/img/logoUnico.png" />
      <div v-for="(menu, index) in menus" :key="index"
        class="cursor-pointer relative p-2 rounded-full flex justify-center items-center w-12 h-12 transition-colors duration-300"
        @click="selectMenu(index)" :title="menu.title"
        :class="selectedMenu === index ? 'bg-[#6625254f] bg-opacity-30' : 'bg-transparent hover:bg-white/10'">
        <component :is="menu.icon || LucideLayoutDashboard" class="text-3xl relative z-10"
          :class="selectedMenu === index ? 'text-white' : 'text-white/70 hover:text-white'" />
      </div>

      <button v-if="!panelOpen" @click="togglePanel"
        class="absolute right-0 transform translate-x-1/2 bg-[#0F090C] hover:bg-[#d485ba50] text-white rounded-full p-2 shadow-lg transition-transform duration-300 hover:scale-100"
        aria-label="Abrir panel">
        <LucideChevronRight class="w-6 h-6" />
      </button>
    </div>

    
    <transition name="slide-fade">
      <div v-if="panelOpen" class="bg-[#323C49] w-80 h-screen p-6 flex flex-col fixed top-0 left-20 z-10">
        <button @click="togglePanel"
          class="absolute right-0 transform translate-x-1/2 bg-[#0F090C] hover:bg-[#d485ba50] text-white rounded-full p-2 shadow-lg transition-transform duration-300 hover:scale-100"
          aria-label="Cerrar panel">
          <LucideChevronLeft class="w-6 h-6" />
        </button>

        <template v-if="selectedMenu !== null">
          <template v-if="menus[selectedMenu].title === 'Perfil'">
            <h2 class="text-lg font-semibold mb-2">Cuenta</h2>
            <ul class="mb-6 space-y-1">
              <li class="hover:bg-gray-600 p-2 rounded cursor-pointer text-white flex items-center gap-2">
                <LucideUser class="w-5 h-5" />
                Información general
              </li>
              <li class="hover:bg-gray-600 p-2 rounded cursor-pointer text-white flex items-center gap-2">
                <LucideEdit class="w-5 h-5" />
                Editar información
              </li>
            </ul>

            <h2 class="text-lg font-semibold mb-2 pt-140">Opciones de cuenta</h2>
            <ul class="space-y-1">
              <li class="hover:bg-gray-600 p-2 rounded cursor-pointer text-white flex items-center gap-2">
                <LucideRepeat class="w-5 h-5" />
                Cambiar de perfil
              </li>
              <li class="hover:bg-gray-600 p-2 rounded cursor-pointer text-white flex items-center gap-2">
                <LucideLogOut class="w-5 h-5" />
                Cerrar sesión
              </li>
            </ul>
          </template>

          <template v-else>
            <h2 class="text-lg font-semibold">Opciones</h2>
            <p class="text-gray-300 mt-2">
              Contenido para {{ menus[selectedMenu].title }}
            </p>
          </template>
        </template>
      </div>
    </transition>
  </div>
</template>



<script setup>
import {
  LucideArrowLeftCircle,
  LucideArrowRightCircle,
  LucideLayoutDashboard,
  LucideBell,
  LucideFolderKanban,
  LucideChevronRight,
  LucideChevronLeft,
  LucideRepeat,
  LucideLogOut,
  LucideUser,
  LucideEdit
} from "lucide-vue-next";
import { ref } from "vue";

const panelOpen = ref(true);     
const selectedMenu = ref(0);     

const menus = [
  { title: "Perfil", icon: LucideLayoutDashboard },
  { title: "Estadísticas", icon: LucideBell },
  { title: "Media", spacing: true, icon: LucideFolderKanban },
  { title: "Notificaciones", icon: LucideFolderKanban },
  { title: "Projects" },
  { title: "Configuracion", icon: LucideBell },
  { title: "Cerrar sesion", icon: LucideFolderKanban, spacing: true }
];

function selectMenu(index) {
  if (selectedMenu.value === index) {
    panelOpen.value = !panelOpen.value;
  } else {
    selectedMenu.value = index;
    panelOpen.value = true;
  }
}

function togglePanel() {
  panelOpen.value = !panelOpen.value;
}
</script>
<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateX(-100%);
}

.slide-fade-enter-to {
  transform: translateX(0%);
}

.slide-fade-leave-from {
  transform: translateX(0%);
}

.slide-fade-leave-to {
  transform: translateX(-100%);
}
</style>