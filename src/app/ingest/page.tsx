import { DataTable } from '@/components/data-table';
import { PageHeader } from '@/components/page-header';
import { UploadSection } from '@/components/upload-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function IngestPage() {
  const validationColumns = [
    { accessorKey: 'file', header: 'File Name' },
    { accessorKey: 'status', header: 'Status' },
    { accessorKey: 'errors', header: 'Errors Found' },
    { accessorKey: 'records', header: 'Records' },
  ];
  const validationData = [
    { file: 'stockyard_data.csv', status: 'Pending', errors: 'N/A', records: 'N/A' },
    { file: 'order_data.xlsx', status: 'Pending', errors: 'N/A', records: 'N/A' },
    { file: 'wagon_master.json', status: 'Pending', errors: 'N/A', records: 'N/A' },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Data Ingestion & Validation"
        description="Upload and validate datasets for stockyards, orders, and wagons."
        breadcrumb={[{ name: 'Data' }, { name: 'Ingest' }]}
      />
      <div className="grid gap-8 lg:grid-cols-5">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Upload Datasets</CardTitle>
            <CardDescription>Select the relevant data files for ingestion.</CardDescription>
          </CardHeader>
          <CardContent>
            <UploadSection />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader className='flex flex-row items-center justify-between'>
            <div>
              <CardTitle>Validation Preview</CardTitle>
              <CardDescription>Preview the validation status of your uploaded files.</CardDescription>
            </div>
            <Button asChild>
              <Link href="/datasets">View Datasets <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardHeader>
          <CardContent>
            <DataTable columns={validationColumns} data={validationData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
