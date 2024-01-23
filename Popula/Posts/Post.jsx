const { accountId, fetchAPI } = props;

const res = fetchAPI(
	'/post/list?type=new&page=0&limit=10&filter=ALL&community_id=app.popula.near&account_id=popula.near',
);

const data = res.body.data;

return (
	<>
		<div class='h-16 text-base flex items-center font-bold opacity-50'>
			Post ({res.body.count})
		</div>
		<div class='h-px bg-white opacity-10 w-full' />
		{data.map((post, key) => (
			<Widget
				src={`${accountId}/widget/Popula.Posts.PostCard`}
				key={key}
				props={{ data: post, accountId: accountId }}
			/>
		))}
	</>
);
