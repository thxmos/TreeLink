import { DashboardCard } from "@/components/layouts/dashboard-card";
import { validateAuthPage } from "@/utils/security/auth";

export default async function AnalyticsPage() {
  const user = await validateAuthPage();

  // const links = await getActiveLinksByUserId(user.id);

  return (
    <DashboardCard title="Analytics" description="View your analytics">
      <div>
        <p>Analytics</p>
      </div>
      {/* {links.map((link) => (
        <Card key={link.id} className="p-4">
          <p className="text-lg font-bold">{link.title}</p>
          <p className="text-sm text-gray-500">{link.url}</p>
          <p className="text-sm text-gray-500">Clicks: {link.clicks || 0}</p>
        </Card>
      ))} */}
    </DashboardCard>
  );
}
