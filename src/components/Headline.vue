<template lang="pug">
  div(class="ui main text container")
    div(class="ui huge header")
      h2 {{this.category}}
    div(role="list" class="ui divided relaxed list")
      div(role="listitem" class="item" v-for="headline in headlines")
        div(class="content")
          div(class="ui two column centered divided grid")
          div(class="row")
            div(class="ten wide column")
              a(class="header" v-bind:href="headline.url" target="_blank" rel="nofollow") {{headline.title}}
            div(class="six wide column")
              button(class="ui button") Fav
</template>

<script>
export default {
  name: 'Headline',
  computed: {
    headlines () {
      return this.$store.getters.headlines[this.category]
    }
  },
  props: {
    category: String
  },
  mounted() {
    this.$store.dispatch('fetchHeadlines', this.category)
  }
}
</script>
