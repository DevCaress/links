const FEED_URL =
  "https://www.youtube.com/feeds/videos.xml?playlist_id=UULFX1BEJAE6Mx9Tz6ty28oJWQ";
const MAX_VIDEOS = 3;

const decode = (str: string) =>
  str
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

const pick = (xml: string, tag: string) =>
  xml.match(new RegExp(`<${tag}>([^<]*)</${tag}>`))?.[1] ?? "";

export default defineCachedEventHandler(
  async () => {
    try {
      const xml = await $fetch<string>(FEED_URL, { responseType: "text" });
      const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];

      return entries.slice(0, MAX_VIDEOS).map((entry) => {
        const id = pick(entry, "yt:videoId");
        return {
          id,
          title: decode(pick(entry, "title")),
          published: pick(entry, "published"),
          thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
          link: `https://www.youtube.com/watch?v=${id}`,
        };
      });
    } catch {
      return [];
    }
  },
  { maxAge: 60 * 60 }
);
