<template>
  <div id="testInput" style="display:flex;flex-direction: column; width: 25rem; margin:auto; ">
    <group label-align="left" >
      <x-input :required="true" label-width="3.5rem" title="爱好" v-model="inputVal" placeholder="请输入爱好" ></x-input>
    </group>
    <Divider>分割线</Divider>
    <group title="验证码">
      <x-input title="验证码">
        <img slot="right-full-height" src="@assets/yzm.jpg">
      </x-input>
      <x-input title="发送验证码" class="weui-vcode">
        <x-button slot="right" type="primary" mini>发送验证码</x-button>
      </x-input>
    </group>
  </div>
</template>

<script>
import { XInput, Group, XButton, Divider } from 'vux'
// lodash 参考 https://www.lodashjs.com/
import _ from 'lodash'

export default {
  name: 'TestInput',
  components: { XInput, Group, XButton, Divider },
  watch: {
    inputVal: function (curVal) {
      this.inputValArr.push(curVal)
      _.forEach(this.inputValArr, item => {
        console.log(item)
      })
    },
    inputValArr: function (curVal) {
    }
  },
  data () {
    return {
      inputVal: '',
      inputValArr: []
    }
  }
}
</script>

<style scoped>
  .vux-x-input-right-full img {
    width: 6.0rem;
    height: inherit;
  }
</style>
