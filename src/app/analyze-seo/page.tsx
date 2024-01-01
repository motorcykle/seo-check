import AnalyzeForm from "@/components/AnalyzeForm";
import { getFreeTries, updateFreeTries } from "@/lib/db";
import { checkSubscription } from "@/lib/subscription";

export default async function AnalyzeSEO () {
  const isSEOSTAR = await checkSubscription()

  const getTries = async () => {
    "use server";
    let res = await getFreeTries()
    return res[0]?.freeTries
  }
  
  const freeTries = await getTries()

  return <main>
    <section className="content max-w-7xl mx-auto p-5">
      <h1 className="mb-5 text-4xl">Analyze SEO</h1>

      <AnalyzeForm freeTries={freeTries} isSEOSTAR={isSEOSTAR} updateTries={getTries} />
    </section>
  </main>
}