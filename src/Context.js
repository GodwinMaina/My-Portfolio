import React, { useState,createContext } from 'react'
import { useContext } from 'react';



 const AppContext=createContext();
//one-coponent-for-proider-and-the-other-for-consuer

//you-pass-children-since-we-wil-wrap-our-whole-app-in-AppProider.
const  AppProvider = ({children}) => {
  
    const [sidebarOpen,setSidebarOpen]=useState(false)

    //function-to-open-sidebar
    const toggleSidebar=()=>{
    setSidebarOpen(!sidebarOpen)
}
// const closeSidebar=()=>{
//     setSidebarOpen(false)
// }

  return (

    <AppContext.Provider  value={{sidebarOpen,toggleSidebar}} >
        {children}
    </AppContext.Provider>
  )
}
//custo-hook
export const  useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}