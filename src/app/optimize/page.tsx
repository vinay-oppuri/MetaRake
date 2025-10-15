import { LogViewer } from '@/components/log-viewer';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MOCK_OPTIMIZATION_LOGS } from '@/lib/placeholder-data';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function OptimizePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Optimization Engine"
        description="Configure and run the optimization engine to generate the best rake plans."
        breadcrumb={[{ name: 'Planning' }, { name: 'Optimize' }]}
      />
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Optimization Parameters</CardTitle>
              <CardDescription>Set the constraints and objectives for the optimizer.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="objective">Objective</Label>
                <Select defaultValue="throughput">
                  <SelectTrigger id="objective">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="throughput">Maximize Throughput</SelectItem>
                    <SelectItem value="cost">Minimize Cost</SelectItem>
                    <SelectItem value="tat">Minimize Turnaround Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="iterations">Max Iterations</Label>
                <Input id="iterations" type="number" defaultValue="1000" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Play className="mr-2 h-4 w-4" /> Run Optimization
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Optimization Log</CardTitle>
                <CardDescription>Real-time output from the optimization engine.</CardDescription>
              </div>
               <Button asChild variant="secondary">
                <Link href="/plans">View Plans <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardHeader>
            <CardContent>
              <LogViewer logs={MOCK_OPTIMIZATION_LOGS} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
