import { useAppContext } from "../contexts/AppContext";

import "../styles/SideMenuBar.css";

export default function SideMenuBar() {
  
  const { appState } = useAppContext();
  
  return (
    <div className="side-menu-bar">
    </div>
  );
}