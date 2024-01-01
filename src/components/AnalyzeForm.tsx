"use client"
import { FormEvent, useEffect, useState } from "react"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import SubOrBilling from "./SubOrBilling"
import { AlertCircle } from "lucide-react"
import axios from "axios"

export default function AnalyzeForm ({ updateTries, isSEOSTAR, freeTries }: { isSEOSTAR: boolean, freeTries: number | any, updateTries: () => number | any }) {
  const [tries, setTries] = useState(freeTries)
  const [webPage, setWebPage] = useState("")
  const [openAIResponse, setOpenAIResponse] = useState("")

  async function settingTries () {
    const newTries = await updateTries()
    setTries(newTries)
  }

  useEffect(() => {
    settingTries()
  }, [freeTries, openAIResponse])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    try {
      await openAICompletion()
    } catch (error) {
      console.log(error)
    }
    const newTries = await updateTries()
    setTries(newTries)
  }

  async function openAICompletion() {
    const res = await axios.post("/api/openai", {
      prompt: webPage
    })

    setOpenAIResponse(res?.data?.response?.message?.content)
  }

  return <section className="space-y-4">
    {!isSEOSTAR && <div className="p-3 border-2 flex items-center justify-between rounded-xl flex-wrap space-y-2 md:space-y-0">
      <section className="flex items-center space-x-2">
        <AlertCircle />
        <span className=" text-muted-foreground text-xs "> You have {tries}/10 free checks left</span>
      </section>
      
      <SubOrBilling isSEOSTAR={isSEOSTAR} />
    </div>}

    <form onSubmit={handleSubmit} className="space-y-2">
      <h2>Place your code below </h2>
      <Textarea onChange={(e) => setWebPage(e.target.value)} required placeholder="Paste your web page code here... " />

      <Button type="submit">
        Check SEO 🚀
      </Button>
    </form>

    <h3 className=" leading-loose text-2xl">
      {openAIResponse}
    </h3>

  </section> 
}