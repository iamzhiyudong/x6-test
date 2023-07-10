import { generateNode } from './node'

export const data = {
  nodes: [generateNode('node1', 0, 0), generateNode('node2', 160, 180)],
  edges: [
    {
      shape: 'edge',
      source: { cell: 'node1', port: 'bottom' },
      target: { cell: 'node2', port: 'top' },
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
