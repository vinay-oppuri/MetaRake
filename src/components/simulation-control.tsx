import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Play, Pause, Square } from 'lucide-react';

export function SimulationControl() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Simulation Controls</CardTitle>
        <CardDescription>
          Configure parameters and run the digital twin simulation.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="scenario">Scenario</Label>
          <Select>
            <SelectTrigger id="scenario">
              <SelectValue placeholder="Select a scenario" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="base">Base Case (Normal Operations)</SelectItem>
              <SelectItem value="high-demand">High Demand Fluctuation</SelectItem>
              <SelectItem value="disruption">Port Disruption</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="speed">Simulation Speed</Label>
          <Select defaultValue="4x">
            <SelectTrigger id="speed">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1x">1x</SelectItem>
              <SelectItem value="2x">2x</SelectItem>
              <SelectItem value="4x">4x</SelectItem>
              <SelectItem value="8x">8x</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Play className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Pause className="h-4 w-4" />
          </Button>
          <Button variant="destructive" size="icon">
            <Square className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
