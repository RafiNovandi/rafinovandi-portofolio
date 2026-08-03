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
    <main>
      <div className="mx-auto m-50 mb-90 flex flex-wrap items-center justify-center px-6 lg:flex-nowrap gap-20">
        <ProfileCard />
        <DeskripsiProfile />
      </div>
      <div className="w-full h-auto min-h-100 py-10 md:py-2 flex justify-center mb-40">
        <ShowSkills />
      </div>
      <div className="w-full h-auto min-h-300 py-30 md:py-2 flex flex-col justify-center items-center">
        <HobbyFotoCard />
        <DeskripsiPhotography />
      </div>
      <div className="flex justify-center gap-28 w-full py-50">
        <div className="animate-cosmic absolute flex align-center bg-[#E4E4E4] items-center p-2 w-18 h-18 rounded-3xl -translate-x-120 translate-y-85 rotate-[-15deg] shadow-[-5px_18px_100px_rgba(0,0,0,0.15)]  blur-[1px]">
          <img
            className="w-full h-full rounded-xl border"
            src={SpotifyLogo.src}
          />
        </div>
        <DeskripsiMusic />
        <SpotifyCard />
        <div className="animate-cosmic absolute flex align-center bg-black items-center p-2 w-20 h-20 rounded-3xl translate-x-40 -translate-y-50 rotate-[-5.204deg] shadow-[-5px_18px_100px_rgba(0,0,0,0.15)] blur-[3px]">
          <img className="w-full h-full rounded-xl" src={SoundcloudLogo.src} />
        </div>
        <div className="animate-cosmic absolute flex align-center bg-white items-center p-2 w-20 h-20 rounded-3xl translate-x-110 translate-y-130 rotate-[5.482deg] shadow-[-5px_18px_100px_rgba(0,0,0,0.15)]  blur-[2px]">
          <img className="w-full h-full" src={AppleMusicLogo.src} />
        </div>
      </div>
    </main>
  );
}
