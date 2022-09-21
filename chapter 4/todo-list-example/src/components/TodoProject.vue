<script setup>
import { ref, inject } from "vue"
import TodoItemForm from "./TodoItemForm.vue";
import TodoList from "./TodoList.vue";

const
    $modals = inject("$modals"),
    _item = ref({text:"1", status:"not_started"})

function showModal() {
    // Make a copy of the item
    $modals.show("myModal").then(() => {
        // Replace original with copy
    }, () => {
        // Handle cancellation
    })
}
</script>

<template>
    <div>
        <button @click="showModal()">Open item</button>
        {{_item}}
        <TodoList></TodoList>

        <!-- Modals -->
        <Modal name="myModal" title="To Do Item">
            <TodoItemForm v-model="_item"></TodoItemForm>
        </Modal>
    </div>
</template>

<style scoped>

</style>