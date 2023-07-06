export const data = {
  nodes: [
    {
      id: 'node1',
      shape: 'custom-vue-node',
      x: 0,
      y: 0,
      width: 90,
      height: 90,
      ports: {
        items: [
          {
            id: 'top',
            group: 'top',
          },
          {
            id: 'bottom',
            group: 'bottom',
          },
          {
            id: 'left',
            group: 'left',
          },
          {
            id: 'right',
            group: 'right',
          }
        ]
      }
    },
    {
      id: 'node2',
      shape: 'custom-vue-node',
      x: 160,
      y: 180,
      width: 90,
      height: 90
    }
  ],
  edges: [
    {
      shape: 'edge',
      source: 'node1',
      target: 'node2',
      label: 'x6',
      attrs: {
        // line 是选择器名称，选中的边的 path 元素
        line: {
          stroke: '#8f8f8f',
          strokeWidth: 1
        }
      }
    }
  ]
}
