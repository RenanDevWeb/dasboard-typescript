import React, { ReactNode } from 'react'
import Aside from '../Aside'
import Content from '../Content'
import MainHeader from '../Main-Header'
import {Grid} from './styles'


interface childrenProps {
children: React.ReactNode
}


const Layout : React.FC<childrenProps> = ({children}) => {
    return (
        <Grid>
           <MainHeader />
           <Aside />
           <Content>
              {children}
            </Content>
        </Grid>
    )
}

export default Layout