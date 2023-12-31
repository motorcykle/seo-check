import { getFreeTries } from "@/lib/db"
import SubOrBilling from "./SubOrBilling"
import { checkSubscription } from "@/lib/subscription"
import { AlertCircle } from "lucide-react"

export default async function SubscribePrompt({ freeTries }: { freeTries: number | any }) {
  const isSEOSTAR = await checkSubscription()

  return <div className="p-3 border-2 flex items-center justify-between rounded-xl flex-wrap space-y-2 md:space-y-0">
    <section className="flex items-center space-x-2">
      <AlertCircle />
      <span className=" text-muted-foreground text-xs "> You have {freeTries}/10 free checks left</span>
    </section>
    
    <SubOrBilling isSEOSTAR={isSEOSTAR} />
  </div>
}