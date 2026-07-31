export  const handleRequest = (message: string) => {
    const whatsappURL = `https://wa.me/2349036691764?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };