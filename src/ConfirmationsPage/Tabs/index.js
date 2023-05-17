import { useContext, useEffect, useState } from "react"
// import { NavLink } from "react-router-dom"
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'
import { getOneHistory } from "../../services/admissions.services";
import { FormsContext } from "../../context/forms.context";

export const DinamicTabs=()=>{
  const {tabMenu, tabList, setTabList, activeTab, setActiveTab, setDataTabs} = useContext(FormsContext)
  // const [activeTab, setActiveTab] = useState("main");
  // const [tabList, setTabList] = useState([])
  // console.log(tabList)
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
        console.log(newData)
      }

      setTabList(newTablist)
      setDataTabs(data)
    }
    tabName()
  },[tabMenu])

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
              <NavLink className={((activeTab) == tab ? "nav-link active bg-white" :"nav-link bg-white" )} aria-current="page" onClick={()=> changeTab(tab)}>
                <div>{tabList[i]}</div>
              </NavLink>
            </NavItem>
          )}) : <></>}
      </Nav>
    </>
  )
}