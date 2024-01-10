import { useNavigate, useLocation  } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import "../App.css";
const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <div>
      <div className="rounded-mini p-[7.5px] fixed top-10">
        <img
          className="w-[168px] h-[52px] object-cover"
          alt=""
          src="/horn-link-1@2x.png"
        />
      </div>
      <div className=" w-[220px] text-[18.97px] text-gray-300 fixed top-20">
        <div className="flex-col gap-4 cursor-pointer mt-11">
          
             <NavLink
          to="/"
          className="flex gap-3 items-center p-20 justify-items-center text-midnightblue-100 cursor-pointer"
          activeClassName="active"
        >
            <div>
          
<img
              className="icon-size object-cover"
              alt=""
              src="/element2-1@2x.png"
            />
            </div>
            
            <span className={`custom-span-style ${location.pathname === '/' ? 'custom-span-style-active' : 'custom-span-style'}`}>Dashboard</span>
            </NavLink>
          
         
               <NavLink
          to="/carrier"
          className="flex gap-3 items-center p-20 justify-items-center text-midnightblue-100 cursor-pointer"
          activeClassName="active"
        >
            <div>
            <img
              className="icon-size object-cover"
              alt=""
              src="/vuesaxlinearpresentionchart@2x.png"
            /> </div>
            <div className={`custom-span-style ${location.pathname === '/carrier' ? 'custom-span-style-active' : 'custom-span-style'}`}>{`Carriers `}</div>
            </NavLink>

          <NavLink
          to="/passengers"
          className="flex gap-3 items-center p-20 justify-items-center text-midnightblue-100 cursor-pointer"
          activeClassName="active"
        >
            <div>
            <img
              className="icon-size object-cover"
              alt=""
              src="/vuesaxlinearpersonalcard@2x.png"
            />
            </div>
            <div className={`custom-span-style ${location.pathname === '/passengers' ? 'custom-span-style-active' : 'custom-span-style'}`}>
              Passengers
            </div>
            </NavLink>
          
          <NavLink
          to="/watchlist"
          className="flex gap-3 items-center p-20 justify-items-center text-midnightblue-100 cursor-pointer"
          activeClassName="active"
        >
            <div>
            <img
              className="icon-size object-cover"
              alt=""
              src="/chart1-1@2x.png"
            />
            </div>
            <div className={`custom-span-style ${location.pathname === '/watchlist' ? 'custom-span-style-active' : 'custom-span-style'}`}>
              Watchlist
            </div>
            </NavLink>

            <div className="flex gap-3 items-center p-20 justify-items-center text-midnightblue-100 cursor-pointer ">
            <div>
            <img
              className="icon-size object-cover"
              alt=""
              src="/vuesaxlinearlikeshapes@2x.png"
            />
            </div>
            <div className="[font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#0c0c0d] text-[19px] tracking-[0.19px] leading-[normal]">{`Reports `}</div>
          </div>
          
          <div className="box-border w-[232.02px] h-[1.02px] border-t-[1px] border-dashed border-gainsboro" />
          
          <div className="flex gap-3 items-center p-20 justify-items-center text-midnightblue-100 cursor-pointer ">
            <div>
            <img
              className="icon-size object-cover"
              alt=""
              src="/vuesaxoutlineframe@2x.png"
            />
            </div>
            <div className="[font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#0c0c0d] text-[19px] tracking-[0.19px] leading-[normal]">
              Profile
            </div>
          </div>
          <div className="flex gap-3 items-center p-20 justify-items-center text-midnightblue-100 cursor-pointer ">
            <div>
            <img
              className="icon-size object-cover"
              alt=""
              src="/vuesaxoutlinesetting2@2x.png"
            />
            </div>
            <div className="[font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#0c0c0d] text-[19px] tracking-[0.19px] leading-[normal]">
              Setting
            </div>
          </div>
        </div>
        

        <div className="flex gap-3 justify-center mt-3 justify-items-center items-center text-lg">
        <img
          className="rounded-[50%] w-10 h-10 object-cover"
          alt=""
          src="/ellipse-31@2x.png"
        />
        <b className="tracking-[0.01em]">
          Haqabtire
        </b>
        <img
          className="overflow-hidden object-cover custom-icon-size"
          alt=""
          src="/moresquare-1@2x.png"
        />
      </div>

      </div>
    </div>
  );
};

export default SideBar;
