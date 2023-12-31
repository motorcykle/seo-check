"use client"
import { FormEvent } from "react"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

export default function AnalyzeForm () {

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    console.log(e.target)
  }

  return <form onSubmit={handleSubmit} className="space-y-2">
    <h2>Place your code below </h2>
    <Textarea required placeholder="Paste your web page code here... " />

    <Button type="submit">
      Check SEO 🚀
    </Button>
  </form>
}