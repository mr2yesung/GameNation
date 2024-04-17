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
  checkbox:
    "I agree to receive promotional offers relating to all GameNation games and services.",
  button: {
    default: "Get In Touch",
    loading: "Signing Up",
    signedUp: "Signed Up Successfully",
  },
};

export { contactContent };
