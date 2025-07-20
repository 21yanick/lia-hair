"use client"

import { UseFormReturn } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/components/ui/form"

interface StepTerminProps {
  form: UseFormReturn<any>
}

export function StepTermin({ form }: StepTerminProps) {
  return (
    <Form {...form}>
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Wann hattest du gerne einen Termin?
          </p>
        </div>
        
        <FormField
          control={form.control}
          name="termin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deine Terminwunsche</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="z.B. Nachste Woche Mittwoch oder Samstag nachmittags ware perfekt..."
                  className="min-h-[100px] resize-none text-base"
                  {...field}
                  autoFocus
                />
              </FormControl>
              <div className="text-xs text-muted-foreground mt-2">
                💡 <strong>Offnungszeiten:</strong> Mittwoch 09:00-18:30, Samstag 09:00-16:00
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </Form>
  )
}