import React, {useMemo} from 'react'
import emojiList  from '../../utils/emojis'
import Toogle from '../Toogle'

import {Container,Profile,Welcome,UserName} from './styles'

const MainHeader : React.FC = () => {

  

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojiList.length)
        return emojiList[indice]
    },[])




    return (
        <Container>
            
         <Toogle />

            <Profile>
                <Welcome>Ola, {emoji} </Welcome>
                <UserName>Renan Salmazio</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader