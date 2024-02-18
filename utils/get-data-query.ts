export default function (searchQuery: string | null) {
  if (!searchQuery) return {};
  return {
    $or: [
      { title: { $icontains: searchQuery } },
      { description: { $icontains: searchQuery } },
      { author: { $icontains: searchQuery } },
    ],
  };
}
