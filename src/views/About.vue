<template>
 
 
  <!--drop down profile--> 
<div class=" bg-gray-300 flex flex-col justify-center focus:ring-2 ">
    
    <div class="mx-auto ">
        
        <div class="rounded-3xl shadow-2xl pt-16 pb-5 px-5 mt-16 w-min h-min bg-white text-center">         
            <p class="font-nunito text-2xl font-bold mb-5 md:flex items-center justify-center">Upload your valid ID</p>
            <p class="leading-loose">
                A government ID helps us check you're really you. It also helps us keep Pasabuy secure, fight fraud, and more.
            </p>
           
            <div>
                <div class="lg:flex gap-4 text-left md:flex sm:block">
                <div>
                <p class="ml-2 mt-2.5">Front of your ID</p>
                <div class="p-5 flex-col justify-center items-center  text-center rounded-2xl box-border  border-dashed border-2  border-gray-500 w-64 h-52">
                <div class="flex-row space-y-0">
                <div id="preview" class=" w-50 h-32 overflow-hidden  flex flex-col justify-center items-center" >
                   <label for="infile" id="label_input" class="block">    
                    <img id="img2" src="./img/front_idIcon.jpg" class="default_icon cursor-pointer rounded-lg">  
                    
                     </label>
                    <img v-if="url" :src="url" />
                    <p v-if="hide" class="font-medium" id="brws">Browse</p>
                </div>
                <p  id="id_name" class="text-left m-0">{{file_name}}</p>
                </div>
                <div class="flex justify-end">
                 <div class=" flex gap-x-4 font-medium">
                <label v-if="delete_i=!delete_i" id="delete_image" class="text-red-500 ">Delete</label>
                <label v-if="hide"  id="edit_image" for="infile" class=" cursor-pointer" @change="onFileChange" >Edit</label>    
                </div>
                </div>    
        <!--Input type--><input id="infile" type="file"  @change="onFileChange" class="hidden" />
                </div>                       
                 </div>    
                <!--Back of your ID-->
                 <div class="lg:flex gap-4 text-left sm:block">
                    <div>
                        <p class="ml-2 mt-2.5">Back of your ID</p>
                            <div class="p-5 flex-col justify-center items-center text-center rounded-2xl box-border  border-dashed border-2 border-gray-500 w-64 h-52 ">
                                <div class="flex-row space-y-0">
                                    <div id="image-prev2" class=" w-50 h-32 overflow-hidden  flex flex-col justify-center items-center">
                                           
                                        <label for="infile2" id="label_input2" class="block">    
                                        <img id="img2" src="./img/back_idIcon.jpg" class="default_icon cursor-pointer rounded-lg">  
                                        </label>
                                         <p class="font-medium" id="brws2">Browse</p>
                                        </div>
                                     <p id="id_name2" class="text-left m-0"></p>
                                </div>
                                <div class="flex justify-end">
                                    <div class=" flex gap-x-4 font-medium">
                                    <label id="delete_image2" class="text-red-500" ></label>
                                    <label id="edit_image2" for="infile2" class="cursor-pointer"></label>    
                                        </div>
                                    </div>    
                            <!--Input value--> <input type="file" value="" id="infile2" class="hidden">
                                </div>                       
                            </div>
                        <!---->                       
                    </div>
            </div>
            <div class="flex mt-9 justify-between">
            <button>Back</button>
                <div class="space-x-4">
                   <button>Skip for now</button>
                   <a href="#"><input type="button" value="NEXT" class="rounded-full py-2 bg-red-600 w-24 text-white cursor-pointer">
                   </a>                   
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
export default {
    data() {
    return {
      url: null,
      hide:true,
      
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      this.file_name=file.name;

      
    }
  }
}
</script>
<style scoped>
body.home{
    background-color: royalblue;
}
</style>