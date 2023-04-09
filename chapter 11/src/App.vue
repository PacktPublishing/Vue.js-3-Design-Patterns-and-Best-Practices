<script setup>
import Toggle from "./components/Toggle.vue"
import Spinner from "./components/Spinner.vue"
import InfiniteScroller from "./components/InfiniteScroller.vue";
import {ref} from "vue"

const
    _feature_enabled=ref(true)

</script>

<template>
<div>
    <h1>Chapter 9 - UI and UX patterns</h1>
    <h2>Examples</h2>
    <section>
        <h3>Toggle switch</h3>
        <Toggle v-model="_feature_enabled"></Toggle>
        <span> Value read: {{ _feature_enabled }}</span>
    </section>

    <section>
        <h3>A spinner with text</h3>
        <Spinner caption="System working..."></Spinner>
    </section>

    <section>
        <h3>An infinite scroller</h3>
        <div class="limit-viewport">
            <InfiniteScroller></InfiniteScroller>
        </div>
    </section>
    
</div>
</template>

<style scoped>
.limit-viewport{
    padding: 1rem;
    overflow: hidden auto;
    max-height: 5rem;
    border: 1px solid #ccc;
}
</style>
