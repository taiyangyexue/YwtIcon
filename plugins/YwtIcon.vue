<template>
  <div class="icon">
    <svg class="por-icon" aria-hidden="true" :style="{color:color,width: width + 'px',height: height + 'px'}">
      <use :xlink:href="'#'+icon" ></use>
    </svg>
  </div>
</template>
<script lang="ts">
import "./iconfont";
/* 当前文件路径: src/components/my-component.vue */
import { defineComponent } from "vue";

export default defineComponent({
  name: "YwtIcon",
  props: {
    icon: {
      type: String,
      require: true, // 设置必传
    },
    color:{
      type:String,
      default:'#000'
    },
    width:{
      type:String,
      default:30
    },
    height:{
      type:String,
      default:30
    }
  },
});
</script>
<style>
.por-icon {
  width: 30px;
  height: 30px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>