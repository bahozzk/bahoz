import Head from "next/head";

export default function DeleteAccountPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Delete Account | PomoLofi</title>
        <meta
          name="description"
          content="Delete your PomoLofi account from the app or request deletion by email."
        />
      </Head>

      <main className="min-h-screen bg-[#050505] px-4 py-16 text-zinc-100">
        <section className="mx-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-2xl backdrop-blur-sm sm:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/90">
            PomoLofi
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Delete Account
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
            You can permanently delete your PomoLofi account using one of the
            following methods.
          </p>

          <div className="mt-8 space-y-4">
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-white">
                Method 1 — In-App Deletion
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                Open the app and follow:
              </p>
              <p className="mt-2 rounded-lg bg-black/40 px-3 py-2 text-sm font-medium text-zinc-200 sm:text-base">
                Settings → Profile → Delete Account
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-white">
                Method 2 — Email Request
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
                If you cannot access the app, request account deletion by
                email:
              </p>
              <a
                href="mailto:bahozerkek21@gmail.com"
                className="mt-3 inline-block text-sm font-medium text-violet-300 underline underline-offset-4 transition hover:text-violet-200 sm:text-base"
              >
                bahozerkek21@gmail.com
              </a>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
