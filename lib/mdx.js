import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { categories } from "./constants";

const CONTENT_DIR_CANDIDATES = [
  path.join(process.cwd(), "content/insights"),
  path.join(process.cwd(), "app/content/insights"),
];

function getContentDir() {
  return CONTENT_DIR_CANDIDATES.find((dir) => fs.existsSync(dir)) || CONTENT_DIR_CANDIDATES[0];
}

function getMdxFiles() {
  const contentDir = getContentDir();

  if (!fs.existsSync(contentDir)) {
    return [];
  }

  return fs.readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((filename) => ({
      filename,
      filepath: path.join(contentDir, filename),
    }));
}

function getCategoryDetails(categoryValue) {
  const matchedCategory = categories.find(
    (item) => item.slug === categoryValue || item.label === categoryValue
  );

  if (matchedCategory) {
    return {
      category: matchedCategory.label,
      categorySlug: matchedCategory.slug,
    };
  }

  return {
    category: categoryValue || "General",
    categorySlug: categoryValue || "general",
  };
}

function buildInsightFromFile(filename, raw, data, includeContent = false) {
  const slug = data.slug || filename.replace(/\.mdx$/, "");
  const readStats = readingTime(raw);
  const { category, categorySlug } = getCategoryDetails(data.category);

  // Support both field name formats
  const summary = data.summary || data.description || "";
  const publishedAt = data.publishedAt || data.date || "";
  const cover = data.cover || data.image || null;

  return {
    slug,
    title: data.title,
    summary,
    category,
    categorySlug,
    tags: data.tags || [],
    author: data.author || "Prothom Analytica Research",
    publishedAt,
    cover,
    featured: data.featured || false,
    readTime: readStats.text,
    ...(includeContent ? { content: matter(raw).content } : {}),
  };
}

function getPublishedTimestamp(value) {
  const timestamp = Date.parse(value || "");
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

// Get all articles — for listing page
export function getAllInsights() {
  const insights = getMdxFiles()
    .map(({ filename, filepath }) => {
      const raw = fs.readFileSync(filepath, "utf-8");
      const { data } = matter(raw);

      return buildInsightFromFile(filename, raw, data);
    })
    .sort((a, b) => {
      // Featured first, then by date
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return getPublishedTimestamp(b.publishedAt) - getPublishedTimestamp(a.publishedAt);
    });

  return insights;
}

export function getLatestInsights(limit = 3) {
  return [...getAllInsights()]
    .sort((a, b) => getPublishedTimestamp(b.publishedAt) - getPublishedTimestamp(a.publishedAt))
    .slice(0, limit);
}

// Get one article — for single post page (supports both filename and frontmatter slug)
export function getInsightBySlug(slug) {
  // First, try direct filename match
  const directPath = path.join(getContentDir(), `${slug}.mdx`);
  if (fs.existsSync(directPath)) {
    const raw = fs.readFileSync(directPath, "utf-8");
    const { data } = matter(raw);
    return buildInsightFromFile(`${slug}.mdx`, raw, data, true);
  }

  // If not found, search all files for matching frontmatter slug
  const allFiles = getMdxFiles();
  for (const { filename, filepath } of allFiles) {
    const raw = fs.readFileSync(filepath, "utf-8");
    const { data } = matter(raw);
    const frontmatterSlug = data.slug || filename.replace(/\.mdx$/, "");
    if (frontmatterSlug === slug) {
      return buildInsightFromFile(filename, raw, data, true);
    }
  }

  return null;
}

// Get all slugs — for generateStaticParams (uses frontmatter slug if provided)
export function getAllInsightSlugs() {
  return getMdxFiles().map(({ filename, filepath }) => {
    const raw = fs.readFileSync(filepath, "utf-8");
    const { data } = matter(raw);
    return {
      slug: data.slug || filename.replace(/\.mdx$/, ""),
    };
  });
}