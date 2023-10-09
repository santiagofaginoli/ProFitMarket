import React from "react";
import {Card, CardBody, Image, Button, Progress} from "@nextui-org/react";

export default function App() {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
              <h1 className="text-large font-medium mt-2">Conózcanos</h1>
              <p className="text-medium text-foreground/80">Con una amplia trayectoria en el mercado de servicios turísticos, el Hotel Aranjuez lleva consigo años de tradición familiar en la atención a sus huéspedes que cada temporada nos elijen para disfrutar de sus vacaciones de verano en Villa Carlos Paz.</p>
              <br/>
              <p className="text-medium text-foreground/80">Es por ello que cada día nos esforzamos en mejorar nuestra atención y cumplir con las expectativas de nuestros visitantes, mejorando nuestros servicios y comodidades.</p>
                
             </div>
          </div>
        </div>
        <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src="https://www.hotelaranjuez.com.ar/hotel-aranjuez-villa-carlos-paz-fachada.jpg"
              width="100%"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
