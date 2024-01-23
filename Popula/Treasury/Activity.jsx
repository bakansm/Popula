const { accountId, fetchAPI } = props;

const Header = styled.div`
	padding: 20px;
	font-size: 14px;
	opacity: 0.5;
`;

const res = fetchAPI(
	'/treasury/list?community_id=app.popula.near&type=ALL&page=0&limit=3',
);

const data = res.body.data;

console.log(data);

return (
	<div class='rounded-2xl bg-black w-full text-white'>
		<Header>Activity</Header>
		{data?.map((dat, key) => (
			<Widget
				key={key}
				src={`${accountId}/widget/Popula.Treasury.ActivityCard`}
				props={{ data: dat }}
			/>
		))}
	</div>
);
