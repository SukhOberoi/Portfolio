import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"

export default function Skills() {
  return (
    <Accordion type="multiple" collapsible className="w-5/6 m-auto md:w-1/2">
      <AccordionItem value="item-1">
        <AccordionTrigger>Skills</AccordionTrigger>
        <AccordionContent>
          Yes. I don't have any skills.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Certifications</AccordionTrigger>
        <AccordionContent>
          Yes. I have a lot of fake Certifications.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Achievements</AccordionTrigger>
        <AccordionContent>
          Yes. I haven't achieved anything in life
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}


