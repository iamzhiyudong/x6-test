import { Options as GraphOptions } from '@antv/x6/src/graph/options'

export const graphConfig: GraphOptions.Manual = {
  autoResize: true, // 画布自适应
  keyboard: true,
  clipboard: true,
  // 画布配置
  background: {
    color: '#F2F7FA'
  },
  // 对齐线
  snapline: true,
  // 网格线
  grid: {
    visible: true,
    type: 'doubleMesh',
    args: [
      {
        color: '#eee', // 主网格线颜色
        thickness: 1 // 主网格线宽度
      },
      {
        color: '#ddd', // 次网格线颜色
        thickness: 1, // 次网格线宽度
        factor: 4 // 主次网格线间隔
      }
    ]
  },
  mousewheel: {
    enabled: true,
    zoomAtMousePosition: true,
    modifiers: 'ctrl',
    minScale: 0.5,
    maxScale: 2.5
  },
  // 限制节点移动
  translating: {
    restrict: true
  },
  // 连线
  connecting: {
    // 自动吸附
    snap: {
      radius: 20
    },
    allowBlank: false,
    allowMulti: 'withPort',
    allowLoop: false,
    allowNode: false,
    allowEdge: false,
    // 路径绘制方式-自动避障
    router: {
      name: 'manhattan'
    },
    // 线的样式-圆滑
    connector: {
      name: 'normal'
    }
  },
  selecting: {
    enabled: true,
    rubberband: true, // 是否启用框选
    // 过滤不能选中的节点 true - 验证端 '0'
    filter(node) {
      return node.id !== '0'
    }
  },
  // 高亮显示所有可用的连接桩
  highlighting: {
    magnetAdsorbed: {
      name: 'stroke',
      args: {
        attrs: {
          stroke: '#5F95FF'
        }
      }
    }
  }
}
