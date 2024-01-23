const { isSelected } = props;

return (
	<img
		src={`https://ipfs.near.social/ipfs/${
			isSelected
				? 'bafkreielatsgxvm5zhcyrecmkfcn2g47klkubhu6u3yhkywi3fv3up3zta'
				: 'bafkreibc6cedxbnjd6m2zoga2magztf6seqps3qgca3sr6ks47owfgrlde'
		}`}
		width={16}
		height={16}
	/>
);
