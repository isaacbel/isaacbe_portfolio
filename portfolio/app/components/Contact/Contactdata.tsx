export type ContactItem = {
  iconType: "email" | "phone" | "location";
  label: string;
  value: string;
  href: string | null;
  color: string;
};

export const contactItems: ContactItem[] = [
  {
    iconType: "email",
    label: "Email",
    value: "mi_belatrache@esi.dz",
    href: "mailto:mi_belatrache@esi.dz",
    color: "#22d3ee",
  },
  {
    iconType: "phone",
    label: "Phone",
    value: "+213 672 92 36 56",
    href: "tel:+213672923656",
    color: "#a78bfa",
  },
  {
    iconType: "location",
    label: "Location",
    value: "Jijel, Algeria",
    href: null,
    color: "#34d399",
  },
];