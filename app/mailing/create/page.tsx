import { MailingForm } from "@/app/components/MailingForm"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CreateMailing() {
  return (
    <div className="page-container">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Create New Mailing</CardTitle>
          <CardDescription>Set up your email campaign</CardDescription>
        </CardHeader>
        <CardContent>
          <MailingForm />
        </CardContent>
      </Card>
    </div>
  )
}

