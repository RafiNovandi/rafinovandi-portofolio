import rafiPic from "@/assets/images/rafi.jpeg";
import ilhamPic from "@/assets/images/ilham.jpeg";
import rhenataPic from "@/assets/images/rhenata.jpeg";
import favianPic from "@/assets/images/favian.jpeg";

export default function ProfileBandHover() {
  return (
    // <div className="flex flex-col justify-center items-center gap-8">
    //   <div className="flex flex-wrap gap-4 justify-center items-center mt-40">
    //     <div className="group flex flex-col items-center duration-300 w-15 h-15 rounded-lg bg-white hover:p-1 hover:scale-[2.7] hover:shadow-[0_2px_12.8px_0_rgba(0,0,0,0.10)]">
    //       <div className="absolute -translate-y-1.5 text-center w-5 rounded-[3px] justify-center bg-[#45ACB4] hidden group-hover:block">
    //         <h1 className="text-[0.4rem] text-white">Me!!</h1>
    //       </div>
    //       <img
    //         className="w-full h-full rounded-xl border hover:rounded-sm hover:border-[0.2px] border-gray-200 duration-300"
    //         src={rafiPic.src}
    //         alt="Rafi"
    //       />
    //     </div>
    //     <div>-</div>
    //     <div className="group flex flex-col items-center duration-300 w-15 h-15 rounded-lg bg-white hover:p-1 hover:scale-[2.7] hover:shadow-[0_2px_12.8px_0_rgba(0,0,0,0.10)]">
    //       <div className="absolute -translate-y-1.5 text-center w-6 rounded-[3px] justify-center bg-[#3862B8] hidden group-hover:block">
    //         <h1 className="text-[0.4rem] text-white">Ilham</h1>
    //       </div>
    //       <img
    //         className="w-full h-full rounded-xl border hover:rounded-sm hover:border-[0.2px] border-gray-200 duration-300"
    //         src={ilhamPic.src}
    //         alt="Ilham"
    //       />
    //     </div>
    //     <div>-</div>
    //     <div className="group flex flex-col items-center duration-300 w-15 h-15 rounded-lg bg-white hover:p-1 hover:scale-[2.7] hover:shadow-[0_2px_12.8px_0_rgba(0,0,0,0.10)]">
    //       <div className="absolute -translate-y-1.5 text-center w-8.5 rounded-[3px] justify-center bg-[#ff6d91] hidden group-hover:block">
    //         <h1 className="text-[0.4rem] text-white">Rhenata</h1>
    //       </div>
    //       <img
    //         className="w-full h-full rounded-xl border hover:rounded-sm hover:border-[0.2px] border-gray-200 duration-300"
    //         src={rhenataPic.src}
    //         alt="Rhenata"
    //       />
    //     </div>
    //     <div>-</div>
    //     <div className="group flex flex-col items-center duration-300 w-15 h-15 rounded-lg bg-white hover:p-1 hover:scale-[2.7] hover:shadow-[0_2px_12.8px_0_rgba(0,0,0,0.10)]">
    //       <div className="absolute -translate-y-1.5 text-center w-7 rounded-[3px] justify-center bg-[#947FEB] hidden group-hover:block">
    //         <h1 className="text-[0.4rem] text-white">Favian</h1>
    //       </div>
    //       <img
    //         className="w-full h-full rounded-xl border hover:rounded-sm hover:border-[0.2px] border-gray-200 duration-300"
    //         src={favianPic.src}
    //         alt="Favian"
    //       />
    //     </div>
    //   </div>
    // </div>

    /// versi lebih kecil
    <div className="flex flex-wrap gap-3 justify-center items-center">
      <div className="group flex flex-col items-center duration-300 w-12 h-12 rounded-xl hover:rounded-lg bg-white hover:p-0.75 hover:scale-[3] hover:shadow-[0_2px_12.8px_0_rgba(0,0,0,0.10)]">
        <div className="absolute -translate-y-1.5 text-center w-5 rounded-[3px] justify-center bg-[#45ACB4] hidden group-hover:block">
          <h1 className="text-[0.4rem] text-white">Me!!</h1>
        </div>
        <img
          className="w-full h-full border rounded-xl group-hover:rounded-md group-hover:border-[0.2px] border-gray-200 duration-300"
          src={rafiPic.src}
          alt="Rafi"
        />
      </div>
      <div>-</div>
      <div className="group flex flex-col items-center duration-300 w-12 h-12 rounded-xl hover:rounded-lg bg-white hover:p-0.75 hover:scale-[3] hover:shadow-[0_2px_12.8px_0_rgba(0,0,0,0.10)]">
        <div className="absolute -translate-y-1.5 text-center w-6 rounded-[3px] justify-center bg-[#3862B8] hidden group-hover:block">
          <h1 className="text-[0.4rem] text-white">Ilham</h1>
        </div>
        <img
          className="w-full h-full border rounded-xl group-hover:rounded-md group-hover:border-[0.2px] border-gray-200 duration-300"
          src={ilhamPic.src}
          alt="Ilham"
        />
      </div>
      <div>-</div>
      <div className="group flex flex-col items-center duration-300 w-12 h-12 rounded-xl hover:rounded-lg bg-white hover:p-0.75 hover:scale-[3] hover:shadow-[0_2px_12.8px_0_rgba(0,0,0,0.10)]">
        <div className="absolute -translate-y-1.5 text-center w-8.5 rounded-[3px] justify-center bg-[#ff6d91] hidden group-hover:block">
          <h1 className="text-[0.4rem] text-white">Rhenata</h1>
        </div>
        <img
          className="w-full h-full border rounded-xl group-hover:rounded-md group-hover:border-[0.2px] border-gray-200 duration-300"
          src={rhenataPic.src}
          alt="Rhenata"
        />
      </div>
      <div>-</div>
      <div className="group flex flex-col items-center duration-300 w-12 h-12 rounded-xl hover:rounded-lg bg-white hover:p-0.75 hover:scale-[3] hover:shadow-[0_2px_12.8px_0_rgba(0,0,0,0.10)]">
        <div className="absolute -translate-y-1.5 text-center w-7 rounded-[3px] justify-center bg-[#947FEB] hidden group-hover:block">
          <h1 className="text-[0.4rem] text-white">Favian</h1>
        </div>
        <img
          className="w-full h-full border rounded-xl group-hover:rounded-md group-hover:border-[0.2px] border-gray-200 duration-300"
          src={favianPic.src}
          alt="Favian"
        />
      </div>
    </div>
  );
}
