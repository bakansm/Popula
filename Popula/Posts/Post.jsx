const { accountId, fetchAPI } = props;

const [postsData, setPostsData] = useState([]);
const [limit, setLimit] = useState(0);
const [totalPosts, setTotalPosts] = useState(10);
const [hasMorePosts, setHasMorePosts] = useState(true);

const loadMorePosts = () => {
	asyncFetch(
		`https://popula.io/api/v1/post/list?type=new&page=0&limit=${
			limit + 5
		}&filter=ALL&filter=ALL&community_id=app.popula.near&account_id=popula.near`,
	).then((res) => {
		setTotalPosts(res.body.count);
		setPostsData(res.body.data);
		setHasMorePosts(postsData.length < totalPosts);
		setLimit((prev) => prev + 5);
	});
};

const Wrapper = styled.div`
	max-height: 536px;
	overflow-x: hidden;
	overflow-y: scroll;
	width: 100%;
`;

return (
	<>
		<div class='h-16 text-base flex items-center font-bold opacity-50'>
			Post ({totalPosts})
		</div>
		<div class='h-px bg-white opacity-10 w-full' />
		<Wrapper>
			<InfiniteScroll
				loadMore={loadMorePosts}
				hasMore={hasMorePosts}
				useWindow={false}
				loader={
					<div className='w-full text-center py-4'>Loading ...</div>
				}
			>
				{postsData?.map((post, key) => (
					<Widget
						key={key}
						src={`${accountId}/widget/Popula.Posts.PostCard`}
						props={{ data: post, accountId: accountId }}
					/>
				))}
			</InfiniteScroll>
		</Wrapper>
	</>
);
