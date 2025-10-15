import { CardMetric } from '@/components/card-metric';
import { PageHeader } from '@/components/page-header';
import { PlanChart } from '@/components/plan-chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MOCK_PLAN_DETAILS_CHART, MOCK_RAKE_PLANS } from '@/lib/placeholder-data';
import { Boxes, Ship, Timer, Weight } from 'lucide-react';
import { notFound } from 'next/navigation';

export default function PlanDetailPage({ params }: { params: { planId: string } }) {
  const plan = MOCK_RAKE_PLANS.find(p => p.planId === params.planId);

  if (!plan) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title={`Rake Plan: ${plan.planId}`}
        description={`Detailed view for plan from ${plan.origin} to ${plan.destination}.`}
        breadcrumb={[{ name: 'Planning' }, { name: 'Plans', href: '/plans' }, { name: plan.planId }]}
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardMetric icon={Boxes} title="Wagons" value="59" delta="BOXN Type" />
        <CardMetric icon={Weight} title="Total Tonnage" value="4,550 T" delta="98% utilization" />
        <CardMetric icon={Timer} title="Est. TAT" value="72 Hours" delta="vs. 75h average" />
        <CardMetric icon={Ship} title="Destination Port" value={plan.destination} delta="Berth A5" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Material Composition</CardTitle>
          <CardDescription>Breakdown of materials included in this rake plan.</CardDescription>
        </CardHeader>
        <CardContent>
          <PlanChart data={MOCK_PLAN_DETAILS_CHART.data} chartConfig={MOCK_PLAN_DETAILS_CHART.config} />
        </CardContent>
      </Card>
    </div>
  );
}
