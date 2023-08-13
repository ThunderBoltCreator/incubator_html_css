import {useEffect} from 'react'
import {FC} from 'react'
import {useNavigate} from 'react-router-dom'

interface IAbout {
   className?: string
}

// @ts-ignore
export const About: FC<IAbout> = (props) => {


   const navigate = useNavigate()
   useEffect(() => {
      if (!true) navigate('/auth')
   })

   return (
      <div>About</div>
   )
}