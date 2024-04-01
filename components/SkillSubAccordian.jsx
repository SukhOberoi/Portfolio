import {AccordionItem, AccordionTrigger, Accordion, AccordionContent} from './ui/accordion.jsx'; // Assuming this is the correct path to the component
import skillList from '../src/assets/skillList.jsx'; // Assuming this is the correct path to the skills file

// Define a functional component to render skills
const SkillSubAccordion = () => {
  return (
        <div>
          <Accordion
            type="multiple"
            collapsible
            className="p-4"
          >
            {Object.keys(skillList).map((category, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>
                  {category}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside">
                    {skillList[category].map((skill, subIndex) => (
                      <li key={subIndex}>{skill}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
  );
};

export default SkillSubAccordion;
