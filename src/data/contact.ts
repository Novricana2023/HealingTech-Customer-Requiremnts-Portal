export const contactInfo = {
  emailDisplay: "info@healingtech.mw",
  emailTo: "novielungu4@gmail.com",
  whatsappNumbers: [
    {
      display: "+254 790 355 947",
      phone: "254790355947",
    },
    {
      display: "+265 997 441 334",
      phone: "265997441334",
    },
  ],
};

export function whatsappUrl(phone: string, message?: string) {
  const base = `https://api.whatsapp.com/send?phone=${phone}`;
  if (message) {
    return `${base}&text=${encodeURIComponent(message)}`;
  }
  return base;
}
