import { Tornado, Workflow } from 'lucide-react'

import { BackgroundBeams } from '@/components/ui/background-beams'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function LandingPage() {
  return (
    <>
      <div className="z-20 flex min-h-[100dvh] flex-col">
        <header className="flex h-14 items-center px-4 lg:px-6">
          <a className="flex items-center justify-center" href="#">
            <Tornado className="h-6 w-6" />
            <span className="sr-only">todo.saas</span>
          </a>
          <nav className="ml-auto flex items-center gap-4 sm:gap-6">
            <a
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
            >
              Features
            </a>
            <a
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
            >
              Pricing
            </a>
            <a
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
            >
              About
            </a>
            <a
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
            >
              Contact
            </a>
            <Button className="h-8" variant={'outline'} asChild>
              <a
                className="text-sm font-medium underline-offset-4 hover:underline"
                href="/sign-in"
              >
                Login
              </a>
            </Button>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full border-t py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Your tasks. Your way.
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    The most productive way to manage your tasks. Simple.
                    Customizable. Integrated with your favorite tools.
                  </p>
                </div>
                <div className="space-x-4">
                  <a
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Experience the workflow the best frontend teams love.
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let your team focus on shipping features instead of managing
                  infrastructure with automated CI/CD.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Sign up to get notified when we launch.
                  <a className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </a>
                </p>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Meet our Customers
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Trusted by the best teams in the world. We help teams of all
                  sizes.
                </p>
              </div>
              <div className="divide-y rounded-lg border">
                <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                  <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                    <Workflow className="h-14 w-14" />
                  </div>
                  <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                    <Workflow className="h-14 w-14" />
                  </div>
                  <div className="mx-auto flex w-full items-center justify-center p-8">
                    <Workflow className="h-14 w-14" />
                  </div>
                </div>
                <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                  <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                    <Workflow className="h-14 w-14" />
                  </div>
                  <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                    <Workflow className="h-14 w-14" />
                  </div>
                  <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                    <Workflow className="h-14 w-14" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Contact Sales
                </a>
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Learn more
                </a>
              </div>
            </div>
          </section> */}
        </main>
        <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 todo.saas. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:ml-auto sm:gap-6">
            <a className="text-xs underline-offset-4 hover:underline" href="#">
              Terms of Service
            </a>
            <a className="text-xs underline-offset-4 hover:underline" href="#">
              Privacy
            </a>
          </nav>
        </footer>
      </div>
      <BackgroundBeams className="pointer-events-none" />
    </>
  )
}
