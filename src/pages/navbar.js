const Navbar = ({ title }) => {

  const showDateDiv = title === "Carrier’s Flights";

  const showButton = title === "Watchlist Page"

  return (
    <div className="flex justify-between">
      <b className="text-[32px] tracking-[0.01em]">
        {title}
      </b>
      <div className="rounded-[15px] flex flex-row gap-5 items-center justify-center p-[7.5px]">
      {showDateDiv && (
      <div className="date flex gap-2 w-[322px] h-[46px] text-base text-text-title-1">
          <div className="custom-border px-2 rounded-corner-radius-corner-radius-2 bg-white box-border w-[157px] flex flex-row items-center justify-start py-3 px-spacing-spacing-2 border-[1px] border-solid border-for-lines-text-field">
            <div className=" tracking-[-0.02em] leading-[140%] overflow-hidden text-ellipsis whitespace-nowrap">
              <input className="border-0 outline-0" type="date" />
            </div>
          </div>
          <div className="custom-border px-2 rounded-corner-radius-corner-radius-2 bg-white box-border w-[157px] flex flex-row items-center justify-start py-3 px-spacing-spacing-2 border-[1px] border-solid border-for-lines-text-field">
            <div className=" tracking-[-0.02em] leading-[140%] overflow-hidden text-ellipsis whitespace-nowrap">
            <input className="border-0 outline-0" type="date" />
            </div>
          </div>
        </div>
         )}
{showButton && (
<div className="h-12 px-5 py-[13px] bg-rose-500 rounded-[10px] justify-start items-start gap-2.5 inline-flex cursor-pointer">
  <div className="text-neutral-50 text-sm font-normal font-['Product Sans'] leading-snug">+ Add Watchlist </div>
</div>
)}
        <img
          className=" w-[30px] h-[30px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/minotification@2x.png"
        />
      </div>
    </div>
  );
};

export default Navbar;
