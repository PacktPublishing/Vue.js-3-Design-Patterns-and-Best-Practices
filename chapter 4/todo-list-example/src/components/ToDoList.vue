<script setup>
import { computed } from "vue"
const
    $props = defineProps({
        "modelValue": { type: Array, default: () => [] },
        "filter": { type: String, default: "" }
    }),
    $emit = defineEmits(["edit", "delete","toggle"]),
    _filtered_list = computed(() => {
        if ($props.filter) {
            return $props.modelValue.filter(item => {
                return item.text.toUpperCase().includes($props.filter.toUpperCase())
            })
        } else {
            return $props.modelValue;
        }
    })

function emitEvent(event_name, payload) {
    $emit(event_name, payload)
}
</script>

<template>
    <div>
        <table class="w3-table">
            <thead>
                <tr class="w3-bottombar w3-topbar">
                    <th>Status</th>
                    <th>Item</th>
                    <th class="w3-right-align">
                        <slot></slot>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in _filtered_list" :key="item.id">
                    <td class="clickable w3-hover-pale-blue " @click="emitEvent('toggle', item)">
                        <i class="fa-solid fa-2x fa-square w3-text-light-gray" v-if="item.status=='not_started'"></i>
                        <i class="fa-solid fa-2x fa-square-minus w3-text-teal" v-if="item.status=='in_progress'"></i>
                        <i class="fa-solid fa-2x fa-square-check w3-text-green" v-if="item.status=='completed'"></i>
                    </td>
                    <td>{{item.text}}</td>
                    <td class="w3-right-align">
                        <span class="clickable w3-transparent w3-text-indigo w3-hover-text-blue w3-hover-white w3-margin-right"
                            @click="emitEvent('edit',item)">
                            <i class="fa-solid fa-pen-to-square"></i>
                            Edit
                        </span>
                        
                        <span class="clickable w3-transparent w3-text-purple w3-hover-text-red w3-hover-white"
                            @click="emitEvent('delete',item)">
                            <i class="fa-solid fa-trash-can"></i>
                            Delete
                        </span>
                    </td>
                </tr>
                <tr v-if="_filtered_list.length==0">
                    <td><i class="fa-solid fa-square w3-text-light-gray"></i></td>
                    <td>The list is empty.</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
td:first-child{
    width: 5rem;
}
</style>