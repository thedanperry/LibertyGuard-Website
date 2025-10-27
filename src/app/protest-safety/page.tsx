import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Protest Safety Guide 2025 - Know Your Rights & Stay Safe During Protests",
  description: "Complete guide to protest safety, civil rights, and legal protections. Learn your rights, what to bring, how to document arrests, and emergency protocols. Download the LibertyGuard app for real-time protection.",
  keywords: "protest safety, protest guide, know your rights, civil rights, police encounters, protest checklist, emergency beacon, documentation, legal rights, protest organizer",
};

export default function ProtestSafetyPage() {
  return (
    <div className="min-h-screen bg-climate-black text-climate-cream">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-climate-bold text-4xl md:text-6xl text-climate-red text-center mb-8">
          HOW TO SURVIVE A PROTEST
        </h1>
        
        <div className="text-center mb-8">
          <p className="text-climate-cream text-xl font-bold mb-2">Know Your Rights. Stay Safe. Document Everything.</p>
          <p className="text-climate-cream text-lg opacity-75">Complete 2025 guide to protest safety, legal rights, and emergency protocols</p>
        </div>

        <div className="p-6 rounded-lg mb-8 border-2 border-climate-red">
          <p className="text-climate-cream text-lg font-bold mb-2"><strong className="text-climate-red">Critical:</strong> Read this before your next protest</p>
          <p className="text-climate-cream">
            People get arrested. People get injured. People face serious legal consequences. This guide gives you the knowledge to protect yourself when things go wrong. <strong className="text-climate-red">No theory. Just practical, actionable information.</strong>
          </p>
        </div>

        <div className="space-y-8 text-climate-cream">
          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Your Rights Are Under Attack. Here's How to Protect Them</h2>
            <p className="text-lg leading-relaxed mb-4">
              The Constitution guarantees your right to peaceful assembly. But those words on paper won't help you if you don't know how to exercise them safely. <strong className="text-climate-red">This guide could save you from arrest, injury, or legal trouble.</strong>
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <strong className="text-climate-red">Your rights include:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li>Right to peaceful assembly in public spaces</li>
              <li>Right to record police activity (in public spaces)</li>
              <li>Right to remain silent (you don't have to answer questions)</li>
              <li>Right to refuse searches (unless there's probable cause or a warrant)</li>
              <li>Right to legal representation (ask for a lawyer if arrested)</li>
              <li>Right to remain silent until your lawyer arrives</li>
            </ul>
            <p className="text-lg leading-relaxed mb-4">
              <strong className="text-climate-red">Important:</strong> These rights apply to peaceful protests on public property. Permits may be required for large gatherings or marches on public streets.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">What to Bring to a Protest: Essential Safety Gear</h2>
            <p className="text-lg leading-relaxed mb-4">
              Being prepared can make the difference between staying safe and facing serious consequences. Here's your essential protest safety checklist:
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-climate-red mb-3">Essential Items:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Water:</strong> Stay hydrated - bring multiple water bottles</li>
                <li><strong>Identification:</strong> Driver's license or ID (but know your right to remain silent)</li>
                <li><strong>Phone:</strong> Fully charged with emergency contacts programmed</li>
                <li><strong>Emergency beacon app:</strong> One-tap alert that sends location to trusted contacts</li>
                <li><strong>Comfortable shoes:</strong> Protect your feet - running shoes recommended</li>
                <li><strong>Weather protection:</strong> Rain gear, sun protection as needed</li>
                <li><strong>Cash:</strong> Small bills for food, transportation, legal aid</li>
                <li><strong>Legal aid hotline:</strong> Local legal aid organization phone number</li>
                <li><strong>First aid supplies:</strong> Bandages, antiseptic, pain relief</li>
                <li><strong>Emergency contact info:</strong> Written down (phone may be confiscated)</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-climate-red mb-3">Documentation Equipment:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Mobile phone:</strong> Fully charged, backup battery if possible</li>
                <li><strong>Cloud backup:</strong> Photos/videos auto-sync to cloud</li>
                <li><strong>Notepad:</strong> Pen and paper for notes, badges, events</li>
                <li><strong>Emergency documentation app:</strong> Instantly capture incidents with timestamp and location</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-climate-red mb-3">What NOT to Bring:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Weapons:</strong> Firearms, knives, or any weapons (illegal at most protests)</li>
                <li><strong>Controlled substances:</strong> Drugs or alcohol</li>
                <li><strong>Face masks (where illegal):</strong> Check local laws on mask mandates</li>
                <li><strong>Anything that could be used as a weapon:</strong> Tools, bats, etc.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">If You're Arrested: Know Your Rights</h2>
            <p className="text-lg leading-relaxed mb-4">
              <strong className="text-climate-red">DO:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Stay calm and don't resist physically</li>
              <li>State clearly: "I am exercising my First Amendment right to protest"</li>
              <li>Ask "Am I under arrest? Am I free to go?"</li>
              <li>If arrested, say "I want to speak to a lawyer"</li>
              <li>Stay silent except to state your rights - don't answer questions without your lawyer</li>
              <li>Remember: anything you say can and will be used against you</li>
              <li>Call a lawyer as soon as possible</li>
              <li>Document everything - police badge numbers, witnesses, incidents</li>
            </ul>
            <p className="text-lg leading-relaxed mb-4">
              <strong className="text-climate-red">DON'T:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Run from police (evading arrest is a crime)</li>
              <li>Lie to police officers</li>
              <li>Consent to searches without a warrant (say "I do not consent to this search")</li>
              <li>Sign anything without consulting a lawyer</li>
              <li>Make statements without legal counsel present</li>
              <li>Plead guilty without discussing with your lawyer first</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Emergency Protocol: One-Tap Alert System</h2>
            <p className="text-lg leading-relaxed mb-4">
              In high-risk situations, you need an instant way to alert trusted contacts with your exact location. The LibertyGuard app's Emergency Beacon feature provides:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li><strong>One-tap activation:</strong> Press a button to instantly alert your emergency contacts</li>
              <li><strong>GPS coordinates:</strong> Your exact location sent to trusted contacts</li>
              <li><strong>Map links:</strong> Easy-to-follow directions to your location</li>
              <li><strong>Custom messages:</strong> Add context about the emergency</li>
              <li><strong>Multiple contacts:</strong> Send alerts to friends, family, and legal aid organizations simultaneously</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Legal Documentation: Protecting Your Rights</h2>
            <p className="text-lg leading-relaxed mb-4">
              Documentation is crucial for holding authorities accountable and protecting yourself legally. Here's what to document:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li><strong>Police interactions:</strong> Badge numbers, names, conduct</li>
              <li><strong>Arrest procedures:</strong> What you said, what they said, time/date/location</li>
              <li><strong>Witnesses:</strong> Names and contact information of witnesses to your arrest</li>
              <li><strong>Injuries:</strong> Photos of any injuries, medical treatment received</li>
              <li><strong>Property damage:</strong> Photos of damaged property or belongings</li>
              <li><strong>Video evidence:</strong> Record police encounters (legal in public spaces in most states)</li>
            </ul>
            <div className="p-6 rounded-lg mb-4 border-2 border-climate-red">
              <p className="text-climate-cream text-lg leading-relaxed">
                <strong className="text-climate-red">Legal Note:</strong> You have the right to record police activity in public spaces in most jurisdictions. However, laws vary by state. Check local laws before recording. If you're arrested, your phone may be confiscated, so cloud backup is essential.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Stay Safe: Protest Safety Protocols</h2>
            <p className="text-lg leading-relaxed mb-4">
              These safety protocols can help you stay safe during protests:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li><strong>Buddy system:</strong> Never protest alone - stay with friends or group</li>
              <li><strong>Check points:</strong> Designate check-in times with people outside the protest</li>
              <li><strong>Exit strategy:</strong> Know multiple routes out of the area</li>
              <li><strong>Stay alert:</strong> Monitor crowd dynamics and police movement</li>
              <li><strong>Hydration:</strong> Stay hydrated, especially in hot weather or during long protests</li>
              <li><strong>First aid:</strong> Know basic first aid for common protest injuries</li>
              <li><strong>De-escalation:</strong> Avoid confrontational behavior that could escalate situations</li>
            </ul>
          </section>

          <section className="p-8 rounded-lg border-2 border-climate-red">
            <h2 className="text-2xl font-bold text-climate-red mb-4">Download LibertyGuard for Complete Protection</h2>
            <p className="text-lg leading-relaxed mb-6">
              The LibertyGuard app provides real-time protection during protests and civil unrest:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li><strong>Emergency Beacon:</strong> One-tap alert sends location to emergency contacts instantly</li>
              <li><strong>Legal Rights Guide:</strong> Know your constitutional rights at all times</li>
              <li><strong>Documentation Tools:</strong> Capture incidents with timestamp and location</li>
              <li><strong>Threat Intelligence:</strong> Real-time alerts about police activity and civil unrest</li>
              <li><strong>Protest Coordination:</strong> Find and organize protests in your area</li>
              <li><strong>Community Messaging:</strong> Connect with fellow activists safely</li>
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

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Emergency Contacts</h2>
            <p className="text-lg leading-relaxed mb-4">
              Keep these numbers on hand (written down, not just in your phone):
            </p>
            <ul className="space-y-2">
              <li><strong>Legal Aid Organizations:</strong> Search "legal aid [your city]" - many offer 24/7 hotlines</li>
              <li><strong>National Lawyers Guild:</strong> 1-888-NLG-EXAM (serves protesters nationwide)</li>
              <li><strong>ACLU:</strong> 1-888-243-3044 (legal information, not emergency legal aid)</li>
              <li><strong>National Bail Fund Network:</strong> Helps with bail if you're arrested</li>
            </ul>
          </section>

          <div className="mt-12 space-y-4">
            <div className="bg-climate-red bg-opacity-10 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-climate-cream mb-4">Related Guides</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/know-your-rights" className="text-climate-cream hover:text-climate-red transition-colors underline">
                    Know Your Rights: Complete Legal Guide for Activists
                  </Link>
                  <p className="text-climate-cream text-sm ml-4">Learn your constitutional rights, what to say to police, and how to protect yourself legally</p>
                </li>
              </ul>
            </div>
            <div className="text-center space-y-4 mt-12">
              <Link href="/know-your-rights" className="bg-climate-red text-climate-cream px-8 py-3 rounded-full text-lg font-bold hover:bg-red-700 transition-colors">
                BACK TO KNOW YOUR RIGHTS GUIDE
              </Link>
              <Link href="/" className="bg-climate-red text-climate-cream px-8 py-3 rounded-full text-lg font-bold hover:bg-red-700 transition-colors">
                BACK TO HOME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
