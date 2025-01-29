import { UserDto } from "@/actions/entities/user";
import { hasPasswordAction } from "./actions";
import SecuritySection from "./security.section";
import { getUser } from "@/actions/entities/session";

export default async function SecurityPage() {
  const { user } = await getUser();
  if (!user) return null;
  const hasPassword = await hasPasswordAction();

  return <SecuritySection user={user as UserDto} hasPassword={hasPassword} />;
}
