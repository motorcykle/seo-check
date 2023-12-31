"use client"

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SubOrBilling ({ isSEOSTAR }: { isSEOSTAR: boolean }) {

  const [loading, setLoading] = React.useState(false)
  const router = useRouter()

  const handleClick = async () => {
    try {
      setLoading(true)

      const res = await axios.get("/api/stripe")
      router.push(res.data.url)

    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return <Button onClick={handleClick} variant={isSEOSTAR ? "outline" : "default"}>
    {isSEOSTAR ? "Billing" : "Upgrade to S3OST4R 🌟"}
  </Button>
}