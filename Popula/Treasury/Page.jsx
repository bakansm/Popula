const { accountId } = props;

const Header = styled.div`
	padding-top: 26px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Title = styled.div`
	opacity: 0.5;
	font-size: 14px;
	color: #ffffff;
	letter-spacing: 0;
	font-weight: 400;
`;

const Content = styled.div`
	font-size: 20px;
	color: #ffffff;
	letter-spacing: 0;
	text-align: center;
	font-weight: 700;
`;

const Button = styled.div`
	padding: 10px 20px;
	background: #ffffff;
	border-radius: 10px;
	color: #000;
	cursor: pointer;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding-bottom: 20px;
`;

return (
	<Wrapper>
		<Header>
			<div class='flex gap-2 flex-col'>
				<Title>Total Balance</Title>
				{/* <Content>$ {Number(value).toLocalString()}</Content> */}
				<Content>$ 1,234,567</Content>
			</div>
			<Button>Donate</Button>
		</Header>
		<Widget
			src={`${accountId}/widget/Popula.Treasury.Token`}
			props={props}
		/>
		<Widget
			src={`${accountId}/widget/Popula.Treasury.Activity`}
			props={props}
		/>
	</Wrapper>
);
