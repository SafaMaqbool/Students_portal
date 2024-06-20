import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center gap-y-6'>
      <h1 className='text-5xl font-bold text-slate-700'>University students</h1>
      <Button asChild size={'lg'}>
        <Link href={'/home'}>Get Started</Link>
        </Button>
    </div>
  )
}

export default page