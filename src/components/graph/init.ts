import { register } from '@antv/x6-vue-shape'
import CustomNode from '@/components/graph/CustomNode.vue'
import { portGroupConfig } from './port'

const registerNode = () => {
  register({
    shape: 'custom-vue-node',
    width: 100,
    height: 100,
    component: CustomNode,
    ports: portGroupConfig
  })
}

export const init = () => {
  registerNode()
}
