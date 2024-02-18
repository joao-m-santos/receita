export default function (key: string, value: string) {
  const router = useRouter();
  router.push({ query: { ...router.currentRoute.value.query, [key]: value } });
}
