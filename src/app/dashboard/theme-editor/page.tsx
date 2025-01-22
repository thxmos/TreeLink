import { getTheme } from "@/actions/theme.actions";
import { getUser } from "@/actions/session.actions";

const ThemeEditorPage = async () => {
  const sessionUser = await getUser();
  const userId = sessionUser.user?.id;
  if (!userId) return null;
  const theme = await getTheme(userId);

  return <div className="space-y-4 mb-16">lol</div>;
};

export default ThemeEditorPage;
