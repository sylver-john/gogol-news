<template lang="pug">
    div(class="ui container")
        div(class="ui checkbox")
            input(type="checkbox")
            label 2
        div(class="ui checkbox")
            input(type="checkbox")
            label 5
        div(class="ui checkbox")
            input(type="checkbox")
            label 10
        div(class="ui checkbox")
            input(type="checkbox")
            label 20
</template>

<script>
export default {
  name: 'NumberChoice'
}
</script>
