import { work } from "./work";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

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
            <div className="flex justify-center"><Image src={work.image} alt={work.title} className="w-2/3" width={1000} height={1000} /></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
