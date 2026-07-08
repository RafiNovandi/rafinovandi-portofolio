'use client'
import DeskripsiProfile from "@/components/deskripsi";
import ProfileCard from "@/components/profile-card";

export default function AboutPage() {
  return (
    <div className="mx-auto mt-40 flex flex-wrap items-center justify-center gap-12 px-6 lg:flex-nowrap">
      <ProfileCard />
      <DeskripsiProfile />
    </div>
  );
}
