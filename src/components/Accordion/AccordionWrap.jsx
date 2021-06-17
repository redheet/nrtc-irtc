import React from 'react';
import Accordion, { AccordionItem, AccordionTitle, AccordionContent } from "../Accordion";

const AccordionWrap = () => {
    return (
        <div className="agency-accordion max-mb-n30">
            <Accordion>
                <AccordionItem id="one">
                    <AccordionTitle id="one">What exactly is branding?</AccordionTitle>
                    <AccordionContent id="one">Branding is more than a logo and a clever tagline. Your brand tells the story of your company. It’s your message and your values. When that happens, remarkable things occur.</AccordionContent>
                </AccordionItem>
                <AccordionItem id="two">
                    <AccordionTitle id="two">What’s the branding process like?</AccordionTitle>
                    <AccordionContent id="two">Branding is more than a logo and a clever tagline. Your brand tells the story of your company. It’s your message and your values. When that happens, remarkable things occur.</AccordionContent>
                </AccordionItem>
                <AccordionItem id="three">
                    <AccordionTitle id="three">What type of creative services do you offer?</AccordionTitle>
                    <AccordionContent id="three">Branding is more than a logo and a clever tagline. Your brand tells the story of your company. It’s your message and your values. When that happens, remarkable things occur.</AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default AccordionWrap;
