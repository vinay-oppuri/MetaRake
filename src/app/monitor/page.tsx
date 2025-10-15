import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MOCK_MONITORING_DATA } from '@/lib/placeholder-data';
import { cn } from '@/lib/utils';

export default function MonitorPage() {

    const statusVariant = (status: string) => {
        if (status === 'success') return 'default';
        if (status === 'warning') return 'destructive'; // Using destructive for visibility
        return 'secondary';
    }
  return (
    <div className="space-y-8">
      <PageHeader
        title="System Monitoring"
        description="Operational view of system health and performance."
        breadcrumb={[{ name: 'System' }, { name: 'Monitor' }]}
      />
      
      <Card>
        <CardHeader>
          <CardTitle>Live System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {MOCK_MONITORING_DATA.map((metric) => (
              <Card key={metric.name} className="flex items-center p-4">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{metric.name}</p>
                  <p className="text-xl font-semibold">{metric.value}</p>
                </div>
                <Badge variant={statusVariant(metric.status)}>
                  {metric.status}
                </Badge>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
