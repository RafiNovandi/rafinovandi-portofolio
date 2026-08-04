import { Highlighter } from "@/components/ui/highlighter";
import ProfileBandHover from "./profile-band-hover";

export default function DeskripsiMusic() {
  return (
    <div className="w-full max-w-145 pb-15">
      <h1 className="text-3xl font-bold pb-5">
        <Highlighter action="custom-highlight" color="#FF789A">
          Music
        </Highlighter>
      </h1>
      <h2 className="text-description">
        My biggest passion outside of my daily routine is making music. My
        journey exploring music production started in 2019 and continues to this
        day. Currently, I am in a music group called{" "}
        <Highlighter action="highlight" color="#DAE2F4">
          <span className="text-[#3862B8]">Just Once.</span>
        </Highlighter>{" "}
        alongside three of my friends. So far, we have released an EP featuring
        four tracks. Meet the rest of my group members:
        <span className="inline-flex align-middle ml-4">
          <ProfileBandHover />
        </span>
      </h2>
    </div>
  );
}
