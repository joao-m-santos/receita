export default async function (a, b) {
  return new Date(a.lastUpdated) > new Date(b.lastUpdated);
}
