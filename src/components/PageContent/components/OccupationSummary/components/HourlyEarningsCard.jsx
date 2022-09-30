export default function HourlyEarningsCard({regionalAvgEarnings, nationalAvgEarnings}) {
    return (
        <div className="flex flex-col align-center text-center py-5">
                <h4 className="text-3xl mb-1">${regionalAvgEarnings}/hr</h4>
                <h5 className="text-sm font-medium">Median Hourly Earnings</h5>
                <p className="text-sm">Nation: ${nationalAvgEarnings}/hr</p>
            </div>
    )
}