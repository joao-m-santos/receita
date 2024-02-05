export default function (date: string | Date) {
  return new Date(date).toLocaleDateString('en-US', { dateStyle: 'long' });
}
