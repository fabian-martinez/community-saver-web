<template lang="">
    <div>
        <p>{{transaction}}</p>
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