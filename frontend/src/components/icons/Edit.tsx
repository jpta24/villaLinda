import React from 'react';
// en el componente colocar el color y stroke AMBAS del mismo color

interface Props {
	stroke?: string;
	hover?: string;
	className?: string;
}
//  in CSS file add
//      .DownloadIcon:hover {stroke:red;color:red}

const Edit = (props: Props) => {
	return (
		<svg
			stroke={props.stroke}
			color={props.stroke}
			stroke-width='0'
			viewBox='0 0 24 24'
			height='1em'
			width='1em'
			className='deleteCard'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fill='none'
				stroke='#000'
				stroke-width='2'
				d='M14,4 L20,10 L14,4 Z M22.2942268,5.29422684 C22.6840146,5.68401459 22.6812861,6.3187139 22.2864907,6.71350932 L9,20 L2,22 L4,15 L17.2864907,1.71350932 C17.680551,1.319449 18.3127724,1.31277239 18.7057732,1.70577316 L22.2942268,5.29422684 Z M3,19 L5,21 M7,17 L15,9'
			></path>
		</svg>
	);
};

export default Edit;
