<template lang="">
    <div class="payment-item card" @click="toggleDetail">
        <div class="card-body" >
        <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="transaction-date">{{ $filters.monthAndYear(transaction?.date) }}</span>
            <span class="badge text-bg-warning" v-if="(transactionType === TRANSACTION_TYPE.PAYMENT)">
                {{TRANSACTION_TYPE.PAYMENT}}
            </span>
            <span class="badge text-bg-success" v-else-if="(transactionType === TRANSACTION_TYPE.DISBURSEMENT)">
                {{TRANSACTION_TYPE.DISBURSEMENT}}
            </span>
            <span class="badge text-bg-success" v-else-if="(transactionType === TRANSACTION_TYPE.PROJECTION)">
                {{RANSACTION_TYPE.PROJECTION}}
            </span>
        </div>
        <div class="d-flex align-items-center">
            <span class="amount-label me-2">Monto:</span>
            <span class="amount-value">{{ $filters.currency(amount) }}</span>
        </div>
        </div>
        <div v-if="moreDetail" class="transaction-detail">
            <div v-if="(transaction.interest_amount > 0)">
                <span class="amount-label me-2">Capital:</span><span class="amount-value">{{ $filters.currency(transaction.interest_amount) }}</span>
            </div>
            <div v-if="(transaction.payment_amount > 0)">
                <span class="amount-label me-2">Intereses:</span><span class="amount-value">{{ $filters.currency(transaction.payment_amount) }}</span>
            </div>
            <div>
                <span class="amount-label me-2">Nuevo Saldo:</span><span class="amount-value">{{ $filters.currency(transaction.last_balance) }}</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import LoanTransaction from '../interfaces/loanTransactionInterface';
import { PropType, defineProps, onMounted, ref } from "vue";
import {TRANSACTION_TYPE} from '@/modules/loans/enums/transactionTypeEnum'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
    transaction:{
        type:Object as PropType<LoanTransaction>,
        required:true
    },
    transaction_type:{
        type:String,
        required:true
    }
})
const transactionType = ref<string>(props.transaction_type)
const amount = ref<number>(0)
const moreDetail = ref<boolean>(false)

onMounted(() => {
    amount.value = (props.transaction_type === TRANSACTION_TYPE.DISBURSEMENT)?
                    props.transaction.disbursement_amount:
                    Number(props.transaction.payment_amount) + Number(props.transaction.interest_amount)
})

const toggleDetail = () => {
    moreDetail.value = !moreDetail.value;
}

</script>
<style lang="scss">
    .transaction-detail {
        background-color:rgb(233, 233, 233);
        padding-left: 1vh;
    }
</style>