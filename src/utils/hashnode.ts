const HASHNODE_API = 'https://gql.hashnode.com/';
const PUBLICATION_HOST = 'kea.hashnode.dev'; // Replace with actual host later or via env

export async function getHashnodePosts() {
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

  const { data } = await res.json();
  return data?.publication?.posts?.edges?.map((edge: any) => edge.node) || [];
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
