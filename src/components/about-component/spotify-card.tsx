import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import Link from "next/link";
import coverEP from "@/assets/images/cover-album.jpg";
import ArrowEP from "./arrow-ep";

export default function SpotifyCard() {
  return (
    <Link
      href="https://open.spotify.com/album/36affE9rHhUPpgwmWU2RZk?si=2EvMJUH0SRq-KpRHIWZFCw"
      target="_blank"
    >
      {/* <Card className="relative mx-auto w-full max-w-sm pt-0 items-center">
        <div>
          <h1>Press Me!!</h1>
        </div>
        <img
          className="w-full h-auto p-4"
          src={coverAlbum.src}
          alt="Foto Album"
        />
        <CardHeader>
          <CardTitle>Just Once</CardTitle>
          <CardDescription>Release Date: </CardDescription>
          <CardDescription>1313514524</CardDescription>
        </CardHeader>
      </Card> */}

      <div className="group border rounded-3xl w-fit shadow-[-16px_13px_40px_rgba(0,0,0,0.10)] rotate-[8.318deg] hover:scale-[1.05] duration-300 bg-white">
        <div className="absolute bg-[#3862B8] w-28 p-1.5 flex items-center flex-col rounded-2xl -translate-y-3 -translate-x-5 rotate-[-13deg] opacity-0 group-hover:opacity-100 duration-300">
          <h1 className="text-white">Press Me!!</h1>
        </div>
        <img
          className="w-full max-w-70 h-auto p-3 rounded-3xl"
          src={coverEP.src}
          alt="Foto Album"
        />
        <div className="px-3.5 py-4 pb-7 items-center flex flex-col">
          <h1 className="text-black text-2xl font-bold">Just Once</h1>
          <p className="text-[#8F8F8F]">Release Date: </p>
          <p className="text-[#8F8F8F]">18-04-2025</p>
        </div>
        <ArrowEP className="absolute translate-x-62 -translate-y-43 rotate-[-8deg] opacity-0 group-hover:opacity-100 duration-300" />
      </div>
    </Link>
  );
}
