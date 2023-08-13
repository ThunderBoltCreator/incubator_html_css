import {useState} from 'react'
import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import {Link} from './components/Link.styled'
import styled from 'styled-components'
import {IListItem} from './components/Navigation/Navigation'
import {Navigation} from './components/Navigation/Navigation'
import {About} from './pages/About'
import {Home} from './pages/Home'
import {NotFoundPage} from './pages/NotFoundPage'
import {TrainingSc} from './pages/TrainingSC/TrainingSC'


function App() {
   const [titles, setTitles] = useState<IListItem[]>([
      {
         title: 'Home',
         path: '/'
      },
      {
         title: 'Styled Components',
         path: '/html_css'
      }
   ])

   return (
      <Box>
         <Navigation titles={titles}/>
         <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/html_css'} element={<TrainingSc/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
         </Routes>
      </Box>
   )
}

export default App

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 100vh;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }
`
