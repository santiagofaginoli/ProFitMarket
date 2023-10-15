import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export const Menudrop = () => {
    return ( 
    <div>
        <h1>Menu Aranjuez </h1> 

    <Accordion className="max-w-xs">
        <AccordionItem key="1" aria-label="Accordion 1" title="Desayuno">
        <p>Desayuno continental LIBRE: Yogur, soda, café, leche, té, mate cocido. Tostadas, medialunas caseras, galletitas dulces, mermeladas y manteca. Jamón, queso, ensalada de frutas, bizcochuelos.</p>  
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Menu dia 1">
        <p>Salpicón, lentejas, ensaladas, berenjena a la napolitana, milanesa con puré, tirabuzón con crema o pesto.</p>  
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Menu dia 2">
        <p>Arroz primavera, fiambres surtidos, zapallitos rellenos, pan de carne con portuguesa, papas al natural, fideos con tuco.</p>  
        </AccordionItem>
        
        <AccordionItem key="4" aria-label="Accordion 4" title="Menu dia 3">
        <p>Huevos rellenos, pionono salado, bifes a la Marsala, arroz blanco con queso, canelones.</p>  
        </AccordionItem>
        
        <AccordionItem key="5" aria-label="Accordion 5" title="Menu dia 4">
            <p>Tomates rellenos, porotos a la vinagreta, soufflé con salsa blanca, carne al horno con papas, ñoquis con salsa rosa.</p>  
        </AccordionItem>
        
        <AccordionItem key="6" aria-label="Accordion 6" title="Menu dia 5">
            <p>Rusa y lengua a la vinagreta, empanadas de jamón y queso, bifes a la criolla con panaché, milanesas.</p>  
        </AccordionItem>

        <AccordionItem key="7" aria-label="Accordion 7" title="Menu dia 6">
            <p>Escabeche, mondongo provenzal, zapallitos a la romana, riñones al vino, pastel de papas.</p>  
        </AccordionItem>

        <AccordionItem key="8" aria-label="Accordion 8" title="Menu dia 7">
            <p>Fiambre alemán, pizza, pimientos rellenos, tortilla de papas, ravioles de ricotta y verdura.</p>  
        </AccordionItem>
      </Accordion> 
      </div>
      );
}