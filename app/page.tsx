import { work, education } from "./work";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import Face from "@/public/face.jpeg";
import LinkedIn from "@/public/linkedin.png";
import Github from "@/public/github.png";
import { Label } from "@/components/ui/label"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Home() {
  return (
    <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-2">
      {/* Header */}
      <div className="flex gap-2 pt-10">
        <Image src={Face} alt="Face" className="h-20 w-auto rounded-lg" />
        <div className="flex flex-col justify-around">
          <h1 className="text-xl md:text-4xl font-semibold">Alec Watts</h1>
          <div className="flex flex-wrap gap-2 items-center">
            <Link href="https://www.linkedin.com/in/alexander-h-watts/" target="_blank">
              <Image src={LinkedIn} alt="LinkedIn" className="w-5 h-auto" />
            </Link>
            <Link href="https://github.com/alec-watts" target="_blank">
              <Image src={Github} alt="Github" className="w-5 h-auto" />
            </Link>
            <Link href="/alexander-watts-resume.pdf" target="_blank">
              <Badge variant="secondary" className="text-xs flex items-center gap-1">Resume</Badge>
            </Link>
            <Link href="sms:+13109221006" target="_blank">
              <Badge variant="secondary" className="text-xs">(310) 922-1006</Badge>
            </Link>
            <Badge variant="secondary" className="text-xs">alecwatts1@gmail.com</Badge>
          </div>
        </div>
      </div>

      <Label className="font-semibold text-md pl-1 pt-1">Education</Label>
      {education.map((education)   => (
        <Card key={education.school}>
          <CardHeader className="flex flex-row gap-2 p-4 pb-2">
            <Image src={education.image} alt={education.school} className="h-10 w-auto" />
            <div>
              <CardTitle>{education.school}</CardTitle>
              <CardDescription>{education.degree}</CardDescription>
            </div>
          </CardHeader>

          {education.coursework && (
            <CardContent className="flex flex-col gap-4 p-4 pt-0">
              <p className="text-sm">Coursework: {education.coursework}</p>
            </CardContent>
          )}
        </Card>
      ))}

      <Label className="font-semibold text-md pl-1 pt-1">My Work</Label>
      {work.map((work) => (
        <Card key={work.title}>
          <CardHeader className="pb-3">
            <Link href={work.link} target="_blank" className="flex justify-between gap-2 items-center">
              <div className="flex items-center gap-2">
                <Image src={work.icon} alt={work.title} className="h-8 w-auto" />
                <div>
                  <CardTitle>{work.title}</CardTitle>
                  <CardDescription>{work.position}</CardDescription>
                </div>
              </div>
              <LinkIcon className="h-4 w-4" />
            </Link>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-1">
              {work.technologies.map((technology) => <Badge key={technology} variant='secondary'>{technology}</Badge>)}
            </div>

            <div className="flex justify-center">
              <Carousel className="flex flex-col gap-3">
                <CarouselContent>
                  {work.media.map((media, index) => (
                    <CarouselItem key={index} className="flex justify-center">
                      {typeof media === 'string' 
                        ? media.includes('https') 
                          ? <AspectRatio ratio={14 / 9}>
                              <iframe className="w-full h-full" src={media} allowFullScreen />
                            </AspectRatio>
                          : <video src={media} className="rounded-sm" autoPlay muted loop playsInline />
                        : <Image src={media} alt={media.src} />
                      }
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {work.media.length > 1 && (
                  <div className="relative flex justify-center gap-2">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                )}
              </Carousel>
            </div>

            {work.bulletPoints && (
              <ul className="list-disc list-inside text-sm">
                {work.bulletPoints.map((bulletPoint, index) => <li key={index}>{bulletPoint}</li>)}
              </ul>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}