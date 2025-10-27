import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Know Your Rights: Complete Legal Guide for Activists and Protesters 2025",
  description: "Comprehensive guide to your constitutional rights during protests, police encounters, and arrests. Learn your First Amendment rights, what to say, what not to say, and how to document everything. Legal aid resources included.",
  keywords: "know your rights, first amendment rights, civil rights, police encounters, arrest rights, constitutional rights, legal aid, protest rights, fourth amendment, fifth amendment, right to remain silent, legal representation",
};

export default function KnowYourRightsPage() {
  return (
    <div className="min-h-screen bg-climate-black text-climate-cream">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-climate-bold text-4xl md:text-6xl text-climate-red text-center mb-8">
          KNOW YOUR RIGHTS
        </h1>
        
        <div className="text-center mb-8">
          <p className="text-climate-cream text-xl font-bold mb-2">Your Constitutional Rights During Protests and Police Encounters</p>
          <p className="text-climate-cream text-lg opacity-75">Complete 2025 legal guide for activists, protesters, and defenders of democracy</p>
        </div>

        <div className="bg-climate-red bg-opacity-10 p-6 rounded-lg mb-8">
          <p className="text-climate-cream text-lg font-bold mb-2">Critical: These are your legal rights</p>
          <p className="text-climate-cream">
            The Constitution protects your right to protest, but those protections only work if you know them, assert them, and document violations. This guide covers everything you need to know to protect yourself legally.
          </p>
        </div>

        <div className="space-y-8 text-climate-cream">
          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">First Amendment Rights: Your Right to Protest</h2>
            <p className="text-lg leading-relaxed mb-4">
              The First Amendment guarantees your right to <strong>peaceful assembly</strong>, <strong>freedom of speech</strong>, and <strong>freedom to petition the government</strong>. These are constitutional rights, not privileges. But you need to know how to exercise them legally.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <strong className="text-climate-red">What you can do:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Protest peacefully in public spaces (parks, sidewalks, plazas)</li>
              <li>Hold signs and distribute literature</li>
              <li>Chant and speak about political issues</li>
              <li>Film and photograph police activity in public spaces</li>
              <li>Record arrests and incidents as they happen</li>
            </ul>
            <p className="text-lg leading-relaxed mb-4">
              <strong className="text-climate-red">Legal limitations:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Cannot block traffic or emergency vehicles</li>
              <li>Cannot disrupt private businesses without permission</li>
              <li>Local permits may be required for large marches on public streets</li>
              <li>Cannot incite immediate violence ("fighting words")</li>
              <li>Must comply with reasonable time, place, and manner restrictions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Fourth Amendment: Your Right Against Unreasonable Searches</h2>
            <p className="text-lg leading-relaxed mb-4">
              The Fourth Amendment protects you from <strong>unreasonable searches and seizures</strong>. This applies to your person, your belongings, and your digital devices.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <strong className="text-climate-red">Your rights:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>You can refuse searches without a warrant or probable cause</li>
              <li>Police cannot search you without reasonable suspicion of a crime</li>
              <li>Your phone and belongings cannot be searched without a warrant</li>
              <li>You can say: "I do not consent to this search"</li>
              <li>If arrested, you must be informed of the charges against you</li>
            </ul>
            <div className="mb-4">
              <p className="text-lg leading-relaxed font-bold text-climate-red">
                IMPORTANT: You can verbally refuse searches, but do not physically resist. If police search you against your will, document it and fight it in court, not on the street.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Fifth Amendment: Your Right to Remain Silent</h2>
            <p className="text-lg leading-relaxed mb-4">
              The Fifth Amendment gives you the <strong>right to remain silent</strong> and protects you from self-incrimination. This is one of your most important rights during police encounters.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <strong className="text-climate-red">What this means:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>You do not have to answer police questions</li>
              <li>You can say "I want to speak to a lawyer before answering"</li>
              <li>You can say "I'm exercising my right to remain silent"</li>
              <li>You do not have to provide ID unless you're driving or in certain states</li>
              <li>Anything you say can and will be used against you in court</li>
            </ul>
            <div className="mb-4">
              <p className="text-climate-cream text-lg leading-relaxed">
                <strong className="text-climate-red">What to say to police:</strong> "I am exercising my First Amendment right to protest peacefully. I want to speak to a lawyer before answering any questions. Am I under arrest? Am I free to go?"
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Sixth Amendment: Your Right to Legal Counsel</h2>
            <p className="text-lg leading-relaxed mb-4">
              If you're arrested, the Sixth Amendment guarantees your <strong>right to legal representation</strong>. Do not answer questions or sign anything until your lawyer is present.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <strong className="text-climate-red">If arrested:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>State clearly: "I want to speak to a lawyer"</li>
              <li>Do not answer questions until your lawyer arrives</li>
              <li>You have the right to one phone call</li>
              <li>Call a lawyer or legal aid organization immediately</li>
              <li>Do not sign anything without consulting a lawyer first</li>
              <li>Remember everything that happened for your lawyer</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Your Right to Record Police Activity</h2>
            <p className="text-lg leading-relaxed mb-4">
              You have the right to <strong>record police activity in public spaces</strong> in most jurisdictions. This is protected by the First Amendment (freedom of press).
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <strong className="text-climate-red">Recording rights:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>You can record police in public spaces where you have a legal right to be</li>
              <li>Police cannot confiscate your phone without a warrant</li>
              <li>Police cannot demand you stop recording (if it's legal in your jurisdiction)</li>
              <li>Your recordings can be evidence in legal proceedings</li>
              <li>You can livestream to protect evidence from being deleted</li>
            </ul>
            <p className="text-lg leading-relaxed mb-4">
              <strong className="text-climate-red">Check local laws:</strong> Some states have restrictions on recording without consent. Research your local laws before recording. In most public protest situations, recording police activity is legal and protected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">What to Say and Not Say to Police</h2>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-climate-red mb-3">SAY THESE THINGS:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>"I am exercising my First Amendment right to protest"</li>
                <li>"I want to speak to a lawyer"</li>
                <li>"Am I under arrest? Am I free to go?"</li>
                <li>"I do not consent to this search"</li>
                <li>"I am exercising my right to remain silent"</li>
                <li>"I have the right to record this interaction" (if recording)</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-climate-red mb-3">DON'T SAY THESE THINGS:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Don't answer questions without a lawyer present</li>
                <li>Don't volunteer information about your activities</li>
                <li>Don't sign anything without legal counsel</li>
                <li>Don't consent to searches verbally ("Sure, go ahead")</li>
                <li>Don't make threats or abusive statements</li>
                <li>Don't physically resist officers</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">When You're Arrested: Step-by-Step Guide</h2>
            <p className="text-lg leading-relaxed mb-4">
              If you're arrested during a protest, follow these steps to protect your rights:
            </p>
            <ol className="list-decimal list-inside space-y-3 ml-4 mb-4">
              <li><strong className="text-climate-red">Stay calm.</strong> Don't resist physically. Physical resistance is a separate crime.</li>
              <li><strong className="text-climate-red">State your rights clearly:</strong> "I am exercising my First Amendment right to protest. I want to speak to a lawyer."</li>
              <li><strong className="text-climate-red">Remain silent.</strong> Don't answer questions except to ask: "Am I under arrest? Am I free to go?"</li>
              <li><strong className="text-climate-red">Ask for a lawyer immediately.</strong> Say: "I want to speak to a lawyer" repeatedly if necessary.</li>
              <li><strong className="text-climate-red">Document everything.</strong> Officer names, badge numbers, what was said, witnesses present.</li>
              <li><strong className="text-climate-red">Use your one phone call.</strong> Call a lawyer, legal aid, or trusted contact.</li>
              <li><strong className="text-climate-red">Don't sign anything</strong> without consulting with a lawyer first.</li>
              <li><strong className="text-climate-red">Don't plead guilty</strong> at your first court appearance without legal counsel.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Legal Aid Resources</h2>
            <p className="text-lg leading-relaxed mb-4">
              If you're arrested or need legal assistance, here are resources that can help:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li><strong>National Lawyers Guild:</strong> 1-888-NLG-EXAM (serves protesters nationwide)</li>
              <li><strong>ACLU:</strong> 1-888-243-3044 (civil liberties legal information)</li>
              <li><strong>Local Legal Aid Organizations:</strong> Search "legal aid [your city]" for local resources</li>
              <li><strong>Bail Funds:</strong> Local community bail funds may help with bail if arrested</li>
              <li><strong>Know Your Rights Trainings:</strong> Many organizations offer free training workshops</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Document Everything: Legal Evidence Protocol</h2>
            <p className="text-lg leading-relaxed mb-4">
              Documentation is crucial for protecting your rights and holding authorities accountable:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li><strong>Police Interactions:</strong> Officer names, badge numbers, what was said</li>
              <li><strong>Arrest Procedures:</strong> Time, date, location, witnesses, what happened</li>
              <li><strong>Witnesses:</strong> Names and contact information of people who saw what happened</li>
              <li><strong>Injuries:</strong> Photos of any injuries, medical treatment received</li>
              <li><strong>Property Damage:</strong> Photos of damaged belongings or property</li>
              <li><strong>Video Evidence:</strong> Record police encounters (legal in most public places)</li>
            </ul>
            <p className="text-lg leading-relaxed mb-4">
              <strong className="text-climate-red">If your phone is confiscated:</strong> Use cloud backup, send videos to trusted contacts immediately, or livestream to protect evidence.
            </p>
          </section>

          <section className="p-8 rounded-lg border-2 border-climate-red">
            <h2 className="text-2xl font-bold text-climate-red mb-4">Download LibertyGuard for Complete Rights Protection</h2>
            <p className="text-lg leading-relaxed mb-6">
              The LibertyGuard app provides real-time legal protection and emergency protocols:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li><strong>Emergency Beacon:</strong> One-tap alert sends your location to emergency contacts instantly</li>
              <li><strong>Legal Rights Guide:</strong> Complete offline guide to your constitutional rights</li>
              <li><strong>Documentation Tools:</strong> Capture incidents with timestamp and GPS coordinates</li>
              <li><strong>Arrest Protocols:</strong> Step-by-step guide for what to do if arrested</li>
              <li><strong>Legal Aid Hotlines:</strong> Emergency contacts pre-programmed</li>
              <li><strong>35+ Resistance Guides:</strong> Complete offline library of survival and legal protocols</li>
            </ul>
            <div className="text-center">
              <a 
                href="https://apps.apple.com/search?term=LibertyGuard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-climate-red text-climate-cream px-8 py-4 rounded-full text-xl font-bold hover:bg-red-700 transition-colors mb-4"
              >
                DOWNLOAD LIBERTYGUARD FREE (7-Day Trial)
              </a>
              <p className="text-climate-cream text-sm">
                Free version available • Pro: $4.99/month or $39.99/year
              </p>
            </div>
          </section>

          <div className="mt-12 space-y-4">
            <div className="bg-climate-red bg-opacity-10 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-climate-cream mb-4">Related Guides</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/protest-safety" className="text-climate-cream hover:text-climate-red transition-colors underline">
                    Protest Safety Guide: Complete Survival Protocol
                  </Link>
                  <p className="text-climate-cream text-sm ml-4">Learn what to bring, emergency protocols, and how to stay safe during protests</p>
                </li>
              </ul>
            </div>
            <div className="text-center space-y-4 mt-12">
              <Link href="/protest-safety" className="bg-climate-red text-climate-cream px-8 py-3 rounded-full text-lg font-bold hover:bg-red-700 transition-colors block">
                BACK TO PROTEST SAFETY GUIDE
              </Link>
              <Link href="/" className="bg-climate-red text-climate-cream px-8 py-3 rounded-full text-lg font-bold hover:bg-red-700 transition-colors block">
                BACK TO HOME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
