import React from 'react'
import { 
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
 } from "react-icons/md";

import {    
Container,
Header,
LogImg,
Title,
MenuContainer,
MenuItemLink
} from './styles'
import logoImg from '../../assets/logo.svg'


const Aside : React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt={'Logo meu app'} />
                <Title>Meu APP</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href='#'>
                  < MdDashboard />  Dashboard
                </MenuItemLink>
                <MenuItemLink href='#'>
                < MdArrowUpward />    Entradas 
                </MenuItemLink>
                <MenuItemLink href='#'>
                < MdArrowDownward />   Saidas
                </MenuItemLink>
                <MenuItemLink href='#'>
                < MdExitToApp />   Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    )
}

export default Aside