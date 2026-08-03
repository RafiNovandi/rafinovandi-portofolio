"use client";

import DeskripsiPhotography from "@/components/about-component/deskripsi-photography";
import DeskripsiProfile from "@/components/about-component/deskripsi-profile";
import HobbyFotoCard from "@/components/about-component/hobby-foto-card";
import ProfileCard from "@/components/about-component/profile-card";
import ShowSkills from "@/components/about-component/skils-component";
import DeskripsiMusic from "@/components/about-component/deskripsi-music";
import SpotifyCard from "@/components/about-component/spotify-card";

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
        <DeskripsiMusic />
        <SpotifyCard />
      </div>
    </main>
  );
}
