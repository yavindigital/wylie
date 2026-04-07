import fs from "fs";
import path from "path";

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  sourceUrl?: string;
  body: string;
}

const NEWS_FILE = path.join(process.cwd(), "content", "news.json");

export function readNews(): NewsItem[] {
  try {
    return JSON.parse(fs.readFileSync(NEWS_FILE, "utf-8")) as NewsItem[];
  } catch {
    return [];
  }
}

export function writeNews(items: NewsItem[]): void {
  fs.writeFileSync(NEWS_FILE, JSON.stringify(items, null, 2), "utf-8");
}
