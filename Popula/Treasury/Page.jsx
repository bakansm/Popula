const { data } = props;

const Card = styled.div`
	padding: 15px 20px;
	display: flex;
	align-items: center;
`;

const CardImage = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 100%;
`;

const UserInfo = styled.div`
	width: 220px;
	display: flex;
	gap: 12px;
	align-items: center;
`;

const timestampToDatetime = (timestamp) => {
	const date = new Date(timestamp);

	function getMonthAbbreviation(month) {
		const monthsAbbreviation = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];
		return monthsAbbreviation[month];
	}

	return `${date.getDate()} ${getMonthAbbreviation(
		date.getMonth(),
	)}, ${date.getFullYear()}`;
};

function convertYoctoNEARtoNEAR(yoctoNEAR) {
	return Big(yoctoNEAR) / Big(10).pow(24).toFixed(0);
}

return (
	<Card>
		<UserInfo>
			<CardImage
				src={data?.avatar}
				alt='avatar'
			/>
			<div class='flex flex-col gap-1'>
				<div>{data?.account_id}</div>
				<div class='text-sm opacity-50'>
					{timestampToDatetime(data?.create_at)}
				</div>
			</div>
		</UserInfo>
		<div class='flex-grow'>
			Donate {convertYoctoNEARtoNEAR(data?.amount)} NEAR
		</div>
		<div class='opacity-50'>Tx</div>
	</Card>
);
