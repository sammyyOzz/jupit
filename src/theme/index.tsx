import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    primary: '#1C1C93',
    secondary: '#F2921D',
    dark: '#3D3D3D'
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`
  }
})

export default theme