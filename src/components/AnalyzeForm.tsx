"use client"
import { FormEvent, useEffect, useState } from "react"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import SubOrBilling from "./SubOrBilling"
import { AlertCircle } from "lucide-react"

export default function AnalyzeForm ({ updateTries, isSEOSTAR, freeTries }: { isSEOSTAR: boolean, freeTries: number | any }) {
  const [tries, setTries] = useState(freeTries)

  useEffect(() => {
    setTries(freeTries)
  }, [freeTries])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const newTries = await updateTries()
    setTries(newTries)
  }

  return <section>
    {!isSEOSTAR && <div className="p-3 border-2 flex items-center justify-between rounded-xl flex-wrap space-y-2 md:space-y-0">
      <section className="flex items-center space-x-2">
        <AlertCircle />
        <span className=" text-muted-foreground text-xs "> You have {tries}/10 free checks left</span>
      </section>
      
      <SubOrBilling isSEOSTAR={isSEOSTAR} />
    </div>}

    <form onSubmit={handleSubmit} className="space-y-2">
      <h2>Place your code below </h2>
      <Textarea required placeholder="Paste your web page code here... " />

      <Button type="submit">
        Check SEO 🚀
      </Button>
    </form>

  </section> 
}