import React from "react";

type IconName =
  | "anxious"
  | "overwhelmed"
  | "stressed"
  | "angry"
  | "sad"
  | "lonely"
  | "ashamed"
  | "numb"
  | "stones"
  | "wind"
  | "cloud"
  | "lightning"
  | "question";

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  file?: string;
  size?: number;
}

/**
 * Generic image icon loader from /public/icon/<file>.png
 * falls back to /icon/question.png on error.
 */
function IconImg({ file = "question", size = 48, alt, className, ...rest }: ImgProps) {
  return (
    <img
      src={`/icon/${file}.png`}
      alt={alt ?? `${file} icon`}
      width={size}
      height={size}
      className={className}
      onError={(e) => {
        const img = e.currentTarget as HTMLImageElement;
        if (img.src.endsWith("/icon/question.png")) return;
        img.onerror = null;
        img.src = "/icon/question.png";
      }}
      {...rest}
    />
  );
}

/* Map logical icon names to the actual file base names you provided */
const NAME_TO_FILE: Record<IconName, string> = {
  anxious: "anxiety",        // anxiety.png
  overwhelmed: "drown",      // drown.png
  stressed: "shaking",       // shaking.png
  angry: "mad",              // mad.png
  sad: "cry",                // cry.png
  lonely: "lonely",          // lonely.png
  ashamed: "disappointed",   // disappointed.png
  numb: "disconnected",      // disconnected.png
  stones: "stones",          // stones.png
  wind: "air",               // air.png
  cloud: "rainfall",         // rainfall.png
  lightning: "lightning",    // lightning.png
  question: "question",      // question.png (fallback)
};

/* keep named exports for compatibility */
export function AnxiousIcon(props: Omit<ImgProps, "file">) {
  return <IconImg file={NAME_TO_FILE.anxious} {...props} />;
}
export function OverwhelmedIcon(props: Omit<ImgProps, "file">) {
  return <IconImg file={NAME_TO_FILE.overwhelmed} {...props} />;
}
export function StressedIcon(props: Omit<ImgProps, "file">) {
  return <IconImg file={NAME_TO_FILE.stressed} {...props} />;
}
export function AngryIcon(props: Omit<ImgProps, "file">) {
  return <IconImg file={NAME_TO_FILE.angry} {...props} />;
}
export function SadIcon(props: Omit<ImgProps, "file">) {
  return <IconImg file={NAME_TO_FILE.sad} {...props} />;
}
export function LonelyIcon(props: Omit<ImgProps, "file">) {
  return <IconImg file={NAME_TO_FILE.lonely} {...props} />;
}
export function AshamedIcon(props: Omit<ImgProps, "file">) {
  return <IconImg file={NAME_TO_FILE.ashamed} {...props} />;
}
export function NumbIcon(props: Omit<ImgProps, "file">) {
  return <IconImg file={NAME_TO_FILE.numb} {...props} />;
}
export function StonesIcon(props: Omit<ImgProps, "file">) {
  return <IconImg file={NAME_TO_FILE.stones} size={80} {...props} />;
}
export function WindIcon(props: Omit<ImgProps, "file">) {
  return <IconImg file={NAME_TO_FILE.wind} size={80} {...props} />;
}
export function CloudIcon(props: Omit<ImgProps, "file">) {
  return <IconImg file={NAME_TO_FILE.cloud} {...props} />;
}
export function LightningIcon(props: Omit<ImgProps, "file">) {
  return <IconImg file={NAME_TO_FILE.lightning} {...props} />;
}
export function QuestionIcon(props: Omit<ImgProps, "file">) {
  return <IconImg file={NAME_TO_FILE.question} {...props} />;
}

/* Generic EmotionIcon by logical name */
interface EmotionIconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export function EmotionIcon({ name, className, size }: EmotionIconProps) {
  const file = NAME_TO_FILE[name] ?? NAME_TO_FILE.question;
  const defaultSize = name === "stones" || name === "wind" ? 100 : 50;
  const finalSize = size ?? defaultSize;

  return (
    <div className={className} role="img" aria-label={`${name} icon`}>
      <img
        src={`/icon/${file}.png`}
        alt={`${name} icon`}
        width={finalSize}
        height={finalSize}
        onError={(e) => {
          const img = e.currentTarget as HTMLImageElement;
          if (img.src.endsWith("/icon/question.png")) return;
          img.onerror = null;
          img.src = "/icon/question.png";
        }}
      />
    </div>
  );
}
