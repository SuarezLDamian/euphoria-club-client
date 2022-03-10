import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    euphoria: {
        100: '#8364e8',
        200: '#d397fa',
        300: '#8752a3',
        400: '#d66fee',
        500: '#6d51a5',
    },
  },
  fonts: {
    heading: "Lexend, sans-serif",
    body: "Open Sans, sans-serif",
  },
})

export default theme;