"use server";

import {
  getThemeByUserId,
  updateThemeByUserId,
  createTheme,
  CreateThemeDto,
} from "@/data-access/theme";

export async function upsertTheme(userId: string, theme: CreateThemeDto) {
  const existingTheme = await getThemeByUserId(userId);
  if (existingTheme) {
    await updateThemeByUserId(userId, {
      ...theme,
      userId,
    });
  } else {
    await createTheme(userId, theme);
  }
}
