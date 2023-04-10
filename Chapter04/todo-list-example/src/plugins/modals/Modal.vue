<script setup>
import { inject, computed } from "vue"
const
    $props = defineProps({
        name: { type: String, default: "" },
        title: { type: String, default: "Modal dialog" }
    }),
    $modals = inject("$modals"),
    _show = computed(() => {
        return $modals.active() == $props.name
    })

function closeModal(accept = false) {
    if (accept) {
        $modals.accept()
    } else {
        $modals.cancel()
    }
}
</script>

<template>
    <div class="viewport-wrapper " v-if="_show">
        <div class="dialog-wrapper w3-animate-top">
            <header class="w3-blue w3-padding">
                {{$props.title}}
            </header>
            <main class="w3-white w3-padding">
                <slot></slot>
            </main>
            <footer class="w3-right-align w3-blue w3-padding">
                <button class="w3-button " @click="closeModal(true)">
                    Accept
                </button>
                <button class="w3-button " @click="closeModal(false)">
                    Cancel
                </button>
            </footer>
        </div>
    </div>
</template>

<style scoped>
.viewport-wrapper {
    --shadow: rgba(0, 0, 0, 0.4);
    display: flex;
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--shadow);
    justify-content: center;
    align-items: center;
}

.dialog-wrapper {
    border: 1px solid rgba(0,0,0,0.2);
    box-shadow: 0 1rem 1rem var(--shadow);
}

header,
footer {
    padding: 4px;
    user-select: none;
}

main {
    min-height: 5rem;
    max-width: 40rem;
}
</style>