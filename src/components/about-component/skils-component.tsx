import { skill } from "@/app/constants/skill";
import { color } from "motion";
import Image from "next/image";
import React from "react";

export default function ShowSkills() {
  return (
    //VERSI 1
    // <div className="h-fit w-full max-w-4xl mx-5 md:mx-0 mt-20 bg-white dark:bg-gray-400 p-5 md:p-10 rounded-2xl">
    //   <h1 className="text-3xl font-bold">Skills</h1>
    //   <h3>My professional skills.</h3>
    //   <div className="flex flex-wrap gap-2.5 py-5">
    //     {skill.map((item, index) => (
    //       <div
    //         key={index}
    //         className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-3xl border duration-200 hover:scale-[1.08]"
    //         style={{ backgroundColor: item.bgColor }}
    //       >
    //         <Image
    //           src={item.icon}
    //           alt={`${item.title} icon`}
    //           width={20}
    //           height={20}
    //           className="rounded-sm object-contain"
    //         />
    //         <div style={{ color: item.textColor }}>{item.title}</div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    //VERSI 2
    // <div className="h-fit w-full max-w-4xl mx-5 md:mx-0 mt-20 bg-white rounded-2xl border shadow-[13px_33px_65px_0_rgba(0,0,0,0.05)] overflow-hidden">
    //   <div className="bg-gray-100 w-full px-5 py-3.5 border-b">
    //     <h1 className="text-2xl font-bold text-black">Skills</h1>
    //     <h3 className="text-gray-500">My professional skills.</h3>
    //   </div>
    //   <div className="flex flex-wrap gap-2.5 py-5 px-5">
    //     {skill.map((item, index) => (
    //       <div
    //         key={index}
    //         className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-[15px] border duration-200 hover:scale-[1.08]"
    //         style={{ backgroundColor: item.bgColor }}
    //       >
    //         <Image
    //           src={item.icon}
    //           alt={`${item.title} icon`}
    //           width={20}
    //           height={20}
    //           className="rounded-sm object-contain"
    //         />
    //         <div style={{ color: item.textColor }}>{item.title}</div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    //VERSI 3
    // <div className="h-fit w-full max-w-4xl mx-5 md:mx-0 mt-20">
    //   <div className="w-full py-3.5 text-center mb-4">
    //     <h1 className="text-3xl font-bold">Skills</h1>
    //     <h3 className="text-gray-400">My professional skills.</h3>
    //   </div>
    //   <div className="flex flex-wrap gap-3 py-5 px-5 justify-center">
    //     {skill.map((item, index) => (
    //       <div
    //         key={index}
    //         className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-[15px] border duration-200 hover:-rotate-z-6 origin-left"
    //         style={{ backgroundColor: item.bgColor }}
    //       >
    //         <Image
    //           src={item.icon}
    //           alt={`${item.title} icon`}
    //           width={20}
    //           height={20}
    //           className="rounded-sm object-contain"
    //         />
    //         <div style={{ color: item.textColor }}>{item.title}</div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    //VERSI 4
    <div className="h-fit w-full max-w-162 mx-5 md:mx-0 mt-20">
      <div className="w-full text-center mb-10">
        <h1 className="text-3xl font-bold">My Top Skills</h1>
        <h3 className="text-description">my profesional skill</h3>
      </div>

      <div className="flex gap-1 mb-4">
        <h1 className="text-md font-bold">Skills</h1>
        <h3 className="text-md text-description">
          (total {skill.length - 1} + 1)
        </h3>
      </div>
      <div className="flex flex-wrap items-center gap-3 py-5 px-5 border border-[#DDD] dark:border-[#6f6f6f] rounded-2xl shadow-[-2px_7px_15px_0_rgba(0,0,0,0.07)]">
        {skill.map((item, index) => {
          const isFirstItem = index === 0;
          const isLastItem = index === skill.length - 1;

          return (
            <React.Fragment key={index}>
              {!isFirstItem && !isLastItem && (
                <span className="text-lg font-medium">,</span>
              )}
              {isLastItem && skill.length > 1 && (
                <span className="text-lg font-medium">&</span>
              )}

              <div
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl duration-200 hover:scale-[1.05] hover:rotate-0
                ${item.isDashed ? "border border-dashed border-black" : "border border-transparent"}
                ${item.rotation ? item.rotation : ""}
                `}
                style={{ backgroundColor: item.bgColor, color: item.textColor }}
              >
                <div className="font-medium">{item.title}</div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
