"use server";

import { type BrowserData } from "@/types/clicks";
import { Country } from "@prisma/client";
import { clickRepository } from "@/repositories/click";

/* createClick()
 *
 * Takes linkId and browser data and tracks clicks on links
 * Triggered by any user on profile page so needs to be unauthenticated
 */

export const createClick = async (linkId: string, data: BrowserData) => {
  await clickRepository.create({
    link: {
      connect: {
        id: linkId,
      },
    },
    ...data,
    country: data.country as Country,
  });
};
