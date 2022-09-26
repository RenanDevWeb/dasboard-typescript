import React ,{useMemo,useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ContentHeader from '../../components/ContentHeader'
import HistoryFinancialCard from '../../components/HistoryFinanceCard'
import SelectedInput from '../../components/SelectInput'
import {mothns, years} from '../../utils/Selectoptions'
import { Container,Content,Filters,TotalValue } from './style'
import gains from '../../utils/gains' 
import expenses from '../../utils/expenses' 



interface Idata {
    id: string,
    desciption: string;
    ammountFormated: string;
    frequency: string;
    dateFormated: string;
    tagColor: string;
    type: string,
} 





const List: React.FC = () => {
    const [data,setData] = useState<Idata[]>([])
    const [dataTotal,setDataTotal] = useState([])
    const {type} = useParams()

    
    const listData = useMemo(() => {
        return type === 'entrys-balance'
        ? gains 
        : expenses  
},[type])


    useEffect(() => {
       const response = listData.map(item => {
         return{
            id: String(Math.random() * listData.length),
            desciption: item.description,
            ammountFormated: item.amount,
            frequency: item.frequency,
            dateFormated: item.date,
            type: item.type,
            tagColor: item.frequency === "recorrente" ? '#e44c4e' : '#4e41f0',
        }
       })
       setData(response)

        // for (const item of listData) {
        //     const sum  = parseFloat(item.amount)
        //     console.log(sum)// sum += parseFloat(item.fields.Valor.replace(/\./g, '').replace(/,/, '.'));
            
        // }
        const sum :any =  listData.reduce(
            (acc, current) =>
              acc + parseFloat(current.amount),
            0
          );

          const formatedOptions = { style: 'currency', currency: 'BRL' }
         const formateSum =  sum.toLocaleString('pt-BR' , formatedOptions);
   

        setDataTotal(formateSum)

    }, [])
     
    
 

    const title = useMemo(() => {
        return  type === 'entrys-balance'  
        ?{title: "Entradas", lineColor: '#187d5F'}
        :{title: "Saidas",   lineColor: '#CC2A2C' }
    },[type])






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

        <TotalValue>
        <div>
            <h3>valor total
                
             <span> {dataTotal}</span>
            
             </h3>
           
        </div>
            
        </TotalValue>


            <Content>
              {
                data.map(cards => (
                <HistoryFinancialCard 
                key={cards.id}
               tagColor={cards.tagColor}
               title={cards.desciption}
               subTitle={cards.dateFormated}
               ammount={cards.ammountFormated}
              />
                ))
              }
            </Content>

        </Container>
    )
}


export default List