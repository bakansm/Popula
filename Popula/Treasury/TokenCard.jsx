const Wrapper = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	align-items: center;
	padding: 20px;
	background: #000;
`;

const Token = styled.div`
	width: 360px;
	font-size: 16px;
	color: #ffffff;
	letter-spacing: 0;
	font-weight: 400;
	display: flex;
	gap: 12px;
`;

const Amount = styled.div`
	width: 323px;
	font-size: 16px;
	color: #ffffff;
	letter-spacing: 0;
	font-weight: 400;
`;

const USDValue = styled.div`
	font-size: 16px;
	color: #ffffff;
	letter-spacing: 0;
	font-weight: 400;
	white-space: nowrap;
`;

const Logo = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 100%;
	background: #fff;
`;
return (
	<Wrapper>
		<Token>
			<Logo
				src='https://ipfs.near.social/ipfs/bafkreib2cfbayerbbnoya6z4qcywnizqrbkzt5lbqe32whm2lubw3sywr4'
				alt={'logo'}
			/>
			<div>NEAR</div>
		</Token>
		<Amount>1,259</Amount>
		<USDValue>$ 1,100</USDValue>
	</Wrapper>
);
