'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Entry } from '@/types/entry';
import { extractYouTubeVideoId, getYouTubeThumbnail } from '@/lib/youtube';

interface EntryCardProps {
  entry: Entry;
  onClick: () => void;
  index: number;
}

export default function EntryCard({ entry, onClick, index }: EntryCardProps) {
  const videoId = extractYouTubeVideoId(entry.youtubeUrl);
  const thumbnailUrl = videoId ? getYouTubeThumbnail(videoId) : '/placeholder.jpg';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group cursor-pointer bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20"
    >
      {/* サムネイル */}
      <div className="relative aspect-video overflow-hidden bg-slate-800">
        {videoId ? (
          <Image
            src={thumbnailUrl}
            alt={entry.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800">
            <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        {/* 再生オーバーレイ */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-green-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* コンテンツ */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-green-400 transition-colors">
          {entry.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          {entry.creator}
        </p>

        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {entry.overview}
        </p>

        {/* AIツールタグ */}
        <div className="flex flex-wrap gap-2">
          {entry.aiTools.slice(0, 3).map((tool, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-green-500/20 text-green-300 rounded-full border border-green-500/30"
            >
              {tool}
            </span>
          ))}
          {entry.aiTools.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium bg-gray-500/20 text-gray-300 rounded-full border border-gray-500/30">
              +{entry.aiTools.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
