import { Popover } from "antd";
import { AiOutlineWhatsApp } from "react-icons/ai";

function WhatsApp() {
    const phone = "5493584225525";
    const textWsp = "Hola, quisiera conocer más acerca de";
    const api = `https://api.whatsapp.com/send/?phone=${phone}&text=${textWsp}&type=phone_number&app_absent=0`;

    const content = (
        <div>
            <p>¿Te ayudamos?</p>
        </div>
    );

    return (
        <div className="fixed bottom-4 right-4 md:bottom-14 md:right-14 z-50">
          <Popover placement="left" content={content} className="cursor-pointer">
            <a
              href={api}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-hotel-green hover:bg-hotel-green-dark text-white rounded-full p-2 transition-colors duration-300 ease-in-out shadow-lg"            
              style={{ fontSize: '2rem' }} 
            >
              <AiOutlineWhatsApp className="w-6 h-6 sm:w-8 sm:h-8" /> 
            </a>
          </Popover>
        </div>
      );
}

export default WhatsApp;
