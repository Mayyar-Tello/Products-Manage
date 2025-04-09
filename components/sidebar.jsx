import './sidebar.css'
import { Link} from 'react-router-dom';
import { MdOutlineWindow } from 'react-icons/md';
import { FaUserClock } from "react-icons/fa6";
import { IoIosPower } from 'react-icons/io';
export default function SidebarComponent({controlPopup}){
    return            <div className="sideBar">
    <div className='mainTitle'>
        <span className='dashTitle'>Dash</span><span className='stackTitle'>Stack</span>
    </div>
    <div className='btnsContainer'>
        <div>
        <button className='sidebarBtn'>
        <FaUserClock />
        <Link to='/dashboard'>Dashboard</Link>
    </button>
    <button className='sidebarBtn'>
        <MdOutlineWindow />
        <Link to='/dashboard/products'>Products</Link>
    </button>
        </div>
        <button className='sidebarBtn' onClick={controlPopup}>
        <IoIosPower />
        Logout
    </button>
    </div>
</div>
}