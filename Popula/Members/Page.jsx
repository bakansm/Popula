const res = fetch(
	'https://popula.io/api/v1/community/members?type=total_drips&sort=down&account_id=popula.near&community_id=app.popula.near&page=0&limit=10',
);

const timestampToDatetime = (timestamp) => {
	const date = new Date(timestamp);

	function getMonthAbbreviation(month) {
		const monthsAbbreviation = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];
		return monthsAbbreviation[month];
	}

	return `${date.getDate()} ${getMonthAbbreviation(
		date.getMonth(),
	)}, ${date.getFullYear()}`;
};

const data = res.body.data;

return (
	<>
		<div class='flex items-center justify-between border-b'>
			<div class='pb-4 text-xl font-bold opacity-80 border-b'>
				Member ({res.body.count})
			</div>
			<input
				type='text'
				placeholder='Search member'
				class='border border-gray-400 bg-white bg-opacity-10 rounded-md p-2 w-min'
			/>
		</div>
		<div class='grid grid-cols-5 py-4'>
			<div class='col-span-2 pl-10 opacity-50'>Community</div>
			<div class='col-span-2 opacity-50'>Joined date</div>
			<div class='col-span-1 opacity-50'>Total Drips</div>
		</div>
		{data?.map((member, key) => (
			<div class='grid grid-cols-5 py-4'>
				<div class='col-span-2 gap-2 flex'>
					<div class='w-6 text-center rounded-full'>{key + 1}</div>
					<img
						src={
							member?.avatar
								? member.avatar
								: 'https://ipfs.near.social/ipfs/bafkreia3uhds5nrrl2vzwvvdooef767iwslms75qabn55mnhvax6ak7f6a'
						}
						alt='avatar'
						class='w-6 aspect-square rounded-full'
					/>
					{member?.name ? member.name : member._id}
				</div>
				<div class='col-span-2'>
					{timestampToDatetime(member.data.join_time)}
				</div>
				<div class='col-span-1'>
					{member.data.total_drips.toLocaleString()}
				</div>
			</div>
		))}
	</>
);
