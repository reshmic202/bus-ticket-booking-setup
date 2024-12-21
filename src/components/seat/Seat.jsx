import React, { useState } from 'react'
import { GiSteeringWheel } from 'react-icons/gi'
import { MdOutlineChair } from 'react-icons/md'

const Seat = ({ seatNumber, isSelected, onClick }) => {
    return (
        <MdOutlineChair className={` text-3xl -rotate-90 cursor-pointer ${isSelected ? ' text-violet-600' : 'text-neutral-600'} `} onClick={onClick} />
    )
}

const BusSeatLayout = () => {
    const totalSeats = 41;
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = () => {
        if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
        } else {
            if (selectedSeats.length < 10) {
                setSelectedSeats([...selectedSeats, seatNumber]);
            } else {
                alert("You can only select a maximum of 10 seats.")
            }
        }
    }

    const renderSeats = () => {
        let seats = [];
        for (let i = 1; i <= totalSeats; i++) {
            seats.push(
                <Seat
                    key={i}
                    seatNumber={i}
                    isSelected={selectedSeats.includes(i)} onClick={handleSeatClick} />
            );
        }
        
        return seats;
    };

    return (
        <div className='space-y-5'>
            <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
                Choose a Seat
            </h2>

            {/* Seat Layout */}
            <div className="w-full flex justify-between">
                <div className="flex-1 w-full flex">
                    <div className='w-full flex-1 flex gap-x-5 items-stretch'>
                        <div className="w-10 h-full border-r-2 border-dashed border-neutral-300 dark:border-neutral-8">
                            <GiSteeringWheel className='text-3xl mt-6 text-violet-600 -rotate-90 '/>
                        </div>
                    </div>
                </div>
                {/* Instructions and Information */}
                <div className='space-y-3 w-28'></div>
            </div>

            {/* Selected seats  */}
            {
                edfsd
            }


            {/* Calculate price */}
            {
                sdf
            }
        </div>
    )

}
export default Seat

