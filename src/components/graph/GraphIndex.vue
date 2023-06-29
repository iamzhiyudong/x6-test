<template>
  <div id="container"></div>
</template>

<script lang="ts" setup>
  import { Graph } from '@antv/x6'
  import { onMounted } from 'vue'
  import { data } from './data'
  import { Snapline } from '@antv/x6-plugin-snapline'

  onMounted(() => {
    const graph = new Graph({
      container: document.getElementById('container') as HTMLElement,
      autoResize: true,
      background: {
        color: '#F2F7FA'
      }
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

<style lang="less" scoped></style>
