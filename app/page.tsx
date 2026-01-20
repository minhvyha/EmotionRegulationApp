"use client";

import { useState } from "react";
import { emotions } from "@/lib/emotions-data";
import type { Emotion, Step } from "@/lib/emotions-data";
import { EmotionIcon } from "@/components/emotion-icons";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LucideMessageCircleQuestion } from "lucide-react";

export default function EmotionRegulationApp() {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleEmotionSelect = (emotion: Emotion) => {
    setSelectedEmotion(emotion);
    setCurrentStepIndex(0);
  };

  const handleContinue = () => {
    if (
      selectedEmotion &&
      currentStepIndex < selectedEmotion.steps.length - 1
    ) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleExit = () => {
    setSelectedEmotion(null);
    setCurrentStepIndex(0);
  };

  const handleDone = () => {
    setSelectedEmotion(null);
    setCurrentStepIndex(0);
  };

  if (!selectedEmotion) {
    return (
      <div className="min-h-screen custom-app-bg  flex flex-col items-center justify-start px-[38px] py-[60px]">
        <div className="w-full max-w-md">
          <h1 className="text-foreground text-[32px]  font-medium text-center mb-3 text-balance">
            I am feeling...
          </h1>
          <p className="text-muted-foreground text-center mb-10">
            Take a breath. Choose the closest feeling.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {emotions.slice(0, -1).map((emotion) => (
              <button
                key={emotion.id}
                onClick={() => handleEmotionSelect(emotion)}
                className="bg-card/60 hover:bg-card/80 transition-colors cursor-pointer rounded-2xl p-4 flex flex-col items-center justify-center gap-4 shadow-md"
              >
                <EmotionIcon
                  name={emotion.icon as any}
                  className="text-foreground/70"
                />
                <span className="text-foreground text-base font-medium">
                  {emotion.name}
                </span>
              </button>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <Button
              onClick={() => handleEmotionSelect(emotions[emotions.length - 1])}
              variant="outline"
              className="rounded-full bg-[#BADEEA99] hover:bg-[#badeeae9] text-[#3A6978] hover:text-[#3A6978] shadow-md font-bold border-none cursor-pointer px-8"
            >
              I&apos;m not sure{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const currentStep = selectedEmotion.steps[currentStepIndex];
  const isLastStep = currentStepIndex === selectedEmotion.steps.length - 1;

  return (
    <div className="min-h-screen custom-app-bg flex flex-col items-center justify-start px-6 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <button
          onClick={handleExit}
          className="flex items-center cursor-pointer gap-2 text-foreground/70 hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-base">
            {currentStep.type === "completion"
              ? "Exit"
              : currentStep.canGoBack
                ? "Exit"
                : "Back"}
          </span>
        </button>

        {/* Title */}
        {currentStep.title && (
          <h1 className="text-foreground text-2xl font-semibold mb-8 text-balance">
            {currentStep.title}
          </h1>
        )}

        {/* Step Content */}
        <StepContent
          step={currentStep}
          emotionName={selectedEmotion.name}
          onContinue={handleContinue}
          onBack={handleBack}
          onDone={handleDone}
          isLastStep={isLastStep}
        />

        {/* Footer */}
        <p className="text-muted-foreground text-center mt-12 text-sm">
          {currentStep.type === "completion"
            ? "Come back anytime."
            : "Remember, you can stop at any time"}
        </p>
      </div>
    </div>
  );
}

interface StepContentProps {
  step: Step;
  emotionName: string;
  onContinue: () => void;
  onBack: () => void;
  onDone: () => void;
  isLastStep: boolean;
}

function StepContent({
  step,
  emotionName,
  onContinue,
  onBack,
  onDone,
  isLastStep,
}: StepContentProps) {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  if (step.type === "validation") {
    return (
      <div className="bg-card rounded-3xl p-12 shadow-lg border border-border/30 flex flex-col items-center min-h-[420px] justify-center">
        {step.icon && (
          <div className="mb-8 text-foreground/60">
            <EmotionIcon name={step.icon as any} />
          </div>
        )}
        <h2 className="text-foreground text-2xl font-semibold text-center mb-3 text-balance">
          {step.content.heading}
        </h2>
        {step.content.subheading && (
          <p className="text-muted-foreground text-center mb-3 text-balance">
            {step.content.subheading}
          </p>
        )}
        {step.content.description && (
          <p className="text-muted-foreground text-center text-balance">
            {step.content.description}
          </p>
        )}
        <div className="mt-10">
          <Button
            onClick={onContinue}
            className="rounded-full cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base"
          >
            Continue
          </Button>
        </div>
      </div>
    );
  }

  if (step.type === "choice") {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {step.choices?.map((choice) => (
            <button
              key={choice.id}
              onClick={() => setSelectedChoice(choice.id)}
              className={`bg-card hover:bg-card/80 transition-all rounded-2xl p-8 flex flex-col items-center justify-center gap-4 shadow-sm border-2 ${
                selectedChoice === choice.id
                  ? "border-primary"
                  : "border-border/30"
              }`}
            >
              <EmotionIcon
                name={choice.icon as any}
                className="text-foreground/70"
              />
              <span className="text-foreground text-sm font-medium text-center text-balance">
                {choice.label}
              </span>
            </button>
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            onClick={onContinue}
            variant="outline"
            className="rounded-full bg-card hover:bg-card/80 text-foreground border-border/50 px-8"
          >
            I&apos;m still not sure
          </Button>
        </div>
      </div>
    );
  }

  if (step.type === "completion") {
    return (
      <div className="bg-card rounded-3xl p-12 shadow-lg border border-border/30 flex flex-col items-center min-h-[450px] justify-center">
        {step.icon && (
          <div className="mb-10 text-foreground/60">
            <EmotionIcon name={step.icon as any} />
          </div>
        )}
        <h2 className="text-foreground text-2xl font-semibold text-center mb-4 text-balance">
          {step.content.heading}
        </h2>
        {step.content.description && (
          <p className="text-muted-foreground text-center text-balance">
            {step.content.description}
          </p>
        )}
        <div className="mt-12">
          <Button
            onClick={onDone}
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base"
          >
            Done
          </Button>
        </div>
      </div>
    );
  }

  // Default step layout (breathing, grounding, somatic)
  return (
    <div className="bg-card rounded-3xl p-12 shadow-lg border border-border/30 flex flex-col items-center min-h-[420px] justify-between">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <h2 className="text-foreground text-xl font-semibold mb-6 text-balance">
          {step.content.heading}
        </h2>
        {step.content.description && (
          <p className="text-muted-foreground text-balance whitespace-pre-line leading-relaxed">
            {step.content.description}
          </p>
        )}
      </div>
      <div className="flex gap-4 mt-8">
        {step.canGoBack && (
          <Button
            onClick={onBack}
            variant="outline"
            className="rounded-full cursor-pointer bg-secondary hover:bg-secondary/80 text-secondary-foreground border-0 px-8 py-6"
          >
            Back
          </Button>
        )}
        <Button
          onClick={onContinue}
          className="rounded-full cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
