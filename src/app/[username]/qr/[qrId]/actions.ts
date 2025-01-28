"use server";

import { getQRCodeById, updateQRCode } from "@/data-access/qr-codes";
import { createScan, CreateScanDto } from "@/data-access/scans";
import type { BrowserData } from "@/types/clicks";

export const updateQrScanAction = async (
  qrId: string,
  browserData: Partial<BrowserData>,
) => {
  const qrCode = await getQRCodeById(qrId);
  if (!qrCode) throw new Error("QR code not found");
  qrCode.scans = (qrCode.scans || 0) + 1;
  await updateQRCode(qrId, qrCode);
  await createScan({
    qrId,
    ...browserData,
  } as CreateScanDto);
};
