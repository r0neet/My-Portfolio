import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="text-gray-400 text-center text-lg leading-relaxed mb-8 max-w-3xl mx-auto font-medium">
        <p>A beginner photographer sees the world with curiosity and creativity.</p>
        <p>They experiment with angles, light, and moments to improve every day.</p>
        <p>Each photograph becomes a step toward mastering the art of storytelling.</p>
        <p>Mistakes turn into lessons, helping them discover their unique style.</p>
        <p>With passion behind the lens, every click captures a new experience.</p>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "micro infosys",
    description: "",
    link: "https://drive.google.com/file/d/1sC--sbWR8jdJrzSZtue6xL6KrFP7JP4W/view?usp=drive_link",
  },
  {
    title: "courses",
    description: "", 
    link: "https://drive.google.com/file/d/1YRz5qnUhLUFDKQoB_8b193JV1WvU9jXA/view?usp=drive_link",
  },
  {
    title: "INTERSHIP CERTIFICATE",
    description:
      "Cretificate of Completion of Intership at RS.software(India).Ltd",
    link: "https://drive.google.com/file/d/1O6_woHleTMKtjv0XWR82oBsHJKpI3WXF/view?usp=drive_link",
  },
];
