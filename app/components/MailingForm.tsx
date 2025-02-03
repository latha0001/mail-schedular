"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createMailing, getMailers, getLists } from "@/lib/api"
import type { Mailer, List } from "@/lib/types"

const formSchema = z.object({
  mailerId: z.string().min(1, "Mailer is required"),
  listId: z.string().min(1, "List is required"),
  scheduleDate: z.string().min(1, "Schedule date is required"),
  scheduleTime: z.string().min(1, "Schedule time is required"),
})

export function MailingForm() {
  const [mailers, setMailers] = useState<Mailer[]>([])
  const [lists, setLists] = useState<List[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const [mailersData, listsData] = await Promise.all([getMailers(), getLists()])
      setMailers(mailersData)
      setLists(listsData)
    }
    fetchData()
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mailerId: "",
      listId: "",
      scheduleDate: format(new Date(), "yyyy-MM-dd"),
      scheduleTime: "12:00",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const scheduleDateTime = new Date(`${values.scheduleDate}T${values.scheduleTime}:00`)
    const mailing = {
      mailerId: values.mailerId,
      listId: values.listId,
      scheduleDateTime: scheduleDateTime.toISOString(),
    }

    try {
      const result = await createMailing(mailing)
      console.log("Mailing created:", result)
      // TODO: Add success message and redirect
    } catch (error) {
      console.error("Error creating mailing:", error)
      // TODO: Add error message
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="mailerId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mailer</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a mailer" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {mailers.map((mailer) => (
                    <SelectItem key={mailer.id} value={mailer.id}>
                      {mailer.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="listId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>List</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a list" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {lists.map((list) => (
                    <SelectItem key={list.id} value={list.id}>
                      {list.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="scheduleDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Schedule Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="scheduleTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Schedule Time</FormLabel>
              <FormControl>
                <Input type="time" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Create Mailing
        </Button>
      </form>
    </Form>
  )
}

