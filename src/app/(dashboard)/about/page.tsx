"use client";

import DeskripsiPhotography from "@/components/about-component/deskripsi-photography";
import DeskripsiProfile from "@/components/about-component/deskripsi-profile";
import HobbyFotoCard from "@/components/about-component/hobby-foto-card";
import ProfileCard from "@/components/about-component/profile-card";
import ShowSkills from "@/components/about-component/skils-component";
import DeskripsiMusic from "@/components/about-component/deskripsi-music";
import SpotifyCard from "@/components/about-component/spotify-card";
import SpotifyLogo from "@/assets/icons/spotify-logo.svg";
import SoundcloudLogo from "@/assets/icons/soundcloud-logo.svg";
import AppleMusicLogo from "@/assets/icons/applemusic.svg";

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="mx-auto my-12 lg:my-70 flex flex-wrap items-center justify-center px-6 lg:flex-nowrap gap-10 lg:gap-20">
        <ProfileCard />
        <DeskripsiProfile />
      </div>

      <div className="w-full h-auto min-h-100 py-10 md:py-2 flex justify-center mb-20 lg:mb-40">
        <ShowSkills />
      </div>

      <div className="w-full h-auto min-h-300 py-20 lg:py-30 flex flex-col justify-center items-center">
        <HobbyFotoCard />
        <DeskripsiPhotography />
      </div>

      <div className="mx-auto my-12 lg:my-70 flex flex-wrap items-center justify-center px-6 lg:flex-nowrap gap-40">
        <div className="animate-cosmic absolute flex align-center bg-[#E4E4E4] items-center p-2 w-18 h-18 rounded-3xl -translate-x-120 translate-y-70 rotate-[-15deg] shadow-[-5px_18px_100px_rgba(0,0,0,0.15)]  blur-[1px] max-xl:hidden">
          <img
            className="w-full h-full rounded-xl border"
            src={SpotifyLogo.src}
          />
        </div>
        <DeskripsiMusic />
        <SpotifyCard />
        <div className="animate-cosmic absolute flex align-center bg-black items-center p-2 w-20 h-20 rounded-3xl translate-x-40 -translate-y-70 rotate-[-5.204deg] shadow-[-5px_18px_100px_rgba(0,0,0,0.15)] blur-[3px] max-xl:hidden">
          <img className="w-full h-full rounded-xl" src={SoundcloudLogo.src} />
        </div>
        <div className="animate-cosmic absolute flex align-center bg-white items-center p-2 w-20 h-20 rounded-3xl translate-x-110 translate-y-90 rotate-[5.482deg] shadow-[-5px_18px_100px_rgba(0,0,0,0.15)]  blur-[2px] max-xl:hidden">
          <img className="w-full h-full" src={AppleMusicLogo.src} />
        </div>
      </div>
    </main>
  );
}
