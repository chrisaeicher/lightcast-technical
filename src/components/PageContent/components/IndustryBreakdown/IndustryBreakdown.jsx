import { useState, useEffect } from 'react';
import './style.css';

import { IndustryTableRow } from './components';

export default function IndustryBreakdown({ jobTitle, employingIndustries }) {
	const [totalIndustryJobs, setTotalIndustryJobs] = useState(
		employingIndustries.jobs
	);
	const [sortedIndustries, setSortedIndustries] = useState([
		...employingIndustries.industries,
	]);

	const sortEmployingIndustriesByPercentage = () => {
		const newSortedIndustries = [...sortedIndustries];
		newSortedIndustries.sort(
			(a, b) => b.in_occupation_jobs - a.in_occupation_jobs
		);
		setSortedIndustries(newSortedIndustries);
	};

	useEffect(() => {
		sortEmployingIndustriesByPercentage();
	}, [employingIndustries]);

	return (
		<div>
			<h3 className="text-lg font-medium border-b-2 border-gray-300 mb-4">
				Industries Employing {jobTitle}
			</h3>
			<table className="IndustryBreakdown w-full">
				<thead>
					<tr className="border-b-2 border-gray-300">
						<th className="text-left">Industry</th>
						<th className="text-right">Occupation Jobs in Industry (2015)</th>
						<th className="text-right">% of Occupation in Industry (2015)</th>
						<th className="text-right">% of Total Jobs in Industry (2015)</th>
					</tr>
				</thead>
				<tbody>
					{sortedIndustries.map((industry) => {
						return (
							<IndustryTableRow
								key={industry.title}
								title={industry.title}
								inOccupationJobs={industry.in_occupation_jobs}
								percentageOccInIndustry={(
									(industry.in_occupation_jobs / totalIndustryJobs) *
									100
								).toFixed(1)}
								percentageTotalJobsInIndustry={(
									(industry.in_occupation_jobs / industry.jobs) *
									100
								).toFixed(1)}
							/>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
