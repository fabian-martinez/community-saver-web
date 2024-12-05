<template lang="">
    <div class="payment-item card" @click="toggleDetail">
        <div class="card-body" >
        <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="transaction-date">{{ $filters.monthAndYear(transaction?.date) }}</span>
            <span class="badge" :class="transaction_type?.class">
                {{transaction_type?.name}}
            </span>
        </div>
        <div class="d-flex align-items-center">
            <span class="amount-label me-2">Monto:</span>
            <span class="amount-value">{{ $filters.currency(amount) }}</span>
        </div>
        </div>
        <div v-if="moreDetail" class="transaction-detail">
            <div>
                <span class="amount-label me-2">Valor:</span><span class="amount-value">{{ $filters.currency(transaction.amount) }}</span>
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
import { TRANSACTION_TYPE } from '@/modules/loans/enums/transactionTypeEnum'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
    transaction:{
        type:Object as PropType<LoanTransaction>,
        required:true
    }
})
const amount = ref<number>(0)
const moreDetail = ref<boolean>(false)
const transaction_type = ref<{name:string,class:string}|null>()

onMounted( () => {
    amount.value = Number(props.transaction.amount)
    transaction_type.value = readType(props.transaction.type)
    console.log(transaction_type.value)
})

const toggleDetail = () => {
    moreDetail.value = !moreDetail.value;
}

const readType = (type:string):{name:string,class:string} => {
    console.log(type)
    switch (type) {
        case 'CREDIT_PAYMENT':
            return {name:'Pago intereses',class:'bg-warning'};
        case TRANSACTION_TYPE.PRINCIPAL_PAYMENT.toString():
            return {name:'Abono a capital',class:'bg-primary'};
        case TRANSACTION_TYPE.DISBURSEMENT:
            return {name:'Desenbolso',class:'bg-success'};
        default:
            return {name:`Otro pago: ${type}`,class:'bg-info'};
    }
}

</script>
<style lang="scss">

    .transaction-detail {
        background-color:rgb(233, 233, 233);
        padding-left: 1vh;
    }
</style>