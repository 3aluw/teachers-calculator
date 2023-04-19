<template>
    <div class="settings-container" :class="{ light: settingsStore.lightMode }">

        <section class="presets-cont ">
            <p class="text-xl pb-4 pt-2 ">Change calculator buttons:</p>
            <div class="flex gap-6 flex-wrap text-black justify-center">
                <button v-for="(list, key, index) in settingsStore.lists" @click="handleListChange(key)">
                    <div class="text-2xl pb-2"> {{ listsNames[index] }}</div>
                    <p class="text-xs"> {{ list }}</p>
                </button>
            </div>
        </section>
        <section class="buttons-modify pb-6">
            <p class="text-xl py-4 pt-8 "> Customize current buttons :</p>
            <div class="btns-cont text-white">
                <button v-for="(num, index) in settingsStore.usedList" class="modify-btns">
                    <input class="w-full" type="number" v-model="settingsStore.usedList[index]"></button>
            </div>
        </section>


    </div>
</template>
<script setup>
import { useSettingStore } from '~/store/settingStore';
const settingsStore = useSettingStore();

//formats Lists'names 
const listsNames = computed(() => {
    const regex = /([A-Z])/g;

    const names = Object.keys(settingsStore.lists).map((name) => {
        let nameWithSpace = name.replace(regex, " $1")
        return nameWithSpace.toLocaleLowerCase();
    });

    return names;
})

//handles clicks to change the used list from the lists obj
const handleListChange = (key) => {
    settingsStore.usedList = []
    settingsStore.usedList = [...settingsStore.lists[key]]
}
</script>
<style scoped>
.settings-container {
    background: #2E2F38;
    color: white;
}



.presets-cont>div>button {
    background: #ffffeb;
    padding-block: 0.5rem;
    width: 48%;
}

.presets-cont>div>button:hover {
    background: #71717A;
    color: white;
}


/*customize section */
.modify-btns {
    background: #4E505F;
}



input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input:focus {
    outline: none;

}

input {
    text-align: center;
}

/*light mode */
.light {
    background: #F7F8F4;
}

.light .presets-cont {

    color: black;
}

.light .presets-cont>div>button {
    background: #D9D9D9;

}

.light .buttons-modify {
    color: black;
}

.light .buttons-modify .btns-cont>.modify-btns {
    background: #2E2F38;
    color: white;
}
</style>