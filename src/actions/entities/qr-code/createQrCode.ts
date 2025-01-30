"use server";

import { CreateQRCodeDto } from "@/types/qr-codes";
import { qrCodeRepository } from "@/repositories/qr-code";
import { withAuth } from "@/utils/security/auth";
import { SessionUser } from "@/utils/lib/lucia";

export const createQRCode = withAuth(
  async (user: SessionUser, data: CreateQRCodeDto) => {
    const userQrCodes = await qrCodeRepository.getAllByUserId(user.id);
    if (userQrCodes.length < 10) {
      const { userId, ...rest } = data;
      const createdQRCode = await qrCodeRepository.create({
        ...rest,
        user: { connect: { id: user.id } },
      });
      return createdQRCode;
    } else {
      throw new Error("You have reached the maximum number of QR codes");
    }
  },
);
