// src/utils/hashnode.ts
import Parser from 'rss-parser';

export interface HashnodePost {
  title: string;
  slug: string;
  brief: string;
  content: string;
  readTimeInMinutes: number;
  publishedAt: string;
}

const HASHNODE_RSS_URL = 'https://keammakola.hashnode.dev/rss.xml'; // Updated with real user hashnode URL
const parser = new Parser({ timeout: 10000 });

function calculateReadTime(text: string) {
  const wordsPerMinute = 200;
  const plainText = text.replace(/<[^>]+>/g, '');
  const noOfWords = plainText.split(/\s+/).length;
  return Math.ceil(noOfWords / wordsPerMinute);
}

export async function getHashnodePosts(): Promise<HashnodePost[]> {
  let feed;
  try {
    feed = await parser.parseURL(HASHNODE_RSS_URL);
  } catch (error) {
    console.warn('Hashnode feed unavailable; continuing without blog posts:', error instanceof Error ? error.message : error);
    return [];
  }
  
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

export async function getHashnodePost(slug: string): Promise<HashnodePost | null> {
  const posts = await getHashnodePosts();
  return posts.find(post => post.slug === slug) || null;
}
