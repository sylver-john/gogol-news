<template lang="pug">
  div(class="ui container")
    <NumberChoice />
    <LangChoice />
    <CategoryChoice />
</template>

<script>
import NumberChoice from '@/components/NumberChoice.vue'
import LangChoice from '@/components/LangChoice.vue'
import CategoryChoice from '@/components/CategoryChoice.vue'

export default {
  name: 'Sidebar',
  components: {
    NumberChoice,
    LangChoice,
    CategoryChoice
  }
}
</script>
