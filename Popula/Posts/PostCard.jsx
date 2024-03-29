const { data, accountId } = props;

const Card = styled.div`
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	display: flex;
	gap: 16px;
	padding: 20px 0;
`;

const copyLink = () => {
	clipboard.writeText(`https://popula.io/d/${data.target_hash}`);
};

return (
	<Card class='flex gap-3 py-3 border-b w-full'>
		<img
			src={
				data && data?.data.user.avatar
					? data.data.user.avatar
					: 'https://ipfs.near.social/ipfs/bafkreia3uhds5nrrl2vzwvvdooef767iwslms75qabn55mnhvax6ak7f6a'
			}
			alt='user-avatar'
			class='w-10 h-10 aspect-square rounded-full'
		/>
		<div class='flex-grow w-full flex flex-col gap-4'>
			<div>
				<div class='w-full flex justify-between gap-3'>
					<div class='text-base'>{data?.data.user.name}</div>
					<div class='flex gap-2 items-center'>
						<div class='flex items-center justify-center w-3 h-3'>
							<Widget
								src={`${accountId}/widget/Popula.Icons.Drip`}
							/>
						</div>
						<div class='text-sm opacity-50'>
							{data?.data.drips / 10000}
						</div>
					</div>
				</div>
				<div class='text-sm opacity-50'>
					Posted on Popula - Web3Book Club
				</div>
			</div>
			<div>{data?.text}</div>
			<div class='flex gap-4 items-center'>
				<a
					class='flex gap-2 items-center'
					href={`https://popula.io/d/${data.target_hash}`}
					target='_blank'
				>
					<div class='flex items-center justify-center w-5 h-5 opacity-50'>
						<Widget
							src={`${accountId}/widget/Popula.Icons.Heart`}
						/>
					</div>
					<div class='text-sm opacity-50'>
						{data && data?.data.like_count > 1000
							? `${data.data.like_count / 1000}K`
							: data.data.like_count}
					</div>
				</a>
				<a
					class='flex gap-2 items-center'
					href={`https://popula.io/d/${data.target_hash}`}
					target='_blank'
				>
					<div class='flex items-center justify-center w-5 h-5 opacity-50'>
						<Widget
							src={`${accountId}/widget/Popula.Icons.Comment`}
						/>
					</div>
					<div class='text-sm opacity-50'>
						{data && data?.data.comment_count > 1000
							? `${data.data.comment_count / 1000}K`
							: data.data.comment_count}
					</div>
				</a>
				<div
					class='flex items-center justify-center w-5 h-5 opacity-50 cursor-pointer'
					onClick={copyLink}
				>
					<Widget src={`${accountId}/widget/Popula.Icons.Share`} />
				</div>
			</div>
		</div>
	</Card>
);
