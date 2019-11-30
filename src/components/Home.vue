<template>
  <div>
        <h1 class="display-2 font-weight-light mb-4">Negotiate and consult your stocks.</h1>
        <v-sheet :elevation="6" class="pa-2" color="primary">
            <v-icon class="white--text mr-2">info</v-icon>
            <span class="headline white--text font-weight-light">
                You can save and load data.
            </span>
        </v-sheet>
        <v-sheet :elevation="6" class="pa-2 mt-3" color="success darken-1">
            <v-icon class="white--text mr-2">info</v-icon>
            <span class="headline white--text font-weight-light">
                Click 'End Day' to generate new random values.
            </span>
        </v-sheet>
        <v-divider class="my-4"></v-divider>
        <p class="display-1"><strong>Your funds:</strong> {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    }
}
</script>

<style>

</style>