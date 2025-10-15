import { getMLModelForecasts } from "@/ai/flows/integrate-ml-model-forecasts";
import { PageHeader } from "@/components/page-header";
import { ModelsClientPage } from "./models-client-page";

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
      <ModelsClientPage models={models} />
    </div>
  );
}