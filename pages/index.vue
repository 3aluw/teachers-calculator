<template>
    <div class="global-container flex flex-col justify-between">
        <nav class="flex p-6">
            <div class="mode-switch"> <v-btn icon="mdi-theme-light-dark"></v-btn></div>
            <div class='nav-btns-cont'>
                <v-btn class="text-white mr-4" variant="flat" color="#52525B">How it works ?</v-btn>
                <v-btn icon="mdi-cog"></v-btn>
            </div>
        </nav>
        <section class="results-cont flex flex-col">
            <div class="operation-view">1+23+1</div>
            <p class="inputs-number">you have entered : 4 inputs</p>
            <p class="result">25</p>
        </section>
        <section class="btns-cont">
            <div class="op-btn">C</div>
            <div class="op-btn">Two</div>
            <button v-for="num in lists[currrentList]">{{ num }}</button>
        </section>
    </div>
</template>
<script setup>
import { useSettingStore } from '~/store/settingStore';

const { lists, currrentList } = useSettingStore();


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