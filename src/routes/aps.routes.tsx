import React from "react";
import {Routes,Route} from 'react-router-dom'
import Layout from "../components/Layout";

import Dashboard from "../pages/Dashboard";
import List from "../pages/lists";


const AppRoutes: React.FC =() => {
    return(
    <Layout>
        <Routes>
            <Route path="/dashboard"  element={<Dashboard />} />
            <Route path="/list/:type"  element={<List />} />
        </Routes>
    </Layout>
    )
}

export default AppRoutes