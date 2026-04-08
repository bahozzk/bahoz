import Head from "next/head";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "data-collection", label: "Data Collection" },
  { id: "ads", label: "Ads & AdMob" },
  { id: "subscriptions", label: "Subscriptions & Billing" },
  { id: "security", label: "Data Security" },
  { id: "children", label: "Children's Privacy" },
  { id: "rights", label: "GDPR & CCPA Rights" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPolicyPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>PomoLofi Privacy Policy</title>
        <meta
          name="description"
          content="Privacy Policy for the PomoLofi Android app."
        />
      </Head>

      <main className="privacy-page">
        <div className="shell">
          <aside className="toc" aria-label="Table of contents">
            <p className="tocTitle">Privacy Policy</p>
            <nav>
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="tocLink">
                  {section.label}
                </a>
              ))}
            </nav>
          </aside>

          <article className="content">
            <header className="header">
              <p className="eyebrow">PomoLofi</p>
              <h1>Privacy Policy</h1>
              <p className="subtitle">
                Effective date: April 8, 2026. This Privacy Policy explains how
                we collect, use, disclose, and protect information in the
                PomoLofi mobile application.
              </p>
            </header>

            <section id="introduction">
              <h2>Introduction</h2>
              <p>
                This policy applies to the PomoLofi Android mobile application
                and related services. By using PomoLofi, you agree to the
                practices described in this policy.
              </p>
            </section>

            <section id="data-collection">
              <h2>Data Collection</h2>
              <p>
                We collect limited account and usage information to operate and
                improve PomoLofi.
              </p>
              <ul>
                <li>
                  <strong>Account data:</strong> When you sign in through
                  Firebase Authentication, we may receive identifiers such as
                  your user ID, email address, and basic profile details.
                </li>
                <li>
                  <strong>Usage data:</strong> We may collect app interaction,
                  session, device, and diagnostic data to improve performance
                  and reliability.
                </li>
              </ul>
            </section>

            <section id="ads">
              <h2>Ads &amp; AdMob</h2>
              <p>
                PomoLofi uses Google AdMob, including Rewarded, Interstitial,
                and Native ad formats. AdMob may use device identifiers,
                cookies, and similar technologies to deliver and measure ads,
                including personalized ads where legally permitted.
              </p>
              <p>
                You can learn more in Google&apos;s Privacy Policy:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy
                </a>
                .
              </p>
            </section>

            <section id="subscriptions">
              <h2>Subscriptions &amp; Billing</h2>
              <p>
                We use Google Play Billing for subscription purchases. Payment
                transactions are processed by Google Play. We do not collect or
                store raw credit card numbers or full payment card details on
                our servers.
              </p>
            </section>

            <section id="security">
              <h2>Data Security</h2>
              <p>
                We implement reasonable administrative, technical, and
                organizational safeguards to protect personal data from
                unauthorized access, loss, misuse, or alteration. No method of
                transmission or storage is completely secure, but we work to
                reduce risk and continuously improve protections.
              </p>
            </section>

            <section id="children">
              <h2>Children&apos;s Privacy</h2>
              <p>
                PomoLofi is not intended for children under 13 years of age. We
                do not knowingly collect personal information from children
                under 13. If you believe a child has provided personal data,
                contact us and we will take appropriate steps.
              </p>
            </section>

            <section id="rights">
              <h2>GDPR &amp; CCPA Privacy Rights</h2>
              <p>
                Depending on your location, you may have rights to access,
                correct, delete, or restrict processing of your personal data,
                and to request data portability or opt out of certain data
                sharing/advertising practices. We will respond to valid requests
                in accordance with applicable law.
              </p>
            </section>

            <section id="contact">
              <h2>Contact Us</h2>
              <p>
                For privacy questions, requests, or complaints, contact us at{" "}
                <a href="mailto:support@pomolofi.com">[support@pomolofi.com]</a>.
              </p>
            </section>
          </article>
        </div>
      </main>

      <style jsx>{`
        .privacy-page {
          min-height: 100vh;
          padding: 1.5rem 1rem 3rem;
          background: radial-gradient(
              1200px circle at 10% -10%,
              rgba(99, 102, 241, 0.08),
              transparent 40%
            ),
            #f6f7fb;
          color: #111827;
        }

        .shell {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          gap: 1.5rem;
          grid-template-columns: minmax(0, 1fr);
        }

        .toc {
          position: sticky;
          top: 1rem;
          align-self: start;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(17, 24, 39, 0.08);
          border-radius: 14px;
          backdrop-filter: blur(10px);
          padding: 1rem;
          box-shadow: 0 10px 30px rgba(17, 24, 39, 0.08);
          z-index: 10;
        }

        .tocTitle {
          margin: 0 0 0.75rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .toc nav {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem 0.75rem;
        }

        .tocLink {
          color: #374151;
          font-size: 0.92rem;
          transition: color 0.2s ease;
        }

        .tocLink:hover {
          color: #111827;
        }

        .content {
          max-width: 800px;
          margin: 0 auto;
          width: 100%;
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(17, 24, 39, 0.08);
          border-radius: 18px;
          box-shadow: 0 14px 40px rgba(17, 24, 39, 0.08);
          padding: 1.5rem;
        }

        .header {
          margin-bottom: 1.5rem;
        }

        .eyebrow {
          margin: 0 0 0.5rem;
          color: #4f46e5;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          font-size: 0.8rem;
        }

        h1 {
          margin: 0;
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          color: #030712;
        }

        .subtitle {
          margin-top: 0.75rem;
          color: #4b5563;
        }

        section {
          scroll-margin-top: 6.5rem;
          padding-top: 0.25rem;
        }

        section + section {
          margin-top: 1.25rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(17, 24, 39, 0.08);
        }

        h2 {
          margin: 0 0 0.65rem;
          font-size: 1.2rem;
          color: #111827;
        }

        p,
        li {
          color: #374151;
          line-height: 1.72;
        }

        ul {
          margin: 0.5rem 0 0;
          padding-left: 1.15rem;
        }

        a {
          color: #4338ca;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        @media (min-width: 1000px) {
          .shell {
            grid-template-columns: 260px minmax(0, 1fr);
            align-items: start;
          }

          .toc nav {
            display: grid;
            gap: 0.55rem;
          }
        }

        @media (prefers-color-scheme: dark) {
          .privacy-page {
            background: radial-gradient(
                1000px circle at 10% -10%,
                rgba(139, 92, 246, 0.2),
                transparent 35%
              ),
              #000000;
            color: #f5f5f5;
          }

          .toc {
            background: rgba(15, 15, 15, 0.9);
            border-color: #262626;
            box-shadow: 0 18px 45px rgba(0, 0, 0, 0.55);
          }

          .tocTitle {
            color: #f5f5f5;
          }

          .tocLink {
            color: #d4d4d8;
          }

          .tocLink:hover {
            color: #ffffff;
          }

          .content {
            background: rgba(10, 10, 10, 0.9);
            border-color: #262626;
            box-shadow: 0 20px 48px rgba(0, 0, 0, 0.65);
          }

          .eyebrow {
            color: #a78bfa;
          }

          h1,
          h2 {
            color: #f5f5f5;
          }

          .subtitle,
          p,
          li {
            color: #d4d4d8;
          }

          section + section {
            border-top-color: #27272a;
          }

          a {
            color: #c4b5fd;
          }
        }
      `}</style>
    </>
  );
}
