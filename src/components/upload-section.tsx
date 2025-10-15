import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UploadCloud } from 'lucide-react';
import { Label } from './ui/label';

export function UploadSection() {
  return (
    <div className="space-y-4">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="stockyard-data">Stockyard Data</Label>
        <Input id="stockyard-data" type="file" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="order-data">Order Data</Label>
        <Input id="order-data" type="file" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="wagon-data">Wagon Master Data</Label>
        <Input id="wagon-data" type="file" />
      </div>
      <div className="flex justify-end pt-4">
        <Button>Validate and Ingest</Button>
      </div>
    </div>
  );
}
