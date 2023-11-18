<template lang="">
    <div>
        <div class="container-fluid">
            <div class="d-flex justify-content-between align-items-center mt-4">
                <h3>Historico de transacciones</h3>
                <nav class="d-inline-flex align-items-center" aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link disabled" >Previous</a></li>
                        <li class="page-item"><a class="page-link active" >1</a></li>
                        <li class="page-item"><a class="page-link" >2</a></li>
                        <li class="page-item"><a class="page-link" >3</a></li>
                        <li class="page-item"><a class="page-link disabled" >...</a></li>
                        <li class="page-item"><a class="page-link" >10</a></li>
                        <li class="page-item"><a class="page-link" >Next</a></li>
                    </ul>
                </nav>
                <button class="btn btn-primary"><sort-down/> Fecha</button>
            </div>
        </div>
        <div class="transactions-scrollarea">
            <loan-transaction v-for="transaction in loanTransactions" :key="transaction.id" :transaction="transaction"></loan-transaction>
        </div>
    </div>
</template>
<script lang="ts" setup>
import LoanTransaction from "@/modules/loans/components/loanTransaction.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { SortDown } from "@iconoir/vue"
const store = useStore()
const loanTransactions = computed(() => store.getters.getTransactions)
</script>
<style lang="scss" scoped>
    .transactions-scrollarea{
        height: calc( 100vh - 120px );
        overflow: scroll;
     }
     .pagination {
        margin-top: 10px;
        text-align: center;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th {
        cursor: pointer;
    }
</style>