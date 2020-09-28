<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <TestScope :testScopeContent="scopeTest"></TestScope>
  </div>
</template>

<script>
import TestScope from '@comps/test/TestScope'
export default {
  name: 'HelloWorld',
  components: {TestScope},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App !',
      scopeTest: '测试scope的作用范围噢！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*.hello /deep/ .example {*/
  /*  color: blue;*/
  /*}*/
  .hello >>> .example {
    color: blue!important;
  }
</style>
