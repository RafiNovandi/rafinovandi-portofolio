'use client'
import DeskripsiProfile from "@/components/deskripsi";
import ProfileCard from "@/components/profile-card";

export default function AboutPage() {
  return (
    <div className="mx-auto mt-40 flex flex-col items-center gap-12 px-6 lg:flex-row lg:justify-center">
      <ProfileCard />
      <DeskripsiProfile />
    </div>
  );
}
