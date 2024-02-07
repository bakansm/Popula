const { accountId } = props;

const [membersListData, setMembersListData] = useState([]);
const [limit, setLimit] = useState(0);
const [totalMembers, setTotalMembers] = useState(10);
const [hasMorePosts, setHasMorePosts] = useState(true);

const loadMorePosts = () => {
	asyncFetch(
		`https://popula.io/api/v1/community/members?type=total_drips&sort=down&account_id=popula.near&community_id=app.popula.near&page=0&limit=${
			limit + 10
		}`,
	).then((res) => {
		setTotalMembers(res.body.count);
		setMembersListData(res.body.data);
		setHasMorePosts(membersListData.length < totalMembers);
		setLimit((prev) => prev + 10);
	});
};

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

const SearchBar = styled.input`
	font-size: 14px;
	background: rgba(255, 255, 255, 0.04);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 10px;
	width: 160px;
	height: 36px;
	padding: 10px 20px;
	&:focus {
		outline: none;
		border: 1px solid rgba(255, 255, 255, 1);
	}
`;

const Wrapper = styled.div`
	max-height: 536px;
	overflow-x: hidden;
	overflow-y: scroll;
	width: 100%;
`;

return (
	<>
		<div class='flex items-center justify-between border-b'>
			<div class='h-16 text-base flex items-center font-bold opacity-50'>
				Members ({totalMembers})
			</div>
			<SearchBar
				type='text'
				placeholder='Search member'
			/>
		</div>
		<div class='grid grid-cols-5 pb-2 pt-4 text-sm'>
			<div class='col-span-2 pl-8 opacity-50'>Community</div>
			<div class='col-span-2 opacity-50'>Joined date</div>
			<div class='col-span-1 opacity-50'>Total Drips</div>
		</div>
		<Wrapper>
			<InfiniteScroll
				loadMore={loadMorePosts}
				hasMore={hasMorePosts}
				useWindow={false}
				loader={
					<div className='w-full text-center py-4'>Loading ...</div>
				}
			>
				{membersListData?.map((member, key) => (
					<div
						class='grid grid-cols-5 py-3'
						key={key}
					>
						<div class='col-span-2 gap-3 flex items-center w-80'>
							{key + 1 === 1 ? (
								<Widget
									src={`${accountId}/widget/Popula.Icons.FirstPlace`}
								/>
							) : key + 1 === 2 ? (
								<Widget
									src={`${accountId}/widget/Popula.Icons.SecondPlace`}
								/>
							) : key + 1 === 3 ? (
								<Widget
									src={`${accountId}/widget/Popula.Icons.ThirdPlace`}
								/>
							) : (
								<div class='text-xs text-center italic'>
									#{key + 1}
								</div>
							)}

							<img
								src={
									member?.avatar
										? member.avatar
										: 'https://ipfs.near.social/ipfs/bafkreia3uhds5nrrl2vzwvvdooef767iwslms75qabn55mnhvax6ak7f6a'
								}
								alt='avatar'
								class='w-8 h-8 aspect-square rounded-full'
							/>
							<div class='opacity-70'>
								{member?.name ? member.name : member._id}
							</div>
						</div>
						<div class='col-span-2 w-80'>
							{timestampToDatetime(member?.data.join_time)}
						</div>
						<div class='col-span-1'>
							{(
								member?.data.total_drips / 10000
							).toLocaleString()}
						</div>
					</div>
				))}
			</InfiniteScroll>
		</Wrapper>
	</>
);
