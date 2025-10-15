import { DataTable } from '@/components/data-table';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MOCK_CANDIDATES } from '@/lib/placeholder-data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CandidatesPage() {
  const columns = [
    { accessorKey: 'candidateId', header: 'Candidate ID' },
    { accessorKey: 'rakeType', header: 'Rake Type' },
    { accessorKey: 'wagons', header: 'Wagons' },
    { accessorKey: 'tonnage', header: 'Tonnage' },
    { accessorKey: 'origin', header: 'Origin' },
    { accessorKey: 'destination', header: 'Destination' },
    { accessorKey: 'score', header: 'Feasibility Score' },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Candidate Rake Generation"
        description="Generate and review potential rake formations based on available data."
        breadcrumb={[{ name: 'Planning' }, { name: 'Candidates' }]}
      />
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Generated Candidates</CardTitle>
            <CardDescription>
              The system has generated the following feasible rake candidates.
            </CardDescription>
          </div>
          <Button asChild>
            <Link href="/optimize">Proceed to Optimization <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={MOCK_CANDIDATES} />
        </CardContent>
      </Card>
    </div>
  );
}
