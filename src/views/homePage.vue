<template>
    <main class=" min-w-auto w-full grid place-content-center gap-10 pt-25 pb-30">
    <section class="flex items-center place-content-center gap-x-28">
        <div class="bg-white rounded-full w-70 h-70 flex items-center justify-center ">
            <LucideUser class="text-black w-45 h-45 object-center " />
        </div>
        <div class="text-white mt-20 flex flex-col space-y-4">
            <h1 class="text-3xl font-bold">Rodrigo</h1>
            <p>Correo: correofalso@gmail.com</p>
            <p>Tel: 999999999</p>
        </div>
    </section>
    <div class="bg-white text-black justify-center min-h-auto min-w-250 px-25 ">
        <h1 :class="TextNomDato" class="p-5">Informacion General</h1>
        <div class="mx-auto w-fit ">
        <div class="grid grid-cols-4 gap-5">
            <div :class="TextNomDato">Fecha de Ingreso</div>
            <div :class="TextNomDato">ID trabajador</div>
            <div :class="TextNomDato">NSS</div>
            <div :class="TextNomDato">Trabajador por</div>
            <div :class="colorTextResult">25-Abr-2025</div>
            <div :class="colorTextResult">123456</div>
            <div :class="colorTextResult">468465487</div>
            <div :class="colorTextResult">2 meses</div>
        </div>
        <h1 :class="TextNomDato" class="p-8 ">Informacion Personal</h1>
        <div class="grid grid-cols-4 gap-4 my-8 pb-5">
            <div :class="TextNomDato">Fecha de Ingreso</div>
            <div :class="TextNomDato">ID trabajador</div>
            <div :class="TextNomDato">NSS</div>
            <div :class="TextNomDato">Trabajador por</div>
            <div :class="colorTextResult">25-Abr-2025</div>
            <div :class="colorTextResult">123456</div>
            <div :class="colorTextResult">468465487</div>
            <div :class="colorTextResult">2 meses</div>
        </div>
        </div>
    </div>
    </main>

</template>


<script setup lang="ts">
import { LucideCircleUser, LucideUser, } from 'lucide-vue-next';



const colorTextResult = "text-[#38397D] text-xl px-10"
const TextNomDato = "text-xl text-black font-semibold"

</script>