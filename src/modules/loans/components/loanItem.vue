<template lang="">
    <div>
        <h2 class="title">Prestamos {{loan.loan_type}}</h2>
        <div class="info">
            <p>Saldo: {{$filters.currency(loan.updated_amount)}}</p>
            <p>Próximo pago: {{$filters.currency(loan.next_total_payment)}}</p>
        </div>
        <p><small>{{loan.id}}</small></p>
    </div>
</template>
<script lang="ts" setup>
import { PropType, defineProps } from "vue";
import Loan from "../interfaces/loanInterface";


const props = defineProps({
    loan:{
        type:Object as PropType<Loan>,
        // required:true
    }
})
</script>
<style lang="scss" scoped>
    
    .title {
        font-size: 20px;
    }

    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        font-size: 16px;
    }

    .info p {
        margin-right: 10px;
    }

    small {
        font-size: xx-small;
    }
</style>