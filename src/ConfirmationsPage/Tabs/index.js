import { useContext, useEffect, useState } from "react"
// import { NavLink } from "react-router-dom"
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'
import { getOneHistory } from "../../services/admissions.services";
import { FormsContext } from "../../context/forms.context";

export const DinamicTabs=()=>{
  const {tabMenu, tabList, setTabList, activeTab, setActiveTab, setDataTabs, setTabMenu} = useContext(FormsContext)

  const changeTab=(idTab)=>{
    if(idTab !== activeTab){
      setActiveTab(idTab);
    }
  }

  useEffect(()=>{
    const tabName= async()=>{
       const newTablist = []
       const data = []
    for (let i = 0; i < tabMenu.length; i++) {
        const res = await getOneHistory(tabMenu[i]);
        const name = res[0].nombre
        const newData = res[0];
        data.push(newData);
        newTablist.push(name)
        // console.log(newData)
      }

      setTabList(newTablist)
      setDataTabs(data)
    }
    tabName()
  },[tabMenu])

  const delTab=(id)=>{
    const list = tabMenu.filter(tab=> tab!= id);
    // console.log(list)
    setTabMenu(list)
    changeTab("main")
    // console.log(id)
  }

  // console.log(tabList)

  return(
    <>
      <Nav tabs>
        <NavItem>
          <NavLink className={(activeTab == "main" ? "nav-link active bg-white" :"nav-link bg-white" )} aria-current="page" onClick={()=> changeTab("main")}>
            Datos personales
          </NavLink>
        </NavItem>
          {tabMenu ? tabMenu.map((tab, i)=>{
            return(
            <NavItem>
              <NavLink className={((activeTab) == tab ? "nav-link active bg-white d-flex" :"nav-link bg-white d-flex" )} aria-current="page" onClick={()=> changeTab(tab)}>
                <div>{tabList[i]}</div>
                {tab && (
                  <i className="bi bi-x-square-fill" onClick={()=>delTab(tab)}></i>
                  )}
              </NavLink>
            </NavItem>
          )}) : <></>}
      </Nav>
    </>
  )
}