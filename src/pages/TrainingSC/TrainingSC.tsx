import {FC} from 'react'
import {ButtonStyled} from './ui/Button.styled'
import {ButtonsBoxStyled} from './ui/ButtonsBox.styled'
import {CardStyled} from './ui/Card.styled'
import {CardBodyStyled} from './ui/CardBody.styled'
import {ImageBoxStyled} from './ui/ImageBox.styled'

import CardImage from '../../assets/StyledComponents/CardImage.jpg'

interface ITrainingSc {
}

export const TrainingSc: FC<ITrainingSc> = (props) => {
   return (
      <CardStyled>
         <ImageBoxStyled>
            <img src={CardImage} alt={'image'}/>
         </ImageBoxStyled>
         <CardBodyStyled>
            <h3>Headline</h3>
            <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
            <ButtonsBoxStyled>
               <ButtonStyled
                  color={'#FFFFFF'}
                  bgColor={'#4E71FE'}
               >
                  See more
               </ButtonStyled>
               <ButtonStyled
                  color={'#4E71FE'}
                  bgColor={'#FFFFFF'}
                  myBorder={{
                     color: '#4E71FE',
                     borderType: 'solid',
                     width: '2px'
                  }}
               >
                  Save
               </ButtonStyled>
            </ButtonsBoxStyled>
         </CardBodyStyled>
      </CardStyled>
   )
}