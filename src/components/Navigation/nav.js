import "./nav.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from "../Context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className='navb'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon className= "icon" onClick={() => dispatch({ type: "TOGGLE" })}/>
          </div>

          <div className="item">
            <FullscreenExitOutlinedIcon className= "icon"/>
          </div>

          <div className="item">
            <LogoutIcon className= "icon"/>
          </div>

          <div className="item">
            <ListOutlinedIcon className= "icon" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar;