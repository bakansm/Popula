const { selectPage, currentPage, accountId } = props;

const NavigationList = [
	'posts',
	'information',
	'members',
	'proposal',
	'treasury',
	'drips',
];

const Wrapper = styled.div`
	width: 180px;
	min-width: 180px;
`;

const NavItem = styled.div`
	padding: 15px 0;
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
	color: #fff;
	display: flex;
	align-items: center;
	gap: 16px;
	text-transform: capitalize;
`;

const SelectedNavItem = styled.div`
	padding: 15px 0;
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
	color: #ffd23c;
	display: flex;
	align-items: center;
	gap: 16px;
	text-transform: capitalize;
`;

const renderIcon = (page, isSelected) => {
	switch (page) {
		case 'posts':
			return (
				<Widget
					src={`${accountId}/widget/Popula.Icons.NavPosts`}
					props={{ isSelected: isSelected }}
				/>
			);
		case 'information':
			return (
				<Widget
					src={`${accountId}/widget/Popula.Icons.NavInformation`}
					props={{ isSelected: isSelected }}
				/>
			);
		case 'members':
			return (
				<Widget
					src={`${accountId}/widget/Popula.Icons.NavMembers`}
					props={{ isSelected: isSelected }}
				/>
			);
		case 'proposal':
			return (
				<Widget
					src={`${accountId}/widget/Popula.Icons.NavProposal`}
					props={{ isSelected: isSelected }}
				/>
			);
		case 'treasury':
			return (
				<Widget
					src={`${accountId}/widget/Popula.Icons.NavTreasury`}
					props={{ isSelected: isSelected }}
				/>
			);
		case 'drips':
			return (
				<Widget
					src={`${accountId}/widget/Popula.Icons.NavDrips`}
					props={{ isSelected: isSelected }}
				/>
			);
	}
};

return (
	<Wrapper>
		{NavigationList.map((nav, key) => (
			<div
				key={key}
				onClick={() => selectPage(nav)}
			>
				{nav === currentPage ? (
					<SelectedNavItem>
						<div>{renderIcon(nav, true)}</div>
						<div>{nav}</div>
					</SelectedNavItem>
				) : (
					<NavItem>
						<div>{renderIcon(nav, false)}</div>
						<div>{nav}</div>
					</NavItem>
				)}
			</div>
		))}
	</Wrapper>
);
