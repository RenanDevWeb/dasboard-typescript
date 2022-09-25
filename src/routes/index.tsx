import React from 'react'
import {BrowserRouter} from 'react-router-dom'


import AppRoutes from './aps.routes'

const Routes: React.FC = () => {
    return(
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
    )
}


export default Routes