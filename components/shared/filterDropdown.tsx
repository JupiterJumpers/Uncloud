// components/FilterDropdown.js
import React, { useState } from 'react';
import { IoMdFunnel } from 'react-icons/io';
import { MoodNames } from './rightbar';

type props = {
	handleCheckboxChange: (filter: string) => void;
	selectedFilters: {
		[key: string]: boolean;
	};
};
const FilterDropdown = ({ handleCheckboxChange, selectedFilters }: props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};
	const moodNames: MoodNames = {
		Rainbow: '#F9C7D7',
		Sunny: '#FFE773',
		Cloudy: '#B1D5D5',
		Rainy: '#A0D1F9',
		Stormy: '#AA52BF',
	};
	return (
		<div className='relative inline-block text-left'>
			<div>
				<button
					onClick={toggleDropdown}
					type='button'
					className='inline-flex w-fit items-center justify-center gap-2 rounded-full border border-gray-300 bg-lineColor font-medium text-gray-500 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 sm:px-2 sm:py-1 sm:text-xs md:px-4 md:py-2 md:text-sm'
				>
					<IoMdFunnel />
					<span>Filters</span>
				</button>
			</div>
			{isOpen && (
				<div className='absolute right-0 mt-2 w-fit origin-top-right rounded-md border border-lineColor bg-white text-[#706F6F] shadow-lg ring-1 ring-black ring-opacity-5'>
					<div className='p-2'>
						{Object.keys(selectedFilters).map((filter) => (
							<label
								key={filter}
								className='flex items-center gap-3 p-3  hover:bg-[#E0F1FF]'
							>
								<input
									type='checkbox'
									checked={selectedFilters[filter]}
									onChange={() => handleCheckboxChange(filter)}
									className='form-checkbox h-4 w-4  transition duration-150 ease-in-out'
								/>
								<span
									style={{ backgroundColor: moodNames[filter] }}
									className='h-3 w-3 rounded-full text-[#706F6F]'
								></span>

								<span className=' text-gray-700'>{filter}</span>
							</label>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default FilterDropdown;