import React, { useState } from "react";
import profilePic from "@/assets/images/profile.jpg";
import codeIcon from "@/assets/icons/codeIcon.svg";
import imageIcon from "@/assets/icons/imageIcon.svg";
import InstagramIcon from "../icons/instagram-icon";
import EmailIcon from "../icons/email-icon";
import LocationIcon from "../icons/location-icon";

interface ProfileCardProps {
  instagram?: string;
  email?: string;
  lokasi?: string;
}

export default function ProfileCard({
  instagram = "@rafinovandii",
  email = "mrafinovandi04@gmail.com",
  lokasi = "Indonesia",
}: ProfileCardProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="group relative w-full max-w-75 min-h-112.5 border border-[#efefef] shadow-[-13px_20px_60px_0_rgba(0,0,0,0.1)] bg-white p-6 rounded-[1.875rem] overflow-visible transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 hover:shadow-[0_24px_64px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)] text-left rotate-[4.71deg] mx-22">
      {/* Photo wrapper — Default: ~55% height, Hover: 100% height */}
      <div className="absolute top-3 left-3 right-3 h-[280px] overflow-hidden border border-[#eaeaea] rounded-[17px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:h-[calc(100%-24px)] group-hover:rounded-[18px]">
        <img
          src={profilePic.src}
          alt="Profile"
          className="max-w-full h-full object-cover object-top block transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[165px] bg-gradient-to-b from-transparent to-[#a9a9ab] opacity-0 transition-opacity duration-500 ease pointer-events-none group-hover:opacity-100" />
      </div>

      {/* Info — always pinned to bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-[18px_20px_20px] flex flex-col gap-3 transition-colors duration-500 ease group-hover:bg-transparent pb-5 pt-0">
        <div
          className="
                  
                  absolute
                  top-[-310px]
                  right-[-80px]
                  flex
                  h-[43px]
                  w-full
                  max-w-[135px]
                  items-center
                  justify-center
                  gap-[7px]
                  rounded-[12px]
                  bg-[#FFDBE4]
                  text-[#bf677b]
                  rotate-[-4deg]
                  shadow-[-5px_4px_36.3px_-8px_rgba(0,0,0,0.1)]
                  transition-all
                  duration-300
                  hover:scale-[1.10]
                  hover:shadow-[-13px_20px_60px_0_rgba(0,0,0,0.1)]
                  overflow-hidden
                "
        >
          <img src={imageIcon.src} alt="Image Icon" />
          <div>Frontend</div>
        </div>
        <div
          className="
                  absolute
                  bottom-35
                  -left-[65px]
                  flex
                  h-[90px]
                  w-full
                  max-w-[90px]
                  items-center
                  justify-center
                  rounded-[20px]
                  bg-[#ABDBDF]
                  rotate-[-6deg]
                  shadow-[-5px_4px_36.3px_-8px_rgba(0,0,0,0.1)]
                  transition-all
                  duration-300
                  hover:scale-[1.10]
                  hover:shadow-[-13px_20px_60px_0_rgba(0,0,0,0.1)]
                "
        >
          <img
            src={codeIcon.src}
            alt="Code Icon"
            className="w-full max-w-[55px]"
          />
        </div>
        <div className="items-center gap-1.5 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 overflow-hidden">
          <h1 className="flex gap-2 text-[#547688] tracking-tight leading-[1.2] pt-3 pb-2">
            <LocationIcon className="w-5 h-5 shrink-0" />
            {lokasi}
          </h1>
          <h1 className="flex gap-2 text-[#547688] tracking-tight leading-[1.2] pt-3 pb-2 ">
            <InstagramIcon className="w-5 h-5 shrink-0" />
            {instagram}
          </h1>
          <h1 className="flex gap-2 text-[#547688] tracking-tight leading-[1.2] pt-3 pb-2">
            <EmailIcon className="w-5 h-5 shrink-0" />
            {email}
          </h1>
        </div>
      </div>
    </div>
  );
}
