const { accountId } = props;

const rulesList = [
	{ index: 1, title: 'rule 1', content: 'rule content 1' },
	{ index: 2, title: 'rule 2', content: 'rule content 2' },
	{ index: 3, title: 'rule 3', content: 'rule content 3' },
	{ index: 4, title: 'rule 4', content: 'rule content 4' },
];

return (
	<>
		<div class='h-16 flex gap-3 items-center'>
			<div class='flex items-center justify-center w-4 h-4'>
				<Widget src={`${accountId}/widget/Popula.Icons.Rules`} />
			</div>
			<div class='text-lg font-bold'>Rules</div>
		</div>
		<div class='h-px bg-white opacity-10 w-full' />
		<div class='pl-4'>
			{rulesList.map((rule, key) => (
				<Widget
					src={`${accountId}/widget/Popula.Libs.Accordion`}
					key={key}
					props={{
						index: rule.index,
						title: rule.title,
						content: rule.content,
						accountId: accountId,
					}}
				/>
			))}
		</div>
	</>
);
