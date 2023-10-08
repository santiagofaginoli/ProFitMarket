import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react"
export const Cards = (props) => {
    return ( 
        <Card shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={props.alt}
              className="w-full object-cover h-[140px]"
              src={props.src}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
          <p>{props.children}</p>
          
          </CardFooter>
        </Card>

     );
}
 
