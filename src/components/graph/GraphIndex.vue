<template>
  <div id="container"></div>
</template>

<script lang="ts" setup>
import { Graph } from '@antv/x6'
import { onMounted } from 'vue'
import { data } from './data';

onMounted(() => {
  const graph = new Graph({
    container: document.getElementById('container') as HTMLElement,
    width: 1000,
    height: 500,
    background: {
      color: '#F2F7FA'
    }
  })

  graph.fromJSON(data)
})
</script>

<style lang="less" scoped></style>
