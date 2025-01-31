"use server";

import { updateUserAvatar } from "@/actions/entities/user/updateUserAvatar";
import {
  createImage,
  type CreateImageDto,
} from "@/actions/entities/asset/createImage";
import { deleteBlob } from "./deleteBlob";
import { uploadBlob } from "./uploadBlob";
import { withAuth } from "@/utils/security/auth";
import { SessionUser } from "@/utils/lib/lucia";

export async function uploadAvatar(formData: FormData) {
  const path = "avatars/";
  const file = formData.get("file") as File;
  const blob = await uploadBlob(file, path);

  if (blob) {
    await updateUserAvatar(blob.url);
  } else {
    await deleteBlob(path);
    throw new Error("Failed to update avatar");
  }
}

//TODO probably not needed
export async function uploadLinkImage(
  formData: FormData,
  data: CreateImageDto,
) {
  const path = "links/";
  const file = formData.get("file") as File;
  return await uploadImageAndBlob(file, path, data);
}

export async function uploadProductImage(
  formData: FormData,
  data: Omit<CreateImageDto, "userId">,
) {
  const path = "products/";
  const file = formData.get("file") as File;
  return await uploadImageAndBlob(file, path, data);
}

/*
Authenticated user uploads an image to the blob, creates an image in the database, and returns the URL of the image if successful.
If the image fails to be created in the database, the blob image is deleted.
*/
export const uploadImageAndBlob = withAuth(
  async (
    user: SessionUser,
    file: File,
    path: string,
    data: Omit<CreateImageDto, "userId">,
  ) => {
    const blobResult = await uploadBlob(file, path);

    if (blobResult) {
      try {
        const image = await createImage({
          url: blobResult.url,
          userId: user.id,
          title: data.title,
          description: data.description,
        });
        return image;
      } catch (error) {
        await deleteBlob(path);
        throw new Error(
          error instanceof Error ? error.message : "Failed to save image",
        );
      }
    } else {
      throw new Error("Failed to upload image");
    }
  },
);
