const { extendTheme } = require('@chakra-ui/react')

const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  colors: {
    navBg: '#1D8DDE',
    breadcrumbsBg: '#212835',
    bodyBg: '#161B20',
    cardBodyBg: '#212835',
    cardHeaderBg: '#26303F',
    brand: {
      50: '#F7FEE7',
      100: '#ECFCCB',
      200: '#D9F99D',
      300: '#BEF264',
      400: '#A3E635',
      500: '#84CC16',
      600: '#65A30D',
      700: '#4D7C0F',
      800: '#3F6212',
      900: '#365314',
    },
  },
  styles: {
    global: {
      'body,html': {
        backgroundColor: 'bodyBg',
        color: 'gray.400',
      },
    },
  },
})

export default theme
