import { defaultNodePortItems } from "./port"

export const generateNode = (nodeId: string, x: number, y: number) => {
  return {
    id: nodeId,
    shape: 'custom-vue-node',
    x,
    y,
    width: 90,
    height: 90,
    ports: { ...defaultNodePortItems }
  }
}
