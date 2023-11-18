<template lang="">
    <div v-if="transaction?.payment_amount > 0" class="payment-item card">
        <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="transaction-date">{{ transaction?.date }}</span>
            <span class="badge text-bg-warning">Abono</span>
        </div>
        <div class="d-flex align-items-center">
            <span class="amount-label me-2">Monto:</span>
            <span class="amount-value">{{ $filters.currency(transaction?.payment_amount) }}</span>
        </div>
        </div>
    </div>
    <div v-else class="payment-item card">
        <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="transaction-date">{{ transaction?.date }}</span>
            <span class="badge text-bg-success">Desenbolso</span>
        </div>
        <div class="d-flex align-items-center">
            <span class="amount-label me-2">Monto:</span>
            <span class="amount-value">{{ $filters.currency(transaction?.disbursement_amount) }}</span>
        </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import LoanTransaction from '../interfaces/loanTransactionInterface';
import { PropType, defineProps } from "vue";

const props = defineProps({
    transaction:{
        type:Object as PropType<LoanTransaction>,
        // required:true
    }
})
</script>
<style lang="scss">
    
</style>