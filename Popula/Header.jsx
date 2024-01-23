const { fetchAPI } = props;

const res = fetchAPI(
	'/community/detail?community_id=app.popula.near&account_id=popula.near',
);

const data = res.body.data;

const Wrapper = styled.div`
	width: 100%;
	height: 230px;
	position: relative;
	padding: 56px 10px 16px 10px;
	overflow: hidden;
	color: #fff;
	font-size: 16px;
	background: #000;
`;

const BackgroundImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
	opacity: 0.4;
`;

return (
	<Wrapper>
		<BackgroundImage
			src={data?.cover}
			alt='background'
		/>
		<div class='w-full relative flex items-center justify-between'>
			<div class='flex h-min gap-4'>
				<img
					src={data?.avatar}
					alt='avatar'
					class='aspect-square w-24 rounded-2xl'
				/>
				<div class='w-max flex flex-col justify-between'>
					<div class='font-bold text-xl'>{data?.name}</div>
					<a
						class='underline text-sm'
						href={`https://nearblocks.io/address/${data?.community_id}`}
						target='_blank'
					>
						{data?.community_id}
					</a>
					<div class='flex text-sm gap-1'>
						<div class='opacity-50'>create by</div>
						<a
							href={`https://popula.io/${data?.account_id}`}
							target='_blank'
						>
							@{data?.account_id}
						</a>
					</div>

					<div class='flex gap-4 text-sm'>
						<div>
							{data && data?.data.members_count < 1000
								? data?.data.members_count
								: `${data?.data.members_count / 1000}K`}
							<span class='opacity-50 ml-1'>Members</span>
						</div>
						<div>
							{data && data?.data.post_count < 1000
								? data?.data.post_count
								: `${data?.data.post_count / 1000}K`}{' '}
							<span class='opacity-50 ml-1'>Posts</span>
						</div>
						<div>
							{data && data?.total_drips < 1000
								? data?.total_drips
								: `${data?.total_drips / 10000}K`}{' '}
							<span class='opacity-50 ml-1'>Drips</span>
						</div>
					</div>
				</div>
			</div>
			<button class='capitalize h-min text-sm bg-white rounded-lg px-4 py-2 text-black border-none'>
				<a
					href={`https://popula.io/${data?.account_id}`}
					target='_blank'
				>
					join
				</a>
			</button>
		</div>
		<div class='mt-2 relative'>{data?.info}</div>
	</Wrapper>
);
