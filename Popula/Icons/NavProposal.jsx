const { isSelected } = props;

return (
	<img
		src={`https://ipfs.near.social/ipfs/${
			isSelected
				? 'bafkreibkxmyguydmtcyau5s5pcd4zf23lkowlfdc3clavl7cpjwil3d2h4'
				: 'bafkreiaxz2esqfvstmvb2b3l5be64bfb65wgn6vvno5womcuegcqexgc2e'
		}`}
		width={16}
		height={16}
	/>
);
