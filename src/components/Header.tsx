import { CheckCheck, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Header () {
  return <header className="">
    <nav className="mx-auto max-w-7xl p-5">
      <Link prefetch={false} href={"/"} className="flex items-center font-semibold text-muted-foreground">seo-check <CheckCheck className="h-4 w-4" /></Link>
    </nav>
  </header>
}