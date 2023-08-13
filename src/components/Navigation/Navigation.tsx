import {FC} from 'react'
import {Link} from 'react-router-dom'
import {NavigationStyled} from './Navigation.styled'

interface INavigation {
   titles: IListItem[]
}

export interface IListItem {
   title: string
   path: string
}

export const Navigation: FC<INavigation> = (props) => {
   const {titles} = props

   const renderedListItem = () => titles.map(({title, path}) => (
      <li key={path}>
         <Link to={path}>{title}</Link>
      </li>
   ))

   return <NavigationStyled amount={titles.length}>
      <ul>
         {renderedListItem()}
      </ul>
   </NavigationStyled>
}