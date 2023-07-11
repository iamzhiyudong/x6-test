<template>
  <div id="container"></div>
</template>

<script lang="ts" setup>
  import { Graph } from '@antv/x6'
  import { onMounted } from 'vue'
  import { data } from './data'
  import { graphConfig } from './graph'
  import { init } from './init'

  onMounted(() => {
    init()

    const graph = new Graph({
      container: document.getElementById('container') as HTMLElement,
      ...graphConfig
    })

    graph.fromJSON(data)
    graph.centerContent()
  })
</script>

<style lang="less" scoped>
  #container {
    width: 100%;
    height: 100%;
  }
</style>
./graph
