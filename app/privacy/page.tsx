import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - StyloFront Theme Generator',
  description: 'Privacy Policy for StyloFront Theme Generator. Learn how we handle your data and protect your privacy.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold font-heading mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Introduction</h2>
          <p className="mb-4">
            StyloFront Theme Generator ("we", "our", or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we handle information when you use our theme generator application.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Information We Collect</h2>
          <p className="mb-4">
            <strong>Local Storage Data:</strong> StyloFront Theme Generator stores your theme data locally 
            in your browser's local storage. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Theme configurations you create</li>
            <li>Design tokens and customizations</li>
            <li>Your last saved theme draft</li>
          </ul>
          <p className="mb-4">
            This data is stored entirely on your device and is never transmitted to our servers.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">How We Use Information</h2>
          <p className="mb-4">
            We do not collect, store, or transmit any personal information. All theme data remains 
            on your local device. We do not use analytics, tracking cookies, or any third-party 
            services that collect user data.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Data Storage</h2>
          <p className="mb-4">
            All theme data is stored locally in your browser using localStorage. This means:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Your data never leaves your device</li>
            <li>We have no access to your themes or configurations</li>
            <li>Clearing your browser data will remove saved themes</li>
            <li>Data is specific to the browser and device you use</li>
          </ul>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Third-Party Services</h2>
          <p className="mb-4">
            StyloFront Theme Generator may use third-party services for hosting and content delivery. 
            These services may collect standard web server logs (IP addresses, browser types, etc.) 
            for operational purposes, but we do not use this information to identify or track individual users.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Cookies</h2>
          <p className="mb-4">
            We do not use cookies for tracking or analytics. Any cookies used are strictly necessary 
            for the application to function (e.g., theme preference storage).
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Your Rights</h2>
          <p className="mb-4">
            Since we do not collect personal information, there is no personal data to access, modify, 
            or delete. You have full control over your local data and can clear it at any time through 
            your browser settings.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Children's Privacy</h2>
          <p className="mb-4">
            Our service is not directed to individuals under the age of 13. We do not knowingly 
            collect personal information from children.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us through our 
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
