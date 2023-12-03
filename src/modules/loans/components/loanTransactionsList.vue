<template lang="">
    <div>
        <div class="container-fluid">
            <div class="transactions-header d-flex justify-content-between align-items-center mt-4">
                <h3>Historico de transacciones</h3>
                <nav class="d-inline-flex align-items-center" aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" :class="{ disabled: isFirstPage}" @click="prevPage">Previous</a></li>
                        <li class="page-item" v-for="(page, index) in browserPages" :key="index">
                            <a class="page-link" :class="{ active: page.active}">{{page.number}}</a></li>
                        <li class="page-item"><a class="page-link" :class="{ disabled: isLastPage}" @click="nextPage">Next</a></li>
                    </ul>
                </nav>
                <!-- <button class="btn btn-primary"><sort-down/> Fecha</button> -->
            </div>
        </div>
        <div class="transactions-scrollarea">
            <loan-transaction v-for="transaction in loanTransactions" 
                :key="transaction.id" 
                :transaction="transaction"
                :transaction_type="(transaction.payment_amount > 0)?
                                TRANSACTION_TYPE.PAYMENT:
                                TRANSACTION_TYPE.DISBURSEMENT">
            </loan-transaction>
        </div>
    </div>
</template>
<script lang="ts" setup>
import LoanTransaction from "@/modules/loans/components/loanTransaction.vue";
import {TRANSACTION_TYPE} from '@/modules/loans/enums/transactionTypeEnum'
import { computed, onUpdated, ref } from "vue";
import { useStore } from "vuex";

const store = useStore()
const loanTransactions = computed(() => store.getters.getTransactions)
const loanCurrentPagination = computed(() => store.getters.getPagination)
const isFirstPage = ref<boolean>(true)
const isLastPage = ref<boolean>(false)
const browserPages = ref<{number:number,active:boolean}[]>([
    {number:1,active:true},
    {number:2,active:false},
    {number:3,active:false},
    {number:4,active:false},
])

onUpdated(() => {
    isLastPage.value = (loanCurrentPagination.value.last_page===loanCurrentPagination.value.total_pages)?
        true: false;
    isFirstPage.value = (loanCurrentPagination.value.last_page===1)?
        true: false;
})

const nextPage = () => {
    const activeIndex = browserPages.value.findIndex(page => page.active)
    if(activeIndex !== -1){
        browserPages.value[activeIndex].active = false;
        if(browserPages.value[activeIndex+1]){
            browserPages.value[activeIndex+1].active = true;
        }else{
            browserPages.value.push({number:(browserPages.value[activeIndex].number+1),active:true})
            browserPages.value.shift()
        }
    }
    loanCurrentPagination.value.last_page = loanCurrentPagination.value.last_page + 1;
    store.dispatch('moveToPageOfLoanTransactions',loanCurrentPagination.value)
}
const prevPage = () => {
    const activeIndex = browserPages.value.findIndex(page => page.active)
    if(activeIndex !== -1){
        browserPages.value[activeIndex].active = false;
        if(browserPages.value[activeIndex-1]){
            browserPages.value[activeIndex-1].active = true;
        }else{
            browserPages.value.unshift({number:(browserPages.value[activeIndex].number-1),active:true})
            browserPages.value.pop()
        }
    }
    loanCurrentPagination.value.last_page = loanCurrentPagination.value.last_page - 1;
    store.dispatch('moveToPageOfLoanTransactions',loanCurrentPagination.value)
}

</script>
<style lang="scss" scoped>

    .transactions-header{
        height: 10hv;
    }

    .transactions-scrollarea{
        height: 50vh;
        overflow: scroll;
    }
</style>