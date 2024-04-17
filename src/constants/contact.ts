const contactContent = {
  title: "Keep up with the GameNation realm!",
  intro1: "Sign up to our newsletter to receive the latest news,",
  intro2: "other exciting news from us at GameNation.",
  image: "/images/contact.png",
  imageText: "contact GameNation spiderman image",
  inputs: [
    { type: "text", name: "first_name", display: "First Name" },
    { type: "text", name: "last_name", display: "Last Name" },
    { type: "email", name: "user_email", display: "Email" },
  ],
  inputStyle:
    "w-full rounded-lg border-2 border-white/40 bg-white/5 p-6 text-base text-white transition-colors placeholder:text-white/90 focus-visible:border-white/60 focus-visible:outline-none",
  checkbox:
    "I agree to receive promotional offers relating to all GameNation games and services.",
  button: {
    default: "Get In Touch",
    loading: "Signing Up",
    signedUp: "Signed Up Successfully",
  },
};

export { contactContent };
