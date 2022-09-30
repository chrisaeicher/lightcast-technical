import {useState, useEffect} from 'react';

import {TotalJobsCard, PercentChangeCard, HourlyEarningsCard} from "./components"

export default function OccupationSummary({summaryObj, jobTitle}) {
    // initial useState setup for all components

    // TotalJobsCard component
    const [natAvgComparison, setNatAvgComparison] = useState(null);
    const [regionalJobs, setRegionalJobs] = useState(null);
    const [year, setYear] = useState(null);

    // PercentChangeCard component
    const [startYear, setStartYear] = useState(null);
    const [endYear, setEndYear] = useState(null);
    const [regionalGrowth, setRegionalGrowth] = useState(null);
    const [nationalGrowth, setNationalGrowth] = useState(null);

    // HourlyEarningsCard component
    const [regionalAvgEarnings, setRegionalAvgEarnings] = useState(null);
    const [nationalAvgEarnings, setNationalAvgEarnings] = useState(null);



    const localeFormatNumber = (number) => {
        return number.toLocaleString(undefined)
    }

    const getRegAndNatComparison = () => {
        const percentChange = (summaryObj.jobs.regional / summaryObj.jobs.national_avg * 100).toFixed(0);
        return percentChange;
    }

    useEffect(() => {
        // set useState data for all subcomponents on initial load

        // TotalJobsCard component
        setNatAvgComparison(getRegAndNatComparison());
        setRegionalJobs(localeFormatNumber(summaryObj.jobs.regional));
        setYear(summaryObj.jobs.year);

        // PercentChangeCard component
        setStartYear(summaryObj.jobs_growth.start_year);
        setEndYear(summaryObj.jobs_growth.end_year);
        setRegionalGrowth(summaryObj.jobs_growth.regional);
        setNationalGrowth(summaryObj.jobs_growth.national_avg);

        // HourlyEarningsCard component
        setRegionalAvgEarnings(summaryObj.earnings.regional.toFixed(2));
        setNationalAvgEarnings(summaryObj.earnings.national_avg.toFixed(2))
    }, []);
    
    return (
        <>
            <h3 className="font-medium">Occupation Summary for {jobTitle}</h3>
            <div className="grid grid-rows-3 divide-y sm:grid-rows-1 sm:grid-cols-3 sm:divide-x border-gray-300 border-t-2 border-b-2">
                <TotalJobsCard regionalJobs={regionalJobs} natAvgComparison={natAvgComparison} year={year} />
                <PercentChangeCard startYear={startYear} endYear={endYear} regional={regionalGrowth} nationalGrowth={nationalGrowth} />
                <HourlyEarningsCard regionalAvgEarnings={regionalAvgEarnings} nationalAvgEarnings={nationalAvgEarnings} />
            </div>
        </>
    );
}