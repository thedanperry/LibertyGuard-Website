import Link from 'next/link';

export default function LegalDisclaimer() {
  return (
    <div className="min-h-screen bg-climate-black text-climate-cream">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-climate-bold text-6xl md:text-8xl text-climate-red text-center mb-16">
          LEGAL DISCLAIMER
        </h1>

        <div className="space-y-8 text-climate-cream">
          <div className="text-center mb-8">
            <p className="text-sm opacity-60">Effective Date: January 11, 2025</p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Critical Legal Notice</h2>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-6">
              <p className="text-lg font-semibold text-red-300">
                ATTENTION: This application and its associated guides are provided for EDUCATIONAL AND INFORMATIONAL PURPOSES ONLY. 
                The information contained herein regarding civil resistance, protest activities, legal rights, and survival techniques 
                is not intended as legal advice, professional guidance, or instruction for any specific situation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Not Legal Advice</h2>
            <p className="text-lg leading-relaxed mb-4">
              The legal information provided in this application and guides is general information about laws and constitutional rights. 
              It is not legal advice for your specific situation. Laws vary by jurisdiction and change frequently. For advice about your 
              specific legal situation, consult with a licensed attorney in your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">No Attorney-Client Relationship</h2>
            <p className="text-lg leading-relaxed mb-4">
              Use of this application and its guides does not create an attorney-client relationship between you and the developers, 
              publishers, or any legal aid organizations mentioned in the guides. Contact legal aid organizations directly to establish representation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Jurisdictional Variations</h2>
            <p className="text-lg leading-relaxed mb-4">
              Laws regarding protests, civil resistance, recording police, and related activities vary significantly between states and localities. 
              Information provided reflects general principles and federal law but may not accurately describe law in your specific jurisdiction. 
              Research local laws or consult with local attorneys before engaging in activities that may have legal consequences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Laws Change</h2>
            <p className="text-lg leading-relaxed mb-4">
              Legal information in this application may become outdated as laws change through legislation, court decisions, and executive action. 
              We cannot guarantee that legal information is current. Verify current law before relying on information in this application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Medical Information Disclaimer</h2>
            <p className="text-lg leading-relaxed mb-4">
              Medical information provided in this application is for educational purposes only and is not intended as medical advice. 
              Always consult with qualified medical professionals for medical advice, diagnosis, or treatment. In emergency situations, 
              call 911 or seek immediate medical attention.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Safety and Risk</h2>
            <p className="text-lg leading-relaxed mb-4">
              Activities described in this application, including protest activities, civil resistance, and survival techniques, 
              carry inherent risks including but not limited to arrest, injury, legal consequences, and personal harm. 
              You assume all risks associated with any activities you choose to undertake based on information in this application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Limitation of Liability</h2>
            
            <h3 className="text-xl font-bold text-climate-red mb-3">To the Maximum Extent Permitted by Law</h3>
            <p className="text-lg leading-relaxed mb-4">
              The developers, publishers, distributors, and all affiliated parties disclaim all liability for any injuries, damages, 
              legal consequences, financial losses, or other harm resulting from use of this application or reliance on information contained therein.
            </p>

            <h3 className="text-xl font-bold text-climate-red mb-3">You Assume All Risks</h3>
            <p className="text-lg leading-relaxed mb-4">
              Use of this application is at your own risk. You assume full responsibility for all consequences of your actions, 
              including legal consequences of protest activities, medical consequences of first aid attempts, financial consequences 
              of purchases, and any other outcomes resulting from use of this application.
            </p>

            <h3 className="text-xl font-bold text-climate-red mb-3">No Warranties</h3>
            <p className="text-lg leading-relaxed mb-4">
              This application and its content are provided 'as is' without warranties of any kind, express or implied, including but not 
              limited to warranties of accuracy, completeness, fitness for particular purpose, or non-infringement.
            </p>

            <h3 className="text-xl font-bold text-climate-red mb-3">Indemnification</h3>
            <p className="text-lg leading-relaxed mb-4">
              By using this application, you agree to indemnify and hold harmless the developers, publishers, and distributors from any 
              claims, damages, or expenses arising from your use of the application or your violation of any laws or rights of others.
            </p>

            <h3 className="text-xl font-bold text-climate-red mb-3">Severability</h3>
            <p className="text-lg leading-relaxed mb-4">
              If any provision of this disclaimer is found unenforceable, the remaining provisions remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Final Warning</h2>
            <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-6">
              <p className="text-lg font-semibold text-red-300">
                Resistance to authoritarian government is dangerous. People are arrested. People are injured. People face serious legal 
                and personal consequences. This application provides information about resistance, but you alone decide whether to engage 
                in resistance activities and you alone bear the consequences of those decisions. We cannot protect you from those consequences. 
                We can only provide information to help you make informed decisions about the risks you choose to accept.
              </p>
            </div>
          </section>

          <div className="mt-16 pt-8 border-t border-climate-red text-center">
            <p className="text-sm opacity-60">
              This Legal Disclaimer is effective as of January 11, 2025 and applies to all users of the LibertyGuard application.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="bg-climate-red text-climate-cream px-8 py-3 rounded-full text-lg font-bold hover:bg-red-700 transition-colors">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
