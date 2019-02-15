<template lang='pug'>
  <div class="home">
    div(class="ui true fixed inverted menu")
      div(class="header item") Gogol-News
      div(class="rigth menu")
        div(class="item") Refresh
        div(class="item") Favorites
    div(class="ui two column centered divided grid")
      div(class="row")
        div(class="column")
          <Headline category="business" />
        div(class="column")
          <Headline category="health" />
      div(class="row")
        div(class="column")
          <Headline category="science" />
        div(class="column")
          <Headline category="technology" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Headline from '@/components/Headline.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Headline,
    Footer
  }
}
</script>
