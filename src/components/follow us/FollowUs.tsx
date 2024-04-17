import { followUsContent } from "../../constants/followUs";

function FollowUs() {
  return (
    <div className="w-full bg-white/5 py-8">
      <p className="mb-3 text-center text-[0.65rem] leading-[1.2rem] tracking-wide text-white/90 lg:text-[0.75rem] lg:leading-[1.5rem]">
        {followUsContent.title}
      </p>

      <div className="flex justify-center gap-x-[20px]">
        {followUsContent.icons.map((icon, i) => (
          <button
            key={`follow-us-icon-${i}`}
            className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-lg bg-white/15 transition-colors hover:bg-white/25 focus-visible:bg-white/25 focus-visible:outline-none"
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FollowUs;
