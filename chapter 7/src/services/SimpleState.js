/**
    A Vue 3 Composable for a simple application wide reactive state
 */

import { reactive } from "vue"

const
    _state=reactive({ counter: 0 })

function useState(){
    return _state;
}

export default useState;