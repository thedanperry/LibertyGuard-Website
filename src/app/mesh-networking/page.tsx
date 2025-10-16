import Link from 'next/link';

export default function MeshNetworkingPage() {
  return (
    <div className="min-h-screen bg-climate-black text-climate-cream">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-climate-bold text-6xl md:text-8xl text-climate-red text-center mb-16">
          MESH NETWORKING GUIDE
        </h1>

        <div className="space-y-8 text-climate-cream">
          <div className="text-center mb-8">
            <p className="text-sm opacity-60">Last Updated: January 16, 2025</p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">What is Mesh Networking?</h2>
            <p className="text-lg leading-relaxed mb-4">
              Mesh networking is a communication technology that allows devices to connect directly to each other without needing centralized infrastructure like cell towers or internet routers. Instead of relying on a single point of access, each device in a mesh network acts as both a receiver and a relay point, passing messages along until they reach their destination.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Think of it like a game of telephone, but digital and secure. If you want to send a message to someone across a protest, your phone can relay it through other LibertyGuard users' phones until it reaches them—even if you're not within direct range and even if the internet is shut down.
            </p>
            <p className="text-lg leading-relaxed">
              This technology has been crucial in protests around the world, from Hong Kong's democracy demonstrations to the Arab Spring, allowing activists to communicate when authorities attempt to silence them by cutting off traditional communications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Why Mesh Networking Matters for Activists</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2">🚨 Internet Shutdown Resistance</h3>
                <p className="text-lg leading-relaxed">
                  Authoritarian regimes frequently shut down internet access during protests to prevent coordination and documentation. Mesh networking bypasses this by creating peer-to-peer connections that don't rely on centralized infrastructure.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">🚨 Censorship-Proof Communication</h3>
                <p className="text-lg leading-relaxed">
                  Traditional messaging apps can be blocked, monitored, or compromised. Mesh networks operate independently, making it nearly impossible for authorities to intercept or prevent communication between activists on the ground.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">🚨 Decentralized Architecture</h3>
                <p className="text-lg leading-relaxed">
                  There's no central server to shut down, no company to pressure, and no single point of failure. The network exists as long as at least two devices are within range of each other.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">🚨 Evidence Distribution</h3>
                <p className="text-lg leading-relaxed">
                  When you document police violence or state repression, mesh networking allows you to instantly distribute that evidence to other activists, making it much harder for authorities to suppress or destroy documentation by seizing a single device.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">🚨 Emergency Alerts</h3>
                <p className="text-lg leading-relaxed">
                  When cell networks are overloaded or compromised during mass protests, mesh networks can still relay critical safety alerts, location updates, and emergency warnings to nearby activists.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">How LibertyGuard's Mesh Network Works</h2>
            <p className="text-lg leading-relaxed mb-4">
              LibertyGuard uses a multi-layered approach to mesh networking, utilizing three different technologies to maximize coverage and reliability:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-climate-red mb-3">1. Bluetooth Low Energy (BLE) Mesh</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Range:</strong> Up to 100 meters (330 feet) in open areas</li>
                  <li><strong>Ideal for:</strong> Dense protest environments, indoor organizing, close-range communication</li>
                  <li><strong>Battery impact:</strong> Very low (1-2% per hour)</li>
                  <li><strong>How it works:</strong> Your device broadcasts a "LibertyGuard" signal via Bluetooth. Other LibertyGuard users nearby automatically detect and connect, creating a local network. Messages can hop through multiple devices to extend range.</li>
                  <li><strong>Security:</strong> All messages are encrypted with AES-256 and signed with cryptographic keys</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-climate-red mb-3">2. WiFi Direct (Peer-to-Peer)</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Range:</strong> Up to 200 meters (660 feet) in open areas</li>
                  <li><strong>Ideal for:</strong> High-bandwidth needs like sharing encrypted photos/videos, longer-range connections</li>
                  <li><strong>Battery impact:</strong> Moderate (5-10% per hour)</li>
                  <li><strong>How it works:</strong> Devices create direct WiFi connections with each other without needing a router. This is like creating a temporary WiFi network between phones.</li>
                  <li><strong>Security:</strong> Password-protected connections with end-to-end encryption</li>
                  <li><strong>Note:</strong> Available on Android devices and some iOS devices</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-climate-red mb-3">3. Local Area Network (LAN) Discovery</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Range:</strong> Any devices on the same WiFi network</li>
                  <li><strong>Ideal for:</strong> Organizing meetings, safe houses, community spaces with WiFi</li>
                  <li><strong>Battery impact:</strong> Very low</li>
                  <li><strong>How it works:</strong> When multiple LibertyGuard users connect to the same WiFi network, they automatically discover each other via UDP broadcast packets and form a mesh network.</li>
                  <li><strong>Security:</strong> Encrypted messaging even on shared networks</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">How to Use Mesh Networking in LibertyGuard</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-climate-red mb-3">Step 1: Enable Mesh Networking</h3>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Open the LibertyGuard app</li>
                  <li>Tap the menu icon (☰) in the top left corner</li>
                  <li>Select "Mesh Network" from the menu</li>
                  <li>Grant necessary permissions when prompted:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Bluetooth (required for BLE mesh)</li>
                      <li>Location (required for Bluetooth scanning on Android)</li>
                      <li>Local Network Access (for LAN discovery)</li>
                    </ul>
                  </li>
                  <li>Mesh networking will automatically start discovering nearby peers</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-bold text-climate-red mb-3">Step 2: Understanding the Network Status Screen</h3>
                <p className="text-lg leading-relaxed mb-3">
                  The Mesh Network screen shows you real-time information about your mesh network:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Network Status:</strong> Shows if mesh networking is active and operational</li>
                  <li><strong>Connected Peers:</strong> Displays all nearby LibertyGuard users you're connected to</li>
                  <li><strong>Connection Type:</strong> Shows whether each peer is connected via Bluetooth, WiFi Direct, or LAN</li>
                  <li><strong>Distance:</strong> Estimates distance to each peer based on signal strength (approximate)</li>
                  <li><strong>Trust Level:</strong> Shows verification status (Unknown → Verified → Trusted)</li>
                  <li><strong>Network Health:</strong> Overall mesh network quality (Poor, Fair, Good, Excellent)</li>
                  <li><strong>Active Peers:</strong> Number of peers currently connected and responsive</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-climate-red mb-3">Step 3: Sending Alerts Through the Mesh</h3>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>When you create an alert in the Alerts screen, you'll see an option to "Broadcast via Mesh Network"</li>
                  <li>Enable this option to send the alert to all connected peers</li>
                  <li>The alert will automatically relay through the mesh (up to 5 hops by default)</li>
                  <li>Peers will receive the alert even without internet connection</li>
                  <li>You can set priority levels: Low, Medium, High, or Urgent</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-bold text-climate-red mb-3">Step 4: Sharing Evidence Through the Mesh</h3>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>After capturing encrypted photos or videos, go to your Evidence Library</li>
                  <li>Select the media you want to distribute</li>
                  <li>Tap "Relay via Mesh Network"</li>
                  <li>The encrypted evidence will be distributed to nearby peers</li>
                  <li>Each peer can further relay the evidence, creating distributed backups</li>
                  <li>This ensures evidence survives even if individual devices are seized</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-bold text-climate-red mb-3">Step 5: Sending Test Messages</h3>
                <p className="text-lg leading-relaxed mb-3">
                  To verify your mesh network is working:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Go to the Mesh Network screen</li>
                  <li>Tap "Send Test Message" at the bottom</li>
                  <li>The app will broadcast a test message to all connected peers</li>
                  <li>Check the message log to confirm delivery</li>
                  <li>Have nearby activists do the same to verify two-way communication</li>
                </ol>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Security & Privacy Features</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2">🔒 End-to-End Encryption</h3>
                <p className="text-lg leading-relaxed">
                  All mesh messages are encrypted with AES-256 before transmission. Only the intended recipients can decrypt them. Even if authorities intercept mesh traffic, they cannot read the contents.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">🔒 Cryptographic Signing</h3>
                <p className="text-lg leading-relaxed">
                  Every message is digitally signed with the sender's private key, preventing message forgery or tampering. Recipients can verify that messages actually came from trusted peers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">🔒 Key Exchange Protocol</h3>
                <p className="text-lg leading-relaxed">
                  When two devices first connect, they exchange public keys using a secure protocol. Your private key never leaves your device and is stored in encrypted storage.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">🔒 Trust Levels</h3>
                <p className="text-lg leading-relaxed">
                  Peers start as "Unknown" and can be manually verified and promoted to "Trusted." This helps prevent infiltration by bad actors. Only verified peers can relay high-priority messages.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">🔒 Message Hop Limits</h3>
                <p className="text-lg leading-relaxed">
                  Messages are limited to a maximum number of hops (typically 3-5) to prevent network flooding and reduce the attack surface for network analysis.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">🔒 No Central Servers</h3>
                <p className="text-lg leading-relaxed">
                  All mesh communication happens directly between devices. There are no servers to subpoena, no logs to collect, and no metadata stored centrally.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Best Practices for Protest Use</h2>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li><strong>Activate Before the Protest:</strong> Turn on mesh networking before arriving at the protest site to establish connections early</li>
              <li><strong>Keep Bluetooth On:</strong> Bluetooth LE uses minimal battery but provides crucial connectivity when WiFi/cellular fail</li>
              <li><strong>Stay in Groups:</strong> Mesh networks work best with density. Encourage fellow activists to install LibertyGuard</li>
              <li><strong>Verify Trusted Peers:</strong> In organizing meetings, manually verify and mark trusted organizers to create a core trusted network</li>
              <li><strong>Test Before Action:</strong> Send test messages before the protest to verify connectivity and familiarize everyone with the system</li>
              <li><strong>Charge Your Device:</strong> While mesh networking is relatively battery-efficient, protests are long. Bring portable chargers</li>
              <li><strong>Use Urgent Priority Sparingly:</strong> Reserve "Urgent" priority for actual emergencies to avoid alert fatigue</li>
              <li><strong>Relay Evidence Immediately:</strong> If you capture critical evidence, relay it through the mesh immediately in case your device is seized</li>
              <li><strong>Monitor Network Health:</strong> Check the network status periodically to ensure you have active connections</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Troubleshooting</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Not Finding Any Peers?</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Ensure Bluetooth is enabled on your device</li>
                  <li>Grant location permissions (required for Bluetooth scanning on Android)</li>
                  <li>Verify other LibertyGuard users nearby have mesh networking enabled</li>
                  <li>Try moving closer to other users (within 100 meters for Bluetooth)</li>
                  <li>Check that you're not in airplane mode</li>
                  <li>Restart the app and try re-enabling mesh networking</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Messages Not Sending?</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Verify you have at least one active peer connection</li>
                  <li>Check network health status (should be "Fair" or better)</li>
                  <li>Ensure the message isn't too large (photos/videos should be compressed)</li>
                  <li>Try sending a test message first to verify connectivity</li>
                  <li>Check that mesh networking is still active (green indicator)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">High Battery Drain?</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Bluetooth LE is designed to be power-efficient, but continuous scanning can drain battery</li>
                  <li>Consider disabling WiFi Direct if you're only using Bluetooth</li>
                  <li>Reduce peer discovery frequency in settings</li>
                  <li>Close background apps that might interfere</li>
                  <li>Bring portable battery packs for extended protest actions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Peers Disconnecting Frequently?</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>This is normal in mobile environments as people move around</li>
                  <li>The mesh network automatically reconnects as peers come back in range</li>
                  <li>Strong interference (police radio jammers) may disrupt connections</li>
                  <li>Dense crowds can sometimes interfere with signals - try moving to edges</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Technical Specifications</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Bluetooth Protocol:</strong> Bluetooth Low Energy 4.0+ (BLE)</li>
              <li><strong>Encryption:</strong> AES-256 for all messages</li>
              <li><strong>Signature Algorithm:</strong> HMAC-SHA256</li>
              <li><strong>Discovery Protocol:</strong> Custom LibertyGuard service UUID</li>
              <li><strong>WiFi Direct:</strong> WiFi P2P (Android), Multipeer Connectivity (iOS)</li>
              <li><strong>LAN Discovery:</strong> UDP broadcast on port 12345</li>
              <li><strong>Maximum Message Size:</strong> 1MB per message (chunked for larger files)</li>
              <li><strong>Maximum Hop Count:</strong> 3-5 hops (configurable based on message priority)</li>
              <li><strong>Key Storage:</strong> Encrypted AsyncStorage with device keychain integration</li>
              <li><strong>Peer Timeout:</strong> 5 minutes of inactivity before peer is considered disconnected</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Can authorities detect I'm using mesh networking?</h3>
                <p className="text-lg leading-relaxed">
                  Technically yes - Bluetooth and WiFi signals can be detected. However, your traffic is fully encrypted and indistinguishable from normal Bluetooth/WiFi usage. The content of your messages cannot be read without your private keys.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">How many people do I need for an effective mesh network?</h3>
                <p className="text-lg leading-relaxed">
                  A mesh network can function with just two people, but it becomes more powerful with more participants. In a protest setting, having 10-20+ LibertyGuard users creates a robust network with good coverage and redundancy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Does mesh networking work without any internet at all?</h3>
                <p className="text-lg leading-relaxed">
                  Yes! That's the entire point. Mesh networking creates direct device-to-device connections using Bluetooth and WiFi Direct, which work completely independently of internet infrastructure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Can I use mesh networking internationally?</h3>
                <p className="text-lg leading-relaxed">
                  Yes. Bluetooth and WiFi Direct are global standards. However, be aware that some countries restrict or ban certain wireless technologies. Research local laws before using mesh networking features.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">What happens to messages when I'm offline?</h3>
                <p className="text-lg leading-relaxed">
                  Messages are queued locally on your device and will be sent as soon as you connect to mesh peers. Messages are stored encrypted until delivery is confirmed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Can I disable mesh networking?</h3>
                <p className="text-lg leading-relaxed">
                  Yes. You have full control. You can disable mesh networking entirely from the settings, or temporarily pause it. This might be necessary in situations where wireless signals could reveal your location.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Is mesh networking legal?</h3>
                <p className="text-lg leading-relaxed">
                  In most democratic countries, yes. Bluetooth and WiFi Direct are legal consumer technologies. However, some authoritarian regimes may consider mesh networking illegal or use it as pretext for arrests. Understand the legal landscape in your region.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">How is this different from apps like FireChat or Bridgefy?</h3>
                <p className="text-lg leading-relaxed">
                  LibertyGuard's mesh networking is specifically designed for activist use cases with enhanced security features: AES-256 encryption, cryptographic message signing, evidence distribution capabilities, and integration with our encrypted documentation system. We also use multiple mesh protocols (Bluetooth + WiFi Direct + LAN) for greater resilience.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Real-World Use Cases</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2">📍 Hong Kong Democracy Protests (2019-2020)</h3>
                <p className="text-lg leading-relaxed">
                  Protesters used mesh networking apps to coordinate when the government threatened internet shutdowns, share evidence of police brutality, and warn about police movements - all without centralized infrastructure that could be compromised.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">📍 Thailand Pro-Democracy Movement (2020-2021)</h3>
                <p className="text-lg leading-relaxed">
                  When authorities blocked messaging apps, activists used mesh networks to maintain communication and coordinate protest actions across Bangkok.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">📍 US Racial Justice Protests (2020)</h3>
                <p className="text-lg leading-relaxed">
                  During mass protests where cell networks were overloaded or monitored, mesh networking allowed protesters to share real-time police movement information and coordinate mutual aid responses.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">📍 Natural Disasters & Emergency Response</h3>
                <p className="text-lg leading-relaxed">
                  Beyond protests, mesh networking has proven valuable during hurricanes, earthquakes, and other disasters when traditional communications infrastructure fails.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Learn More About Mesh Networking</h2>
            <p className="text-lg leading-relaxed mb-4">
              For a deeper understanding of mesh networking technology and its applications:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <a 
                  href="https://en.wikipedia.org/wiki/Mesh_networking" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-climate-red hover:underline font-bold"
                >
                  Wikipedia: Mesh Networking
                </a> - Comprehensive overview of mesh network architecture and types
              </li>
              <li>
                <a 
                  href="https://www.bluetooth.com/bluetooth-mesh-primer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-climate-red hover:underline font-bold"
                >
                  Bluetooth Mesh Networking Primer
                </a> - Technical deep dive into Bluetooth mesh technology
              </li>
              <li>
                <a 
                  href="https://www.eff.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-climate-red hover:underline font-bold"
                >
                  Electronic Frontier Foundation
                </a> - Resources on digital rights and privacy-preserving communication
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Support & Contact</h2>
            <p className="text-lg leading-relaxed">
              If you have questions about mesh networking in LibertyGuard or encounter technical issues, contact us at:
            </p>
            <p className="text-lg mt-4">
              <strong>Email:</strong> <a href="mailto:support@libertyguard.app" className="text-climate-red hover:underline">support@libertyguard.app</a>
            </p>
            <p className="text-lg leading-relaxed mt-6">
              For security-sensitive questions, consider using encrypted email or waiting until an in-person organizing meeting to discuss.
            </p>
          </section>

          <div className="mt-16 pt-8 border-t border-climate-red text-center">
            <p className="text-sm opacity-60">
              This guide is provided for educational and activist organizing purposes. Users are responsible for understanding local laws regarding wireless communications and protest activities.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-climate-red hover:text-climate-cream transition-colors font-bold text-lg">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

