import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - StyloFront Theme Generator',
  description: 'Terms of Service for StyloFront Theme Generator. Read our terms and conditions for using the theme generator.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold font-heading mb-4">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Agreement to Terms</h2>
          <p className="mb-4">
            By accessing and using StyloFront Theme Generator ("the Service"), you accept and agree 
            to be bound by the terms and provision of this agreement. If you do not agree to abide 
            by the above, please do not use this service.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily use StyloFront Theme Generator for personal and 
            commercial purposes. This is the grant of a license, not a transfer of title, and under 
            this license you may not:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose without proper attribution</li>
            <li>Attempt to reverse engineer any software contained in the Service</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">User Content</h2>
          <p className="mb-4">
            You retain all rights to any themes, designs, or content you create using StyloFront 
            Theme Generator. You are free to use, modify, and distribute any themes you generate 
            for any purpose, commercial or otherwise.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Service Availability</h2>
          <p className="mb-4">
            We strive to provide a reliable service, but we do not guarantee that the Service will 
            be available at all times. The Service may be unavailable due to maintenance, updates, 
            or unforeseen circumstances. We are not liable for any loss or inconvenience resulting 
            from service unavailability.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Data and Privacy</h2>
          <p className="mb-4">
            StyloFront Theme Generator stores all theme data locally in your browser. We do not 
            collect, store, or transmit your theme data to our servers. You are responsible for 
            backing up your themes if needed. We are not responsible for any loss of data stored 
            locally in your browser.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Disclaimer</h2>
          <p className="mb-4">
            The materials on StyloFront Theme Generator are provided on an 'as is' basis. We make 
            no warranties, expressed or implied, and hereby disclaim and negate all other warranties 
            including, without limitation, implied warranties or conditions of merchantability, fitness 
            for a particular purpose, or non-infringement of intellectual property or other violation 
            of rights.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Limitations</h2>
          <p className="mb-4">
            In no event shall StyloFront or its suppliers be liable for any damages (including, 
            without limitation, damages for loss of data or profit, or due to business interruption) 
            arising out of the use or inability to use the materials on StyloFront Theme Generator, 
            even if we or an authorized representative has been notified orally or in writing of 
            the possibility of such damage.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Accuracy of Materials</h2>
          <p className="mb-4">
            The materials appearing on StyloFront Theme Generator could include technical, typographical, 
            or photographic errors. We do not warrant that any of the materials on its website are 
            accurate, complete, or current. We may make changes to the materials contained on its 
            website at any time without notice.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Links</h2>
          <p className="mb-4">
            We have not reviewed all of the sites linked to our website and are not responsible for 
            the contents of any such linked site. The inclusion of any link does not imply endorsement 
            by StyloFront of the site. Use of any such linked website is at the user's own risk.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Modifications</h2>
          <p className="mb-4">
            We may revise these terms of service for its website at any time without notice. By using 
            this website you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Governing Law</h2>
          <p className="mb-4">
            These terms and conditions are governed by and construed in accordance with applicable laws, 
            and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us through our 
            GitHub repository or other available contact channels.
          </p>

          <div className="mt-12">
            <Link href="/">
              <Button size="lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
