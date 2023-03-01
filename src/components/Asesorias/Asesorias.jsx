import Planes from "./Planes";
const Asesorias = () => {
  return (
    <>
      <div className="hero2 min-h-[250vh] md:min-h-[135vh]  bg-black md:bg-cover bg-no-repeat">
        <div className="bg-gradient-to-b from-black to-transparen   max-h-[100vh] flex flex-col justify-start items-center">
          <h3 className="text-4xl md:text-7xl  text-white center uppercase font-extrabold tracking-[10px] mt-10">
            Asesorias
          </h3>
          <p className="text-white text-center mx-4 md:mx-20 mt-10">
            Transformate en la mejor versión de vos mismo y alcnaza tu fisico
            soñado con mis asesorias personalizadas
          </p>

          <Planes />
        </div>
      </div>
      <div className="bg-black text-center px-4 md:px-20 flex flex-col justify-center items-center">
        <h4 className="text-4xl text-white  mb-10  font-extrabold">Plan 1: Planificación de entrenamiento</h4>
        <ul className="text-white font-extralight text-start tracking-wider mx-4 md:mx-10">
          <li className="my-6"><span className="text-primary font-normal">- Evaluación inicial:</span>  En la primera etapa, haremos una evaluación completa de tu estado físico actual, incluyendo tu nivel de condición física, antecedentes médicos y objetivos de entrenamiento. Esta evaluación nos ayudará a diseñar un plan de entrenamiento personalizado que se adapte a tus necesidades y objetivos específicos.</li>

          <li className="my-6"><span className="text-primary font-normal">- Planificación de entrenamiento:</span>   Una vez que hayamos evaluado tus necesidades y objetivos, diseñaremos un plan de entrenamiento personalizado que incluirá ejercicios y técnicas específicas para lograr los resultados que buscas.</li>

          <li className="my-6"><span className="text-primary font-normal">- Corrección de técnicas: </span>   Antes de comenzar con tu plan de entrenamiento, es fundamental que aprendas la técnica correcta de cada ejercicio para evitar lesiones y maximizar tus resultados. En esta etapa, te enseñaremos la técnica correcta de cada ejercicio, realizaremos correcciones en caso de ser necesarias y te proporcionaremos consejos para maximizar la efectividad del ejercicio.</li>

          <li className="my-6"><span className="text-primary font-normal">- Go train:</span>  A partir de aquí, comenzarás a implementar tu plan de entrenamiento y comenzarás a ver resultados reales. Siempre te brindaré apoyo y asesoramiento para que puedas entrenar de manera efectiva y segura.</li>

          <li className="my-6"><span className="text-primary font-normal">- Seguimiento y ajuste:</span>   Realizaremos evaluaciones periódicas para monitorear tu progreso y hacer los ajustes necesarios en tu plan de entrenamiento para que puedas continuar hacia tus objetivos.</li>


        </ul>
      </div>
      <div className="bg-black pt-20 text-center px-4 md:px-20 flex flex-col justify-center items-center">
        <h4 className="text-4xl text-white  mb-10  font-extrabold">Plan 2: Nutricion</h4>
        <ul className="text-white font-extralight text-start tracking-wider mx-4 md:mx-10">
          <li className="my-4"><span className="text-primary font-normal">- Evaluación inicial:</span>  En esta etapa, evaluaremos tus hábitos alimenticios, preferencias y antecedentes médicos para diseñar un plan de nutrición personalizado que se adapte a tus necesidades y objetivos.</li>

          <li className="my-6"><span className="text-primary font-normal">- Planificación del plan de nutrición:</span>   A partir de los datos que recopilamos en la evaluación inicial, diseñaremos un plan de nutrición personalizado que incluirá un plan de comidas específico y recomendaciones nutricionales para ayudarte a alcanzar tus objetivos.</li>

          <li className="my-6"><span className="text-primary font-normal">- Go work:</span>  A partir de aquí, comenzarás a implementar tu plan de nutrición personalizado. Te brindaré apoyo y consejos nutricionales para asegurarme de que estés siguiendo tu plan de manera efectiva.</li>

          <li className="my-6"><span className="text-primary font-normal">- Seguimiento y ajuste:</span>  Evaluación y ajuste: Realizaremos evaluaciones periódicas para monitorear tu progreso y hacer ajustes necesarios en tu plan de nutrición para que puedas continuar avanzando hacia tus objetivos.
          </li>

          <li className="my-6"><span className="text-primary font-normal">- Suplementacion:</span>  En esta etapa, te asesoraremos sobre los suplementos adecuados para tu objetivo y te recomendaremos la mejor forma de incorporarlos a tu dieta,  Además, te proporcionaremos información sobre los mejores proveedores y marcas de suplementos para garantizar que estés comprando productos de alta calidad.
          </li>
          

        </ul>
      </div>
      <div className="bg-black py-20 text-center px-4 md:px-20 flex flex-col justify-center items-center">
        <h4 className="text-4xl text-white  mb-10  font-extrabold">Plan 3: Entrenamiento + Nutricion</h4>
        <ul className="text-white font-extralight  text-ellipsis tracking-wider mx-4 md:mx-10">
          <li className="my-6"><span className="text-primary font-normal">- Entrenamiento:</span>  todo lo que incluye el plan 1 "entrenamiento".</li>
          <li className="my-6"><span className="text-primary font-normal">- Nutricion:</span>  todo lo que incluye el plan 2 "Nutrición".</li>
          <li className="my-6"><span className="text-primary font-normal">- Descuentos:</span>  Descuentos exclusivos en nuestra tienda.</li>
          <li className="my-6"><span className="text-primary font-normal">- Seguimiento 24/7:</span>  Seguimiento 24/7 via wsp</li>
          

        </ul>
      </div >
      <div className="w-full min-h-[30rem] bg-cover hero2 ">
        
      </div>

      <div className="bg-black py-20 px-20 flex flex-col justify-center items-center"> <h4 className=" text-white text-3xl font-bold">SUMATE AL TEAM!</h4></div>
    </>
  );
};

export default Asesorias;
