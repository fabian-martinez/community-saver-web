<template>
    <div class="test">
        <h1>Component Loans List</h1>
        <ul>
            <li>
                <loan-item></loan-item>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
    import LoanItem from "@/modules/loans/components/loanItem.vue";
</script>
<style lang="scss" scoped>
    .test{
        background-color: aqua;
    }
</style>