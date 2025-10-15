import { getMLModelForecasts } from "@/ai/flows/integrate-ml-model-forecasts";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format, parseISO } from "date-fns";
import { Bar, BarChart } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const statusColors: { [key: string]: 'default' | 'secondary' | 'destructive' } = {
  active: 'default',
  training: 'secondary',
  error: 'destructive',
  inactive: 'secondary',
};

export default async function ModelsPage() {
  const models = await getMLModelForecasts({
    modelNames: ["Demand_Forecaster_v1", "Throughput_Predictor_v2", "Wagon_TAT_Model"],
  });

  return (
    <div className="space-y-8">
      <PageHeader
        title="ML Model Forecasts"
        description="Integrate insights from machine learning models into the planning process."
        breadcrumb={[{ name: 'Intelligence' }, { name: 'Models' }]}
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {models.map(model => (
          <Card key={model.modelName}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{model.modelName.replace(/_/g, " ")}</CardTitle>
                <Badge variant={statusColors[model.status] || 'secondary'}>{model.status}</Badge>
              </div>
              <CardDescription>
                Last updated: {format(parseISO(model.lastUpdated), 'PPP p')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium mb-2">Forecast Data</p>
              <div className="rounded-lg border bg-muted p-4 space-y-2 text-sm">
                {Object.entries(model.forecastData).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-muted-foreground">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                    <span className="font-mono font-semibold">{value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                  <ChartContainer
                    config={{
                      value: { label: 'Value', color: 'hsl(var(--chart-1))' }
                    }}
                    className="h-24 w-full"
                  >
                    <BarChart
                      accessibilityLayer
                      data={Object.entries(model.forecastData).map(([key, value]) => ({ name: key, value }))}
                    >
                      <Bar dataKey="value" fill="var(--color-value)" radius={2} />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                      />
                    </BarChart>
                  </ChartContainer>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
