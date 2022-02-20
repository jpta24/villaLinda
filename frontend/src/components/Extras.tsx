import React from 'react';

const Extras = () => {
	return (
		<div className='col-md my-2 habCard '>
			<div
				//className={`card-body px-auto py-1 hab mx-auto ${(cnHab(eachHab))}`}
				onClick={(event: React.MouseEvent<HTMLElement>) => {
					/* resFrac(event, eachHab, 'libre'); */
				}}
			>
				<div className='row'>
					<div className='col-6'>
						{/* <h3 className='my-0 text-center'>{eachHab.number}</h3> */}
					</div>
					<div className='col-6 sb2 justify-content-center px-2'>
						<div
							//className={`suitebtn py-auto ${cnHabFull(eachHab)}`}
							onClick={(event: React.MouseEvent<HTMLElement>) => {
								/* resFrac(event, eachHab, 'full'); */
							}}
						></div>
					</div>
				</div>

				{/* <p className='my-0 text-center'>{textParagraph(eachHab)}</p> */}
			</div>
		</div>
	);
};

export default Extras;
