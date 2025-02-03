import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Udemy",
    description:
      "Microsoft Access SQl: SQL from Absolute Beginners To Expert. CERTIFICATION OF COMPLETION",
    link: "https://drive.google.com/file/d/1sC--sbWR8jdJrzSZtue6xL6KrFP7JP4W/view?usp=drive_link",
  },
  {
    title: "Udemy",
    description:
      "Ultimate Web Designer & Web Developer Course. CERTIFICATION OF COMPLETION", 
    link: "https://drive.google.com/file/d/1YRz5qnUhLUFDKQoB_8b193JV1WvU9jXA/view?usp=drive_link",
  },
  {
    title: "INTERSHIP CERTIFICATE",
    description:
      "Cretificate of Completion of Intership at RS.software(India).Ltd",
    link: "https://drive.google.com/file/d/1O6_woHleTMKtjv0XWR82oBsHJKpI3WXF/view?usp=drive_link",
  },
];
