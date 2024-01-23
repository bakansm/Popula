const { isSelected } = props;

return (
	<img
		src={`https://ipfs.near.social/ipfs/${
			isSelected
				? 'bafkreicsxfssmpmr2e36imm2khkbwz6g2uopmegihvb4gkzsajwfjm5zhu'
				: 'bafkreifqylss6bnegazcfjipzeqjidkei4khguwicdxom55n6xnu2wyz6a'
		}`}
		width={16}
		height={16}
	/>
);
