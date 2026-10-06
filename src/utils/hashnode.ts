// src/utils/hashnode.ts
import Parser from 'rss-parser';

const HASHNODE_RSS_URL = 'https://kea.hashnode.dev/rss.xml'; // Replace with actual later
const parser = new Parser();

function calculateReadTime(text: string) {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;
  return Math.ceil(noOfWords / wordsPerMinute);
}

export async function getHashnodePosts() {
  const feed = await parser.parseURL(HASHNODE_RSS_URL);
  
  return feed.items.map((item) => {
    // Hashnode RSS puts the slug at the end of the link
    const slug = item.link?.split('/').filter(Boolean).pop() || '';
    
    return {
      title: item.title,
      slug: slug,
      brief: item.contentSnippet?.substring(0, 150) + '...',
      content: item['content:encoded'] || item.content,
      readTimeInMinutes: calculateReadTime(item['content:encoded'] || item.content || ''),
      publishedAt: item.pubDate,
    };
  });
}

export async function getHashnodePost(slug: string) {
  const posts = await getHashnodePosts();
  return posts.find(post => post.slug === slug) || null;
}
