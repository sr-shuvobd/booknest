import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({book}) => {
    return (
        <div className='shadow rounded-2xl p-5 flex flex-col items-start space-y-2'>
             <div className='w-full h-110 relative'>
        <Image
          src={book.image_url}
          alt='bb'
          fill
          className='rounded-xl object-cover'
        />
      </div>
            <h1 className='text-xl font-bold'>{book.title}</h1>
            <Link href='/' className='btn bg-[linear-gradient(130deg,#2F5848,#A77E55)] text-white'>View Details</Link>
        </div>
    );
};

export default Card;