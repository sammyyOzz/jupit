import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'
 
interface ButtonProps {
  children: React.ReactNode;
  outlined?: boolean;
  bg?: 'primary' | 'secondary' | null;
  color?: string;
  fontWeight?: string;
  p?: string;
  handleClick?: () => void;
}

function Button({ children, outlined, bg, color, fontWeight, p, handleClick }: ButtonProps) {
  return (
    <ChakraButton 
      m="5px"
      border={outlined ? '1px solid #1C1C93' : '1px solid transparent'}
      bg={!bg ? 'none' : (bg === 'primary' ? 'primary' : 'secondary')}
      color={color ? color : 'black'}
      fontWeight={fontWeight ? fontWeight : 500}
      fontSize="18px"
      p={p || 30}
      onClick={handleClick}
    >
      { children }
    </ChakraButton>
  )
}

export default Button