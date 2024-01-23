const { accountId } = props;

State.init({ isOpen: false });

const toggleAccordion = () => {
	State.update({ isOpen: !state.isOpen });
	console.log(state.isOpen);
};

return (
	<>
		<div
			class='flex items-center justify-between border-b py-3 cursor-pointer'
			onClick={toggleAccordion}
		>
			<div class='text-sm truncate w-full'>
				{props.index}.{props.title}
			</div>
			<div class='flex items-center justify-center w-3 h-3'>
				{state.isOpen ? (
					<Widget
						src={`${accountId}/widget/Popula.Icons.ChevronUp`}
					/>
				) : (
					<Widget
						src={`${accountId}/widget/Popula.Icons.ChevronDown`}
					/>
				)}
			</div>
		</div>
		{state.isOpen && (
			<div class='pl-4 py-2 text-sm opacity-50'>{props.content}</div>
		)}
	</>
);
