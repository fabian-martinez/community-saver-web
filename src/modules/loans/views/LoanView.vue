<template lang="">
    <div>
        <h2>Prestamo {{selectedLoan?.loan_type}}</h2>
        <h2>Total: {{selectedLoan?.original_amount}}</h2>
        <h2>Saldo: {{selectedLoan?.updated_amount}}</h2>
        <h2>Interes: {{selectedLoan?.interest_rate * 100}}% EMV</h2>
    </div>
    <div>
        <loan-transactions-list :loan_id="selectedLoan?.id"></loan-transactions-list>
    </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, onMounted, onUpdated, ref } from "vue";
import { useStore } from "vuex";
import Loan  from "@/modules/loans/interfaces/loanInterface";
import LoanTransactionsList from "@/modules/loans/components/loanTransactionsList.vue";

const store = useStore()
const props = defineProps({
    id:{
            type: String,
            require: true,
        } 
})
const loansByMember = computed(() => store.getters.getLoansByMember)
const selectedLoan = ref<Loan|null>(null);

onUpdated(() => {
    console.log(props.id)
    store.dispatch('loadLoanTransactions',props.id)
    selectedLoan.value = loansByMember.value.filter((loan:Loan) => loan.id === props.id)[0];
})
onMounted(() => {
    console.log(props.id)
    store.dispatch('loadLoanTransactions',props.id)
    selectedLoan.value = loansByMember.value.filter((loan:Loan) => loan.id === props.id)[0];
})


</script>
<style lang="scss" scoped>
    small {
        font-size: xx-small;
    }
</style>