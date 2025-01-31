"use server";

import { APP_NAME } from "@/constants/app";
import { resend } from "@/utils/lib/resend";
import PasswordResetEmail from "@/emails/password-reset";
import { getUserByEmail } from "@/actions/entities/user/getUserByEmail";
import { createPasswordResetToken } from "@/actions/entities/password-reset-token/createPasswordResetToken";

export const sendResetEmail = async (email: string) => {
  const user = await getUserByEmail(email);
  if (!user) return { error: "User not found", status: 404 };

  const { token } = await createPasswordResetToken(user.id);

  const res = await sendPasswordResetEmail(user.email, token, user.name ?? "");

  if (res.status !== 200) return { error: "Couldn't send email", status: 500 };

  return { success: true };
};

const sendPasswordResetEmail = async (
  email: string,
  token: string,
  name: string,
) => {
  const verificationUrl = `${process.env.NEXT_PUBLIC_URL}/reset-password?token=${token}`;

  const fromEmail =
    process.env.NODE_ENV === "production"
      ? `${APP_NAME} <no-reply@${process.env.NEXT_PUBLIC_URL}>`
      : "onboarding@resend.dev";

  const res = await resend.emails.send({
    to: email,
    from: fromEmail,
    subject: `Password Reset - ${APP_NAME}`,
    react: PasswordResetEmail({ url: verificationUrl, name: name }),
  });

  if (res.error) return { ...res.error };
  return { message: "Password reset email sent.", status: 200 };
};
