export default function PercentChangeCard({startYear, endYear, regional, nationalGrowth}) {
    const isPositiveRegionalGrowth = regional > 0;
    const isPositiveNationalGrowth = nationalGrowth > 0;
    return (
        <div className="flex flex-col align-center text-center py-5">
        <h4 className={isPositiveRegionalGrowth ? "text-3xl mb-1 text-green-600" : "text-3xl mb-1 text-red-600"}>{isPositiveRegionalGrowth ? "+" : "-"}{regional}%</h4>
        <h5 className="text-sm font-medium">% Change ({startYear}-{endYear})</h5>
        <p className="text-sm">Nation: <span className={isPositiveNationalGrowth ? "text-green-600" : "text-red-600"}>{isPositiveNationalGrowth ? "+" : "-"}{nationalGrowth}%</span></p>
    </div>
    )
}