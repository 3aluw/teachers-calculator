<template>
    <div class="global-container flex flex-col justify-between">
        <nav class="flex p-6">
            <div class="mode-switch"> <v-btn icon="mdi-theme-light-dark"></v-btn></div>
            <div class='nav-btns-cont'>
                <v-btn class="text-white mr-4" variant="flat" color="#52525B">How it works ?</v-btn>

                <v-dialog v-model="dialog" width="auto">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" icon="mdi-cog">
                        </v-btn>
                    </template>

                    <v-card>
                        <v-card-text>

                            <settings-comp></settings-comp>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </nav>
        <section class="results-cont flex flex-col">
            <div class="operation-view"> {{ currentOperation.value }}</div>
            <p class="inputs-number">you have entered : {{ inputsNumber }} inputs</p>
            <p class="result">{{ result }}</p>
        </section>
        <section class="btns-cont">
            <button class="op-btn" @click="addedNumbers.splice(0, addedNumbers.length)">C</button>
            <button class="op-btn" @click="addedNumbers.pop()"><v-icon icon="mdi-backspace-outline"></v-icon></button>
            <button v-for="num in settingsStore.usedList" @click="addedNumbers.push(num)">{{ num
            }}</button>

        </section>
    </div>
</template>
<script setup>
import { useSettingStore } from '~/store/settingStore';
const settingsStore = useSettingStore();
const addedNumbers = ref([]);

//a function that transforms the array to a mathematical operation
const currentOperation = computed(() => {
    let str = ref('')
    addedNumbers.value.forEach((cur, i) => {
        i === 0 ? str.value = `${cur}` : Math.sign(cur) !== -1 ? str.value += `+${cur}` : str.value += `${cur}`
    })
    return str
})
//calculate the result and number of inputs
const inputsNumber = computed(() => addedNumbers.value.length)
const result = computed(() => addedNumbers.value.reduce((acc, cur) => { return acc += cur }, 0))

//settings handling
const dialog = ref(false)

</script>
<style>
.global-container {
    min-height: 100vh;
    padding-bottom: 2rem;
    background: #17171C;
    color: white;
}

.mode-switch,
.nav-btns-cont {
    margin-left: auto;
}

section {
    margin-inline: 1.2rem;
}

/*section 1 */
.operation-view {
    padding-bottom: 7rem;
    font-family: 'Work Sans';
    font-style: normal;
    font-size: 1.4rem;
    opacity: 0.8;
    font-family: 'Work Sans';
}

.inputs-number {
    text-align: center;
    font-size: 1.3rem;
    opacity: 0.8;
    font-family: 'Work Sans';
}

.result {
    margin-left: auto;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 2.6rem;
}


/*sction2 */
.btns-cont {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 1rem;
    grid-column-gap: 0.5rem;
}

.btns-cont>* {
    display: flex;
    min-height: 3rem;
    border-radius: 24px;
    align-items: center;
    justify-content: center;
    background: #2E2F38;

}

.op-btn {
    grid-column: span 2;
    background: rgba(252, 75, 75, 1);

}
</style>