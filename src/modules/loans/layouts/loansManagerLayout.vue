<template>
    <div class="container-fluid">
        <div class="row">
            <loans-list class="col-md-3"></loans-list>
            <loan-details class="col-md-9"></loan-details>
        </div>
    </div>
</template>
<script lang="ts" setup>
import LoansList from "@/modules/loans/components/loansList.vue";
import LoanDetails from "@/modules/loans/layouts/loanDetailsLayout.vue";
</script>
<style lang="scss">
    
</style>