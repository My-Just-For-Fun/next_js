import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Zhao Wei Apache License 2.0 ⋅ 冀ICP备2021025109号-1
    </Box>
  )
}

export default Footer
