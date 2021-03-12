<template>
<Nav class="relative"/>
<div  class=" shadow-sm bg-white  w-1/2 h-32 sm:w-full sm:justify-center mb-3">
<div class="w-1/3 float-right mr-16 sm:float-right sm:w-full sm:mr-20">
<p class=" sm:text-center sm:float right pt-20 w-full text-xl font-nunito font-bold">ACCOUNT SETTINGS</p>
</div>
</div>
<div @click="isOpen=false" class="flex justify-center self-center font-nunito mb-11  ">
<div class=" flex flex-col justify-center self-center gap-y-5 sm:space-y-5">
     <div id ="personal_info" class=" ring-1 ring-gray-300 bg-white p-5 rounded-2xl w-100 shadow-sm sm:w-96" >
        <div class=" flex justify-between">
            <div class="flex gap-4">
            <p class="font-bold font-nunito text-sm">Personal Info</p>
            </div>
           <div> 
               <label for="sub" id="edt1" @click="hidden=!hidden,Edit('edt1'), show=!show" class="
               text-blue-800 w-min font-bold text-sm cursor-pointer">Edit</label>
           </div>
        </div>
        <div id="personal_info" class="text-sm w-1/2 gap-x-10 pt-8 sm:text-sm sm:w-full">
        <form class="space-y-8 ">
        <span class="  font-raleways font-bold grid grid-cols-2 "> 
        <p class="text-gray-500">NAME</p>
        <span>
        <p v-if="show" id="name">{{personal.name}}</p>
        <input type="text" v-if="hidden"
        id="input_name" v-model="personal.name" 
        class="ring-2 ring-gray-400 font-bold">
        </span>
        </span>
        <span class=" font-raleways font-bold  grid grid-cols-2 ">
        <p class="text-gray-500">PHONE NUMBER</p>
        <span>
        <p v-if="show">{{personal.phone_number}}</p>
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="09xx xx xx xxx" v-if="hidden"
         required v-model="personal.phone_number" 
        class="ring-2 ring-gray-400 font-bold">
        </span>
        </span>
         <span class=" font-raleways font-bold  grid grid-cols-2"> 
        <p class="text-gray-500">WORK</p>
        <span>
        <p v-if="show">{{personal.work}}</p>
        <input type="text" v-if="hidden"
         v-model="personal.work"  
        class="ring-2 ring-gray-400 font-bold">
        </span>
        </span>
        <span class=" font-raleways font-bold  grid grid-cols-2"> 
        <p class="text-gray-500">GENDER</p>
        <span>
        <p v-if="show">{{personal.gender}}</p>
        <div class="flex gap-x-4">
        <input type="radio" v-if="hidden"
        id="male"
        class="ring-2 ring-gray-400 font-bold" value="Male" v-model="personal.gender">
        <label for="Male" v-if="hidden">Male</label>
            <input type="radio" v-if="hidden"
            id="Female"   
            class="ring-2 ring-gray-400 font-bold" value="Female" v-model="personal.gender">
            <label for="Female" v-if="hidden">Female</label>
        </div>
        </span>
        </span>
        <span class=" font-raleways font-bold  grid grid-cols-2"> 
        <p class="text-gray-500">BIRTHDAY</p>
        <span>
        <p v-if="show">{{personal.birdate}}</p>     
         <input @keyup="personal.birdate=$event.target.value" v-if="hidden" type="date" id="start" name="trip-start"
       min="1990-01-01"  v-model="personal.birdate">
        </span>
        </span>
         <span class=" font-raleways font-bold  grid grid-cols-2"> 
        <p class="text-gray-500">Language</p>
        <span>
        <p v-if="show">{{personal.language}}</p>
        <input type="text" v-if="hidden"
          v-model="personal.language"  
        class="ring-2 ring-gray-400 font-bold">
        </span>
         </span>
        </form>
        </div>
    </div>
     <div class=" ring-1 ring-gray-300 bg-white p-5 shadow-sm rounded-2xl w-100 sm:w-96" >
        <div class=" flex justify-between">
            <div class="flex gap-4">
            <p class="font-bold font-nunito text-sm">Address Info</p>
            </div>
        <div>  <label for="sub" id="edt2" @click="edit2=!edit2,Edit('edt2'), show=!show" class="
               text-blue-800 w-min font-bold text-sm cursor-pointer">Edit</label></div>
        </div>
        <div class="text-sm w-full gap-x-10 space-y-8 pt-8 sm:w-full">
        <span class="  font-raleways font-bold grid grid-cols-3 "> 
        <p class="text-gray-500">HOUSE NUMBER</p><p>{{address_info.house_number}}</p>
        <input type="text" v-if="edit2"
        id="input_name" v-model="address_info.house_number" 
        class="ring-2 ring-gray-400 font-bold">
        </span>
        <span class=" font-raleways font-bold  grid grid-cols-2"> 
        <p class="text-gray-500">PROVINCE</p><p>{{address_info.province}}</p>
        </span> 
         <span class=" font-raleways font-bold  grid grid-cols-2"> 
        <p class="text-gray-500">CITY/MUNICIPALITY</p><p>{{address_info.city}}</p>
        </span>
         <span class=" font-raleways font-bold  grid grid-cols-2"> 
        <p class="text-gray-500">BARANGAY</p><p>{{address_info.barangay}}</p>
        </span>
        </div>
    </div>
     <div class=" ring-1 ring-gray-300  bg-white p-5 rounded-2xl w-100 sm:w-96" >
        <div class=" flex justify-between">
            <div class="flex gap-4">
            <p class="font-bold font-nunito text-sm">Account Info</p>
            </div>
           <div> <p class="  hover:text-gray-500 cursor-pointer tracking-wider text-blue-800  text-xs rounded-2xl  h-min w-18 self-center p-1 font-nunito font-bold">Edit</p></div>
        </div>
        <div class="text-sm w-1/2 gap-x-10 space-y-8 pt-8 sm:w-full">
        <span class="  font-raleways font-bold grid grid-cols-2 "> 
        <p class="text-gray-500">Email</p><p>{{account_info.email}}</p>
        </span>
        <span class=" font-raleways font-bold  grid grid-cols-2"> 
        <p class="text-gray-500">Password</p><p>{{account_info.password}}</p>
        </span>
        </div>
    </div>
         <div class="ring-1 ring-gray-300 shadow-sm bg-white p-5 rounded-2xl w-100 sm:w-96" >
        <div class=" flex justify-between">
            <div class="flex gap-4">
            <p class="font-bold font-nunito text-sm">Verification Status</p>
            </div>
          </div>
        <div class="text-sm w-1/2 gap-x-10 space-y-8 pt-8 sm:w-full">
        <span class="  font-raleways font-bold grid grid-cols-1 "> 
        <p class="text-gray-500"> {{verification_status.msg}}</p>
        </span>
       
        </div>
    </div>
