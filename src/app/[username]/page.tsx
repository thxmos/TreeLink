import { getUserByUsername } from "@/actions/user";
import { getActiveLinksByUserId } from "./actions";
import { getThemeAction } from "@/actions/theme";
import React from "react";
import { redirect } from "next/navigation";
import LinkTree from "@/components/profile/linktree";
import { LinkDtoWithId } from "@/types/links";

export default async function ArtistPage({
  params,
}: {
  params: { username: string };
}) {
  const user = await getUserByUsername(params.username);
  if (!user) {
    return redirect("/404");
  }

  const links = await getActiveLinksByUserId(user.id);
  const theme = await getThemeAction(user.id);

  return (
    <LinkTree
      isPreview={false}
      initialLinks={links as LinkDtoWithId[]}
      initialTheme={theme}
      user={user}
    />
  );
}
