type ShareOptions = {
  title?: string;
  text?: string;
};

export function shareCurrentPage(options: ShareOptions = {}): void {
  const url = window.location.href;

  // Mobile / supported browsers
  if (navigator.share) {
    navigator.share({
      title: options.title ?? document.title,
      text: options.text,
      url,
    }).catch(() => {});
    return;
  }

  // Universal fallback
  navigator.clipboard.writeText(url);
  alert("Link copied. You can share it anywhere.");
}
