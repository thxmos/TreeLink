import { QRListSection } from "./qr-list.section";
import { QRGeneratorSection } from "./qr-generator.section";
import { validateAuthPage } from "@/utils/security/auth";
import { getQRCodesByUserId } from "@/actions/entities/qr-code/getQrCodesByUserId";
/*
TODO:
- Add a click counter to the QR code
- Create new QR code should add it in real time, hook up with zustand
*/

const QRGeneratorPage = async () => {
  const user = await validateAuthPage();
  const qrCodes = await getQRCodesByUserId(user.id);

  return (
    <div className="flex flex-col gap-4">
      <QRGeneratorSection userId={user.id} initialQRCodes={qrCodes} />
      <QRListSection />
    </div>
  );
};

export default QRGeneratorPage;
