import {css} from 'styled-components'
import styled from 'styled-components'

interface IBorder {
   width: string
   borderType: 'solid' | 'dotted' | 'dashed'
   color: string
}

interface IButtonStyled {
   color?: string
   bgColor?: string
   myBorder?: IBorder
}

const ButtonStyled = styled.button<IButtonStyled>`
  border-radius: 5px;
  padding: 5px 20px;
  color: ${props => props.color || '#000'};
  background-color: ${props => props.bgColor || 'transparent'};
  font-size: 10px;
  font-weight: 700;
  line-height: 2;
  outline: none;

  ${props => props.myBorder ? css<IButtonStyled>`
    border: ${props => props?.myBorder?.width} ${props => props?.myBorder?.borderType} ${props => props?.myBorder?.color}
  ` : css`
    border: none;
  `
  }
`

export {ButtonStyled}