import { skill } from "@/app/constants/skill";
import { color } from "motion";
import Image from "next/image";

export default function ShowSkills() {
  return (
    <div className="h-fit w-full max-w-4xl mx-5 md:mx-0 mt-20 bg-white dark:bg-gray-400 p-5 md:p-10 rounded-2xl">
      <h1 className="text-3xl font-bold">Skills</h1>
      <h3>My professional skills.</h3>
      <div className="flex flex-wrap gap-2.5 py-5">
        {skill.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-3xl border"
            style={{ backgroundColor: item.bgColor }}
          >
            <Image
              src={item.icon}
              alt={`${item.title} icon`}
              width={20}
              height={20}
              className="rounded-sm object-contain"
            />
            <div style={{ color: item.textColor }}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
