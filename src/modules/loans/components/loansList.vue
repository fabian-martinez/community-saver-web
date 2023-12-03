<template lang="">
<div>
    <div class="loans-list-container">
        <div class="px-2 pt-2">
            <h2>Selcciona el socio</h2>
            <select v-model="selectedMember" name="members" id="members" class="form-select" >
                <option v-for="member in members?.items" :key="member.id" :value="member">{{ member.name }}</option>
            </select>
        </div>

        <h3>Préstamos del miembro:</h3>
        <div class="loans-scrollarea">
        <router-link :to="{ name: 'loan', params: { id:loan.id }}" v-for="(loan) in loansByMember" :key="loan.id">
            <loan-item :loan="loan" class="loan-item"></loan-item>
        </router-link>
</div>
        </div>
    </div>
 </template>
<script lang="ts" setup>
import { getMembers } from "@/modules/loans/composables/getMembers";
import { onMounted, watchEffect, ref, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import LoanItem from "@/modules/loans/components/loanItem.vue";

const { makeRequest, results, error } = getMembers();
const router = useRouter()
const store = useStore()
const members = results
const selectedMember = ref(null);
const loansByMember = computed(() => store.getters.getLoansByMember)

watch(selectedMember,(newMember) => {
    if(newMember){
        store.dispatch('loadMembers',newMember)
    }
    router.push({name:'no-loans'})
})

onMounted(async() => {
    await makeRequest()
})

watchEffect(() => {
    if (error.value) alert('Problem found: ' + error);
});
</script>
<style lang="scss" scoped>
    
    a:link, a:visited, a:active {
        text-decoration:none;
        color: #8b8b8b;
    }
    .loans-list-container{
        //  border-right: 1px solid #93999d;
         height: 100vh;
     }
     .loans-scrollarea{
        height: calc( 100vh - 120px );
        overflow: scroll;
     }
     a.router-link-active{
      color: #000;
    }
    .loan-item {
        border-bottom: 1px solid #000;
        width: 100%;
        padding: 20px 10px 0px 10px;
        // color: #000;
    }

    .loan-item:hover{
        background-color: #e4e4e4;
    }
</style>