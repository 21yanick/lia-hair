"use client"

import { UseFormReturn } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/components/ui/form"

interface StepNameProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>
}

export function StepName({ form }: StepNameProps) {
  return (
    <Form {...form}>
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Damit wir dich personlich ansprechen konnen
          </p>
        </div>
        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dein Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="z.B. Anna Muller"
                  {...field}
                  className="text-lg h-12"
                  autoFocus
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </Form>
  )
}