import { Button } from '@/components/ui/button'
import { SignInButton, SignUpButton } from '@clerk/nextjs'
import { Check } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen w-screen overflow-hidden'>
      <section className="relative mx-auto max-w-7xl p-5 md:flex items-center gap-10 space-y-5 md:space-y-0">
        <span className=' opacity-50 -z-10 blur-3xl absolute z- text-[240px] font-semibold -mb-3 md:text-nowrap'>
          seo check 🪇
        </span>
        <div className="relative z-10 space-y-6">
          
          <h1 className=' text-5xl md:text-9xl font-semibold -mb-3 md:text-nowrap'>
            seo check 🪇
          </h1>
          <p className='max-w-3xl text-xl md:text-2xl text-muted-foreground font-medium'>Let's check out how SEO friendly your code is, paste your web page and let AI analyze and find room for optimization</p>
          
          <SignUpButton>
            <Button>Let's start! 🪇</Button>
          </SignUpButton>
          
        </div>

        <div className=" max-w-3xl! w-auto ">
          <Image alt='seo img' layout='responsive' width={300} height={300} className=' rounded-3xl' src={"/have.jpg"} />
        </div>



      </section>

      <section>
        fwefwefwe wefwef
      </section>

    </main>
  )
}
