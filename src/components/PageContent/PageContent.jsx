import {IndustryBreakdown, OccupationSummary, TrendChart} from "./components";
import {useState, useEffect} from 'react';
import backupData from "../../assets/ProjectSampleResponse.json"


export default function PageContent({pageHeading="Occupation Overview" }) {
    const [occupationData, setOccupationData] = useState(null);
    const [failedToLoad, setFailedToLoad] = useState(false);

    const fetchOccupationData = async () => {
        try {
            const res = await fetch('https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32');
            const data = await res.json();
            setOccupationData(data);
        } catch (err) {
            console.error(err);
            setFailedToLoad(true);
        }
    }

    useEffect(() => {
        fetchOccupationData();
    }, [])
    

    return (
        <main>
            {occupationData && 
            <>
            <h1 className="text-3xl font-medium">{pageHeading}</h1>
            <h2 className="mb-5">{occupationData.occupation.title} in {occupationData.region.title}</h2>
            <OccupationSummary summaryObj={occupationData.summary} jobTitle={occupationData.occupation.title} />
            <TrendChart />
            <IndustryBreakdown />
            </>
        }
        </main>
    )
}