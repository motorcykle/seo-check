import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { CheckCheck, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { checkSubscription } from "@/lib/subscription";
import SubOrBilling from "./SubOrBilling";

export default async function Header () {
  const isSEOSTAR = await checkSubscription()

  return <header className="sticky top-0 z-50 border-b backdrop-blur-lg w-screen overflow-hidden">
    <nav className="mx-auto max-w-7xl p-5 flex items-center justify-between">
      <Link prefetch={false} href={"/"} className="flex items-center font-semibold text-muted-foreground text-2xl">seo-check <CheckCheck className="h-5 w-5 ml-1" /></Link>
        
      
        <SignedIn><section className="flex items-center space-x-3">
          <SubOrBilling isSEOSTAR={isSEOSTAR} />

          <Link prefetch={false} href={"/analyze-seo"}>
            <Button >Analyze SEO</Button>
          </Link>
          
          <UserButton afterSignOutUrl="/" /></section>
        </SignedIn>
      
        <SignedOut><section className="space-x-3">
          <SignInButton>
            <Button className="" variant={"outline"}>
              Log in 
            </Button>
          </SignInButton>

          <SignUpButton>
            <Button>
              Register 
            </Button>
          </SignUpButton></section>
        </SignedOut>
      
      
    </nav>
  </header>
}