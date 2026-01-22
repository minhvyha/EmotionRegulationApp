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

  const handleEmotionSelect = (emotion: Emotion, stepIndex?: number) => {
    setSelectedEmotion(emotion);
    setCurrentStepIndex(stepIndex ?? 0);
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
      <div className=" min-h-screen   flex flex-col items-center justify-start  px-4 py-8">
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
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
            </Button>
          </div>
      </div>
    );
  }

  const currentStep = selectedEmotion.steps[currentStepIndex];
  const isLastStep = currentStepIndex === selectedEmotion.steps.length - 1;
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-8 py-8">
        {currentStep.type !== "completion" && (
          <button
            onClick={handleExit}
            className="flex items-center mr-auto cursor-pointer gap-2  hover:text-foreground transition-colors text-[#3A6978] mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-base">
              {currentStep.type === "validation" ? "Back" : "Exit"}
            </span>
          </button>
        )}

        {/* Step Content */}
        <StepContent
          step={currentStep}
          emotionName={selectedEmotion.name}
          onContinue={handleContinue}
          onBack={handleBack}
          onDone={handleDone}
          selectedEmotion={selectedEmotion}
          isLastStep={isLastStep}
          handleEmotionSelect={handleEmotionSelect}
          emotions={emotions}
        />

        {/* Footer */}
        <p className=" text-center mt-auto text-[#2C4F5A] pt-4 font-medium text-[18px]">
          {currentStep.type === "completion"
            ? "Come back anytime."
            : "Remember, you can stop at any time"}
        </p>
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
  selectedEmotion: Emotion | null;
  handleEmotionSelect: (emotion: Emotion, stepIndex?: number) => void;
  emotions: Emotion[];
}

function StepContent({
  step,
  emotionName,
  onContinue,
  onBack,
  onDone,
  selectedEmotion,
  isLastStep,
  handleEmotionSelect,
  emotions,
}: StepContentProps) {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  if (step.type === "validation" && step.content) {
    return (
      <>
        {/* Title */}
        {selectedEmotion && selectedEmotion.name && (
          <h1 className=" text-center text-[32px]  font-semibold mb-4 text-balance text-[#2C4F5A]">
            {selectedEmotion.name}
          </h1>
        )}

        <div
          style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
          className="bg-[#FFFFFF99] rounded-[20px] pb-[32px] pt-[72px] px-4  border border-border/30 flex flex-col items-center justify-center min-h-[528px]  max-h-[530px]"
        >
          {step.icon && (
            <div className="mb-[32px] text-foreground/60">
              <EmotionIcon name={step.icon as any} />
            </div>
          )}
          <h2 className="text-foreground text-[28px] font-semibold text-center mb-4 ">
            {step.content.heading}
          </h2>
          {step.content.subheading && (
            <p className="text-muted-foreground text-center text-[18px] mb-4 ">
              {step.content.subheading}
            </p>
          )}
          {step.content.description && (
            <p className="text-muted-foreground text-center text-[18px] ">
              {step.content.description}
            </p>
          )}
          <div className="mt-[70px]">
            <Button
              onClick={onContinue}
              style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
              className="rounded-full cursor-pointer bg-[#BADEEA99] hover:bg-primary/90 text-[#3A6978] font-bold px-[20px] py-[8px] text-base"
            >
              Continue
            </Button>
          </div>
        </div>
      </>
    );
  }

  if (step.type === "completion" && step.content) {
    return (
      <div
        style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
        className="bg-[#FFFFFF99] rounded-[20px] pb-[32px] pt-[72px] px-4 pt-[64px] pb-[32px] m-0  flex flex-col items-center min-h-[619px] max-h-[619px] "
      >
        {" "}
        {step.icon && (
          <div className="mb-10 text-foreground/60">
            <EmotionIcon name={step.icon as any} />
          </div>
        )}
        <h2 className="text-[#2C4F5A] text-[32px] font-semibold text-center mb-[24px]">
          {step.content.heading}
        </h2>
        {step.content.description && (
          <p className="text-[#677E86] text-center text-[18px] ">
            {step.content.description}
          </p>
        )}
        <div className="mt-auto">
          <Button
            onClick={onDone}
            style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
            className="rounded-full bg-[#BADEEA99] hover:bg-primary/90 text-[#2C4F5A] w-[111px] h-fit p-2 border border-border/30 font-semibold text-[22px] "
          >
            Done
          </Button>
        </div>
      </div>
    );
  }

  if (step.type === "choice" && step.choices) {
    return (
      <>
        <div className="h-[421px] flex flex-col items-center justify-between">
          {step && step.title && (
            <h1 className=" text-center text-[32px]  font-semibold mb-4  text-[#2C4F5A]">
              {step.title}
            </h1>
          )}
        <div className="flex flex-col gap-[24px]">

          <div className=" flex flex-row items-center justify-center gap-[24px] text-center h-fit">
            {step.choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => handleEmotionSelect(emotions.find(e => e.id === choice.id)!, 1 )}
                style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
                className={`w-[148px] text-[#3A6978] text-[13px] font-semibold p-4 rounded-[20px] flex flex-col gap-4 items-center bg-[#FFFFFF99] border border-border/30 hover:bg-[#FFFFFFCC] hover:scale-105 transition-transform`}
              >
                <EmotionIcon name={choice.icon as any} size={75}></EmotionIcon>
                {choice.label}
              </button>
            ))}
          </div>
            <button
              onClick={onContinue}
              disabled={!selectedChoice}
              style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
              className="rounded-[20px] cursor-pointer w-[200px] mx-auto bg-[#FFFFFF99] hover:bg-[#FFFFFFCC] text-[#3A6978] font-bold px-[20px] h-fit p-4 text-base"
            >
              I’m still not sure
            </button>
        </div>
        </div>
      </>
    );
  }
  // Default step layout (breathing, grounding, somatic)
  if (!step.content) {
    return null;
  }
  return (
    <>
      {step && step.title && (
        <h1 className=" text-center text-[27px]  font-semibold mb-4 text-balance text-[#2C4F5A]">
          {step.title}
        </h1>
      )}
      <div
        style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
        className="bg-[#FFFFFF99] rounded-[20px] pb-[32px] pt-[72px] px-4 m-0  flex flex-col items-center min-h-[528px] max-h-[530px] justify-center"
      >
        <div className="flex-1 flex flex-col items-center justify-center text-center min-w-[287px]">
          <h2 className="text-[#2C4F5A] text-[20px] font-semibold mb-6 text-balance">
            {step.content.heading}
          </h2>
          {step.content.description && (
            <p className="text-[#677E86] text-[20px] ">
              {step.content.description}
            </p>
          )}
        </div>
        <div className="flex gap-4 mt-8">
          {step.canGoBack && (
            <Button
              onClick={onBack}
              variant="outline"
              style={{ boxShadow: "0px 2px 2px 0px #00000050" }}
              className="rounded-[20px] cursor-pointer bg-[#F0F0F033] hover:bg-[#E0E0E033] text-[#2C4F5A] font-bold text-[18px] border border-border/30 p-2 w-[96px]"
            >
              Back
            </Button>
          )}
          <Button
            onClick={onContinue}
            style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
            className="rounded-full cursor-pointer bg-[#BADEEA99] hover:bg-[#badeeab4] text-[#3A6978] font-bold px-[20px] py-[8px] text-[18px]"
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
}
