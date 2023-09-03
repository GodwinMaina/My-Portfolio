import React, { useState,createContext } from 'react'
import { useContext } from 'react';



 const AppContext=createContext();
//one component for provider and the other for consumer

//we pass children since wil wrap whole app in AppProider.
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
//custom hook
export const  useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}