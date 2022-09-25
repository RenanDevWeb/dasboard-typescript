import React from 'react'
import ContentHeader from '../../components/ContentHeader'
import SelectedInput from '../../components/SelectInput'
import {mothns, years} from '../../utils/Selectoptions'


import {Container} from './styles'


const Dashboard: React.FC = () => {

    return (
        <Container>
             <ContentHeader title={'Dashboard'} lineColor='#fff'>
                <SelectedInput options={mothns}/>
                <SelectedInput options={years}/>
             </ContentHeader>
        </Container>
    
    )
}


export default Dashboard