import { work } from "./work";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-4">
      {work.map((work) => (
        <Card key={work.title} className="shadow-none">
          <CardHeader>  
            <CardTitle>{work.title}</CardTitle>
            <CardDescription>{work.position}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {work.technologies.map((technology) => <Badge key={technology} variant='secondary'>{technology}</Badge>)}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
