"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Calendar, ArrowLeft, ArrowRight, MessageCircle } from "lucide-react"

// Import schemas and types
import {
  stepNameSchema,
  stepWuenscheSchema,
  stepTerminSchema,
  TerminAnfrage
} from "@/lib/termin-schemas"
import { openWhatsApp } from "@/lib/whatsapp-generator"

// Import step components
import { StepName } from "./termin-steps/step-name"
import { StepWuensche } from "./termin-steps/step-wuensche"
import { StepTermin } from "./termin-steps/step-termin"

const TOTAL_STEPS = 3

const stepSchemas = [
  stepNameSchema,
  stepWuenscheSchema,
  stepTerminSchema
]

const stepTitles = [
  "Wie heisst du?",
  "Was stellst du dir vor?",
  "Wann hattest du Zeit?"
]

interface TerminDialogProps {
  children: React.ReactNode
}

export function TerminDialog({ children }: TerminDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<Partial<TerminAnfrage>>({})

  const form = useForm({
    resolver: zodResolver(stepSchemas[currentStep]),
    defaultValues: {
      name: "",
      wuensche: "",
      termin: "",
      ...formData
    }
  })

  const progress = ((currentStep + 1) / TOTAL_STEPS) * 100

  const handleNext = async () => {
    const isValid = await form.trigger()
    if (isValid) {
      // Save current step data
      const stepData = form.getValues()
      setFormData(prev => ({ ...prev, ...stepData }))
      
      if (currentStep < TOTAL_STEPS - 1) {
        setCurrentStep(prev => prev + 1)
        // Reset form for next step with proper defaults
        form.reset({
          name: "",
          wuensche: "",
          termin: "",
          ...formData,
          ...stepData
        })
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
      // Restore previous form state with defaults
      form.reset({
        name: "",
        wuensche: "",
        termin: "",
        ...formData
      })
    }
  }

  const handleSubmit = async () => {
    const isValid = await form.trigger()
    if (isValid) {
      const finalData = { ...formData, ...form.getValues() } as TerminAnfrage
      
      // Open WhatsApp with generated message
      openWhatsApp(finalData)
      
      // Close dialog and reset
      setIsOpen(false)
      setCurrentStep(0)
      setFormData({})
      form.reset({
        name: "",
        wuensche: "",
        termin: ""
      })
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <StepName form={form} />
      case 1:
        return <StepWuensche form={form} />
      case 2:
        return <StepTermin form={form} />
      default:
        return null
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            {stepTitles[currentStep]}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Schritt {currentStep + 1} von {TOTAL_STEPS}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Current Step */}
          <div className="min-h-[200px]">
            {renderStep()}
          </div>

          {/* Navigation */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 0}
              className="flex-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück
            </Button>

            {currentStep < TOTAL_STEPS - 1 ? (
              <Button onClick={handleNext} className="flex-1">
                Weiter
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="flex-1 bg-green-600 hover:bg-green-700">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp öffnen
              </Button>
            )}
          </div>

          {/* Photo Request */}
          {currentStep === TOTAL_STEPS - 1 && (
            <div className="bg-lavender-50 dark:bg-muted/30 border border-lavender-200 dark:border-muted rounded-lg p-4">
              <p className="text-sm">
                📸 <strong>Bitte sende mir nach der Nachricht:</strong><br />
                • 2-3 Fotos deiner aktuellen Frisur (vorne, seitlich, hinten)<br />
                • Falls vorhanden: ein Inspirationsfoto vom gewunschten Look<br />
                <span className="text-muted-foreground">Das hilft mir, dich optimal zu beraten! 😊</span>
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}