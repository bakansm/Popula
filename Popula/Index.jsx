const res = fetch('https://popula.io/api/v1/community/list?page=0&limit=10');
const data = res.body.data;

const Wrapper = styled.div`
	padding: 0 20px;
	padding-bottom: 20px;
	background: #000;
`;

const Banner = styled.img`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 249px) {
		padding: 20px 136px;
	}

	@media (min-width: 600px) {
		padding: 40px 156px;
	}

	@media (min-width: 768px) {
		padding: 60px 176px;
	}

	@media (min-width: 992px) {
		padding: 80px 196px;
	}

	@media (min-width: 1200px) {
		padding: 100px 216px;
	}

	@media (min-width: 1400px) {
		padding: 120px 236px;
	}
`;

const CardContainer = styled.div`
	display: grid;
	gap: 20px;
	margin-left: auto;
	margin-right: auto // For mobile devices (1 column)
		@media screen and (max-width: 249px) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media (min-width: 600px) {
		grid-template-columns: repeat(auto-fit, minmax(227px, 1fr));
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(auto-fit, minmax(227px, 1fr));
	}

	@media (min-width: 992px) {
		grid-template-columns: repeat(auto-fit, minmax(227px, 1fr));
	}

	@media (min-width: 1200px) {
		grid-template-columns: repeat(auto-fit, minmax(227px, 1fr));
	}

	@media (min-width: 1400px) {
		grid-template-columns: repeat(auto-fit, minmax(227px, 1fr));
	}
`;

const Card = styled.div`
	border-radius: 24px;
	width: 100%;
	min-width: 227px;
	height: auto;
	background: rgba(255, 255, 255, 0.06);
	border: 1px solid rgba(255, 255, 255, 0.1);
	overflow: hidden;
`;

const CardImage = styled.img`
    height: 80px;
    width 100%;
    top: 0;
    left: 0;
`;

const CardBody = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	padding-top: 42px;
	padding-bottom: 18px;
	padding-left: 16px;
	padding-right: 16px;
`;

const CardAvatar = styled.img`
	width: 60px;
	height: 60px;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 10px;
`;

const Name = styled.div`
	font-size: 16px;
	color: #ffffff;
	letter-spacing: 0;
	text-align: center;
	line-height: 18px;
	font-weight: 700;
`;

const Account = styled.div`
	opacity: 0.5;
	font-size: 14px;
	color: #ffffff;
	letter-spacing: 0;
	text-align: center;
	line-height: 14px;
	font-weight: 400;
	margin-top: 6px;
`;

const Button = styled.div`
	cursor: pointer;
	font-size: 14px;
	color: #ffffff;
	letter-spacing: 0;
	text-align: center;
	line-height: 16px;
	font-weight: 400;
	border: 1px solid #ffffff;
	border-radius: 10px;
	padding: 10px 30px;
	width: max-content;
	margin-left: auto;
	margin-right: auto;
	margin-top: 30px;
	&:hover {
		background: #fff;
		color: #000;
	}
`;

const InfoGroup = styled.div`
	margin-top: 20px;
	display: grid;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
`;

const Amount = styled.div`
	font-size: 14px;
	color: #ffffff;
	letter-spacing: 0;
	text-align: center;
	font-weight: 400;
`;

const Title = styled.div`
	opacity: 0.5;
	font-size: 12px;
	color: #ffffff;
	letter-spacing: 0;
	text-align: center;
	line-height: 14px;
	font-weight: 400;
`;

return (
	<Wrapper>
		<Banner
			src='https://ipfs.near.social/ipfs/bafkreih6xtbstbwom2jhjz27wrbwbrlebfjqetjssy66mjflf6lidttdyi'
			alt={'banner'}
		/>
		<CardContainer>
			{data?.map((cardData, key) => (
				<Card key={key}>
					<CardImage
						src={
							cardData.cover && cardData.cover !== ''
								? cardData.cover
								: 'https://ipfs.near.social/ipfs/bafkreigg36njcupmue6imgxkndspxnkxazdn25sszaunk66xhl24fwizcm'
						}
						alt={'background'}
					/>
					<CardBody>
						<CardAvatar
							src={
								cardData.avatar && cardData.avatar !== ''
									? cardData.avatar
									: 'https://ipfs.near.social/ipfs/bafkreigg36njcupmue6imgxkndspxnkxazdn25sszaunk66xhl24fwizcm'
							}
							alt={'avatar'}
						/>
						<Name>{cardData.name}</Name>
						<Account>{cardData.account_id}</Account>
						<InfoGroup>
							<div>
								<Amount>
									{cardData.data.members_count > 10000
										? `${
												cardData.data.members_count /
												10000
										  }K`
										: cardData.data.members_count}
								</Amount>
								<Title>Members</Title>
							</div>
							<div>
								<Amount>
									{cardData.data.post_count > 10000
										? `${cardData.data.post_count / 10000}K`
										: cardData.data.post_count}
								</Amount>
								<Title>Posts</Title>
							</div>
							<div>
								<Amount>
									{cardData.total_drips > 10000
										? `${cardData.total_drips / 10000}K`
										: cardData.total_drips}
								</Amount>
								<Title>Drips</Title>
							</div>
						</InfoGroup>
						<Button>Join</Button>
					</CardBody>
				</Card>
			))}
		</CardContainer>
	</Wrapper>
);
