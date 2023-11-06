<template lang="">
    <div>
        <h2>Loan</h2>
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
<style lang="scss">
    
</style>