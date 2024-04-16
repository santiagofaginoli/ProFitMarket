import DefaultLayout from "@/layouts/default";
import { useState } from "react";
import {
  Divider,
  Input,
  Accordion,
  AccordionItem,
  Image,
} from "@nextui-org/react";
import Swal from "sweetalert2";
import { Button } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function IndexPage() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <DefaultLayout>
      {/*  inicio  */}
      <section className="grid grid-cols-2">
        <div className=" col-span-1">
          <div className="  w-full h-full justify-center items-center flex">
            <div className="bg-[rgba(6,6,6,1)] h-[70vh] w-[70vh] rounded-3xl justify-center items-center flex ">
              <div className="grid grid-cols-2 gap-1">
                <div className="grid col-span-2">
                  <h2 className="text-3xl">
                    ProFit
                    <span class="text-[rgba(249,118,1,1)] text-3xl">
                      Market
                    </span>
                  </h2>
                </div>
                <div className="grid col-span-2">
                  <h2 className="text-7xl">Suplementos</h2>
                </div>
                <div className="grid col-span-2">
                  <div className="flex">
                    <h2 className="text-7xl">
                      <FaPlus fill="rgba(249,118,1,1)" />
                    </h2>
                    <h2 className="text-7xl ms-5">fuerza</h2>
                  </div>
                </div>
                <div className="grid col-span-2">
                  <div className="flex justify-center">
                    <p className=" ">
                      Plataforma online de venta de suplementos, donde buscamos
                      tener
                    </p>
                  </div>
                </div>
                <div className="grid col-span-2">
                  <div className="flex justify-center">
                    <p className=" ">
                      los mejores precios, productos de calidad y atencion al
                      cliente
                    </p>
                  </div>
                </div>
                <div className="grid col-span-1 my-5 px-5">
                  <Button className="rounded-full bg-gradient-to-r from-[rgba(249,118,1,1)]  to-[rgba(253,163,32,1)] border-white border ">
                    {" "}
                    Tienda{" "}
                  </Button>
                </div>
                <div className="grid col-span-1 my-5 px-5">
                  <Button className="rounded-full bg-black border border-white text-white ">
                    {" "}
                    Sobre nosotros{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-1">
          <div className="flex  justify-end ">
            <div>
              <Image
                className=" h-[90vh] w-auto"
                id="fondo"
                src="/img/fondo.png"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </section>
      {/*  fondo + swiper de nuevos productos  */}
      <section className="flex justify-center items-center bg-[url(../public/img/hero.png)] w-screen h-screen ">
        <div className=" grid grid-cols-3 ">
          <div className=" col-span-3">SWIPER</div>
        </div>
      </section>
      {/*  fondo + swiper de nuevos productos  */}
      <section className="flex justify-center  mt-20">
        <div className="grid grid-cols-2 bg-[rgba(6,6,6,1)] h-[70vh] w-[140vh] rounded-3xl">
          <div className=" col-span-1">
            <div className="flex items-center h-full justify-center ">
              <div className="grid grid-cols-2 gap-1">
                <div className="grid col-span-2">
                  <h2 className="text-3xl">
                    ProFit
                    <span class="text-[rgba(249,118,1,1)] text-3xl">
                      Market
                    </span>
                  </h2>
                </div>
                <div className="grid col-span-2">
                  <h2 className="text-7xl">Preguntas</h2>
                </div>
                <div className="grid col-span-2">
                  <h2 className="text-7xl">frecuentes</h2>
                </div>
                <div className="grid col-span-2">
                  <p className=" text-[rgba(249,118,1,1)] ">
                    Tienes más preguntas ?
                  </p>
                </div>
                <div className="grid col-span-2 my-5 px-10">
                  <Button className="rounded-full bg-black border border-white text-white ">
                    <FaWhatsapp /> Whatsapp
                  </Button>
                </div>
                <div className="grid col-span-2 my-2 px-10">
                  <Button className="rounded-full bg-gradient-to-r from-[rgba(249,118,1,1)]  to-[rgba(253,163,32,1)]  border-white border">
                    <FiMail />
                    Correo
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-1">
            <div className=" flex items-center h-full justify-center">
              <Accordion className=" acordion " variant="bordered">
                <AccordionItem
                  key="1"
                  aria-label="Pregunta 1"
                  title="Pregunta 1"
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Pregunta 2"
                  title="Pregunta 2"
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Pregunta 3"
                  title="Pregunta 3"
                >
                  {defaultContent}
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
