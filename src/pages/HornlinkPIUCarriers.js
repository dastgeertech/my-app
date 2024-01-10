import Navbar from "./navbar";
const HornlinkPIUCarriers = () => {
  return (
    <div className="px-6 mt-10">
      <Navbar title="Carrier’s Flights"/>
      <div className="bg-whitesmoke-100 overflow-hidden text-left text-[18.97px] text-text-primary-color font-product-sans">
       
        
        <div className="flex flex-row items-center justify-start gap-[20px] mt-4 text-xs">
          <div className="rounded-lg bg-white flex flex-col items-start justify-start p-2.5">
            <div className="flex flex-row items-center justify-start gap-[5px]">
              <img
                className=" w-[18px] h-[18px] object-cover"
                alt=""
                src="/icon-search@2x.png"
              />
              <div className=" leading-[18px]">
                <input
                  className="outline-none"
                  placeholder="Enter Aircraft Name, Reg code"
                />
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white w-40 flex flex-col items-start justify-start p-2.5 box-border">
            <div class="relative flex w-full">
              <svg
                class="w-[9px] h-[5px] absolute top-2 right-0 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fill-rule="nonzero"
                />
              </svg>
              <select class="w-full  leading-[18px] text-gray-600 bg-white  focus:outline-none appearance-none">
                <option>From City</option>
                <option>Red Sea</option>
                <option>Blue Sea</option>
              </select>
            </div>
            
          </div>
          <div className="rounded-lg bg-white w-40 flex flex-col items-start justify-start p-2.5 box-border">
            <div class="relative flex w-full">
              <svg
                class="w-[9px] h-[5px] absolute top-2 right-0 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fill-rule="nonzero"
                />
              </svg>
              <select class="w-full  leading-[18px] text-gray-600 bg-white  focus:outline-none appearance-none">
                <option>To City</option>
                <option>Red Sea</option>
                <option>Blue Sea</option>
              </select>
            </div>
            
          </div>
          <div className="rounded-lg bg-white w-40 flex flex-col items-start justify-start p-2.5 box-border">
            <div class="relative flex w-full">
              <svg
                class="w-[9px] h-[5px] absolute top-2 right-0 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fill-rule="nonzero"
                />
              </svg>
              <select class="w-full  leading-[18px] text-gray-600 bg-white  focus:outline-none appearance-none">
                <option>Departure Date</option>
                <option>Red Sea</option>
                <option>Blue Sea</option>
              </select>
            </div>
           
          </div>
          <div className="rounded-lg bg-white w-40 flex flex-col items-start justify-start p-2.5 box-border">
            <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
              {/* <div className="flex-1  leading-[18px]">{`Flight Number `}</div> */}
              <input
                className="outline-none w-4/5"
                placeholder="Flight Number"
              />
              <img
                className=" w-[18px] h-[18px] object-cover"
                alt=""
                src="/icon-search@2x.png"
              />
            </div>
          </div>
          <div className="rounded-lg bg-[#1A2B88] flex flex-col items-start justify-start p-2.5 text-[15px] text-white font-bold-25">
            <div className="flex flex-row items-center justify-start">
              <div className=" leading-[18px] font-semibold">{`Submit `}</div>
            </div>
          </div>
        </div>

        <table class="table mt-10 w-full">
          <thead>
            <tr className="">
              <th className="header tracking-[0.01em]">
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <div className="leading-[18px]">{`Carrier Name `}</div>
                  <img
                    className=" w-[7.19px] h-[14.45px] object-cover"
                    alt=""
                    src="/group-1707477731@2x.png"
                  />
                </div>
              </th>
              <th className="header px-6 tracking-[0.01em]">
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <div className=" leading-[18px]">From</div>
                  <img
                    className=" w-[7.19px] h-[14.45px] object-cover"
                    alt=""
                    src="/group-1707477731@2x.png"
                  />
                </div>
              </th>
              <th className="header px-6 tracking-[0.01em]">
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <div className=" leading-[18px]">{`To `}</div>
                  <img
                    className=" w-[7.19px] h-[14.45px] object-cover"
                    alt=""
                    src="/group-1707477731@2x.png"
                  />
                </div>
              </th>
              <th className="header px-6 tracking-[0.01em]">
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <div className=" leading-[18px]">Departure Date</div>
                  <img
                    className=" w-[7.19px] h-[14.45px] object-cover"
                    alt=""
                    src="/group-1707477731@2x.png"
                  />
                </div>
              </th>
              <th className="header px-6 tracking-[0.01em]">
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <div className=" leading-[18px]">Total Passengers</div>
                  <img
                    className=" w-[7.19px] h-[14.45px] object-cover"
                    alt=""
                    src="/group-1707477731@2x.png"
                  />
                </div>
              </th>
              <th className="header tracking-[0.01em]">
                <div className="flex flex-row items-center justify-start text-start gap-[6px] text-gray-500">
                  <div className="leading-[18px]">Watchlisted Passengers</div>
                  <img
                    className=" w-[7.19px] h-[14.45px] object-cover"
                    alt=""
                    src="/group-1707477731@2x.png"
                  />
                </div>
              </th>
              <th className="header tracking-[0.01em]">
                
              </th>
            </tr>
          </thead>
          <div className="box-border border-t-[0.9px] border-solid border-whitesmoke-400" />

          <tbody>
            <tr className="py-12">
              <td className="title py-6">
                <div className="[font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#0061ff] text-[14px] tracking-[0] leading-[normal]">{`Salaam Air `}</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="inline-block w-[73px]">Mogadishu</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className=" inline-block w-[73px]">Kismayo</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#0061ff] text-[14px] tracking-[0] leading-[normal]">
                <div className="text-brand-color inline-block w-[83px]">
                  Dec17,2023
                </div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="  inline-block w-[66px] ">50 PX</div>
              </td>
              <td className="td-title py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="inline-block w-[66px]">3 PX</div>
              </td>
              <td className="td-title py-6">
                <img
                  className="w-[3px] overflow-hidden object-cover"
                  alt=""
                  src="/group-1707477934@2x.png"
                />
              </td>
            </tr>
            <tr className="py-12">
              <td className="title py-6">
                <div className="[font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#0061ff] text-[14px] tracking-[0] leading-[normal]">{`Salaam Air `}</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="inline-block w-[73px]">Mogadishu</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className=" inline-block w-[73px]">Kismayo</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#0061ff] text-[14px] tracking-[0] leading-[normal]">
                <div className="text-brand-color inline-block w-[83px]">
                  Dec17,2023
                </div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="  inline-block w-[66px] ">50 PX</div>
              </td>
              <td className="td-title py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="inline-block w-[66px]">3 PX</div>
              </td>
              <td className="td-title py-6">
                <img
                  className="w-[3px] overflow-hidden object-cover"
                  alt=""
                  src="/group-1707477934@2x.png"
                />
              </td>
            </tr>
            <tr className="py-12">
              <td className="title py-6">
                <div className="[font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#0061ff] text-[14px] tracking-[0] leading-[normal]">{`Salaam Air `}</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="inline-block w-[73px]">Mogadishu</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className=" inline-block w-[73px]">Kismayo</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#0061ff] text-[14px] tracking-[0] leading-[normal]">
                <div className="text-brand-color inline-block w-[83px]">
                  Dec17,2023
                </div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="  inline-block w-[66px] ">50 PX</div>
              </td>
              <td className="td-title py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="inline-block w-[66px]">3 PX</div>
              </td>
              <td className="td-title py-6">
                <img
                  className="w-[3px] overflow-hidden object-cover"
                  alt=""
                  src="/group-1707477934@2x.png"
                />
              </td>
            </tr>
            <tr className="py-12">
              <td className="title py-6">
                <div className="[font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#0061ff] text-[14px] tracking-[0] leading-[normal]">{`Salaam Air `}</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="inline-block w-[73px]">Mogadishu</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className=" inline-block w-[73px]">Kismayo</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#0061ff] text-[14px] tracking-[0] leading-[normal]">
                <div className="text-brand-color inline-block w-[83px]">
                  Dec17,2023
                </div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="  inline-block w-[66px] ">50 PX</div>
              </td>
              <td className="td-title py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="inline-block w-[66px]">3 PX</div>
              </td>
              <td className="td-title py-6">
                <img
                  className="w-[3px] overflow-hidden object-cover"
                  alt=""
                  src="/group-1707477934@2x.png"
                />
              </td>
            </tr>
            <tr className="py-12">
              <td className="title py-6">
                <div className="[font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#0061ff] text-[14px] tracking-[0] leading-[normal]">{`Salaam Air `}</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="inline-block w-[73px]">Mogadishu</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className=" inline-block w-[73px]">Kismayo</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#0061ff] text-[14px] tracking-[0] leading-[normal]">
                <div className="text-brand-color inline-block w-[83px]">
                  Dec17,2023
                </div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="  inline-block w-[66px] ">50 PX</div>
              </td>
              <td className="td-title py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="inline-block w-[66px]">3 PX</div>
              </td>
              <td className="td-title py-6">
                <img
                  className="w-[3px] overflow-hidden object-cover"
                  alt=""
                  src="/group-1707477934@2x.png"
                />
              </td>
            </tr>
            <tr className="py-12">
              <td className="title py-6">
                <div className="[font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#0061ff] text-[14px] tracking-[0] leading-[normal]">{`Salaam Air `}</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="inline-block w-[73px]">Mogadishu</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className=" inline-block w-[73px]">Kismayo</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#0061ff] text-[14px] tracking-[0] leading-[normal]">
                <div className="text-brand-color inline-block w-[83px]">
                  Dec17,2023
                </div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="  inline-block w-[66px] ">50 PX</div>
              </td>
              <td className="td-title py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="inline-block w-[66px]">3 PX</div>
              </td>
              <td className="td-title py-6">
                <img
                  className="w-[3px] overflow-hidden object-cover"
                  alt=""
                  src="/group-1707477934@2x.png"
                />
              </td>
            </tr>
            <tr className="py-12">
              <td className="title py-6">
                <div className="[font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#0061ff] text-[14px] tracking-[0] leading-[normal]">{`Salaam Air `}</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="inline-block w-[73px]">Mogadishu</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className=" inline-block w-[73px]">Kismayo</div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#0061ff] text-[14px] tracking-[0] leading-[normal]">
                <div className="text-brand-color inline-block w-[83px]">
                  Dec17,2023
                </div>
              </td>
              <td className="td-title px-6 py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="  inline-block w-[66px] ">50 PX</div>
              </td>
              <td className="td-title py-6 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#071e24] text-[14px] tracking-[0] leading-[normal]">
                <div className="inline-block w-[66px]">3 PX</div>
              </td>
              <td className="td-title py-6">
                <img
                  className="w-[3px] overflow-hidden object-cover"
                  alt=""
                  src="/group-1707477934@2x.png"
                />
              </td>
            </tr>
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HornlinkPIUCarriers;
