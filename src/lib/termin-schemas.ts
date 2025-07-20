import { z } from "zod"

// Simplified 3-step schemas (KISS approach)
export const stepNameSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben").max(50)
})

export const stepWuenscheSchema = z.object({
  wuensche: z.string().min(10, "Bitte beschreibe deine Wunsche (mindestens 10 Zeichen)").max(500)
})

export const stepTerminSchema = z.object({
  termin: z.string().min(5, "Bitte gib deine Terminwunsche an").max(200)
})

// Combined schema for final validation
export const terminAnfrageSchema = stepNameSchema
  .merge(stepWuenscheSchema)
  .merge(stepTerminSchema)

// Type inference
export type TerminAnfrage = z.infer<typeof terminAnfrageSchema>