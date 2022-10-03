export default function IndustryTableRow({title, inOccupationJobs, percentageOccInIndustry, percentageTotalJobsInIndustry}) {
    return (
        <tr className="border-b-2 border-gray-300 text-right">
            <td className="text-blue-600" style={{background: `linear-gradient(90deg, rgba(59, 130, 246, 0.5) ${percentageOccInIndustry*2}%, white 0%)`}}>{title}</td>
            <td>{inOccupationJobs.toLocaleString(undefined)}</td>
            <td>{percentageOccInIndustry}%</td>
            <td>{percentageTotalJobsInIndustry}%</td>
        </tr>
    )
}