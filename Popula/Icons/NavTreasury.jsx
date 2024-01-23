const { isSelected } = props;

return (
	<img
		src={`https://ipfs.near.social/ipfs/${
			isSelected
				? 'bafkreib4e2bhysz3kjkng7f5zksh6ztw6dhpnimt7y4alp6nkrpiutlwya'
				: 'bafkreif2bxboc5qy6ywprujjkh5tgbelymnr2w3rcvz3s2eakosg4tg6ry'
		}`}
		width={16}
		height={16}
	/>
);
