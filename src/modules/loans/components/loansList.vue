<template lang="">
    <div>
        <div class="loans-list-container">
            <div class="px-2 pt-2">
                <h2>Selcciona el socio</h2>
                <select v-model="selectedMember" name="members" id="members" class="form-select" >
                    <option v-for="member in members?.items" :key="member.id" :value="member">{{ member.name }}</option>
                </select>
            </div>

            <div class="loans-scrollarea">
            <h3>Préstamos del miembro:</h3>
            <loan-item v-for="loan in loansByMember" :key="loan.id" :loan="loan"></loan-item>
            </div>
        </div>
    </div>
 </template>
<script lang="ts" setup>
import { getMembers } from "@/modules/loans/composables/getMembers";
import { onMounted, watchEffect, ref, watch, computed } from "vue";
import { useStore } from "vuex";
import LoanItem from "@/modules/loans/components/loanItem.vue";

const { makeRequest, results, error } = getMembers();

const store = useStore()




const members = results
const selectedMember = ref(null);
const loansByMember = computed(() => store.getters.getLoansByMember)

watch(selectedMember,(newMember) => {
    if(newMember){
        store.dispatch('loadMembers',newMember)
    }
})

onMounted(async() => {
    await makeRequest()
    console.log(results.value);
    console.log(members.value);
})

watchEffect(() => {
    if (error.value) alert('Problem found: ' + error);
});
</script>
<style lang="scss" scoped>
    
    .loans-list-container{
        //  border-right: 1px solid #93999d;
         height: 100vh;
     }
     .loans-scrollarea{
        height: calc( 100vh - 120px );
        overflow: scroll;
     }
</style>