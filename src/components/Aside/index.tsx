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
                <MenuItemLink href='/dashboard'>
                  < MdDashboard />  Dashboard
                </MenuItemLink>
                <MenuItemLink href='/list/entrys-balance'>
                < MdArrowUpward /> Entradas 
                </MenuItemLink>
                <MenuItemLink href='/list/exit-balance'>
                < MdArrowDownward />   Saidas
                </MenuItemLink>
                <MenuItemLink href='/logout'>
                < MdExitToApp />   Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    )
}

export default Aside