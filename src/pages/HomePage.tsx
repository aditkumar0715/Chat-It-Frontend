

import React from 'react'
import { Link } from 'react-router'
import { ShieldCheck, MessageSquare, Lock, ThumbsUp } from 'lucide-react'
import Footer from '@/components/common/Footer'

const Home: React.FC = () => {
  return (
    <>
      <main className="grow bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center space-y-6 px-6 pt-20 pb-32 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 md:text-6xl dark:text-white">
            Welcome to <span className="text-blue-600">CHAT-IT</span>
          </h1>
          <p className="max-w-3xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
            Secure, encrypted, and ad-free messaging. Stay connected without
            compromising your privacy.
          </p>
          <Link to="/signup">
            <button className="mt-4 rounded-lg bg-blue-600 px-8 py-4 text-lg font-medium text-white hover:bg-blue-700">
              Start Chatting Now 🚀
            </button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="bg-gray-100 py-16 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
              Why Choose <span className="text-blue-600">CHAT-IT?</span>
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Feature 1: End-to-End Encryption */}
              <div className="flex flex-col items-center text-center">
                <Lock className="mb-4 h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  End-to-End Encryption
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your messages are encrypted so only you and the recipient can
                  read them.
                </p>
              </div>

              {/* Feature 2: Real-Time Messaging */}
              <div className="flex flex-col items-center text-center">
                <MessageSquare className="mb-4 h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Real-Time Messaging
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Send and receive messages instantly with our lightning-fast
                  real-time chat.
                </p>
              </div>

              {/* Feature 3: No Ads */}
              <div className="flex flex-col items-center text-center">
                <ThumbsUp className="mb-4 h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  100% Ad-Free
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No intrusive ads, ever. We respect your attention and privacy.
                </p>
              </div>

              {/* Feature 4: Privacy-First Approach */}
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="mb-4 h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Privacy-First
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We don’t store your data. Your conversations are yours alone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 py-16 text-center text-white">
          <h2 className="mb-4 text-3xl font-extrabold">
            Ready to Join the Conversation?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg">
            Start chatting securely and privately today. Connect with your
            friends and family without compromising your data.
          </p>
          <Link to="/signup">
            <button className="rounded-lg bg-white px-8 py-4 text-lg font-medium text-blue-600 hover:bg-gray-100">
              Sign Up Now 📝
            </button>
          </Link>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Home
