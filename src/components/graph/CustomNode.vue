<template>
  <div class="node">
    <SvgIcon name="host" size="50px" />
    <span class="label">主机</span>
  </div>
</template>

<script setup lang="ts">
  import SvgIcon from '@/components/svg-icon/SvgIcon.vue'
</script>

<style lang="less" scoped>
  .node {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #c2c8d5;
    border-radius: 4px;
    flex-wrap: nowrap;

    .label {
      display: inline-block;
      flex-shrink: 0;
      max-width: 50px;
      color: #555;
      font-size: 12px;
    }
  }

  .x6-node-selected {
    .node {
      border: 1px solid red;
    }
  }
</style>
