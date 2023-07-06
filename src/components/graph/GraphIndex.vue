<template>
  <div id="container"></div>
  <TeleportContainer />
</template>

<script lang="ts" setup>
  import { Graph } from '@antv/x6'
  import { onMounted } from 'vue'
  import { data } from './data'
  import { Snapline } from '@antv/x6-plugin-snapline'
  import { graphConfig } from './graph-config'
  import { getTeleport } from '@antv/x6-vue-shape'
  import { init } from './init'

  const TeleportContainer = getTeleport()

  onMounted(() => {
    init()

    const graph = new Graph({
      container: document.getElementById('container') as HTMLElement,
      ...graphConfig
    })

    // 对齐线
    graph.use(
      new Snapline({
        enabled: true
      })
    )

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
