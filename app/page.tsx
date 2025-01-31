import { work, education } from "./work";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-2">
      <h1 className="text-3xl font-bold">Education</h1>
      {education.map((education) => (
        <Card key={education.school} className="shadow-none">
          <CardHeader className="flex flex-row gap-2 p-4">
            <Image src={education.image} alt={education.school} className="w-10 h-10" width={100} height={100} />
            <div className="flex flex-col">
              <CardTitle>{education.school}</CardTitle>
              <CardDescription>{education.degree}</CardDescription>
            </div>
          </CardHeader>
          {education.coursework && <CardContent className="flex flex-col gap-4">
            <p className="text-sm">Coursework: {education.coursework}</p>
          </CardContent>}
        </Card>
      ))}

      <h1 className="text-3xl font-bold">My Work</h1>
      {work.map((work) => (
        <Card key={work.title} className="shadow-none">
          <CardHeader className="pb-3">  
            <Link href={work.link} target="_blank">
              <CardTitle className="flex items-center justify-between text-lg">{work.title} <LinkIcon className="h-4 w-4" /></CardTitle>
            </Link>
            <CardDescription>{work.position}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-1">
              {work.technologies.map((technology) => <Badge key={technology} variant='secondary'>{technology}</Badge>)}
            </div>
            <div className="flex justify-center"><Image src={work.image} alt={work.title} className="w-2/3" width={1000} height={1000} /></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
