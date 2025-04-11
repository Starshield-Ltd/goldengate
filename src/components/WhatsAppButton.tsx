
import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  // Remove any non-numeric characters from the phone number
  const formattedNumber = phoneNumber.replace(/\D/g, '');

  return (
    <a
      href={`https://wa.me/${formattedNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-20 h-20 rounded-full bg-[#25D366] shadow-lg hover:bg-[#20BA5C] transition-all duration-300 hover:scale-110 group animate-pulse shadow-[0_0_20px_rgba(37,211,102,0.6)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)]"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-10 h-10 group-hover:animate-pulse"
      >
        <path
          d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.288.131.332.202.043.72.043.433-.101.823z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
      <span className="absolute -top-2 right-0 bg-white text-green-600 text-xs font-bold px-2 py-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Chat with GGIS</span>
    </a>
  );
};

export default WhatsAppButton;
