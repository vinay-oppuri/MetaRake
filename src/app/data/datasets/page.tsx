import { DataTable } from '@/components/data-table';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MOCK_DATASETS } from '@/lib/placeholder-data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DatasetsPage() {
  const columns = [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'name', header: 'Dataset Name' },
    { accessorKey: 'records', header: 'Records' },
    { accessorKey: 'lastUpdated', header: 'Last Updated' },
    { accessorKey: 'status', header: 'Status' },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Master Data"
        description="View and manage master datasets for stockyards, orders, and wagons."
        breadcrumb={[{ name: 'Data' }, { name: 'Datasets' }]}
      />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Master Datasets</CardTitle>
            <CardDescription>
              All core data used for planning and optimization.
            </CardDescription>
          </div>
          <Button asChild>
            <Link href="/candidates">Generate Candidates <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={MOCK_DATASETS} />
        </CardContent>
      </Card>
    </div>
  );
}
