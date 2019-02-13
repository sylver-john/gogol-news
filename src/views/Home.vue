<template>
  <div class="home">
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
