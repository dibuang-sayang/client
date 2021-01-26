export const sortEmail = (emailA, emailB) => {
  return (emailA> emailB) ? `${emailA},${emailB}` : `${emailB},${emailA}`
}