export interface RecaptchaResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
}

export async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("reCAPTCHA secret key is not configured");
    return false;
  }

  if (!token) {
    console.error("reCAPTCHA token is missing");
    return false;
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
        }),
      }
    );

    const data: RecaptchaResponse = await response.json();

    if (!data.success) {
      console.error("reCAPTCHA verification failed:", data["error-codes"]);
      return false;
    }

    return true;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}
