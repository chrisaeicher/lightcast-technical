import { IndustryBreakdown, OccupationSummary, TrendChart } from './components';
import { useState, useEffect } from 'react';
import backupPositiveData from '../../assets/ProjectSampleResponse-positive.json';
import backupNegativeData from '../../assets/ProjectSampleResponse-negative.json';

export default function PageContent({ pageHeading = 'Occupation Overview' }) {
	const [occupationData, setOccupationData] = useState(null);
	const [failedToLoad, setFailedToLoad] = useState(false);

	const loadSampleData = (retrieveNegativeData) => {
		const data = retrieveNegativeData ? backupNegativeData : backupPositiveData;
		setOccupationData(data);
		setFailedToLoad(false);
	};

	const fetchOccupationData = async () => {
		try {
			const res = await fetch(
				'https://run.mocky.io/v3/a2cc3707-8691-4188-8413-6183a7bb3d32'
			);
			const data = await res.json();
			setOccupationData(data);
		} catch (err) {
			setFailedToLoad(true);
		}
	};

	useEffect(() => {
		fetchOccupationData();
	}, []);

	return (
		<main>
			{!failedToLoad && occupationData && (
				<>
					<h1 className="text-3xl font-medium">{pageHeading}</h1>
					<h2 className="mb-5">
						{occupationData.occupation.title} in {occupationData.region.title}
					</h2>
					<div className="flex flex-col gap-12">
						<OccupationSummary
							summaryObj={occupationData.summary}
							jobTitle={occupationData.occupation.title}
						/>
						<TrendChart trendComparisonData={occupationData.trend_comparison} />
						<IndustryBreakdown
							jobTitle={occupationData.occupation.title}
							employingIndustries={occupationData.employing_industries}
						/>
					</div>
				</>
			)}
			{failedToLoad && (
				<div className="flex flex-col items-center">
					<h1 className="text-3xl mx-auto text-center-font-semibold">
						I'm sorry, we weren't able to retrieve the requested information.
					</h1>
					<div className="flex gap-4">
						<button
							className="mt-5 px-4 py-2 bg-gray-700 hover:bg-green-600 transition text-white rounded"
							onClick={() => loadSampleData(false)}
						>
							Load sample positive data
						</button>
						<button
							className="mt-5 px-4 py-2 bg-gray-700 hover:bg-green-600 transition text-white rounded"
							onClick={() => loadSampleData(true)}
						>
							Load sample negative data
						</button>
						<button
							className="mt-5 px-4 py-2 transition text-gray-700 rounded hover:bg-green-100"
							onClick={() => (window.location = '/')}
						>
							Refresh the page
						</button>
					</div>
				</div>
			)}
		</main>
	);
}
