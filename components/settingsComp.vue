<template>
    <div class="settings-container">
        <v-icon icon="mdi-close-circle-outline"></v-icon>
        <section class="presets-cont flex gap-6 flex-wrap">
            <p>Change calculator buttons:</p>
            <div class="flex gap-6 flex-wrap">
                <button v-for="(list, key, index) in lists">
                    <div class="text-2xl pb-2"> {{ listsNames[index] }}</div>
                    <p class="text-xs"> {{ list }}</p>
                </button>
            </div>
        </section>
        <section class="buttons-modify">
            Customize current buttons :
            <div class="">
                <button>
                    <input type="text" name="" id="" v-for="(num, index) in lists[currrentList]"
                        v-model="lists[currrentList][index]"></button>
            </div>
        </section>
        <div class="action-buttons"></div>

    </div>
</template>
<script setup>
import { useSettingStore } from '~/store/settingStore';

const { lists, currrentList } = useSettingStore();

const listsNames = computed(() => {
    const regex = /([A-Z])/g;

    const names = Object.keys(lists).map((name) => {
        let nameWithSpace = name.replace(regex, " $1")
        return nameWithSpace.toLocaleLowerCase();
    });

    return names;
})
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
</style>