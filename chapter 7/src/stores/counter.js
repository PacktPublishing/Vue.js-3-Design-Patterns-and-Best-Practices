// Using composition API

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', () => {
    const
        count = ref(0),
        in_range=ref(true),
        doubleCount = computed(() => {
            if(count.value>=0){
                in_range.value=true;
                return count.value *2;
            }else{
                in_range.value=false;
                return 0
            }
        })


    function increment() {
        count.value++
    }

    function decrement(){
        count.value--;
    }

    return { count, doubleCount, in_range, increment, decrement }
});

export {useCounterStore };