export const useSearch = () =>
  useState<string | null>('search', () => {
    const route = useRoute();
    return (route.query.q as string) || null;
  });
