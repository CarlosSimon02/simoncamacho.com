/**
 * Get the equivalent of the passed URL for the passed locale.
 */
export const localizedUrl = (url: URL, locale: string | undefined): URL => {
  // Create a new URL object to void mutating the global.
  url = new URL(url);
  if (locale === "root") locale = "";
  /** Base URL with trailing `/` stripped. */
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const hasBase = url.pathname.startsWith(base);
  // Temporarily remove base to simplify
  if (hasBase) url.pathname = url.pathname.replace(base, "");
  const [_leadingSlash, baseSegment] = url.pathname.split("/");
  // Strip .html extension to handle file output builds where URL might be e.g. `/en.html`
  const htmlExt = ".html";
  const isRootHtml = baseSegment?.endsWith(htmlExt);
  const baseSlug = isRootHtml
    ? baseSegment?.slice(0, -1 * htmlExt.length)
    : baseSegment;
  if (baseSlug) {
    // We’re in a localized route, substitute the new locale (or strip for root lang).
    if (locale) {
      url.pathname = url.pathname.replace(baseSlug, locale);
    } else if (isRootHtml) {
      url.pathname = "/index.html";
    } else {
      url.pathname = url.pathname.replace("/" + baseSlug, "");
    }
  } else if (locale) {
    // We’re in the root language. Inject the new locale if we have one.
    if (baseSegment === "index.html") {
      url.pathname = "/" + locale + ".html";
    } else {
      url.pathname = "/" + locale + url.pathname;
    }
  }
  // Restore base
  if (hasBase) url.pathname = base + url.pathname;
  return url;
};

export const removeItalicTags = (input: string) => {
  // Regular expression to match <i> and </i> tags
  const regex = /<\/?i>/g;

  // Replace the matched tags with an empty string
  return input.replace(regex, "");
};
