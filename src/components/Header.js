import './Header.css';
import user from '../assets/Ellipse1.png'
import nav from '../assets/navigation-bar.png'

const Header=({setOpen})=>{
    return(
        <div className='header'>
            <div>
            <img  onClick={()=>{setOpen(true)}} className='navigation-icon' src={nav} alt='logo'/>
            </div>   
            <div className='box desktop'>
                Last 30 days:
                <div className='paid-pill' >
                    <span style={{fontSize:'0.75rem'}}>Paid</span>
                    €24,000
                </div>
                <div className='pending-pill'>
                    <span style={{fontSize:'0.75rem'}}>Pending</span>
                    €41,000
                </div>
                <div className='overdue-pill'>
                    <span style={{fontSize:'0.75rem'}}>Overdue</span>
                    €65,600
                </div>
            </div>

            <div className='box'>
                <img src={user} alt='logo'/>
                <span className='name'>Jort KKKKKK</span>
            </div>
        </div>
    )
}

export default Header;