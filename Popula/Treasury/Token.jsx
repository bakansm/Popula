const { accountId } = props;

const Wrapper = styled.div`
	width: 100%;
	border-radius: 16px;
	background: #000;
	overflow: hidden;
`;

const Header = styled.div`
	width: 100%;
	height: 48px;
	display: flex;
	align-items: center;
	padding: 20px;
`;

const Token = styled.div`
	width: 360px;
	opacity: 0.5;
	font-size: 14px;
	color: #ffffff;
	letter-spacing: 0;
	font-weight: 400;
`;

const Amount = styled.div`
	width: 323px;
	font-size: 14px;
	color: #ffffff;
	letter-spacing: 0;
	font-weight: 400;
`;

const USDValue = styled.div`
	opacity: 0.5;
	font-size: 14px;
	color: #ffffff;
	letter-spacing: 0;
	text-align: right;
	font-weight: 400;
	white-space: nowrap;
`;

return (
	<Wrapper>
		<Header>
			<Token>Token</Token>
			<Amount>Amount</Amount>
			<USDValue>USD Value</USDValue>
		</Header>
		<Widget src={`${accountId}/widget/Popula.Treasury.TokenCard`} />
	</Wrapper>
);
