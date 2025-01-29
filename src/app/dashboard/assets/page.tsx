import { getUser } from "@/actions/entities/session";
import { AssetsUploadSection } from "./assets-upload.section";
import { getImagesByUserId } from "@/actions/entities/assets";
import AssetsListSection from "./assets-list.section";

export default async function ImagesPage() {
  const { user } = await getUser();
  if (!user) return null;

  const assets = await getImagesByUserId(user.id);

  return (
    <>
      <AssetsUploadSection />
      <AssetsListSection initialAssets={assets} />
    </>
  );
}
