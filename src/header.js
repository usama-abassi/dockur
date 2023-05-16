import logo from "./logo.png";
import text from "./text.png";
import React,{ useState } from 'react';
import "./header.css";
import ClickAwayListener from 'react-click-away-listener';

export default function Header() {
  const [popup, setPopup] = useState(false)
  const [popUpMenu, setPopUpMenu] = React.useState(false);
  function PopUpMenu() {
    return (
      <ul className="drop-down">
        <li>Menu-item-1</li>
        <li>Menu-item-2</li>
        <li>Menu-item-3</li>
      </ul>
    );
  }
  return (
    <>
      <header className="head">
        <img src={logo} className="head-logo" alt="logo" />
        <img src={text} className="head-text" alt="text" />
      </header>
      <div className="nav">
        <button type="button" className="connect">Connect</button>
        <input type="text" className="ip" placeholder="192.168.0.0"></input>
        <p className="line"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_______________________________</strong></p>
        <button type="button" className="firstbuttons">Create Image</button>
        <button type="button" className="buttons">Import Image</button>
        <button type="button" className="buttons">Export Image</button>
        <button type="button" className="buttons" onClick={() => setPopUpMenu(!popUpMenu)}>List of Images</button>
        {popUpMenu && PopUpMenu()}
        <button className="buttons" onClick={()=>setPopup(true)}>Data Code ⮟</button>
        {popup && (
            <ClickAwayListener onClickAway={() => setPopup(false)}>
                    <div className={'popup'}>
                        <li>Items of the Popup</li>
                        <li>Items of the Popup</li>
                        <li>Items of the Popup</li>
                    </div>
            </ClickAwayListener>
        )}
        
        <button type="button" className="buttons">Kubernetes</button>
      </div>
      <div className="bottom">
        <img src={logo} className="bottom-img" alt="img" />
      </div>
    </>
  );
}
