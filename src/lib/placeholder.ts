export function generatePlaceholderImage(width: number = 800, height: number = 600, text?: string): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#E5E7EB"/>
      ${text ? `<text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#9CA3AF" text-anchor="middle" dominant-baseline="middle">${text}</text>` : ''}
    </svg>
  `;

  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

export function getImageOrPlaceholder(url?: string, width: number = 800, height: number = 600, placeholderText?: string): string {
  if (!url || url.trim() === '') {
    return generatePlaceholderImage(width, height, placeholderText || 'Image placeholder');
  }
  return url;
}
