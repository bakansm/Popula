const { accountId, fetchAPI } = props;

State.init({ tab: 'active' });

const NavList = ['active', 'executed', 'unapproved', 'expired'];

const selectTab = (tab) => {
	State.update({ tab: tab });
};

const res = fetchAPI(
	'/proposal/list?account_id=popula.near&community_id=app.popula.near&page=0&limit=10&type=All',
);

const data = res.body.data;

return (
	<>
		<div class='text-base border-b flex justify-between items-center'>
			<div class='flex gap-8'>
				{NavList.map((nav, key) => (
					<button
						onClick={() => {
							selectTab(nav);
						}}
						class={`capitalize pb-3 border-b ${
							state.tab === nav
								? 'border-yellow-500 font-bold'
								: 'border-transparent'
						}`}
						key={key}
					>
						{nav}
					</button>
				))}
			</div>
			<div class='flex justify-center items-center'>
				<div class='flex justify-center items-center w-4 h-4'>
					<Widget src={`${accountId}/widget/Popula.Icons.Plus`} />
				</div>
				<div>Create proposal</div>
			</div>
		</div>
		{/* {data.map((proposal, key) => (
      <div class="flex py-2">
        <img
          src={
            proposal && proposal.data?.user?.avatar
              ? proposal.data.user.avatar
              : "https://ipfs.near.social/ipfs/bafkreia3uhds5nrrl2vzwvvdooef767iwslms75qabn55mnhvax6ak7f6a"
          }
          alt="avatar"
          class="w-6 aspect-square rounded-full"
        />
        <div class="flex w-full flex-col gap-3">
          <div>{proposal.data.user.name ?? proposal.data._id}</div>
          <div>{proposal.data.user.text}</div>
          <Widget src={`${accountId}/widget/Popula.Proposal.ProposalCard`} />
          <div class="flex items-center justify-between">
            <div class="flex gap-2">
              <div class="w-6 h-6 flex items-center justify-center">
                <Widget src={`${accountId}/widget/Popula.Icons.Comment`} />
              </div>
              <div>{data.data.comment_count}</div>
            </div>
            <div class="flex gap-2">
              <div class="w-6 h-6 flex items-center justify-center">
                <Widget src={`${accountId}/widget/Popula.Icons.Share`} />
              </div>
              <div>{data.data.share_count}</div>
            </div>
            <div class="flex gap-2">
              <div class="w-6 h-6 flex items-center justify-center">
                <Widget src={`${accountId}/widget/Popula.Icons.Heart`} />
              </div>
              <div>{data.data.like_count}</div>
            </div>
            <div class="flex gap-2">
              <div class="w-6 h-6 flex items-center justify-center">
                <Widget src={`${accountId}/widget/Popula.Icons.Bolt`} />
              </div>
              <div>{data.data.drips}</div>
            </div>
          </div>
        </div>
      </div>
    ))} */}
		<div class='flex py-3 gap-4'>
			<img
				src={
					'https://ipfs.near.social/ipfs/bafkreia3uhds5nrrl2vzwvvdooef767iwslms75qabn55mnhvax6ak7f6a'
				}
				alt='avatar'
				class='w-10 h-10 aspect-square rounded-full'
			/>
			<div class='flex w-full flex-col gap-3'>
				<div>Username</div>
				<div>Description</div>
				<Widget
					src={`${accountId}/widget/Popula.Proposal.ProposalCard`}
					props={{ accountId: accountId }}
				/>
				<div class='flex items-center justify-between'>
					<div class='flex gap-2'>
						<div class='w-6 h-6 flex items-center justify-center'>
							<Widget
								src={`${accountId}/widget/Popula.Icons.Comment`}
							/>
						</div>
						<div>{data.data.comment_count}</div>
					</div>
					<div class='flex gap-2'>
						<div class='w-6 h-6 flex items-center justify-center'>
							<Widget
								src={`${accountId}/widget/Popula.Icons.Share`}
							/>
						</div>
						<div>{data.data.share_count}</div>
					</div>
					<div class='flex gap-2'>
						<div class='w-6 h-6 flex items-center justify-center'>
							<Widget
								src={`${accountId}/widget/Popula.Icons.Heart`}
							/>
						</div>
						<div>{data.data.like_count}</div>
					</div>
					<div class='flex gap-2'>
						<div class='w-6 h-6 flex items-center justify-center'>
							<Widget
								src={`${accountId}/widget/Popula.Icons.Bolt`}
							/>
						</div>
						<div>{data.data.drips}</div>
					</div>
				</div>
			</div>
		</div>
	</>
);
