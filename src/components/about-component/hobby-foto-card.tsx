import kucingPic from "@/assets/images/film-kucing.jpg";
import mobilPic from "@/assets/images/film-mobil.jpg";
import rumahPic from "@/assets/images/film-rumah.jpg";
import iconLeft from "@/assets/icons/left-icon-strip.svg";
import iconRight from "@/assets/icons/right-icon-strip.svg";

export default function HobbyFotoCard() {
  return (
    <div className="relative flex justify-center group items-center w-full min-h-140 overflow-hidden group">
      <img
        className="absolute -translate-x-115 -translate-y-34 max-[770px]:hidden"
        src={iconLeft.src}
        alt="Icon Left"
      />
      <div className="absolute h-80 w-full max-w-80 rounded-4xl p-4 bg-white -rotate-13 -translate-x-50 translate-y-6 drop-shadow-[0_25px_50px_rgba(0,0,0,0.10)] -z-1 max-[770px]:max-w-60 max-[770px]:h-60 max-md:p-3 max-[550px]:-translate-x-10">
        <img
          className="w-full h-full rounded-xl"
          src={mobilPic.src}
          alt="Foto Mobil"
        />
      </div>
      <div className="h-80 w-full max-w-80 rounded-4xl p-4 bg-white max-[770px]:max-w-60 max-[770px]:h-60 max-md:p-3 drop-shadow-[0_25px_50px_rgba(0,0,0,0.10)]">
        <img
          className="w-full h-full rounded-xl"
          src={kucingPic.src}
          alt="Foto Kucing"
        />
      </div>
      <div className="absolute h-80 w-full max-w-80 rounded-4xl p-4 rotate-13 bg-white translate-x-50 translate-y-6 drop-shadow-[0_25px_50px_rgba(0,0,0,0.10)] max-[770px]:max-w-60 max-[770px]:h-60 max-md:p-3 max-[550px]:translate-x-10 max-[550px]:-z-1 max-[550px]:translate-y-5 ">
        <img
          className="w-full h-full rounded-xl"
          src={rumahPic.src}
          alt="Foto Rumah"
        />
      </div>
      <img
        className="absolute translate-x-100 translate-y-60 max-[770px]:hidden"
        src={iconRight.src}
        alt="Icon Right"
      />
    </div>
  );
}
