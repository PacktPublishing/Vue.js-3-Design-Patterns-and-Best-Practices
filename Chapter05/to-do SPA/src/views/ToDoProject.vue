<script setup>
import { ref, inject, onMounted, watch } from "vue"
import { useRouter } from "vue-router"
import TodoItemForm from "../components/ToDos/ToDoItemForm.vue";
import TodoList from "../components/ToDos/ToDoList.vue";
import TodoFilter from "../components/ToDos/ToDoFilter.vue";
import TodoSummary from "../components/ToDos/ToDoSummary.vue"
import todoService from "../services/todo";
import eventBus from "../services/eventBus"


const
    $props=defineProps(["id"]),
    $modals = inject("$modals"),
    $router=useRouter(),
    _filter = ref(""),
    _item = ref(todoService.getDefault()),
    _items = ref([]),
    _project_name=ref("")

// First time mounted
onMounted(loadProject)

// Watch for future changes
watch(()=>$props.id, loadProject)


// Shows a modal to create or edit a to-do item
function showModal(new_item = true, item = {}) {

    if (new_item) {
        // Prepare a new item
        _item.value = todoService.getDefault()
    } else {
        // Make a copy of the item for editing
        _item.value = todoService.makeCopy(item);
    }

    // Open the modal
    $modals.show("newEditItem").then(() => {
        if (new_item) {
            // Add to the list
            _items.value.push(_item.value)
        } else {
            // Replace item
            let index = getIndex(item);
            if (index >= 0) {
                _items.value[index] = _item.value
            } else {
                alert("Error updating the item")
            }
        }
        saveProject()
    }, () => {
        // Handle cancellation, in this case, just ignore.
    })
}

function deleteItem(item) {
    $modals.show("deleteItem").then(() => {
        let index = getIndex(item);
        if (index >= 0) {
            _items.value.splice(index, 1)
            saveProject()
        }
    }, () => { })
}

// Auxiliar function 
function getIndex(item) {
    let index = _items.value.findIndex(it => {
        return it.id == item.id
    })
    if (index == -1) {
        return false
    } else {
        return index
    }
}

function toggleStatus(item){
    item.status=todoService.toggleStatus(item.status)
    saveProject()
}

// Deletes the entire project and triggers a system-wide update event
function deleteProject(){
    $modals.show("deleteProject").then(()=>{
        // delete project
        todoService.deleteProject($props.id)
        eventBus.emit("#UpdateProjects")
        $router.push({name:"landing"})
    },()=>{})
}

// Chapter 5
function loadProject(){
    // Project name
    _project_name.value=todoService.getProjectName($props.id)

    // Items
    _items.value=todoService.loadProject($props.id)
}

function saveProject(){
    todoService.saveProject($props.id, _items.value)
}
</script>

<template>
    <div class="project-container">

        <!-- Project name -->
        <div class="header-container">
            <h1>{{_project_name}}</h1>
            <button @click="deleteProject()">Delete project</button>
        </div>


        <!-- Summary -->
        <TodoSummary :items="_items" class="w3-margin-bottom"></TodoSummary>

        <!-- Filter bar -->        
        <div class="w3-margin-bottom">
            <TodoFilter v-model="_filter" class="flex-grow"></TodoFilter>
        </div>

        <!-- Todo list -->
        <TodoList 
            v-model="_items" 
            :filter="_filter" 
            @toggle="toggleStatus"
            @edit="showModal(false, $event)" 
            @delete="deleteItem">
            <button @click="showModal(true)" class="w3-button w3-blue w3-round-xxlarge">
                <i class="fa-solid fa-square-plus"></i>
                New item
            </button>
        </TodoList>

        <!-- Modals -->
        <Modal name="newEditItem" title="To Do Item">
            <TodoItemForm v-model="_item"></TodoItemForm>
        </Modal>

        <Modal name="deleteItem" title="Delete To-Do Item">
            <p>
                This action will delete the item:<br>
                <strong>{{_item.text}}</strong>
            </p>
            <p class="w3-text-red w3-pale-red">
                This action cannot be undone.
            </p>
        </Modal>

        <Modal name="deleteProject" title="Delete the Project">
            <h3>Attention</h3>
            <p class="w3-pale-red w3-text-red w3-padding">This action cannot be undone. Please confirm.</p>
        </Modal>
    </div>
</template>

<style scoped>
.header-container{
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
}
.project-container {
    max-width: 56rem;
    padding: 1rem;
    margin: 0 auto;
}
</style>