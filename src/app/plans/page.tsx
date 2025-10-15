import { DataTable } from '@/components/data-table';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MOCK_RAKE_PLANS } from '@/lib/placeholder-data';
import { PlusCircle, FileDown } from 'lucide-react';
import Link from 'next/link';

export default function PlansPage() {
  const columns = [
    { accessorKey: 'planId', header: 'Plan ID' },
    { accessorKey: 'origin', header: 'Origin' },
    { accessorKey: 'destination', header: 'Destination' },
    { accessorKey: 'status', header: 'Status' },
    { accessorKey: 'departure', header: 'Est. Departure' },
  ];

  const actionsColumn = {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }: any) => (
      <Button asChild variant="outline" size="sm">
        <Link href={`/plans/${row.original.planId}`}>View Details</Link>
      </Button>
    ),
  };
  
  // A simple way to add an actions column for the prototype
  const dataWithActions = MOCK_RAKE_PLANS.map(plan => ({...plan, actions: ''}));
  const displayColumns = [...columns, { accessorKey: 'actions', header: 'Actions' }];


  const CustomDataTable = () => (
    <div className="rounded-md border">
      <table className="w-full caption-bottom text-sm">
        <thead className="[&_tr]:border-b">
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            {displayColumns.map(c => <th key={c.accessorKey} className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">{c.header}</th>)}
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          {dataWithActions.map((row, i) => (
            <tr key={i} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              {displayColumns.map(c => (
                <td key={c.accessorKey} className="p-4 align-middle">
                  {c.accessorKey === 'actions' ? (
                     <Button asChild variant="outline" size="sm">
                       <Link href={`/plans/${row.planId}`}>View Details</Link>
                     </Button>
                  ) : (
                    row[c.accessorKey as keyof typeof row]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );


  return (
    <div className="space-y-8">
      <PageHeader
        title="Rake Plans"
        description="Browse, search, and manage all generated rake plans."
        breadcrumb={[{ name: 'Planning' }, { name: 'Plans' }]}
      />
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <div>
              <CardTitle>All Plans</CardTitle>
              <CardDescription>A complete list of historical and upcoming plans.</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Input placeholder="Search plans..." className="w-64" />
              <Button variant="outline">
                <FileDown className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button asChild>
                <Link href="/optimize">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Plan
                </Link>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CustomDataTable />
        </CardContent>
      </Card>
    </div>
  );
}
