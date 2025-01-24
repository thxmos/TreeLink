import { getUser } from "@/actions/session.actions";
import { prisma } from "@/utils/prisma";
import { QRCode } from "@prisma/client";

export type CreateQRCodeDto = {
  url: string;
  userId: string;
};

export type QRCodeDto = {
  id: string;
  url: string;
  userId: string;
};

function toDtoMapper(qrCode: QRCode): QRCodeDto {
  return {
    id: qrCode.id,
    url: qrCode.url,
    userId: qrCode.userId,
  };
}

export async function createQRCode(data: CreateQRCodeDto): Promise<QRCodeDto> {
  const userQrCodes = await getQRCodesByUserId(data.userId);
  if (userQrCodes.length < 10) {
    const createdQRCode = await prisma.qRCode.create({ data });
    return toDtoMapper(createdQRCode);
  } else {
    throw new Error("You have reached the maximum number of QR codes");
  }
}

export async function getQRCodesByUserId(userId: string): Promise<QRCodeDto[]> {
  const qrCodes = await prisma.qRCode.findMany({ where: { userId } });
  return qrCodes.map(toDtoMapper);
}

export async function deleteQRCode(id: string): Promise<void> {
  const { user } = await getUser();
  if (!user) {
    throw new Error("User not found");
  }
  await prisma.qRCode.delete({ where: { id, userId: user.id } });
}
