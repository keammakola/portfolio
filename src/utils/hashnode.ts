const HASHNODE_API = 'https://gql.hashnode.com/';
const PUBLICATION_HOST = 'kea.hashnode.dev'; // Replace with actual host later or via env

export async function getHashnodePosts() {
  try {
    const query = `
      query Publication {
        publication(host: "${PUBLICATION_HOST}") {
          posts(first: 10) {
            edges {
              node {
                title
                slug
                brief
                coverImage { url }
                readTimeInMinutes
                publishedAt
              }
            }
          }
        }
      }
    `;

    const res = await fetch(HASHNODE_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error(`Invalid content type: ${contentType}`);
    }

    const { data } = await res.json();
    return data?.publication?.posts?.edges?.map((edge: any) => edge.node) || [];
  } catch (error) {
    console.warn("Hashnode fetch failed, returning mock posts", error);
    return [
      {
        title: "Mock Post",
        slug: "mock-post",
        brief: "This is a mock post because the API is unavailable.",
        coverImage: { url: "" },
        readTimeInMinutes: 5,
        publishedAt: new Date().toISOString()
      }
    ];
  }
}

export async function getHashnodePost(slug: string) {
  const query = `
    query Publication {
      publication(host: "${PUBLICATION_HOST}") {
        post(slug: "${slug}") {
          title
          content { html }
          coverImage { url }
          publishedAt
        }
      }
    }
  `;

  const res = await fetch(HASHNODE_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  const { data } = await res.json();
  return data?.publication?.post || null;
}
