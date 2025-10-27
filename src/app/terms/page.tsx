import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-climate-black text-climate-cream">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-climate-bold text-6xl md:text-8xl text-climate-red text-center mb-16">
          TERMS OF SERVICE
        </h1>

        <div className="space-y-8 text-climate-cream">
          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Acceptance of Terms</h2>
            <p className="text-lg leading-relaxed">
              By downloading, installing, or using LibertyGuard ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Description of Service</h2>
            <p className="text-lg leading-relaxed mb-4">
              LibertyGuard is an anti-fascist resistance and democracy protection application that provides:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Real-time democracy health monitoring and authoritarian threat tracking</li>
              <li>Protest event coordination and community organizing tools</li>
              <li>Encrypted documentation of police violence and state repression</li>
              <li>Emergency beacon system for activist safety</li>
              <li>35+ resistance guides including protest protocols, legal rights, and trauma care</li>
              <li>Protection checklists for protest safety and emergency preparedness</li>
              <li>Offline access to critical resistance information</li>
              <li>Pro subscription features for advanced content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">User Accounts</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Account Creation:</strong> You may create an account to access personalized features</li>
              <li><strong>Account Security:</strong> You are responsible for maintaining the security of your account</li>
              <li><strong>Account Information:</strong> You must provide accurate and complete information</li>
              <li><strong>Account Termination:</strong> We may suspend or terminate accounts that violate these Terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Subscription Services</h2>
            
            <h3 className="text-xl font-bold text-climate-red mb-3">Pro Subscription</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li><strong>Monthly Subscription:</strong> $4.99 per month, automatically renews unless cancelled</li>
              <li><strong>Yearly Subscription:</strong> $39.99 per year, automatically renews unless cancelled</li>
              <li><strong>Payment:</strong> Subscriptions are processed through Apple's App Store</li>
              <li><strong>Renewal:</strong> Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period</li>
              <li><strong>Cancellation:</strong> Cancel through your Apple ID account settings or device settings</li>
            </ul>

            <h3 className="text-xl font-bold text-climate-red mb-3">Subscription Terms</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Access:</strong> Pro subscriptions provide access to premium survival guides and features</li>
              <li><strong>Refunds:</strong> Refund requests are handled through Apple's App Store according to their policies</li>
              <li><strong>Price Changes:</strong> We may change subscription prices with 30 days' notice</li>
              <li><strong>Service Availability:</strong> We strive for 99% uptime but cannot guarantee uninterrupted service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Age Restrictions</h2>
            <p className="text-lg leading-relaxed mb-4">
              You must be at least 18 years old to use this App. By using the App, you represent and warrant that you are 18 or older. 
              Users under 18 are prohibited from using the App without parental supervision and consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">User Responsibilities</h2>
            
            <h3 className="text-xl font-bold text-climate-red mb-3">Acceptable Use</h3>
            <p className="text-lg leading-relaxed mb-4">
              You agree to use the App only for lawful purposes and in accordance with these Terms. You agree NOT to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li>Use the App for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the App's functionality</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Share your account credentials with others</li>
              <li>Submit false, misleading, or harmful information through the App</li>
              <li>Use the App to harass, threaten, or intimidate others</li>
              <li>Violate any applicable laws or regulations while using the App</li>
            </ul>

            <h3 className="text-xl font-bold text-climate-red mb-3">User-Generated Content</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li><strong>Your Responsibility:</strong> You are solely responsible for any content you submit through the App</li>
              <li><strong>Accuracy:</strong> You must ensure all submitted information is accurate and truthful</li>
              <li><strong>Legal Compliance:</strong> Your content must comply with all applicable laws</li>
              <li><strong>No Endorsement:</strong> We do not endorse or verify user-submitted content</li>
              <li><strong>Moderation Rights:</strong> We reserve the right to remove content that violates these Terms</li>
            </ul>

            <h3 className="text-xl font-bold text-climate-red mb-3">Emergency Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Accuracy:</strong> While we strive for accuracy, emergency information may not always be current</li>
              <li><strong>Verification:</strong> Always verify critical information through official sources</li>
              <li><strong>Liability:</strong> We are not responsible for decisions made based on app information</li>
              <li><strong>Emergency Situations:</strong> In life-threatening emergencies, contact emergency services immediately</li>
              <li><strong>Not Emergency Services:</strong> This App is not a substitute for 911 or emergency services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Intellectual Property</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>App Content:</strong> All content, features, and functionality are owned by LibertyGuard</li>
              <li><strong>User Content:</strong> You retain ownership of content you create using the App</li>
              <li><strong>License:</strong> We grant you a limited, non-exclusive license to use the App</li>
              <li><strong>Restrictions:</strong> You may not copy, modify, or distribute the App without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Privacy and Data</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Privacy Policy:</strong> Your privacy is important to us. Please review our Privacy Policy</li>
              <li><strong>Data Collection:</strong> We collect data as described in our Privacy Policy</li>
              <li><strong>Data Security:</strong> We implement reasonable security measures to protect your data</li>
              <li><strong>Data Sharing:</strong> We do not sell your personal information to third parties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Protest and Activism Activities</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Your Choice:</strong> Participation in protests, demonstrations, or resistance activities is entirely your choice</li>
              <li><strong>Legal Risks:</strong> Such activities carry inherent legal risks including arrest, prosecution, and civil liability</li>
              <li><strong>No Liability:</strong> We are not responsible for any legal consequences of your participation in activism</li>
              <li><strong>Local Laws:</strong> You are responsible for understanding and complying with local laws regarding protests and demonstrations</li>
              <li><strong>Safety First:</strong> Always prioritize your safety and the safety of others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">International Users</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>US-Focused:</strong> This App is designed primarily for users in the United States</li>
              <li><strong>Local Compliance:</strong> International users must comply with their local laws and regulations</li>
              <li><strong>No Guarantee:</strong> We do not guarantee the App's legality or functionality outside the United States</li>
              <li><strong>Your Risk:</strong> Use of the App outside the United States is at your own risk</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Disclaimers and Limitations</h2>
            
            <h3 className="text-xl font-bold text-climate-red mb-3">Service Disclaimers</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li><strong>No Warranty:</strong> The App is provided "as is" without warranties of any kind</li>
              <li><strong>Emergency Use:</strong> The App is for informational purposes and is not a substitute for professional emergency services</li>
              <li><strong>Accuracy:</strong> We do not guarantee the accuracy, completeness, or timeliness of information</li>
              <li><strong>Availability:</strong> We do not guarantee uninterrupted access to the App</li>
              <li><strong>Third-Party Content:</strong> We do not control or verify information from third-party sources</li>
            </ul>

            <h3 className="text-xl font-bold text-climate-red mb-3">Limitation of Liability</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>No Liability:</strong> We are not liable for any damages arising from your use of the App</li>
              <li><strong>Maximum Liability:</strong> Our total liability is limited to the amount you paid for the App</li>
              <li><strong>Indirect Damages:</strong> We are not liable for indirect, incidental, or consequential damages</li>
              <li><strong>Emergency Situations:</strong> We are not liable for decisions made in emergency situations</li>
              <li><strong>Activism Consequences:</strong> We are not liable for any consequences of protest or resistance activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Termination</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Your Rights:</strong> You may stop using the App at any time</li>
              <li><strong>Our Rights:</strong> We may terminate your access for violations of these Terms</li>
              <li><strong>Effect of Termination:</strong> Upon termination, your right to use the App ceases immediately</li>
              <li><strong>Survival:</strong> Certain provisions survive termination of these Terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Governing Law</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Jurisdiction:</strong> These Terms are governed by the laws of the United States</li>
              <li><strong>Disputes:</strong> Any disputes will be resolved in the courts of the United States</li>
              <li><strong>Severability:</strong> If any provision is found invalid, the remaining provisions remain in effect</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Changes to Terms</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Updates:</strong> We may update these Terms from time to time</li>
              <li><strong>Notification:</strong> We will notify you of significant changes through the App or email</li>
              <li><strong>Acceptance:</strong> Continued use of the App constitutes acceptance of updated Terms</li>
              <li><strong>Effective Date:</strong> Changes become effective immediately upon posting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Apple App Store Terms</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Apple's Terms:</strong> Your use of the App is also subject to Apple's Licensed Application End User License Agreement</li>
              <li><strong>Apple's Liability:</strong> Apple is not responsible for the App or its content</li>
              <li><strong>Third-Party Claims:</strong> Apple is not responsible for any third-party claims related to the App</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Contact Information</h2>
            <p className="text-lg leading-relaxed">
              For questions about these Terms, contact us at{' '}
              <a href="mailto:support@libertyguard.app" className="text-climate-red hover:underline font-bold">
                support@libertyguard.app
              </a>
            </p>
            <p className="text-sm text-climate-cream opacity-75 mt-2">
              <strong>Last Updated:</strong> October 2025
            </p>
          </section>
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="bg-climate-red text-climate-cream px-8 py-3 rounded-full text-lg font-bold hover:bg-red-700 transition-colors block">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
