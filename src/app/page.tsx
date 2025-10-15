import { CardMetric } from '@/components/card-metric';
import { DataTable } from '@/components/data-table';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MOCK_RAKE_PLANS, MOCK_REPLAN_FEED } from '@/lib/placeholder-data';
import { ArrowRight, Package, ShipWheel, Train, Warehouse } from 'lucide-react';
import Link from 'next/link';
import { ReplanFeed } from '@/components/replan-feed';

export default function Dashboard() {
  const columns = [
    { accessorKey: 'planId', header: 'Plan ID' },
    { accessorKey: 'origin', header: 'Origin' },
    { accessorKey: 'destination', header: 'Destination' },
    { accessorKey: 'status', header: 'Status' },
    { accessorKey: 'departure', header: 'Est. Departure' },
  ];

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Dashboard"
        description="Global overview of rake operations and key performance indicators."
      />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardMetric icon={Train} title="Active Rakes" value="14" delta="+2 since last week" />
        <CardMetric icon={Package} title="Material Tonnage" value="12,500 T" delta="-5% vs. target" />
        <CardMetric icon={Warehouse} title="Stockyard Capacity" value="78%" delta="Stable" />
        <CardMetric icon={ShipWheel} title="Port Throughput" value="8,200 T/day" delta="+3% today" />
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Active Rake Plans</CardTitle>
                <CardDescription>
                  Overview of currently active and upcoming rake plans.
                </CardDescription>
              </div>
              <Button asChild>
                <Link href="/plans">View All Plans <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardHeader>
            <CardContent>
              <DataTable columns={columns} data={MOCK_RAKE_PLANS.slice(0, 5)} />
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Replanning Feed</CardTitle>
              <CardDescription>Live updates on replanning events.</CardDescription>
            </CardHeader>
            <CardContent>
              <ReplanFeed events={MOCK_REPLAN_FEED} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
