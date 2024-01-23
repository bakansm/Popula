const { isSelected } = props;

return (
	<img
		src={`https://ipfs.near.social/ipfs/${
			isSelected
				? 'bafkreieuwu4pqymseivmk5ebartdgopgbratklegezjhghnuqxdxxom2da'
				: 'bafkreib65rwp2jitbgk35uxpfwqikmy2r5eugwykorxry7uwhtcnct3uhi'
		}`}
		width={16}
		height={16}
	/>
);
