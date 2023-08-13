import {css} from 'styled-components'
import styled from 'styled-components'

interface INavigationStyled {
   amount: number
}

const NavigationStyled = styled.header<INavigationStyled>`
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #2951a2;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;

  ul {
    display: flex;
    width: 100%;
    list-style: none;
    gap: 25px;
  }

  a {
    color: #d0dfe3;
    text-decoration: none;
    font-size: 1.5rem;
  }

  ${props => props.amount > 3 && css`
    ul {
      gap: 15px;
      justify-content: space-between;
    }
  `}
`

export {NavigationStyled}