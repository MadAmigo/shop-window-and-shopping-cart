
import style from './App.module.css'
import HeaderContainer from './components/Header/HeaderContainer.js'
import Navbar from './components/Navbar/Navbar.js'
import Content from './components/Content/Content.js'

function App() {
  return (
   <div className={style.wrapper}>
     <div className={style.header}><HeaderContainer/></div> 
     <div className={style.navbar}><Navbar/></div> 
      <div className={style.common}><Content /></div>
  </div>
  )
}

export default App;
