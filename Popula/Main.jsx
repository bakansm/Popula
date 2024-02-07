const { accountId } = props;
const [currentPage, setCurrentPage] = useState('posts');

const renderPage = (page) => {
	switch (page) {
		case 'posts':
			return (
				<Widget
					src={`${accountId}/widget/Popula.Posts.Post`}
					props={props}
				/>
			);
		case 'information':
			return (
				<Widget
					src={`${accountId}/widget/Popula.Information.Page`}
					props={props}
				/>
			);
		case 'members':
			return (
				<Widget
					src={`${accountId}/widget/Popula.Members.Page`}
					props={props}
				/>
			);
		case 'proposal':
			return (
				<Widget
					src={`${accountId}/widget/Popula.Proposal.Page`}
					props={props}
				/>
			);
		case 'treasury':
			return (
				<Widget
					src={`${accountId}/widget/Popula.Treasury.Page`}
					props={props}
				/>
			);

		case 'drips':
			return (
				<Widget
					src={`${accountId}/widget/Popula.Drips.Page`}
					props={props}
				/>
			);
		case 'management':
			return (
				<Widget
					src={`${accountId}/widget/Popula.Management.Page`}
					props={props}
				/>
			);
	}
};

const selectPage = (page) => {
	setCurrentPage(page);
};

const Wrapper = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	gap: 16px;
	color: #fff;
	background: rgba(35, 37, 39, 0.85);
`;

return (
	<Wrapper>
		<Widget
			src={`${accountId}/widget/Popula.NavigationSideBar`}
			props={{
				selectPage: (page) => {
					selectPage(page);
				},
				currentPage: currentPage,
				accountId: accountId,
			}}
		/>
		<div class='flex-grow pt-3'>{renderPage(currentPage)}</div>
	</Wrapper>
);
