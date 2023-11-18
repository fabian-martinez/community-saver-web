<template lang="">
    <div>
        <div class="container mt-4">
            <div class="row">
                <div class="col-12">
                    <h4 class="font-weight-bold">Prestamo {{selectedLoan?.loan_type}}</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <p class="mb-0">Total: <span class="font-weight-bold">{{$filters.currency(selectedLoan?.original_amount)}}</span></p>
                    <p class="mb-0">Saldo: <span class="font-weight-bold">{{$filters.currency(selectedLoan?.updated_amount)}}</span></p>
                    <p class="mb-0">Tasa de intereses: {{selectedLoan?.interest_rate * 100}}% MV</p>
                </div>
                <div class="col-md-6">
                    <h5 class="font-weight-bold">Proximo Pago</h5>
                    <p class="mb-0">Fecha: mm/aaaaa</p>
                    <p class="mb-0">Abono a Capital: <span class="font-weight-bold">{{$filters.currency(selectedLoan?.monthly_payment)}}</span></p>
                    <p>Intereses: <span class="font-weight-bold">{{$filters.currency(selectedLoan?.next_interest_payment)}}</span></p>
                    <p class="total-amount">Total: <span class="font-weight-bold">{{$filters.currency(selectedLoan?.next_total_payment)}}</span></p>
                </div>
            </div>
        </div>
        <div>
            <loan-transactions-list :loan_id="selectedLoan?.id"></loan-transactions-list>
        </div>
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
    .loan-info {
        border: 1px solid #000;
        padding: 20px;
        width: 400px;
        text-align: center;
    }

    .section-heading {
        font-size: 18px;
        font-weight: bold;
    }

    .total-amount {
        font-size: 16px;
        font-weight: bold;
    }
</style>