<template lang="">
<div>
  <div id="sidebar" class="d-flex flex-column flex-shrink-0 bg-light" style="width: 4.5rem;">
    <a href="/" class="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
      <DollarCircle width="40" height="32"></DollarCircle>
      <span class="visually-hidden">Icon-only</span>
    </a>
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item">
        <router-link :to="{name:'loans-manager'}" href="#" class="nav-link active py-3 border-bottom" aria-current="page" title="Prestamos" data-bs-toggle="tooltip" data-bs-placement="right">
          <CreditCard></CreditCard>
        </router-link>
      </li>
      <li>
        <a href="#" class="nav-link py-3 border-bottom" title="Fondo" data-bs-toggle="tooltip" data-bs-placement="right">
          <Bank></Bank>
        </a>
      </li>
    </ul>
    <div class="dropdown border-top">
      <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" class="rounded-circle">
      </a>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { Bank, CreditCard, DollarCircle } from "@iconoir/vue"
import { Tooltip } from "bootstrap"

onMounted(() => {
  let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new Tooltip(tooltipTriggerEl);
    });
})
</script>
<style lang="scss">
    .dropdown-toggle { outline: 0; }

    .nav-flush .nav-link {
    border-radius: 0;
    }
</style>