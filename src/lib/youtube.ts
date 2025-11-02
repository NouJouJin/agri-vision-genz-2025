/**
 * YouTubeのURLからビデオIDを抽出する関数
 * @param url YouTubeのURL
 * @returns ビデオID、または抽出できない場合はnull
 */
export function extractYouTubeVideoId(url: string): string | null {
  // 正規表現でYouTubeのビデオIDを抽出
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
    /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

/**
 * YouTubeビデオIDからサムネイルURLを生成
 * @param videoId YouTubeビデオID
 * @param quality サムネイルの品質 ('default' | 'hq' | 'mq' | 'sd' | 'maxres')
 * @returns サムネイルのURL
 */
export function getYouTubeThumbnail(
  videoId: string,
  quality: 'default' | 'hq' | 'mq' | 'sd' | 'maxres' = 'maxres'
): string {
  const qualityMap = {
    default: 'default',
    hq: 'hqdefault',
    mq: 'mqdefault',
    sd: 'sddefault',
    maxres: 'maxresdefault',
  };

  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
}
