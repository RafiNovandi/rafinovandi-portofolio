"use client";

import DeskripsiProfile from "@/components/about-component/deskripsi";
import ProfileCard from "@/components/about-component/profile-card";
import ShowSkills from "@/components/about-component/skils-component";

export default function AboutPage() {
  return (
    <main>
      <div className="mx-auto m-40 flex flex-wrap items-center justify-center px-6 lg:flex-nowrap">
        <ProfileCard />
        <DeskripsiProfile />
      </div>
      <div className="w-full h-auto min-h-[400px] py-10 md:py-20 bg-gray-100 flex justify-center">
        <ShowSkills />
      </div>
    </main>
  );
}
