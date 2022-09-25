import React ,{useMemo,useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ContentHeader from '../../components/ContentHeader'
import HistoryFinancialCard from '../../components/HistoryFinanceCard'
import SelectedInput from '../../components/SelectInput'
import {mothns, years} from '../../utils/Selectoptions'
import { Container,Content,Filters } from './style'
import gains from '../../utils/gains' 
import expenses from '../../utils/expenses' 



interface Idata {
    desciption: string;
    ammountFormated: string;
    frequency: string;
    dateFormated: string;
    type?: string ;
    tagColor: string;
}



const List: React.FC = () => {
    const [data,setData] = useState<Idata>([])
    const {type} = useParams()
      

    useEffect(() => {
         
    }, [])
    


    const title = useMemo(() => {
        return  type === 'entrys-balance'  
        ?{title: "Entradas", lineColor: '#187d5F'}
        :{title: "Saidas",   lineColor: '#CC2A2C' }
    },[type])


const listCards = [
    { 
        CardColor:'#313862',
        tagColor:'#E44C4E',
        title:'Conta de Luz',
        subTitle:'27/07/2022',
        ammount:'R$ 130,00',
    },
   
]



    return (
        <Container color={''}>
            <ContentHeader 
            title={title.title} 
            lineColor={title.lineColor} >
                <SelectedInput  options={mothns}/>
                <SelectedInput  options={years}/>
          </ContentHeader>

          <Filters>
            <button 
            type='button'
            className='tag-filter tag-filter-recurenty'

            >Recorrentes</button>


            <button 
            type='button'
            className='tag-filter tag-filter-eventual'
            >Evenuais</button>
          </Filters>

            <Content>
              {
                listCards.map(cards => (
                <HistoryFinancialCard 
               tagColor={cards.tagColor}
               title={cards.title}
               subTitle={cards.subTitle}
               ammount={cards.ammount}
              />
                ))
              }
            </Content>

        </Container>
    )
}


export default List