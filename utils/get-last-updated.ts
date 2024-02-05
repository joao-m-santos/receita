export default async function (slug: string) {
  const fileDates = (await import('~/lastUpdated.json')).default;
  return fileDates[slug as keyof typeof fileDates];
}
