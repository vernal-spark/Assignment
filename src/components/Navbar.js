import back from "../assets/back.png";
import Logo from "../assets/Logo.png";
import home from "../assets/Home-Icons.png";
import invoice from "../assets/Vector.png";
import customer from "../assets/Vector (1).png";
import product from "../assets/Vector (2).png";
import recur from "../assets/Vector (3).png";
import discount from "../assets/Vector (4).png";
import "./Navbar.css";

const Navbar = ({setOpen}) => {
  return (
    <div className="navbar">
      <div >
        <img onClick={()=>{setOpen(false)}} className="back-button" src={back} alt="back" />
      </div>
      <div className="title">
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className="navigation-menu">
        <div className="navigation-options">
          <img src={home} />
          Home
        </div>
        <div className="navigation-options">
          <img src={invoice} />
          Invoices
        </div>
        <div className="navigation-options">
          <img src={customer} />
          Customers
        </div>
        <div className="navigation-options">
          <img src={product} />
          Products
        </div>
        <div className="navigation-options">
          <img src={recur} />
          Recurring
        </div>
        <div className="navigation-options">
          <img src={discount} />
          Discount
        </div>
      </div>
    </div>
  );
};
export default Navbar;
