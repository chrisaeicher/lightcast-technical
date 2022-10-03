import { LineChart, TrendSummaries } from "./components";

export default function TrendChart( {trendComparisonData}) {

    return (
    <div>
        <h3 className="text-lg font-medium mb-4 border-b-2 border-gray-300">Regional Trends</h3>
        <LineChart regionalData={trendComparisonData.regional} stateData={trendComparisonData.state} nationalData={trendComparisonData.nation} startYear={trendComparisonData.start_year} endYear={trendComparisonData.end_year} />
        <TrendSummaries trendComparisonData={trendComparisonData}/>
    </div>);
  }