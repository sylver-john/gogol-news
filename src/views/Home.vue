<template lang='pug'>
  <div class="home">
    div(class="ui true fixed inverted menu")
      div(class="ui container")
          div(class="item") How many
          div(class="item") From
          div(class="item") Kind
    <Sidebar />
    <Headline />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import Headline from '@/components/Headline.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Sidebar,
    Headline,
    Footer
  }
}
</script>
