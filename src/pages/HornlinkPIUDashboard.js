import Navbar from './navbar'
const HornlinkPIUDashboard = () => {
  return (
    <div className='px-6 mt-10'>
     <Navbar title="Dashboard!"  />
   
    <div className="mt-5 bg-whitesmoke-100 w-full text-left text-base text-black font-product-sans">
      <div className="flex w-full text-sm text-midnightblue-200 rounded-xl bg-white shadow-[0px_20px_50px_rgba(220,_224,_249,_0.5)] box-border border-solid border-aliceblue">
        <div className='flex w-full px-6'>
        <div className="flex justify-center py-10 w-full">
          <div className="flex flex-col gap-4">
          <div className=" flex flex-row items-center justify-start gap-[13px] text-base text-gray-200">
              <div className=" tracking-[0.01em]">Total Passengers</div>
              <div className="rounded-31xl bg-whitesmoke-300 flex flex-row items-center justify-center py-[3px] px-1 gap-[3px] text-xs text-black">
                <img
                  className=" w-2.5 h-2.5 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/biarrowup@2x.png"
                />
                <div className=" tracking-[0.01em]">10.0%</div>
              </div>
            </div>
            <div className='flex flex-col gap-[9px]'>
            <b className="text-9xl tracking-[0.01em] text-midnightblue-100">
              1,120 Pax
            </b>
            <div className=" top-[77px] left-[0px] tracking-[0.01em]">
              Mon, 1 Jan 2024
            </div>
            </div>
           
          </div>
        </div>

        <div className="my-10 px-1 box-border w-px h-[92px] border-r-[1px] border-dashed border-lavender" />
       

        <div className="flex justify-center py-10 w-full">
          <div className="flex flex-col gap-4">
          <div className=" flex flex-row items-center justify-start gap-[13px] text-base text-[#000000]">
              <div className=" tracking-[0.01em]">Boarded Passengers</div>
              <div className="rounded-31xl bg-whitesmoke-300 flex flex-row items-center justify-center py-[3px] px-1 gap-[3px] text-xs text-black">
                <img
                  className=" w-2.5 h-2.5 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/biarrowup@2x.png"
                />
                <div className=" tracking-[0.01em]">3.0%</div>
              </div>
            </div>
            <div className='flex flex-col gap-[9px]'>
            <b className="text-9xl tracking-[0.01em] text-midnightblue-100">
            1,080 Pax
            </b>
            <div className=" top-[77px] left-[0px] tracking-[0.01em]">
            Mon, 1 Jan 2024
            </div>
            </div>
           
          </div>
        </div>

        <div className="my-10 px-1 box-border w-px h-[92px] border-r-[1px] border-dashed border-lavender" />

  

        <div className="flex justify-center py-10 w-full">
          <div className="flex flex-col gap-4">
          <div className=" flex flex-row items-center justify-start gap-[13px] text-base text-[#000000]">
              <div className=" tracking-[0.01em]">Non-Boarded</div>
              <div className="rounded-31xl bg-whitesmoke-300 flex flex-row items-center justify-center py-[3px] px-1 gap-[3px] text-xs text-black">
                <img
                  className=" w-2.5 h-2.5 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/biarrowup@2x.png"
                />
                <div className=" tracking-[0.01em]">3.2%</div>
              </div>
            </div>
            <div className='flex flex-col gap-[9px]'>
            <b className="text-9xl tracking-[0.01em] text-midnightblue-100">
            40 Pax
            </b>
            <div className=" top-[77px] left-[0px] tracking-[0.01em]">
            Mon, 1 Jan 2024
            </div>
            </div>
           
          </div>
        </div>

       
        <div className="my-10 px-1 box-border w-px h-[92px] border-r-[1px] border-dashed border-lavender" />
        <div className="flex justify-center py-10 w-full">
          <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-start gap-[13px] text-base text-black">
            <div className="tracking-[0.01em]">{`Watch list `}</div>
            <div className="rounded-31xl bg-whitesmoke-300 flex flex-row items-center justify-center py-[3px] px-1 gap-[3px] text-xs text-mediumblue">
              <img
                className="w-2.5 h-2.5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/biarrowup@2x.png"
              />
              <div className=" tracking-[0.01em]">8.3%</div>
            </div>
          </div>
          <div className='flex flex-col gap-[9px]'>
            <b className="text-9xl tracking-[0.01em] text-midnightblue-100">
              0 Pax
            </b>
            <div className="tracking-[0.01em]">
              Mon, 1 Jan 2024
            </div>
            </div>
          </div>
         
        </div>
        </div>
      </div>

      <div className="flex w-full mt-[34px] text-sm text-midnightblue-200 rounded-xl bg-white shadow-[0px_20px_50px_rgba(220,_224,_249,_0.5)] box-border border-solid border-aliceblue">
        <div className='flex w-full px-6'>
        <div className="flex justify-center py-10 w-full">
          <div className="flex flex-col gap-4">
          <div className=" flex flex-row items-center justify-start gap-[13px] text-base text-gray-200">
              <div className=" tracking-[0.01em]">Total Flights</div>
              <div className="rounded-31xl bg-whitesmoke-300 flex flex-row items-center justify-center py-[3px] px-1 gap-[3px] text-xs text-black">
                <img
                  className=" w-2.5 h-2.5 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/biarrowup@2x.png"
                />
                <div className=" tracking-[0.01em]">10.0%</div>
              </div>
            </div>
            <div className='flex flex-col gap-[9px]'>
            <b className="text-9xl tracking-[0.01em] text-midnightblue-100">
            19
            </b>
            <div className=" top-[77px] left-[0px] tracking-[0.01em]">
              Mon, 1 Jan 2024
            </div>
            </div>
           
          </div>
        </div>
        
        <div className="my-10 px-1 box-border w-px h-[92px] border-r-[1px] border-dashed border-lavender" />
       

        <div className="flex justify-center py-10 w-full">
          <div className="flex flex-col gap-4">
          <div className=" flex flex-row items-center justify-start gap-[13px] text-base text-[#000000]">
              <div className=" tracking-[0.01em]">Domestic Flights</div>
              <div className="rounded-31xl bg-red-200 flex flex-row items-center justify-center py-[3px] px-1 gap-[3px] text-xs text-red-100">
              <img
                className=" w-2.5 h-2.5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/biarrowup@2x.png"
              />
              <div className=" tracking-[0.01em]">3.0%</div>
            </div>
            </div>
            <div className='flex flex-col gap-[9px]'>
            <b className="text-9xl tracking-[0.01em] text-midnightblue-100">
            15
            </b>
            <div className=" top-[77px] left-[0px] tracking-[0.01em]">
            Mon, 1 Jan 2024
            </div>
            </div>
           
          </div>
        </div>

        <div className="my-10 px-1 box-border w-px h-[92px] border-r-[1px] border-dashed border-lavender" />

  

        <div className="flex justify-center py-10 w-full">
          <div className="flex flex-col gap-4">
          <div className=" flex flex-row items-center justify-start gap-[13px] text-base text-[#000000]">
              <div className=" tracking-[0.01em]">International Flights</div>
              <div className="rounded-31xl bg-whitesmoke-300 flex flex-row items-center justify-center py-[3px] px-1 gap-[3px] text-xs text-black">
                <img
                  className=" w-2.5 h-2.5 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/biarrowup@2x.png"
                />
                <div className=" tracking-[0.01em]">3.2%</div>
              </div>
            </div>
            <div className='flex flex-col gap-[9px]'>
            <b className="text-9xl tracking-[0.01em] text-midnightblue-100">
            4
            </b>
            <div className=" top-[77px] left-[0px] tracking-[0.01em]">
            Mon, 1 Jan 2024
            </div>
            </div>
           
          </div>
        </div>

       
        <div className="my-10 px-1 box-border w-px h-[92px] border-r-[1px] border-dashed border-lavender" />
        <div className="flex justify-center py-10 w-full">
          <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-start gap-[13px] text-base text-black">
            <div className="tracking-[0.01em]">{`Postponed Flights `}</div>
            <div className="rounded-31xl bg-whitesmoke-300 flex flex-row items-center justify-center py-[3px] px-1 gap-[3px] text-xs text-mediumblue">
              <img
                className="w-2.5 h-2.5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/biarrowup@2x.png"
              />
              <div className=" tracking-[0.01em]">8.3%</div>
            </div>
          </div>
          <div className='flex flex-col gap-[9px]'>
            <b className="text-9xl tracking-[0.01em] text-midnightblue-100">
              0
            </b>
            <div className="tracking-[0.01em]">
              Mon, 1 Jan 2024
            </div>
            </div>
          </div>
         
        </div>
        </div>
      </div>

     
<div className="flex mt-[34px]">


<div className="py-10 px-11 text-gray-100 rounded-xl bg-white shadow-[0px_20px_50px_rgba(220,_224,_249,_0.5)] box-border w-[759px] h-[326px] border-[2px] border-solid border-aliceblue">
  {/* <div className="rounded-xl bg-white shadow-[0px_20px_50px_rgba(220,_224,_249,_0.5)] box-border w-[759px] h-[326px] border-[2px] border-solid border-aliceblue" /> */}
  <div className="flex justify-between">
  <b className="text-3xl-4 tracking-[0.01em] text-black whitespace-pre-wrap">
    Carrier Performance
  </b>
    <button className=" tracking-[0.01em] flex w-[80px] items-center justify-center gap-[10px] p-[10px] relative bg-[#f6f6f6] rounded-[12px] [font-family:'Product_Sans-Bold',Helvetica] font-bold text-[#1a2b88] text-[14px] text-center tracking-[0.14px] leading-[normal]">See All</button>
  </div>

<table class="table-auto mt-5 w-full">
  <thead>
    <tr className=''>
      <th className="tracking-[0.01em] pl-3">Carrier Name</th>
      <th className="tracking-[0.01em] px-3">Passengers</th>
      <th className="tracking-[0.01em] px-3">Flights</th>
      <th className="tracking-[0.01em] px-3">Boarded</th>
      <th className="tracking-[0.01em] px-3">No-boarded</th>
    </tr>
  </thead>
    <div className="box-border border-t-[0.9px] border-solid border-whitesmoke-400" />

  <tbody>
    <tr className='py-4'>
      <td className='pl-3 py-4'>
        <img
        className="h-[26px] overflow-hidden object-cover"
        alt=""
        src="/logo2-1@2x.png"
      />
      </td>
      <td className="px-3 py-4 [font-family:'Product_Sans-Bold',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">145 pax</td>
      <td className="px-3 py-4 [font-family:'Product_Sans-Bold',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">1</td>
      <td className="px-3 py-4 [font-family:'Product_Sans-Bold',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">144 pax</td>
      <td className="px-3 py-4 [font-family:'Product_Sans-Bold',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">1 pax</td>
    </tr>
    <tr>
      <td className='pl-3 py-4'><img
        className=" h-[26.69px] overflow-hidden object-cover"
        alt=""
        src="/logo-color-1@2x.png"
      /></td>
      <td className="px-3 py-4 [font-family:'Product_Sans-Bold',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">145 pax</td>
      <td className="px-3 py-4 [font-family:'Product_Sans-Bold',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">1</td>
      <td className="px-3 py-4 [font-family:'Product_Sans-Bold',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">144 pax</td>
      <td className="px-3 py-4 [font-family:'Product_Sans-Bold',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">1 pax</td>
    </tr>
  
    <tr>
      <td className='pl-3 py-4'><img
        className="h-[26px] overflow-hidden object-cover"
        alt=""
        src="/download-1@2x.png"
      /></td>
      <td className="px-3 py-4 [font-family:'Product_Sans-Bold',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">145 pax</td>
      <td className="px-3 py-4 [font-family:'Product_Sans-Bold',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">1</td>
      <td className="px-3 py-4 [font-family:'Product_Sans-Bold',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">144 pax</td>
      <td className="px-3 py-4 [font-family:'Product_Sans-Bold',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">1 pax</td>
    </tr>
  </tbody>
</table>

</div>


<div className="ml-12 rounded-xl p-8 bg-white shadow-[0px_20px_50px_rgba(220,_224,_249,_0.5)] box-border w-[287px] h-[334px] border-[2px] border-solid border-aliceblue">
  {/* <div className=" top-[0px] left-[0px] rounded-xl bg-white shadow-[0px_20px_50px_rgba(220,_224,_249,_0.5)] box-border w-[287px] h-[334px] border-[2px] border-solid border-aliceblue" /> */}
  <b className="text-3xl-4 tracking-[0.01em]">
    Passenger Type
  </b>
  <div className="mt-4">
   <div className='flex items-center justify-between py-4'>
    <div className='flex items-center gap-2'>  <img
        className="rounded-[12.22px] bg-ghostwhite w-7 h-[26px] overflow-hidden object-cover"
        alt=""
        src="/layer-1@2x.png"
      />
    <span>Adult</span> </div>
  
    <p className="text-right text-blue-900 text-lg font-bold font-['Product Sans'] tracking-tight">96.42%</p>
   </div>
   
   <div className='flex items-center justify-between py-4'>
    <div className='flex gap-2'>  <img
        className=" rounded-[12.22px] bg-ghostwhite w-7 h-[26px] overflow-hidden object-cover"
        alt=""
        src="/layer-1@2x.png"
      />
    <span>Adult</span> </div>
  
    <p className="text-right text-blue-900 text-lg font-bold font-['Product Sans'] tracking-tight">96.42%</p>
   </div>

   <div className='flex items-center justify-between py-4'>
    <div className='flex gap-2'>  <img
        className=" rounded-[12.22px] bg-ghostwhite w-7 h-[26px] overflow-hidden object-cover"
        alt=""
        src="/layer-1@2x.png"
      />
    <span>Adult</span> </div>
  
    <p className="text-right text-blue-900 text-lg font-bold font-['Product Sans'] tracking-tight">96.42%</p>
   </div>
  </div>
  
 
</div>

 
</div>




</div>


    </div>
  );
};

export default HornlinkPIUDashboard;
