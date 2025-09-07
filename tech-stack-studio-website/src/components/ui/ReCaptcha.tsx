"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export interface ReCaptchaRef {
  reset: () => void;
  executeAsync: () => Promise<string | null>;
  getValue: () => string | null;
}

interface ReCaptchaProps {
  onChange?: (token: string | null) => void;
  onExpired?: () => void;
  onError?: () => void;
  theme?: "light" | "dark";
  size?: "compact" | "normal" | "invisible";
}

const ReCaptcha = forwardRef<ReCaptchaRef, ReCaptchaProps>(
  ({ onChange, onExpired, onError, theme = "dark", size = "normal" }, ref) => {
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    useImperativeHandle(ref, () => ({
      reset: () => {
        recaptchaRef.current?.reset();
      },
      executeAsync: () => {
        return recaptchaRef.current?.executeAsync() || Promise.resolve(null);
      },
      getValue: () => {
        return recaptchaRef.current?.getValue() || null;
      },
    }));

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
      console.warn("reCAPTCHA site key is not configured");
      return null;
    }

    return (
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={siteKey}
        onChange={onChange}
        onExpired={onExpired}
        onError={onError}
        theme={theme}
        size={size}
      />
    );
  }
);

ReCaptcha.displayName = "ReCaptcha";

export default ReCaptcha;
