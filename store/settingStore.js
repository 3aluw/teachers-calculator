import { defineStore, acceptHMRUpdate } from "pinia";


export const useSettingStore = defineStore("SettingStore", () => {
const currrentList = ref("smallNumbersList");

let usedList = ref([0.25,0.5,0.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3,3.25,3.5,3.75,4])

const lists = ref({
smallNumbersList : [0.25,0.5,0.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3,3.25,3.5,3.75,4],
oneStepList :  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
tenStepsList :  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170],
fiftyStepsList :  [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800],
oneHundredSteps :  [100,200,300,400,500,600,700,800],
 amercianMethodList: [ -4, -3, -2, -1,1, 2, 3, 4,],
 
})



  return {
    currrentList, lists,usedList
  };
},
/* Enable this to persist this store : more info : https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html
{
  persist: true}
*/
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingStore, import.meta.hot));
}
