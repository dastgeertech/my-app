import Navbar from "./navbar";
const HornlinkPIUWatchlist = () => {
  return (
    <div className="px-6 mt-10">
      <Navbar title="Watchlist Page" />
      <div class="mx-auto">

      <div className="flex flex-row items-center justify-center gap-[20px] my-4 text-xs">
          <div className="rounded-lg bg-white flex flex-col items-start justify-start p-2.5">
            <div className="flex flex-row items-center justify-start gap-[5px]">
              <img
                className=" w-[18px] h-[18px] object-cover"
                alt=""
                src="/icon-search@2x.png"
              />
              <div className="text-slate-900 text-xs font-normal font-['Product Sans'] leading-[18px]">
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
              <select class="w-full text-slate-900 text-xs font-normal font-['Product Sans'] leading-[18px] bg-white  focus:outline-none appearance-none">
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

        <div class="flex flex-col table-shadow">
          <div class="overflow-x-auto w-full rounded-[12px] shadow-md sm:rounded-lg">
            <div class="w-full align-middle">
              <div class="overflow-hidden ">
                <table class="w-full divide-y ">
                  <thead class="bg-[#D2E4FF] border-none">
                    <tr className="border-hidden">
                      <th scope="col" class="p-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-all"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600  border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 "
                          />
                          <label for="checkbox-all" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-12 text-start [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#18181B] text-[14px] tracking-[0.70px] leading-[normal] whitespace-nowrap"
                      >
                        Watchlist Name
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-12 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#18181B] text-[14px] tracking-[0.70px] leading-[normal] whitespace-nowrap"
                      >
                        Identity Type
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-12 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#18181B] text-[14px] tracking-[0.70px] leading-[normal] whitespace-nowrap"
                      >
                        Identity Number
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-12 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#18181B] text-[14px] tracking-[0.70px] leading-[normal] whitespace-nowrap"
                      >
                        Phone Number
                      </th>
                      <th
                        scope="col"
                        class="p-4 [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#18181B] text-[14px] tracking-[0.70px] leading-[normal]"
                      >
                        <span>Action</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y ">
                    <tr class=" ">
                      <td class="p-4 w-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-table-1"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
                          />
                          <label for="checkbox-table-1" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td class="py-4 px-12 text-start mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        {" "}
                        Mohamed Ali Abdi
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        <span className="bg-[#D2E4FF] text-[#1A2B88] rounded-[20px] px-2 py-[6px]">
                          Passport
                        </span>
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#6366E9] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        P0018965230
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        +252 61 7895642
                      </td>
                      <td class="py-4 px-12">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 12C0 8.27247 0 6.4087 0.608964 4.93853C1.42092 2.97831 2.97831 1.42092 4.93853 0.608964C6.4087 0 8.27247 0 12 0C15.7275 0 17.5913 0 19.0615 0.608964C21.0217 1.42092 22.5791 2.97831 23.391 4.93853C24 6.4087 24 8.27247 24 12C24 15.7275 24 17.5913 23.391 19.0615C22.5791 21.0217 21.0217 22.5791 19.0615 23.391C17.5913 24 15.7275 24 12 24C8.27247 24 6.4087 24 4.93853 23.391C2.97831 22.5791 1.42092 21.0217 0.608964 19.0615C0 17.5913 0 15.7275 0 12Z"
                            fill="#6366E9"
                          />
                          <path
                            d="M12.8401 6.4L7.36673 12.1933C7.16006 12.4133 6.96006 12.8467 6.92006 13.1467L6.6734 15.3067C6.58673 16.0867 7.14673 16.62 7.92006 16.4867L10.0667 16.12C10.3667 16.0667 10.7867 15.8467 10.9934 15.62L16.4667 9.82667C17.4134 8.82667 17.8401 7.68667 16.3667 6.29334C14.9001 4.91334 13.7867 5.4 12.8401 6.4Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.9268 7.36664C12.2134 9.20664 13.7068 10.6133 15.5601 10.8"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 18.6667H18"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr class=" ">
                      <td class="p-4 w-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-table-1"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
                          />
                          <label for="checkbox-table-1" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td class="py-4 px-12 text-start mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        {" "}
                        Farah Ahmed Nor
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        <span className="bg-[#FAD6D6] text-[#1A2B88] rounded-[20px] px-2 py-[6px]">
                          National ID
                        </span>
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#6366E9] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        NID056542185965
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        +252 61 7895642
                      </td>
                      <td class="py-4 px-12">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 12C0 8.27247 0 6.4087 0.608964 4.93853C1.42092 2.97831 2.97831 1.42092 4.93853 0.608964C6.4087 0 8.27247 0 12 0C15.7275 0 17.5913 0 19.0615 0.608964C21.0217 1.42092 22.5791 2.97831 23.391 4.93853C24 6.4087 24 8.27247 24 12C24 15.7275 24 17.5913 23.391 19.0615C22.5791 21.0217 21.0217 22.5791 19.0615 23.391C17.5913 24 15.7275 24 12 24C8.27247 24 6.4087 24 4.93853 23.391C2.97831 22.5791 1.42092 21.0217 0.608964 19.0615C0 17.5913 0 15.7275 0 12Z"
                            fill="#6366E9"
                          />
                          <path
                            d="M12.8401 6.4L7.36673 12.1933C7.16006 12.4133 6.96006 12.8467 6.92006 13.1467L6.6734 15.3067C6.58673 16.0867 7.14673 16.62 7.92006 16.4867L10.0667 16.12C10.3667 16.0667 10.7867 15.8467 10.9934 15.62L16.4667 9.82667C17.4134 8.82667 17.8401 7.68667 16.3667 6.29334C14.9001 4.91334 13.7867 5.4 12.8401 6.4Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.9268 7.36664C12.2134 9.20664 13.7068 10.6133 15.5601 10.8"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 18.6667H18"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr class=" ">
                      <td class="p-4 w-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-table-1"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
                          />
                          <label for="checkbox-table-1" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td class="py-4 px-12 text-start mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        {" "}
                        Mahad Mohamed Ahmed
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        <span className="bg-[#D2E4FF] text-[#1A2B88] rounded-[20px] px-2 py-[6px]">
                          Passport
                        </span>
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#6366E9] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        P0018563244
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        +252 61 7895642
                      </td>
                      <td class="py-4 px-12">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 12C0 8.27247 0 6.4087 0.608964 4.93853C1.42092 2.97831 2.97831 1.42092 4.93853 0.608964C6.4087 0 8.27247 0 12 0C15.7275 0 17.5913 0 19.0615 0.608964C21.0217 1.42092 22.5791 2.97831 23.391 4.93853C24 6.4087 24 8.27247 24 12C24 15.7275 24 17.5913 23.391 19.0615C22.5791 21.0217 21.0217 22.5791 19.0615 23.391C17.5913 24 15.7275 24 12 24C8.27247 24 6.4087 24 4.93853 23.391C2.97831 22.5791 1.42092 21.0217 0.608964 19.0615C0 17.5913 0 15.7275 0 12Z"
                            fill="#6366E9"
                          />
                          <path
                            d="M12.8401 6.4L7.36673 12.1933C7.16006 12.4133 6.96006 12.8467 6.92006 13.1467L6.6734 15.3067C6.58673 16.0867 7.14673 16.62 7.92006 16.4867L10.0667 16.12C10.3667 16.0667 10.7867 15.8467 10.9934 15.62L16.4667 9.82667C17.4134 8.82667 17.8401 7.68667 16.3667 6.29334C14.9001 4.91334 13.7867 5.4 12.8401 6.4Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.9268 7.36664C12.2134 9.20664 13.7068 10.6133 15.5601 10.8"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 18.6667H18"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr class=" ">
                      <td class="p-4 w-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-table-1"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
                          />
                          <label for="checkbox-table-1" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td class="py-4 px-12 text-start mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        {" "}
                        Fartuun Daa’uud Ali
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        <span className="bg-[#FAD6D6] text-[#1A2B88] rounded-[20px] px-2 py-[6px]">
                          National ID
                        </span>
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#6366E9] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        NID056542185965
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        +252 61 7895642
                      </td>
                      <td class="py-4 px-12">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 12C0 8.27247 0 6.4087 0.608964 4.93853C1.42092 2.97831 2.97831 1.42092 4.93853 0.608964C6.4087 0 8.27247 0 12 0C15.7275 0 17.5913 0 19.0615 0.608964C21.0217 1.42092 22.5791 2.97831 23.391 4.93853C24 6.4087 24 8.27247 24 12C24 15.7275 24 17.5913 23.391 19.0615C22.5791 21.0217 21.0217 22.5791 19.0615 23.391C17.5913 24 15.7275 24 12 24C8.27247 24 6.4087 24 4.93853 23.391C2.97831 22.5791 1.42092 21.0217 0.608964 19.0615C0 17.5913 0 15.7275 0 12Z"
                            fill="#6366E9"
                          />
                          <path
                            d="M12.8401 6.4L7.36673 12.1933C7.16006 12.4133 6.96006 12.8467 6.92006 13.1467L6.6734 15.3067C6.58673 16.0867 7.14673 16.62 7.92006 16.4867L10.0667 16.12C10.3667 16.0667 10.7867 15.8467 10.9934 15.62L16.4667 9.82667C17.4134 8.82667 17.8401 7.68667 16.3667 6.29334C14.9001 4.91334 13.7867 5.4 12.8401 6.4Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.9268 7.36664C12.2134 9.20664 13.7068 10.6133 15.5601 10.8"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 18.6667H18"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr class=" ">
                      <td class="p-4 w-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-table-1"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
                          />
                          <label for="checkbox-table-1" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td class="py-4 px-12 text-start mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        {" "}
                        Hassan Sheikh Farah
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        <span className="bg-[#D2E4FF] text-[#1A2B88] rounded-[20px] px-2 py-[6px]">
                          Passport
                        </span>
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#6366E9] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        P0018965230
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        +252 61 7895642
                      </td>
                      <td class="py-4 px-12">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 12C0 8.27247 0 6.4087 0.608964 4.93853C1.42092 2.97831 2.97831 1.42092 4.93853 0.608964C6.4087 0 8.27247 0 12 0C15.7275 0 17.5913 0 19.0615 0.608964C21.0217 1.42092 22.5791 2.97831 23.391 4.93853C24 6.4087 24 8.27247 24 12C24 15.7275 24 17.5913 23.391 19.0615C22.5791 21.0217 21.0217 22.5791 19.0615 23.391C17.5913 24 15.7275 24 12 24C8.27247 24 6.4087 24 4.93853 23.391C2.97831 22.5791 1.42092 21.0217 0.608964 19.0615C0 17.5913 0 15.7275 0 12Z"
                            fill="#6366E9"
                          />
                          <path
                            d="M12.8401 6.4L7.36673 12.1933C7.16006 12.4133 6.96006 12.8467 6.92006 13.1467L6.6734 15.3067C6.58673 16.0867 7.14673 16.62 7.92006 16.4867L10.0667 16.12C10.3667 16.0667 10.7867 15.8467 10.9934 15.62L16.4667 9.82667C17.4134 8.82667 17.8401 7.68667 16.3667 6.29334C14.9001 4.91334 13.7867 5.4 12.8401 6.4Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.9268 7.36664C12.2134 9.20664 13.7068 10.6133 15.5601 10.8"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 18.6667H18"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr class=" ">
                      <td class="p-4 w-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-table-1"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
                          />
                          <label for="checkbox-table-1" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td class="py-4 px-12 text-start mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        {" "}
                        Mohamed Abdi Farah
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        <span className="bg-[#FAD6D6] text-[#1A2B88] rounded-[20px] px-2 py-[6px]">
                          National ID
                        </span>
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#6366E9] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        NID056542185965
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        +252 61 7895642
                      </td>
                      <td class="py-4 px-12">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 12C0 8.27247 0 6.4087 0.608964 4.93853C1.42092 2.97831 2.97831 1.42092 4.93853 0.608964C6.4087 0 8.27247 0 12 0C15.7275 0 17.5913 0 19.0615 0.608964C21.0217 1.42092 22.5791 2.97831 23.391 4.93853C24 6.4087 24 8.27247 24 12C24 15.7275 24 17.5913 23.391 19.0615C22.5791 21.0217 21.0217 22.5791 19.0615 23.391C17.5913 24 15.7275 24 12 24C8.27247 24 6.4087 24 4.93853 23.391C2.97831 22.5791 1.42092 21.0217 0.608964 19.0615C0 17.5913 0 15.7275 0 12Z"
                            fill="#6366E9"
                          />
                          <path
                            d="M12.8401 6.4L7.36673 12.1933C7.16006 12.4133 6.96006 12.8467 6.92006 13.1467L6.6734 15.3067C6.58673 16.0867 7.14673 16.62 7.92006 16.4867L10.0667 16.12C10.3667 16.0667 10.7867 15.8467 10.9934 15.62L16.4667 9.82667C17.4134 8.82667 17.8401 7.68667 16.3667 6.29334C14.9001 4.91334 13.7867 5.4 12.8401 6.4Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.9268 7.36664C12.2134 9.20664 13.7068 10.6133 15.5601 10.8"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 18.6667H18"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr class=" ">
                      <td class="p-4 w-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-table-1"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
                          />
                          <label for="checkbox-table-1" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td class="py-4 px-12 text-start mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        {" "}
                        Abdul Ahmed Jamal 
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        <span className="bg-[#D2E4FF] text-[#1A2B88] rounded-[20px] px-2 py-[6px]">
                          Passport
                        </span>
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#6366E9] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        P0018965230
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        +252 61 7895642
                      </td>
                      <td class="py-4 px-12">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 12C0 8.27247 0 6.4087 0.608964 4.93853C1.42092 2.97831 2.97831 1.42092 4.93853 0.608964C6.4087 0 8.27247 0 12 0C15.7275 0 17.5913 0 19.0615 0.608964C21.0217 1.42092 22.5791 2.97831 23.391 4.93853C24 6.4087 24 8.27247 24 12C24 15.7275 24 17.5913 23.391 19.0615C22.5791 21.0217 21.0217 22.5791 19.0615 23.391C17.5913 24 15.7275 24 12 24C8.27247 24 6.4087 24 4.93853 23.391C2.97831 22.5791 1.42092 21.0217 0.608964 19.0615C0 17.5913 0 15.7275 0 12Z"
                            fill="#6366E9"
                          />
                          <path
                            d="M12.8401 6.4L7.36673 12.1933C7.16006 12.4133 6.96006 12.8467 6.92006 13.1467L6.6734 15.3067C6.58673 16.0867 7.14673 16.62 7.92006 16.4867L10.0667 16.12C10.3667 16.0667 10.7867 15.8467 10.9934 15.62L16.4667 9.82667C17.4134 8.82667 17.8401 7.68667 16.3667 6.29334C14.9001 4.91334 13.7867 5.4 12.8401 6.4Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.9268 7.36664C12.2134 9.20664 13.7068 10.6133 15.5601 10.8"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 18.6667H18"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr class=" ">
                      <td class="p-4 w-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-table-1"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
                          />
                          <label for="checkbox-table-1" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td class="py-4 px-12 text-start mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        {" "}
                        Aden Bile Kamal 
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        <span className="bg-[#FAD6D6] text-[#1A2B88] rounded-[20px] px-2 py-[6px]">
                          National ID
                        </span>
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#6366E9] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        NID056542185965
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        +252 61 7895642
                      </td>
                      <td class="py-4 px-12">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 12C0 8.27247 0 6.4087 0.608964 4.93853C1.42092 2.97831 2.97831 1.42092 4.93853 0.608964C6.4087 0 8.27247 0 12 0C15.7275 0 17.5913 0 19.0615 0.608964C21.0217 1.42092 22.5791 2.97831 23.391 4.93853C24 6.4087 24 8.27247 24 12C24 15.7275 24 17.5913 23.391 19.0615C22.5791 21.0217 21.0217 22.5791 19.0615 23.391C17.5913 24 15.7275 24 12 24C8.27247 24 6.4087 24 4.93853 23.391C2.97831 22.5791 1.42092 21.0217 0.608964 19.0615C0 17.5913 0 15.7275 0 12Z"
                            fill="#6366E9"
                          />
                          <path
                            d="M12.8401 6.4L7.36673 12.1933C7.16006 12.4133 6.96006 12.8467 6.92006 13.1467L6.6734 15.3067C6.58673 16.0867 7.14673 16.62 7.92006 16.4867L10.0667 16.12C10.3667 16.0667 10.7867 15.8467 10.9934 15.62L16.4667 9.82667C17.4134 8.82667 17.8401 7.68667 16.3667 6.29334C14.9001 4.91334 13.7867 5.4 12.8401 6.4Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.9268 7.36664C12.2134 9.20664 13.7068 10.6133 15.5601 10.8"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 18.6667H18"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr class=" ">
                      <td class="p-4 w-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-table-1"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
                          />
                          <label for="checkbox-table-1" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td class="py-4 px-12 text-start mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        {" "}
                        Leyla Aweis Ali
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        <span className="bg-[#D2E4FF] text-[#1A2B88] rounded-[20px] px-2 py-[6px]">
                          Passport
                        </span>
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#6366E9] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        P0018965230
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        +252 61 7895642
                      </td>
                      <td class="py-4 px-12">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 12C0 8.27247 0 6.4087 0.608964 4.93853C1.42092 2.97831 2.97831 1.42092 4.93853 0.608964C6.4087 0 8.27247 0 12 0C15.7275 0 17.5913 0 19.0615 0.608964C21.0217 1.42092 22.5791 2.97831 23.391 4.93853C24 6.4087 24 8.27247 24 12C24 15.7275 24 17.5913 23.391 19.0615C22.5791 21.0217 21.0217 22.5791 19.0615 23.391C17.5913 24 15.7275 24 12 24C8.27247 24 6.4087 24 4.93853 23.391C2.97831 22.5791 1.42092 21.0217 0.608964 19.0615C0 17.5913 0 15.7275 0 12Z"
                            fill="#6366E9"
                          />
                          <path
                            d="M12.8401 6.4L7.36673 12.1933C7.16006 12.4133 6.96006 12.8467 6.92006 13.1467L6.6734 15.3067C6.58673 16.0867 7.14673 16.62 7.92006 16.4867L10.0667 16.12C10.3667 16.0667 10.7867 15.8467 10.9934 15.62L16.4667 9.82667C17.4134 8.82667 17.8401 7.68667 16.3667 6.29334C14.9001 4.91334 13.7867 5.4 12.8401 6.4Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.9268 7.36664C12.2134 9.20664 13.7068 10.6133 15.5601 10.8"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 18.6667H18"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr class=" ">
                      <td class="p-4 w-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-table-1"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
                          />
                          <label for="checkbox-table-1" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td class="py-4 px-12 text-start mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        {" "}
                        Mohamed Salah Dani
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        <span className="bg-[#FAD6D6] text-[#1A2B88] rounded-[20px] px-2 py-[6px]">
                          National ID
                        </span>
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#6366E9] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        NID056542185965
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        +252 61 7895642
                      </td>
                      <td class="py-4 px-12">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 12C0 8.27247 0 6.4087 0.608964 4.93853C1.42092 2.97831 2.97831 1.42092 4.93853 0.608964C6.4087 0 8.27247 0 12 0C15.7275 0 17.5913 0 19.0615 0.608964C21.0217 1.42092 22.5791 2.97831 23.391 4.93853C24 6.4087 24 8.27247 24 12C24 15.7275 24 17.5913 23.391 19.0615C22.5791 21.0217 21.0217 22.5791 19.0615 23.391C17.5913 24 15.7275 24 12 24C8.27247 24 6.4087 24 4.93853 23.391C2.97831 22.5791 1.42092 21.0217 0.608964 19.0615C0 17.5913 0 15.7275 0 12Z"
                            fill="#6366E9"
                          />
                          <path
                            d="M12.8401 6.4L7.36673 12.1933C7.16006 12.4133 6.96006 12.8467 6.92006 13.1467L6.6734 15.3067C6.58673 16.0867 7.14673 16.62 7.92006 16.4867L10.0667 16.12C10.3667 16.0667 10.7867 15.8467 10.9934 15.62L16.4667 9.82667C17.4134 8.82667 17.8401 7.68667 16.3667 6.29334C14.9001 4.91334 13.7867 5.4 12.8401 6.4Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.9268 7.36664C12.2134 9.20664 13.7068 10.6133 15.5601 10.8"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 18.6667H18"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr class=" ">
                      <td class="p-4 w-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-table-1"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
                          />
                          <label for="checkbox-table-1" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td class="py-4 px-12 text-start mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        {" "}
                        Saciid Cigale Ahmed 
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        <span className="bg-[#D2E4FF] text-[#1A2B88] rounded-[20px] px-2 py-[6px]">
                          Passport
                        </span>
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-[#6366E9] text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        P0018965230
                      </td>
                      <td class="py-4 px-12 text-center mt-[-1.00px] [font-family:'Product_Sans-Regular',Helvetica] font-normal text-zinc-900 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
                        +252 61 7895642
                      </td>
                      <td class="py-4 px-12">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 12C0 8.27247 0 6.4087 0.608964 4.93853C1.42092 2.97831 2.97831 1.42092 4.93853 0.608964C6.4087 0 8.27247 0 12 0C15.7275 0 17.5913 0 19.0615 0.608964C21.0217 1.42092 22.5791 2.97831 23.391 4.93853C24 6.4087 24 8.27247 24 12C24 15.7275 24 17.5913 23.391 19.0615C22.5791 21.0217 21.0217 22.5791 19.0615 23.391C17.5913 24 15.7275 24 12 24C8.27247 24 6.4087 24 4.93853 23.391C2.97831 22.5791 1.42092 21.0217 0.608964 19.0615C0 17.5913 0 15.7275 0 12Z"
                            fill="#6366E9"
                          />
                          <path
                            d="M12.8401 6.4L7.36673 12.1933C7.16006 12.4133 6.96006 12.8467 6.92006 13.1467L6.6734 15.3067C6.58673 16.0867 7.14673 16.62 7.92006 16.4867L10.0667 16.12C10.3667 16.0667 10.7867 15.8467 10.9934 15.62L16.4667 9.82667C17.4134 8.82667 17.8401 7.68667 16.3667 6.29334C14.9001 4.91334 13.7867 5.4 12.8401 6.4Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.9268 7.36664C12.2134 9.20664 13.7068 10.6133 15.5601 10.8"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6 18.6667H18"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-center my-4">
            <div className="flex">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="17" height="17" rx="2" fill="#C9D2FA"/>
<path d="M10 5L6 8.5L10 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
            Showing Page 1-14 out of 78
            <div>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="17" y="17" width="17" height="17" rx="2" transform="rotate(180 17 17)" fill="#6366E9"/>
<path d="M7 12L11 8.5L7 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default HornlinkPIUWatchlist;
