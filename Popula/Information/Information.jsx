const { accountId, fetchAPI } = props;

const res = fetchAPI(
	'/community/detail?community_id=app.popula.near&account_id=popula.near',
);

const data = res.body.data;

return (
	<>
		<div class='h-16 flex gap-3 items-center'>
			<div class='flex items-center justify-center w-4 h-4'>
				<Widget src={`${accountId}/widget/Popula.Icons.Information`} />
			</div>
			<div class='text-lg font-bold'>Information</div>
		</div>
		<div class='h-px bg-white opacity-10 w-full' />
		<div class='pl-7'>
			<div class='text-sm py-4'>{data?.information}</div>
			<div class='bg-black rounded-2xl p-4 text-white text-sm'>
				<div class='flex items-center justify-between'>
					<div class='opacity-50'>Contract:</div>
					<div class='underline'>{data?.contract.url ?? 'None'}</div>
				</div>
				<div class='flex items-center justify-between'>
					<div class='opacity-50'>Twitter:</div>
					<div class='underline truncate'>
						{data?.twitter.url ?? 'None'}
					</div>
				</div>
				<div class='flex items-center justify-between'>
					<div class='opacity-50'>Discord:</div>
					<div class='underline truncate'>
						{data?.discord.url ?? 'None'}
					</div>
				</div>
				<div class='flex items-center justify-between'>
					<div class='opacity-50'>Website:</div>
					<div class='underline truncate'>
						{data?.website_link.url ?? 'None'}
					</div>
				</div>
				<div class='flex items-center justify-between'>
					<div class='opacity-50'>Customized application form:</div>
					<div class='underline truncate'>
						{data?.website.url ?? 'None'}
					</div>
				</div>
			</div>
		</div>
	</>
);
