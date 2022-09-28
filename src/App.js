import { Route, Routes, Navigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';

import './App.css';
import { Login }  from './components/views/Login/Login'
import { Tasks } from './components/views/Tasks/Tasks';
import { Error404 } from './components/views/Error404/Error404';
// import { Register } from './components/Register'

const RequireAuth = ({children}) =>{
    if (!localStorage.getItem('logged')){
        return <Navigate to='/login' replace={true} />
    }
    return children
}

export const App = () => 
    (
        <AnimatePresence>
            <Routes> 
                <Route 
                    path='/' 
                    element={
                        <RequireAuth>
                            <Tasks />
                        </RequireAuth>
                    } 
                />
                <Route path='/login' element={<Login />} />
                <Route path='/*' element={<Error404 />} />
                {/* <Register /> */}
            </Routes>
        </AnimatePresence>
    )