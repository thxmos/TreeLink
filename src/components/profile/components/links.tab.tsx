import { LinkCard } from "./link-card";
import { LinkDtoWithId } from "@/types/links";
import { ThemeNoId } from "@/types/theme";

export function LinksTab({
  links,
  theme,
  isPreview,
}: {
  links: LinkDtoWithId[];
  theme: ThemeNoId;
  isPreview: boolean;
}) {
  return (
    <div className="space-y-4 flex flex-col">
      {links.map((link, index) => {
        if (link.active) {
          return (
            <LinkCard
              key={index}
              {...link}
              theme={theme}
              isPreview={isPreview}
            />
          );
        }
      })}
    </div>
  );
}
