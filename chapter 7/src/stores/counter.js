// Using composition API

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', () => {
    const
        count = ref(0),
        in_range=ref(true)

    const
        doubleCount = computed(() => {
            if(count.value>=0){
                return count.value *2;
            }else{
                return 0
            }
        }),
        inRange = computed(()=>{
            return count.value>=0;
        })


    function increment() {
        count.value++
    }

    function decrement(){
        count.value--;
    }

    return { count, doubleCount, inRange, increment, decrement }
});

export {useCounterStore };