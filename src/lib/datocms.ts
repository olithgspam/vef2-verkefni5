export async function performRequest({ query, variables = {} }: { query: string, variables?: any }) {
  const res = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      Authorization: `Bearer f82fb613797b6f56d230aa81700c1c`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 0 },
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}