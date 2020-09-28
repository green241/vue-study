<template>
  <div id="testScope" class="example">{{testScopeContent}}</div>
</template>

<script>
export default {
  name: 'TestScope',
  props: {
    testScopeContent: ''
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .example {
    color: red!important;
  }
</style>
