const { accountId } = props;

return (
	<>
		<Widget
			src={`${accountId}/widget/Popula.Information.Information`}
			props={props}
		/>
		<Widget
			src={`${accountId}/widget/Popula.Information.Rules`}
			props={props}
		/>
	</>
);
