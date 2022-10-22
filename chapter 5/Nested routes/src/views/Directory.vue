<script setup>
import locationService from "../services/locationService.js"

const countries=locationService.getCountries()

</script>

<template>
    <div class="wrapper">
        <section>
            <h4>Country directory</h4>
            <hr>
            <div class="country" v-for="c in countries" :key="c.code">
                <RouterLink :to="{name:'states', params:{country:c.code}}"
                    active-class="selected">
                    {{c.name}}
                </RouterLink>
            </div>
        </section>
        <RouterView></RouterView>
    </div>
</template>

<style scoped>
div.wrapper {
    display: grid;
    grid-template-columns: 18rem auto;
}

section {
    background-color: rgba(30, 30, 50, 0.2);
    padding: 1rem;
}

.country{
    padding: 0.6rem 0.2rem;
}
</style>