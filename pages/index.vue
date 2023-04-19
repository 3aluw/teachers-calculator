<template>
    <div class="global-container flex flex-col justify-between" :class="{ light: settingsStore.lightMode }">

        <nav class="flex p-6">
            <div class="mode-switch"> <v-btn icon="mdi-theme-light-dark"
                    @click="settingsStore.lightMode = !settingsStore.lightMode"></v-btn>
            </div>
            <div class='nav-btns-cont'>

                <v-dialog v-model="howItWorks" width="auto" class="max-w-3xl ">
                    <template v-slot:activator="{ props }">
                        <v-btn class="text-white mr-4" variant="flat" color="#52525B" v-bind="props">How it works ?</v-btn>
                    </template>

                    <v-card :class="{ lightDialog: settingsStore.lightMode }">
                        <v-card-text>
                            <p class="text-2xl">What is this ? </p>
                            <p class="pl-4">If you are a teacher calculating grades, an accountant managing finances, or a
                                budget manager
                                keeping track of expenses, you may need a fast and efficient method for addition
                                calculations. This tool is designed to assist you in that regard.</p>
                            <p class="text-2xl pt-8">How can i customize the keyboard ? </p>
                            <p class="pl-4">You can do so by clicking on the setting button (on the top right of your
                                screen), then you
                                will be able to select an pre-designed sets of keywords. more than that you can customize
                                the individuals keys to meet your needs.</p>
                            <p class="text-2xl pt-8">who created this app ? </p>
                            <p class="pl-4">A solo developper/teacher created this app and it is inspired by <a
                                    class="text-red-400"
                                    href="https://play.google.com/store/apps/details?id=club.fikra.teacherscalculator&hl=en_US">this
                                    app</a> if you enjoyed using it and would like to support me, you can do so by clicking
                                the button below:</p>
                        </v-card-text>
                        <v-card-actions class="justify-evenly">
                            <v-btn variant="tonal" @click="howItWorks = false">Done</v-btn>
                            <v-btn variant="tonal" color="teal-accent-4">support me</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>



                <v-dialog v-model="dialog" width="auto" class="max-w-4xl">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" icon="mdi-cog">
                        </v-btn>
                    </template>

                    <v-card :class="{ lightDialog: settingsStore.lightMode }">
                        <v-card-text>

                            <settings-comp></settings-comp>
                        </v-card-text>
                        <v-card-actions class="justify-evenly">
                            <v-btn variant="tonal" color="teal-accent-4" @click="applyChanges">Apply</v-btn>
                            <v-btn variant="tonal" color="red-accent-4" @click="resetDefault">reset default</v-btn>

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
            <button v-for="(num, index) in settingsStore.usedList" @click="addedNumbers.push(num)"
                :class="{ blueBtn: (index + 1) % 4 == 0 }">{{ num
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

//dialog logic
//show settings dialog ?
const dialog = ref(false)

//close dialog and apply changes
const applyChanges = () => {
    dialog.value = false;
    addedNumbers.value = []
}

const resetDefault = () => {
    dialog.value = false;
    settingsStore.$reset();
    //reset addedNumbers 
    addedNumbers.value = []
}


//How it works dialog
const howItWorks = ref(false)

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

/*settings dialog*/
.v-card {
    background: #2E2F38;
    color: white;
}

.lightDialog {
    background: #F7F8F4;
    color: black;
}

/*section 1 */
.operation-view {
    padding-bottom: 7rem;
    font-family: 'Work Sans';
    font-style: normal;
    font-size: 1.4rem;
    opacity: 0.8;
    font-family: 'Work Sans';
    height: 1.4rem;
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

.blueBtn {
    background: #4B5EFC;
}

/*light mode */
.light {
    background: #F1F2F3;
    color: #17171C;
}



.light .btns-cont>*:not(.op-btn, .blueBtn) {
    background: white;
    color: black;
}

.light .btns-cont>.op-btn,
.light .blueBtn {
    color: white;
}
</style>