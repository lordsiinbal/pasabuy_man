<template>
<header class="w-full fixed">
<div class="float-right"> 
    <button  @click="isOpen=!isOpen" class=" focus:outline h-8 w-8 block rounded-full overflow-hidden">
        <img src=./img/profile_icon.png class="rounded-full h-full object-cover w-full border-red-500 border-2">
    </button>
<div v-if="isOpen" class="  bg-white h-min w-30 float-right rounded-lg py-2 pl-2 pr-4 pt-2 mr-10">
    <a href="#" class="flex gap-2 gap-y-10"><span class="material-icons text-gray-600">account_circle</span>Profile</a>
    <router-link to="/orders"> <a href="#" class="flex gap-2"><span class="material-icons text-gray-600">shopping_bag</span>Orders</a></router-link>
    <router-link to="/deliver"><a href="#" class="flex gap-2" ><span class="material-icons text-gray-600">delivery_dining</span>Deliveries</a></router-link>
    <router-link to="/accountset"><a href="#" class="flex gap-2"><span class="material-icons text-gray-600">manage_accounts</span>Account Setting</a></router-link>
    <a href="#" class="flex gap-2"><span class="material-icons text-gray-600 ">logout</span>Log out</a>
</div>
</div>

 
</header>


</template>
<script>
export default {
    data(){
        return{
            isOpen:false
        }
    }
}
</script>