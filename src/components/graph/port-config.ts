type PortPosition = 'left' | 'right' | 'top' | 'bottom'

const generatePortConfig = (position: PortPosition) => {
  return {
    position: position,
    attrs: {
      circle: {
        r: 5,
        magnet: true,
        stroke: '#5F95FF',
        strokeWidth: 1,
        fill: '#fff',
        style: {
          visibility: 'hidden'
        }
      }
    }
  }
}

export const portGroupConfig = {
  groups: {
    top: generatePortConfig('top'),
    bottom: generatePortConfig('bottom'),
    left: generatePortConfig('left'),
    right: generatePortConfig('right'),
  }
}
