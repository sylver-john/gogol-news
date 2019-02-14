<template lang="pug">
    div(class="ui container")
        div(class="ui checkbox")
            input(type="checkbox" @change="onChange('business', business)" v-model="business")
            label business
        div(class="ui checkbox")
            input(type="checkbox" @change="onChange('entertainment', entertainment)" v-model="entertainment")
            label entertainment
        div(class="ui checkbox")
            input(type="checkbox" @change="onChange('general', general)" v-model="general")
            label general
        div(class="ui checkbox")
            input(type="checkbox" @change="onChange('health', health)" v-model="health")
            label health
        div(class="ui checkbox")
            input(type="checkbox" @change="onChange('science', science)" v-model="science")
            label science
        div(class="ui checkbox")
            input(type="checkbox" @change="onChange('sports', sports)" v-model="sports")
            label sports
        div(class="ui checkbox")
            input(type="checkbox" @change="onChange('technology', technology)" v-model="technology")
            label technology
</template>

<script>
export default {
  name: 'CategoryChoice',
  data() {
    return {
        business: false,
        entertainment: false,
        general: false,
        health: false,
        science: false,
        sports: false,
        technology: false,
    }  
  },
  methods: {
    onChange (category, isChecked) {
        this.$store.commit('addCategory', {
            category: category,
            retrieve: isChecked
        })
        this.$store.dispatch('fetchHeadlines')
    }
  }
}
</script>
