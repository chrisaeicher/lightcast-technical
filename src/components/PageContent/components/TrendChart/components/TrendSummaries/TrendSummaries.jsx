import { TrendSummary } from "./components";
import "./style.css"

export default function TrendSummaries({ trendComparisonData }) {
    return (
    <table className="TrendSummaries w-full">
        <thead>
            <tr className="border-b-2 border-gray-300">
            <th className="text-left">Area</th>
            <th className="text-right">2013 Jobs</th>
            <th className="text-right">2018 Jobs</th>
            <th className="text-right">Change</th>
            <th className="text-right">% Change</th>
            </tr>
        </thead>
        <tbody>
            <TrendSummary iconColor="bg-slate-900" area="Region" jobs_2013={trendComparisonData.regional.at(0)} jobs_2018={trendComparisonData.regional.at(-1)}/>
            <TrendSummary iconColor="bg-blue-800" area="State" jobs_2013={trendComparisonData.state.at(0)} jobs_2018={trendComparisonData.state.at(-1)} />
            <TrendSummary iconColor="bg-blue-600" area="Nation" jobs_2013={trendComparisonData.nation.at(0)} jobs_2018={trendComparisonData.nation.at(-1)} />
        </tbody>
    </table>
    );
}