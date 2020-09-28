<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--测试scope返范围-->
    <TestScope :testScopeContent="scopeTest"></TestScope>
    <!--引入vux组件&&lodash库-->
    <TestInput ></TestInput>
  </div>
</template>

<script>
import TestScope from '@test/TestScope'
import TestInput from '@test/TestInput'
export default {
  name: 'HelloWorld',
  components: {TestScope, TestInput},
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
