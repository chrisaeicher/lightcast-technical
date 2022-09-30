export default function TotalJobsCard({regionalJobs, year, natAvgComparison}) {
    const isAboveNatAvg = natAvgComparison > 0;
    return (
        <div className="flex flex-col align-center text-center py-5">
                <h4 className="text-3xl mb-1">{regionalJobs}</h4>
                <h5 className="text-sm font-medium">Jobs ({year})</h5>
                <p className="text-sm">{Math.abs(natAvgComparison)}% {isAboveNatAvg ? <span className="text-green-600">above</span> : <span className="text-red-600">below</span>} national average</p>
            </div>
    )
}