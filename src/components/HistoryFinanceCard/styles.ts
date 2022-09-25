import styled from "styled-components";



interface ITagProps {
    color: string
}



export const Container = styled.li`
    background-color: ${props => props.theme.colors.terciary};

    list-style: none;
    border-radius: 5px;

    margin: 10px 0;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s;
    position: relative;
    &:hover{
        opacity: 0.7;
        transform: translateX(10px);
    }
   

`;


export const ContentTitles = styled.div`
 display: flex;
 flex-direction: column;
 margin-left: 5px;
 

`




export const Tag = styled.div<ITagProps>`
width: 10px;
height: 60%;
background-color: ${props => props.color};
position: absolute;
left: 0;
`;

