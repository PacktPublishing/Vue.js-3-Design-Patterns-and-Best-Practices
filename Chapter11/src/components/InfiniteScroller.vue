<script setup>
import { ref, onMounted } from "vue"
const
    _max_value = ref(30),
    _scroll_watcher = ref(null),
    observer = new IntersectionObserver(triggerEvent)

onMounted(() => {
    observer.observe(_scroll_watcher.value)
})

function triggerEvent() {
    _max_value.value += 20;
}

</script>

<template>
    <div>
        <div v-for="elem in _max_value" :key="elem">
            item {{ elem }}
        </div>
        <div ref="_scroll_watcher"></div>
    </div>
</template>

<style scoped>

</style>