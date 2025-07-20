"use client"

import { UseFormReturn } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/components/ui/form"

interface StepWuenscheProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>
}

export function StepWuensche({ form }: StepWuenscheProps) {
  return (
    <Form {...form}>
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Beschreibe deine Wunsche und Vorstellungen
          </p>
        </div>
        
        <FormField
          control={form.control}
          name="wuensche"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deine Wunsche</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="z.B. Ich mochte gerne etwas kurzer, aber nicht zu kurz. Vielleicht auch hellere Strahnen..."
                  className="min-h-[120px] resize-none text-base"
                  {...field}
                  autoFocus
                />
              </FormControl>
              <div className="text-xs text-muted-foreground">
                {field.value?.length || 0}/500 Zeichen
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </Form>
  )
}