</div>
</div>
</template>
<script>
import Nav from '../views/nav.vue'
export default {
  name: 'Account',
  components: {
    Nav
  },
   beforeCreate:function () {
      document.body.className='account';
  },
data(){
    return{
    disabled: 0,
    hidden:false,
    show:true,
    show2:true,
    edit2:false,
    personal: {
      name:'Juan',
      lastname:'Delacruz',
      phone_number:'09021050502',
      work:'Krusty Crab',
      gender:'Male',
      language:'Bicol',
      birdate:new Date().toISOString().slice(0,10)
    },
    address_info:{
    house_number:'0210',
    province:'Albay',
    city:'Legaspi',
    barangay:'Banquerohan'
    },
    account_info:{
        email:'sanJuan@gmail.com',
        password:'********',
    },
    verification_status:{
        msg:'Your Account is fully verified'
    }
    }
  
},
methods:{
    submit () {
     alert(personal.name);  
    },
     Edit(pars) {
      let x=document.getElementById(pars).innerHTML;
      if(x=='Edit'){
          document.getElementById(pars).innerHTML="Save";
          
      }
      else{
         document.getElementById(pars).innerHTML="Edit"; 
         
      }
    }

}
}
</script>
<style>
body.account{
    background:white;
}
body.home{
    background-color:white;
}
</style>
