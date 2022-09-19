import styled from "styled-components";

export const Container = styled.div`
   grid-area: MainHeader;

   background-color: ${props => props.theme.colors.secondary};
   display: flex;
   justify-content: space-between;
   align-items: center;
    
   padding: 0 10px;
   border-bottom: 1px  solid ${props => props.theme.colors.gray};
`;

export const Profile = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   color: ${props => props.theme.colors.white};
`;

export const Welcome = styled.div`
   
`;

export const UserName = styled.div`
   
`;
