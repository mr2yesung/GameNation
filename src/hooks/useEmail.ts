import { useState } from "react";

import emailjs from "@emailjs/browser";
import { capitalizeInputValue } from "../utilities/capitalizeInputValue";

type useEmailProps = {
  serviceId: string;
  templateId: string;
  publicKey: string;
};

type useEmailResponse = {
  isSignedUp: boolean;
  isLoading: boolean;
  sendEmail: (form: HTMLFormElement) => Promise<void>;
};

function useEmail({
  serviceId,
  templateId,
  publicKey,
}: useEmailProps): useEmailResponse {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function sendEmail(form: HTMLFormElement) {
    setIsLoading(true);

    try {
      const inputFirstName = form.elements.namedItem(
        "first_name",
      ) as HTMLInputElement;
      const inputLastName = form.elements.namedItem(
        "last_name",
      ) as HTMLInputElement;

      if (inputFirstName) capitalizeInputValue(inputFirstName);
      if (inputLastName) capitalizeInputValue(inputLastName);

      await emailjs.sendForm(serviceId, templateId, form, publicKey);

      setIsSignedUp(true);

      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { isSignedUp, isLoading, sendEmail };
}

export { useEmail };
