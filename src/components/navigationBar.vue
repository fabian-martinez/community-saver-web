<template lang="">
<div>
  <div id="sidebar" class="d-flex flex-column flex-shrink-0 bg-light" style="width: 4.5rem;">
    <a href="/" class="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
      <DollarCircle width="40" height="32"></DollarCircle>
<span class="visually-hidden">Icon-only</span>
    </a>
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item">
        <router-link :to="{name:'loans-manager'}" class="nav-link py-3 border-bottom" aria-current="page" title="Prestamos" data-bs-toggle="tooltip" data-bs-placement="right">
          <credit-card></credit-card>
        </router-link>
      </li>
      <li>
        <a href="#" class="nav-link py-3 border-bottom" title="Fondo" data-bs-toggle="tooltip" data-bs-placement="right">
          <bank></bank>
        </a>
      </li>
    </ul>
    
    <a @click="onLogout" class="d-block p-3 link-dark text-decoration-none" title="Logout" data-bs-toggle="tooltip" data-bs-placement="right">
      <log-out width="40" height="32"></log-out>
<span class="visually-hidden">Log Out</span>
    </a>
  </div>
</div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import { Bank, CreditCard, DollarCircle, LogOut } from "@iconoir/vue"
import { Tooltip } from "bootstrap"
import useAuth from "@/modules/auth/composables/useAuth"
import { useRouter } from 'vue-router'

const { logout } = useAuth()
const router = useRouter()

onMounted(() => {
  let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new Tooltip(tooltipTriggerEl);
    });
})
onUnmounted(() => {
  let tooltipTriggerList = document.querySelectorAll('.tooltip')
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      tooltipTriggerEl.remove();
    });
})

const onLogout = async() => {
  await logout()
  router.push({name:'login'})
}
</script>
<style lang="scss" scoped>

    #sidebar {
        height: 100vh;
        height: -webkit-fill-available;
        max-height: 100vh;
            }

    .dropdown-toggle { 
        outline: 0; 
    }

    .nav-flush .nav-link {
        border-radius: 0;
    }

    .nav a.router-link-active{
      color: rgb(255, 127, 127);
    }
</style>