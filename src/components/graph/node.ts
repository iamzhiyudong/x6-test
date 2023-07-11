import { defaultNodePortItems } from './port'

export const generateNode = (nodeId: string, x: number, y: number) => {
  return {
    id: nodeId,
    shape: 'vue-node',
    x,
    y,
    width: 90,
    height: 90,
    data: {},
    ports: { ...defaultNodePortItems }
  }
}
