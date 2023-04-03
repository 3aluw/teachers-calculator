<template>
    <div class="global-container">
        <nav class="flex p-6">
            <div class="mode-switch"> <v-btn icon="mdi-theme-light-dark"></v-btn></div>
            <div class='nav-btns-cont'>
                <v-btn class="text-white mr-4" variant="flat" color="#52525B">How it works ?</v-btn>
                <v-btn icon="mdi-cog"></v-btn>
            </div>
        </nav>
        <div class="results-cont">
            <div class="operation-view">1+23+1</div>
            <p class="inputs-number">you have entered : 4 inputs</p>
            <p class="result">25</p>
        </div>
        <div class="btns-cont">
            <div class="op-btn">One</div>
            <div class="op-btn">Two</div>
            <div>Three</div>
            <div>Four</div>
            <div>Five</div>
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
            <div>Four</div>
            <div>Five</div>
            <div>Five</div>
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
            <div>Four</div>
            <div>Five</div>
            <div>Four</div>
            <div>Five</div>
        </div>
    </div>
</template>
<style>
.mode-switch,
.nav-btns-cont {
    margin-left: auto;
}

.btns-cont {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.btns-cont>* {
    text-align: center;
}

.op-btn {
    grid-column: span 2;
}
</style>