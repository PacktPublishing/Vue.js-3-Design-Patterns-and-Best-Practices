/**
    A Vue 3 Composable for a simple application wide reactive state
 */

import { reactive } from "vue"

const
    state=reactive({ counter: 0 })

function useState(){
    return state;
}

export default useState;