import config from "@/config/config.json";
import { plainify } from "@/lib/utils/textConverter";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("posts");
  const basePath = config.site.base_path || "/";
  const baseUrl = new URL(
    basePath.endsWith("/") ? basePath : `${basePath}/`,
    config.site.base_url,
  );

  const publishedPosts = posts
    .filter((post) => !post.id.startsWith("-"))
    .filter((post) => post.data.draft !== true)
    .sort(
      (a, b) =>
        new Date(b.data.date ?? 0).valueOf() -
        new Date(a.data.date ?? 0).valueOf(),
    );

  return rss({
    title: config.site.title,
    description: config.metadata.meta_description,
    site: baseUrl.href,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      description: plainify(post.data.description ?? ""),
      link: post.slug,
      pubDate: post.data.date,
    })),
  });
}
