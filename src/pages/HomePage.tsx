import React from 'react'
import { Link } from 'react-router'
import { ShieldCheck, MessageSquare, Lock, ThumbsUp } from 'lucide-react'
import Footer from '@/components/common/Footer'
import Logo from '@/components/common/Logo'

const Home: React.FC = () => {
  return (
    <>
      <main className="bg-background grow">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center space-y-6 px-6 pt-20 pb-32 text-center">
          <h1 className="text-foreground text-4xl font-extrabold md:text-6xl">
            Welcome to{' '}
            <span className="text-primary">
              <Logo />
            </span>
          </h1>
          <p className="text-muted-foreground max-w-3xl text-lg md:text-xl">
            Secure, encrypted, and ad-free messaging. Stay connected without
            compromising your privacy.
          </p>
          <Link to="/signup">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 rounded-lg px-8 py-4 text-lg font-medium">
              Start Chatting Now 🚀
            </button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-foreground mb-12 text-center text-3xl font-bold">
              Why Choose{' '}
              <span className="text-primary">
                <Logo />?
              </span>
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Feature 1: End-to-End Encryption */}
              <div className="flex flex-col items-center text-center">
                <Lock className="text-primary mb-4 h-12 w-12" />
                <h3 className="text-foreground text-xl font-semibold">
                  End-to-End Encryption
                </h3>
                <p className="text-muted-foreground">
                  Your messages are encrypted so only you and the recipient can
                  read them.
                </p>
              </div>

              {/* Feature 2: Real-Time Messaging */}
              <div className="flex flex-col items-center text-center">
                <MessageSquare className="text-primary mb-4 h-12 w-12" />
                <h3 className="text-foreground text-xl font-semibold">
                  Real-Time Messaging
                </h3>
                <p className="text-muted-foreground">
                  Send and receive messages instantly with our lightning-fast
                  real-time chat.
                </p>
              </div>

              {/* Feature 3: No Ads */}
              <div className="flex flex-col items-center text-center">
                <ThumbsUp className="text-primary mb-4 h-12 w-12" />
                <h3 className="text-foreground text-xl font-semibold">
                  100% Ad-Free
                </h3>
                <p className="text-muted-foreground">
                  No intrusive ads, ever. We respect your attention and privacy.
                </p>
              </div>

              {/* Feature 4: Privacy-First Approach */}
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="text-primary mb-4 h-12 w-12" />
                <h3 className="text-foreground text-xl font-semibold">
                  Privacy-First
                </h3>
                <p className="text-muted-foreground">
                  We don't store your data. Your conversations are yours alone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-primary text-primary-foreground py-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold">
            Ready to Join the Conversation?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg">
            Start chatting securely and privately today. Connect with your
            friends and family without compromising your data.
          </p>
          <Link to="/signup">
            <button className="bg-background text-primary hover:bg-background/90 rounded-lg px-8 py-4 text-lg font-medium">
              Sign Up Now 📝
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
