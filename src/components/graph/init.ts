import '@antv/x6-vue-shape'
import CustomNode from '@/components/graph/CustomNode.vue'
import { portGroupConfig } from './port'
import { Graph } from '@antv/x6'

const registerNode = () => {
  Graph.registerNode('vue-node', {
    inherit: 'vue-shape',
    width: 100,
    height: 100,
    component: CustomNode,
    ports: portGroupConfig
  })
}

export const init = () => {
  registerNode()
}
