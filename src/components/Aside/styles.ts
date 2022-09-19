import styled from "styled-components";


export const Container = styled.div`
  grid-area: Aside;
  padding-left: 20px;
  border-right: 1px solid ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.secondary};
`;

export const Header =  styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`;


export const Title = styled.h3`

  color: ${props => props.theme.colors.white};
  margin-left: 10px;

`;
export const LogImg =  styled.img`
  height: 40px ;
  width: 40px;

`;

export const MenuContainer =  styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

`;

export const MenuItemLink =  styled.a`
display: flex;
align-items: center;
 color: ${props => props.theme.colors.info};
 text-decoration: none;
 transition: opacity 2s ease;
 margin: 10px 0;
 font-size: 22px;
 &:hover{
   opacity: .7;
   
 }
 > svg{
   font-size: 22px;
   margin-right: 10px;
 }
`;
