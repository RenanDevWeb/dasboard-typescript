import React from 'react'
import { Container,Tag,ContentTitles } from './styles'

interface IHistoryFinancialCardProps {
    tagColor: string;
    title: string;
    subTitle: string;
    ammount: string;
}

const HistoryFinancialCard: React.FC<IHistoryFinancialCardProps> = ({

    tagColor,
    title,
    subTitle,
    ammount,

}) => {
  return (
    <Container >
       <Tag color={tagColor} />
        <ContentTitles>
            <span>{title}</span>
            <small>{subTitle}</small>
        </ContentTitles>
        <h3>{ammount}</h3>
    </Container>
  )
}

export default HistoryFinancialCard