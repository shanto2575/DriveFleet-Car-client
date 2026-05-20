import React from 'react'
import FeaturedCards from './FeaturedCards'
import { Button } from '@heroui/react'
import Link from 'next/link'
import { FaAngleDoubleRight } from 'react-icons/fa'

const Featureds = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`, {
        cache: 'no-store'
    })
    const featured = await res.json()
    // console.log(featured)
    return (
        <div className='w-10/12 mx-auto'>
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-4xl font-bold text-white">
                    Featured Cars
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Explore our most popular and top-rated rental cars chosen by our customers.
                    From budget-friendly rides to luxury vehicles, find the perfect car for your journey.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-4'>
                {
                    featured.map(cars => <FeaturedCards key={cars._id} cars={cars} />)
                }
            </div>
            <div className='flex justify-center mt-9 mb-6'>
                <Link href="/explore-cars">
                    <Button size='lg' className="bg-cyan-600 hover:bg-cyan-700 text-white rounded px-10">
                        Explore All Cars <FaAngleDoubleRight className='text-pink-700'/>
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Featureds