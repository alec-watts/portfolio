import { work } from "./work";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div>
      {work.map((work) => (
        <div key={work.id}>
          <h2>{work.title}</h2>
          <p>{work.subtitle}</p>
          {work.technologies.map((technology) => <Badge key={technology} variant='secondary'>{technology}</Badge>)}
        </div>
      ))}
    </div>
  );
}
