<template>
    <div class="test">
        <loan-view></loan-view>
        <loan-transactions-list></loan-transactions-list>
    </div>
</template>
<script lang="ts" setup>
    import LoanView from "@/modules/loans/views/LoanView.vue";
    import LoanTransactionsList from "@/modules/loans/components/loanTransactionsList.vue";
</script>
<style lang="scss" scoped>
    .test{
        background-color: beige;
    }
</style>