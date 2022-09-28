import {IndustryBreakdown, OccupationSummary, TrendChart} from "./components/exports";

export default function PageContent() {
    return (
        <main>
            <h1>Occupation Overview</h1>
            <h2></h2>
            <OccupationSummary />
            <TrendChart />
            <IndustryBreakdown />
        </main>
    )
}