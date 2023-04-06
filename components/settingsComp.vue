<template>
    <div class="settings-container">
        <v-icon icon="mdi-close-circle-outline"></v-icon>
        <section class="presets-cont flex gap-6 flex-wrap">
            <p>Change calculator buttons:</p>
            <div class="flex gap-6 flex-wrap">
                <button v-for="(list, key, index) in settingsStore.lists" @click="handleListChange(key)">
                    <div class="text-2xl pb-2"> {{ listsNames[index] }}</div>
                    <p class="text-xs"> {{ list }}</p>
                </button>
            </div>
        </section>
        <section class="buttons-modify">
            Customize current buttons :
            <div class="btns-cont text-white">
                <button v-for="(num, index) in settingsStore.usedList">
                    <input type="number" v-model="settingsStore.usedList[index]"></button>
            </div>
        </section>
        <div class="action-buttons"></div>

    </div>
</template>
<script setup>
import { useSettingStore } from '~/store/settingStore';

// didn't work on writing const { lists, currrentList, usedList } = useSettingStore();
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
<style>
.presets-cont>div>button {
    background: #D9D9D9;
    padding-block: 0.5rem;
    width: 48%;
}

.presets-cont>div>button:hover {
    background: #71717A;
    color: white;
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
</style>