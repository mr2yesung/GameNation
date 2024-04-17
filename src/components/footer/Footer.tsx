import { footerContent } from "../../constants/footer";

function Footer() {
  return (
    <footer className="py-4">
      <p className="px-4 text-center text-[0.5rem] leading-[0.75rem] lg:text-[0.75rem] lg:leading-[1.2rem]">
        &copy; {new Date().getFullYear()} GameNation. All rights reserved.{" "}
        {footerContent.intro1}
        <span className="block">{footerContent.intro2}</span>
      </p>
    </footer>
  );
}

export default Footer;
