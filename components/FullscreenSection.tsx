import GridContainer from "./GridContainer";

interface FullscreenSectionProps {
  id: string;
  title: string;
  bgColor?: string;
  textColor?: string;
}

export default function FullscreenSection({
  id,
  title,
  bgColor = 'bg-white',
  textColor = 'text-brand-blue',
}: FullscreenSectionProps) {
  return (
    <section id={id} className={`min-h-screen flex items-center justify-center ${bgColor} ${textColor}`}>
      <GridContainer>
        <div className="col-span-full text-center">
          <h2 className="text-6xl font-bold">{title}</h2>
        </div>
      </GridContainer>
    </section>
  );
}