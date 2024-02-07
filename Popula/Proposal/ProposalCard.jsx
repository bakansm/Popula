const { accountId } = props;

const Header = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 16px 20px;
	background: #6174d7;
	height: 50px;
	gap: 8px;
	&::before {
		content: '';
		display: inline-block;
		top: 15px;
		position: absolute;
		left: -12px;
		width: 20px;
		height: 20px;
		border-radius: 100%;
		background-color: rgba(35, 37, 39, 0.85);
	}
	&::after {
		content: '';
		display: inline-block;
		top: 15px;
		position: absolute;
		right: -12px;
		width: 20px;
		height: 20px;
		border-radius: 100%;
		background-color: rgba(35, 37, 39, 0.85);
	}
`;

const Button = styled.div`
	cursor: pointer;
	background: rgba(255, 255, 255, 0.06);
	border: 1px solid rgba(255, 255, 255, 0.1);
	padding: 8px 0;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 25px;
`;

const Card = styled.div`
	border-radius: 16px;
	overflow: hidden;
`;

const Body = styled.div`
	padding: 12px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 0 0 16px 16px;
`;

return (
	<Card>
		<Header>
			<Widget src={`${accountId}/widget/Popula.Icons.Proposal`} />
			<div class='text-lg font-bold'>Proposal</div>
		</Header>
		<Body class='p-3 flex flex-col gap-3'>
			<div class='flex flex-col gap-1'>
				<div class='opacity-50'>Action</div>
				<div class='text-sm'>
					Transfer 10 NEAR to current all community members
				</div>
			</div>
			<div class='flex flex-col gap-1'>
				<div class='opacity-50'>Beneficiary Type</div>
				<div class='text-sm'>Split equally</div>
			</div>
			<div class='flex flex-col gap-1'>
				<div class='opacity-50'>Who can vote</div>
				<div class='text-sm'>Own 10 Total Drip in Popula Support</div>
			</div>
			<div class='flex flex-col gap-2'>
				<Button>Yes</Button>
				<Button>No</Button>
			</div>
		</Body>
	</Card>
);
