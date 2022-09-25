import styled from "styled-components";



export const Container = styled.div`
    


`;

export const Content = styled.div``;



export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    
    .tag-filter{
       font-size: 18px;
       font-weight: 500;
       background: none;
       color: ${props => props.theme.colors.white};

       margin: 0 10px;
       transition:opacity .3s;

     :hover{
        opacity: .7s;
        }
    }
    .tag-filter-recurenty::after{
        content: '';
        width: 55px;
        display: block;
        margin: 5px auto;
        border-bottom: 10px solid ${props => props.theme.colors.warning};
    }
    .tag-filter-eventual::after{
        content: '';
        width: 55px;
        display: block;
        margin: 5px auto;
        border-bottom: 10px solid ${props => props.theme.colors.succes};
    }




`