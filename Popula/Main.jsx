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
			return <div>treasury</div>;
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

return (
	<div class='w-full h-auto flex bg-black gap-4 text-white bg-opacity-50'>
		<Widget
			src={`${accountId}/widget/Popula.NavigationSideBar`}
			props={{
				selectPage: (page) => {
					selectPage(page);
				},
				currentPage: currentPage,
			}}
		/>
		<div class='flex-grow'>{renderPage(currentPage)}</div>
	</div>
);
