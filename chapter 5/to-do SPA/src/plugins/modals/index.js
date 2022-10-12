/**
    Single Modal Plugin
    Created by Pablo D. Garaguso (2022)
    --------------------------------
    This example plugin shows the use of reactive, api declaration for dependency
    injection with provide/inject, the use of promises, and the registration of 
    global components into the Vue 3 application.

    Usage in main.js (Vue 3 application instanciation):
    --------------------------------

        import Modals from "/modals/index.js"
        ...
        App.use("$modals",Modals)

    In a component:
    --------------------------------
    [script setup]

        import {inject} from "vue"
        const $modals=inject("$modals")
        $modals.show("modalName").then(...)

    [template]

        <Modal name="modalName" title="Modal Title">
            ...
        </Modal>

 */
import { reactive } from "vue"
import Modal from "./Modal.vue"

const
    _current = reactive({
        name: "",
        resolve: null,
        reject: null
    }),
    api = {
        active() {
            return _current.name;
        },
        show(name) {
            _current.name = name;
            return new Promise((resolve = () => { }, reject = () => { }) => {
                _current.resolve = resolve;
                _current.reject = reject;
            })
        },
        accept() {
            _current.resolve();
            _current.name = ""
        },
        cancel() {
            _current.reject();
            _current.name = "";
        }
    },
    plugin = {
        install(App, options) {

            // Register global component
            App.component("Modal", Modal);

            // Provide API
            App.provide("$modals", api)
        }
    }

export default plugin;