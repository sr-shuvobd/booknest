'use client'

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const BorrowBtn = () => {
    const router = useRouter();

    const { data: session} = authClient.useSession();

    const handeslBtn = () => {
        if(!session){
            router.push('/login')
        }
        else{
            toast("Book Borrow succseful")
        }
      
  }
    return (
        <button onClick={()=> handeslBtn()} className="btn w-full bg-[linear-gradient(130deg,#2F5848,#A77E55)] text-white text-lg rounded-xl">
            Borrow This Book
          </button>
    );
};

export default BorrowBtn;