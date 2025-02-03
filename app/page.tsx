import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="page-container">
      <h1 className="text-4xl font-bold mb-8 text-center">Mailing Scheduler</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Create Mailing</CardTitle>
            <CardDescription>Set up a new email campaign</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Create and schedule your next email campaign with ease.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/mailing/create">Create New Mailing</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>View Mailings</CardTitle>
            <CardDescription>Manage your scheduled campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <p>View and edit your upcoming and past email campaigns.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Mailings
            </Button>
          </CardFooter>
        </Card>
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>Track your campaign performance</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Get insights into your email campaign performance.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Analytics
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

