<template lang="pug">
  div(class="ui main text container")
    div(class="ui huge header")
      p Headlines.
    div(role="list" class="ui divided relaxed list")
      div(role="listitem" class="item" v-for="headline in headlines")
        div(class="content")
        a(class="header" v-bind:href="headline.url" target="_blank" rel="nofollow") {{headline.title}}
</template>

<script>
export default {
  name: 'Headline',
  computed: {
    headlines () {
      return this.$store.getters.headlines
    }
  },
  mounted() {
    this.$store.dispatch('fetchHeadlines')
  }
}
</script>
