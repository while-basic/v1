export interface Track {
  title: string;
  artist: string;
  duration: string;
  cover: string;
  description?: string;
  category: string;
  audioUrl: string;
}

export interface VideoContent {
  title: string;
  description: string;
  youtubeId: string;
  thumbnailUrl?: string;
}

export const tracks: Track[] = [
  {
    title: "AI Podcast | Cover Letter",
    artist: "Christopher Celaya",
    duration: "3:56",
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    description: "An AI-powered discussion about my professional background and aspirations.",
    category: "AI",
    audioUrl: "/cover-letter.wav",
  },
  {
    title: "AI Podcast | Resume",
    artist: "Christopher Celaya",
    duration: "6:43",
    cover: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop",
    description: "An in-depth AI conversation exploring my work experience and skills.",
    category: "AI",
    audioUrl: "/resume.wav",
  },
  {
    title: "Ambient Dreams",
    artist: "Christopher Celaya",
    duration: "3:45",
    cover: "/music/ambient-dreams.jpg",
    description: "A journey through atmospheric soundscapes and ethereal textures.",
    category: "Electronic",
    audioUrl: "/music/ambient-dreams.mp3",
  },
  {
    title: "Electronic Journey",
    artist: "Christopher Celaya",
    duration: "4:20",
    cover: "/music/electronic-journey.jpg",
    description: "Modern electronic beats mixed with classic synthesizer sounds.",
    category: "Electronic",
    audioUrl: "/music/electronic-journey.mp3",
  },
  {
    title: "Midnight Synthesis",
    artist: "Christopher Celaya",
    duration: "5:15",
    cover: "/music/midnight-synthesis.jpg",
    description: "Deep, evolving synthesizer textures with ambient undertones.",
    category: "Ambient",
    audioUrl: "/music/midnight-synthesis.mp3",
  },
  {
    title: "Urban Echoes",
    artist: "Christopher Celaya",
    duration: "4:30",
    cover: "/music/urban-echoes.jpg",
    description: "City-inspired rhythms blended with atmospheric field recordings.",
    category: "Experimental",
    audioUrl: "/music/urban-echoes.mp3",
  },
  {
    title: "Digital Dreams",
    artist: "Christopher Celaya",
    duration: "6:10",
    cover: "/music/digital-dreams.jpg",
    description: "An exploration of generative music and algorithmic composition.",
    category: "Experimental",
    audioUrl: "/music/digital-dreams.mp3",
  },
  {
    title: "Neural Waves",
    artist: "Christopher Celaya",
    duration: "4:45",
    cover: "/music/neural-waves.jpg",
    description: "AI-assisted composition merging human creativity with machine learning.",
    category: "Electronic",
    audioUrl: "/music/neural-waves.mp3",
  },
]; 