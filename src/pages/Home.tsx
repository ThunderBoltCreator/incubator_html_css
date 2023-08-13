import {FC} from 'react'


interface IHome {
   className?: string
}

export const Home: FC<IHome> = (props) => {
   return <div style={{color: '#FFF', fontSize: '24px'}}>Home</div>
}