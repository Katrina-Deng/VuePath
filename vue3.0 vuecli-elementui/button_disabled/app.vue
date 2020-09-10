
<template>
  <div>
    Hello world
    <buttonClick @click="authorClick" :disabled="disabled">
      <template v-slot:buttonName>点击Slot</template>
    </buttonClick>
    <input type="checkbox" v-model="disabled" />
    是否禁用按钮
    {{disabled}}
    <!-- <button>点击</button> -->
  </div>
</template>

<script>
import buttonClick from "./buttonClick";
export default {
  data() {
    return {
      disabled: false,
    };
  },
  components: {
    buttonClick,
  },

  methods: {
    authorClick(val) {
      alert("你点击点击了一个按钮--" + val);
    },
  },
};
</script>

<style>
</style>