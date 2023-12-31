import { Button } from "./ui/button";

export default function SubOrBilling ({ isSEOSTAR }: { isSEOSTAR: boolean }) {
  return isSEOSTAR ? <Button variant={"outline"}>Billing</Button> : <Button>
    Upgrade to SEOSTAR 🌟
  </Button>
}