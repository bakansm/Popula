const accountId = 'bakansm.testnet';
const apiURL = 'https://popula.io/api/v1';
const fetchAPI = (url) => {
	const res = fetch(`${apiURL}${url}`);
	return res;
};

const props = { accountId: accountId, fetchAPI: (url) => fetchAPI(url) };

const Container = styled.div`
	background: rgba(35, 37, 39, 0.85);
	width: 1000px;
	color: #fff;
	margin-left: auto;
	margin-right: auto;
`;

return (
	<Widget
		src={`${accountId}/widget/Popula.TailwindProvider`}
		props={{
			children: (
				<Container>
					<Widget
						src={`${accountId}/widget/Popula.Header`}
						props={props}
					/>
					<Widget
						src={`${accountId}/widget/Popula.Main`}
						props={props}
					/>
				</Container>
			),
		}}
	/>
);
