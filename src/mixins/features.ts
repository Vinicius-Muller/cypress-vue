export function parseDate(date: Date | any) {
  if (!date) return "";
  const iso = new Date(date).toISOString();
  const [year, month, day] = iso.split("T")[0].split("-");
  return `${day}/${month}/${year}`;
}
