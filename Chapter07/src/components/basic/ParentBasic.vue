<script setup>
import { ref } from "vue"
import ChildComponent from "./Child.vue"

const
    _counter = ref(0)

function incrementCounter() {
    _counter.value++;
}
</script>

<template>
    <div>
        <p>
            In this example, the parent and the children share a state using <strong>$props</strong> and
            <strong>$emits</strong>
        </p>
        <p>
            The state is maintained by the parent component.
        </p>

        <section class="container padding">

            <h3>Parent Component</h3>
            <div class="parent semi-padding">
                <div>
                <strong>Counter </strong>
                <span class="badge">{{ _counter }}</span>
                </div>
                <button @click="incrementCounter()">Increment</button>
            </div>

            <section class="children">
                <ChildComponent title="Child component 1" :counter="_counter" @increment="incrementCounter()"></ChildComponent>
                <ChildComponent title="Child component 2" :counter="_counter" @increment="incrementCounter()"></ChildComponent>
                <ChildComponent title="Child component 3" :counter="_counter" @increment="incrementCounter()"></ChildComponent>
            </section>
        </section>

    </div>
</template>

<style scoped>
.container {
    background-color: #eee;

}

.parent{
    display: flex;
    align-items: center;
    gap: var(--padding);
}

.children {
    display: flex;
    gap: var(--padding);

}



span{
    color: red;
}
</style>