<script setup>
import webWorker from "../services/WebWorker"
import { ref } from "vue"

const
    _notes=ref([]),
    _note=ref({}),
    _selected=ref({})

loadNotes()


function saveNote(){
    if(_note.value.title && _note.value.text){
        webWorker
            .request("addNote", JSON.stringify(_note.value))
            .then(id=>{
                console.log(id)
                loadNotes()
            },err=>{
                console.log(err)
            })
            .finally(()=>{
                _note.value={}
            })
    }
}

function deleteNote(id){
    webWorker.request("deleteNote", {id}).finally(()=>{loadNotes()})
}

function openNote(note){
    _selected.value=note;
}

function loadNotes(){
    webWorker.request("getNotes",[])
        .then(data=>{
            _notes.value=data;
        },()=>{
            _notes.value=[]
        })
}
</script>

<template>
<div class="notes-container">
    <section>
        <h3>New note</h3>
        <input type="text" v-model="_note.title" placeholder="Title">
        <textarea v-model="_note.text" placeholder="Note text..."></textarea>
        <button @click="saveNote()">
            Save
        </button>
    </section>
    <section>
        <h3>Notes</h3>
        <div class="flex-container flex-justify" v-for="n in _notes" :key="n.id">
            <a @click="openNote(n)" class="flex-grow" :class="{'selected':n.id==_selected.id}">
                {{ n.title }}
            </a>
            <a @click="deleteNote(n.id)">[X]</a>
        </div>
    </section>

    <section>
        <h3>Selected note</h3>
        <div class="padded">
        <strong>{{ _selected.title }}</strong>
        <p>
            {{ _selected.text }}
        </p>
        </div>
    </section>
</div>    
</template>

<style scoped>
.notes-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--padding);
    border: 2px solid var(--gray);
} 

h3{
    background-color: var(--gray);
    padding: 4px;
    margin: 0;
}

section{
    padding: 4px;
}

a{
    cursor: pointer;
}

a:hover{
    font-weight: 900;
}

.selected{
    font-weight: 900;
    text-decoration: underline;
}

</style>