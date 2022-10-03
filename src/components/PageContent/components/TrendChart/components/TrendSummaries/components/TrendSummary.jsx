export default function TrendSummary({area, jobs_2013, jobs_2018, iconColor}) {

    const localeFormatNumber = (number) => {
        return number.toLocaleString(undefined)
    }

    const getNumChange = () => {
        return localeFormatNumber(jobs_2018-jobs_2013);
    }

    const getPercentChange = () => {
        return ((jobs_2018-jobs_2013)/jobs_2013 * 100).toFixed(1);
    }

    return (
    <tr className="border-b-2 border-gray-300 text-right">
        <td>{iconColor && <span className={`p-1 mr-2 ${iconColor}`}></span>} {area}</td>
        <td>{localeFormatNumber(jobs_2013)}</td>
        <td>{localeFormatNumber(jobs_2018)}</td>
        <td>{getNumChange()}</td>
        <td>{getPercentChange() + "%"}</td>
    </tr>
    )
}