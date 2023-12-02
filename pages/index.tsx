/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { MdAirplay, MdMenuBook } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { Botton } from "@/componets/foto/Button";
import { LogInDialog } from "@/componets/Dialogs/LogInDialog";
import { useState } from "react";
import { Footer } from "@/componets/footer";

import { SideBarRight } from "@/componets/side-bar-right";

const Home = () => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  const handleLogInClick = () => {
    setDialogOpen(true);
  };
  return (
    <div className="flex h-screen gap-1  bg-slate-50  ">
      <aside className=" w-[305px] flex flex-col h-full bg-white ">
        <section className="">
          <div className="nombre1 flex flex-col items-center">
            
            <Image
              className="rounded-full"
              src="/media/alex.jpg"
              alt="Foto Alex"
              width={70}
              height={70}
            />

            <h1>Alex Ramirez</h1>
            <span> Desarrollador Backend</span>
          </div>
        </section>

        <section >
          <div className="flex flex-col ">
            <div className=" todos ">
              <span>Edad</span>
              <span>42</span>
            </div>
            <div className="todos">
              <span>Email</span>
              <span>Alex</span>
            </div>
            <div className="todos">
              <span>Tiempo Libre</span>
              <span>Futbol</span>
            </div>
            <div className="todos">
              <span>Linkeded </span>
              <span>Link</span>
            </div>
          </div>
        </section>
        <section className=" flex-col">
          <h3>Idiomas</h3>
          <div>
            <div className="todos">
              <span>Español</span>
              <span>100%</span>
            </div>
            <div className="w-74 h-2 bg-yellow-500 "></div>
          </div>

          <div>
            <div className="todos">
              <span>Ingles</span>
              <span>20%</span>
            </div>
            <div className="w-20 h-2 bg-yellow-500 "></div>
          </div>
        </section>

        <section className=" flex-col">
          <h3>Lenguajes De Programacion</h3>
          <div>
            <div className="todos">
              <span>Html</span>
              <span>60%</span>
            </div>
            <div className="w-40 h-2 bg-yellow-500 "></div>
          </div>
          <div>
            <div className="todos">
              <span>CSS</span>
              <span>60%</span>
            </div>
            <div className="w-40 h-2 bg-yellow-500 "></div>
          </div>
          <div>
            <div className="todos">
              <span>Java</span>
              <span>85%</span>
            </div>
            <div className="w-60 h-2 bg-yellow-500 "></div>
          </div>
          <div>
            <div className="todos">
              <span>Sprint</span>
              <span>50%</span>
            </div>
            <div className="w-36 h-2 bg-yellow-500 "></div>
          </div>
          <div>
            <div className="todos">
              <span>Js</span>
              <span>50%</span>
            </div>
            <div className="w-36 h-2 bg-yellow-500 "></div>
          </div>
        </section>
        <section >
          <h3>Complementos</h3>
          <div className=" todos">
            <MdMenuBook />
            <span>Lectura</span>
          </div>
          <div className=" todos">
            <MdAirplay />
            <span>Television</span>
          </div>
        </section>
      </aside>
      <main className=" w-[988px] h-full  ">
        <section className="h-5/6">
          <section className="dtodos2 flex  ">
            <div className="flex-col w-5/6">
              <div className=" h-3/4 flex flex-col items-center bg-white">
                <span>Alex Ramirez</span>
                <p>
                  Futuro Ingeniero en sistemas con anhelo de superación
                  constante
                </p>
              </div>
              <Botton
                text="Mensaje para tí"
                type="primary"
                handleClick={handleLogInClick}
              />
            </div>
            <div className=" w-1/4 h-full bg-white flex flex-col items-center">
              <Image
                src="/segunda/alex2.png"
                alt="Foto Alex"
                width={80}
                height={500}
              />
            </div>
          </section>
          <section >
            <div className="flex flex-col items-center ">
              <h3> Formación Académica</h3>
            </div>
          </section>
          <section className="todos2 ">
            <div className="todos3 bg-white">
              <IoIosSchool />
              <div className="flex flex-col">
                <div> Bachiller académico </div>
                <span>I.E. Emiliano Garcia</span>
              </div>
            </div>
          </section>
          <section className="todos2 ">
            <div className="todos3 bg-white">
              <MdMenuBook />
              <div className="flex flex-col ">
                <span>Estudiante Universitario</span>
                <span>Universidad de Antioquia-Medellín</span>
              </div>
            </div>
          </section>
          <div className="  h-full">
            
            <Footer />
          </div>
        </section>
      </main>
      <footer className="  w-24  ">
        <SideBarRight />
      </footer>
      <LogInDialog isOpen={isDialogOpen} setOpen={setDialogOpen} />
    </div>
  );
};
export default Home;
