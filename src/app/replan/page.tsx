import { PageHeader } from '@/components/page-header';
import { ReplanFeed } from '@/components/replan-feed';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { RefreshCw } from 'lucide-react';

export default function ReplanPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Real-time Replanner"
        description="Monitor and manage automated adjustments to rake plans based on live events."
        breadcrumb={[{ name: 'Operations' }, { name: 'Replan' }]}
      />
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Replanning Event Feed</CardTitle>
                <CardDescription>Live feed of events triggering replans.</CardDescription>
              </div>
              <Button variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" /> Manual Replan
              </Button>
            </CardHeader>
            <CardContent>
              <ReplanFeed />
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Automation Settings</CardTitle>
              <CardDescription>Configure how the system responds to events.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <Label htmlFor="auto-reroute" className="flex flex-col space-y-1">
                  <span>Auto Reroute</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    Automatically reroute for port congestion.
                  </span>
                </Label>
                <Switch id="auto-reroute" defaultChecked />
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <Label htmlFor="auto-adjust" className="flex flex-col space-y-1">
                  <span>Auto Adjust</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    Adjust plans for priority order changes.
                  </span>
                </Label>
                <Switch id="auto-adjust" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
