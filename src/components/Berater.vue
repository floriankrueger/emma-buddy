<template>
    <div class="container-fluid" id="berater">
        <h1>Berater</h1>
        <div v-for="buddy in buddies" :key="buddy.bid">
            <h2>{{ buddy.name }}</h2>
            <p>{{ buddy.standort }}</p>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'Berater',
    computed: {
        ...mapState(['buddies'])
    }
}
</script>
