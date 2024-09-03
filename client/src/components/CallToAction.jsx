import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
            Want to explore the latest in AI research?
            </h2>
            <p className='text-gray-500 my-2'>
            Check out these insightful AI blogs
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.artificialintelligence-news.com/categories/ai-research/" target='_blank' rel='noopener noreferrer'>
                Explore AI Blogs
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://i.pinimg.com/736x/64/5e/28/645e2852930691dfb5c7d8537ba08eee.jpg" />
        </div>
    </div>
  )
}