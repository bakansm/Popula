const NavigationList = [
	'posts',
	'information',
	'members',
	'proposal',
	'treasury',
	'drips',
	'management',
];
const selectPage = props.selectPage;
const currenPage = props.currentPage;

return (
	<div class='flex flex-col gap-2 py-4'>
		{NavigationList.map((nav, key) => (
			<div
				class={`capitalize text-sm py-2 min-w-44 cursor-pointer hover:bg-white hover:bg-opacity-10 ${
					nav === currentPage ? 'text-yellow-500' : ''
				}`}
				key={key}
				onClick={() => selectPage(nav)}
			>
				{nav}
			</div>
		))}
	</div>
);
