// ========================================
// TRADEMASTER - LESSON CONTENT DATABASE
// Comprehensive lesson content for all courses
// ========================================

const LESSON_CONTENT = {
    // ========================================
    // CRYPTO LESSONS
    // ========================================

    // Level 1: Crypto Foundations
    "1": {
        title: "What is Cryptocurrency?",
        duration: "10 min",
        content: `
            <h3>Understanding Cryptocurrency</h3>
            
            <p>Cryptocurrency, often shortened to "crypto," is a form of <strong>digital money</strong> that exists purely online and is secured using advanced encryption algorithms.</p>
            
            <h4>Key Characteristics</h4>
            <ul>
                <li><strong>Digital Form:</strong> Cryptocurrencies are intangible and exist only in digital form - you can't hold them in your hand like cash.</li>
                <li><strong>Decentralized:</strong> No single central authority (like a bank or government) controls them. Instead, they operate on a network of computers worldwide.</li>
                <li><strong>Encrypted:</strong> Advanced cryptographic technologies ensure secure transactions and prevent counterfeiting.</li>
                <li><strong>Peer-to-Peer:</strong> You can send cryptocurrency directly to anyone, anywhere in the world, without intermediaries.</li>
            </ul>
            
            <h4>Popular Cryptocurrencies</h4>
            <div class="info-box">
                <p><strong>Bitcoin (BTC)</strong> - The first and most well-known cryptocurrency, created in 2009</p>
                <p><strong>Ethereum (ETH)</strong> - A platform for smart contracts and decentralized applications</p>
                <p><strong>Solana (SOL)</strong> - Known for fast transactions and low fees</p>
                <p><strong>Cardano (ADA)</strong> - Focused on sustainability and academic research</p>
            </div>
            
            <h4>How is it Different from Regular Money?</h4>
            <table>
                <tr>
                    <th>Traditional Money</th>
                    <th>Cryptocurrency</th>
                </tr>
                <tr>
                    <td>Controlled by governments/banks</td>
                    <td>Decentralized network</td>
                </tr>
                <tr>
                    <td>Physical and digital forms</td>
                    <td>Digital only</td>
                </tr>
                <tr>
                    <td>Requires intermediaries</td>
                    <td>Direct peer-to-peer</td>
                </tr>
                <tr>
                    <td>Can be printed/inflated</td>
                    <td>Fixed or controlled supply</td>
                </tr>
            </table>
            
            <div class="warning-box">
                <h4>⚠️ Important to Know</h4>
                <p>Cryptocurrencies are volatile and can be risky. Never invest more than you can afford to lose, and always do your own research before buying any cryptocurrency.</p>
            </div>
            
            <h4>Key Takeaways</h4>
            <ul>
                <li>Cryptocurrency is digital money secured by encryption</li>
                <li>It operates on decentralized networks, not controlled by any single entity</li>
                <li>Bitcoin was the first cryptocurrency, but thousands now exist</li>
                <li>Crypto enables direct peer-to-peer transactions globally</li>
            </ul>
        `,
        video: {
            id: 'lesson1-video',
            type: 'youtube',
            videoId: 'rYQgy8QDEBI',
            title: 'Cryptocurrency Explained in 5 Minutes',
            description: 'A perfect introduction to cryptocurrency for absolute beginners. This video breaks down the basics in simple terms.',
            duration: '5:23'
        },
        quiz: [
            {
                question: "What makes cryptocurrency different from traditional money?",
                options: [
                    "It's controlled by banks",
                    "It's decentralized and digital-only",
                    "It can only be used online",
                    "It's printed by governments"
                ],
                correct: 1
            },
            {
                question: "What was the first cryptocurrency?",
                options: ["Ethereum", "Litecoin", "Bitcoin", "Ripple"],
                correct: 2
            }
        ]
    },

    "2": {
        title: "Understanding Blockchain",
        duration: "15 min",
        content: `
            <h3>What is Blockchain?</h3>
            
            <p>Blockchain is the <strong>foundational technology</strong> that underpins most cryptocurrencies. Think of it as a digital ledger or notebook that records transactions, but with some revolutionary differences.</p>
            
            <h4>How Blockchain Works</h4>
            
            <div class="step-box">
                <h5>Step 1: Transactions are Created</h5>
                <p>When someone sends cryptocurrency, a transaction record is created containing the sender, receiver, and amount.</p>
            </div>
            
            <div class="step-box">
                <h5>Step 2: Transactions are Grouped into Blocks</h5>
                <p>Multiple transactions are bundled together into a "block" of data. Each block contains:</p>
                <ul>
                    <li>Transaction data</li>
                    <li>A timestamp</li>
                    <li>A unique cryptographic hash (digital fingerprint)</li>
                    <li>The hash of the previous block</li>
                </ul>
            </div>
            
            <div class="step-box">
                <h5>Step 3: Blocks are Verified</h5>
                <p>Network participants (called "nodes" or "miners") verify the transactions in the block using complex mathematical problems.</p>
            </div>
            
            <div class="step-box">
                <h5>Step 4: Blocks are Added to the Chain</h5>
                <p>Once verified, the new block is cryptographically linked to the previous block, forming a "chain" of blocks.</p>
            </div>
            
            <h4>Key Features of Blockchain</h4>
            
            <div class="feature-grid">
                <div class="feature-card">
                    <h5>🔒 Immutability</h5>
                    <p>Once data is recorded, it's nearly impossible to change without detection. This creates a permanent, tamper-proof record.</p>
                </div>
                
                <div class="feature-card">
                    <h5>🌐 Decentralization</h5>
                    <p>The ledger is distributed across thousands of computers worldwide. No single entity controls it.</p>
                </div>
                
                <div class="feature-card">
                    <h5>👁️ Transparency</h5>
                    <p>All transactions are visible to network participants, creating accountability and trust.</p>
                </div>
                
                <div class="feature-card">
                    <h5>🔐 Security</h5>
                    <p>Cryptographic encryption makes blockchain extremely secure against hacking and fraud.</p>
                </div>
            </div>
            
            <h4>Real-World Analogy</h4>
            <div class="analogy-box">
                <p>Imagine a notebook that records every transaction in your town. Instead of one person keeping this notebook:</p>
                <ul>
                    <li>Everyone in town has an identical copy</li>
                    <li>When a new transaction happens, everyone updates their copy</li>
                    <li>If someone tries to cheat, everyone else's copies prove them wrong</li>
                    <li>Once written, pages can never be erased or modified</li>
                </ul>
                <p>That's essentially how blockchain works!</p>
            </div>
            
            <h4>Beyond Cryptocurrency</h4>
            <p>While blockchain powers cryptocurrencies, it has many other uses:</p>
            <ul>
                <li>Supply chain tracking</li>
                <li>Medical records</li>
                <li>Voting systems</li>
                <li>Digital identity verification</li>
                <li>Smart contracts</li>
            </ul>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Blockchain is a distributed ledger technology</li>
                    <li>Transactions are grouped into blocks and linked in a chain</li>
                    <li>It's immutable, transparent, and decentralized</li>
                    <li>Blockchain is the technology that makes cryptocurrency possible</li>
                </ul>
            </div>
        `,
        video: {
            id: 'lesson2-video',
            type: 'youtube',
            videoId: 'SSo_EIwHSd4',
            title: 'How Does a Blockchain Work? - Simply Explained',
            description: 'Learn how blockchain technology works with this easy-to-understand visual explanation. Perfect for understanding the fundamentals.',
            duration: '6:05'
        },
        quiz: [
            {
                question: "What is a blockchain?",
                options: [
                    "A type of cryptocurrency",
                    "A distributed ledger technology",
                    "A computer program",
                    "A digital wallet"
                ],
                correct: 1
            },
            {
                question: "What makes blockchain secure and tamper-proof?",
                options: [
                    "It's stored on one central server",
                    "It uses passwords",
                    "Cryptographic linking and decentralization",
                    "Government regulation"
                ],
                correct: 2
            }
        ]
    },

    "3": {
        title: "Crypto Wallets 101",
        duration: "12 min",
        content: `
            <h3>Understanding Crypto Wallets</h3>
            
            <p>A cryptocurrency wallet is a <strong>digital tool</strong> that allows you to store, send, and receive cryptocurrencies. Despite the name, wallets don't actually "store" your crypto - they store the cryptographic keys that prove ownership of your coins on the blockchain.</p>
            
            <h4>How Wallets Work</h4>
            
            <div class="concept-box">
                <h5>Public Key (Address)</h5>
                <p>Like your email address or bank account number - you can share this freely. People use it to send you cryptocurrency.</p>
                <p><strong>Example:</strong> 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
            </div>
            
            <div class="concept-box">
                <h5>Private Key</h5>
                <p>Like your password or PIN - NEVER share this! It gives complete control over your funds.</p>
                <p><strong>Example:</strong> 5Kb8kLf9zgWQnogidDA76MzPL6TsZZY36hWXMssSzNydYXYB9KF</p>
            </div>
            
            <div class="warning-box">
                <h4>🔐 Golden Rule</h4>
                <p><strong>Never share your private key or seed phrase with anyone!</strong> Anyone with access to your private key can steal all your cryptocurrency. No legitimate service will ever ask for it.</p>
            </div>
            
            <h4>Types of Wallets</h4>
            
            <div class="wallet-type">
                <h5>1. Hot Wallets (Online)</h5>
                <p><strong>Connected to the internet</strong></p>
                
                <div class="wallet-subtype">
                    <h6>📱 Mobile Wallets</h6>
                    <p>Apps on your smartphone (Trust Wallet, Coinbase Wallet)</p>
                    <p class="pros">✅ Convenient for daily use and payments</p>
                    <p class="cons">❌ Vulnerable if phone is lost or hacked</p>
                </div>
                
                <div class="wallet-subtype">
                    <h6>💻 Desktop Wallets</h6>
                    <p>Software on your computer (Exodus, Electrum)</p>
                    <p class="pros">✅ More features and control</p>
                    <p class="cons">❌ Vulnerable to malware and viruses</p>
                </div>
                
                <div class="wallet-subtype">
                    <h6>🌐 Web Wallets</h6>
                    <p>Browser-based wallets (MetaMask, MyEtherWallet)</p>
                    <p class="pros">✅ Accessible from any device</p>
                    <p class="cons">❌ Dependent on third-party security</p>
                </div>
                
                <div class="wallet-subtype">
                    <h6>🏦 Exchange Wallets</h6>
                    <p>Wallets provided by exchanges (Binance, Coinbase)</p>
                    <p class="pros">✅ Easy to trade</p>
                    <p class="cons">❌ You don't control the private keys ("Not your keys, not your coins")</p>
                </div>
            </div>
            
            <div class="wallet-type">
                <h5>2. Cold Wallets (Offline)</h5>
                <p><strong>Not connected to the internet</strong></p>
                
                <div class="wallet-subtype">
                    <h6>🔌 Hardware Wallets</h6>
                    <p>Physical devices (Ledger, Trezor)</p>
                    <p class="pros">✅ Most secure option for large amounts</p>
                    <p class="pros">✅ Protected from online hacks</p>
                    <p class="cons">❌ Costs money ($50-$200)</p>
                    <p class="cons">❌ Less convenient for frequent trading</p>
                </div>
                
                <div class="wallet-subtype">
                    <h6>📄 Paper Wallets</h6>
                    <p>Keys printed on paper</p>
                    <p class="pros">✅ Completely offline</p>
                    <p class="cons">❌ Can be lost, damaged, or stolen</p>
                    <p class="cons">❌ Difficult to use for beginners</p>
                </div>
            </div>
            
            <h4>Choosing the Right Wallet</h4>
            
            <table>
                <tr>
                    <th>If you want...</th>
                    <th>Use this wallet type</th>
                </tr>
                <tr>
                    <td>Daily transactions and convenience</td>
                    <td>Mobile or Web Wallet</td>
                </tr>
                <tr>
                    <td>Maximum security for large amounts</td>
                    <td>Hardware Wallet</td>
                </tr>
                <tr>
                    <td>Easy trading</td>
                    <td>Exchange Wallet (but move to personal wallet for storage)</td>
                </tr>
                <tr>
                    <td>DeFi and dApp interaction</td>
                    <td>Web Wallet (MetaMask)</td>
                </tr>
            </table>
            
            <h4>Wallet Security Best Practices</h4>
            <ul>
                <li>✅ Write down your seed phrase and store it safely offline</li>
                <li>✅ Use strong, unique passwords</li>
                <li>✅ Enable two-factor authentication (2FA)</li>
                <li>✅ Keep your software updated</li>
                <li>✅ Use hardware wallets for large amounts</li>
                <li>❌ Never share your private key or seed phrase</li>
                <li>❌ Don't store seed phrases digitally (no photos, no cloud)</li>
                <li>❌ Don't keep all funds on exchanges</li>
            </ul>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Wallets store your cryptographic keys, not the actual cryptocurrency</li>
                    <li>Hot wallets are convenient but less secure; cold wallets are more secure but less convenient</li>
                    <li>Never share your private key or seed phrase with anyone</li>
                    <li>Use hardware wallets for storing large amounts long-term</li>
                    <li>"Not your keys, not your coins" - control your own private keys</li>
                </ul>
            </div>
        `,
        video: {
            id: 'lesson3-video',
            type: 'youtube',
            videoId: '3uokiC1nUv4',
            title: 'Cryptocurrency Wallets Explained',
            description: 'Understand the different types of crypto wallets and how to choose the right one for you. Covers hot wallets, cold wallets, and security best practices.',
            duration: '8:42'
        },
        quiz: [
            {
                question: "What should you NEVER share with anyone?",
                options: [
                    "Your public address",
                    "Your wallet name",
                    "Your private key or seed phrase",
                    "Your transaction history"
                ],
                correct: 2
            },
            {
                question: "Which wallet type is most secure for storing large amounts?",
                options: [
                    "Exchange wallet",
                    "Mobile wallet",
                    "Hardware wallet",
                    "Web wallet"
                ],
                correct: 2
            }
        ]
    },

    "4": {
        title: "Private Keys & Security",
        duration: "15 min",
        content: `
            <h3>Understanding Private Keys and Crypto Security</h3>
            
            <p>Your private key is the <strong>most important piece</strong> of information in cryptocurrency. It's the cryptographic proof that you own your coins. Understanding how to protect it is crucial to keeping your assets safe.</p>
            
            <h4>What is a Private Key?</h4>
            
            <div class="definition-box">
                <p>A private key is a <strong>256-bit number</strong> that serves as your secret password to access and control your cryptocurrency. It's mathematically linked to your public address but cannot be derived from it.</p>
                <p><strong>Example format:</strong> E9873D79C6D87DC0FB6A5778633389F4453213303DA61F20BD67FC233AA33262</p>
            </div>
            
            <h4>Seed Phrase (Recovery Phrase)</h4>
            
            <p>Most modern wallets use a <strong>seed phrase</strong> (also called recovery phrase or mnemonic phrase) - a human-readable version of your private key.</p>
            
            <div class="example-box">
                <h5>Example 12-word seed phrase:</h5>
                <p class="seed-phrase">witch collapse practice feed shame open despair creek road again ice least</p>
                <p><small>⚠️ This is just an example - never use example seed phrases!</small></p>
            </div>
            
            <div class="info-box">
                <h5>Seed Phrase Facts:</h5>
                <ul>
                    <li>Usually 12 or 24 words from a standardized list</li>
                    <li>Can restore your entire wallet on any compatible device</li>
                    <li>Generated when you first create a wallet</li>
                    <li>Must be written down and stored securely</li>
                    <li>Order matters - words must be in exact sequence</li>
                </ul>
            </div>
            
            <h4>Common Security Threats</h4>
            
            <div class="threat-card">
                <h5>🎣 Phishing Attacks</h5>
                <p><strong>What it is:</strong> Fake websites or emails pretending to be legitimate services</p>
                <p><strong>How to protect:</strong></p>
                <ul>
                    <li>Always check URLs carefully</li>
                    <li>Bookmark official sites</li>
                    <li>Never click links in unsolicited emails</li>
                    <li>Use hardware wallets for signing transactions</li>
                </ul>
            </div>
            
            <div class="threat-card">
                <h5>🦠 Malware & Keyloggers</h5>
                <p><strong>What it is:</strong> Malicious software that steals your keys or monitors your activity</p>
                <p><strong>How to protect:</strong></p>
                <ul>
                    <li>Use reputable antivirus software</li>
                    <li>Never download suspicious files</li>
                    <li>Use hardware wallets</li>
                    <li>Keep your operating system updated</li>
                </ul>
            </div>
            
            <div class="threat-card">
                <h5>🎭 Social Engineering</h5>
                <p><strong>What it is:</strong> Scammers manipulating you into revealing your keys</p>
                <p><strong>How to protect:</strong></p>
                <ul>
                    <li>No legitimate service will ever ask for your private key</li>
                    <li>Be skeptical of "too good to be true" offers</li>
                    <li>Don't trust unsolicited messages</li>
                    <li>Verify information through official channels</li>
                </ul>
            </div>
            
            <div class="threat-card">
                <h5>📱 SIM Swapping</h5>
                <p><strong>What it is:</strong> Attackers transfer your phone number to their device</p>
                <p><strong>How to protect:</strong></p>
                <ul>
                    <li>Use authenticator apps instead of SMS 2FA</li>
                    <li>Set up a PIN with your mobile carrier</li>
                    <li>Don't use phone number for account recovery</li>
                </ul>
            </div>
            
            <h4>Best Security Practices</h4>
            
            <div class="security-checklist">
                <h5>✅ Essential Security Measures</h5>
                <ul>
                    <li><strong>Write down your seed phrase</strong> - Use pen and paper, never digital</li>
                    <li><strong>Store it safely</strong> - Fireproof safe, safety deposit box, or metal backup</li>
                    <li><strong>Make multiple copies</strong> - Store in different secure locations</li>
                    <li><strong>Never share it</strong> - Not even with family unless necessary</li>
                    <li><strong>Use hardware wallets</strong> - For amounts you can't afford to lose</li>
                    <li><strong>Enable 2FA</strong> - Use authenticator apps (Google Authenticator, Authy)</li>
                    <li><strong>Use strong passwords</strong> - Unique for each service, use a password manager</li>
                    <li><strong>Verify addresses</strong> - Always double-check before sending</li>
                    <li><strong>Start small</strong> - Test with small amounts first</li>
                    <li><strong>Keep software updated</strong> - Wallet apps and operating systems</li>
                </ul>
            </div>
            
            <h4>What to Do If Compromised</h4>
            
            <div class="emergency-box">
                <h5>🚨 If you suspect your wallet is compromised:</h5>
                <ol>
                    <li><strong>Act immediately</strong> - Time is critical</li>
                    <li><strong>Create a new wallet</strong> - On a clean device</li>
                    <li><strong>Transfer funds</strong> - Move all assets to the new wallet</li>
                    <li><strong>Never use the old wallet again</strong> - The private key is permanently compromised</li>
                    <li><strong>Scan for malware</strong> - Clean your devices</li>
                    <li><strong>Review all connected apps</strong> - Revoke permissions</li>
                </ol>
            </div>
            
            <h4>Advanced Security: Multi-Signature Wallets</h4>
            
            <div class="advanced-box">
                <p>Multi-signature (multisig) wallets require multiple private keys to authorize a transaction. For example, a 2-of-3 multisig requires 2 out of 3 keys to spend funds.</p>
                <p><strong>Benefits:</strong></p>
                <ul>
                    <li>No single point of failure</li>
                    <li>Shared control for organizations</li>
                    <li>Extra security layer</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Your private key/seed phrase is the ONLY way to access your crypto</li>
                    <li>Never share your private key or seed phrase with anyone</li>
                    <li>Store your seed phrase offline in multiple secure locations</li>
                    <li>Use hardware wallets for significant amounts</li>
                    <li>Enable 2FA and use strong, unique passwords</li>
                    <li>Be vigilant against phishing and social engineering</li>
                    <li>If compromised, immediately move funds to a new wallet</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is the safest way to store your seed phrase?",
                options: [
                    "Take a photo and save it to cloud storage",
                    "Email it to yourself",
                    "Write it on paper and store in a safe",
                    "Save it in a password-protected document"
                ],
                correct: 2
            },
            {
                question: "What should you do if you suspect your wallet is compromised?",
                options: [
                    "Wait and see what happens",
                    "Immediately transfer funds to a new wallet",
                    "Change your password",
                    "Contact customer support"
                ],
                correct: 1
            }
        ]
    },

    "5": {
        title: "How to Buy Crypto",
        duration: "20 min",
        content: `
            <h3>Your First Cryptocurrency Purchase</h3>
            
            <p>Ready to buy your first cryptocurrency? This guide will walk you through the entire process, from choosing an exchange to making your first purchase safely.</p>
            
            <h4>Step 1: Choose a Cryptocurrency Exchange</h4>
            
            <p>A cryptocurrency exchange is a platform where you can buy, sell, and trade cryptocurrencies using traditional currency (fiat) or other cryptocurrencies.</p>
            
            <div class="exchange-comparison">
                <h5>Popular Exchanges for Beginners</h5>
                
                <div class="exchange-card">
                    <h6>🟦 Coinbase</h6>
                    <p class="pros">✅ Very beginner-friendly interface</p>
                    <p class="pros">✅ High security standards</p>
                    <p class="pros">✅ Available in 100+ countries</p>
                    <p class="cons">❌ Higher fees (1.49% - 3.99%)</p>
                    <p class="cons">❌ Limited advanced features</p>
                </div>
                
                <div class="exchange-card">
                    <h6>🟨 Binance</h6>
                    <p class="pros">✅ Lowest fees (0.1% - 0.5%)</p>
                    <p class="pros">✅ Largest selection of cryptocurrencies</p>
                    <p class="pros">✅ Advanced trading features</p>
                    <p class="cons">❌ Can be overwhelming for beginners</p>
                    <p class="cons">❌ Regulatory issues in some countries</p>
                </div>
                
                <div class="exchange-card">
                    <h6>🟪 Kraken</h6>
                    <p class="pros">✅ Good security reputation</p>
                    <p class="pros">✅ Reasonable fees</p>
                    <p class="pros">✅ Good customer support</p>
                    <p class="cons">❌ Interface can be complex</p>
                </div>
                
                <div class="exchange-card">
                    <h6>🟩 Gemini</h6>
                    <p class="pros">✅ Regulated and secure</p>
                    <p class="pros">✅ User-friendly</p>
                    <p class="pros">✅ Good for US users</p>
                    <p class="cons">❌ Limited cryptocurrency selection</p>
                    <p class="cons">❌ Higher fees</p>
                </div>
            </div>
            
            <h4>Step 2: Create and Verify Your Account</h4>
            
            <div class="step-guide">
                <div class="step">
                    <h5>1. Sign Up</h5>
                    <ul>
                        <li>Visit the exchange's official website</li>
                        <li>Click "Sign Up" or "Register"</li>
                        <li>Provide email address and create strong password</li>
                        <li>Verify your email</li>
                    </ul>
                </div>
                
                <div class="step">
                    <h5>2. Enable Two-Factor Authentication (2FA)</h5>
                    <ul>
                        <li>Download an authenticator app (Google Authenticator, Authy)</li>
                        <li>Scan the QR code provided by the exchange</li>
                        <li>Save backup codes in a secure location</li>
                        <li>Test 2FA before proceeding</li>
                    </ul>
                </div>
                
                <div class="step">
                    <h5>3. Complete KYC (Know Your Customer)</h5>
                    <p>Most exchanges require identity verification:</p>
                    <ul>
                        <li>Full legal name</li>
                        <li>Date of birth</li>
                        <li>Address</li>
                        <li>Government-issued ID (passport, driver's license)</li>
                        <li>Sometimes a selfie for verification</li>
                    </ul>
                    <p><small>⏱️ Verification can take minutes to several days</small></p>
                </div>
            </div>
            
            <h4>Step 3: Add a Payment Method</h4>
            
            <div class="payment-methods">
                <div class="method-card">
                    <h5>💳 Debit/Credit Card</h5>
                    <p class="pros">✅ Instant purchases</p>
                    <p class="pros">✅ Easy to use</p>
                    <p class="cons">❌ Higher fees (3-4%)</p>
                    <p class="cons">❌ Lower purchase limits</p>
                    <p><strong>Best for:</strong> Small, quick purchases</p>
                </div>
                
                <div class="method-card">
                    <h5>🏦 Bank Transfer (ACH/SEPA)</h5>
                    <p class="pros">✅ Lower fees (0-1.5%)</p>
                    <p class="pros">✅ Higher purchase limits</p>
                    <p class="cons">❌ Takes 1-5 business days</p>
                    <p class="cons">❌ Requires bank account linking</p>
                    <p><strong>Best for:</strong> Larger purchases, regular investing</p>
                </div>
                
                <div class="method-card">
                    <h5>💵 Wire Transfer</h5>
                    <p class="pros">✅ Very high limits</p>
                    <p class="pros">✅ Relatively fast (1-2 days)</p>
                    <p class="cons">❌ Wire fees ($15-30)</p>
                    <p class="cons">❌ More complex process</p>
                    <p><strong>Best for:</strong> Very large purchases</p>
                </div>
            </div>
            
            <h4>Step 4: Make Your First Purchase</h4>
            
            <div class="purchase-guide">
                <h5>Buying Bitcoin (Example)</h5>
                
                <ol>
                    <li>
                        <strong>Navigate to Buy/Trade Section</strong>
                        <p>Look for "Buy Crypto," "Trade," or "Markets"</p>
                    </li>
                    
                    <li>
                        <strong>Select Cryptocurrency</strong>
                        <p>Choose Bitcoin (BTC) or your desired cryptocurrency</p>
                    </li>
                    
                    <li>
                        <strong>Choose Order Type</strong>
                        <div class="order-types">
                            <p><strong>Market Order:</strong> Buy immediately at current price (recommended for beginners)</p>
                            <p><strong>Limit Order:</strong> Set your desired price and wait for it to be reached</p>
                        </div>
                    </li>
                    
                    <li>
                        <strong>Enter Amount</strong>
                        <p>Specify how much you want to buy (in USD or BTC)</p>
                        <p><small>💡 Tip: You can buy fractions of Bitcoin! You don't need to buy a whole coin.</small></p>
                    </li>
                    
                    <li>
                        <strong>Review and Confirm</strong>
                        <ul>
                            <li>Check the amount</li>
                            <li>Review fees</li>
                            <li>Verify total cost</li>
                            <li>Confirm purchase</li>
                        </ul>
                    </li>
                    
                    <li>
                        <strong>Receive Confirmation</strong>
                        <p>You'll receive an email and see the crypto in your exchange wallet</p>
                    </li>
                </ol>
            </div>
            
            <h4>Understanding Fees</h4>
            
            <table>
                <tr>
                    <th>Fee Type</th>
                    <th>Description</th>
                    <th>Typical Amount</th>
                </tr>
                <tr>
                    <td>Trading Fee</td>
                    <td>Charged for buying/selling</td>
                    <td>0.1% - 3.99%</td>
                </tr>
                <tr>
                    <td>Deposit Fee</td>
                    <td>For adding funds</td>
                    <td>Free - 3%</td>
                </tr>
                <tr>
                    <td>Withdrawal Fee</td>
                    <td>For moving crypto off exchange</td>
                    <td>Varies by crypto</td>
                </tr>
                <tr>
                    <td>Network Fee (Gas)</td>
                    <td>Blockchain transaction cost</td>
                    <td>Varies by network</td>
                </tr>
                <tr>
                    <td>Spread</td>
                    <td>Difference between buy/sell price</td>
                    <td>0.5% - 2%</td>
                </tr>
            </table>
            
            <h4>Step 5: Secure Your Investment</h4>
            
            <div class="security-steps">
                <h5>After Purchasing:</h5>
                
                <div class="security-option">
                    <h6>Option 1: Keep on Exchange (Short-term)</h6>
                    <p class="pros">✅ Easy to trade</p>
                    <p class="pros">✅ No transfer fees</p>
                    <p class="cons">❌ Exchange controls your keys</p>
                    <p class="cons">❌ Vulnerable to exchange hacks</p>
                    <p><strong>Recommended for:</strong> Active trading, small amounts</p>
                </div>
                
                <div class="security-option">
                    <h6>Option 2: Transfer to Personal Wallet (Long-term)</h6>
                    <p class="pros">✅ You control your keys</p>
                    <p class="pros">✅ Maximum security</p>
                    <p class="cons">❌ Withdrawal fees</p>
                    <p class="cons">❌ More responsibility</p>
                    <p><strong>Recommended for:</strong> Long-term holding, large amounts</p>
                </div>
            </div>
            
            <div class="warning-box">
                <h4>⚠️ Important Reminders</h4>
                <ul>
                    <li><strong>Start small:</strong> Only invest what you can afford to lose</li>
                    <li><strong>Do your research:</strong> Understand what you're buying</li>
                    <li><strong>Don't FOMO:</strong> Don't buy just because prices are rising</li>
                    <li><strong>Beware of scams:</strong> If it sounds too good to be true, it is</li>
                    <li><strong>Keep records:</strong> Save transaction history for taxes</li>
                    <li><strong>Dollar-cost average:</strong> Consider buying regularly instead of all at once</li>
                </ul>
            </div>
            
            <h4>Tax Considerations</h4>
            
            <div class="tax-info">
                <p>In most countries, cryptocurrency is treated as property for tax purposes:</p>
                <ul>
                    <li>Buying crypto with fiat is usually not taxable</li>
                    <li>Selling crypto for profit is a taxable event (capital gains)</li>
                    <li>Trading one crypto for another is taxable</li>
                    <li>Using crypto to buy goods/services is taxable</li>
                </ul>
                <p><strong>Keep detailed records of all transactions!</strong></p>
                <p><small>💡 Consider using crypto tax software like CoinTracker or Koinly</small></p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Choose a reputable exchange based on your needs and location</li>
                    <li>Complete KYC verification and enable 2FA for security</li>
                    <li>Bank transfers have lower fees than card purchases</li>
                    <li>You can buy fractions of cryptocurrencies</li>
                    <li>Consider transferring to a personal wallet for long-term storage</li>
                    <li>Keep records for tax purposes</li>
                    <li>Only invest what you can afford to lose</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "Which payment method typically has the lowest fees?",
                options: [
                    "Credit card",
                    "Debit card",
                    "Bank transfer (ACH/SEPA)",
                    "Wire transfer"
                ],
                correct: 2
            },
            {
                question: "What is the safest place to store cryptocurrency long-term?",
                options: [
                    "On the exchange where you bought it",
                    "In a personal wallet where you control the keys",
                    "In your email",
                    "On a piece of paper"
                ],
                correct: 1
            },
            {
                question: "Do you need to buy a whole Bitcoin?",
                options: [
                    "Yes, you must buy at least 1 BTC",
                    "No, you can buy fractions of Bitcoin",
                    "Only if you're in the US",
                    "Yes, unless you use a special exchange"
                ],
                correct: 1
            }
        ]
    },


    // Level 2: Trading Fundamentals
    "6": {
        title: "Reading Crypto Charts",
        duration: "25 min",
        content: `
            <h3>Understanding Cryptocurrency Charts</h3>
            
            <p>Reading charts is a fundamental skill for any crypto trader. Charts visualize price movements over time and help identify patterns, trends, and potential trading opportunities.</p>
            
            <h4>Types of Charts</h4>
            
            <div class="chart-type">
                <h5>📈 Line Chart</h5>
                <p>The simplest chart type, showing closing prices connected by a line.</p>
                <p class="pros">✅ Easy to read and understand</p>
                <p class="pros">✅ Good for viewing long-term trends</p>
                <p class="cons">❌ Lacks detailed price information</p>
            </div>
            
            <div class="chart-type">
                <h5>📊 Candlestick Chart</h5>
                <p>The most popular chart type in crypto trading, showing open, high, low, and close prices.</p>
                <p class="pros">✅ Rich information in visual format</p>
                <p class="pros">✅ Shows market sentiment</p>
                <p class="pros">✅ Reveals patterns and trends</p>
            </div>
            
            <h4>Understanding Candlesticks</h4>
            
            <div class="info-box">
                <h5>Anatomy of a Candlestick</h5>
                <ul>
                    <li><strong>Body:</strong> Range between opening and closing prices</li>
                    <li><strong>Wicks (Shadows):</strong> Thin lines showing highest and lowest prices</li>
                    <li><strong>Green/White:</strong> Price closed higher than it opened (bullish)</li>
                    <li><strong>Red/Black:</strong> Price closed lower than it opened (bearish)</li>
                </ul>
            </div>
            
            <h4>Common Candlestick Patterns</h4>
            
            <div class="pattern-card">
                <h5>🔨 Hammer (Bullish Reversal)</h5>
                <p>Small body at top, long lower wick. Appears at bottom of downtrend.</p>
                <p><strong>Signal:</strong> Buyers stepping in, potential reversal upward</p>
            </div>
            
            <div class="pattern-card">
                <h5>💫 Doji (Indecision)</h5>
                <p>Open and close at nearly same price, forming a cross shape.</p>
                <p><strong>Signal:</strong> Market indecision, potential trend change</p>
            </div>
            
            <div class="pattern-card">
                <h5>🌟 Morning Star (Bullish Reversal)</h5>
                <p>Three-candle pattern: bearish, small-bodied, then bullish candle.</p>
                <p><strong>Signal:</strong> Strong reversal from downtrend to uptrend</p>
            </div>
            
            <div class="pattern-card">
                <h5>🌙 Evening Star (Bearish Reversal)</h5>
                <p>Three-candle pattern: bullish, small-bodied, then bearish candle.</p>
                <p><strong>Signal:</strong> Strong reversal from uptrend to downtrend</p>
            </div>
            
            <h4>Support and Resistance</h4>
            
            <div class="concept-box">
                <h5>Support Level</h5>
                <p>A price level where buying pressure prevents further decline - acts as a "floor"</p>
                <p><strong>How to identify:</strong> Look for price levels where the asset repeatedly bounces upward</p>
            </div>
            
            <div class="concept-box">
                <h5>Resistance Level</h5>
                <p>A price level where selling pressure prevents further rise - acts as a "ceiling"</p>
                <p><strong>How to identify:</strong> Look for price levels where the asset repeatedly fails to break through</p>
            </div>
            
            <h4>Trend Lines</h4>
            
            <table>
                <tr>
                    <th>Trend Type</th>
                    <th>Description</th>
                    <th>How to Draw</th>
                </tr>
                <tr>
                    <td>Uptrend</td>
                    <td>Series of higher highs and higher lows</td>
                    <td>Connect the lows with an ascending line</td>
                </tr>
                <tr>
                    <td>Downtrend</td>
                    <td>Series of lower highs and lower lows</td>
                    <td>Connect the highs with a descending line</td>
                </tr>
                <tr>
                    <td>Sideways</td>
                    <td>Price moves within a range</td>
                    <td>Draw horizontal lines at support and resistance</td>
                </tr>
            </table>
            
            <h4>Volume Analysis</h4>
            
            <div class="info-box">
                <p><strong>Volume</strong> shows how much of an asset was traded during a specific period.</p>
                <ul>
                    <li><strong>High volume + price increase:</strong> Strong bullish signal</li>
                    <li><strong>High volume + price decrease:</strong> Strong bearish signal</li>
                    <li><strong>Low volume:</strong> Weak conviction, trend may not continue</li>
                    <li><strong>Volume spike:</strong> Potential trend reversal or continuation</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Candlestick charts provide the most information for traders</li>
                    <li>Patterns can signal potential reversals or continuations</li>
                    <li>Support and resistance levels are crucial for entry/exit points</li>
                    <li>Volume confirms the strength of price movements</li>
                    <li>Always use multiple indicators together, not in isolation</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What does a green/white candlestick indicate?",
                options: [
                    "Price closed lower than it opened",
                    "Price closed higher than it opened",
                    "Price didn't change",
                    "High trading volume"
                ],
                correct: 1
            },
            {
                question: "What is a support level?",
                options: [
                    "A price ceiling where selling pressure is strong",
                    "A price floor where buying pressure prevents further decline",
                    "The highest price ever reached",
                    "The average price over time"
                ],
                correct: 1
            }
        ]
    },

    "7": {
        title: "Market Cap & Tokenomics",
        duration: "20 min",
        content: `
            <h3>Understanding Market Capitalization and Tokenomics</h3>
            
            <p>Before investing in any cryptocurrency, it's crucial to understand its market cap and tokenomics - these factors determine the project's value and potential.</p>
            
            <h4>Market Capitalization (Market Cap)</h4>
            
            <div class="definition-box">
                <p><strong>Market Cap = Current Price × Circulating Supply</strong></p>
                <p>Market cap represents the total value of all coins currently in circulation.</p>
            </div>
            
            <h4>Market Cap Categories</h4>
            
            <table>
                <tr>
                    <th>Category</th>
                    <th>Market Cap</th>
                    <th>Characteristics</th>
                    <th>Risk Level</th>
                </tr>
                <tr>
                    <td>Large Cap</td>
                    <td>$10B+</td>
                    <td>Established, stable, lower growth potential</td>
                    <td>Lower</td>
                </tr>
                <tr>
                    <td>Mid Cap</td>
                    <td>$1B - $10B</td>
                    <td>Growing projects, moderate volatility</td>
                    <td>Medium</td>
                </tr>
                <tr>
                    <td>Small Cap</td>
                    <td>$100M - $1B</td>
                    <td>Higher growth potential, more volatile</td>
                    <td>Higher</td>
                </tr>
                <tr>
                    <td>Micro Cap</td>
                    <td>< $100M</td>
                    <td>Very high risk/reward, extremely volatile</td>
                    <td>Very High</td>
                </tr>
            </table>
            
            <div class="warning-box">
                <h4>⚠️ Important Note</h4>
                <p>Market cap is more important than price when evaluating a cryptocurrency. A $1 coin with 1 billion supply has the same market cap as a $1,000 coin with 1 million supply.</p>
            </div>
            
            <h4>Understanding Tokenomics</h4>
            
            <p>Tokenomics refers to the economic model of a cryptocurrency - how it's created, distributed, and used.</p>
            
            <h5>Key Tokenomics Factors</h5>
            
            <div class="tokenomics-factor">
                <h6>1. Total Supply</h6>
                <p>The maximum number of tokens that will ever exist.</p>
                <ul>
                    <li><strong>Bitcoin:</strong> 21 million (fixed supply)</li>
                    <li><strong>Ethereum:</strong> No maximum (inflationary)</li>
                    <li><strong>Cardano:</strong> 45 billion (fixed supply)</li>
                </ul>
            </div>
            
            <div class="tokenomics-factor">
                <h6>2. Circulating Supply</h6>
                <p>The number of tokens currently available and trading in the market.</p>
                <p><strong>Why it matters:</strong> Used to calculate market cap</p>
            </div>
            
            <div class="tokenomics-factor">
                <h6>3. Token Distribution</h6>
                <p>How tokens are allocated among different parties:</p>
                <ul>
                    <li><strong>Public Sale:</strong> Sold to investors</li>
                    <li><strong>Team/Founders:</strong> Reserved for development team</li>
                    <li><strong>Advisors:</strong> For project advisors</li>
                    <li><strong>Treasury:</strong> For future development</li>
                    <li><strong>Community/Rewards:</strong> For ecosystem growth</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <h4>🚩 Red Flags in Token Distribution</h4>
                <ul>
                    <li>Team holds more than 20-30% of supply</li>
                    <li>No vesting period for team tokens</li>
                    <li>Unclear or hidden allocation</li>
                    <li>Very small public sale percentage</li>
                </ul>
            </div>
            
            <div class="tokenomics-factor">
                <h6>4. Vesting Schedule</h6>
                <p>Time period before team/investor tokens can be sold.</p>
                <p class="pros">✅ <strong>Good:</strong> Long vesting (2-4 years) shows commitment</p>
                <p class="cons">❌ <strong>Bad:</strong> No vesting allows immediate selling</p>
            </div>
            
            <div class="tokenomics-factor">
                <h6>5. Inflation/Deflation</h6>
                <ul>
                    <li><strong>Inflationary:</strong> New tokens created over time (e.g., Ethereum)</li>
                    <li><strong>Deflationary:</strong> Tokens burned/removed from supply (e.g., BNB)</li>
                    <li><strong>Fixed:</strong> No new tokens created (e.g., Bitcoin)</li>
                </ul>
            </div>
            
            <h4>Token Utility</h4>
            
            <div class="utility-card">
                <h5>💰 Payment Token</h5>
                <p>Used for transactions and payments (Bitcoin, Litecoin)</p>
            </div>
            
            <div class="utility-card">
                <h5>🔧 Utility Token</h5>
                <p>Provides access to platform services (BNB, LINK)</p>
            </div>
            
            <div class="utility-card">
                <h5>🏛️ Governance Token</h5>
                <p>Allows voting on protocol decisions (UNI, AAVE)</p>
            </div>
            
            <div class="utility-card">
                <h5>🪙 Security Token</h5>
                <p>Represents ownership or dividends (rare in crypto)</p>
            </div>
            
            <h4>Evaluating a Project</h4>
            
            <div class="checklist">
                <h5>✅ Research Checklist</h5>
                <ul>
                    <li>What problem does it solve?</li>
                    <li>Is there real demand for this solution?</li>
                    <li>Who are the competitors?</li>
                    <li>What's the token's utility?</li>
                    <li>Is the supply inflationary or deflationary?</li>
                    <li>How are tokens distributed?</li>
                    <li>What's the vesting schedule?</li>
                    <li>Who's on the team?</li>
                    <li>Are there partnerships?</li>
                    <li>Is the code audited?</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Market cap is more important than price for evaluating value</li>
                    <li>Tokenomics determines long-term sustainability</li>
                    <li>Fair token distribution is crucial for project success</li>
                    <li>Understand token utility before investing</li>
                    <li>Always research thoroughly (DYOR - Do Your Own Research)</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "How is market cap calculated?",
                options: [
                    "Total supply × Current price",
                    "Circulating supply × Current price",
                    "Total supply ÷ Current price",
                    "Volume × Current price"
                ],
                correct: 1
            },
            {
                question: "What is a red flag in token distribution?",
                options: [
                    "Team holds 5% of supply",
                    "4-year vesting period",
                    "Team holds 50% with no vesting",
                    "Public sale of 40%"
                ],
                correct: 2
            }
        ]
    },

    "8": {
        title: "Risk Management Basics",
        duration: "18 min",
        content: `
            <h3>Mastering Risk Management in Crypto Trading</h3>
            
            <p>Risk management is the most important skill in trading. It's not about avoiding risk entirely, but about controlling it to protect your capital and ensure long-term success.</p>
            
            <h4>The Golden Rule</h4>
            
            <div class="warning-box">
                <h4>⚠️ Never Risk More Than You Can Afford to Lose</h4>
                <p>Only invest money that won't affect your daily life if lost. Crypto is highly volatile and unpredictable.</p>
            </div>
            
            <h4>Position Sizing</h4>
            
            <div class="definition-box">
                <p><strong>Position sizing</strong> determines how much capital to allocate to each trade.</p>
                <p><strong>The 1-2% Rule:</strong> Never risk more than 1-2% of your total portfolio on a single trade.</p>
            </div>
            
            <div class="example-box">
                <h5>Example:</h5>
                <p>Portfolio: $10,000</p>
                <p>Maximum risk per trade (2%): $200</p>
                <p>If your stop-loss is 10% below entry, your position size should be $2,000</p>
                <p>Calculation: $200 (max risk) ÷ 0.10 (10% stop) = $2,000</p>
            </div>
            
            <h4>Stop-Loss Orders</h4>
            
            <div class="info-box">
                <p>A <strong>stop-loss</strong> automatically sells your position when price reaches a predetermined level, limiting your loss.</p>
            </div>
            
            <h5>Types of Stop-Losses:</h5>
            
            <div class="stop-type">
                <h6>📍 Fixed Percentage Stop</h6>
                <p>Set at a fixed percentage below entry (e.g., 5%, 10%)</p>
                <p class="pros">✅ Simple and consistent</p>
                <p class="cons">❌ Doesn't account for volatility</p>
            </div>
            
            <div class="stop-type">
                <h6>📊 Technical Stop</h6>
                <p>Placed below support levels or key technical indicators</p>
                <p class="pros">✅ Based on market structure</p>
                <p class="pros">✅ More logical placement</p>
            </div>
            
            <div class="stop-type">
                <h6>🔄 Trailing Stop</h6>
                <p>Moves up with price, locking in profits</p>
                <p class="pros">✅ Protects profits automatically</p>
                <p class="pros">✅ Lets winners run</p>
            </div>
            
            <h4>Risk-Reward Ratio</h4>
            
            <div class="concept-box">
                <p><strong>Risk-Reward Ratio</strong> compares potential profit to potential loss.</p>
                <p><strong>Minimum recommended:</strong> 1:2 (risk $1 to make $2)</p>
                <p><strong>Professional target:</strong> 1:3 or better</p>
            </div>
            
            <table>
                <tr>
                    <th>Win Rate</th>
                    <th>Minimum R:R Needed</th>
                    <th>To Break Even</th>
                </tr>
                <tr>
                    <td>30%</td>
                    <td>1:2.3</td>
                    <td>Still profitable</td>
                </tr>
                <tr>
                    <td>40%</td>
                    <td>1:1.5</td>
                    <td>Profitable</td>
                </tr>
                <tr>
                    <td>50%</td>
                    <td>1:1</td>
                    <td>Break even</td>
                </tr>
            </table>
            
            <h4>Diversification</h4>
            
            <div class="info-box">
                <p>Don't put all your eggs in one basket. Spread risk across:</p>
                <ul>
                    <li>Multiple cryptocurrencies</li>
                    <li>Different market caps (large, mid, small)</li>
                    <li>Various sectors (DeFi, Layer 1, Gaming, etc.)</li>
                    <li>Different asset classes (crypto, stocks, bonds)</li>
                </ul>
            </div>
            
            <h4>Common Risk Management Mistakes</h4>
            
            <div class="warning-box">
                <h5>❌ Mistakes to Avoid:</h5>
                <ul>
                    <li><strong>Revenge trading:</strong> Trying to recover losses immediately</li>
                    <li><strong>Overleveraging:</strong> Using too much borrowed money</li>
                    <li><strong>No stop-loss:</strong> Hoping losses will reverse</li>
                    <li><strong>Moving stop-loss:</strong> Widening it to avoid being stopped out</li>
                    <li><strong>FOMO trading:</strong> Entering without a plan</li>
                    <li><strong>Ignoring fees:</strong> Not accounting for trading costs</li>
                </ul>
            </div>
            
            <h4>The Trading Journal</h4>
            
            <div class="info-box">
                <p>Keep a detailed record of every trade:</p>
                <ul>
                    <li>Entry and exit prices</li>
                    <li>Position size</li>
                    <li>Reason for entry</li>
                    <li>Stop-loss and take-profit levels</li>
                    <li>Outcome and lessons learned</li>
                    <li>Emotional state</li>
                </ul>
                <p><strong>Why?</strong> Identify patterns, improve strategy, and learn from mistakes.</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Risk management is more important than finding winning trades</li>
                    <li>Never risk more than 1-2% per trade</li>
                    <li>Always use stop-losses to limit downside</li>
                    <li>Aim for minimum 1:2 risk-reward ratio</li>
                    <li>Diversify to spread risk</li>
                    <li>Keep a trading journal to improve</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is the recommended maximum risk per trade?",
                options: ["5-10% of portfolio", "1-2% of portfolio", "10-20% of portfolio", "50% of portfolio"],
                correct: 1
            },
            {
                question: "What is a good minimum risk-reward ratio?",
                options: ["1:1", "1:2", "2:1", "1:0.5"],
                correct: 1
            }
        ]
    },

    "9": {
        title: "Portfolio Diversification",
        duration: "15 min",
        content: `
            <h3>Building a Diversified Crypto Portfolio</h3>
            
            <p>Diversification reduces risk by spreading investments across different assets. In crypto, this strategy is crucial due to high volatility.</p>
            
            <h4>Why Diversify?</h4>
            
            <div class="info-box">
                <ul>
                    <li><strong>Reduce risk:</strong> If one asset crashes, others may hold or rise</li>
                    <li><strong>Smooth returns:</strong> Less dramatic portfolio swings</li>
                    <li><strong>Capture opportunities:</strong> Exposure to multiple growth sectors</li>
                    <li><strong>Sleep better:</strong> Less stress from single-asset risk</li>
                </ul>
            </div>
            
            <h4>Portfolio Allocation Strategies</h4>
            
            <div class="strategy-card">
                <h5>🛡️ Conservative Portfolio (Lower Risk)</h5>
                <ul>
                    <li>70% Large-cap (BTC, ETH)</li>
                    <li>20% Mid-cap (SOL, AVAX, MATIC)</li>
                    <li>10% Small-cap (emerging projects)</li>
                </ul>
                <p><strong>Best for:</strong> Risk-averse investors, beginners</p>
            </div>
            
            <div class="strategy-card">
                <h5>⚖️ Balanced Portfolio (Moderate Risk)</h5>
                <ul>
                    <li>50% Large-cap</li>
                    <li>30% Mid-cap</li>
                    <li>20% Small-cap</li>
                </ul>
                <p><strong>Best for:</strong> Most investors seeking growth with manageable risk</p>
            </div>
            
            <div class="strategy-card">
                <h5>🚀 Aggressive Portfolio (Higher Risk)</h5>
                <ul>
                    <li>30% Large-cap</li>
                    <li>30% Mid-cap</li>
                    <li>40% Small-cap/Micro-cap</li>
                </ul>
                <p><strong>Best for:</strong> Experienced traders, high risk tolerance</p>
            </div>
            
            <h4>Diversification by Sector</h4>
            
            <table>
                <tr>
                    <th>Sector</th>
                    <th>Examples</th>
                    <th>Purpose</th>
                </tr>
                <tr>
                    <td>Layer 1 Blockchains</td>
                    <td>ETH, SOL, AVAX, ADA</td>
                    <td>Foundation protocols</td>
                </tr>
                <tr>
                    <td>DeFi</td>
                    <td>UNI, AAVE, COMP</td>
                    <td>Decentralized finance</td>
                </tr>
                <tr>
                    <td>Layer 2</td>
                    <td>MATIC, ARB, OP</td>
                    <td>Scaling solutions</td>
                </tr>
                <tr>
                    <td>Gaming/Metaverse</td>
                    <td>AXS, SAND, MANA</td>
                    <td>Virtual worlds</td>
                </tr>
                <tr>
                    <td>Oracles</td>
                    <td>LINK, BAND</td>
                    <td>Data providers</td>
                </tr>
                <tr>
                    <td>Storage</td>
                    <td>FIL, AR</td>
                    <td>Decentralized storage</td>
                </tr>
            </table>
            
            <h4>Rebalancing Your Portfolio</h4>
            
            <div class="concept-box">
                <p><strong>Rebalancing</strong> means adjusting your portfolio back to target allocations.</p>
                <p><strong>When to rebalance:</strong></p>
                <ul>
                    <li>Quarterly or semi-annually</li>
                    <li>When allocation drifts 5-10% from target</li>
                    <li>After major market movements</li>
                </ul>
            </div>
            
            <div class="example-box">
                <h5>Rebalancing Example:</h5>
                <p><strong>Target:</strong> 60% BTC, 40% ETH</p>
                <p><strong>After 3 months:</strong> BTC grew to 70%, ETH is 30%</p>
                <p><strong>Action:</strong> Sell some BTC, buy ETH to restore 60/40 balance</p>
                <p><strong>Benefit:</strong> Take profits from winners, buy dips in others</p>
            </div>
            
            <h4>Dollar-Cost Averaging (DCA)</h4>
            
            <div class="info-box">
                <p><strong>DCA Strategy:</strong> Invest a fixed amount regularly regardless of price</p>
                <p><strong>Example:</strong> Buy $100 of crypto every week</p>
                <p class="pros">✅ Reduces timing risk</p>
                <p class="pros">✅ Averages out purchase price</p>
                <p class="pros">✅ Removes emotion from investing</p>
                <p class="pros">✅ Builds discipline</p>
            </div>
            
            <h4>Common Diversification Mistakes</h4>
            
            <div class="warning-box">
                <h5>❌ Avoid These Mistakes:</h5>
                <ul>
                    <li><strong>Over-diversification:</strong> Too many coins (>20) is hard to manage</li>
                    <li><strong>False diversification:</strong> Buying similar projects (5 Layer 1s)</li>
                    <li><strong>Chasing pumps:</strong> Buying whatever's up today</li>
                    <li><strong>Ignoring correlation:</strong> Many cryptos move together</li>
                    <li><strong>No research:</strong> Diversifying into unknown projects</li>
                </ul>
            </div>
            
            <h4>Sample Beginner Portfolio</h4>
            
            <div class="portfolio-example">
                <h5>$1,000 Balanced Portfolio</h5>
                <ul>
                    <li>$400 (40%) - Bitcoin (BTC)</li>
                    <li>$300 (30%) - Ethereum (ETH)</li>
                    <li>$150 (15%) - Solana (SOL)</li>
                    <li>$100 (10%) - Polygon (MATIC)</li>
                    <li>$50 (5%) - Emerging project</li>
                </ul>
                <p><strong>Strategy:</strong> DCA $100/month, rebalance quarterly</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Diversification reduces portfolio volatility and risk</li>
                    <li>Allocate based on your risk tolerance</li>
                    <li>Diversify across market caps and sectors</li>
                    <li>Rebalance regularly to maintain target allocation</li>
                    <li>Use DCA to build positions over time</li>
                    <li>Quality over quantity - don't over-diversify</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is the main benefit of diversification?",
                options: [
                    "Guaranteed profits",
                    "Reducing overall portfolio risk",
                    "Maximizing returns",
                    "Avoiding all losses"
                ],
                correct: 1
            },
            {
                question: "What is Dollar-Cost Averaging (DCA)?",
                options: [
                    "Buying only when prices are low",
                    "Investing a fixed amount regularly regardless of price",
                    "Selling when prices are high",
                    "Trading multiple times per day"
                ],
                correct: 1
            }
        ]
    },

    "10": {
        title: "Trading Psychology",
        duration: "20 min",
        content: `
            <h3>Mastering Your Trading Mindset</h3>
            
            <p>Trading psychology is often more important than technical skills. Your emotions, discipline, and mental state directly impact your trading results.</p>
            
            <h4>The Emotional Cycle of Trading</h4>
            
            <div class="cycle-stage">
                <h5>📈 Optimism → Excitement → Thrill</h5>
                <p>Market rises, you feel confident, maybe overconfident</p>
                <p class="warning">⚠️ Danger: FOMO, overleveraging, ignoring risk</p>
            </div>
            
            <div class="cycle-stage">
                <h5>😰 Anxiety → Denial → Fear</h5>
                <p>Market turns, losses mount, you hope it will reverse</p>
                <p class="warning">⚠️ Danger: Not cutting losses, revenge trading</p>
            </div>
            
            <div class="cycle-stage">
                <h5>😔 Capitulation → Despondency → Depression</h5>
                <p>You sell at the bottom, feeling defeated</p>
                <p class="warning">⚠️ Danger: Giving up, missing the recovery</p>
            </div>
            
            <div class="cycle-stage">
                <h5>🤔 Hope → Relief → Optimism</h5>
                <p>Market recovers, cycle begins again</p>
            </div>
            
            <h4>Common Psychological Biases</h4>
            
            <div class="bias-card">
                <h5>🎯 Confirmation Bias</h5>
                <p><strong>What it is:</strong> Seeking information that confirms your beliefs</p>
                <p><strong>Example:</strong> Only reading bullish news about your holdings</p>
                <p><strong>Solution:</strong> Actively seek opposing viewpoints</p>
            </div>
            
            <div class="bias-card">
                <h5>🔒 Loss Aversion</h5>
                <p><strong>What it is:</strong> Fear of losses outweighs desire for gains</p>
                <p><strong>Example:</strong> Holding losing positions too long, selling winners too early</p>
                <p><strong>Solution:</strong> Set stop-losses and stick to them</p>
            </div>
            
            <div class="bias-card">
                <h5>🎰 Gambler's Fallacy</h5>
                <p><strong>What it is:</strong> Believing past events affect future probabilities</p>
                <p><strong>Example:</strong> "It's been down 5 days, it must go up tomorrow"</p>
                <p><strong>Solution:</strong> Each trade is independent, use data not feelings</p>
            </div>
            
            <div class="bias-card">
                <h5>🚀 FOMO (Fear of Missing Out)</h5>
                <p><strong>What it is:</strong> Rushing into trades because others are profiting</p>
                <p><strong>Example:</strong> Buying after a 50% pump</p>
                <p><strong>Solution:</strong> Stick to your strategy, there's always another opportunity</p>
            </div>
            
            <div class="bias-card">
                <h5>⚓ Anchoring Bias</h5>
                <p><strong>What it is:</strong> Fixating on specific price points</p>
                <p><strong>Example:</strong> "I'll only sell when it gets back to my buy price"</p>
                <p><strong>Solution:</strong> Make decisions based on current market, not past prices</p>
            </div>
            
            <h4>Developing Discipline</h4>
            
            <div class="discipline-rule">
                <h5>1. Have a Trading Plan</h5>
                <p>Before every trade, know:</p>
                <ul>
                    <li>Why you're entering (setup/strategy)</li>
                    <li>Entry price</li>
                    <li>Stop-loss level</li>
                    <li>Take-profit targets</li>
                    <li>Position size</li>
                </ul>
            </div>
            
            <div class="discipline-rule">
                <h5>2. Follow Your Rules</h5>
                <p>Create personal trading rules and never break them:</p>
                <ul>
                    <li>"I never risk more than 2% per trade"</li>
                    <li>"I always use a stop-loss"</li>
                    <li>"I don't trade when emotional"</li>
                    <li>"I take profits at predetermined levels"</li>
                </ul>
            </div>
            
            <div class="discipline-rule">
                <h5>3. Accept Losses</h5>
                <p>Losses are part of trading. Even the best traders lose 40-50% of trades.</p>
                <p><strong>Focus on:</strong> Overall profitability, not individual trades</p>
            </div>
            
            <h4>Managing Emotions</h4>
            
            <div class="emotion-management">
                <h5>✅ Healthy Trading Habits</h5>
                <ul>
                    <li><strong>Take breaks:</strong> Step away after big wins or losses</li>
                    <li><strong>Limit screen time:</strong> Don't watch charts 24/7</li>
                    <li><strong>Set and forget:</strong> Use limit orders, don't manually watch</li>
                    <li><strong>Trade smaller:</strong> If stressed, reduce position size</li>
                    <li><strong>Exercise and sleep:</strong> Physical health affects decisions</li>
                    <li><strong>Keep perspective:</strong> It's just money, not life or death</li>
                </ul>
            </div>
            
            <h4>Avoiding Revenge Trading</h4>
            
            <div class="warning-box">
                <h5>🚫 Revenge Trading</h5>
                <p><strong>What it is:</strong> Trading emotionally to recover losses quickly</p>
                <p><strong>Why it's dangerous:</strong> Leads to bigger losses, poor decisions</p>
                <p><strong>How to avoid:</strong></p>
                <ul>
                    <li>Set daily loss limits (e.g., stop trading after 3 losses)</li>
                    <li>Take a mandatory break after losses</li>
                    <li>Review what went wrong before next trade</li>
                    <li>Remember: The market will be there tomorrow</li>
                </ul>
            </div>
            
            <h4>The Professional Mindset</h4>
            
            <div class="info-box">
                <h5>Think Like a Professional Trader:</h5>
                <ul>
                    <li><strong>Process over outcome:</strong> Focus on making good decisions, not just profits</li>
                    <li><strong>Long-term thinking:</strong> Success is measured in months/years, not days</li>
                    <li><strong>Continuous learning:</strong> Always improving, studying mistakes</li>
                    <li><strong>Risk management first:</strong> Protect capital above all else</li>
                    <li><strong>Emotional neutrality:</strong> Treat wins and losses the same</li>
                    <li><strong>Patience:</strong> Wait for high-probability setups</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Emotions are the biggest enemy in trading</li>
                    <li>Recognize and overcome psychological biases</li>
                    <li>Develop and follow a strict trading plan</li>
                    <li>Accept that losses are part of the process</li>
                    <li>Never revenge trade or chase losses</li>
                    <li>Focus on process and discipline, not just profits</li>
                    <li>Take care of your mental and physical health</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is FOMO in trading?",
                options: [
                    "Fear of Making Orders",
                    "Fear of Missing Out",
                    "Focus on Market Opportunities",
                    "Finding Optimal Market Options"
                ],
                correct: 1
            },
            {
                question: "What should you do after experiencing a significant loss?",
                options: [
                    "Immediately make another trade to recover",
                    "Take a break and review what went wrong",
                    "Increase position size to recover faster",
                    "Ignore it and keep trading"
                ],
                correct: 1
            }
        ]
    },

    // Level 3: DeFi & Advanced Concepts
    "11": {
        title: "Introduction to DeFi",
        duration: "30 min",
        content: `
            <h3>Understanding Decentralized Finance (DeFi)</h3>
            
            <p>DeFi represents a paradigm shift in finance - creating an open, permissionless financial system built on blockchain technology without traditional intermediaries.</p>
            
            <h4>What is DeFi?</h4>
            
            <div class="definition-box">
                <p><strong>Decentralized Finance (DeFi)</strong> is a financial system built on blockchain that operates without banks, brokers, or other centralized institutions.</p>
                <p><strong>Key principle:</strong> Anyone with an internet connection can access financial services</p>
            </div>
            
            <h4>Traditional Finance vs DeFi</h4>
            
            <table>
                <tr>
                    <th>Aspect</th>
                    <th>Traditional Finance</th>
                    <th>DeFi</th>
                </tr>
                <tr>
                    <td>Access</td>
                    <td>Requires approval, KYC</td>
                    <td>Open to anyone</td>
                </tr>
                <tr>
                    <td>Control</td>
                    <td>Banks control your funds</td>
                    <td>You control your funds</td>
                </tr>
                <tr>
                    <td>Hours</td>
                    <td>Business hours only</td>
                    <td>24/7/365</td>
                </tr>
                <tr>
                    <td>Transparency</td>
                    <td>Opaque processes</td>
                    <td>Fully transparent on blockchain</td>
                </tr>
                <tr>
                    <td>Speed</td>
                    <td>Days for settlements</td>
                    <td>Minutes or seconds</td>
                </tr>
                <tr>
                    <td>Fees</td>
                    <td>High intermediary fees</td>
                    <td>Lower, transparent fees</td>
                </tr>
            </table>
            
            <h4>Core DeFi Services</h4>
            
            <div class="defi-service">
                <h5>🏦 Lending & Borrowing</h5>
                <p><strong>Platforms:</strong> Aave, Compound, MakerDAO</p>
                <p><strong>How it works:</strong></p>
                <ul>
                    <li>Lenders deposit crypto and earn interest</li>
                    <li>Borrowers provide collateral and borrow against it</li>
                    <li>Interest rates determined by supply and demand</li>
                    <li>All managed by smart contracts</li>
                </ul>
                <p class="pros">✅ Earn passive income on holdings</p>
                <p class="pros">✅ Borrow without credit checks</p>
            </div>
            
            <div class="defi-service">
                <h5>💱 Decentralized Exchanges (DEXs)</h5>
                <p><strong>Platforms:</strong> Uniswap, SushiSwap, PancakeSwap</p>
                <p><strong>How it works:</strong></p>
                <ul>
                    <li>Trade directly from your wallet</li>
                    <li>No registration or KYC required</li>
                    <li>Liquidity provided by users, not the exchange</li>
                    <li>Automated Market Makers (AMMs) set prices</li>
                </ul>
                <p class="pros">✅ Full control of your funds</p>
                <p class="pros">✅ Access to any token</p>
            </div>
            
            <div class="defi-service">
                <h5>🌾 Yield Farming</h5>
                <p><strong>What it is:</strong> Earning rewards by providing liquidity to DeFi protocols</p>
                <p><strong>How it works:</strong></p>
                <ul>
                    <li>Provide liquidity to pools</li>
                    <li>Earn trading fees + token rewards</li>
                    <li>Can move funds between protocols for best returns</li>
                </ul>
                <p class="pros">✅ High potential returns</p>
                <p class="cons">❌ High risk (impermanent loss, smart contract risk)</p>
            </div>
            
            <div class="defi-service">
                <h5>💵 Stablecoins</h5>
                <p><strong>Examples:</strong> USDC, USDT, DAI</p>
                <p><strong>Purpose:</strong> Cryptocurrencies pegged to stable assets (usually USD)</p>
                <p><strong>Use cases:</strong></p>
                <ul>
                    <li>Store value without volatility</li>
                    <li>Trade in and out of positions</li>
                    <li>Earn yield on dollar-denominated assets</li>
                    <li>Send money globally instantly</li>
                </ul>
            </div>
            
            <div class="defi-service">
                <h5>🛡️ Insurance</h5>
                <p><strong>Platforms:</strong> Nexus Mutual, InsurAce</p>
                <p><strong>What it covers:</strong> Smart contract failures, hacks, exploits</p>
                <p><strong>How it works:</strong> Pay premium, get coverage, claim if event occurs</p>
            </div>
            
            <h4>Smart Contracts: The Foundation</h4>
            
            <div class="info-box">
                <p><strong>Smart contracts</strong> are self-executing programs that run on the blockchain.</p>
                <p><strong>Key features:</strong></p>
                <ul>
                    <li>Automatically execute when conditions are met</li>
                    <li>No human intervention needed</li>
                    <li>Transparent and auditable</li>
                    <li>Immutable once deployed</li>
                </ul>
            </div>
            
            <h4>DeFi Risks</h4>
            
            <div class="warning-box">
                <h5>⚠️ Important Risks to Understand:</h5>
                
                <div class="risk-item">
                    <h6>Smart Contract Risk</h6>
                    <p>Bugs or vulnerabilities in code can be exploited</p>
                    <p><strong>Mitigation:</strong> Use audited protocols, don't invest more than you can lose</p>
                </div>
                
                <div class="risk-item">
                    <h6>Impermanent Loss</h6>
                    <p>Loss compared to holding when providing liquidity</p>
                    <p><strong>Mitigation:</strong> Understand the concept before providing liquidity</p>
                </div>
                
                <div class="risk-item">
                    <h6>Rug Pulls</h6>
                    <p>Developers abandon project and steal funds</p>
                    <p><strong>Mitigation:</strong> Research team, check liquidity locks, use established protocols</p>
                </div>
                
                <div class="risk-item">
                    <h6>Regulatory Risk</h6>
                    <p>Governments may regulate or ban DeFi services</p>
                    <p><strong>Mitigation:</strong> Stay informed, diversify across jurisdictions</p>
                </div>
            </div>
            
            <h4>Getting Started with DeFi</h4>
            
            <div class="step-guide">
                <h5>Step-by-Step Guide:</h5>
                <ol>
                    <li><strong>Get a Web3 Wallet:</strong> MetaMask, Trust Wallet, or Coinbase Wallet</li>
                    <li><strong>Fund Your Wallet:</strong> Buy ETH or other blockchain native token for gas fees</li>
                    <li><strong>Research Protocols:</strong> Start with established platforms (Aave, Uniswap)</li>
                    <li><strong>Start Small:</strong> Test with small amounts first</li>
                    <li><strong>Understand Fees:</strong> Gas fees can be high, especially on Ethereum</li>
                    <li><strong>Track Everything:</strong> Keep records for taxes</li>
                </ol>
            </div>
            
            <h4>Popular DeFi Ecosystems</h4>
            
            <table>
                <tr>
                    <th>Blockchain</th>
                    <th>Advantages</th>
                    <th>Popular DeFi Apps</th>
                </tr>
                <tr>
                    <td>Ethereum</td>
                    <td>Most established, highest TVL</td>
                    <td>Uniswap, Aave, MakerDAO</td>
                </tr>
                <tr>
                    <td>Binance Smart Chain</td>
                    <td>Low fees, fast</td>
                    <td>PancakeSwap, Venus</td>
                </tr>
                <tr>
                    <td>Polygon</td>
                    <td>Ethereum compatible, low fees</td>
                    <td>QuickSwap, Aave (Polygon)</td>
                </tr>
                <tr>
                    <td>Solana</td>
                    <td>Very fast, low fees</td>
                    <td>Raydium, Marinade</td>
                </tr>
                <tr>
                    <td>Avalanche</td>
                    <td>Fast, scalable</td>
                    <td>Trader Joe, Benqi</td>
                </tr>
            </table>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>DeFi creates open, permissionless financial services</li>
                    <li>Smart contracts automate financial operations</li>
                    <li>Core services: lending, trading, yield farming, stablecoins</li>
                    <li>Significant risks exist: smart contract bugs, impermanent loss, rug pulls</li>
                    <li>Start with established protocols and small amounts</li>
                    <li>Always do your own research (DYOR)</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is the main advantage of DeFi over traditional finance?",
                options: [
                    "Guaranteed profits",
                    "Open access without intermediaries",
                    "No risk involved",
                    "Government backing"
                ],
                correct: 1
            },
            {
                question: "What are smart contracts?",
                options: [
                    "Legal documents",
                    "Self-executing programs on blockchain",
                    "Trading strategies",
                    "Insurance policies"
                ],
                correct: 1
            }
        ]
    },

    "12": {
        title: "Liquidity Pools & Yield Farming",
        duration: "25 min",
        content: `
            <h3>Understanding Liquidity Pools and Yield Farming</h3>
            
            <p>Liquidity pools and yield farming are core concepts in DeFi that allow you to earn passive income on your crypto holdings.</p>
            
            <h4>What are Liquidity Pools?</h4>
            
            <div class="definition-box">
                <p>A <strong>liquidity pool</strong> is a collection of cryptocurrency tokens locked in a smart contract, used to facilitate trading on decentralized exchanges (DEXs).</p>
            </div>
            
            <h4>How Liquidity Pools Work</h4>
            
            <div class="step-box">
                <h5>Traditional Exchange vs DEX</h5>
                <p><strong>Traditional:</strong> Order books match buyers and sellers</p>
                <p><strong>DEX:</strong> Liquidity pools provide instant trading without matching</p>
            </div>
            
            <h5>Automated Market Maker (AMM)</h5>
            
            <div class="info-box">
                <p>AMMs use mathematical formulas to price assets automatically:</p>
                <p><strong>Formula:</strong> x × y = k</p>
                <ul>
                    <li>x = amount of Token A</li>
                    <li>y = amount of Token B</li>
                    <li>k = constant</li>
                </ul>
                <p>When you trade, the ratio changes but k stays constant, automatically adjusting prices.</p>
            </div>
            
            <h4>Becoming a Liquidity Provider (LP)</h4>
            
            <div class="step-guide">
                <h5>Steps to Provide Liquidity:</h5>
                <ol>
                    <li><strong>Choose a DEX:</strong> Uniswap, SushiSwap, PancakeSwap</li>
                    <li><strong>Select a pair:</strong> ETH/USDC, BTC/ETH, etc.</li>
                    <li><strong>Deposit equal value:</strong> $500 of each token = $1,000 total</li>
                    <li><strong>Receive LP tokens:</strong> Proof of your pool share</li>
                    <li><strong>Earn fees:</strong> Get portion of trading fees (usually 0.3%)</li>
                </ol>
            </div>
            
            <h4>Impermanent Loss</h4>
            
            <div class="warning-box">
                <h5>⚠️ Critical Concept: Impermanent Loss</h5>
                <p><strong>What it is:</strong> Loss compared to simply holding tokens when prices diverge</p>
                
                <div class="example-box">
                    <h6>Example:</h6>
                    <p><strong>Initial:</strong> Deposit 1 ETH ($2,000) + 2,000 USDC</p>
                    <p><strong>ETH doubles to $4,000</strong></p>
                    <p><strong>If you held:</strong> 1 ETH ($4,000) + 2,000 USDC = $6,000</p>
                    <p><strong>In pool:</strong> 0.707 ETH ($2,828) + 2,828 USDC = $5,656</p>
                    <p><strong>Impermanent loss:</strong> $344 (5.7%)</p>
                </div>
                
                <p><strong>Why "impermanent"?</strong> If prices return to original ratio, the loss disappears</p>
                <p><strong>Mitigation:</strong></p>
                <ul>
                    <li>Provide liquidity for stable pairs (USDC/DAI)</li>
                    <li>Ensure trading fees exceed potential IL</li>
                    <li>Use correlated assets (ETH/stETH)</li>
                </ul>
            </div>
            
            <h4>Yield Farming</h4>
            
            <div class="definition-box">
                <p><strong>Yield farming</strong> is the practice of moving crypto between DeFi protocols to maximize returns.</p>
            </div>
            
            <h5>How Yield Farming Works</h5>
            
            <div class="farming-strategy">
                <h6>Basic Strategy:</h6>
                <ol>
                    <li>Provide liquidity to a pool</li>
                    <li>Receive LP tokens</li>
                    <li>Stake LP tokens in a farm</li>
                    <li>Earn additional token rewards</li>
                    <li>Compound or harvest rewards</li>
                </ol>
            </div>
            
            <h4>Yield Farming Metrics</h4>
            
            <table>
                <tr>
                    <th>Metric</th>
                    <th>Description</th>
                    <th>What to Look For</th>
                </tr>
                <tr>
                    <td>APR</td>
                    <td>Annual Percentage Rate (simple interest)</td>
                    <td>Base return rate</td>
                </tr>
                <tr>
                    <td>APY</td>
                    <td>Annual Percentage Yield (compound interest)</td>
                    <td>Return with compounding</td>
                </tr>
                <tr>
                    <td>TVL</td>
                    <td>Total Value Locked</td>
                    <td>Higher = more established</td>
                </tr>
                <tr>
                    <td>Volume</td>
                    <td>24h trading volume</td>
                    <td>Higher = more fees</td>
                </tr>
            </table>
            
            <h4>Popular Yield Farming Platforms</h4>
            
            <div class="platform-card">
                <h5>🦄 Uniswap (Ethereum)</h5>
                <p>Largest DEX, highest liquidity</p>
                <p class="pros">✅ Most trusted, highest volume</p>
                <p class="cons">❌ High gas fees on Ethereum</p>
            </div>
            
            <div class="platform-card">
                <h5>🍣 SushiSwap (Multi-chain)</h5>
                <p>Fork of Uniswap with additional features</p>
                <p class="pros">✅ SUSHI token rewards</p>
                <p class="pros">✅ Available on multiple chains</p>
            </div>
            
            <div class="platform-card">
                <h5>🥞 PancakeSwap (BSC)</h5>
                <p>Largest DEX on Binance Smart Chain</p>
                <p class="pros">✅ Very low fees</p>
                <p class="pros">✅ High APY farms</p>
            </div>
            
            <h4>Risks in Yield Farming</h4>
            
            <div class="warning-box">
                <h5>⚠️ Major Risks:</h5>
                <ul>
                    <li><strong>Impermanent Loss:</strong> Price divergence reduces value</li>
                    <li><strong>Smart Contract Risk:</strong> Bugs or exploits</li>
                    <li><strong>Rug Pulls:</strong> Developers steal liquidity</li>
                    <li><strong>Token Inflation:</strong> Reward tokens lose value</li>
                    <li><strong>Gas Fees:</strong> Can eat into profits</li>
                    <li><strong>Regulatory Risk:</strong> Legal uncertainty</li>
                </ul>
            </div>
            
            <h4>Advanced Strategies</h4>
            
            <div class="strategy-card">
                <h5>🔄 Auto-Compounding</h5>
                <p>Automatically reinvest rewards to maximize APY</p>
                <p><strong>Platforms:</strong> Beefy Finance, Yearn Finance</p>
            </div>
            
            <div class="strategy-card">
                <h5>📊 Leveraged Yield Farming</h5>
                <p>Borrow assets to increase position size</p>
                <p class="warning">⚠️ High risk - can be liquidated</p>
            </div>
            
            <div class="strategy-card">
                <h5>🎯 Stablecoin Farming</h5>
                <p>Farm with stablecoin pairs to minimize IL</p>
                <p class="pros">✅ Lower risk, predictable returns</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Liquidity pools enable decentralized trading</li>
                    <li>LPs earn trading fees but face impermanent loss</li>
                    <li>Yield farming can provide high returns but carries significant risks</li>
                    <li>Always calculate potential IL before providing liquidity</li>
                    <li>Start with established protocols and small amounts</li>
                    <li>Diversify across multiple farms and strategies</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is impermanent loss?",
                options: [
                    "Permanent loss of funds",
                    "Loss compared to holding when prices diverge",
                    "Trading fees charged by the DEX",
                    "Gas fees for transactions"
                ],
                correct: 1
            },
            {
                question: "What do liquidity providers earn?",
                options: [
                    "Only token rewards",
                    "Only trading fees",
                    "Trading fees and potentially token rewards",
                    "Guaranteed fixed interest"
                ],
                correct: 2
            }
        ]
    },

    "13": {
        title: "On-Chain Analysis",
        duration: "35 min",
        content: `
            <h3>Mastering On-Chain Analysis</h3>
            
            <p>On-chain analysis examines blockchain data to gain insights into market behavior, whale activity, and potential price movements.</p>
            
            <h4>What is On-Chain Analysis?</h4>
            
            <div class="definition-box">
                <p><strong>On-chain analysis</strong> studies data recorded directly on the blockchain - transactions, addresses, smart contracts, and network activity.</p>
                <p><strong>Advantage:</strong> Real, verifiable data that can't be manipulated</p>
            </div>
            
            <h4>Key On-Chain Metrics</h4>
            
            <div class="metric-card">
                <h5>📊 Active Addresses</h5>
                <p>Number of unique addresses transacting daily</p>
                <p><strong>Bullish:</strong> Increasing active addresses = growing adoption</p>
                <p><strong>Bearish:</strong> Decreasing activity = waning interest</p>
            </div>
            
            <div class="metric-card">
                <h5>💰 Transaction Volume</h5>
                <p>Total value transferred on-chain</p>
                <p><strong>High volume:</strong> Strong network activity</p>
                <p><strong>Low volume:</strong> Reduced activity, potential accumulation</p>
            </div>
            
            <div class="metric-card">
                <h5>🐋 Whale Transactions</h5>
                <p>Large transfers (typically >$1M)</p>
                <p><strong>Watch for:</strong> Exchange deposits (bearish) vs withdrawals (bullish)</p>
            </div>
            
            <div class="metric-card">
                <h5>📈 Exchange Netflow</h5>
                <p>Net movement of crypto to/from exchanges</p>
                <p><strong>Inflow (bearish):</strong> Potential selling pressure</p>
                <p><strong>Outflow (bullish):</strong> HODLing, reduced sell pressure</p>
            </div>
            
            <div class="metric-card">
                <h5>💎 HODL Waves</h5>
                <p>Distribution of coins by age</p>
                <p><strong>Long-term holders:</strong> Strong hands, bullish</p>
                <p><strong>Young coins:</strong> Active trading, potential volatility</p>
            </div>
            
            <div class="metric-card">
                <h5>📉 MVRV Ratio</h5>
                <p>Market Value to Realized Value</p>
                <p><strong>High MVRV (>3.5):</strong> Overvalued, potential top</p>
                <p><strong>Low MVRV (<1):</strong> Undervalued, potential bottom</p>
            </div>
            
            <h4>Advanced Metrics</h4>
            
            <table>
                <tr>
                    <th>Metric</th>
                    <th>What It Shows</th>
                    <th>Interpretation</th>
                </tr>
                <tr>
                    <td>NVT Ratio</td>
                    <td>Network Value to Transactions</td>
                    <td>High = overvalued, Low = undervalued</td>
                </tr>
                <tr>
                    <td>Realized Cap</td>
                    <td>Value at price when last moved</td>
                    <td>True cost basis of network</td>
                </tr>
                <tr>
                    <td>Supply on Exchanges</td>
                    <td>% of supply on exchanges</td>
                    <td>Low = bullish, High = bearish</td>
                </tr>
                <tr>
                    <td>Hash Rate</td>
                    <td>Mining power securing network</td>
                    <td>Higher = more secure</td>
                </tr>
                <tr>
                    <td>Funding Rates</td>
                    <td>Cost to hold leveraged positions</td>
                    <td>Positive = bullish, Negative = bearish</td>
                </tr>
            </table>
            
            <h4>On-Chain Analysis Tools</h4>
            
            <div class="tool-card">
                <h5>📊 Glassnode</h5>
                <p>Comprehensive on-chain analytics platform</p>
                <p><strong>Features:</strong> Advanced metrics, charts, alerts</p>
                <p><strong>Cost:</strong> Free tier + paid plans</p>
            </div>
            
            <div class="tool-card">
                <h5>🔍 Nansen</h5>
                <p>Wallet labeling and smart money tracking</p>
                <p><strong>Features:</strong> Track whale wallets, fund flows</p>
                <p><strong>Cost:</strong> Paid subscription</p>
            </div>
            
            <div class="tool-card">
                <h5>⛓️ Etherscan / Block Explorers</h5>
                <p>View all blockchain transactions</p>
                <p><strong>Features:</strong> Free, real-time data</p>
                <p><strong>Use:</strong> Track specific addresses, verify transactions</p>
            </div>
            
            <div class="tool-card">
                <h5>📈 CryptoQuant</h5>
                <p>Exchange flow and miner data</p>
                <p><strong>Features:</strong> Exchange reserves, miner activity</p>
                <p><strong>Cost:</strong> Free tier + paid plans</p>
            </div>
            
            <h4>Practical On-Chain Strategies</h4>
            
            <div class="strategy-box">
                <h5>1. Exchange Flow Analysis</h5>
                <p><strong>Strategy:</strong> Monitor large exchange deposits/withdrawals</p>
                <p><strong>Signal:</strong> Large deposits to exchanges = potential selling</p>
                <p><strong>Action:</strong> Consider reducing exposure or setting stop-losses</p>
            </div>
            
            <div class="strategy-box">
                <h5>2. Whale Watching</h5>
                <p><strong>Strategy:</strong> Track wallets holding >1,000 BTC or >10,000 ETH</p>
                <p><strong>Signal:</strong> Whales accumulating = bullish</p>
                <p><strong>Tools:</strong> Whale Alert, Nansen</p>
            </div>
            
            <div class="strategy-box">
                <h5>3. MVRV Extremes</h5>
                <p><strong>Strategy:</strong> Buy when MVRV <1, sell when MVRV >3.5</p>
                <p><strong>Logic:</strong> Mean reversion - price tends to return to realized value</p>
            </div>
            
            <h4>Case Study: Bitcoin Bull Market Indicators</h4>
            
            <div class="case-study">
                <h5>Bullish On-Chain Signals:</h5>
                <ul>
                    <li>✅ Exchange reserves declining (coins leaving exchanges)</li>
                    <li>✅ Long-term holder supply increasing</li>
                    <li>✅ MVRV ratio between 1-2 (fair value)</li>
                    <li>✅ Active addresses growing</li>
                    <li>✅ Whale accumulation visible</li>
                    <li>✅ Hash rate at all-time highs</li>
                </ul>
                
                <h5>Bearish On-Chain Signals:</h5>
                <ul>
                    <li>❌ Large exchange inflows</li>
                    <li>❌ MVRV >3.5 (overheated)</li>
                    <li>❌ Whales distributing to retail</li>
                    <li>❌ Decreasing active addresses</li>
                    <li>❌ Miners selling heavily</li>
                </ul>
            </div>
            
            <h4>Limitations of On-Chain Analysis</h4>
            
            <div class="warning-box">
                <h5>⚠️ Important Limitations:</h5>
                <ul>
                    <li><strong>Not predictive:</strong> Shows what happened, not what will happen</li>
                    <li><strong>Lagging indicator:</strong> Data reflects past actions</li>
                    <li><strong>Doesn't capture OTC:</strong> Large trades happen off-chain</li>
                    <li><strong>Exchange reserves:</strong> Don't always mean selling</li>
                    <li><strong>Requires context:</strong> Must combine with other analysis</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>On-chain data provides verifiable market insights</li>
                    <li>Key metrics: exchange flows, whale activity, MVRV, active addresses</li>
                    <li>Use multiple metrics together for confirmation</li>
                    <li>On-chain analysis works best combined with technical/fundamental analysis</li>
                    <li>Free tools like Etherscan provide basic insights</li>
                    <li>Advanced platforms offer deeper analytics but cost money</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What does large exchange inflow typically indicate?",
                options: [
                    "Bullish - people buying",
                    "Bearish - potential selling pressure",
                    "Neutral - no impact",
                    "Bullish - accumulation"
                ],
                correct: 1
            },
            {
                question: "What is MVRV ratio?",
                options: [
                    "Market Volume to Realized Value",
                    "Market Value to Realized Value",
                    "Mining Value to Real Value",
                    "Market Velocity to Revenue Value"
                ],
                correct: 1
            }
        ]
    }
    ,

    "14": {
        title: "Smart Contract Basics",
        duration: "30 min",
        content: `
            <h3>Understanding Smart Contracts</h3>
            <p>Smart contracts are self-executing programs that run on blockchain networks, automating agreements without intermediaries.</p>
            
            <h4>What is a Smart Contract?</h4>
            <div class="definition-box">
                <p>A <strong>smart contract</strong> is code deployed on a blockchain that automatically executes when predetermined conditions are met.</p>
                <p><strong>Key feature:</strong> Trustless execution - no need to trust the other party</p>
            </div>
            
            <h4>How Smart Contracts Work</h4>
            <div class="step-box">
                <h5>Traditional Contract vs Smart Contract</h5>
                <p><strong>Traditional:</strong> "If you pay me $100, I'll transfer the house deed"</p>
                <p><strong>Smart Contract:</strong> IF payment received THEN automatically transfer deed</p>
            </div>
            
            <h4>Real-World Applications</h4>
            <ul>
                <li><strong>DeFi:</strong> Automated lending, borrowing, trading</li>
                <li><strong>NFTs:</strong> Ownership verification and transfers</li>
                <li><strong>DAOs:</strong> Decentralized governance</li>
                <li><strong>Supply Chain:</strong> Automated tracking and payments</li>
                <li><strong>Insurance:</strong> Automatic claim payouts</li>
            </ul>
            
            <h4>Smart Contract Risks</h4>
            <div class="warning-box">
                <h5>⚠️ Critical Risks:</h5>
                <ul>
                    <li><strong>Code bugs:</strong> Errors can be exploited</li>
                    <li><strong>Immutability:</strong> Can't fix bugs after deployment</li>
                    <li><strong>Oracle dependency:</strong> Relies on external data feeds</li>
                    <li><strong>Gas costs:</strong> Complex contracts are expensive</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Smart contracts automate agreements trustlessly</li>
                    <li>They power most DeFi applications</li>
                    <li>Code is law - bugs can be catastrophic</li>
                    <li>Always use audited contracts</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is a smart contract?",
                options: ["A legal document", "Self-executing code on blockchain", "A trading strategy", "A type of wallet"],
                correct: 1
            },
            {
                question: "What is a major risk of smart contracts?",
                options: ["Too slow", "Code bugs can be exploited", "Too expensive always", "Requires KYC"],
                correct: 1
            }
        ]
    },

    "15": {
        title: "Layer 2 Solutions",
        duration: "28 min",
        content: `
            <h3>Understanding Layer 2 Scaling Solutions</h3>
            <p>Layer 2 solutions scale blockchains by processing transactions off the main chain while maintaining security.</p>
            
            <h4>Why Layer 2?</h4>
            <div class="info-box">
                <p><strong>Problem:</strong> Ethereum can only process ~15 transactions per second</p>
                <p><strong>Result:</strong> High fees ($50+ during congestion)</p>
                <p><strong>Solution:</strong> Layer 2 processes transactions off-chain, then settles on Layer 1</p>
            </div>
            
            <h4>Types of Layer 2</h4>
            <div class="l2-type">
                <h5>🔄 Rollups</h5>
                <p><strong>Optimistic Rollups:</strong> Arbitrum, Optimism</p>
                <p><strong>ZK-Rollups:</strong> zkSync, StarkNet</p>
                <p class="pros">✅ 10-100x cheaper fees</p>
                <p class="pros">✅ Inherits Ethereum security</p>
            </div>
            
            <div class="l2-type">
                <h5>🔗 Sidechains</h5>
                <p><strong>Examples:</strong> Polygon, Gnosis Chain</p>
                <p class="pros">✅ Very low fees</p>
                <p class="cons">❌ Separate security model</p>
            </div>
            
            <h4>Popular Layer 2 Networks</h4>
            <table>
                <tr><th>Network</th><th>Type</th><th>Advantages</th></tr>
                <tr><td>Arbitrum</td><td>Optimistic Rollup</td><td>Largest TVL, EVM compatible</td></tr>
                <tr><td>Optimism</td><td>Optimistic Rollup</td><td>Simple, many dApps</td></tr>
                <tr><td>Polygon</td><td>Sidechain</td><td>Fastest, cheapest</td></tr>
                <tr><td>zkSync</td><td>ZK-Rollup</td><td>Fastest finality</td></tr>
            </table>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Layer 2 solves blockchain scalability</li>
                    <li>Dramatically reduces transaction fees</li>
                    <li>Different types have different trade-offs</li>
                    <li>Future of Ethereum scaling</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is the main benefit of Layer 2?",
                options: ["Higher security", "Lower fees and faster transactions", "More decentralization", "Better privacy"],
                correct: 1
            },
            {
                question: "Which is an Optimistic Rollup?",
                options: ["Polygon", "Arbitrum", "Binance Smart Chain", "Solana"],
                correct: 1
            }
        ]
    },

    "16": {
        title: "Trading Bots & Automation",
        duration: "40 min",
        content: `
            <h3>Automated Trading with Bots</h3>
            <p>Trading bots execute strategies automatically 24/7, removing emotion and enabling complex strategies.</p>
            
            <h4>Types of Trading Bots</h4>
            <div class="bot-type">
                <h5>📊 Grid Trading Bots</h5>
                <p>Place buy/sell orders at set intervals</p>
                <p><strong>Best for:</strong> Ranging markets</p>
                <p class="pros">✅ Profits from volatility</p>
            </div>
            
            <div class="bot-type">
                <h5>🔄 DCA Bots</h5>
                <p>Buy fixed amounts at regular intervals</p>
                <p><strong>Best for:</strong> Long-term accumulation</p>
                <p class="pros">✅ Removes emotion</p>
            </div>
            
            <div class="bot-type">
                <h5>⚡ Arbitrage Bots</h5>
                <p>Exploit price differences across exchanges</p>
                <p><strong>Best for:</strong> Advanced traders</p>
                <p class="cons">❌ Requires significant capital</p>
            </div>
            
            <h4>Popular Bot Platforms</h4>
            <ul>
                <li><strong>3Commas:</strong> User-friendly, many strategies</li>
                <li><strong>Cryptohopper:</strong> Cloud-based, marketplace</li>
                <li><strong>Pionex:</strong> Built-in bots, low fees</li>
                <li><strong>Custom:</strong> Python/JavaScript for advanced users</li>
            </ul>
            
            <h4>Bot Risks</h4>
            <div class="warning-box">
                <h5>⚠️ Important Risks:</h5>
                <ul>
                    <li><strong>API key security:</strong> Bots need exchange access</li>
                    <li><strong>Market changes:</strong> Strategies can stop working</li>
                    <li><strong>Over-optimization:</strong> Backtesting doesn't guarantee future results</li>
                    <li><strong>Technical failures:</strong> Bugs, internet outages</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Bots automate trading strategies 24/7</li>
                    <li>Different bot types for different strategies</li>
                    <li>Start small and test thoroughly</li>
                    <li>Never share API keys with full withdrawal access</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is a DCA bot?",
                options: ["Arbitrage bot", "Bot that buys fixed amounts regularly", "Grid trading bot", "Scalping bot"],
                correct: 1
            },
            {
                question: "What is a major risk of trading bots?",
                options: ["Too slow", "API key security", "Too expensive", "Illegal"],
                correct: 1
            }
        ]
    },

    "17": {
        title: "Advanced Security",
        duration: "35 min",
        content: `
            <h3>Advanced Cryptocurrency Security</h3>
            <p>Protecting your crypto requires multiple layers of security beyond basic wallet safety.</p>
            
            <h4>Multi-Signature Wallets</h4>
            <div class="info-box">
                <p><strong>Multisig:</strong> Requires multiple signatures to authorize transactions</p>
                <p><strong>Example:</strong> 2-of-3 wallet needs 2 out of 3 keys to spend</p>
                <p class="pros">✅ No single point of failure</p>
                <p class="pros">✅ Perfect for organizations</p>
            </div>
            
            <h4>Hardware Security</h4>
            <ul>
                <li><strong>Hardware wallets:</strong> Ledger, Trezor (offline key storage)</li>
                <li><strong>Air-gapped computers:</strong> Never connected to internet</li>
                <li><strong>Metal backups:</strong> Fireproof seed phrase storage</li>
            </ul>
            
            <h4>Operational Security (OpSec)</h4>
            <div class="security-practice">
                <h5>✅ Best Practices:</h5>
                <ul>
                    <li>Use separate devices for crypto</li>
                    <li>Never discuss holdings publicly</li>
                    <li>Use VPN for privacy</li>
                    <li>Verify all addresses manually</li>
                    <li>Test with small amounts first</li>
                    <li>Keep multiple backups in different locations</li>
                </ul>
            </div>
            
            <h4>Advanced Threats</h4>
            <div class="warning-box">
                <h5>⚠️ Sophisticated Attacks:</h5>
                <ul>
                    <li><strong>Clipboard malware:</strong> Changes copied addresses</li>
                    <li><strong>Man-in-the-middle:</strong> Intercepts communications</li>
                    <li><strong>SIM swapping:</strong> Takes over phone number</li>
                    <li><strong>$5 wrench attack:</strong> Physical coercion</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Layer multiple security measures</li>
                    <li>Multisig eliminates single points of failure</li>
                    <li>Hardware wallets for large amounts</li>
                    <li>Operational security is crucial</li>
                    <li>Stay paranoid - better safe than sorry</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is a multisig wallet?",
                options: ["Multiple wallets", "Wallet requiring multiple signatures", "Wallet with multiple coins", "Wallet on multiple devices"],
                correct: 1
            },
            {
                question: "What is clipboard malware?",
                options: ["Virus that deletes files", "Malware that changes copied addresses", "Phishing attack", "Keylogger"],
                correct: 1
            }
        ]
    },

    "18": {
        title: "Advanced Technical Analysis",
        duration: "45 min",
        content: `
            <h3>Advanced Technical Analysis Techniques</h3>
            <p>Master advanced TA tools and strategies used by professional traders.</p>
            
            <h4>Advanced Indicators</h4>
            <div class="indicator-card">
                <h5>📊 RSI (Relative Strength Index)</h5>
                <p>Measures momentum, 0-100 scale</p>
                <p><strong>Overbought:</strong> >70 (potential reversal down)</p>
                <p><strong>Oversold:</strong> <30 (potential reversal up)</p>
                <p><strong>Divergence:</strong> Price and RSI move opposite = reversal signal</p>
            </div>
            
            <div class="indicator-card">
                <h5>📈 MACD (Moving Average Convergence Divergence)</h5>
                <p>Trend-following momentum indicator</p>
                <p><strong>Bullish:</strong> MACD crosses above signal line</p>
                <p><strong>Bearish:</strong> MACD crosses below signal line</p>
            </div>
            
            <div class="indicator-card">
                <h5>🎯 Fibonacci Retracements</h5>
                <p>Identifies potential support/resistance levels</p>
                <p><strong>Key levels:</strong> 23.6%, 38.2%, 50%, 61.8%, 78.6%</p>
                <p><strong>Use:</strong> Find entry points in trends</p>
            </div>
            
            <h4>Chart Patterns</h4>
            <table>
                <tr><th>Pattern</th><th>Type</th><th>Signal</th></tr>
                <tr><td>Head & Shoulders</td><td>Reversal</td><td>Bearish</td></tr>
                <tr><td>Inverse H&S</td><td>Reversal</td><td>Bullish</td></tr>
                <tr><td>Double Top</td><td>Reversal</td><td>Bearish</td></tr>
                <tr><td>Double Bottom</td><td>Reversal</td><td>Bullish</td></tr>
                <tr><td>Bull Flag</td><td>Continuation</td><td>Bullish</td></tr>
                <tr><td>Bear Flag</td><td>Continuation</td><td>Bearish</td></tr>
            </table>
            
            <h4>Multi-Timeframe Analysis</h4>
            <div class="strategy-box">
                <h5>Professional Approach:</h5>
                <ol>
                    <li><strong>Weekly:</strong> Identify overall trend</li>
                    <li><strong>Daily:</strong> Find key support/resistance</li>
                    <li><strong>4-Hour:</strong> Spot entry setups</li>
                    <li><strong>1-Hour:</strong> Fine-tune entry/exit</li>
                </ol>
                <p><strong>Rule:</strong> Trade in direction of higher timeframe trend</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Combine multiple indicators for confirmation</li>
                    <li>Chart patterns provide high-probability setups</li>
                    <li>Multi-timeframe analysis improves accuracy</li>
                    <li>No indicator is 100% accurate</li>
                    <li>Practice and backtest strategies</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What does RSI above 70 indicate?",
                options: ["Oversold", "Overbought", "Neutral", "Bullish trend"],
                correct: 1
            },
            {
                question: "What is a Head and Shoulders pattern?",
                options: ["Bullish continuation", "Bearish reversal", "Bullish reversal", "Neutral pattern"],
                correct: 1
            }
        ]
    },

    "19": {
        title: "Tax & Legal Compliance",
        duration: "30 min",
        content: `
            <h3>Cryptocurrency Tax and Legal Compliance</h3>
            <p>Understanding tax obligations is crucial for legal crypto trading and investing.</p>
            
            <h4>Taxable Events</h4>
            <div class="tax-event">
                <h5>✅ Taxable:</h5>
                <ul>
                    <li>Selling crypto for fiat (capital gains)</li>
                    <li>Trading one crypto for another</li>
                    <li>Using crypto to buy goods/services</li>
                    <li>Earning crypto (mining, staking, airdrops)</li>
                    <li>DeFi yield farming rewards</li>
                </ul>
            </div>
            
            <div class="tax-event">
                <h5>❌ Not Taxable (Usually):</h5>
                <ul>
                    <li>Buying crypto with fiat</li>
                    <li>Transferring between your own wallets</li>
                    <li>Holding crypto (unrealized gains)</li>
                    <li>Receiving gifts (may have gift tax)</li>
                </ul>
            </div>
            
            <h4>Capital Gains Tax</h4>
            <table>
                <tr><th>Holding Period</th><th>Tax Type</th><th>Rate (US Example)</th></tr>
                <tr><td>< 1 year</td><td>Short-term</td><td>Ordinary income (10-37%)</td></tr>
                <tr><td>> 1 year</td><td>Long-term</td><td>Preferential (0-20%)</td></tr>
            </table>
            
            <h4>Record Keeping</h4>
            <div class="info-box">
                <h5>📝 What to Track:</h5>
                <ul>
                    <li>Date and time of transaction</li>
                    <li>Amount and type of crypto</li>
                    <li>Value in fiat at time of transaction</li>
                    <li>Purpose (trade, payment, etc.)</li>
                    <li>Fees paid</li>
                    <li>Exchange/wallet used</li>
                </ul>
            </div>
            
            <h4>Tax Software</h4>
            <ul>
                <li><strong>CoinTracker:</strong> Comprehensive, supports many exchanges</li>
                <li><strong>Koinly:</strong> User-friendly, good reports</li>
                <li><strong>CryptoTrader.Tax:</strong> Affordable, accurate</li>
                <li><strong>TaxBit:</strong> Enterprise-grade</li>
            </ul>
            
            <h4>Tax Strategies</h4>
            <div class="strategy-box">
                <h5>Legal Tax Optimization:</h5>
                <ul>
                    <li><strong>Tax-loss harvesting:</strong> Sell losers to offset gains</li>
                    <li><strong>Hold >1 year:</strong> Qualify for long-term rates</li>
                    <li><strong>Donate appreciated crypto:</strong> Avoid capital gains</li>
                    <li><strong>Use retirement accounts:</strong> Tax-advantaged growth</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <h5>⚠️ Important:</h5>
                <p>Tax laws vary by country. This is general information, not tax advice. Consult a crypto tax professional for your situation.</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Most crypto transactions are taxable events</li>
                    <li>Keep detailed records of all transactions</li>
                    <li>Use crypto tax software to simplify reporting</li>
                    <li>Long-term holdings often have better tax treatment</li>
                    <li>Consult a tax professional for complex situations</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "Which is a taxable event?",
                options: ["Buying crypto with USD", "Trading BTC for ETH", "Transferring to your own wallet", "Holding crypto"],
                correct: 1
            },
            {
                question: "What is tax-loss harvesting?",
                options: ["Avoiding all taxes", "Selling losers to offset gains", "Not reporting losses", "Donating crypto"],
                correct: 1
            }
        ]
    },

    "20": {
        title: "Building Your Career in Crypto",
        duration: "25 min",
        content: `
            <h3>Career Opportunities in Cryptocurrency</h3>
            <p>The crypto industry offers diverse career paths for developers, traders, marketers, and more.</p>
            
            <h4>Career Paths</h4>
            <div class="career-path">
                <h5>💻 Technical Roles</h5>
                <ul>
                    <li><strong>Blockchain Developer:</strong> Build dApps and smart contracts</li>
                    <li><strong>Security Auditor:</strong> Find vulnerabilities</li>
                    <li><strong>Protocol Engineer:</strong> Design blockchain systems</li>
                    <li><strong>DevOps:</strong> Maintain infrastructure</li>
                </ul>
                <p><strong>Skills needed:</strong> Solidity, Rust, JavaScript, cryptography</p>
            </div>
            
            <div class="career-path">
                <h5>📊 Trading & Finance</h5>
                <ul>
                    <li><strong>Trader:</strong> Professional trading (prop firms, hedge funds)</li>
                    <li><strong>Analyst:</strong> Research and market analysis</li>
                    <li><strong>DeFi Strategist:</strong> Yield optimization</li>
                    <li><strong>Risk Manager:</strong> Portfolio risk assessment</li>
                </ul>
                <p><strong>Skills needed:</strong> TA, risk management, data analysis</p>
            </div>
            
            <div class="career-path">
                <h5>📱 Marketing & Community</h5>
                <ul>
                    <li><strong>Community Manager:</strong> Build and engage communities</li>
                    <li><strong>Content Creator:</strong> Education and awareness</li>
                    <li><strong>Growth Marketer:</strong> User acquisition</li>
                    <li><strong>Social Media Manager:</strong> Brand presence</li>
                </ul>
                <p><strong>Skills needed:</strong> Communication, crypto knowledge, creativity</p>
            </div>
            
            <div class="career-path">
                <h5>⚖️ Legal & Compliance</h5>
                <ul>
                    <li><strong>Crypto Lawyer:</strong> Regulatory compliance</li>
                    <li><strong>Compliance Officer:</strong> KYC/AML procedures</li>
                    <li><strong>Policy Advisor:</strong> Government relations</li>
                </ul>
                <p><strong>Skills needed:</strong> Law degree, crypto understanding</p>
            </div>
            
            <h4>Getting Started</h4>
            <div class="step-guide">
                <h5>Steps to Break Into Crypto:</h5>
                <ol>
                    <li><strong>Learn fundamentals:</strong> Complete courses like this one</li>
                    <li><strong>Get hands-on:</strong> Use DeFi, trade, build projects</li>
                    <li><strong>Build portfolio:</strong> GitHub projects, trading record, content</li>
                    <li><strong>Network:</strong> Twitter, Discord, conferences</li>
                    <li><strong>Contribute:</strong> Open source, DAOs, communities</li>
                    <li><strong>Apply:</strong> Job boards, direct outreach</li>
                </ol>
            </div>
            
            <h4>Resources</h4>
            <ul>
                <li><strong>Job Boards:</strong> Crypto Jobs List, Web3 Career, Cryptocurrency Jobs</li>
                <li><strong>Learning:</strong> Buildspace, Alchemy University, CryptoZombies</li>
                <li><strong>Networking:</strong> Twitter, LinkedIn, Telegram groups</li>
                <li><strong>Events:</strong> ETHGlobal, Consensus, local meetups</li>
            </ul>
            
            <h4>Salary Expectations</h4>
            <table>
                <tr><th>Role</th><th>Entry Level</th><th>Experienced</th></tr>
                <tr><td>Developer</td><td>$80-120k</td><td>$150-300k+</td></tr>
                <tr><td>Trader</td><td>$60-100k</td><td>$100-500k+</td></tr>
                <tr><td>Marketing</td><td>$50-80k</td><td>$100-200k</td></tr>
                <tr><td>Community</td><td>$40-70k</td><td>$80-150k</td></tr>
            </table>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Crypto offers diverse career opportunities</li>
                    <li>Technical skills are highly valued and well-paid</li>
                    <li>Non-technical roles are equally important</li>
                    <li>Hands-on experience is crucial</li>
                    <li>Network actively in the community</li>
                    <li>The industry is growing rapidly</li>
                </ul>
            </div>
            
            <div class="info-box">
                <h4>🎉 Congratulations!</h4>
                <p>You've completed the Cryptocurrency Learning Path! You now have a comprehensive understanding of crypto from basics to advanced concepts.</p>
                <p><strong>Next steps:</strong> Practice what you've learned, stay updated with industry news, and never stop learning!</p>
            </div>
        `,
        quiz: [
            {
                question: "What skill is most important for a blockchain developer?",
                options: ["Marketing", "Smart contract programming", "Trading", "Design"],
                correct: 1
            },
            {
                question: "What is a good way to break into crypto careers?",
                options: ["Only apply to jobs", "Build projects and contribute to open source", "Just read about it", "Wait for opportunities"],
                correct: 1
            }
        ]
    },

    // ========================================
    // CRYPTO QUIZZES
    // ========================================

    "quiz1": {
        title: "Level 1 Quiz: Crypto Foundations",
        duration: "15 min",
        content: "<h3>Level 1 Assessment</h3><p>Test your knowledge of cryptocurrency basics, blockchain technology, and security fundamentals.</p>",
        quiz: [
            { question: "What is the primary purpose of a blockchain?", options: ["To store images", "To record transactions securely", "To send emails", "To play games"], correct: 1 },
            { question: "Which of these is a 'cold wallet'?", options: ["MetaMask", "Coinbase App", "Ledger Nano X", "Trust Wallet"], correct: 2 },
            { question: "What does 'decentralized' mean?", options: ["Controlled by one person", "Controlled by the government", "No central authority controls it", "Controlled by a bank"], correct: 2 },
            { question: "What is a 'private key'?", options: ["Your username", "Your public address", "Your password to access funds", "Your transaction history"], correct: 2 },
            { question: "What should you do with your seed phrase?", options: ["Post it online", "Share it with support", "Write it down and hide it", "Memorize it only"], correct: 2 },
            { question: "Who created Bitcoin?", options: ["Vitalik Buterin", "Satoshi Nakamoto", "Elon Musk", "Charlie Lee"], correct: 1 },
            { question: "What is 'mining' in crypto?", options: ["Digging for gold", "Verifying transactions", "Hacking wallets", "Creating websites"], correct: 1 },
            { question: "Can a blockchain transaction be reversed?", options: ["Yes, easily", "Yes, by the bank", "No, it is immutable", "Only on weekends"], correct: 2 },
            { question: "What is Ethereum known for?", options: ["Being the first crypto", "Smart contracts", "Being a stablecoin", "Privacy only"], correct: 1 },
            { question: "What is 'fiat' currency?", options: ["Digital money", "Government-issued money", "Fake money", "Monopoly money"], correct: 1 }
        ]
    },

    "quiz2": {
        title: "Level 2 Quiz: Trading Fundamentals",
        duration: "20 min",
        content: "<h3>Level 2 Assessment</h3><p>Prove your understanding of market analysis, trading terminology, and risk management.</p>",
        quiz: [
            { question: "What does a green candlestick usually indicate?", options: ["Price went down", "Price went up", "Price stayed same", "Market closed"], correct: 1 },
            { question: "What is 'Market Cap'?", options: ["Price per coin", "Total supply", "Price x Circulating Supply", "Volume"], correct: 2 },
            { question: "What is a 'Bear Market'?", options: ["Prices rising", "Prices falling", "Market is closed", "High volatility"], correct: 1 },
            { question: "What does FOMO stand for?", options: ["Fear Of Missing Out", "Fear Of Losing Money", "Future Of Money Online", "Free Money"], correct: 0 },
            { question: "What is a 'Limit Order'?", options: ["Buy immediately", "Buy at specific price", "Sell immediately", "Stop trading"], correct: 1 },
            { question: "What is 'Support'?", options: ["Price ceiling", "Price floor", "Moving average", "Volume"], correct: 1 },
            { question: "What is 'HODL'?", options: ["Selling quickly", "Holding long term", "Day trading", "Shorting"], correct: 1 },
            { question: "What is 'Volume'?", options: ["Loudness", "Number of coins traded", "Price change", "Market cap"], correct: 1 },
            { question: "What is a 'Stop-Loss'?", options: ["To stop profit", "To limit potential loss", "To buy more", "To pause trading"], correct: 1 },
            { question: "What is 'DYOR'?", options: ["Do Your Own Research", "Double Your Own Return", "Don't You Own Ripple", "Daily Yield On Return"], correct: 0 },
            { question: "What is 'RSI' used for?", options: ["Measuring volume", "Measuring momentum", "Measuring fees", "Measuring time"], correct: 1 },
            { question: "What is a 'Whale'?", options: ["Small trader", "Large holder", "Developer", "Miner"], correct: 1 },
            { question: "What is 'Shorting'?", options: ["Betting price will go up", "Betting price will go down", "Buying quickly", "Selling slowly"], correct: 1 },
            { question: "What is 'Liquidity'?", options: ["Water", "Ease of buying/selling", "Price", "Market cap"], correct: 1 },
            { question: "What is 'Volatility'?", options: ["Price stability", "Price fluctuation", "Volume", "Security"], correct: 1 }
        ]
    },

    "quiz3": {
        title: "Level 3 Quiz: DeFi & Advanced Concepts",
        duration: "25 min",
        content: "<h3>Level 3 Assessment</h3><p>Test your mastery of decentralized finance, smart contracts, and on-chain analysis.</p>",
        quiz: [
            { question: "What does DeFi stand for?", options: ["Digital Finance", "Decentralized Finance", "Daily Finance", "Direct Finance"], correct: 1 },
            { question: "What is a DEX?", options: ["Centralized Exchange", "Decentralized Exchange", "Digital Exchange", "Direct Exchange"], correct: 1 },
            { question: "What is a Liquidity Pool?", options: ["A swimming pool", "Funds locked in a smart contract", "A bank account", "A mining rig"], correct: 1 },
            { question: "What is Yield Farming?", options: ["Growing crops", "Earning rewards for lending crypto", "Mining Bitcoin", "Buying NFTs"], correct: 1 },
            { question: "What is 'Gas' in Ethereum?", options: ["Fuel for cars", "Transaction fees", "Token name", "Mining reward"], correct: 1 },
            { question: "What is a Stablecoin?", options: ["A coin that never moves", "Pegged to a stable asset", "A volatile coin", "A dead coin"], correct: 1 },
            { question: "What is TVL?", options: ["Total Volume Locked", "Total Value Locked", "Total Valid Ledger", "True Value Level"], correct: 1 },
            { question: "What is Impermanent Loss?", options: ["Permanent loss of funds", "Temporary loss from price divergence", "Loss of private key", "Exchange hack"], correct: 1 },
            { question: "What is a DAO?", options: ["Digital Asset Owner", "Decentralized Autonomous Organization", "Direct Access Online", "Data Access Object"], correct: 1 },
            { question: "What is an NFT?", options: ["Non-Fungible Token", "New Fund Transfer", "No Fee Transaction", "Network File Transfer"], correct: 0 },
            { question: "What is a Layer 2 solution?", options: ["A backup blockchain", "Scaling solution on top of Layer 1", "A new coin", "A wallet"], correct: 1 },
            { question: "What is a 'Bridge'?", options: ["Connecting two blockchains", "A roadmap", "A type of wallet", "A mining pool"], correct: 0 },
            { question: "What is 'Slippage'?", options: ["Falling down", "Difference between expected and executed price", "Low volume", "High fees"], correct: 1 },
            { question: "What is a 'Rug Pull'?", options: ["A magic trick", "Developers abandoning a project with funds", "A market crash", "A feature"], correct: 1 },
            { question: "What is 'Staking'?", options: ["Betting", "Locking coins to support network", "Selling coins", "Buying coins"], correct: 1 },
            { question: "What is a Governance Token?", options: ["Used for fees", "Used for voting", "Used for mining", "Used for stability"], correct: 1 },
            { question: "What is an Oracle?", options: ["A fortune teller", "Data feed for smart contracts", "A blockchain", "A wallet"], correct: 1 },
            { question: "What is MetaMask?", options: ["A browser", "A Web3 wallet", "A coin", "A blockchain"], correct: 1 },
            { question: "What is Uniswap?", options: ["A CEX", "A DEX", "A wallet", "A coin"], correct: 1 },
            { question: "What is 'Smart Contract'?", options: ["A legal paper", "Self-executing code", "A smart person", "A phone contract"], correct: 1 }
        ]
    },

    "final-exam": {
        title: "Final Certification Exam",
        duration: "45 min",
        content: "<h3>Final Certification Exam</h3><p>Complete this exam to earn your Crypto Expert Certificate. You need 80% to pass.</p>",
        quiz: [
            { question: "What is the maximum supply of Bitcoin?", options: ["21 Million", "100 Million", "Infinite", "18 Million"], correct: 0 },
            { question: "Which consensus mechanism does Bitcoin use?", options: ["Proof of Stake", "Proof of Work", "Proof of History", "Proof of Authority"], correct: 1 },
            { question: "What is a 'Halving' event?", options: ["Price drops by 50%", "Mining rewards are cut in half", "Supply doubles", "Network shuts down"], correct: 1 },
            { question: "What is the main purpose of Ethereum?", options: ["Digital Gold", "Smart Contract Platform", "Privacy Coin", "Stablecoin"], correct: 1 },
            { question: "What is a 'Seed Phrase' used for?", options: ["Logging in", "Recovering a wallet", "Sending funds", "Mining"], correct: 1 },
            { question: "What is 'Cold Storage'?", options: ["Storing crypto in a fridge", "Offline wallet storage", "Exchange storage", "Cloud storage"], correct: 1 },
            { question: "What is a 'Whitepaper'?", options: ["A blank paper", "Technical document explaining a project", "A legal contract", "A marketing flyer"], correct: 1 },
            { question: "What is 'Market Cap'?", options: ["Price x Supply", "Price / Supply", "Volume x Price", "Total Value Locked"], correct: 0 },
            { question: "What is 'DeFi'?", options: ["Decentralized Finance", "Digital Finance", "Direct Finance", "Daily Finance"], correct: 0 },
            { question: "What is a 'DEX'?", options: ["Decentralized Exchange", "Digital Exchange", "Direct Exchange", "Daily Exchange"], correct: 0 },
            { question: "What is 'Yield Farming'?", options: ["Earning interest on crypto", "Mining Bitcoin", "Buying low selling high", "Creating tokens"], correct: 0 },
            { question: "What is an 'NFT'?", options: ["Non-Fungible Token", "New Fund Token", "No Fee Token", "Network File Token"], correct: 0 },
            { question: "What is 'Gas'?", options: ["Transaction fee", "Fuel", "Token", "Reward"], correct: 0 },
            { question: "What is a 'Stablecoin'?", options: ["Pegged to an asset", "Volatile coin", "Meme coin", "Privacy coin"], correct: 0 },
            { question: "What is 'Slippage'?", options: ["Price difference", "Fee", "Speed", "Volume"], correct: 0 },
            { question: "What is a 'DAO'?", options: ["Decentralized Autonomous Organization", "Digital Asset Owner", "Data Access Object", "Direct Access Online"], correct: 0 },
            { question: "What is 'Phishing'?", options: ["Scam to steal credentials", "Fishing for coins", "Mining", "Trading"], correct: 0 },
            { question: "What is '2FA'?", options: ["Two-Factor Authentication", "Two-Fast Actions", "To For All", "Two Free Assets"], correct: 0 },
            { question: "What is a 'Bull Market'?", options: ["Rising prices", "Falling prices", "Stable prices", "Volatile prices"], correct: 0 },
            { question: "What is 'HODL'?", options: ["Hold On for Dear Life", "Hold On Daily Life", "High On Digital Life", "Hold On Direct Life"], correct: 0 }
        ]
    },

    // ========================================
    // FOREX LESSONS
    // ========================================

    // Level 1: Forex Foundations
    "21": {
        title: "What is Forex Trading?",
        duration: "10 min",
        content: `
            <h3>Introduction to Forex Trading</h3>
            <p>Forex (Foreign Exchange) is the largest financial market in the world, with over $7 trillion traded daily.</p>
            
            <h4>What is Forex?</h4>
            <div class="definition-box">
                <p><strong>Forex</strong> is the global marketplace for buying and selling currencies.</p>
                <p><strong>Example:</strong> Exchanging USD for EUR when traveling to Europe</p>
            </div>
            
            <h4>How Forex Works</h4>
            <p>Currencies are traded in pairs. When you buy one currency, you simultaneously sell another.</p>
            <ul>
                <li><strong>EUR/USD = 1.10:</strong> 1 Euro equals 1.10 US Dollars</li>
                <li><strong>If EUR/USD rises to 1.12:</strong> Euro strengthened, Dollar weakened</li>
            </ul>
            
            <h4>Key Characteristics</h4>
            <table>
                <tr><th>Feature</th><th>Description</th></tr>
                <tr><td>Market Size</td><td>$7+ trillion daily volume</td></tr>
                <tr><td>Trading Hours</td><td>24 hours, 5 days a week</td></tr>
                <tr><td>Liquidity</td><td>Extremely high</td></tr>
                <tr><td>Leverage</td><td>Up to 1:500 (risky!)</td></tr>
            </table>
            
            <h4>Why Trade Forex?</h4>
            <ul>
                <li>✅ High liquidity - easy to enter/exit trades</li>
                <li>✅ 24/5 market - trade anytime</li>
                <li>✅ Low capital requirements</li>
                <li>✅ Profit from rising or falling markets</li>
                <li>❌ High risk due to leverage</li>
                <li>❌ Complex for beginners</li>
            </ul>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Forex is the world's largest financial market</li>
                    <li>Currencies trade in pairs</li>
                    <li>Market is open 24/5</li>
                    <li>High leverage = high risk</li>
                </ul>
            </div>
        `,
        video: {
            id: 'lesson21-video',
            type: 'youtube',
            videoId: 'rYQgy8QDEBI', // Placeholder: Replace with specific Forex video
            title: 'What is Forex Trading?',
            description: 'A comprehensive introduction to the Foreign Exchange market and how it works.',
            duration: '10:00'
        },
        quiz: [
            {
                question: "What is Forex?",
                options: ["Stock market", "Foreign exchange market", "Cryptocurrency market", "Bond market"],
                correct: 1
            },
            {
                question: "How many hours is the forex market open?",
                options: ["8 hours", "12 hours", "24 hours", "16 hours"],
                correct: 2
            }
        ]
    },

    "22": {
        title: "Currency Pairs Explained",
        duration: "15 min",
        content: `
            <h3>Understanding Currency Pairs</h3>
            <p>In forex, you always trade one currency against another, forming a currency pair.</p>
            
            <h4>Currency Pair Structure</h4>
            <div class="info-box">
                <p><strong>EUR/USD = 1.1000</strong></p>
                <ul>
                    <li><strong>Base Currency (EUR):</strong> The first currency (what you're buying/selling)</li>
                    <li><strong>Quote Currency (USD):</strong> The second currency (what you're paying with)</li>
                    <li><strong>Exchange Rate:</strong> 1 EUR = 1.10 USD</li>
                </ul>
            </div>
            
            <h4>Types of Currency Pairs</h4>
            
            <div class="pair-type">
                <h5>💎 Major Pairs</h5>
                <p>Most traded pairs, all include USD</p>
                <ul>
                    <li>EUR/USD - Euro/US Dollar (most traded)</li>
                    <li>GBP/USD - British Pound/US Dollar</li>
                    <li>USD/JPY - US Dollar/Japanese Yen</li>
                    <li>USD/CHF - US Dollar/Swiss Franc</li>
                </ul>
                <p class="pros">✅ Highest liquidity, lowest spreads</p>
            </div>
            
            <div class="pair-type">
                <h5>🌍 Minor Pairs (Cross Pairs)</h5>
                <p>Don't include USD</p>
                <ul>
                    <li>EUR/GBP - Euro/British Pound</li>
                    <li>EUR/JPY - Euro/Japanese Yen</li>
                    <li>GBP/JPY - British Pound/Japanese Yen</li>
                </ul>
                <p class="cons">❌ Wider spreads than majors</p>
            </div>
            
            <div class="pair-type">
                <h5>🌴 Exotic Pairs</h5>
                <p>Include one major and one emerging market currency</p>
                <ul>
                    <li>USD/TRY - US Dollar/Turkish Lira</li>
                    <li>EUR/ZAR - Euro/South African Rand</li>
                    <li>GBP/MXN - British Pound/Mexican Peso</li>
                </ul>
                <p class="cons">❌ Very wide spreads, high volatility</p>
            </div>
            
            <h4>Reading Currency Pairs</h4>
            <div class="example-box">
                <h5>Example: EUR/USD = 1.1000</h5>
                <p><strong>Buying EUR/USD:</strong> You buy Euros, sell Dollars</p>
                <p><strong>If price rises to 1.1100:</strong> Euro strengthened, you profit</p>
                <p><strong>If price falls to 1.0900:</strong> Euro weakened, you lose</p>
            </div>
            
            <h4>Currency Nicknames</h4>
            <table>
                <tr><th>Pair</th><th>Nickname</th></tr>
                <tr><td>GBP/USD</td><td>Cable</td></tr>
                <tr><td>EUR/USD</td><td>Fiber</td></tr>
                <tr><td>USD/JPY</td><td>Ninja</td></tr>
                <tr><td>GBP/JPY</td><td>Guppy</td></tr>
                <tr><td>AUD/USD</td><td>Aussie</td></tr>
                <tr><td>NZD/USD</td><td>Kiwi</td></tr>
            </table>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Currency pairs have a base and quote currency</li>
                    <li>Major pairs are most liquid and have lowest spreads</li>
                    <li>Exotic pairs are riskier with wider spreads</li>
                    <li>Start with major pairs as a beginner</li>
                </ul>
            </div>
        `,
        video: {
            id: 'lesson22-video',
            type: 'youtube',
            videoId: 'rYQgy8QDEBI', // Placeholder
            title: 'Understanding Currency Pairs',
            description: 'Learn how to read currency pairs, base vs quote currencies, and the different types of pairs.',
            duration: '15:00'
        },
        quiz: [
            {
                question: "In EUR/USD, which is the base currency?",
                options: ["USD", "EUR", "Both", "Neither"],
                correct: 1
            },
            {
                question: "Which type of pair has the lowest spreads?",
                options: ["Exotic pairs", "Minor pairs", "Major pairs", "All the same"],
                correct: 2
            }
        ]
    },

    "23": {
        title: "Market Sessions & Hours",
        duration: "12 min",
        content: `
            <h3>Forex Market Sessions</h3>
            <p>The forex market operates 24 hours a day, 5 days a week, across four major trading sessions.</p>
            
            <h4>The Four Major Sessions</h4>
            
            <table>
                <tr><th>Session</th><th>Opens (GMT)</th><th>Closes (GMT)</th><th>Characteristics</th></tr>
                <tr><td>Sydney</td><td>22:00</td><td>07:00</td><td>Quietest session</td></tr>
                <tr><td>Tokyo</td><td>00:00</td><td>09:00</td><td>Asian market activity</td></tr>
                <tr><td>London</td><td>08:00</td><td>17:00</td><td>Highest volume</td></tr>
                <tr><td>New York</td><td>13:00</td><td>22:00</td><td>High volatility</td></tr>
            </table>
            
            <h4>Session Overlaps</h4>
            <div class="overlap-box">
                <h5>🔥 London/New York Overlap (13:00-17:00 GMT)</h5>
                <p><strong>Most active period!</strong></p>
                <ul>
                    <li>Highest trading volume</li>
                    <li>Tightest spreads</li>
                    <li>Best liquidity</li>
                    <li>Major news releases</li>
                </ul>
                <p class="pros">✅ Best time for day trading</p>
            </div>
            
            <div class="overlap-box">
                <h5>Tokyo/London Overlap (08:00-09:00 GMT)</h5>
                <p>Moderate activity, good for EUR/JPY, GBP/JPY</p>
            </div>
            
            <h4>Best Times to Trade</h4>
            <ul>
                <li><strong>High Volatility:</strong> London/NY overlap</li>
                <li><strong>Trending Markets:</strong> London session</li>
                <li><strong>Range Trading:</strong> Asian session</li>
                <li><strong>News Trading:</strong> London open, NY open</li>
            </ul>
            
            <h4>Times to Avoid</h4>
            <div class="warning-box">
                <h5>⚠️ Low Liquidity Periods:</h5>
                <ul>
                    <li><strong>Friday afternoons:</strong> Positions closing for weekend</li>
                    <li><strong>Major holidays:</strong> Christmas, New Year</li>
                    <li><strong>Asian session (for majors):</strong> Lower volume</li>
                    <li><strong>Sunday open:</strong> Gaps and low liquidity</li>
                </ul>
            </div>
            
            <h4>Session Characteristics</h4>
            <div class="session-info">
                <h5>🌏 Asian Session</h5>
                <p>Range-bound, lower volatility, good for JPY pairs</p>
            </div>
            
            <div class="session-info">
                <h5>🌍 European Session</h5>
                <p>High volume, trending moves, best for EUR, GBP pairs</p>
            </div>
            
            <div class="session-info">
                <h5>🌎 American Session</h5>
                <p>High volatility, economic news, good for USD pairs</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Forex market is open 24 hours, Monday-Friday</li>
                    <li>London/NY overlap is most active</li>
                    <li>Different sessions suit different strategies</li>
                    <li>Avoid trading during low liquidity periods</li>
                </ul>
            </div>
        `,
        video: {
            id: 'lesson23-video',
            type: 'youtube',
            videoId: 'rYQgy8QDEBI', // Placeholder
            title: 'Forex Market Sessions Explained',
            description: 'Discover the best times to trade and the characteristics of each major market session.',
            duration: '12:00'
        },
        quiz: [
            {
                question: "Which session overlap has the highest volume?",
                options: ["Tokyo/London", "London/New York", "Sydney/Tokyo", "All equal"],
                correct: 1
            },
            {
                question: "When should you avoid trading?",
                options: ["London open", "NY open", "Friday afternoons", "London/NY overlap"],
                correct: 2
            }
        ]
    },

    "24": {
        title: "Pips, Lots & Leverage",
        duration: "18 min",
        content: `
            <h3>Understanding Pips, Lots, and Leverage</h3>
            <p>These are fundamental concepts you must understand before trading forex.</p>
            
            <h4>What is a Pip?</h4>
            <div class="definition-box">
                <p><strong>Pip</strong> = "Percentage in Point" - the smallest price movement</p>
                <p><strong>For most pairs:</strong> 0.0001 (4th decimal place)</p>
                <p><strong>For JPY pairs:</strong> 0.01 (2nd decimal place)</p>
            </div>
            
            <div class="example-box">
                <h5>Examples:</h5>
                <p>EUR/USD moves from 1.1000 to 1.1001 = <strong>1 pip</strong></p>
                <p>EUR/USD moves from 1.1000 to 1.1050 = <strong>50 pips</strong></p>
                <p>USD/JPY moves from 110.00 to 110.01 = <strong>1 pip</strong></p>
            </div>
            
            <h4>Pip Value</h4>
            <p>The monetary value of a pip depends on:</p>
            <ul>
                <li>Lot size</li>
                <li>Currency pair</li>
                <li>Account currency</li>
            </ul>
            
            <h4>Understanding Lots</h4>
            <table>
                <tr><th>Lot Type</th><th>Units</th><th>Pip Value (EUR/USD)</th></tr>
                <tr><td>Standard Lot</td><td>100,000</td><td>$10 per pip</td></tr>
                <tr><td>Mini Lot</td><td>10,000</td><td>$1 per pip</td></tr>
                <tr><td>Micro Lot</td><td>1,000</td><td>$0.10 per pip</td></tr>
                <tr><td>Nano Lot</td><td>100</td><td>$0.01 per pip</td></tr>
            </table>
            
            <div class="example-box">
                <h5>Profit/Loss Calculation:</h5>
                <p><strong>Trade:</strong> Buy 1 mini lot EUR/USD at 1.1000</p>
                <p><strong>Close:</strong> Sell at 1.1050 (50 pips profit)</p>
                <p><strong>Profit:</strong> 50 pips × $1 = $50</p>
            </div>
            
            <h4>What is Leverage?</h4>
            <div class="definition-box">
                <p><strong>Leverage</strong> allows you to control large positions with small capital</p>
                <p><strong>Example:</strong> 1:100 leverage = $1,000 controls $100,000</p>
            </div>
            
            <h4>Common Leverage Ratios</h4>
            <table>
                <tr><th>Leverage</th><th>Margin Required</th><th>Example</th></tr>
                <tr><td>1:50</td><td>2%</td><td>$2,000 to control $100,000</td></tr>
                <tr><td>1:100</td><td>1%</td><td>$1,000 to control $100,000</td></tr>
                <tr><td>1:200</td><td>0.5%</td><td>$500 to control $100,000</td></tr>
                <tr><td>1:500</td><td>0.2%</td><td>$200 to control $100,000</td></tr>
            </table>
            
            <div class="warning-box">
                <h5>⚠️ Leverage is a Double-Edged Sword!</h5>
                <p><strong>Amplifies profits AND losses</strong></p>
                <div class="example-box">
                    <p><strong>With 1:100 leverage:</strong></p>
                    <p>Account: $1,000</p>
                    <p>Position: $100,000 (1 standard lot EUR/USD)</p>
                    <p>50 pip move = $500 profit/loss (50% of account!)</p>
                </div>
                <p><strong>Risk:</strong> Can lose entire account quickly</p>
            </div>
            
            <h4>Margin and Margin Call</h4>
            <div class="info-box">
                <p><strong>Margin:</strong> The amount of money required to open a position</p>
                <p><strong>Free Margin:</strong> Money available for new trades</p>
                <p><strong>Margin Level:</strong> (Equity / Used Margin) × 100%</p>
                <p><strong>Margin Call:</strong> When margin level drops too low (typically 100%)</p>
                <p><strong>Stop Out:</strong> Broker automatically closes positions (typically 50%)</p>
            </div>
            
            <h4>Safe Leverage Practices</h4>
            <ul>
                <li>✅ Use low leverage (1:10 to 1:30 for beginners)</li>
                <li>✅ Never risk more than 1-2% per trade</li>
                <li>✅ Always use stop-losses</li>
                <li>✅ Understand margin requirements</li>
                <li>❌ Don't use maximum leverage</li>
                <li>❌ Don't over-leverage your account</li>
            </ul>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>A pip is the smallest price movement (usually 0.0001)</li>
                    <li>Lot size determines pip value</li>
                    <li>Leverage amplifies both profits and losses</li>
                    <li>High leverage is extremely risky</li>
                    <li>Always use proper risk management</li>
                </ul>
            </div>
        `,
        video: {
            id: 'lesson24-video',
            type: 'youtube',
            videoId: 'rYQgy8QDEBI', // Placeholder
            title: 'Pips, Lots, and Leverage',
            description: 'Master the math of forex trading: calculating pips, choosing lot sizes, and using leverage safely.',
            duration: '18:00'
        },
        quiz: [
            {
                question: "How many units are in a standard lot?",
                options: ["1,000", "10,000", "100,000", "1,000,000"],
                correct: 2
            },
            {
                question: "What does 1:100 leverage mean?",
                options: ["100% profit", "$1 controls $100", "100 pips", "100% margin"],
                correct: 1
            }
        ]
    },

    "25": {
        title: "Choosing a Forex Broker",
        duration: "15 min",
        content: `
            <h3>Selecting the Right Forex Broker</h3>
            <p>Your broker is your gateway to the forex market. Choosing the right one is crucial for success.</p>
            
            <h4>Key Factors to Consider</h4>
            
            <div class="factor-card">
                <h5>🛡️ Regulation</h5>
                <p><strong>Most Important Factor!</strong></p>
                <p>Ensure broker is regulated by reputable authorities:</p>
                <ul>
                    <li><strong>US:</strong> CFTC, NFA</li>
                    <li><strong>UK:</strong> FCA</li>
                    <li><strong>Australia:</strong> ASIC</li>
                    <li><strong>EU:</strong> CySEC, BaFin</li>
                </ul>
                <p class="warning">⚠️ Avoid unregulated brokers!</p>
            </div>
            
            <div class="factor-card">
                <h5>💰 Trading Costs</h5>
                <p><strong>Spreads:</strong> Difference between bid/ask price</p>
                <ul>
                    <li><strong>Fixed spreads:</strong> Stay constant</li>
                    <li><strong>Variable spreads:</strong> Change with market conditions</li>
                    <li><strong>Typical EUR/USD spread:</strong> 0.5-2 pips</li>
                </ul>
                <p><strong>Commissions:</strong> Some brokers charge per trade</p>
                <p><strong>Overnight fees (Swap):</strong> For holding positions overnight</p>
            </div>
            
            <div class="factor-card">
                <h5>⚡ Execution Speed</h5>
                <p>Fast execution prevents slippage</p>
                <p><strong>Slippage:</strong> Difference between expected and actual price</p>
                <p class="pros">✅ Look for brokers with <100ms execution</p>
            </div>
            
            <div class="factor-card">
                <h5>💻 Trading Platform</h5>
                <p>Popular platforms:</p>
                <ul>
                    <li><strong>MetaTrader 4 (MT4):</strong> Most popular, many indicators</li>
                    <li><strong>MetaTrader 5 (MT5):</strong> Newer, more features</li>
                    <li><strong>cTrader:</strong> Modern, intuitive</li>
                    <li><strong>Proprietary:</strong> Broker's own platform</li>
                </ul>
            </div>
            
            <h4>Broker Types</h4>
            
            <table>
                <tr><th>Type</th><th>How It Works</th><th>Pros/Cons</th></tr>
                <tr>
                    <td>Market Maker</td>
                    <td>Broker takes opposite side of your trade</td>
                    <td>✅ Fixed spreads<br>❌ Potential conflict of interest</td>
                </tr>
                <tr>
                    <td>ECN/STP</td>
                    <td>Direct market access, no dealing desk</td>
                    <td>✅ No conflict<br>✅ Better prices<br>❌ Variable spreads</td>
                </tr>
            </table>
            
            <h4>Account Types</h4>
            <ul>
                <li><strong>Standard:</strong> Normal spreads, no commission</li>
                <li><strong>ECN/Raw:</strong> Tight spreads + commission</li>
                <li><strong>Islamic (Swap-Free):</strong> No overnight interest</li>
                <li><strong>Cent:</strong> Trade in cents (for beginners)</li>
            </ul>
            
            <h4>Red Flags to Avoid</h4>
            <div class="warning-box">
                <h5>🚩 Warning Signs:</h5>
                <ul>
                    <li>❌ No regulation</li>
                    <li>❌ Guaranteed profits promises</li>
                    <li>❌ Withdrawal difficulties</li>
                    <li>❌ Requotes and slippage constantly</li>
                    <li>❌ Pressure to deposit more</li>
                    <li>❌ Unrealistic bonuses</li>
                </ul>
            </div>
            
            <h4>Recommended Brokers (Examples)</h4>
            <ul>
                <li><strong>IC Markets:</strong> Low spreads, ECN</li>
                <li><strong>Pepperstone:</strong> Good for beginners</li>
                <li><strong>OANDA:</strong> Highly regulated, reliable</li>
                <li><strong>Interactive Brokers:</strong> Professional traders</li>
            </ul>
            <p><small>*Always do your own research before choosing a broker</small></p>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Regulation is the most important factor</li>
                    <li>Compare spreads and commissions</li>
                    <li>Test platform with demo account first</li>
                    <li>Avoid brokers with red flags</li>
                    <li>Read reviews and do thorough research</li>
                </ul>
            </div>
        `,
        video: {
            id: 'lesson25-video',
            type: 'youtube',
            videoId: 'rYQgy8QDEBI', // Placeholder
            title: 'How to Choose a Forex Broker',
            description: 'A guide to selecting a safe, regulated, and cost-effective forex broker for your trading journey.',
            duration: '15:00'
        },
        quiz: [
            {
                question: "What is the most important factor when choosing a broker?",
                options: ["Low spreads", "Regulation", "Bonuses", "Platform design"],
                correct: 1
            },
            {
                question: "What is slippage?",
                options: ["Trading fee", "Difference between expected and actual price", "Spread", "Commission"],
                correct: 1
            }
        ]
    }
    ,

    // Level 2: Technical Analysis
    "26": {
        title: "Trading Platforms Basics",
        duration: "20 min",
        content: `
            <h3>Mastering Trading Platforms</h3>
            <p>Your trading platform is your command center. Understanding it thoroughly is essential for successful trading.</p>
            
            <h4>MetaTrader 4 (MT4)</h4>
            <div class="platform-info">
                <p>Most popular forex platform worldwide</p>
                <p class="pros">✅ User-friendly interface</p>
                <p class="pros">✅ Thousands of indicators</p>
                <p class="pros">✅ Automated trading (Expert Advisors)</p>
                <p class="pros">✅ Mobile apps available</p>
            </div>
            
            <h4>Key Platform Features</h4>
            <ul>
                <li><strong>Market Watch:</strong> Live currency pair prices</li>
                <li><strong>Charts:</strong> Price visualization and analysis</li>
                <li><strong>Navigator:</strong> Accounts, indicators, Expert Advisors</li>
                <li><strong>Terminal:</strong> Trade history, account balance</li>
                <li><strong>One-Click Trading:</strong> Fast order execution</li>
            </ul>
            
            <h4>Placing Orders</h4>
            <table>
                <tr><th>Order Type</th><th>Description</th><th>When to Use</th></tr>
                <tr><td>Market Order</td><td>Execute immediately at current price</td><td>Enter/exit now</td></tr>
                <tr><td>Pending Order</td><td>Execute when price reaches level</td><td>Set and forget</td></tr>
                <tr><td>Stop Loss</td><td>Close at loss level</td><td>Risk management</td></tr>
                <tr><td>Take Profit</td><td>Close at profit level</td><td>Lock in gains</td></tr>
            </table>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>MT4 is the industry standard platform</li>
                    <li>Practice on demo account first</li>
                    <li>Always use stop-loss orders</li>
                    <li>Customize platform to your needs</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is a market order?",
                options: ["Order at specific price", "Execute immediately at current price", "Automatic order", "Stop loss"],
                correct: 1
            },
            {
                question: "What should you always use for risk management?",
                options: ["Market orders", "Pending orders", "Stop-loss orders", "Take profit only"],
                correct: 2
            }
        ]
    },

    "27": {
        title: "Candlestick Patterns",
        duration: "25 min",
        content: `
            <h3>Reading Candlestick Patterns</h3>
            <p>Candlestick patterns reveal market psychology and potential price movements.</p>
            
            <h4>Single Candle Patterns</h4>
            <div class="pattern">
                <h5>🔨 Hammer (Bullish)</h5>
                <p>Small body, long lower wick, appears at downtrend bottom</p>
                <p><strong>Signal:</strong> Potential reversal upward</p>
            </div>
            
            <div class="pattern">
                <h5>🌠 Shooting Star (Bearish)</h5>
                <p>Small body, long upper wick, appears at uptrend top</p>
                <p><strong>Signal:</strong> Potential reversal downward</p>
            </div>
            
            <h4>Multi-Candle Patterns</h4>
            <div class="pattern">
                <h5>📊 Engulfing Pattern</h5>
                <p><strong>Bullish:</strong> Large green candle engulfs previous red</p>
                <p><strong>Bearish:</strong> Large red candle engulfs previous green</p>
            </div>
            
            <div class="pattern">
                <h5>⭐ Morning/Evening Star</h5>
                <p>Three-candle reversal patterns</p>
                <p><strong>Morning Star:</strong> Bullish reversal</p>
                <p><strong>Evening Star:</strong> Bearish reversal</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Candlesticks show market sentiment</li>
                    <li>Patterns work best at key levels</li>
                    <li>Always confirm with other indicators</li>
                    <li>Practice pattern recognition daily</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What does a hammer candlestick indicate?",
                options: ["Bearish reversal", "Bullish reversal", "Continuation", "Neutral"],
                correct: 1
            },
            {
                question: "Where do candlestick patterns work best?",
                options: ["Anywhere", "At key support/resistance levels", "Only in uptrends", "Only in downtrends"],
                correct: 1
            }
        ]
    },

    "28": {
        title: "Support & Resistance",
        duration: "20 min",
        content: `
            <h3>Understanding Support and Resistance</h3>
            <p>Support and resistance are the foundation of technical analysis.</p>
            
            <h4>Support Levels</h4>
            <div class="info-box">
                <p><strong>Support:</strong> Price level where buying pressure prevents further decline</p>
                <p>Think of it as a "floor" that price bounces off</p>
            </div>
            
            <h4>Resistance Levels</h4>
            <div class="info-box">
                <p><strong>Resistance:</strong> Price level where selling pressure prevents further rise</p>
                <p>Think of it as a "ceiling" that price can't break through</p>
            </div>
            
            <h4>Role Reversal</h4>
            <p>When support breaks, it becomes resistance. When resistance breaks, it becomes support.</p>
            
            <h4>Types of Support/Resistance</h4>
            <ul>
                <li><strong>Horizontal:</strong> Clear price levels</li>
                <li><strong>Diagonal:</strong> Trendlines</li>
                <li><strong>Dynamic:</strong> Moving averages</li>
                <li><strong>Psychological:</strong> Round numbers (1.2000, 1.3000)</li>
            </ul>
            
            <h4>Trading Strategy</h4>
            <div class="strategy-box">
                <p><strong>Buy at support:</strong> When price bounces up</p>
                <p><strong>Sell at resistance:</strong> When price bounces down</p>
                <p><strong>Breakout trading:</strong> Enter when level breaks with volume</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Support and resistance are key price levels</li>
                    <li>Broken support becomes resistance (and vice versa)</li>
                    <li>Use multiple timeframes to identify levels</li>
                    <li>Combine with other analysis for confirmation</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is support?",
                options: ["Price ceiling", "Price floor where buying prevents decline", "Resistance level", "Moving average"],
                correct: 1
            },
            {
                question: "What happens when support breaks?",
                options: ["Becomes stronger support", "Becomes resistance", "Disappears", "Nothing"],
                correct: 1
            }
        ]
    },

    "29": {
        title: "Trend Analysis",
        duration: "22 min",
        content: `
            <h3>Identifying and Trading Trends</h3>
            <p>"The trend is your friend" - one of the most important trading principles.</p>
            
            <h4>Types of Trends</h4>
            <table>
                <tr><th>Trend</th><th>Characteristics</th><th>Strategy</th></tr>
                <tr><td>Uptrend</td><td>Higher highs, higher lows</td><td>Buy dips</td></tr>
                <tr><td>Downtrend</td><td>Lower highs, lower lows</td><td>Sell rallies</td></tr>
                <tr><td>Sideways</td><td>Range-bound</td><td>Buy support, sell resistance</td></tr>
            </table>
            
            <h4>Drawing Trendlines</h4>
            <div class="info-box">
                <p><strong>Uptrend line:</strong> Connect two or more lows</p>
                <p><strong>Downtrend line:</strong> Connect two or more highs</p>
                <p><strong>Rule:</strong> Need at least 2 touches to confirm</p>
            </div>
            
            <h4>Trend Strength</h4>
            <ul>
                <li><strong>Strong trend:</strong> Steep angle, few pullbacks</li>
                <li><strong>Weak trend:</strong> Shallow angle, many pullbacks</li>
                <li><strong>Trend exhaustion:</strong> Slowing momentum, divergence</li>
            </ul>
            
            <h4>Trading with the Trend</h4>
            <div class="strategy-box">
                <h5>Golden Rules:</h5>
                <ul>
                    <li>Trade in direction of higher timeframe trend</li>
                    <li>Wait for pullbacks to enter</li>
                    <li>Don't fight the trend</li>
                    <li>Exit when trend shows signs of reversal</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Always identify the trend first</li>
                    <li>Trade with the trend, not against it</li>
                    <li>Use multiple timeframes</li>
                    <li>Trendlines help identify entry/exit points</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What characterizes an uptrend?",
                options: ["Lower highs and lows", "Higher highs and higher lows", "Sideways movement", "High volume"],
                correct: 1
            },
            {
                question: "What is the golden rule of trend trading?",
                options: ["Fight the trend", "Trade with the trend", "Ignore trends", "Only trade reversals"],
                correct: 1
            }
        ]
    },

    "30": {
        title: "Technical Indicators",
        duration: "30 min",
        content: `
            <h3>Essential Technical Indicators</h3>
            <p>Indicators help confirm trends, identify reversals, and time entries/exits.</p>
            
            <h4>Moving Averages</h4>
            <div class="indicator">
                <h5>📈 Simple Moving Average (SMA)</h5>
                <p>Average price over specific period</p>
                <p><strong>Popular periods:</strong> 20, 50, 100, 200</p>
                <p><strong>Use:</strong> Identify trend direction, support/resistance</p>
            </div>
            
            <div class="indicator">
                <h5>📊 Exponential Moving Average (EMA)</h5>
                <p>Gives more weight to recent prices</p>
                <p><strong>Advantage:</strong> Reacts faster to price changes</p>
            </div>
            
            <h4>Momentum Indicators</h4>
            <div class="indicator">
                <h5>💪 RSI (Relative Strength Index)</h5>
                <p>Measures momentum on 0-100 scale</p>
                <p><strong>Overbought:</strong> >70</p>
                <p><strong>Oversold:</strong> <30</p>
                <p><strong>Divergence:</strong> Price vs RSI moving opposite = reversal signal</p>
            </div>
            
            <div class="indicator">
                <h5>📉 MACD</h5>
                <p>Moving Average Convergence Divergence</p>
                <p><strong>Bullish:</strong> MACD crosses above signal line</p>
                <p><strong>Bearish:</strong> MACD crosses below signal line</p>
            </div>
            
            <h4>Volatility Indicators</h4>
            <div class="indicator">
                <h5>📊 Bollinger Bands</h5>
                <p>Shows volatility and potential reversal points</p>
                <p><strong>Squeeze:</strong> Low volatility, breakout coming</p>
                <p><strong>Touch upper band:</strong> Overbought</p>
                <p><strong>Touch lower band:</strong> Oversold</p>
            </div>
            
            <h4>Best Practices</h4>
            <div class="warning-box">
                <h5>⚠️ Indicator Tips:</h5>
                <ul>
                    <li>Don't use too many (3-4 maximum)</li>
                    <li>Combine different types (trend + momentum)</li>
                    <li>No indicator is 100% accurate</li>
                    <li>Use with price action and support/resistance</li>
                    <li>Backtest before using live</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Indicators confirm what price is telling you</li>
                    <li>Moving averages identify trends</li>
                    <li>RSI and MACD show momentum</li>
                    <li>Combine multiple indicators for confirmation</li>
                    <li>Price action is more important than indicators</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What does RSI above 70 indicate?",
                options: ["Oversold", "Overbought", "Neutral", "Strong trend"],
                correct: 1
            },
            {
                question: "What is the best practice for using indicators?",
                options: ["Use as many as possible", "Use 3-4 maximum and combine types", "Only use one", "Ignore them"],
                correct: 1
            }
        ]
    },

    "31": {
        title: "Chart Patterns",
        duration: "28 min",
        content: `
            <h3>Recognizing Chart Patterns</h3>
            <p>Chart patterns are formations that predict future price movements with high probability.</p>
            
            <h4>Reversal Patterns</h4>
            <div class="pattern">
                <h5>👤 Head and Shoulders (Bearish)</h5>
                <p>Three peaks: left shoulder, head (highest), right shoulder</p>
                <p><strong>Signal:</strong> Uptrend reversal to downtrend</p>
                <p><strong>Entry:</strong> Break below neckline</p>
            </div>
            
            <div class="pattern">
                <h5>🔄 Inverse Head and Shoulders (Bullish)</h5>
                <p>Upside-down H&S pattern</p>
                <p><strong>Signal:</strong> Downtrend reversal to uptrend</p>
            </div>
            
            <div class="pattern">
                <h5>⏫ Double Top (Bearish)</h5>
                <p>Two peaks at similar level</p>
                <p><strong>Signal:</strong> Resistance holding, reversal down</p>
            </div>
            
            <div class="pattern">
                <h5>⏬ Double Bottom (Bullish)</h5>
                <p>Two troughs at similar level</p>
                <p><strong>Signal:</strong> Support holding, reversal up</p>
            </div>
            
            <h4>Continuation Patterns</h4>
            <div class="pattern">
                <h5>🚩 Bull Flag</h5>
                <p>Sharp rise, then consolidation in downward channel</p>
                <p><strong>Signal:</strong> Uptrend continues after breakout</p>
            </div>
            
            <div class="pattern">
                <h5>🏴 Bear Flag</h5>
                <p>Sharp fall, then consolidation in upward channel</p>
                <p><strong>Signal:</strong> Downtrend continues after breakdown</p>
            </div>
            
            <div class="pattern">
                <h5>📐 Triangle Patterns</h5>
                <p><strong>Ascending:</strong> Bullish (higher lows, flat top)</p>
                <p><strong>Descending:</strong> Bearish (lower highs, flat bottom)</p>
                <p><strong>Symmetrical:</strong> Neutral (converging trendlines)</p>
            </div>
            
            <h4>Trading Patterns</h4>
            <div class="strategy-box">
                <h5>Pattern Trading Rules:</h5>
                <ol>
                    <li>Wait for pattern completion</li>
                    <li>Confirm with volume (breakouts need volume)</li>
                    <li>Enter on breakout/breakdown</li>
                    <li>Set stop-loss beyond pattern boundary</li>
                    <li>Measure target using pattern height</li>
                </ol>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Patterns repeat because human psychology repeats</li>
                    <li>Reversal patterns signal trend changes</li>
                    <li>Continuation patterns signal trend persistence</li>
                    <li>Always wait for confirmation</li>
                    <li>Use proper risk management</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What does a Head and Shoulders pattern indicate?",
                options: ["Bullish continuation", "Bearish reversal", "Bullish reversal", "Neutral"],
                correct: 1
            },
            {
                question: "What is a Bull Flag?",
                options: ["Reversal pattern", "Bearish continuation", "Bullish continuation", "Neutral pattern"],
                correct: 2
            }
        ]
    },

    "32": {
        title: "Fibonacci Retracements",
        duration: "25 min",
        content: `
            <h3>Using Fibonacci Retracements</h3>
            <p>Fibonacci levels help identify potential support/resistance and entry points.</p>
            
            <h4>Key Fibonacci Levels</h4>
            <table>
                <tr><th>Level</th><th>Percentage</th><th>Significance</th></tr>
                <tr><td>0%</td><td>Start</td><td>Trend beginning</td></tr>
                <tr><td>23.6%</td><td>Shallow</td><td>Minor retracement</td></tr>
                <tr><td>38.2%</td><td>Moderate</td><td>Common retracement</td></tr>
                <tr><td>50%</td><td>Half</td><td>Psychological level</td></tr>
                <tr><td>61.8%</td><td>Golden</td><td>Most important level</td></tr>
                <tr><td>78.6%</td><td>Deep</td><td>Last chance before reversal</td></tr>
                <tr><td>100%</td><td>Full</td><td>Complete retracement</td></tr>
            </table>
            
            <h4>How to Use Fibonacci</h4>
            <div class="step-guide">
                <ol>
                    <li><strong>Identify trend:</strong> Find clear swing high and low</li>
                    <li><strong>Draw tool:</strong> From swing low to high (uptrend) or high to low (downtrend)</li>
                    <li><strong>Watch levels:</strong> Price often retraces to Fib levels</li>
                    <li><strong>Enter trade:</strong> When price bounces off key level</li>
                    <li><strong>Set stop:</strong> Below/above next Fib level</li>
                </ol>
            </div>
            
            <h4>Trading Strategy</h4>
            <div class="strategy-box">
                <p><strong>In uptrend:</strong> Buy at 38.2%, 50%, or 61.8% retracement</p>
                <p><strong>In downtrend:</strong> Sell at 38.2%, 50%, or 61.8% retracement</p>
                <p><strong>Confirmation:</strong> Look for candlestick patterns or indicator signals at Fib levels</p>
            </div>
            
            <h4>Fibonacci Extensions</h4>
            <p>Used to project profit targets beyond 100%</p>
            <ul>
                <li><strong>127.2%:</strong> First target</li>
                <li><strong>161.8%:</strong> Common target</li>
                <li><strong>261.8%:</strong> Extended target</li>
            </ul>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>61.8% is the most important Fibonacci level</li>
                    <li>Use Fib with support/resistance for confirmation</li>
                    <li>Works best in trending markets</li>
                    <li>Combine with other technical analysis</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is the most important Fibonacci level?",
                options: ["23.6%", "38.2%", "50%", "61.8%"],
                correct: 3
            },
            {
                question: "When do you use Fibonacci retracements?",
                options: ["In sideways markets", "In trending markets", "Never", "Only in downtrends"],
                correct: 1
            }
        ]
    },

    // Level 3: Risk Management & Strategy
    "33": {
        title: "Risk Management Fundamentals",
        duration: "30 min",
        content: `
            <h3>Forex Risk Management Essentials</h3>
            <p>Risk management is the difference between profitable traders and those who blow their accounts.</p>
            
            <h4>The 1-2% Rule</h4>
            <div class="info-box">
                <p><strong>Never risk more than 1-2% of your account on a single trade</strong></p>
                <p>Example: $10,000 account = Maximum $200 risk per trade</p>
            </div>
            
            <h4>Position Sizing Formula</h4>
            <div class="formula-box">
                <p><strong>Position Size = (Account Risk $) / (Stop Loss in pips × Pip Value)</strong></p>
                <div class="example-box">
                    <p>Account: $10,000</p>
                    <p>Risk: 2% = $200</p>
                    <p>Stop Loss: 50 pips</p>
                    <p>Pip Value: $1 (mini lot)</p>
                    <p><strong>Position Size = $200 / (50 × $1) = 4 mini lots</strong></p>
                </div>
            </div>
            
            <h4>Stop-Loss Placement</h4>
            <ul>
                <li><strong>Technical stops:</strong> Below support/above resistance</li>
                <li><strong>Percentage stops:</strong> Fixed % from entry</li>
                <li><strong>Volatility stops:</strong> Based on ATR (Average True Range)</li>
                <li><strong>Time stops:</strong> Exit after specific time period</li>
            </ul>
            
            <h4>Common Mistakes</h4>
            <div class="warning-box">
                <h5>❌ Avoid These:</h5>
                <ul>
                    <li>Moving stop-loss to avoid being stopped out</li>
                    <li>Risking too much per trade (>2%)</li>
                    <li>No stop-loss at all</li>
                    <li>Revenge trading after losses</li>
                    <li>Over-leveraging</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Risk management is more important than entry strategy</li>
                    <li>Never risk more than 1-2% per trade</li>
                    <li>Always use stop-losses</li>
                    <li>Calculate position size before entering</li>
                    <li>Protect your capital at all costs</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is the maximum recommended risk per trade?",
                options: ["5%", "10%", "1-2%", "20%"],
                correct: 2
            },
            {
                question: "What should you NEVER do with a stop-loss?",
                options: ["Use it", "Set it at support", "Move it to avoid being stopped out", "Set it before entering"],
                correct: 2
            }
        ]
    },

    "34": {
        title: "Risk-Reward Ratios",
        duration: "25 min",
        content: `
            <h3>Understanding Risk-Reward Ratios</h3>
            <p>The risk-reward ratio determines if a trade is worth taking.</p>
            
            <h4>What is Risk-Reward?</h4>
            <div class="definition-box">
                <p><strong>Risk-Reward Ratio = Potential Profit / Potential Loss</strong></p>
                <p>Example: Risk $100 to make $200 = 1:2 ratio</p>
            </div>
            
            <h4>Minimum Ratios</h4>
            <table>
                <tr><th>Win Rate</th><th>Minimum R:R</th><th>Outcome</th></tr>
                <tr><td>30%</td><td>1:2.5</td><td>Profitable</td></tr>
                <tr><td>40%</td><td>1:1.5</td><td>Profitable</td></tr>
                <tr><td>50%</td><td>1:1</td><td>Break even</td></tr>
                <tr><td>60%</td><td>1:0.75</td><td>Profitable</td></tr>
            </table>
            
            <h4>Calculating R:R</h4>
            <div class="example-box">
                <p><strong>Entry:</strong> 1.1000</p>
                <p><strong>Stop Loss:</strong> 1.0950 (50 pips risk)</p>
                <p><strong>Take Profit:</strong> 1.1100 (100 pips profit)</p>
                <p><strong>R:R = 100/50 = 1:2</strong> ✅ Good trade!</p>
            </div>
            
            <h4>Professional Standards</h4>
            <div class="info-box">
                <p><strong>Minimum acceptable:</strong> 1:2</p>
                <p><strong>Professional target:</strong> 1:3 or better</p>
                <p><strong>Rule:</strong> Never take trades with R:R less than 1:1.5</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Always calculate R:R before entering</li>
                    <li>Aim for minimum 1:2 ratio</li>
                    <li>Higher R:R allows lower win rate</li>
                    <li>Skip trades with poor R:R</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is a good minimum risk-reward ratio?",
                options: ["1:1", "1:2", "2:1", "1:0.5"],
                correct: 1
            },
            {
                question: "If you risk 50 pips to make 150 pips, what is the R:R?",
                options: ["1:1", "1:2", "1:3", "3:1"],
                correct: 2
            }
        ]
    },

    "35": {
        title: "Fundamental Analysis",
        duration: "35 min",
        content: `
            <h3>Forex Fundamental Analysis</h3>
            <p>Fundamental analysis examines economic factors that drive currency values.</p>
            
            <h4>Key Economic Indicators</h4>
            
            <div class="indicator">
                <h5>📊 GDP (Gross Domestic Product)</h5>
                <p>Total economic output of a country</p>
                <p><strong>Impact:</strong> Higher GDP = stronger currency</p>
                <p><strong>Release:</strong> Quarterly</p>
            </div>
            
            <div class="indicator">
                <h5>💼 Employment Data (NFP)</h5>
                <p>Non-Farm Payrolls (US jobs report)</p>
                <p><strong>Impact:</strong> More jobs = stronger currency</p>
                <p><strong>Release:</strong> First Friday of month</p>
            </div>
            
            <div class="indicator">
                <h5>💰 Interest Rates</h5>
                <p>Central bank lending rates</p>
                <p><strong>Impact:</strong> Higher rates = stronger currency</p>
                <p><strong>Most important:</strong> Fed, ECB, BOE, BOJ decisions</p>
            </div>
            
            <div class="indicator">
                <h5>📈 Inflation (CPI)</h5>
                <p>Consumer Price Index</p>
                <p><strong>Impact:</strong> High inflation may lead to rate hikes</p>
                <p><strong>Release:</strong> Monthly</p>
            </div>
            
            <h4>Central Banks</h4>
            <table>
                <tr><th>Bank</th><th>Currency</th><th>Importance</th></tr>
                <tr><td>Federal Reserve (Fed)</td><td>USD</td><td>Most influential</td></tr>
                <tr><td>European Central Bank (ECB)</td><td>EUR</td><td>Very important</td></tr>
                <tr><td>Bank of England (BOE)</td><td>GBP</td><td>Important</td></tr>
                <tr><td>Bank of Japan (BOJ)</td><td>JPY</td><td>Important</td></tr>
            </table>
            
            <h4>Economic Calendar</h4>
            <div class="info-box">
                <p>Use economic calendars to track:</p>
                <ul>
                    <li>Upcoming news releases</li>
                    <li>Previous vs forecast vs actual data</li>
                    <li>High-impact events (3 bulls)</li>
                    <li>Central bank speeches</li>
                </ul>
                <p><strong>Popular calendars:</strong> Forex Factory, Investing.com, DailyFX</p>
            </div>
            
            <h4>Trading the News</h4>
            <div class="strategy-box">
                <h5>News Trading Strategies:</h5>
                <p><strong>Before news:</strong> Close positions or widen stops</p>
                <p><strong>During news:</strong> Extreme volatility, wide spreads</p>
                <p><strong>After news:</strong> Wait for initial spike to settle</p>
                <p><strong>Tip:</strong> Beginners should avoid trading major news</p>
            </div>
            
            <div class="warning-box">
                <h5>⚠️ News Trading Risks:</h5>
                <ul>
                    <li>Extreme volatility</li>
                    <li>Widened spreads</li>
                    <li>Slippage</li>
                    <li>False moves (spike then reverse)</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Fundamentals drive long-term currency trends</li>
                    <li>Interest rates are the most important factor</li>
                    <li>Use economic calendar to track events</li>
                    <li>Combine fundamental and technical analysis</li>
                    <li>Be cautious trading around major news</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is the most important fundamental factor for currencies?",
                options: ["GDP", "Interest rates", "Employment", "Inflation"],
                correct: 1
            },
            {
                question: "When is the US Non-Farm Payrolls released?",
                options: ["Daily", "Weekly", "First Friday of month", "Last day of month"],
                correct: 2
            }
        ]
    }
    ,

    // Level 4: Advanced Trading
    "36": {
        title: "Trading Psychology",
        duration: "30 min",
        content: `
            <h3>Mastering Trading Psychology</h3>
            <p>95% of trading success is mental. Master your mind, master the markets.</p>
            
            <h4>Common Psychological Pitfalls</h4>
            <div class="pitfall">
                <h5>😨 Fear</h5>
                <p>Fear of losing money prevents taking valid trades</p>
                <p><strong>Solution:</strong> Risk only what you can afford to lose, use proper position sizing</p>
            </div>
            
            <div class="pitfall">
                <h5>🤑 Greed</h5>
                <p>Wanting more leads to over-trading and ignoring stop-losses</p>
                <p><strong>Solution:</strong> Set realistic profit targets, stick to your plan</p>
            </div>
            
            <div class="pitfall">
                <h5>😤 Revenge Trading</h5>
                <p>Trying to recover losses immediately</p>
                <p><strong>Solution:</strong> Take a break after losses, review what went wrong</p>
            </div>
            
            <div class="pitfall">
                <h5>😎 Overconfidence</h5>
                <p>After wins, taking excessive risks</p>
                <p><strong>Solution:</strong> Stay humble, follow your rules consistently</p>
            </div>
            
            <h4>Developing Mental Discipline</h4>
            <ul>
                <li><strong>Trading Journal:</strong> Record every trade with reasoning and emotions</li>
                <li><strong>Meditation:</strong> Practice mindfulness to stay calm</li>
                <li><strong>Exercise:</strong> Physical health supports mental clarity</li>
                <li><strong>Sleep:</strong> Never trade when tired</li>
                <li><strong>Breaks:</strong> Step away after big wins or losses</li>
            </ul>
            
            <h4>The Professional Mindset</h4>
            <div class="info-box">
                <p><strong>Think in probabilities:</strong> No single trade matters</p>
                <p><strong>Focus on process:</strong> Not individual results</p>
                <p><strong>Accept losses:</strong> They're part of the business</p>
                <p><strong>Stay patient:</strong> Wait for high-probability setups</p>
                <p><strong>Remain detached:</strong> Don't get emotionally attached to trades</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Psychology is more important than strategy</li>
                    <li>Control emotions through discipline and routine</li>
                    <li>Keep a trading journal</li>
                    <li>Accept that losses are inevitable</li>
                    <li>Focus on long-term consistency</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is revenge trading?",
                options: ["Trading for profit", "Trying to recover losses immediately", "Following your plan", "Taking breaks"],
                correct: 1
            },
            {
                question: "What should you focus on as a trader?",
                options: ["Individual trade results", "Process and probabilities", "Getting rich quick", "Never losing"],
                correct: 1
            }
        ]
    },

    "37": {
        title: "Developing Your Strategy",
        duration: "35 min",
        content: `
            <h3>Creating Your Trading Strategy</h3>
            <p>A trading strategy is your roadmap to consistent profitability.</p>
            
            <h4>Components of a Strategy</h4>
            <table>
                <tr><th>Component</th><th>Description</th><th>Example</th></tr>
                <tr><td>Market</td><td>What to trade</td><td>EUR/USD, GBP/USD</td></tr>
                <tr><td>Timeframe</td><td>When to trade</td><td>4H, Daily charts</td></tr>
                <tr><td>Entry Rules</td><td>When to enter</td><td>Breakout + RSI confirmation</td></tr>
                <tr><td>Exit Rules</td><td>When to exit</td><td>2:1 R:R or trailing stop</td></tr>
                <tr><td>Risk Management</td><td>How much to risk</td><td>1% per trade</td></tr>
            </table>
            
            <h4>Popular Strategy Types</h4>
            <div class="strategy">
                <h5>📈 Trend Following</h5>
                <p>Trade in direction of established trend</p>
                <p><strong>Tools:</strong> Moving averages, trendlines</p>
                <p class="pros">✅ High win rate in trending markets</p>
            </div>
            
            <div class="strategy">
                <h5>🔄 Range Trading</h5>
                <p>Buy support, sell resistance in sideways markets</p>
                <p><strong>Tools:</strong> Support/resistance, oscillators</p>
                <p class="pros">✅ Works well in consolidation</p>
            </div>
            
            <div class="strategy">
                <h5>💥 Breakout Trading</h5>
                <p>Enter when price breaks key levels</p>
                <p><strong>Tools:</strong> Chart patterns, volume</p>
                <p class="pros">✅ Catches big moves early</p>
            </div>
            
            <div class="strategy">
                <h5>🔙 Pullback Trading</h5>
                <p>Enter on retracements in trends</p>
                <p><strong>Tools:</strong> Fibonacci, support/resistance</p>
                <p class="pros">✅ Better risk-reward ratios</p>
            </div>
            
            <h4>Building Your Strategy</h4>
            <div class="step-guide">
                <ol>
                    <li><strong>Choose your style:</strong> Day trading, swing trading, position trading</li>
                    <li><strong>Select indicators:</strong> 2-3 complementary indicators</li>
                    <li><strong>Define entry rules:</strong> Specific, objective criteria</li>
                    <li><strong>Define exit rules:</strong> Stop-loss and take-profit levels</li>
                    <li><strong>Set risk parameters:</strong> Max risk per trade and day</li>
                    <li><strong>Document everything:</strong> Write it down clearly</li>
                </ol>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Every strategy needs clear entry and exit rules</li>
                    <li>Choose a strategy that fits your personality</li>
                    <li>Keep it simple - complexity doesn't equal profitability</li>
                    <li>Document your strategy in detail</li>
                    <li>Backtest before trading live</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is trend following?",
                options: ["Trading against trends", "Trading in direction of trend", "Range trading", "News trading"],
                correct: 1
            },
            {
                question: "How many indicators should you use?",
                options: ["As many as possible", "2-3 complementary indicators", "None", "Only one"],
                correct: 1
            }
        ]
    },

    "38": {
        title: "Backtesting Strategies",
        duration: "30 min",
        content: `
            <h3>Backtesting Your Trading Strategy</h3>
            <p>Backtesting validates your strategy using historical data before risking real money.</p>
            
            <h4>What is Backtesting?</h4>
            <div class="definition-box">
                <p>Testing your strategy on past price data to see how it would have performed</p>
                <p><strong>Goal:</strong> Validate edge and identify weaknesses</p>
            </div>
            
            <h4>Manual Backtesting</h4>
            <div class="step-guide">
                <ol>
                    <li>Open historical charts</li>
                    <li>Apply your strategy rules</li>
                    <li>Record each trade (entry, exit, profit/loss)</li>
                    <li>Move forward bar by bar</li>
                    <li>Analyze results after 100+ trades</li>
                </ol>
            </div>
            
            <h4>Automated Backtesting</h4>
            <p>Use software to test strategies automatically:</p>
            <ul>
                <li><strong>MT4/MT5 Strategy Tester:</strong> Built-in backtesting</li>
                <li><strong>TradingView:</strong> Pine Script backtesting</li>
                <li><strong>Python:</strong> Custom backtesting with libraries</li>
            </ul>
            
            <h4>Key Metrics to Track</h4>
            <table>
                <tr><th>Metric</th><th>What It Shows</th><th>Good Target</th></tr>
                <tr><td>Win Rate</td><td>% of winning trades</td><td>>50%</td></tr>
                <tr><td>Average R:R</td><td>Average risk-reward</td><td>>1:2</td></tr>
                <tr><td>Profit Factor</td><td>Gross profit / Gross loss</td><td>>1.5</td></tr>
                <tr><td>Max Drawdown</td><td>Largest peak-to-trough decline</td><td><20%</td></tr>
                <tr><td>Expectancy</td><td>Average $ per trade</td><td>Positive</td></tr>
            </table>
            
            <h4>Common Backtesting Mistakes</h4>
            <div class="warning-box">
                <h5>⚠️ Avoid These:</h5>
                <ul>
                    <li><strong>Curve fitting:</strong> Over-optimizing for past data</li>
                    <li><strong>Look-ahead bias:</strong> Using future information</li>
                    <li><strong>Ignoring spreads/commissions:</strong> Unrealistic results</li>
                    <li><strong>Too few trades:</strong> Need 100+ for statistical significance</li>
                    <li><strong>Cherry-picking data:</strong> Only testing favorable periods</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Always backtest before trading live</li>
                    <li>Test on at least 100 trades</li>
                    <li>Include realistic spreads and commissions</li>
                    <li>Look for consistent performance across different periods</li>
                    <li>Positive expectancy is essential</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is backtesting?",
                options: ["Trading live", "Testing strategy on historical data", "Forward testing", "Paper trading"],
                correct: 1
            },
            {
                question: "How many trades should you backtest minimum?",
                options: ["10", "50", "100+", "500"],
                correct: 2
            }
        ]
    },

    "39": {
        title: "Demo Trading",
        duration: "20 min",
        content: `
            <h3>Practicing with Demo Accounts</h3>
            <p>Demo trading is essential for developing skills without financial risk.</p>
            
            <h4>What is Demo Trading?</h4>
            <div class="info-box">
                <p>Trading with virtual money in real market conditions</p>
                <p><strong>Purpose:</strong> Practice strategy and platform skills</p>
            </div>
            
            <h4>Benefits of Demo Trading</h4>
            <ul>
                <li>✅ Learn platform features risk-free</li>
                <li>✅ Test strategies in real-time</li>
                <li>✅ Build confidence</li>
                <li>✅ Develop trading routine</li>
                <li>✅ Make mistakes without losing money</li>
            </ul>
            
            <h4>How Long to Demo Trade?</h4>
            <div class="timeline">
                <p><strong>Minimum:</strong> 3 months of consistent profitability</p>
                <p><strong>Recommended:</strong> 6 months or 100+ trades</p>
                <p><strong>Goal:</strong> Prove your strategy works before going live</p>
            </div>
            
            <h4>Demo Trading Best Practices</h4>
            <div class="strategy-box">
                <ul>
                    <li>Treat demo like real money</li>
                    <li>Use realistic account size ($1,000-$10,000)</li>
                    <li>Follow your strategy exactly</li>
                    <li>Keep a trading journal</li>
                    <li>Track all metrics</li>
                    <li>Don't move to live until consistently profitable</li>
                </ul>
            </div>
            
            <h4>Limitations of Demo</h4>
            <div class="warning-box">
                <p><strong>Demo ≠ Live Trading:</strong></p>
                <ul>
                    <li>No emotional pressure</li>
                    <li>Perfect execution (no slippage)</li>
                    <li>Unlimited virtual capital</li>
                    <li>Different psychology</li>
                </ul>
                <p><strong>Solution:</strong> Start live with very small amounts</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Demo trade for at least 3-6 months</li>
                    <li>Treat demo money as real</li>
                    <li>Prove consistent profitability first</li>
                    <li>Understand demo limitations</li>
                    <li>Use demo to build good habits</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "How long should you demo trade minimum?",
                options: ["1 week", "1 month", "3 months", "1 year"],
                correct: 2
            },
            {
                question: "What is a limitation of demo trading?",
                options: ["Too expensive", "No emotional pressure", "Too difficult", "Not realistic"],
                correct: 1
            }
        ]
    },

    "40": {
        title: "Transitioning to Live Trading",
        duration: "25 min",
        content: `
            <h3>Moving from Demo to Live Trading</h3>
            <p>The transition to live trading is a critical step that requires careful planning.</p>
            
            <h4>When to Go Live</h4>
            <div class="checklist">
                <h5>✅ Ready Checklist:</h5>
                <ul>
                    <li>3-6 months profitable on demo</li>
                    <li>100+ demo trades recorded</li>
                    <li>Positive expectancy proven</li>
                    <li>Strategy documented</li>
                    <li>Risk management rules established</li>
                    <li>Trading psychology under control</li>
                    <li>Sufficient capital (minimum $500-$1,000)</li>
                </ul>
            </div>
            
            <h4>Starting Small</h4>
            <div class="strategy-box">
                <h5>Recommended Approach:</h5>
                <ol>
                    <li><strong>Start tiny:</strong> Micro or nano lots</li>
                    <li><strong>Risk even less:</strong> 0.5% per trade initially</li>
                    <li><strong>Trade less frequently:</strong> Only best setups</li>
                    <li><strong>Build confidence:</strong> Gradually increase size</li>
                    <li><strong>Scale slowly:</strong> Double position size every 3 months of profit</li>
                </ol>
            </div>
            
            <h4>Managing Live Trading Emotions</h4>
            <div class="emotion-guide">
                <p><strong>First loss:</strong> Will feel worse than demo - this is normal</p>
                <p><strong>First win:</strong> Don't get overconfident</p>
                <p><strong>Drawdowns:</strong> Stick to your plan, don't panic</p>
                <p><strong>Winning streak:</strong> Don't increase risk impulsively</p>
            </div>
            
            <h4>Common Transition Mistakes</h4>
            <div class="warning-box">
                <h5>❌ Avoid:</h5>
                <ul>
                    <li>Starting with too much capital</li>
                    <li>Changing strategy when going live</li>
                    <li>Increasing risk to "make up for lost time"</li>
                    <li>Trading more frequently than demo</li>
                    <li>Ignoring stop-losses due to fear</li>
                </ul>
            </div>
            
            <h4>Tracking Progress</h4>
            <p>Continue keeping detailed records:</p>
            <ul>
                <li>Every trade in journal</li>
                <li>Weekly/monthly performance reviews</li>
                <li>Emotional state during trades</li>
                <li>Deviations from plan</li>
                <li>Lessons learned</li>
            </ul>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Only go live after consistent demo profitability</li>
                    <li>Start with very small position sizes</li>
                    <li>Expect different emotions with real money</li>
                    <li>Don't change your strategy</li>
                    <li>Scale up gradually over months</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "When should you transition to live trading?",
                options: ["After 1 week demo", "After 3-6 months profitable demo", "Immediately", "Never"],
                correct: 1
            },
            {
                question: "How should you start live trading?",
                options: ["Large positions", "Very small positions", "Same as demo", "Maximum leverage"],
                correct: 1
            }
        ]
    },

    "41": {
        title: "Common Trading Mistakes",
        duration: "28 min",
        content: `
            <h3>Avoiding Common Trading Mistakes</h3>
            <p>Learn from others' mistakes to accelerate your success.</p>
            
            <h4>Top 10 Beginner Mistakes</h4>
            
            <div class="mistake">
                <h5>1. Over-Leveraging</h5>
                <p>Using too much leverage destroys accounts</p>
                <p><strong>Fix:</strong> Use 1:10 to 1:30 leverage maximum</p>
            </div>
            
            <div class="mistake">
                <h5>2. No Stop-Loss</h5>
                <p>Hoping losses will reverse</p>
                <p><strong>Fix:</strong> Always set stop-loss before entering</p>
            </div>
            
            <div class="mistake">
                <h5>3. Risking Too Much</h5>
                <p>Risking 5-10% per trade</p>
                <p><strong>Fix:</strong> Never risk more than 1-2%</p>
            </div>
            
            <div class="mistake">
                <h5>4. Over-Trading</h5>
                <p>Taking too many trades out of boredom</p>
                <p><strong>Fix:</strong> Wait for high-probability setups only</p>
            </div>
            
            <div class="mistake">
                <h5>5. Revenge Trading</h5>
                <p>Trying to recover losses immediately</p>
                <p><strong>Fix:</strong> Take breaks after losses</p>
            </div>
            
            <div class="mistake">
                <h5>6. No Trading Plan</h5>
                <p>Trading randomly without rules</p>
                <p><strong>Fix:</strong> Document and follow a plan</p>
            </div>
            
            <div class="mistake">
                <h5>7. Ignoring Risk Management</h5>
                <p>Focusing only on entries</p>
                <p><strong>Fix:</strong> Risk management is priority #1</p>
            </div>
            
            <div class="mistake">
                <h5>8. Chasing Losses</h5>
                <p>Increasing position size after losses</p>
                <p><strong>Fix:</strong> Maintain consistent position sizing</p>
            </div>
            
            <div class="mistake">
                <h5>9. No Journal</h5>
                <p>Not tracking trades and learning</p>
                <p><strong>Fix:</strong> Keep detailed trading journal</p>
            </div>
            
            <div class="mistake">
                <h5>10. Unrealistic Expectations</h5>
                <p>Expecting to get rich quick</p>
                <p><strong>Fix:</strong> Aim for 5-10% monthly returns</p>
            </div>
            
            <h4>Advanced Mistakes</h4>
            <ul>
                <li>Moving stop-losses to avoid being stopped out</li>
                <li>Adding to losing positions (averaging down)</li>
                <li>Taking profits too early</li>
                <li>Fighting the trend</li>
                <li>Ignoring higher timeframe context</li>
            </ul>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Most mistakes are psychological, not technical</li>
                    <li>Risk management prevents account destruction</li>
                    <li>Patience and discipline beat intelligence</li>
                    <li>Learn from mistakes through journaling</li>
                    <li>Realistic expectations lead to better decisions</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is the #1 beginner mistake?",
                options: ["No journal", "Over-leveraging", "Using indicators", "Demo trading"],
                correct: 1
            },
            {
                question: "What should you do after a loss?",
                options: ["Double position size", "Revenge trade", "Take a break", "Change strategy"],
                correct: 2
            }
        ]
    },

    "42": {
        title: "Advanced Trading Strategies",
        duration: "40 min",
        content: `
            <h3>Advanced Forex Trading Strategies</h3>
            <p>Professional strategies for experienced traders.</p>
            
            <h4>Price Action Trading</h4>
            <div class="strategy">
                <p>Trading based purely on price movement without indicators</p>
                <p><strong>Key elements:</strong></p>
                <ul>
                    <li>Support/resistance levels</li>
                    <li>Candlestick patterns</li>
                    <li>Chart patterns</li>
                    <li>Market structure</li>
                </ul>
                <p class="pros">✅ No lag, pure market reading</p>
            </div>
            
            <h4>Supply and Demand Zones</h4>
            <div class="strategy">
                <p>Trading from institutional supply/demand areas</p>
                <p><strong>Concept:</strong> Banks leave "footprints" where they entered</p>
                <p><strong>Strategy:</strong> Enter when price returns to these zones</p>
            </div>
            
            <h4>Smart Money Concepts (SMC)</h4>
            <div class="strategy">
                <p>Following institutional trading patterns</p>
                <p><strong>Key concepts:</strong></p>
                <ul>
                    <li>Order blocks</li>
                    <li>Fair value gaps</li>
                    <li>Liquidity grabs</li>
                    <li>Market structure shifts</li>
                </ul>
            </div>
            
            <h4>Multi-Timeframe Analysis</h4>
            <div class="strategy">
                <p>Analyzing multiple timeframes for confluence</p>
                <p><strong>Approach:</strong></p>
                <ol>
                    <li>Monthly: Overall trend</li>
                    <li>Weekly: Key levels</li>
                    <li>Daily: Trade direction</li>
                    <li>4H: Entry timing</li>
                    <li>1H: Precise entry</li>
                </ol>
            </div>
            
            <h4>Session-Based Trading</h4>
            <div class="strategy">
                <p>Trading specific market sessions</p>
                <p><strong>London Breakout:</strong> Trade breakouts at London open</p>
                <p><strong>New York Reversal:</strong> Fade London moves at NY open</p>
                <p><strong>Asian Range:</strong> Range trade during Asian session</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Advanced strategies require experience</li>
                    <li>Price action is the foundation</li>
                    <li>Understand institutional behavior</li>
                    <li>Use multiple timeframes for confirmation</li>
                    <li>Master one strategy before adding more</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is price action trading?",
                options: ["Using many indicators", "Trading based on price movement only", "News trading", "Automated trading"],
                correct: 1
            },
            {
                question: "What should you do with advanced strategies?",
                options: ["Use all at once", "Master one before adding more", "Avoid them", "Only use indicators"],
                correct: 1
            }
        ]
    },

    "43": {
        title: "Correlation Trading",
        duration: "30 min",
        content: `
            <h3>Understanding Currency Correlations</h3>
            <p>Currency pairs move in relation to each other - use this to your advantage.</p>
            
            <h4>What is Correlation?</h4>
            <div class="definition-box">
                <p><strong>Correlation:</strong> Statistical relationship between two currency pairs</p>
                <p><strong>Range:</strong> -1 (perfect negative) to +1 (perfect positive)</p>
            </div>
            
            <h4>Correlation Values</h4>
            <table>
                <tr><th>Value</th><th>Meaning</th><th>Example</th></tr>
                <tr><td>+0.8 to +1.0</td><td>Strong positive</td><td>EUR/USD & GBP/USD</td></tr>
                <tr><td>+0.4 to +0.7</td><td>Moderate positive</td><td>EUR/USD & AUD/USD</td></tr>
                <tr><td>-0.4 to +0.4</td><td>Weak/No correlation</td><td>EUR/USD & USD/JPY</td></tr>
                <tr><td>-0.4 to -0.7</td><td>Moderate negative</td><td>EUR/USD & USD/CHF</td></tr>
                <tr><td>-0.8 to -1.0</td><td>Strong negative</td><td>EUR/USD & USD/JPY</td></tr>
            </table>
            
            <h4>Common Correlations</h4>
            <div class="correlation">
                <h5>Positive Correlations:</h5>
                <p><strong>EUR/USD & GBP/USD:</strong> ~0.85 (move together)</p>
                <p><strong>AUD/USD & NZD/USD:</strong> ~0.90 (commodity currencies)</p>
                <p><strong>EUR/USD & AUD/USD:</strong> ~0.75</p>
            </div>
            
            <div class="correlation">
                <h5>Negative Correlations:</h5>
                <p><strong>EUR/USD & USD/CHF:</strong> ~-0.95 (opposite direction)</p>
                <p><strong>GBP/USD & USD/JPY:</strong> ~-0.70</p>
            </div>
            
            <h4>Using Correlations in Trading</h4>
            <div class="strategy-box">
                <h5>1. Diversification</h5>
                <p>Avoid trading highly correlated pairs simultaneously</p>
                <p><strong>Why:</strong> Doubles your risk if wrong</p>
            </div>
            
            <div class="strategy-box">
                <h5>2. Confirmation</h5>
                <p>Use correlated pairs to confirm signals</p>
                <p><strong>Example:</strong> EUR/USD buy + GBP/USD buy = stronger signal</p>
            </div>
            
            <div class="strategy-box">
                <h5>3. Hedging</h5>
                <p>Use negative correlation to hedge positions</p>
                <p><strong>Example:</strong> Long EUR/USD + Long USD/CHF = partial hedge</p>
            </div>
            
            <div class="warning-box">
                <h5>⚠️ Important Notes:</h5>
                <ul>
                    <li>Correlations change over time</li>
                    <li>Check current correlations regularly</li>
                    <li>Strong correlations can break during news</li>
                    <li>Don't rely solely on correlations</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Understand which pairs move together</li>
                    <li>Avoid doubling risk with correlated pairs</li>
                    <li>Use correlations for confirmation</li>
                    <li>Correlations change - check regularly</li>
                    <li>Combine with other analysis methods</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What does a correlation of +0.9 mean?",
                options: ["Pairs move opposite", "Pairs move together strongly", "No relationship", "Weak relationship"],
                correct: 1
            },
            {
                question: "Why avoid trading highly correlated pairs?",
                options: ["It's illegal", "Doubles your risk", "Too complicated", "No reason"],
                correct: 1
            }
        ]
    },

    "44": {
        title: "Carry Trades",
        duration: "25 min",
        content: `
            <h3>Understanding Carry Trades</h3>
            <p>Earn interest by holding currency positions - a popular long-term strategy.</p>
            
            <h4>What is a Carry Trade?</h4>
            <div class="definition-box">
                <p>Borrowing a low-interest currency to buy a high-interest currency</p>
                <p><strong>Profit:</strong> Interest rate differential + potential price appreciation</p>
            </div>
            
            <h4>How It Works</h4>
            <div class="example-box">
                <p><strong>Example:</strong> AUD/JPY Carry Trade</p>
                <p>Australian interest rate: 4.0%</p>
                <p>Japanese interest rate: 0.1%</p>
                <p><strong>Differential:</strong> 3.9% annually</p>
                <p><strong>Strategy:</strong> Buy AUD/JPY, hold long-term, earn interest</p>
            </div>
            
            <h4>Popular Carry Trade Pairs</h4>
            <table>
                <tr><th>Pair</th><th>High Yield</th><th>Low Yield</th></tr>
                <tr><td>AUD/JPY</td><td>AUD</td><td>JPY</td></tr>
                <tr><td>NZD/JPY</td><td>NZD</td><td>JPY</td></tr>
                <tr><td>GBP/JPY</td><td>GBP</td><td>JPY</td></tr>
                <tr><td>USD/TRY</td><td>TRY</td><td>USD</td></tr>
            </table>
            
            <h4>Calculating Carry</h4>
            <div class="formula-box">
                <p><strong>Daily Swap = (Interest Rate Differential / 365) × Position Size</strong></p>
                <p>Most brokers show swap rates in platform</p>
            </div>
            
            <h4>Carry Trade Strategy</h4>
            <div class="strategy-box">
                <ol>
                    <li>Identify pairs with large interest differential</li>
                    <li>Check if swap is positive for your direction</li>
                    <li>Enter during favorable trend</li>
                    <li>Hold for weeks/months</li>
                    <li>Collect daily interest</li>
                    <li>Exit if trend reverses</li>
                </ol>
            </div>
            
            <h4>Risks of Carry Trading</h4>
            <div class="warning-box">
                <h5>⚠️ Major Risks:</h5>
                <ul>
                    <li><strong>Currency depreciation:</strong> Can lose more than interest earned</li>
                    <li><strong>Interest rate changes:</strong> Differential can narrow</li>
                    <li><strong>Market volatility:</strong> Carry trades unwind during crises</li>
                    <li><strong>Leverage risk:</strong> Magnifies losses</li>
                </ul>
            </div>
            
            <h4>Best Practices</h4>
            <ul>
                <li>Only carry trade in direction of trend</li>
                <li>Use lower leverage (1:5 to 1:10)</li>
                <li>Monitor central bank policies</li>
                <li>Set wide stop-losses for volatility</li>
                <li>Diversify across multiple carry pairs</li>
            </ul>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Carry trades earn interest rate differential</li>
                    <li>Best in stable, trending markets</li>
                    <li>Currency risk can exceed interest gains</li>
                    <li>Use lower leverage for carry trades</li>
                    <li>Monitor central bank policies closely</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is a carry trade?",
                options: ["Day trading", "Borrowing low-interest to buy high-interest currency", "Scalping", "News trading"],
                correct: 1
            },
            {
                question: "What is the main risk of carry trading?",
                options: ["Too much profit", "Currency depreciation exceeding interest", "No risk", "Too complicated"],
                correct: 1
            }
        ]
    },

    "45": {
        title: "Building Your Trading Plan",
        duration: "35 min",
        content: `
            <h3>Creating a Comprehensive Trading Plan</h3>
            <p>A trading plan is your business plan for forex trading success.</p>
            
            <h4>Components of a Trading Plan</h4>
            
            <div class="component">
                <h5>1. Trading Goals</h5>
                <ul>
                    <li>Monthly/yearly profit targets (realistic!)</li>
                    <li>Maximum drawdown tolerance</li>
                    <li>Time commitment</li>
                    <li>Long-term objectives</li>
                </ul>
            </div>
            
            <div class="component">
                <h5>2. Market Selection</h5>
                <ul>
                    <li>Which pairs to trade (2-4 maximum)</li>
                    <li>Why these pairs</li>
                    <li>Session times to trade</li>
                </ul>
            </div>
            
            <div class="component">
                <h5>3. Strategy Rules</h5>
                <ul>
                    <li>Entry criteria (specific and objective)</li>
                    <li>Exit criteria (stop-loss and take-profit)</li>
                    <li>Timeframes to use</li>
                    <li>Indicators and tools</li>
                </ul>
            </div>
            
            <div class="component">
                <h5>4. Risk Management</h5>
                <ul>
                    <li>Risk per trade (1-2%)</li>
                    <li>Maximum daily loss limit</li>
                    <li>Position sizing formula</li>
                    <li>Leverage to use</li>
                    <li>Correlation limits</li>
                </ul>
            </div>
            
            <div class="component">
                <h5>5. Trading Routine</h5>
                <ul>
                    <li>Pre-market analysis checklist</li>
                    <li>Trading hours</li>
                    <li>Post-trade review process</li>
                    <li>Weekly/monthly review schedule</li>
                </ul>
            </div>
            
            <div class="component">
                <h5>6. Psychology Rules</h5>
                <ul>
                    <li>Maximum trades per day</li>
                    <li>Break rules after losses</li>
                    <li>Emotional management techniques</li>
                    <li>When to stop trading</li>
                </ul>
            </div>
            
            <h4>Sample Trading Plan Template</h4>
            <div class="template">
                <p><strong>Goals:</strong> 5% monthly return, max 15% drawdown</p>
                <p><strong>Pairs:</strong> EUR/USD, GBP/USD</p>
                <p><strong>Strategy:</strong> Trend following with pullbacks</p>
                <p><strong>Entry:</strong> Price at 50% Fib + RSI <40 in uptrend</p>
                <p><strong>Exit:</strong> 2:1 R:R or trailing stop</p>
                <p><strong>Risk:</strong> 1% per trade, max 3 trades/day</p>
                <p><strong>Routine:</strong> Analyze charts 8am, trade 9am-5pm, review 6pm</p>
            </div>
            
            <h4>Reviewing and Updating</h4>
            <div class="review-schedule">
                <p><strong>Daily:</strong> Review all trades, journal entries</p>
                <p><strong>Weekly:</strong> Calculate metrics, identify patterns</p>
                <p><strong>Monthly:</strong> Full performance review, adjust if needed</p>
                <p><strong>Quarterly:</strong> Major strategy review and optimization</p>
            </div>
            
            <div class="warning-box">
                <h5>⚠️ Trading Plan Rules:</h5>
                <ul>
                    <li>Write it down - don't keep it in your head</li>
                    <li>Be specific - no vague rules</li>
                    <li>Follow it consistently - no exceptions</li>
                    <li>Review regularly - but don't change impulsively</li>
                    <li>Update based on data - not emotions</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>A trading plan is essential for consistency</li>
                    <li>Include all aspects: strategy, risk, psychology</li>
                    <li>Be specific and objective with rules</li>
                    <li>Review and update regularly</li>
                    <li>Follow your plan without exceptions</li>
                </ul>
            </div>
            
            <div class="info-box">
                <h4>🎉 Congratulations!</h4>
                <p>You've completed the Forex Trading Learning Path! You now have comprehensive knowledge from basics to advanced strategies.</p>
                <p><strong>Next steps:</strong> Create your trading plan, practice on demo, and gradually transition to live trading. Remember: consistency and discipline are key to long-term success!</p>
            </div>
        `,
        quiz: [
            {
                question: "What should be in a trading plan?",
                options: ["Only entry rules", "Strategy, risk management, and psychology", "Just profit targets", "Nothing specific"],
                correct: 1
            },
            {
                question: "How often should you review your trading plan?",
                options: ["Never", "Daily, weekly, monthly", "Only when losing", "Every hour"],
                correct: 1
            }
        ]
    }
    ,

    // ========================================
    // FOREX QUIZZES
    // ========================================

    "forex-quiz1": {
        title: "Level 1 Quiz: Forex Foundations",
        duration: "15 min",
        content: "<h3>Level 1 Assessment</h3><p>Test your knowledge of Forex basics, currency pairs, and market structure.</p>",
        quiz: [
            { question: "What does 'Forex' stand for?", options: ["Foreign Exchange", "For Exchange", "Future Exchange", "Forecast Exchange"], correct: 0 },
            { question: "What is a 'Currency Pair'?", options: ["Two currencies traded against each other", "Two coins", "Two banks", "Two traders"], correct: 0 },
            { question: "Which is the 'Base Currency' in EUR/USD?", options: ["USD", "EUR", "Both", "None"], correct: 1 },
            { question: "What is a 'Pip'?", options: ["Percentage in Point", "Price in Point", "Profit in Point", "Pair in Point"], correct: 0 },
            { question: "What is 'Leverage'?", options: ["Borrowing funds to increase position size", "A tool", "A fee", "A strategy"], correct: 0 },
            { question: "What is a 'Bid Price'?", options: ["Price to sell", "Price to buy", "Price to hold", "Price to close"], correct: 0 },
            { question: "What is an 'Ask Price'?", options: ["Price to buy", "Price to sell", "Price to hold", "Price to open"], correct: 0 },
            { question: "What is the 'Spread'?", options: ["Difference between Bid and Ask", "Profit", "Loss", "Commission"], correct: 0 },
            { question: "What is a 'Lot'?", options: ["Standard unit size of a trade", "A large amount", "A small amount", "A fee"], correct: 0 },
            { question: "Who are the main participants in Forex?", options: ["Banks, Corporations, Governments, Traders", "Only Banks", "Only Traders", "Only Governments"], correct: 0 }
        ]
    },

    "forex-quiz2": {
        title: "Level 2 Quiz: Technical Analysis",
        duration: "20 min",
        content: "<h3>Level 2 Assessment</h3><p>Prove your understanding of charts, patterns, and indicators.</p>",
        quiz: [
            { question: "What is a 'Candlestick'?", options: ["Chart type showing OHLC", "A light", "A strategy", "A pattern"], correct: 0 },
            { question: "What does a 'Doji' candle indicate?", options: ["Indecision in the market", "Strong trend", "Reversal", "Continuation"], correct: 0 },
            { question: "What is 'Support'?", options: ["Price level preventing decline", "Price level preventing rise", "A fee", "A bonus"], correct: 0 },
            { question: "What is 'Resistance'?", options: ["Price level preventing rise", "Price level preventing decline", "A strategy", "A tool"], correct: 0 },
            { question: "What is a 'Trend Line'?", options: ["Line connecting highs or lows", "A straight line", "A curved line", "A grid"], correct: 0 },
            { question: "What is 'RSI'?", options: ["Relative Strength Index", "Real Strength Index", "Rate Strength Index", "Ratio Strength Index"], correct: 0 },
            { question: "What does RSI > 70 usually mean?", options: ["Overbought", "Oversold", "Neutral", "Buy signal"], correct: 0 },
            { question: "What is a 'Moving Average'?", options: ["Average price over time", "Moving price", "Average volume", "Moving volume"], correct: 0 },
            { question: "What is a 'Head and Shoulders' pattern?", options: ["Reversal pattern", "Continuation pattern", "Shampoo", "Exercise"], correct: 0 },
            { question: "What is 'Price Action'?", options: ["Trading based on price movement", "Trading based on news", "Trading based on indicators", "Trading based on luck"], correct: 0 }
        ]
    },

    "forex-quiz3": {
        title: "Level 3 Quiz: Advanced Strategies",
        duration: "25 min",
        content: "<h3>Level 3 Assessment</h3><p>Test your mastery of trading strategies, psychology, and risk management.</p>",
        quiz: [
            { question: "What is 'Scalping'?", options: ["Short-term trading for small profits", "Long-term trading", "Swing trading", "Investing"], correct: 0 },
            { question: "What is 'Swing Trading'?", options: ["Holding for days or weeks", "Holding for minutes", "Holding for years", "Holding for seconds"], correct: 0 },
            { question: "What is 'Position Trading'?", options: ["Long-term trading", "Short-term trading", "Day trading", "Scalping"], correct: 0 },
            { question: "What is 'Risk/Reward Ratio'?", options: ["Potential profit vs potential loss", "Win rate", "Loss rate", "Fee rate"], correct: 0 },
            { question: "What is the recommended risk per trade?", options: ["1-2%", "10-20%", "50%", "100%"], correct: 0 },
            { question: "What is 'Fundamental Analysis'?", options: ["Analyzing economic data", "Analyzing charts", "Analyzing patterns", "Analyzing volume"], correct: 0 },
            { question: "What is 'NFP'?", options: ["Non-Farm Payrolls", "New Forex Policy", "No Fee Payment", "Net Foreign Profit"], correct: 0 },
            { question: "What is 'Trading Psychology'?", options: ["Managing emotions", "Analyzing charts", "Calculating risk", "Reading news"], correct: 0 },
            { question: "What is 'Revenge Trading'?", options: ["Trading to recover losses emotionally", "Trading to win", "Trading to learn", "Trading to help"], correct: 0 },
            { question: "What is a 'Trading Plan'?", options: ["Rules for entering and exiting trades", "A wish list", "A calendar", "A map"], correct: 0 }
        ]
    },

    "forex-final-exam": {
        title: "Forex Master Certification",
        duration: "45 min",
        content: "<h3>Final Certification Exam</h3><p>Complete this exam to earn your Forex Master Certificate.</p>",
        quiz: [
            { question: "What is the most traded currency pair?", options: ["EUR/USD", "GBP/USD", "USD/JPY", "AUD/USD"], correct: 0 },
            { question: "What session has the most volume?", options: ["London/New York overlap", "Asian session", "Sydney session", "Late New York"], correct: 0 },
            { question: "What is 'Slippage'?", options: ["Difference between expected and actual price", "A fee", "A bonus", "A strategy"], correct: 0 },
            { question: "What is a 'Margin Call'?", options: ["Broker demand for more funds", "A phone call", "A profit", "A loss"], correct: 0 },
            { question: "What is 'Hedging'?", options: ["Opening opposite positions to reduce risk", "Gardening", "Gambling", "Investing"], correct: 0 },
            { question: "What is 'Correlation'?", options: ["Relationship between two pairs", "Difference", "Sum", "Average"], correct: 0 },
            { question: "What is 'Carry Trade'?", options: ["Profiting from interest rate difference", "Carrying cash", "Trading goods", "Trading services"], correct: 0 },
            { question: "What is 'Fibonacci Retracement'?", options: ["Tool to find support/resistance", "A pasta", "A strategy", "A coin"], correct: 0 },
            { question: "What is 'Elliott Wave Theory'?", options: ["Market moves in waves", "Market moves in circles", "Market moves in lines", "Market moves randomly"], correct: 0 },
            { question: "What is 'Backtesting'?", options: ["Testing strategy on past data", "Testing on future data", "Testing on demo", "Testing on live"], correct: 0 },
            { question: "What is 'Drawdown'?", options: ["Decline from peak equity", "Drawing a chart", "Withdrawing money", "Depositing money"], correct: 0 },
            { question: "What is 'Liquidity'?", options: ["Ease of execution", "Water", "Cash", "Profit"], correct: 0 },
            { question: "What is 'Volatility'?", options: ["Price fluctuation", "Stability", "Volume", "Trend"], correct: 0 },
            { question: "What is a 'Black Swan' event?", options: ["Unexpected high-impact event", "A bird", "A movie", "A strategy"], correct: 0 },
            { question: "What is 'Sentiment Analysis'?", options: ["Gauging market mood", "Analyzing charts", "Analyzing numbers", "Analyzing news"], correct: 0 }
        ]
    },

    // ========================================
    // AIRDROP LESSONS
    // ========================================

    // Level 1: Airdrop Foundations
    "46": {
        en: {
            title: "What are Airdrops?",
            duration: "12 min",
            content: `
            <h3>Introduction to Cryptocurrency Airdrops</h3>
            <p>Airdrops are free cryptocurrency distributions used by projects to build communities and reward early adopters.</p>
            
            <h4>What is an Airdrop?</h4>
            <div class="definition-box">
                <p><strong>Airdrop:</strong> Free distribution of cryptocurrency tokens to wallet addresses</p>
                <p><strong>Purpose:</strong> Marketing, community building, decentralization</p>
            </div>
            
            <h4>Types of Airdrops</h4>
            <div class="airdrop-type">
                <h5>🎁 Standard Airdrop</h5>
                <p>Free tokens for completing simple tasks</p>
                <p><strong>Example:</strong> Follow on Twitter, join Telegram</p>
            </div>
            
            <div class="airdrop-type">
                <h5>💎 Retroactive Airdrop</h5>
                <p>Rewards for past platform usage</p>
                <p><strong>Example:</strong> Uniswap gave 400 UNI to all past users ($12,000+ value!)</p>
            </div>
            
            <div class="airdrop-type">
                <h5>🔒 Holder Airdrop</h5>
                <p>Rewards for holding specific tokens</p>
                <p><strong>Example:</strong> Hold ETH to receive forked tokens</p>
            </div>
            
            <h4>Famous Airdrops</h4>
            <table>
                <tr><th>Project</th><th>Value</th><th>Year</th></tr>
                <tr><td>Uniswap (UNI)</td><td>$1,200-$12,000</td><td>2020</td></tr>
                <tr><td>Aptos (APT)</td><td>$1,000-$5,000</td><td>2022</td></tr>
                <tr><td>Arbitrum (ARB)</td><td>$1,000-$10,000</td><td>2023</td></tr>
                <tr><td>dYdX</td><td>$500-$50,000</td><td>2021</td></tr>
            </table>
            
            <h4>Why Projects Do Airdrops</h4>
            <ul>
                <li>Build community quickly</li>
                <li>Distribute tokens fairly</li>
                <li>Generate marketing buzz</li>
                <li>Reward early supporters</li>
                <li>Increase decentralization</li>
            </ul>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Airdrops are free cryptocurrency distributions</li>
                    <li>Can be worth thousands of dollars</li>
                    <li>Retroactive airdrops reward past users</li>
                    <li>Requires active participation in crypto ecosystem</li>
                </ul>
            </div>
        `,
            quiz: [
                {
                    question: "What is an airdrop?",
                    options: ["Buying crypto", "Free distribution of tokens", "Mining crypto", "Trading tokens"],
                    correct: 1
                },
                {
                    question: "What was the Uniswap airdrop worth?",
                    options: ["$10", "$100", "$1,200-$12,000", "$1 million"],
                    correct: 2
                }
            ]
        },
        es: {
            title: "¿Qué son los Airdrops?",
            duration: "12 min",
            content: `
            <h3>Introducción a los Airdrops de Criptomonedas</h3>
            <p>Los airdrops son distribuciones gratuitas de criptomonedas utilizadas por proyectos para construir comunidades y recompensar a los primeros usuarios.</p>
            
            <h4>¿Qué es un Airdrop?</h4>
            <div class="definition-box">
                <p><strong>Airdrop:</strong> Distribución gratuita de tokens de criptomonedas a direcciones de billetera</p>
                <p><strong>Propósito:</strong> Marketing, construcción de comunidad, descentralización</p>
            </div>
            
            <h4>Tipos de Airdrops</h4>
            <div class="airdrop-type">
                <h5>🎁 Airdrop Estándar</h5>
                <p>Tokens gratis por completar tareas simples</p>
                <p><strong>Ejemplo:</strong> Seguir en Twitter, unirse a Telegram</p>
            </div>
            
            <div class="airdrop-type">
                <h5>💎 Airdrop Retroactivo</h5>
                <p>Recompensas por uso pasado de la plataforma</p>
                <p><strong>Ejemplo:</strong> Uniswap dio 400 UNI a todos los usuarios pasados (¡valor de $12,000+!)</p>
            </div>
            
            <div class="airdrop-type">
                <h5>🔒 Airdrop para Holders</h5>
                <p>Recompensas por mantener tokens específicos</p>
                <p><strong>Ejemplo:</strong> Mantener ETH para recibir tokens bifurcados</p>
            </div>
            
            <h4>Airdrops Famosos</h4>
            <table>
                <tr><th>Proyecto</th><th>Valor</th><th>Año</th></tr>
                <tr><td>Uniswap (UNI)</td><td>$1,200-$12,000</td><td>2020</td></tr>
                <tr><td>Aptos (APT)</td><td>$1,000-$5,000</td><td>2022</td></tr>
                <tr><td>Arbitrum (ARB)</td><td>$1,000-$10,000</td><td>2023</td></tr>
                <tr><td>dYdX</td><td>$500-$50,000</td><td>2021</td></tr>
            </table>
            
            <h4>Por Qué los Proyectos Hacen Airdrops</h4>
            <ul>
                <li>Construir comunidad rápidamente</li>
                <li>Distribuir tokens justamente</li>
                <li>Generar ruido de marketing</li>
                <li>Recompensar a los primeros seguidores</li>
                <li>Aumentar la descentralización</li>
            </ul>
            
            <div class="key-takeaway">
                <h4>Puntos Clave</h4>
                <ul>
                    <li>Los airdrops son distribuciones gratuitas de criptomonedas</li>
                    <li>Pueden valer miles de dólares</li>
                    <li>Los airdrops retroactivos recompensan a los usuarios pasados</li>
                    <li>Requiere participación activa en el ecosistema cripto</li>
                </ul>
            </div>
        `,
            quiz: [
                {
                    question: "¿Qué es un airdrop?",
                    options: ["Comprar cripto", "Distribución gratuita de tokens", "Minar cripto", "Intercambiar tokens"],
                    correct: 1
                },
                {
                    question: "¿Cuánto valió el airdrop de Uniswap?",
                    options: ["$10", "$100", "$1,200-$12,000", "$1 millón"],
                    correct: 2
                }
            ]
        }
    },

    "47": {
        en: {
            title: "Setting Up Wallets",
            duration: "18 min",
            content: `
            <h3>Wallet Setup for Airdrop Hunting</h3>
            <p>Proper wallet setup is essential for safely participating in airdrops.</p>
            
            <h4>Recommended Wallets</h4>
            <div class="wallet-card">
                <h5>🦊 MetaMask</h5>
                <p>Most popular Ethereum wallet</p>
                <p class="pros">✅ Easy to use, widely supported</p>
                <p class="pros">✅ Browser extension + mobile app</p>
            </div>
            
            <div class="wallet-card">
                <h5>🔷 Rabby Wallet</h5>
                <p>Advanced multi-chain wallet</p>
                <p class="pros">✅ Better security features</p>
                <p class="pros">✅ Shows transaction simulations</p>
            </div>
            
            <div class="wallet-card">
                <h5>⚡ Phantom</h5>
                <p>Best for Solana ecosystem</p>
                <p class="pros">✅ Solana airdrops</p>
            </div>
            
            <h4>Setting Up MetaMask</h4>
            <div class="step-guide">
                <ol>
                    <li>Install MetaMask extension</li>
                    <li>Create new wallet</li>
                    <li>Write down seed phrase (12 words)</li>
                    <li>Store seed phrase securely offline</li>
                    <li>Never share seed phrase with anyone</li>
                    <li>Add networks (Arbitrum, Optimism, etc.)</li>
                </ol>
            </div>
            
            <h4>Multiple Wallet Strategy</h4>
            <div class="strategy-box">
                <p><strong>Main Wallet:</strong> Hold valuable assets</p>
                <p><strong>Airdrop Wallets:</strong> 3-5 wallets for farming</p>
                <p><strong>Burner Wallet:</strong> For risky/unknown projects</p>
            </div>
            
            <div class="warning-box">
                <h5>🔐 Critical Security Rules:</h5>
                <ul>
                    <li>NEVER share your seed phrase</li>
                    <li>NEVER enter seed phrase on websites</li>
                    <li>Use hardware wallet for large amounts</li>
                    <li>Keep seed phrase offline (paper/metal)</li>
                    <li>Use separate wallets for airdrops</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>MetaMask is the most versatile wallet</li>
                    <li>Use multiple wallets for safety</li>
                    <li>Never share your seed phrase</li>
                    <li>Store seed phrases offline securely</li>
                </ul>
            </div>
        `,
            quiz: [
                {
                    question: "What should you NEVER do with your seed phrase?",
                    options: ["Write it down", "Share it with anyone", "Store it offline", "Memorize it"],
                    correct: 1
                },
                {
                    question: "How many airdrop wallets should you use?",
                    options: ["Only 1", "3-5 wallets", "100 wallets", "None"],
                    correct: 1
                }
            ]
        },
        es: {
            title: "Configuración de Billetera",
            duration: "18 min",
            content: `
            <h3>Configuración de Billetera para Caza de Airdrops</h3>
            <p>La configuración adecuada de la billetera es esencial para participar de forma segura en airdrops.</p>
            
            <h4>Billeteras Recomendadas</h4>
            <div class="wallet-card">
                <h5>🦊 MetaMask</h5>
                <p>La billetera de Ethereum más popular</p>
                <p class="pros">✅ Fácil de usar, ampliamente compatible</p>
                <p class="pros">✅ Extensión de navegador + app móvil</p>
            </div>
            
            <div class="wallet-card">
                <h5>🔷 Rabby Wallet</h5>
                <p>Billetera multi-cadena avanzada</p>
                <p class="pros">✅ Mejores características de seguridad</p>
                <p class="pros">✅ Muestra simulaciones de transacciones</p>
            </div>
            
            <div class="wallet-card">
                <h5>⚡ Phantom</h5>
                <p>La mejor para el ecosistema Solana</p>
                <p class="pros">✅ Airdrops de Solana</p>
            </div>
            
            <h4>Configurando MetaMask</h4>
            <div class="step-guide">
                <ol>
                    <li>Instalar extensión MetaMask</li>
                    <li>Crear nueva billetera</li>
                    <li>Escribir frase semilla (12 palabras)</li>
                    <li>Guardar frase semilla de forma segura offline</li>
                    <li>Nunca compartir frase semilla con nadie</li>
                    <li>Agregar redes (Arbitrum, Optimism, etc.)</li>
                </ol>
            </div>
            
            <h4>Estrategia de Múltiples Billeteras</h4>
            <div class="strategy-box">
                <p><strong>Billetera Principal:</strong> Mantener activos valiosos</p>
                <p><strong>Billeteras de Airdrop:</strong> 3-5 billeteras para farming</p>
                <p><strong>Billetera Desechable:</strong> Para proyectos riesgosos/desconocidos</p>
            </div>
            
            <div class="warning-box">
                <h5>🔐 Reglas Críticas de Seguridad:</h5>
                <ul>
                    <li>NUNCA compartas tu frase semilla</li>
                    <li>NUNCA ingreses frase semilla en sitios web</li>
                    <li>Usa billetera de hardware para grandes cantidades</li>
                    <li>Mantén frase semilla offline (papel/metal)</li>
                    <li>Usa billeteras separadas para airdrops</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Puntos Clave</h4>
                <ul>
                    <li>MetaMask es la billetera más versátil</li>
                    <li>Usa múltiples billeteras para seguridad</li>
                    <li>Nunca compartas tu frase semilla</li>
                    <li>Guarda frases semilla offline de forma segura</li>
                </ul>
            </div>
        `,
            quiz: [
                {
                    question: "¿Qué NUNCA debes hacer con tu frase semilla?",
                    options: ["Escribirla", "Compartirla con alguien", "Guardarla offline", "Memorizarla"],
                    correct: 1
                },
                {
                    question: "¿Cuántas billeteras de airdrop debes usar?",
                    options: ["Solo 1", "3-5 billeteras", "100 billeteras", "Ninguna"],
                    correct: 1
                }
            ]
        }
    },

    "48": {
        en: {
            title: "Airdrop Security Basics",
            duration: "20 min",
            content: `
            <h3>Staying Safe While Airdrop Hunting</h3>
            <p>Security is paramount when participating in airdrops to avoid scams and protect your funds.</p>
            
            <h4>Common Airdrop Scams</h4>
            <div class="scam-warning">
                <h5>🚨 Seed Phrase Phishing</h5>
                <p>Fake websites asking for seed phrase</p>
                <p><strong>Red flag:</strong> Any site requesting seed phrase</p>
                <p class="warning">⚠️ NEVER enter seed phrase anywhere!</p>
            </div>
            
            <div class="scam-warning">
                <h5>🎣 Fake Airdrop Sites</h5>
                <p>Impersonating real projects</p>
                <p><strong>Check:</strong> Official links from project Twitter</p>
            </div>
            
            <div class="scam-warning">
                <h5>💸 "Send to Receive" Scams</h5>
                <p>"Send 1 ETH, receive 10 ETH"</p>
                <p class="warning">⚠️ Real airdrops NEVER ask you to send crypto!</p>
            </div>
            
            <h4>Security Best Practices</h4>
            <ul>
                <li>✅ Use burner wallets for unknown projects</li>
                <li>✅ Verify official links on project Twitter</li>
                <li>✅ Check smart contract permissions</li>
                <li>✅ Revoke approvals regularly (revoke.cash)</li>
                <li>✅ Never connect main wallet to sketchy sites</li>
                <li>✅ Use hardware wallet for large holdings</li>
            </ul>
            
            <h4>Verifying Legitimate Airdrops</h4>
            <div class="verification-checklist">
                <h5>✅ Legitimacy Checklist:</h5>
                <ul>
                    <li>Official announcement on project Twitter</li>
                    <li>Mentioned on project Discord/Telegram</li>
                    <li>Listed on reputable airdrop sites</li>
                    <li>Active community discussion</li>
                    <li>Transparent team and documentation</li>
                </ul>
            </div>
            
            <h4>Revoking Permissions</h4>
            <div class="info-box">
                <p>Regularly revoke smart contract approvals:</p>
                <ul>
                    <li><strong>revoke.cash</strong> - Check and revoke approvals</li>
                    <li><strong>etherscan.io</strong> - View token approvals</li>
                </ul>
                <p><strong>Why:</strong> Prevents malicious contracts from draining funds</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Never share or enter seed phrase anywhere</li>
                    <li>Real airdrops never ask you to send crypto</li>
                    <li>Use burner wallets for risky projects</li>
                    <li>Revoke smart contract approvals regularly</li>
                    <li>Always verify airdrop legitimacy</li>
                </ul>
            </div>
        `,
            quiz: [
                {
                    question: "What should a real airdrop NEVER ask for?",
                    options: ["Twitter follow", "Seed phrase", "Wallet address", "Discord join"],
                    correct: 1
                },
                {
                    question: "What tool can you use to revoke approvals?",
                    options: ["MetaMask only", "revoke.cash", "Twitter", "Discord"],
                    correct: 1
                }
            ]
        },
        es: {
            title: "Conceptos Básicos de Seguridad",
            duration: "20 min",
            content: `
            <h3>Manteniéndose Seguro Mientras Cazas Airdrops</h3>
            <p>La seguridad es primordial al participar en airdrops para evitar estafas y proteger tus fondos.</p>
            
            <h4>Estafas Comunes de Airdrop</h4>
            <div class="scam-warning">
                <h5>🚨 Phishing de Frase Semilla</h5>
                <p>Sitios web falsos pidiendo frase semilla</p>
                <p><strong>Bandera roja:</strong> Cualquier sitio que pida frase semilla</p>
                <p class="warning">⚠️ ¡NUNCA ingreses frase semilla en ningún lugar!</p>
            </div>
            
            <div class="scam-warning">
                <h5>🎣 Sitios de Airdrop Falsos</h5>
                <p>Imitando proyectos reales</p>
                <p><strong>Verificar:</strong> Enlaces oficiales del Twitter del proyecto</p>
            </div>
            
            <div class="scam-warning">
                <h5>💸 Estafas "Envía para Recibir"</h5>
                <p>"Envía 1 ETH, recibe 10 ETH"</p>
                <p class="warning">⚠️ ¡Los airdrops reales NUNCA te piden enviar cripto!</p>
            </div>
            
            <h4>Mejores Prácticas de Seguridad</h4>
            <ul>
                <li>✅ Usa billeteras desechables para proyectos desconocidos</li>
                <li>✅ Verifica enlaces oficiales en Twitter del proyecto</li>
                <li>✅ Verifica permisos de contratos inteligentes</li>
                <li>✅ Revoca aprobaciones regularmente (revoke.cash)</li>
                <li>✅ Nunca conectes billetera principal a sitios sospechosos</li>
                <li>✅ Usa billetera de hardware para grandes tenencias</li>
            </ul>
            
            <h4>Verificando Airdrops Legítimos</h4>
            <div class="verification-checklist">
                <h5>✅ Lista de Verificación de Legitimidad:</h5>
                <ul>
                    <li>Anuncio oficial en Twitter del proyecto</li>
                    <li>Mencionado en Discord/Telegram del proyecto</li>
                    <li>Listado en sitios de airdrop reputados</li>
                    <li>Discusión activa de la comunidad</li>
                    <li>Equipo y documentación transparentes</li>
                </ul>
            </div>
            
            <h4>Revocando Permisos</h4>
            <div class="info-box">
                <p>Revoca regularmente aprobaciones de contratos inteligentes:</p>
                <ul>
                    <li><strong>revoke.cash</strong> - Verificar y revocar aprobaciones</li>
                    <li><strong>etherscan.io</strong> - Ver aprobaciones de tokens</li>
                </ul>
                <p><strong>Por qué:</strong> Previene que contratos maliciosos drenen fondos</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Puntos Clave</h4>
                <ul>
                    <li>Nunca compartas o ingreses frase semilla en ningún lugar</li>
                    <li>Los airdrops reales nunca te piden enviar cripto</li>
                    <li>Usa billeteras desechables para proyectos riesgosos</li>
                    <li>Revoca aprobaciones de contratos inteligentes regularmente</li>
                    <li>Siempre verifica la legitimidad del airdrop</li>
                </ul>
            </div>
        `,
            quiz: [
                {
                    question: "¿Qué NUNCA debe pedir un airdrop real?",
                    options: ["Seguir en Twitter", "Frase semilla", "Dirección de billetera", "Unirse a Discord"],
                    correct: 1
                },
                {
                    question: "¿Qué herramienta puedes usar para revocar aprobaciones?",
                    options: ["Solo MetaMask", "revoke.cash", "Twitter", "Discord"],
                    correct: 1
                }
            ]
        }
    },

    "49": {
        title: "Finding Airdrops",
        duration: "15 min",
        content: `
            <h3>How to Discover Airdrop Opportunities</h3>
            <p>Finding quality airdrops early is key to maximizing rewards.</p>
            
            <h4>Best Airdrop Resources</h4>
            <div class="resource-card">
                <h5>🐦 Twitter (X)</h5>
                <p>Follow airdrop hunters and project accounts</p>
                <p><strong>Key accounts:</strong> @AirdropDetective, @0xSisyphus, @thedefiedge</p>
            </div>
            
            <div class="resource-card">
                <h5>📱 Telegram/Discord</h5>
                <p>Join airdrop communities</p>
                <p><strong>Channels:</strong> Airdrop alerts, project announcements</p>
            </div>
            
            <div class="resource-card">
                <h5>🌐 Airdrop Websites</h5>
                <ul>
                    <li>airdrops.io</li>
                    <li>earnifi.com</li>
                    <li>dropsearn.com</li>
                </ul>
            </div>
            
            <h4>Identifying Potential Airdrops</h4>
            <div class="strategy-box">
                <h5>Signs of Potential Airdrop:</h5>
                <ul>
                    <li>No token launched yet</li>
                    <li>Large VC funding</li>
                    <li>Active development</li>
                    <li>Points/rewards system</li>
                    <li>Testnet available</li>
                    <li>Similar projects did airdrops</li>
                </ul>
            </div>
            
            <h4>Early vs Late Farming</h4>
            <table>
                <tr><th>Timing</th><th>Pros</th><th>Cons</th></tr>
                <tr><td>Early</td><td>Less competition, higher rewards</td><td>More risk, longer wait</td></tr>
                <tr><td>Late</td><td>More certain</td><td>Lower rewards, more competition</td></tr>
            </table>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Twitter is the best source for airdrop info</li>
                    <li>Join airdrop communities</li>
                    <li>Look for projects without tokens</li>
                    <li>Early participation = higher rewards</li>
                </ul>
            </div>
        `,
        video: {
            id: 'lesson49-video',
            type: 'youtube',
            videoId: 'rYQgy8QDEBI', // Placeholder
            title: 'How to Find Airdrops',
            description: 'Learn the strategies to discover high-value airdrops early using Twitter and other tools.',
            duration: '15:00'
        },
        quiz: [
            {
                question: "What is the best platform for finding airdrops?",
                options: ["Facebook", "Twitter (X)", "Instagram", "TikTok"],
                correct: 1
            },
            {
                question: "What indicates a potential airdrop?",
                options: ["Token already launched", "No token yet + VC funding", "Old project", "No development"],
                correct: 1
            }
        ]
    },

    "50": {
        title: "Testnet Participation",
        duration: "22 min",
        content: `
            <h3>Farming Testnets for Airdrops</h3>
            <p>Testnet participation is one of the most reliable ways to qualify for airdrops.</p>
            
            <h4>What are Testnets?</h4>
            <div class="definition-box">
                <p><strong>Testnet:</strong> Test version of blockchain where tokens have no real value</p>
                <p><strong>Purpose:</strong> Test features before mainnet launch</p>
                <p><strong>Airdrop value:</strong> Projects often reward testnet users</p>
            </div>
            
            <h4>Getting Testnet Tokens</h4>
            <div class="step-guide">
                <h5>Faucets for Free Testnet Tokens:</h5>
                <ul>
                    <li><strong>Sepolia ETH:</strong> sepoliafaucet.com</li>
                    <li><strong>Goerli ETH:</strong> goerlifaucet.com</li>
                    <li><strong>Arbitrum Goerli:</strong> bridge.arbitrum.io</li>
                </ul>
            </div>
            
            <h4>Testnet Activities</h4>
            <div class="activity-list">
                <h5>What to Do on Testnets:</h5>
                <ol>
                    <li>Bridge tokens between networks</li>
                    <li>Swap on DEXs</li>
                    <li>Provide liquidity</li>
                    <li>Mint NFTs</li>
                    <li>Use dApps and protocols</li>
                    <li>Complete quests/tasks</li>
                </ol>
            </div>
            
            <h4>Successful Testnet Airdrops</h4>
            <table>
                <tr><th>Project</th><th>Testnet Required</th><th>Airdrop Value</th></tr>
                <tr><td>Aptos</td><td>Yes</td><td>$1,000-$5,000</td></tr>
                <tr><td>Arbitrum</td><td>Helpful</td><td>$1,000-$10,000</td></tr>
                <tr><td>Optimism</td><td>Helpful</td><td>$500-$5,000</td></tr>
            </table>
            
            <h4>Testnet Strategy</h4>
            <div class="strategy-box">
                <p><strong>Frequency:</strong> Use testnet weekly for 2-3 months</p>
                <p><strong>Diversity:</strong> Try all available features</p>
                <p><strong>Consistency:</strong> Regular activity > one-time usage</p>
                <p><strong>Documentation:</strong> Screenshot transactions</p>
            </div>
            
            <div class="warning-box">
                <h5>⚠️ Testnet Tips:</h5>
                <ul>
                    <li>Testnet tokens have NO value - don't buy them</li>
                    <li>Use same wallet across testnets</li>
                    <li>Complete official quests/tasks</li>
                    <li>Be patient - airdrops take months</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Testnets are practice blockchains</li>
                    <li>Testnet participation often leads to airdrops</li>
                    <li>Get free testnet tokens from faucets</li>
                    <li>Regular, diverse activity is best</li>
                    <li>Be patient - rewards come later</li>
                </ul>
            </div>
        `,
        video: {
            id: 'lesson50-video',
            type: 'youtube',
            videoId: 'rYQgy8QDEBI', // Placeholder
            title: 'Farming Testnet Airdrops',
            description: 'A step-by-step guide to participating in testnets to qualify for potential future airdrops.',
            duration: '22:00'
        },
        quiz: [
            {
                question: "What is a testnet?",
                options: ["Real blockchain", "Test version of blockchain", "Scam", "Mining pool"],
                correct: 1
            },
            {
                question: "Should you buy testnet tokens?",
                options: ["Yes, always", "No, they're free and worthless", "Sometimes", "Only expensive ones"],
                correct: 1
            }
        ]
    }
    ,

    // Level 2: Airdrop Strategies  
    "51": {
        title: "Social Media Tasks",
        duration: "16 min",
        content: `
            <h3>Completing Social Media Requirements</h3>
            <p>Most airdrops require social media engagement to build community awareness.</p>
            
            <h4>Common Social Tasks</h4>
            <ul>
                <li>Follow project on Twitter</li>
                <li>Retweet announcement</li>
                <li>Join Discord server</li>
                <li>Join Telegram group</li>
                <li>Tag friends in comments</li>
                <li>Create content about project</li>
            </ul>
            
            <h4>Twitter Strategy</h4>
            <div class="strategy-box">
                <p><strong>Create dedicated crypto Twitter:</strong> Separate from personal</p>
                <p><strong>Engage authentically:</strong> Don't just spam</p>
                <p><strong>Build following:</strong> More followers = better airdrop chances</p>
                <p><strong>Use lists:</strong> Organize projects you're farming</p>
            </div>
            
            <h4>Discord Best Practices</h4>
            <ul>
                <li>✅ Verify account properly</li>
                <li>✅ Read announcements channel</li>
                <li>✅ Participate in discussions</li>
                <li>✅ Complete role assignments</li>
                <li>❌ Don't spam or beg for airdrops</li>
            </ul>
            
            <div class="warning-box">
                <h5>⚠️ Discord Scam Warning:</h5>
                <p>Admins will NEVER DM you first</p>
                <p>Never click suspicious links in DMs</p>
                <p>Enable 2FA on Discord</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Social engagement is required for most airdrops</li>
                    <li>Use dedicated crypto social accounts</li>
                    <li>Engage authentically, not spam</li>
                    <li>Beware of Discord scammers</li>
                </ul>
            </div>
        `,
        video: {
            id: 'lesson51-video',
            type: 'youtube',
            videoId: 'rYQgy8QDEBI', // Placeholder
            title: 'Social Media Tasks for Airdrops',
            description: 'How to manage your social media presence to maximize your airdrop eligibility.',
            duration: '16:00'
        },
        quiz: [
            {
                question: "What should you do for airdrop social tasks?",
                options: ["Use personal accounts", "Create dedicated crypto accounts", "Ignore them", "Spam everywhere"],
                correct: 1
            },
            {
                question: "Will real Discord admins DM you first?",
                options: ["Yes, always", "No, never", "Sometimes", "Only for airdrops"],
                correct: 1
            }
        ]
    },

    "52": {
        title: "Understanding Snapshots",
        duration: "18 min",
        content: `
            <h3>Snapshot Strategies for Airdrops</h3>
            <p>Snapshots determine airdrop eligibility by recording wallet activity at specific times.</p>
            
            <h4>What is a Snapshot?</h4>
            <div class="definition-box">
                <p><strong>Snapshot:</strong> Recording of blockchain state at specific block/time</p>
                <p><strong>Purpose:</strong> Determine who qualifies for airdrop</p>
                <p><strong>Timing:</strong> Usually announced retroactively</p>
            </div>
            
            <h4>Snapshot Criteria</h4>
            <table>
                <tr><th>Criteria</th><th>Example</th><th>Strategy</th></tr>
                <tr><td>Transaction count</td><td>Min 10 txs</td><td>Make diverse transactions</td></tr>
                <tr><td>Volume traded</td><td>$1,000+</td><td>Trade regularly</td></tr>
                <tr><td>Time period</td><td>3+ months active</td><td>Start early</td></tr>
                <tr><td>Unique days</td><td>Active 10+ days</td><td>Spread activity</td></tr>
            </table>
            
            <h4>Maximizing Snapshot Value</h4>
            <div class="strategy-box">
                <h5>Best Practices:</h5>
                <ul>
                    <li>Use protocol consistently over months</li>
                    <li>Perform diverse activities (swap, bridge, stake)</li>
                    <li>Maintain minimum balances</li>
                    <li>Interact on multiple days</li>
                    <li>Use multiple wallets (3-5)</li>
                </ul>
            </div>
            
            <h4>Avoiding Sybil Detection</h4>
            <div class="warning-box">
                <h5>⚠️ Sybil Attacks:</h5>
                <p>Using many wallets to game airdrops</p>
                <p><strong>Detection methods:</strong></p>
                <ul>
                    <li>Wallets funded from same source</li>
                    <li>Identical transaction patterns</li>
                    <li>Same amounts/timing</li>
                    <li>Batch transactions</li>
                </ul>
                <p><strong>Solution:</strong> Make each wallet unique</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Snapshots record wallet activity at specific times</li>
                    <li>Consistent, diverse activity is rewarded</li>
                    <li>Use multiple wallets with unique patterns</li>
                    <li>Avoid obvious Sybil behavior</li>
                </ul>
            </div>
        `,
        video: {
            id: 'lesson52-video',
            type: 'youtube',
            videoId: 'rYQgy8QDEBI', // Placeholder
            title: 'Understanding Airdrop Snapshots',
            description: 'What are snapshots, how do they work, and how can you ensure you qualify?',
            duration: '18:00'
        },
        quiz: [
            {
                question: "What is a snapshot?",
                options: ["A photo", "Recording of blockchain state", "A scam", "A wallet"],
                correct: 1
            },
            {
                question: "How to avoid Sybil detection?",
                options: ["Use identical patterns", "Make each wallet unique", "Use one wallet", "Copy transactions"],
                correct: 1
            }
        ]
    },

    "53": {
        title: "Gas Optimization",
        duration: "20 min",
        content: `
            <h3>Minimizing Gas Costs for Airdrops</h3>
            <p>Gas fees can eat into airdrop profits. Learn to optimize costs.</p>
            
            <h4>Understanding Gas</h4>
            <div class="info-box">
                <p><strong>Gas:</strong> Fee paid to execute transactions</p>
                <p><strong>Measured in:</strong> Gwei (1 ETH = 1 billion Gwei)</p>
                <p><strong>Cost = Gas Used × Gas Price</strong></p>
            </div>
            
            <h4>When to Transact</h4>
            <table>
                <tr><th>Time (UTC)</th><th>Gas Level</th><th>Reason</th></tr>
                <tr><td>2am-6am</td><td>Lowest</td><td>Asia sleeping, US sleeping</td></tr>
                <tr><td>Weekends</td><td>Lower</td><td>Less trading activity</td></tr>
                <tr><td>2pm-6pm</td><td>Highest</td><td>US + Europe active</td></tr>
            </table>
            
            <h4>Gas Tracking Tools</h4>
            <ul>
                <li><strong>etherscan.io/gastracker</strong> - Real-time gas prices</li>
                <li><strong>ultrasound.money</strong> - Gas predictions</li>
                <li><strong>blocknative.com</strong> - Gas estimator</li>
            </ul>
            
            <h4>Layer 2 Solutions</h4>
            <div class="l2-benefits">
                <h5>Use L2s for Cheaper Transactions:</h5>
                <ul>
                    <li><strong>Arbitrum:</strong> 90% cheaper than Ethereum</li>
                    <li><strong>Optimism:</strong> 85% cheaper</li>
                    <li><strong>zkSync:</strong> 95% cheaper</li>
                    <li><strong>Base:</strong> 90% cheaper</li>
                </ul>
            </div>
            
            <h4>Gas Saving Strategies</h4>
            <div class="strategy-box">
                <ul>
                    <li>Batch transactions when possible</li>
                    <li>Use L2 networks</li>
                    <li>Transact during low-traffic hours</li>
                    <li>Set custom gas limits</li>
                    <li>Use gas tokens (Chi, GST2)</li>
                    <li>Avoid complex smart contracts</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Gas fees vary by time and network congestion</li>
                    <li>Transact early morning UTC for lowest fees</li>
                    <li>Layer 2 networks are 85-95% cheaper</li>
                    <li>Use gas trackers to time transactions</li>
                </ul>
            </div>
        `,
        video: {
            id: 'lesson53-video',
            type: 'youtube',
            videoId: 'rYQgy8QDEBI', // Placeholder
            title: 'Gas Optimization Strategies',
            description: 'Save money on transaction fees with these gas optimization tips and tricks.',
            duration: '20:00'
        },
        quiz: [
            {
                question: "When is gas cheapest?",
                options: ["Peak hours", "Early morning UTC", "Never", "Weekdays"],
                correct: 1
            },
            {
                question: "How much cheaper are Layer 2 networks?",
                options: ["10%", "50%", "85-95%", "Same cost"],
                correct: 2
            }
        ]
    },

    "54": {
        title: "Multi-Wallet Management",
        duration: "22 min",
        content: `
            <h3>Managing Multiple Airdrop Wallets</h3>
            <p>Using multiple wallets increases airdrop rewards but requires organization.</p>
            
            <h4>Why Multiple Wallets?</h4>
            <ul>
                <li>Multiply airdrop rewards (3-5x)</li>
                <li>Reduce risk of detection</li>
                <li>Separate risky from safe activities</li>
                <li>Diversify across strategies</li>
            </ul>
            
            <h4>Recommended Setup</h4>
            <div class="wallet-structure">
                <p><strong>Main Wallet:</strong> Hardware wallet, large holdings</p>
                <p><strong>Farming Wallets (3-5):</strong> Active airdrop hunting</p>
                <p><strong>Burner Wallets (2-3):</strong> Risky/unknown projects</p>
                <p><strong>Total: 6-9 wallets</strong></p>
            </div>
            
            <h4>Organization System</h4>
            <div class="step-guide">
                <h5>Tracking Method:</h5>
                <ol>
                    <li>Name each wallet (Wallet A, B, C)</li>
                    <li>Use spreadsheet to track activities</li>
                    <li>Record transactions per wallet</li>
                    <li>Note funding sources</li>
                    <li>Track gas spent vs potential rewards</li>
                </ol>
            </div>
            
            <h4>Funding Strategy</h4>
            <div class="strategy-box">
                <p><strong>Avoid:</strong> Funding all from one source</p>
                <p><strong>Better:</strong> Use different CEX withdrawals</p>
                <p><strong>Best:</strong> Mix of CEX, bridges, swaps</p>
                <p><strong>Goal:</strong> Make wallets look independent</p>
            </div>
            
            <h4>Activity Patterns</h4>
            <table>
                <tr><th>Wallet</th><th>Strategy</th><th>Risk</th></tr>
                <tr><td>Wallet A</td><td>High volume, frequent</td><td>Low</td></tr>
                <tr><td>Wallet B</td><td>Medium volume, weekly</td><td>Low</td></tr>
                <tr><td>Wallet C</td><td>Low volume, monthly</td><td>Low</td></tr>
                <tr><td>Burner 1</td><td>New/risky projects</td><td>High</td></tr>
            </table>
            
            <div class="warning-box">
                <h5>⚠️ Management Tips:</h5>
                <ul>
                    <li>Never mix wallet seed phrases</li>
                    <li>Label each wallet clearly</li>
                    <li>Keep separate spreadsheet records</li>
                    <li>Vary transaction amounts/timing</li>
                    <li>Don't batch-send to all wallets</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Use 6-9 wallets total for optimal farming</li>
                    <li>Keep detailed records in spreadsheets</li>
                    <li>Make each wallet's activity unique</li>
                    <li>Fund wallets from different sources</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "How many farming wallets should you use?",
                options: ["1", "3-5", "100", "None"],
                correct: 1
            },
            {
                question: "How should you fund multiple wallets?",
                options: ["All from one source", "Different sources to look independent", "Don't fund them", "Only use one wallet"],
                correct: 1
            }
        ]
    },

    "55": {
        title: "Discord Strategies",
        duration: "14 min",
        content: `
            <h3>Maximizing Discord for Airdrops</h3>
            <p>Discord is central to crypto communities and airdrop participation.</p>
            
            <h4>Discord Setup</h4>
            <div class="setup-guide">
                <ul>
                    <li>Create dedicated crypto Discord account</li>
                    <li>Enable 2FA immediately</li>
                    <li>Use strong, unique password</li>
                    <li>Verify email</li>
                    <li>Customize privacy settings</li>
                </ul>
            </div>
            
            <h4>Earning Roles & XP</h4>
            <p>Many projects reward active Discord members:</p>
            <ul>
                <li>Complete verification</li>
                <li>Participate in discussions</li>
                <li>Answer questions</li>
                <li>Attend AMAs/events</li>
                <li>Create helpful content</li>
                <li>Earn leveling roles</li>
            </ul>
            
            <h4>Discord Scams to Avoid</h4>
            <div class="scam-warning">
                <h5>🚨 Common Scams:</h5>
                <ul>
                    <li><strong>Fake admin DMs:</strong> "Verify your wallet"</li>
                    <li><strong>Phishing links:</strong> Fake mint/claim sites</li>
                    <li><strong>Fake giveaways:</strong> "Send 1 ETH, get 10"</li>
                    <li><strong>Impersonator bots:</strong> Copy real user names</li>
                </ul>
                <p class="warning">⚠️ Real admins NEVER DM first!</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Use dedicated Discord for crypto</li>
                    <li>Enable 2FA for security</li>
                    <li>Participate authentically for roles</li>
                    <li>Never trust unsolicited DMs</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "Will real Discord admins DM you first?",
                options: ["Yes", "No", "Sometimes", "For airdrops only"],
                correct: 1
            },
            {
                question: "What should you enable on Discord?",
                options: ["Nothing", "2FA", "Public DMs", "Auto-join"],
                correct: 1
            }
        ]
    }
    ,

    // Level 3: Advanced Airdrop Hunting
    "56": {
        title: "Twitter Engagement",
        duration: "14 min",
        content: `
            <h3>Building Twitter Presence for Airdrops</h3>
            <p>A strong Twitter presence increases airdrop eligibility and allocation.</p>
            
            <h4>Creating Crypto Twitter Account</h4>
            <ul>
                <li>Professional username (crypto-related)</li>
                <li>Clear bio mentioning crypto interests</li>
                <li>Profile picture (not default)</li>
                <li>Banner image</li>
                <li>Link to other socials</li>
            </ul>
            
            <h4>Growing Your Following</h4>
            <div class="strategy-box">
                <p><strong>Engage authentically:</strong> Comment on project posts</p>
                <p><strong>Share insights:</strong> Post about projects you use</p>
                <p><strong>Join conversations:</strong> Participate in crypto discussions</p>
                <p><strong>Follow back:</strong> Engage with followers</p>
                <p><strong>Use hashtags:</strong> #Crypto #DeFi #Airdrop</p>
            </div>
            
            <h4>What Projects Look For</h4>
            <table>
                <tr><th>Metric</th><th>Good</th><th>Excellent</th></tr>
                <tr><td>Followers</td><td>100+</td><td>500+</td></tr>
                <tr><td>Account Age</td><td>3+ months</td><td>1+ year</td></tr>
                <tr><td>Engagement</td><td>Regular posts</td><td>Daily activity</td></tr>
            </table>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Build authentic crypto Twitter presence</li>
                    <li>Engage regularly, don't just lurk</li>
                    <li>Older accounts with followers get better allocations</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What follower count is good for airdrops?",
                options: ["0", "10", "100+", "1 million"],
                correct: 2
            },
            {
                question: "How should you engage on Twitter?",
                options: ["Never post", "Spam only", "Authentically participate", "Buy followers"],
                correct: 2
            }
        ]
    },

    "57": {
        title: "Documentation & Tracking",
        duration: "16 min",
        content: `
            <h3>Organizing Your Airdrop Activities</h3>
            <p>Proper documentation ensures you don't miss airdrops and can prove eligibility.</p>
            
            <h4>Spreadsheet Tracking</h4>
            <div class="tracking-template">
                <h5>Essential Columns:</h5>
                <ul>
                    <li>Project Name</li>
                    <li>Wallet Addresses Used</li>
                    <li>Activities Completed</li>
                    <li>Transaction Hashes</li>
                    <li>Dates of Activity</li>
                    <li>Gas Spent</li>
                    <li>Expected Airdrop Date</li>
                    <li>Status (Active/Claimed/Missed)</li>
                </ul>
            </div>
            
            <h4>Screenshot Everything</h4>
            <ul>
                <li>✅ Transaction confirmations</li>
                <li>✅ Completed quests</li>
                <li>✅ Discord roles</li>
                <li>✅ Social media tasks</li>
                <li>✅ Wallet balances at snapshots</li>
            </ul>
            
            <h4>Tools for Tracking</h4>
            <div class="tool-list">
                <p><strong>DeBank:</strong> Track all wallet activities</p>
                <p><strong>Zapper:</strong> Portfolio tracking</p>
                <p><strong>Nansen:</strong> Advanced analytics (paid)</p>
                <p><strong>Google Sheets:</strong> Custom tracking</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Keep detailed spreadsheets of all activities</li>
                    <li>Screenshot important transactions</li>
                    <li>Use portfolio trackers</li>
                    <li>Documentation helps prove eligibility</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "Why document airdrop activities?",
                options: ["Not necessary", "Prove eligibility and track progress", "Waste of time", "Only for taxes"],
                correct: 1
            },
            {
                question: "What should you screenshot?",
                options: ["Nothing", "Only failures", "Transactions and completed tasks", "Random things"],
                correct: 2
            }
        ]
    },

    "58": {
        title: "Detecting Scam Airdrops",
        duration: "18 min",
        content: `
            <h3>Identifying Fake and Malicious Airdrops</h3>
            <p>Not all airdrops are legitimate. Learn to spot scams before losing funds.</p>
            
            <h4>Red Flags</h4>
            <div class="warning-box">
                <h5>🚨 Immediate Red Flags:</h5>
                <ul>
                    <li>Asks for seed phrase</li>
                    <li>Requires sending crypto first</li>
                    <li>Too good to be true promises</li>
                    <li>Unsolicited DMs about airdrops</li>
                    <li>Suspicious smart contract permissions</li>
                    <li>No official announcement</li>
                    <li>Fake team/advisors</li>
                </ul>
            </div>
            
            <h4>Verification Checklist</h4>
            <div class="checklist">
                <h5>✅ Before Participating:</h5>
                <ul>
                    <li>Check official Twitter for announcement</li>
                    <li>Verify in official Discord/Telegram</li>
                    <li>Read smart contract on Etherscan</li>
                    <li>Check team backgrounds</li>
                    <li>Look for community discussion</li>
                    <li>Verify website SSL certificate</li>
                    <li>Check domain age</li>
                </ul>
            </div>
            
            <h4>Common Scam Types</h4>
            <table>
                <tr><th>Scam</th><th>How It Works</th><th>Protection</th></tr>
                <tr><td>Phishing</td><td>Fake websites steal keys</td><td>Verify URLs</td></tr>
                <tr><td>Rug Pull</td><td>Token value crashes</td><td>Use burner wallet</td></tr>
                <tr><td>Honeypot</td><td>Can't sell tokens</td><td>Check contract code</td></tr>
                <tr><td>Drainer</td><td>Empties your wallet</td><td>Revoke approvals</td></tr>
            </table>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Never share seed phrase for airdrops</li>
                    <li>Verify everything through official channels</li>
                    <li>Use burner wallets for risky projects</li>
                    <li>If it seems too good to be true, it is</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is an immediate red flag?",
                options: ["Official announcement", "Asking for seed phrase", "Free tokens", "Social tasks"],
                correct: 1
            },
            {
                question: "How to verify an airdrop?",
                options: ["Trust DMs", "Check official Twitter/Discord", "Assume it's real", "Send crypto first"],
                correct: 1
            }
        ]
    },

    "59": {
        title: "Privacy & Anonymity",
        duration: "20 min",
        content: `
            <h3>Protecting Your Privacy in Airdrops</h3>
            <p>Maintain privacy while participating in airdrops to protect your identity and funds.</p>
            
            <h4>Why Privacy Matters</h4>
            <ul>
                <li>Prevent wallet tracking</li>
                <li>Avoid targeted attacks</li>
                <li>Protect personal information</li>
                <li>Maintain financial privacy</li>
                <li>Reduce doxxing risk</li>
            </ul>
            
            <h4>Privacy Tools</h4>
            <div class="tool-card">
                <h5>🌪️ Tornado Cash (Use Carefully)</h5>
                <p>Breaks on-chain links between addresses</p>
                <p class="warning">⚠️ Check local regulations</p>
            </div>
            
            <div class="tool-card">
                <h5>🔐 VPN Usage</h5>
                <p>Hide IP address when claiming airdrops</p>
                <p><strong>Recommended:</strong> ProtonVPN, Mullvad</p>
            </div>
            
            <h4>Best Practices</h4>
            <div class="strategy-box">
                <ul>
                    <li>Use different email for each project</li>
                    <li>Don't link wallets to real identity</li>
                    <li>Use VPN when interacting</li>
                    <li>Separate social media accounts</li>
                    <li>Don't brag about airdrop earnings</li>
                    <li>Use privacy-focused browsers</li>
                </ul>
            </div>
            
            <h4>KYC Considerations</h4>
            <div class="info-box">
                <p><strong>Some airdrops require KYC</strong></p>
                <p>Pros: Larger allocations, legitimate projects</p>
                <p>Cons: Identity exposure, privacy loss</p>
                <p><strong>Decision:</strong> Only KYC for trusted projects</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Privacy protects you from attacks</li>
                    <li>Use VPN and separate identities</li>
                    <li>Be cautious with KYC requirements</li>
                    <li>Don't publicly share airdrop earnings</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "Why use a VPN for airdrops?",
                options: ["Not needed", "Hide IP address for privacy", "Faster internet", "Required by law"],
                correct: 1
            },
            {
                question: "Should you KYC for every airdrop?",
                options: ["Yes, always", "No, only for trusted projects", "Never", "Only for small ones"],
                correct: 1
            }
        ]
    },

    "60": {
        title: "Airdrop Calendars",
        duration: "12 min",
        content: `
            <h3>Using Airdrop Calendars Effectively</h3>
            <p>Stay organized and never miss opportunities with airdrop calendars.</p>
            
            <h4>Popular Airdrop Calendars</h4>
            <ul>
                <li><strong>airdrops.io:</strong> Comprehensive listings</li>
                <li><strong>earnifi.com:</strong> Personalized alerts</li>
                <li><strong>dropsearn.com:</strong> Curated opportunities</li>
                <li><strong>CoinMarketCap Airdrops:</strong> Verified projects</li>
            </ul>
            
            <h4>Creating Your Own Calendar</h4>
            <div class="calendar-setup">
                <h5>Google Calendar Method:</h5>
                <ol>
                    <li>Create dedicated airdrop calendar</li>
                    <li>Add snapshot dates</li>
                    <li>Set reminders for activities</li>
                    <li>Track claim dates</li>
                    <li>Note vesting schedules</li>
                </ol>
            </div>
            
            <h4>Important Dates to Track</h4>
            <table>
                <tr><th>Event</th><th>Action</th></tr>
                <tr><td>Testnet Launch</td><td>Start participating</td></tr>
                <tr><td>Snapshot Date</td><td>Ensure activity before</td></tr>
                <tr><td>Claim Opens</td><td>Claim immediately</td></tr>
                <tr><td>Claim Deadline</td><td>Don't miss it!</td></tr>
                <tr><td>Token Unlock</td><td>Plan selling strategy</td></tr>
            </table>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Use multiple airdrop calendar sources</li>
                    <li>Create personal tracking system</li>
                    <li>Set reminders for important dates</li>
                    <li>Never miss claim deadlines</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is the most important date to track?",
                options: ["Random date", "Claim deadline", "Project birthday", "Your birthday"],
                correct: 1
            },
            {
                question: "Should you use multiple calendar sources?",
                options: ["No, one is enough", "Yes, for comprehensive coverage", "Calendars are useless", "Only official ones"],
                correct: 1
            }
        ]
    },

    "61": {
        title: "Layer 2 Airdrops",
        duration: "22 min",
        content: `
            <h3>Farming Layer 2 Network Airdrops</h3>
            <p>Layer 2 networks often reward early users with valuable airdrops.</p>
            
            <h4>Major L2 Networks</h4>
            <div class="l2-card">
                <h5>✅ Arbitrum (Already Airdropped)</h5>
                <p>$1,000-$10,000 to early users</p>
                <p><strong>Lesson:</strong> Use L2s early and consistently</p>
            </div>
            
            <div class="l2-card">
                <h5>✅ Optimism (Already Airdropped)</h5>
                <p>Multiple rounds of airdrops</p>
                <p><strong>Lesson:</strong> Governance participation rewarded</p>
            </div>
            
            <div class="l2-card">
                <h5>🔮 zkSync (Potential)</h5>
                <p>Use zkSync Era for potential airdrop</p>
                <p><strong>Activities:</strong> Bridge, swap, provide liquidity</p>
            </div>
            
            <div class="l2-card">
                <h5>🔮 Starknet (Potential)</h5>
                <p>Active development, no token yet</p>
                <p><strong>Activities:</strong> Use dApps, bridge assets</p>
            </div>
            
            <h4>L2 Farming Strategy</h4>
            <div class="strategy-box">
                <ol>
                    <li>Bridge ETH to L2</li>
                    <li>Use native DEXs (swap tokens)</li>
                    <li>Provide liquidity</li>
                    <li>Use lending protocols</li>
                    <li>Interact with NFTs</li>
                    <li>Participate in governance</li>
                    <li>Use regularly (weekly minimum)</li>
                </ol>
            </div>
            
            <h4>Cost-Benefit Analysis</h4>
            <table>
                <tr><th>Activity</th><th>Gas Cost</th><th>Potential Reward</th></tr>
                <tr><td>Bridge to L2</td><td>$5-20</td><td>Eligibility</td></tr>
                <tr><td>10 swaps</td><td>$2-5</td><td>Higher allocation</td></tr>
                <tr><td>Provide liquidity</td><td>$2-5</td><td>Bonus points</td></tr>
                <tr><td>Total Investment</td><td>$10-30</td><td>$500-5,000+</td></tr>
            </table>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>L2 airdrops can be extremely valuable</li>
                    <li>Use multiple L2s regularly</li>
                    <li>Diversify activities on each L2</li>
                    <li>Low gas costs make L2 farming profitable</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What was Arbitrum airdrop worth?",
                options: ["$10", "$100", "$1,000-$10,000", "$1 million"],
                correct: 2
            },
            {
                question: "How often should you use L2s?",
                options: ["Once", "Weekly minimum", "Never", "Only on Sundays"],
                correct: 1
            }
        ]
    },

    "62": {
        title: "NFT Project Airdrops",
        duration: "18 min",
        content: `
            <h3>NFT Holder Airdrops</h3>
            <p>NFT projects often reward holders with token airdrops and exclusive benefits.</p>
            
            <h4>Types of NFT Airdrops</h4>
            <div class="nft-type">
                <h5>🎨 Holder Airdrops</h5>
                <p>Tokens airdropped to NFT holders</p>
                <p><strong>Example:</strong> ApeCoin to BAYC holders</p>
            </div>
            
            <div class="nft-type">
                <h5>🖼️ Companion NFTs</h5>
                <p>Free NFTs to existing holders</p>
                <p><strong>Example:</strong> Mutant Apes to BAYC holders</p>
            </div>
            
            <div class="nft-type">
                <h5>🎁 Utility Tokens</h5>
                <p>Governance/utility tokens for ecosystem</p>
                <p><strong>Example:</strong> Project-specific tokens</p>
            </div>
            
            <h4>NFT Airdrop Strategy</h4>
            <div class="strategy-box">
                <p><strong>Blue Chip NFTs:</strong> Expensive but reliable airdrops</p>
                <p><strong>Mid-Tier Projects:</strong> Better risk/reward ratio</p>
                <p><strong>New Projects:</strong> High risk, high reward</p>
                <p><strong>Hold Duration:</strong> Longer holding = better rewards</p>
            </div>
            
            <h4>Evaluating NFT Projects</h4>
            <ul>
                <li>Strong community</li>
                <li>Active development</li>
                <li>Clear roadmap</li>
                <li>Experienced team</li>
                <li>Utility beyond art</li>
                <li>History of delivering</li>
            </ul>
            
            <div class="warning-box">
                <h5>⚠️ NFT Risks:</h5>
                <ul>
                    <li>High entry costs</li>
                    <li>Illiquidity</li>
                    <li>Floor price volatility</li>
                    <li>No guarantee of airdrops</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>NFT holders often receive valuable airdrops</li>
                    <li>Blue chip NFTs have best track record</li>
                    <li>Hold NFTs long-term for maximum benefits</li>
                    <li>High risk but potentially high reward</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What did BAYC holders receive?",
                options: ["Nothing", "ApeCoin airdrop", "Just art", "Scam"],
                correct: 1
            },
            {
                question: "What's important for NFT airdrops?",
                options: ["Sell immediately", "Hold long-term", "Never buy NFTs", "Only buy expensive ones"],
                correct: 1
            }
        ]
    },

    "63": {
        title: "DeFi Protocol Airdrops",
        duration: "24 min",
        content: `
            <h3>Farming DeFi Protocol Airdrops</h3>
            <p>DeFi protocols frequently reward early users with governance tokens.</p>
            
            <h4>DeFi Categories to Farm</h4>
            <div class="defi-category">
                <h5>💱 DEXs (Decentralized Exchanges)</h5>
                <p><strong>Activities:</strong> Swap tokens, provide liquidity</p>
                <p><strong>Examples:</strong> Uniswap, SushiSwap, Curve</p>
            </div>
            
            <div class="defi-category">
                <h5>💰 Lending Protocols</h5>
                <p><strong>Activities:</strong> Lend, borrow assets</p>
                <p><strong>Examples:</strong> Aave, Compound</p>
            </div>
            
            <div class="defi-category">
                <h5>🌉 Bridges</h5>
                <p><strong>Activities:</strong> Bridge assets cross-chain</p>
                <p><strong>Examples:</strong> Stargate, LayerZero</p>
            </div>
            
            <div class="defi-category">
                <h5>📊 Derivatives</h5>
                <p><strong>Activities:</strong> Trade perpetuals, options</p>
                <p><strong>Examples:</strong> dYdX, GMX</p>
            </div>
            
            <h4>DeFi Farming Checklist</h4>
            <div class="checklist">
                <ul>
                    <li>✅ Make minimum 10 transactions</li>
                    <li>✅ Use protocol for 3+ months</li>
                    <li>✅ Trade minimum volume ($1,000+)</li>
                    <li>✅ Interact on multiple days</li>
                    <li>✅ Try all protocol features</li>
                    <li>✅ Provide liquidity if possible</li>
                </ul>
            </div>
            
            <h4>Risk Management</h4>
            <div class="warning-box">
                <h5>⚠️ DeFi Risks:</h5>
                <ul>
                    <li><strong>Smart contract risk:</strong> Bugs can drain funds</li>
                    <li><strong>Impermanent loss:</strong> LP positions can lose value</li>
                    <li><strong>Gas costs:</strong> Can exceed airdrop value</li>
                    <li><strong>No guarantee:</strong> Not all protocols airdrop</li>
                </ul>
                <p><strong>Mitigation:</strong> Only use audited protocols, start small</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>DeFi airdrops can be extremely lucrative</li>
                    <li>Use protocols consistently over months</li>
                    <li>Diversify across different DeFi categories</li>
                    <li>Understand and manage risks</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "How long should you use a DeFi protocol?",
                options: ["Once", "One week", "3+ months consistently", "Never"],
                correct: 2
            },
            {
                question: "What is a DeFi risk?",
                options: ["Too much profit", "Smart contract bugs", "No risks", "Only gas fees"],
                correct: 1
            }
        ]
    },

    "64": {
        title: "Bridge Usage Strategies",
        duration: "20 min",
        content: `
            <h3>Maximizing Bridge Airdrops</h3>
            <p>Cross-chain bridges are prime airdrop candidates as they facilitate multi-chain ecosystems.</p>
            
            <h4>Why Bridges Airdrop</h4>
            <ul>
                <li>Critical infrastructure for multi-chain future</li>
                <li>High revenue generation</li>
                <li>Need to decentralize governance</li>
                <li>Reward early adopters</li>
            </ul>
            
            <h4>Top Bridges to Use</h4>
            <div class="bridge-card">
                <h5>🌟 LayerZero</h5>
                <p>Omnichain messaging protocol</p>
                <p><strong>Use:</strong> Stargate Finance (built on LayerZero)</p>
            </div>
            
            <div class="bridge-card">
                <h5>🌉 Hop Protocol</h5>
                <p>Fast L2 to L2 bridging</p>
                <p><strong>Use:</strong> Bridge between Arbitrum, Optimism, Polygon</p>
            </div>
            
            <div class="bridge-card">
                <h5>🔗 Across Protocol</h5>
                <p>Optimistic bridge</p>
                <p><strong>Use:</strong> Cross-chain transfers</p>
            </div>
            
            <h4>Bridge Farming Strategy</h4>
            <div class="strategy-box">
                <ol>
                    <li>Bridge small amounts regularly (weekly)</li>
                    <li>Use multiple bridges</li>
                    <li>Bridge to different chains</li>
                    <li>Vary amounts (don't use same amount)</li>
                    <li>Use with multiple wallets</li>
                    <li>Provide liquidity if available</li>
                </ol>
            </div>
            
            <h4>Cost Optimization</h4>
            <table>
                <tr><th>Bridge</th><th>Avg Cost</th><th>Speed</th></tr>
                <tr><td>LayerZero</td><td>$2-5</td><td>Fast</td></tr>
                <tr><td>Hop</td><td>$1-3</td><td>Very Fast</td></tr>
                <tr><td>Across</td><td>$1-4</td><td>Fast</td></tr>
            </table>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Bridges are high-probability airdrop candidates</li>
                    <li>Use multiple bridges regularly</li>
                    <li>Low costs make bridge farming profitable</li>
                    <li>Vary your bridging patterns</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "Why do bridges often airdrop?",
                options: ["They don't", "Critical infrastructure needing decentralization", "Just for fun", "Required by law"],
                correct: 1
            },
            {
                question: "How often should you bridge?",
                options: ["Once ever", "Weekly", "Never", "Every hour"],
                correct: 1
            }
        ]
    },

    "65": {
        title: "Staking for Airdrops",
        duration: "18 min",
        content: `
            <h3>Staking Strategies for Airdrops</h3>
            <p>Staking tokens can qualify you for multiple airdrops simultaneously.</p>
            
            <h4>Staking Benefits</h4>
            <ul>
                <li>Earn staking rewards</li>
                <li>Qualify for airdrops</li>
                <li>Governance rights</li>
                <li>Passive income</li>
                <li>Support network security</li>
            </ul>
            
            <h4>What to Stake</h4>
            <div class="staking-option">
                <h5>🔷 ETH Staking</h5>
                <p>Stake ETH for potential L2/DeFi airdrops</p>
                <p><strong>Platforms:</strong> Lido, Rocket Pool</p>
            </div>
            
            <div class="staking-option">
                <h5>🌐 Cosmos Ecosystem</h5>
                <p>Stake ATOM for ecosystem airdrops</p>
                <p><strong>History:</strong> Many successful airdrops to ATOM stakers</p>
            </div>
            
            <div class="staking-option">
                <h5>⚡ Layer 1 Tokens</h5>
                <p>Stake L1 tokens for ecosystem airdrops</p>
                <p><strong>Examples:</strong> AVAX, SOL, NEAR</p>
            </div>
            
            <h4>Staking Strategy</h4>
            <div class="strategy-box">
                <p><strong>Diversify:</strong> Stake across multiple chains</p>
                <p><strong>Long-term:</strong> Stake for months, not days</p>
                <p><strong>Liquid staking:</strong> Use protocols like Lido for flexibility</p>
                <p><strong>Governance:</strong> Participate in voting</p>
            </div>
            
            <h4>Risks</h4>
            <div class="warning-box">
                <ul>
                    <li>Lock-up periods</li>
                    <li>Slashing risk (validator penalties)</li>
                    <li>Smart contract risk</li>
                    <li>Price volatility</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Staking can qualify for multiple airdrops</li>
                    <li>Cosmos ecosystem has best airdrop history</li>
                    <li>Use liquid staking for flexibility</li>
                    <li>Long-term staking yields better results</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What ecosystem has best airdrop history for stakers?",
                options: ["Bitcoin", "Cosmos", "Dogecoin", "None"],
                correct: 1
            },
            {
                question: "What is liquid staking?",
                options: ["Staking water", "Staking with flexibility to use tokens", "Impossible", "Scam"],
                correct: 1
            }
        ]
    },

    "66": {
        title: "Governance Participation",
        duration: "16 min",
        content: `
            <h3>Earning Through Governance</h3>
            <p>Active governance participation often leads to bonus airdrops and allocations.</p>
            
            <h4>Why Governance Matters</h4>
            <ul>
                <li>Shows genuine community interest</li>
                <li>Protocols reward active participants</li>
                <li>Bonus allocations in future airdrops</li>
                <li>Influence project direction</li>
            </ul>
            
            <h4>How to Participate</h4>
            <div class="governance-steps">
                <ol>
                    <li>Obtain governance tokens</li>
                    <li>Join governance forums (Snapshot, Tally)</li>
                    <li>Read proposals carefully</li>
                    <li>Vote on proposals</li>
                    <li>Delegate voting power if needed</li>
                    <li>Participate in discussions</li>
                </ol>
            </div>
            
            <h4>Governance Platforms</h4>
            <ul>
                <li><strong>Snapshot:</strong> Off-chain voting</li>
                <li><strong>Tally:</strong> On-chain governance</li>
                <li><strong>Commonwealth:</strong> Discussion forums</li>
            </ul>
            
            <h4>Examples of Governance Rewards</h4>
            <table>
                <tr><th>Project</th><th>Reward</th></tr>
                <tr><td>Optimism</td><td>Bonus OP for voters</td></tr>
                <tr><td>ENS</td><td>Delegator rewards</td></tr>
                <tr><td>Uniswap</td><td>Governance mining</td></tr>
            </table>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Governance participation = bonus allocations</li>
                    <li>Vote on proposals regularly</li>
                    <li>Engage in community discussions</li>
                    <li>Shows you're a real user, not a farmer</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "Why participate in governance?",
                options: ["Waste of time", "Bonus airdrop allocations", "Required by law", "No reason"],
                correct: 1
            },
            {
                question: "What is Snapshot?",
                options: ["Photo app", "Off-chain voting platform", "Scam", "NFT marketplace"],
                correct: 1
            }
        ]
    },

    "67": {
        title: "Quest Platforms",
        duration: "14 min",
        content: `
            <h3>Using Quest Platforms for Airdrops</h3>
            <p>Quest platforms gamify airdrop farming with structured tasks and rewards.</p>
            
            <h4>Popular Quest Platforms</h4>
            <div class="platform-card">
                <h5>🎮 Galxe (formerly Project Galaxy)</h5>
                <p>Largest Web3 quest platform</p>
                <p><strong>Features:</strong> NFT credentials, points, airdrops</p>
            </div>
            
            <div class="platform-card">
                <h5>🏆 Layer3</h5>
                <p>Learn-to-earn quests</p>
                <p><strong>Features:</strong> Educational content + rewards</p>
            </div>
            
            <div class="platform-card">
                <h5>🎯 Zealy (formerly Crew3)</h5>
                <p>Community engagement quests</p>
                <p><strong>Features:</strong> Leaderboards, XP systems</p>
            </div>
            
            <h4>Quest Strategy</h4>
            <div class="strategy-box">
                <ul>
                    <li>Complete quests from verified projects</li>
                    <li>Collect NFT credentials (proof of completion)</li>
                    <li>Build quest completion history</li>
                    <li>Participate in campaigns early</li>
                    <li>Engage with community</li>
                </ul>
            </div>
            
            <h4>Benefits</h4>
            <ul>
                <li>✅ Structured airdrop farming</li>
                <li>✅ Clear requirements</li>
                <li>✅ NFT proof of participation</li>
                <li>✅ Discover new projects</li>
                <li>✅ Leaderboard rewards</li>
            </ul>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Quest platforms simplify airdrop farming</li>
                    <li>Galxe is the largest platform</li>
                    <li>Complete quests for verified projects</li>
                    <li>NFT credentials prove participation</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is Galxe?",
                options: ["A scam", "Web3 quest platform", "Video game", "NFT marketplace"],
                correct: 1
            },
            {
                question: "What do quest platforms provide?",
                options: ["Nothing", "Structured tasks and rewards", "Only scams", "Just games"],
                correct: 1
            }
        ]
    },

    "68": {
        title: "Referral Programs",
        duration: "16 min",
        content: `
            <h3>Maximizing Referral Rewards</h3>
            <p>Referral programs can multiply your airdrop earnings significantly.</p>
            
            <h4>How Referrals Work</h4>
            <div class="info-box">
                <p>You get bonus rewards when referred users:</p>
                <ul>
                    <li>Sign up using your link</li>
                    <li>Complete tasks</li>
                    <li>Trade volume</li>
                    <li>Earn points</li>
                </ul>
            </div>
            
            <h4>Referral Strategies</h4>
            <div class="strategy-box">
                <h5>Organic Growth:</h5>
                <ul>
                    <li>Share on Twitter</li>
                    <li>Post in Discord communities</li>
                    <li>Create YouTube content</li>
                    <li>Write Medium articles</li>
                </ul>
                
                <h5>Self-Referral (Use Carefully):</h5>
                <ul>
                    <li>Use multiple wallets</li>
                    <li>Refer your own wallets</li>
                    <li>Make each wallet unique</li>
                    <li>Avoid obvious patterns</li>
                </ul>
            </div>
            
            <h4>Best Referral Programs</h4>
            <table>
                <tr><th>Type</th><th>Typical Bonus</th></tr>
                <tr><td>DEX</td><td>10-20% of referee earnings</td></tr>
                <tr><td>CEX</td><td>20-40% commission</td></tr>
                <tr><td>DeFi</td><td>Bonus points/tokens</td></tr>
                <tr><td>NFT</td><td>Whitelist spots</td></tr>
            </table>
            
            <div class="warning-box">
                <h5>⚠️ Referral Risks:</h5>
                <ul>
                    <li>Sybil detection for self-referrals</li>
                    <li>Spam can hurt reputation</li>
                    <li>Some programs have caps</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Referrals can 2-10x your earnings</li>
                    <li>Share genuinely, don't spam</li>
                    <li>Self-referral possible but risky</li>
                    <li>Build audience for long-term success</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "How do referral programs benefit you?",
                options: ["They don't", "Bonus rewards from referred users", "Only hurt you", "Scam"],
                correct: 1
            },
            {
                question: "What's important for referrals?",
                options: ["Spam everyone", "Share genuinely", "Never share", "Only self-refer"],
                correct: 1
            }
        ]
    },

    "69": {
        title: "Airdrop Tracking Tools",
        duration: "14 min",
        content: `
            <h3>Tools for Tracking Airdrop Eligibility</h3>
            <p>Use specialized tools to check eligibility and maximize claims.</p>
            
            <h4>Essential Tracking Tools</h4>
            <div class="tool-card">
                <h5>🔍 Earnifi</h5>
                <p>Automatic airdrop detection</p>
                <p><strong>Features:</strong> Email alerts, claim tracking</p>
            </div>
            
            <div class="tool-card">
                <h5>📊 DeBank</h5>
                <p>Portfolio and activity tracker</p>
                <p><strong>Features:</strong> Multi-chain, transaction history</p>
            </div>
            
            <div class="tool-card">
                <h5>🎯 Claimable</h5>
                <p>Check unclaimed airdrops</p>
                <p><strong>Features:</strong> Historical airdrop checker</p>
            </div>
            
            <h4>Manual Checking</h4>
            <div class="checklist">
                <p>Regularly check:</p>
                <ul>
                    <li>Project Twitter announcements</li>
                    <li>Discord announcement channels</li>
                    <li>Project websites</li>
                    <li>Governance forums</li>
                    <li>Airdrop aggregator sites</li>
                </ul>
            </div>
            
            <h4>Setting Up Alerts</h4>
            <div class="alert-setup">
                <ol>
                    <li>Connect wallets to Earnifi</li>
                    <li>Enable email notifications</li>
                    <li>Follow airdrop Twitter accounts</li>
                    <li>Join Telegram alert groups</li>
                    <li>Set Google Alerts for project names</li>
                </ol>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Use automated tools to never miss airdrops</li>
                    <li>Earnifi is essential for tracking</li>
                    <li>Set up multiple alert systems</li>
                    <li>Check eligibility regularly</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What does Earnifi do?",
                options: ["Nothing", "Automatically detects airdrops", "Scams you", "Only games"],
                correct: 1
            },
            {
                question: "Should you use multiple tracking methods?",
                options: ["No", "Yes, for comprehensive coverage", "One is enough", "Tracking is useless"],
                correct: 1
            }
        ]
    },

    "70": {
        title: "Claiming Strategies",
        duration: "18 min",
        content: `
            <h3>Optimal Airdrop Claiming Strategies</h3>
            <p>When and how you claim airdrops can significantly impact your profits.</p>
            
            <h4>When to Claim</h4>
            <div class="timing-strategy">
                <h5>Immediate Claim:</h5>
                <p class="pros">✅ Avoid missing deadline</p>
                <p class="pros">✅ Sell at hype peak</p>
                <p class="cons">❌ High gas fees</p>
                <p class="cons">❌ Network congestion</p>
                
                <h5>Delayed Claim:</h5>
                <p class="pros">✅ Lower gas fees</p>
                <p class="pros">✅ Less congestion</p>
                <p class="cons">❌ Might miss deadline</p>
                <p class="cons">❌ Price might drop</p>
            </div>
            
            <h4>Claiming Best Practices</h4>
            <div class="strategy-box">
                <ol>
                    <li>Check claim deadline first</li>
                    <li>Verify official claim site</li>
                    <li>Check gas prices</li>
                    <li>Claim during low-traffic hours</li>
                    <li>Use hardware wallet for large claims</li>
                    <li>Screenshot claim confirmation</li>
                </ol>
            </div>
            
            <h4>Selling Strategy</h4>
            <table>
                <tr><th>Strategy</th><th>When</th><th>Why</th></tr>
                <tr><td>Immediate Sell</td><td>Day 1</td><td>Capture hype premium</td></tr>
                <tr><td>Partial Sell</td><td>Day 1 + Hold</td><td>Take profits + upside</td></tr>
                <tr><td>Hold All</td><td>Long-term</td><td>Believe in project</td></tr>
                <tr><td>Stake/LP</td><td>After claim</td><td>Earn additional yield</td></tr>
            </table>
            
            <h4>Tax Considerations</h4>
            <div class="info-box">
                <p><strong>Important:</strong> Airdrops are taxable in most countries</p>
                <ul>
                    <li>Record claim date and value</li>
                    <li>Track cost basis</li>
                    <li>Report on tax returns</li>
                    <li>Use crypto tax software</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <h5>⚠️ Claiming Risks:</h5>
                <ul>
                    <li>Phishing sites (verify URL!)</li>
                    <li>High gas fees during rush</li>
                    <li>Smart contract exploits</li>
                    <li>Missing deadlines</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Always verify official claim site</li>
                    <li>Claim during low-traffic hours for cheaper gas</li>
                    <li>Have a selling strategy before claiming</li>
                    <li>Track claims for tax purposes</li>
                    <li>Never miss claim deadlines</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "When is the best time to claim for low gas?",
                options: ["Peak hours", "Low-traffic hours", "Never", "Only weekends"],
                correct: 1
            },
            {
                question: "Are airdrops taxable?",
                options: ["No", "Yes, in most countries", "Only if you sell", "Never"],
                correct: 1
            }
        ]
    }
    ,

    // Level 4: Expert Airdrop Mastery
    "71": {
        title: "Solana Ecosystem Airdrops",
        duration: "20 min",
        content: `
            <h3>Farming Solana Airdrops</h3>
            <p>Solana has a vibrant ecosystem with frequent airdrops for active users.</p>
            
            <h4>Why Solana for Airdrops?</h4>
            <ul>
                <li>Extremely low transaction fees ($0.00025)</li>
                <li>Fast transaction speeds</li>
                <li>Active DeFi ecosystem</li>
                <li>Growing NFT community</li>
                <li>Multiple successful airdrops</li>
            </ul>
            
            <h4>Solana Wallet Setup</h4>
            <div class="wallet-setup">
                <p><strong>Phantom Wallet:</strong> Most popular Solana wallet</p>
                <p><strong>Solflare:</strong> Advanced features</p>
                <p><strong>Backpack:</strong> Newer, feature-rich</p>
            </div>
            
            <h4>Solana Activities</h4>
            <div class="activity-list">
                <h5>DEX Trading:</h5>
                <ul>
                    <li>Jupiter (aggregator)</li>
                    <li>Raydium</li>
                    <li>Orca</li>
                </ul>
                
                <h5>Lending/Borrowing:</h5>
                <ul>
                    <li>MarginFi</li>
                    <li>Solend</li>
                </ul>
                
                <h5>NFTs:</h5>
                <ul>
                    <li>Magic Eden</li>
                    <li>Tensor</li>
                </ul>
            </div>
            
            <h4>Cost-Benefit Analysis</h4>
            <table>
                <tr><th>Activity</th><th>Cost</th><th>Benefit</th></tr>
                <tr><td>100 swaps</td><td>$0.025</td><td>High eligibility</td></tr>
                <tr><td>Provide liquidity</td><td>$0.001</td><td>Bonus points</td></tr>
                <tr><td>NFT trading</td><td>$0.001/tx</td><td>Platform airdrops</td></tr>
                <tr><td>Total</td><td><$1</td><td>Multiple airdrops</td></tr>
            </table>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Solana fees are negligible - perfect for farming</li>
                    <li>Use Jupiter, MarginFi, and Magic Eden</li>
                    <li>High transaction volume is affordable</li>
                    <li>Active ecosystem with frequent airdrops</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is Solana's main advantage for airdrop farming?",
                options: ["High fees", "Extremely low fees", "Slow speed", "No airdrops"],
                correct: 1
            },
            {
                question: "What is the most popular Solana wallet?",
                options: ["MetaMask", "Phantom", "Coinbase", "Trust Wallet"],
                correct: 1
            }
        ]
    },

    "72": {
        title: "Portfolio Management",
        duration: "18 min",
        content: `
            <h3>Managing Your Airdrop Portfolio</h3>
            <p>Effective portfolio management maximizes returns and minimizes risks.</p>
            
            <h4>Diversification Strategy</h4>
            <div class="portfolio-allocation">
                <p><strong>30%:</strong> High-probability airdrops (L2s, bridges)</p>
                <p><strong>30%:</strong> Medium-risk DeFi protocols</p>
                <p><strong>20%:</strong> NFT projects</p>
                <p><strong>10%:</strong> Staking for airdrops</p>
                <p><strong>10%:</strong> Speculative/new projects</p>
            </div>
            
            <h4>Tracking Performance</h4>
            <div class="tracking-metrics">
                <h5>Key Metrics:</h5>
                <ul>
                    <li>Total gas spent</li>
                    <li>Airdrops claimed</li>
                    <li>Total value received</li>
                    <li>ROI per project</li>
                    <li>Success rate (%)</li>
                    <li>Time invested</li>
                </ul>
            </div>
            
            <h4>Rebalancing</h4>
            <div class="strategy-box">
                <p><strong>Monthly review:</strong> Assess which strategies work</p>
                <p><strong>Cut losers:</strong> Stop farming unprofitable projects</p>
                <p><strong>Double down:</strong> Increase activity on successful patterns</p>
                <p><strong>Adapt:</strong> Market conditions change</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Diversify across different airdrop types</li>
                    <li>Track all expenses and returns</li>
                    <li>Review and rebalance monthly</li>
                    <li>Focus on positive ROI strategies</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What percentage should go to high-probability airdrops?",
                options: ["10%", "30%", "100%", "0%"],
                correct: 1
            },
            {
                question: "How often should you rebalance?",
                options: ["Never", "Monthly", "Every hour", "Once a year"],
                correct: 1
            }
        ]
    },

    "73": {
        title: "Tax Reporting",
        duration: "22 min",
        content: `
            <h3>Airdrop Tax Compliance</h3>
            <p>Proper tax reporting is essential to avoid legal issues.</p>
            
            <h4>Tax Treatment of Airdrops</h4>
            <div class="tax-info">
                <p><strong>Most Countries:</strong> Airdrops are taxable income</p>
                <p><strong>Taxable Event:</strong> When you receive control of tokens</p>
                <p><strong>Value:</strong> Fair market value at time of receipt</p>
                <p><strong>Later Sale:</strong> Capital gains tax on profit/loss</p>
            </div>
            
            <h4>Record Keeping</h4>
            <div class="records-checklist">
                <h5>Must Track:</h5>
                <ul>
                    <li>Date of airdrop receipt</li>
                    <li>Token amount received</li>
                    <li>Fair market value at receipt</li>
                    <li>Date of sale (if sold)</li>
                    <li>Sale price</li>
                    <li>Transaction fees</li>
                </ul>
            </div>
            
            <h4>Crypto Tax Software</h4>
            <ul>
                <li><strong>CoinTracker:</strong> Comprehensive, user-friendly</li>
                <li><strong>Koinly:</strong> Multi-country support</li>
                <li><strong>CryptoTaxCalculator:</strong> Affordable option</li>
                <li><strong>TokenTax:</strong> Advanced features</li>
            </ul>
            
            <h4>Tax Strategies</h4>
            <div class="strategy-box">
                <p><strong>Hold >1 year:</strong> Long-term capital gains (lower rate)</p>
                <p><strong>Harvest losses:</strong> Offset gains with losses</p>
                <p><strong>Track everything:</strong> Don't guess values</p>
                <p><strong>Consult professional:</strong> For large amounts</p>
            </div>
            
            <div class="warning-box">
                <h5>⚠️ Tax Compliance:</h5>
                <p>Tax evasion is illegal and can result in:</p>
                <ul>
                    <li>Heavy fines</li>
                    <li>Interest on unpaid taxes</li>
                    <li>Criminal prosecution</li>
                    <li>Asset seizure</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Airdrops are taxable income in most countries</li>
                    <li>Track every airdrop received</li>
                    <li>Use crypto tax software</li>
                    <li>Consult tax professional for large amounts</li>
                    <li>Don't evade taxes - it's not worth it</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "Are airdrops taxable?",
                options: ["No", "Yes, in most countries", "Only if you sell", "Never"],
                correct: 1
            },
            {
                question: "What should you use for tax tracking?",
                options: ["Nothing", "Crypto tax software", "Guesswork", "Ignore it"],
                correct: 1
            }
        ]
    },

    "74": {
        title: "Automation Tools",
        duration: "16 min",
        content: `
            <h3>Automating Airdrop Farming</h3>
            <p>Automation can save time but must be used carefully to avoid detection.</p>
            
            <h4>What Can Be Automated</h4>
            <ul>
                <li>✅ Transaction scheduling</li>
                <li>✅ Portfolio tracking</li>
                <li>✅ Alert notifications</li>
                <li>✅ Price monitoring</li>
                <li>❌ Wallet interactions (risky)</li>
                <li>❌ Social media tasks (detectable)</li>
            </ul>
            
            <h4>Safe Automation Tools</h4>
            <div class="tool-card">
                <h5>📊 DeBank Pro</h5>
                <p>Automated portfolio tracking and alerts</p>
            </div>
            
            <div class="tool-card">
                <h5>🔔 IFTTT/Zapier</h5>
                <p>Create custom alerts and workflows</p>
            </div>
            
            <div class="tool-card">
                <h5>📱 Telegram Bots</h5>
                <p>Custom notification bots</p>
            </div>
            
            <h4>Risks of Over-Automation</h4>
            <div class="warning-box">
                <h5>⚠️ Dangers:</h5>
                <ul>
                    <li>Sybil detection</li>
                    <li>Account bans</li>
                    <li>Obvious bot patterns</li>
                    <li>Smart contract exploits</li>
                    <li>Loss of funds</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Automate tracking and alerts, not transactions</li>
                    <li>Manual interaction is safer</li>
                    <li>Avoid obvious automation patterns</li>
                    <li>Use automation to save time, not cheat</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is safe to automate?",
                options: ["Everything", "Tracking and alerts", "Wallet transactions", "Social media"],
                correct: 1
            },
            {
                question: "What is a risk of over-automation?",
                options: ["Too much profit", "Sybil detection and bans", "No risks", "Faster claims"],
                correct: 1
            }
        ]
    },

    "75": {
        title: "Community Building",
        duration: "14 min",
        content: `
            <h3>Building Your Crypto Community</h3>
            <p>A strong community presence increases airdrop allocations and opportunities.</p>
            
            <h4>Why Community Matters</h4>
            <ul>
                <li>Better airdrop allocations</li>
                <li>Early alpha on projects</li>
                <li>Networking opportunities</li>
                <li>Referral benefits</li>
                <li>Reputation building</li>
            </ul>
            
            <h4>Building Your Presence</h4>
            <div class="community-strategy">
                <h5>Twitter:</h5>
                <ul>
                    <li>Share insights and analysis</li>
                    <li>Engage with project teams</li>
                    <li>Help other community members</li>
                    <li>Create educational content</li>
                </ul>
                
                <h5>Discord:</h5>
                <ul>
                    <li>Be active and helpful</li>
                    <li>Answer questions</li>
                    <li>Participate in events</li>
                    <li>Build relationships</li>
                </ul>
            </div>
            
            <h4>Content Creation</h4>
            <div class="content-ideas">
                <p><strong>Threads:</strong> Project analysis</p>
                <p><strong>Guides:</strong> How-to tutorials</p>
                <p><strong>Reviews:</strong> Honest project reviews</p>
                <p><strong>Alerts:</strong> Share airdrop opportunities</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Community presence = better allocations</li>
                    <li>Be genuinely helpful, not spammy</li>
                    <li>Create valuable content</li>
                    <li>Build long-term relationships</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "Why build community presence?",
                options: ["Waste of time", "Better allocations and opportunities", "Required by law", "No reason"],
                correct: 1
            },
            {
                question: "How should you engage?",
                options: ["Spam everywhere", "Be genuinely helpful", "Never engage", "Only self-promote"],
                correct: 1
            }
        ]
    },

    "76": {
        title: "Whale Watching",
        duration: "18 min",
        content: `
            <h3>Following Smart Money</h3>
            <p>Track whale wallets to discover profitable airdrop strategies early.</p>
            
            <h4>What is Whale Watching?</h4>
            <div class="definition-box">
                <p>Monitoring large wallet addresses to identify successful strategies</p>
                <p><strong>Goal:</strong> Copy what works for successful farmers</p>
            </div>
            
            <h4>Tools for Whale Watching</h4>
            <ul>
                <li><strong>Nansen:</strong> Wallet labeling and tracking (paid)</li>
                <li><strong>Arkham:</strong> On-chain intelligence</li>
                <li><strong>Etherscan:</strong> Free wallet tracking</li>
                <li><strong>DeBank:</strong> Portfolio analysis</li>
            </ul>
            
            <h4>What to Look For</h4>
            <div class="watching-guide">
                <h5>Successful Patterns:</h5>
                <ul>
                    <li>Which protocols they use</li>
                    <li>Transaction frequency</li>
                    <li>Amount patterns</li>
                    <li>Timing of activities</li>
                    <li>Multi-chain strategies</li>
                </ul>
            </div>
            
            <h4>Finding Whale Wallets</h4>
            <div class="strategy-box">
                <ol>
                    <li>Check top airdrop claimers</li>
                    <li>Follow successful Twitter farmers</li>
                    <li>Analyze past airdrop distributions</li>
                    <li>Use Nansen's Smart Money labels</li>
                </ol>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Learn from successful airdrop farmers</li>
                    <li>Use on-chain tools to track whales</li>
                    <li>Copy strategies, not exact transactions</li>
                    <li>Adapt patterns to your situation</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What is whale watching?",
                options: ["Ocean activity", "Tracking successful wallet strategies", "Scam", "Illegal"],
                correct: 1
            },
            {
                question: "What tool is best for whale tracking?",
                options: ["Nothing", "Nansen/Arkham", "Twitter only", "Guessing"],
                correct: 1
            }
        ]
    },

    "77": {
        title: "Timing Strategies",
        duration: "16 min",
        content: `
            <h3>Optimal Timing for Airdrop Farming</h3>
            <p>When you participate can be as important as how you participate.</p>
            
            <h4>Project Lifecycle Timing</h4>
            <table>
                <tr><th>Stage</th><th>Timing</th><th>Strategy</th></tr>
                <tr><td>Pre-Launch</td><td>Testnet phase</td><td>Highest rewards, most risk</td></tr>
                <tr><td>Early Mainnet</td><td>First 3 months</td><td>Good rewards, medium risk</td></tr>
                <tr><td>Mature</td><td>6+ months</td><td>Lower rewards, safer</td></tr>
                <tr><td>Pre-Token</td><td>Before announcement</td><td>Best risk/reward</td></tr>
            </table>
            
            <h4>Market Cycle Timing</h4>
            <div class="cycle-strategy">
                <h5>Bull Market:</h5>
                <p>More airdrops, higher values, more competition</p>
                <p><strong>Strategy:</strong> Farm aggressively</p>
                
                <h5>Bear Market:</h5>
                <p>Fewer airdrops, lower values, less competition</p>
                <p><strong>Strategy:</strong> Build positions for next cycle</p>
            </div>
            
            <h4>Daily/Weekly Timing</h4>
            <div class="timing-tips">
                <ul>
                    <li><strong>Gas optimization:</strong> Transact 2-6am UTC</li>
                    <li><strong>Claim timing:</strong> Avoid day 1 rush</li>
                    <li><strong>Consistency:</strong> Weekly activity > daily</li>
                    <li><strong>Snapshots:</strong> Always unexpected</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Early participation = higher rewards</li>
                    <li>Bear markets are best for positioning</li>
                    <li>Optimize transaction timing for gas</li>
                    <li>Consistency matters more than intensity</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "When are airdrop rewards highest?",
                options: ["Late stage", "Early participation", "Never matters", "Random"],
                correct: 1
            },
            {
                question: "What's best for gas optimization?",
                options: ["Peak hours", "2-6am UTC", "Weekends only", "Never matters"],
                correct: 1
            }
        ]
    },

    "78": {
        title: "Exit Strategies",
        duration: "20 min",
        content: `
            <h3>When and How to Exit Airdrops</h3>
            <p>Having a clear exit strategy maximizes profits and minimizes regret.</p>
            
            <h4>Exit Strategy Framework</h4>
            <div class="exit-framework">
                <h5>Before Claiming, Decide:</h5>
                <ul>
                    <li>Sell percentage immediately</li>
                    <li>Hold percentage long-term</li>
                    <li>Stake/LP percentage</li>
                    <li>Price targets for selling</li>
                </ul>
            </div>
            
            <h4>Common Exit Strategies</h4>
            <table>
                <tr><th>Strategy</th><th>Sell %</th><th>When</th></tr>
                <tr><td>Full Exit</td><td>100%</td><td>Day 1</td></tr>
                <tr><td>Conservative</td><td>50%</td><td>Day 1, hold 50%</td></tr>
                <tr><td>Aggressive Hold</td><td>0%</td><td>Stake all</td></tr>
                <tr><td>Ladder Out</td><td>25% each week</td><td>Over 4 weeks</td></tr>
            </table>
            
            <h4>Decision Factors</h4>
            <div class="decision-factors">
                <p><strong>Sell immediately if:</strong></p>
                <ul>
                    <li>Don't believe in project</li>
                    <li>Need to recover gas costs</li>
                    <li>Token has no utility</li>
                    <li>Hype is at peak</li>
                </ul>
                
                <p><strong>Hold if:</strong></p>
                <ul>
                    <li>Strong fundamentals</li>
                    <li>Active development</li>
                    <li>Staking rewards available</li>
                    <li>Governance benefits</li>
                </ul>
            </div>
            
            <h4>Avoiding Regret</h4>
            <div class="strategy-box">
                <p><strong>Take profits:</strong> Always sell some</p>
                <p><strong>Keep exposure:</strong> Hold some for upside</p>
                <p><strong>No FOMO:</strong> Stick to your plan</p>
                <p><strong>Track results:</strong> Learn from outcomes</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Decide exit strategy before claiming</li>
                    <li>Partial exits reduce regret</li>
                    <li>Sell some, hold some is often best</li>
                    <li>Don't let emotions override your plan</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "When should you decide your exit strategy?",
                options: ["After selling", "Before claiming", "Never", "During claim"],
                correct: 1
            },
            {
                question: "What's a balanced approach?",
                options: ["Sell all immediately", "Sell some, hold some", "Never sell", "FOMO buy more"],
                correct: 1
            }
        ]
    },

    "79": {
        title: "Reinvestment Strategies",
        duration: "14 min",
        content: `
            <h3>Reinvesting Airdrop Profits</h3>
            <p>Smart reinvestment compounds your airdrop farming success.</p>
            
            <h4>Reinvestment Options</h4>
            <div class="reinvestment-options">
                <h5>1. More Airdrop Farming</h5>
                <p>Use profits to fund more wallets and activities</p>
                <p class="pros">✅ Compounds airdrop earnings</p>
                
                <h5>2. Blue Chip Holdings</h5>
                <p>Convert to ETH, BTC for safety</p>
                <p class="pros">✅ Preserves capital</p>
                
                <h5>3. DeFi Yield</h5>
                <p>Stake in stable protocols for passive income</p>
                <p class="pros">✅ Earn while farming</p>
                
                <h5>4. NFTs</h5>
                <p>Buy NFTs for potential holder airdrops</p>
                <p class="pros">✅ Multiple airdrop opportunities</p>
            </div>
            
            <h4>Allocation Strategy</h4>
            <div class="allocation">
                <p><strong>40%:</strong> Reinvest in airdrop farming</p>
                <p><strong>30%:</strong> Blue chip holdings (ETH/BTC)</p>
                <p><strong>20%:</strong> DeFi yield</p>
                <p><strong>10%:</strong> Cash out for living expenses</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Reinvest majority of profits</li>
                    <li>Diversify reinvestment strategies</li>
                    <li>Take some profits to cash</li>
                    <li>Compound your success</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What percentage should you reinvest?",
                options: ["0%", "Majority (70-90%)", "100%", "10%"],
                correct: 1
            },
            {
                question: "What's a good reinvestment option?",
                options: ["Gambling", "More airdrop farming", "Luxury items", "Nothing"],
                correct: 1
            }
        ]
    },

    "80": {
        title: "Long-Term Planning",
        duration: "16 min",
        content: `
            <h3>Building Sustainable Airdrop Income</h3>
            <p>Think long-term to build consistent airdrop income streams.</p>
            
            <h4>6-Month Plan</h4>
            <div class="timeline">
                <p><strong>Month 1-2:</strong> Setup and learning</p>
                <p><strong>Month 3-4:</strong> Active farming across 10+ projects</p>
                <p><strong>Month 5-6:</strong> First airdrops claimed</p>
                <p><strong>Goal:</strong> Break even on gas costs</p>
            </div>
            
            <h4>1-Year Plan</h4>
            <div class="timeline">
                <p><strong>Q1:</strong> Build foundation</p>
                <p><strong>Q2:</strong> Scale to 20+ projects</p>
                <p><strong>Q3:</strong> Optimize based on results</p>
                <p><strong>Q4:</strong> Harvest major airdrops</p>
                <p><strong>Goal:</strong> 10x return on investment</p>
            </div>
            
            <h4>Sustainability Practices</h4>
            <ul>
                <li>Don't over-extend financially</li>
                <li>Maintain work-life balance</li>
                <li>Diversify income sources</li>
                <li>Build emergency fund</li>
                <li>Stay updated on trends</li>
            </ul>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Airdrop farming is a marathon, not sprint</li>
                    <li>Plan in 6-12 month cycles</li>
                    <li>Build sustainable practices</li>
                    <li>Patience and consistency win</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What's a realistic 1-year goal?",
                options: ["Get rich overnight", "10x return on investment", "Lose money", "No goals"],
                correct: 1
            },
            {
                question: "How should you approach airdrop farming?",
                options: ["Sprint", "Marathon mindset", "Give up quickly", "All-in gambling"],
                correct: 1
            }
        ]
    },

    "81": {
        title: "Avoiding Burnout",
        duration: "12 min",
        content: `
            <h3>Preventing Airdrop Farming Burnout</h3>
            <p>Sustainable farming requires managing energy and avoiding exhaustion.</p>
            
            <h4>Signs of Burnout</h4>
            <ul>
                <li>Feeling overwhelmed by tasks</li>
                <li>Loss of enthusiasm</li>
                <li>Making careless mistakes</li>
                <li>Neglecting other responsibilities</li>
                <li>Constant stress about missing opportunities</li>
            </ul>
            
            <h4>Prevention Strategies</h4>
            <div class="prevention">
                <h5>Set Boundaries:</h5>
                <ul>
                    <li>Limit farming to 1-2 hours daily</li>
                    <li>Take weekends off</li>
                    <li>Don't check constantly</li>
                    <li>Focus on quality over quantity</li>
                </ul>
                
                <h5>Simplify:</h5>
                <ul>
                    <li>Farm 5-10 projects max</li>
                    <li>Use automation for tracking</li>
                    <li>Create routines</li>
                    <li>Batch similar tasks</li>
                </ul>
            </div>
            
            <h4>Recovery Tips</h4>
            <div class="recovery">
                <p><strong>Take breaks:</strong> 1 week off every 3 months</p>
                <p><strong>Reduce scope:</strong> Cut to top 3 projects</p>
                <p><strong>Delegate:</strong> Use tools and automation</p>
                <p><strong>Perspective:</strong> It's not life or death</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Burnout is real in airdrop farming</li>
                    <li>Set clear boundaries and limits</li>
                    <li>Quality > quantity</li>
                    <li>Take regular breaks</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "How to prevent burnout?",
                options: ["Work 24/7", "Set boundaries and take breaks", "Never stop", "Stress constantly"],
                correct: 1
            },
            {
                question: "How many projects should you farm max?",
                options: ["100", "5-10 quality projects", "1", "Unlimited"],
                correct: 1
            }
        ]
    },

    "82": {
        title: "Staying Updated",
        duration: "14 min",
        content: `
            <h3>Keeping Up with Airdrop Trends</h3>
            <p>The airdrop landscape changes rapidly - stay informed to stay ahead.</p>
            
            <h4>Essential Information Sources</h4>
            <div class="sources">
                <h5>Twitter Accounts:</h5>
                <ul>
                    <li>@AirdropDetective</li>
                    <li>@0xSisyphus</li>
                    <li>@thedefiedge</li>
                    <li>@CryptoGodJohn</li>
                </ul>
                
                <h5>Newsletters:</h5>
                <ul>
                    <li>The Defiant</li>
                    <li>Bankless</li>
                    <li>Milk Road</li>
                </ul>
                
                <h5>Podcasts:</h5>
                <ul>
                    <li>Bankless</li>
                    <li>The Defiant</li>
                    <li>Unchained</li>
                </ul>
            </div>
            
            <h4>Daily Routine</h4>
            <div class="daily-routine">
                <p><strong>Morning (15 min):</strong></p>
                <ul>
                    <li>Check Twitter for announcements</li>
                    <li>Review Discord notifications</li>
                    <li>Check airdrop calendars</li>
                </ul>
                
                <p><strong>Evening (15 min):</strong></p>
                <ul>
                    <li>Complete daily tasks</li>
                    <li>Update tracking spreadsheet</li>
                    <li>Plan next day activities</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Follow key Twitter accounts</li>
                    <li>Subscribe to newsletters</li>
                    <li>Spend 30 min daily staying updated</li>
                    <li>Join active communities</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "How much time daily to stay updated?",
                options: ["0 minutes", "30 minutes", "24 hours", "Never"],
                correct: 1
            },
            {
                question: "What's the best source for airdrop news?",
                options: ["Mainstream media", "Crypto Twitter and newsletters", "Random websites", "Nothing"],
                correct: 1
            }
        ]
    },

    "83": {
        title: "Building Reputation",
        duration: "16 min",
        content: `
            <h3>Establishing Yourself in Crypto</h3>
            <p>A strong reputation opens doors to exclusive opportunities and better allocations.</p>
            
            <h4>Why Reputation Matters</h4>
            <ul>
                <li>Whitelist access</li>
                <li>Higher airdrop allocations</li>
                <li>Early project access</li>
                <li>Partnership opportunities</li>
                <li>Community trust</li>
            </ul>
            
            <h4>Building Reputation</h4>
            <div class="reputation-building">
                <h5>Content Creation:</h5>
                <ul>
                    <li>Write helpful threads</li>
                    <li>Create tutorials</li>
                    <li>Share honest reviews</li>
                    <li>Educate others</li>
                </ul>
                
                <h5>Community Contribution:</h5>
                <ul>
                    <li>Help newcomers</li>
                    <li>Answer questions</li>
                    <li>Report bugs</li>
                    <li>Provide feedback</li>
                </ul>
                
                <h5>Consistency:</h5>
                <ul>
                    <li>Regular posting</li>
                    <li>Quality over quantity</li>
                    <li>Authentic engagement</li>
                    <li>Long-term presence</li>
                </ul>
            </div>
            
            <h4>What to Avoid</h4>
            <div class="warning-box">
                <ul>
                    <li>Shilling scam projects</li>
                    <li>Spamming communities</li>
                    <li>Being overly promotional</li>
                    <li>Dishonest behavior</li>
                    <li>Pump and dump schemes</li>
                </ul>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Reputation = better opportunities</li>
                    <li>Create valuable content</li>
                    <li>Be genuinely helpful</li>
                    <li>Stay consistent and authentic</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "How to build reputation?",
                options: ["Spam everywhere", "Create valuable content and help others", "Scam people", "Buy followers"],
                correct: 1
            },
            {
                question: "What does reputation provide?",
                options: ["Nothing", "Better opportunities and allocations", "Problems", "Bans"],
                correct: 1
            }
        ]
    },

    "84": {
        title: "Airdrop Farming as Income",
        duration: "20 min",
        content: `
            <h3>Can Airdrop Farming Be Full-Time Income?</h3>
            <p>Understanding the realities and requirements of professional airdrop farming.</p>
            
            <h4>Income Potential</h4>
            <table>
                <tr><th>Level</th><th>Time Investment</th><th>Potential Monthly</th></tr>
                <tr><td>Beginner</td><td>5-10 hrs/week</td><td>$100-$500</td></tr>
                <tr><td>Intermediate</td><td>15-20 hrs/week</td><td>$500-$2,000</td></tr>
                <tr><td>Advanced</td><td>30-40 hrs/week</td><td>$2,000-$10,000</td></tr>
                <tr><td>Professional</td><td>40+ hrs/week</td><td>$10,000+</td></tr>
            </table>
            
            <h4>Requirements for Full-Time</h4>
            <div class="requirements">
                <ul>
                    <li><strong>Capital:</strong> $5,000-$10,000 minimum</li>
                    <li><strong>Experience:</strong> 6-12 months proven success</li>
                    <li><strong>Systems:</strong> Automated tracking and alerts</li>
                    <li><strong>Network:</strong> Strong community connections</li>
                    <li><strong>Discipline:</strong> Treat it like a business</li>
                </ul>
            </div>
            
            <h4>Pros and Cons</h4>
            <div class="pros-cons">
                <h5>Pros:</h5>
                <ul>
                    <li>Work from anywhere</li>
                    <li>Flexible schedule</li>
                    <li>High earning potential</li>
                    <li>Learn cutting-edge tech</li>
                </ul>
                
                <h5>Cons:</h5>
                <ul>
                    <li>Inconsistent income</li>
                    <li>High stress</li>
                    <li>Market dependent</li>
                    <li>No benefits/security</li>
                    <li>Tax complexity</li>
                </ul>
            </div>
            
            <h4>Making It Sustainable</h4>
            <div class="sustainability">
                <p><strong>Diversify:</strong> Multiple income streams</p>
                <p><strong>Save:</strong> 6-month emergency fund</p>
                <p><strong>Reinvest:</strong> Compound your earnings</p>
                <p><strong>Adapt:</strong> Markets change constantly</p>
            </div>
            
            <div class="key-takeaway">
                <h4>Key Takeaways</h4>
                <ul>
                    <li>Full-time airdrop farming is possible</li>
                    <li>Requires significant capital and experience</li>
                    <li>Income is inconsistent and market-dependent</li>
                    <li>Treat it as a business, not gambling</li>
                    <li>Have backup plans and savings</li>
                </ul>
            </div>
        `,
        quiz: [
            {
                question: "What's needed for full-time airdrop farming?",
                options: ["Nothing", "$5-10k capital + experience", "Just luck", "One wallet"],
                correct: 1
            },
            {
                question: "What's a realistic advanced monthly income?",
                options: ["$10", "$100", "$2,000-$10,000", "$1 million"],
                correct: 2
            }
        ]
    },

    "85": {
        title: "Airdrop Mastery Review",
        duration: "25 min",
        content: `
            <h3>🎉 Congratulations on Completing All Airdrop Lessons!</h3>
            <p>You've mastered the art and science of cryptocurrency airdrops. Let's review the key concepts.</p>
            
            <h4>Core Principles Recap</h4>
            <div class="principles">
                <h5>1. Security First</h5>
                <ul>
                    <li>Never share seed phrases</li>
                    <li>Use burner wallets for risky projects</li>
                    <li>Revoke approvals regularly</li>
                    <li>Verify everything</li>
                </ul>
                
                <h5>2. Diversification</h5>
                <ul>
                    <li>Multiple wallets (3-5)</li>
                    <li>Multiple chains</li>
                    <li>Multiple project types</li>
                    <li>Multiple strategies</li>
                </ul>
                
                <h5>3. Consistency</h5>
                <ul>
                    <li>Regular activity > one-time usage</li>
                    <li>Weekly interactions minimum</li>
                    <li>Long-term commitment (3-6 months)</li>
                    <li>Patience pays off</li>
                </ul>
                
                <h5>4. Documentation</h5>
                <ul>
                    <li>Track all activities</li>
                    <li>Screenshot transactions</li>
                    <li>Maintain spreadsheets</li>
                    <li>Prepare for taxes</li>
                </ul>
            </div>
            
            <h4>Your Airdrop Farming Checklist</h4>
            <div class="master-checklist">
                <h5>✅ Setup (Complete):</h5>
                <ul>
                    <li>Multiple wallets configured</li>
                    <li>Tracking systems in place</li>
                    <li>Social media accounts created</li>
                    <li>Communities joined</li>
                </ul>
                
                <h5>🎯 Active Farming:</h5>
                <ul>
                    <li>5-10 projects actively farming</li>
                    <li>Weekly transactions on each</li>
                    <li>Diverse activities (swap, bridge, stake)</li>
                    <li>Community participation</li>
                </ul>
                
                <h5>📊 Management:</h5>
                <ul>
                    <li>Daily: Check alerts, complete tasks</li>
                    <li>Weekly: Review progress, update spreadsheet</li>
                    <li>Monthly: Analyze ROI, rebalance strategy</li>
                    <li>Quarterly: Major review and optimization</li>
                </ul>
            </div>
            
            <h4>Success Metrics</h4>
            <table>
                <tr><th>Metric</th><th>Beginner</th><th>Advanced</th><th>Expert</th></tr>
                <tr><td>Projects Farming</td><td>3-5</td><td>10-15</td><td>20+</td></tr>
                <tr><td>Wallets</td><td>2-3</td><td>5-7</td><td>10+</td></tr>
                <tr><td>Monthly ROI</td><td>2-5x</td><td>5-10x</td><td>10-50x</td></tr>
                <tr><td>Time Investment</td><td>5 hrs/week</td><td>15 hrs/week</td><td>30+ hrs/week</td></tr>
            </table>
            
            <h4>Next Steps</h4>
            <div class="next-steps">
                <ol>
                    <li><strong>Apply Knowledge:</strong> Start farming 3-5 projects today</li>
                    <li><strong>Build Systems:</strong> Set up tracking and alerts</li>
                    <li><strong>Stay Updated:</strong> Follow key Twitter accounts</li>
                    <li><strong>Be Patient:</strong> First airdrops take 3-6 months</li>
                    <li><strong>Keep Learning:</strong> Market evolves constantly</li>
                </ol>
            </div>
            
            <h4>Final Wisdom</h4>
            <div class="wisdom">
                <p><strong>"The best time to start was 6 months ago. The second best time is now."</strong></p>
                <p>Airdrop farming rewards:</p>
                <ul>
                    <li>Early adopters</li>
                    <li>Consistent participants</li>
                    <li>Patient farmers</li>
                    <li>Genuine community members</li>
                </ul>
                <p><strong>Start small, stay consistent, think long-term.</strong></p>
            </div>
            
            <div class="congratulations-box">
                <h4>🏆 You've Completed All Lessons!</h4>
                <p><strong>Crypto:</strong> 20 lessons ✅</p>
                <p><strong>Forex:</strong> 25 lessons ✅</p>
                <p><strong>Airdrops:</strong> 40 lessons ✅</p>
                <p>You now have comprehensive knowledge across cryptocurrency, forex trading, and airdrop farming. Use this knowledge wisely, manage risks carefully, and build your financial future!</p>
                <p><strong>Remember:</strong> Knowledge without action is worthless. Start applying what you've learned today!</p>
            </div>
        `,
        quiz: [
            {
                question: "What's the most important airdrop principle?",
                options: ["Get rich quick", "Security and patience", "Spam everything", "No strategy needed"],
                correct: 1
            },
            {
                question: "What should you do after completing these lessons?",
                options: ["Nothing", "Start applying knowledge and farming", "Give up", "Wait forever"],
                correct: 1
            }
        ]
    },

    // ========================================
    // AIRDROP QUIZZES
    // ========================================

    "airdrop-quiz1": {
        title: "Level 1 Quiz: Airdrop Basics",
        duration: "15 min",
        content: "<h3>Level 1 Assessment</h3><p>Test your knowledge of airdrop fundamentals and types.</p>",
        quiz: [
            { question: "What is an 'Airdrop'?", options: ["Free token distribution", "Falling from sky", "Buying tokens", "Selling tokens"], correct: 0 },
            { question: "Why do projects do airdrops?", options: ["Marketing and decentralization", "Charity", "Mistake", "To lose money"], correct: 0 },
            { question: "What is a 'Retroactive Airdrop'?", options: ["Reward for past usage", "Reward for future usage", "Reward for holding", "Reward for mining"], correct: 0 },
            { question: "What is a 'Holder Airdrop'?", options: ["Reward for holding specific tokens", "Reward for selling", "Reward for buying", "Reward for trading"], correct: 0 },
            { question: "What is a 'Task Airdrop'?", options: ["Reward for completing social tasks", "Reward for coding", "Reward for mining", "Reward for sleeping"], correct: 0 },
            { question: "What is a 'Sybil Attack'?", options: ["Creating fake accounts to farm airdrops", "Hacking", "Phishing", "Trading"], correct: 0 },
            { question: "What is 'Snapshot'?", options: ["Record of balances at specific block", "A photo", "A video", "A chat"], correct: 0 },
            { question: "What is 'Claiming'?", options: ["Process of receiving tokens", "Buying", "Selling", "Trading"], correct: 0 },
            { question: "What is 'Vesting'?", options: ["Tokens locked for a period", "Tokens free immediately", "Tokens lost", "Tokens burned"], correct: 0 },
            { question: "What is 'Gas Fee'?", options: ["Cost to claim airdrop", "Fuel", "Reward", "Bonus"], correct: 0 }
        ]
    },

    "airdrop-quiz2": {
        title: "Level 2 Quiz: Hunting Strategies",
        duration: "20 min",
        content: "<h3>Level 2 Assessment</h3><p>Prove your understanding of finding and qualifying for airdrops.</p>",
        quiz: [
            { question: "Where can you find airdrops?", options: ["Twitter, DefiLlama, Airdrop.io", "Facebook", "Instagram", "TikTok"], correct: 0 },
            { question: "What is 'Testnet'?", options: ["Testing network with no real value", "Main network", "Private network", "Social network"], correct: 0 },
            { question: "What is 'Mainnet'?", options: ["Live network with real value", "Test network", "Private network", "Social network"], correct: 0 },
            { question: "What is 'Bridge' activity?", options: ["Moving assets between chains", "Building a bridge", "Crossing a road", "Playing cards"], correct: 0 },
            { question: "What is 'Volume' requirement?", options: ["Minimum amount traded", "Loudness", "Number of transactions", "Time spent"], correct: 0 },
            { question: "What is 'Frequency' requirement?", options: ["Regular usage over time", "One time usage", "Never usage", "Daily usage"], correct: 0 },
            { question: "What is 'Gitcoin Passport'?", options: ["Identity verification tool", "Travel document", "Wallet", "Coin"], correct: 0 },
            { question: "What is 'Galxe'?", options: ["Platform for tasks and credentials", "Galaxy", "Coin", "Wallet"], correct: 0 },
            { question: "What is 'LayerZero'?", options: ["Omnichain interoperability protocol", "Layer 1", "Layer 2", "Layer 3"], correct: 0 },
            { question: "What is 'ZkSync'?", options: ["Layer 2 scaling solution", "Layer 1", "Wallet", "Coin"], correct: 0 }
        ]
    },

    "airdrop-quiz3": {
        title: "Level 3 Quiz: Advanced Farming",
        duration: "25 min",
        content: "<h3>Level 3 Assessment</h3><p>Test your mastery of advanced farming techniques and automation.</p>",
        quiz: [
            { question: "What is 'Multi-wallet farming'?", options: ["Using multiple wallets to get more airdrops", "Using one wallet", "Using exchange wallet", "Using hardware wallet"], correct: 0 },
            { question: "What is 'IP Management'?", options: ["Changing IP to avoid detection", "Intellectual Property", "Internet Protocol", "Internal Profit"], correct: 0 },
            { question: "What is 'Browser Fingerprinting'?", options: ["Tracking device configuration", "Touching screen", "Scanning finger", "Typing"], correct: 0 },
            { question: "What is 'Anti-Detect Browser'?", options: ["Browser to hide fingerprint", "Chrome", "Firefox", "Safari"], correct: 0 },
            { question: "What is 'Scripting'?", options: ["Automating tasks with code", "Writing a play", "Drawing", "Singing"], correct: 0 },
            { question: "What is 'Liquidity Provision'?", options: ["Adding funds to pools", "Drinking water", "Selling funds", "Buying funds"], correct: 0 },
            { question: "What is 'Staking' for airdrops?", options: ["Locking tokens to qualify", "Betting", "Selling", "Buying"], correct: 0 },
            { question: "What is 'Governance Participation'?", options: ["Voting on proposals", "Running for office", "Paying taxes", "Obeying laws"], correct: 0 },
            { question: "What is 'Node Running'?", options: ["Running software to support network", "Running a race", "Running away", "Running a business"], correct: 0 },
            { question: "What is 'Capital Efficiency'?", options: ["Maximizing returns with minimum capital", "Spending all money", "Saving all money", "Losing money"], correct: 0 }
        ]
    },

    "airdrop-final-exam": {
        title: "Airdrop Hunter Certification",
        duration: "45 min",
        content: "<h3>Final Certification Exam</h3><p>Complete this exam to earn your Airdrop Hunter Certificate.</p>",
        quiz: [
            { question: "What was the Uniswap airdrop amount?", options: ["400 UNI", "100 UNI", "1000 UNI", "10 UNI"], correct: 0 },
            { question: "What is 'Arbitrum'?", options: ["Optimistic Rollup L2", "ZK Rollup", "Sidechain", "L1"], correct: 0 },
            { question: "What is 'Optimism'?", options: ["Optimistic Rollup L2", "ZK Rollup", "Sidechain", "L1"], correct: 0 },
            { question: "What is 'StarkNet'?", options: ["ZK Rollup", "Optimistic Rollup", "Sidechain", "L1"], correct: 0 },
            { question: "What is 'Celestia'?", options: ["Modular Blockchain", "Monolithic Blockchain", "L2", "DApp"], correct: 0 },
            { question: "What is 'EigenLayer'?", options: ["Restaking protocol", "L2", "L1", "Wallet"], correct: 0 },
            { question: "What is 'Blur'?", options: ["NFT Marketplace", "DEX", "Wallet", "L2"], correct: 0 },
            { question: "What is 'Jupiter'?", options: ["Solana Aggregator", "Ethereum DEX", "Bitcoin Wallet", "L2"], correct: 0 },
            { question: "What is 'Pyth'?", options: ["Oracle", "DEX", "L2", "Wallet"], correct: 0 },
            { question: "What is 'Wormhole'?", options: ["Bridge", "DEX", "L2", "Wallet"], correct: 0 },
            { question: "What is 'Layer3'?", options: ["Quest platform", "L3 blockchain", "Wallet", "Coin"], correct: 0 },
            { question: "What is 'Snapshot' voting?", options: ["Off-chain voting", "On-chain voting", "Email voting", "SMS voting"], correct: 0 },
            { question: "What is 'TGE'?", options: ["Token Generation Event", "The Great Event", "Token Game Event", "Total Gas Event"], correct: 0 },
            { question: "What is 'FDV'?", options: ["Fully Diluted Valuation", "Full Daily Volume", "Future Date Value", "Free Daily Value"], correct: 0 },
            { question: "What is 'Cliff'?", options: ["Period before vesting starts", "A mountain", "A graph", "A drop"], correct: 0 }
        ]
    },
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LESSON_CONTENT;
}
