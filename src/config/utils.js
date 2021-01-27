import L from 'leaflet';
const iconPengepul =
  'https://cdn.discordapp.com/attachments/803847554725838858/803849026327150602/pengepul.png';
const iconPengrajin =
  'https://cdn.discordapp.com/attachments/803847554725838858/803851214751006770/pengrajin.png';
const iconAnggota =
  'https://cdn.discordapp.com/attachments/801791591927775257/803844820225228860/hapis.png';

export const sortEmail = (emailA, emailB) => {
  return emailA > emailB ? `${emailA},${emailB}` : `${emailB},${emailA}`;
};

export const pengepul = new L.Icon({
  iconUrl: iconPengepul,
  iconRetinaUrl: iconPengepul,
  popupAnchor: [-0, -0],
  iconSize: [50, 50],
});
export const pengrajin = new L.Icon({
  iconUrl: iconPengrajin,
  iconRetinaUrl: iconPengrajin,
  popupAnchor: [-0, -0],
  iconSize: [50, 50],
});
export const anggota = new L.Icon({
  iconUrl: iconAnggota,
  iconRetinaUrl: iconAnggota,
  popupAnchor: [-0, -0],
  iconSize: [50, 50],
});
