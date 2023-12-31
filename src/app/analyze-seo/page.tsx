import SubscribePrompt from "@/components/SubscribePrompt";
import { checkSubscription } from "@/lib/subscription";

export default async function AnalyzeSEO () {
  const isSEOSTAR = await checkSubscription()

  return <main>
    <section className="content max-w-7xl mx-auto p-5">
      <h1 className="mb-5 text-4xl">Analyze SEO</h1>
      {/* subscribe prompt + free tries shown*/}
      {!isSEOSTAR && <SubscribePrompt />}

      {/* form */}
    </section>
  </main>
}