import { contactContent } from "../../constants/contact";

function Contact() {
  return (
    <section className="mb-10 flex w-full items-end justify-center gap-x-10">
      <img
        className="hidden xl:block"
        src={contactContent.image}
        alt={contactContent.imageText}
      />

      <div className="max-w-[360px] space-y-5 pb-5 md:max-w-[455px] lg:pb-8">
        <h3 className="text-start text-[2rem] font-semibold leading-[2.25rem] tracking-tighter md:text-[2.25rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[2.75rem] xl:text-[2.75rem] xl:leading-[3.25rem]">
          {contactContent.title}
        </h3>
        <p className="section-text text-start">
          {contactContent.intro1}
          <span className="block">{contactContent.intro2}</span>
        </p>

        <form className="flex flex-col gap-5">
          {contactContent.inputs.map((input) => (
            <input
              key={input.name}
              type={input.type}
              placeholder={input.display}
              name={input.name}
              aria-label={input.display}
              className="w-full rounded-lg border-2 border-white/40 bg-white/5 p-6 text-base text-white transition-colors placeholder:capitalize placeholder:text-white/90 focus-visible:border-white/60 focus-visible:outline-none"
              required
            />
          ))}

          <div className="flex items-start gap-x-2 pl-1">
            <input
              type="checkbox"
              className="mt-1.5 focus-visible:outline-none"
              id="promotion-agreement"
              required
            />
            <label htmlFor="promotion-agreement">
              {contactContent.checkbox}
            </label>
          </div>

          <button
            type="submit"
            disabled={false}
            className="w-full rounded-lg bg-[#327fff]/85 p-6 text-base capitalize text-white transition-colors hover:bg-[#327fff] focus-visible:bg-[#327fff] focus-visible:outline-none disabled:pointer-events-none disabled:bg-[#327fff]/70"
          >
            {contactContent.button.default}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
