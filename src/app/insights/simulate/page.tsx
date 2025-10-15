"use client";
import { PageHeader } from '@/components/page-header';
import { SimulationControl } from '@/components/simulation-control';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { MOCK_SIMULATION_DATA } from '@/lib/placeholder-data';
import type { ChartConfig } from '@/components/ui/chart';

const chartConfig = {
  throughput: {
    label: 'Throughput (Tons)',
    color: 'hsl(var(--chart-1))',
  },
  queue_length: {
    label: 'Queue Length',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export default function SimulatePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Digital Twin Simulation"
        description="Simulate rake operations to forecast performance and identify bottlenecks."
        breadcrumb={[{ name: 'Operations' }, { name: 'Simulate' }]}
      />
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <SimulationControl />
        </div>
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Simulation Output</CardTitle>
              <CardDescription>Live visualization of the running simulation.</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <LineChart
                  accessibilityLayer
                  data={MOCK_SIMULATION_DATA}
                  margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                  <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={8}/>
                  <YAxis yAxisId="left" stroke="hsl(var(--chart-1))" />
                  <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--chart-2))" />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <Line dataKey="throughput" type="monotone" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} yAxisId="left" />
                  <Line dataKey="queue_length" type="step" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={false} yAxisId="right" />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
