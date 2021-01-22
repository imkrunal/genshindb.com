export const getElementColor = (element) => {
  switch (element) {
    case 'Geo':
      return '#ffe699'
    case 'Cryo':
      return '#99ffff'
    case 'Pyro':
      return '#ff9999'
    case 'Hydro':
      return '#80c0ff'
    case 'Electro':
      return '#ffacff'
    case 'Anemo':
      return '#80ffd7'
    default:
      return 'gray.300'
  }
}
