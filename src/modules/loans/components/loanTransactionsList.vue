<template lang="">
    <div class="transactions-scrollarea">
        <h3>Historico de transacciones</h3>
        <loan-transaction v-for="transaction in loanTransactions" :key="transaction.id" :transaction="transaction"></loan-transaction>
    </div>
</template>
<script lang="ts" setup>
import LoanTransaction from "@/modules/loans/components/loanTransaction.vue";
import { computed, onMounted, defineProps, watch } from "vue";
import { useStore } from "vuex";
const store = useStore()
const loanTransactions = computed(() => store.getters.getTransactions)
const props = defineProps({
    loan_id:{
        type:String,
        required:true
    }
})
</script>
<style lang="scss" scoped>
    .transactions-scrollarea{
        height: calc( 100vh - 120px );
        overflow: scroll;
     }
</style>