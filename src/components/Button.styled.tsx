import {css} from 'styled-components'
import styled from 'styled-components'
import {Rotate} from '../styles/animations/Animations'
import {myTheme} from '../styles/myTheme'

interface IButtonProps {
   color?: string
   fontSize?: string
   borderColor?: string
   outlined?: boolean
}

const StyledBtn = styled.button<IButtonProps>`
  border: none;
  background-color: #c16868;
  padding: 10px 20px;
  border-radius: 5px;
    //color: ${({color}) => color || 'red'};
  color: ${myTheme.color.gray.light};
  font-size: ${({fontSize}) => fontSize || '2rem'};
  font-weight: 700;
  transition: .3s ease;
  //cursor: pointer;

  &:hover {
    background-color: #4f29ba;
  }

  &:last-child {
    &:hover {
      background-color: #38ab2c;
    }
  }

  // outlined
  ${props => props.outlined && css<IButtonProps>`
    border: 1px solid ${props => props.borderColor || 'black'};
    background-color: transparent;
  `} //primary
`

const SuperButton = styled(StyledBtn)`
  border-radius: 5px;

  animation: ${Rotate} 2s ease;
`

export {SuperButton, StyledBtn}