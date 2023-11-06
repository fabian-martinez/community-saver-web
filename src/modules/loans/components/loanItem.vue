<template lang="">
    <div class="loan-item" @click="$router.push( { name: 'loan', params: { id:loan.id }   })">
        <h2 class="title">Prestamos {{loan.loan_type}}</h2>
        <div class="info">
            <p>Saldo: {{loan.updated_amount}}</p>
            <p>Próximo pago: {{loan.monthly_payment}}</p>
        </div>
        <p><small>{{loan.id}}</small></p>
    </div>
</template>
<script lang="ts" setup>
import { PropType, defineProps, onMounted } from "vue";
import Loan from "../interfaces/loanInterface";

onMounted(() => {
    console.log(props.loan)
})

const props = defineProps({
    loan:{
        type:Object as PropType<Loan>,
        // required:true
    }
})
</script>
<style lang="scss" scoped>
    .loan-item {
        border-bottom: 1px solid #000;
        width: 100%;
        padding: 20px 10px 0px 10px;
    }

    .loan-item:hover{
        background-color: #aaaaaa;
    }

    .title {
        font-size: 20px;
    }

    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        font-size: 16px;
    }

    small {
        font-size: xx-small;
    }
</style>