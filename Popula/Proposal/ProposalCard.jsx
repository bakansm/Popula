return (
	<Widget
		src={'bakansm.testnet/widget/TailwindProvider'}
		props={{
			children: (
				<div class='rounded-xl overflow-hidden border border-gray-800'>
					<div class='flex items-center p-3 bg-blue-400 font-bold'>
						Proposal
					</div>
					<div class='p-3 flex flex-col gap-3'>
						<div class='flex flex-col gap-1'>
							<div class='opacity-50'>Action</div>
							<div>
								Transfer 10 NEAR to current all community
								members
							</div>
						</div>
						<div class='flex flex-col gap-1'>
							<div class='opacity-50'>Beneficiary Type</div>
							<div>Split equally</div>
						</div>
						<div class='flex flex-col gap-1'>
							<div class='opacity-50'>Who can vote</div>
							<div>Own 10 Total Drip in Popula Support</div>
						</div>
						<div class='flex flex-col gap-2'>
							<button class='rounded-full border border-gray-800 py-2'>
								Yes
							</button>
							<button class='rounded-full border border-gray-800 py-2'>
								No
							</button>
						</div>
					</div>
				</div>
			),
		}}
	/>
);
