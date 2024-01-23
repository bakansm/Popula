const { isSelected } = props;

return (
	<img
		src={`https://ipfs.near.social/ipfs/${
			isSelected
				? 'bafkreib4p2kkznnlq5rvsoqnmkhihptan6lwnvaa72nxd3o5tlikcjtvfe'
				: 'bafkreibkaawsslvmuv6ep6hwyimqd4p6mlsxa77hs2v7wubsngf4uyoa5i'
		}`}
		width={16}
		height={16}
	/>
);
