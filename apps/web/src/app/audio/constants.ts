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
    title: "Home",
    artist: "C-Cell",
    duration: "4:16",
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    description: "A calming ambient piece with gentle synth pads and atmospheric textures.",
    category: "R&B",
    audioUrl: "/music/home.wav",
  },
  {
    title: "Shooter",
    artist: "C-Cell",
    duration: "4:03",
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    description: "Modern electronic beats with a futuristic vibe.",
    category: "Hip-Hop",
    audioUrl: "/music/shooter.wav",
  },
  {
    title: "Trap Type Beat",
    artist: "C-Cell",
    duration: "3:20",
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    description: "Hard-hitting trap beats with modern production.",
    category: "Trap",
    audioUrl: "/music/trap-type-beat.wav",
  },
  {
    title: "Blossom",
    artist: "C-Cell",
    duration: "3:55",
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    description: "Melodic composition with organic elements and flowing progression.",
    category: "Boom Bap",
    audioUrl: "/music/blossom.wav",
  },
  {
    title: "BBL Drizzy",
    artist: "C-Cell",
    duration: "3:40",
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    description: "Drake-inspired beats with smooth melodies and trap elements.",
    category: "Hip-Hop",
    audioUrl: "/music/bbl-drizzy.wav",
  },
  {
    title: "Bollywood Drill",
    artist: "C-Cell",
    duration: "3:35",
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    description: "Fusion of Bollywood samples with modern drill beats.",
    category: "Drill",
    audioUrl: "/music/bollywood-drill.wav",
  },
  {
    title: "Clouds",
    artist: "C-Cell",
    duration: "4:25",
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    description: "Ambient soundscapes with ethereal textures.",
    category: "Hip-Hop",
    audioUrl: "/music/clouds.wav",
  },
  {
    title: "Johnny Quest 3023",
    artist: "C-Cell",
    duration: "3:50",
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    description: "Futuristic beats with retro cartoon samples.",
    category: "Hip-Hop",
    audioUrl: "/music/johnny-quest-3023.wav",
  },
  {
    title: "Creep",
    artist: "C-Cell",
    duration: "3:30",
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    description: "Dark and mysterious electronic composition.",
    category: "Rap",
    audioUrl: "/music/creep.wav",
  },
  {
    title: "Don't You Wanna",
    artist: "C-Cell",
    duration: "3:45",
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    description: "Groovy electronic track with catchy vocal samples.",
    category: "Pop",
    audioUrl: "/music/dont-you-wanna.wav",
  },
  {
    title: "Hidden Efforts",
    artist: "C-Cell",
    duration: "4:05",
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    description: "Introspective beats with layered melodies.",
    category: "Boom Bap",
    audioUrl: "/music/hidden-efforts.wav",
  },
  {
    title: "Syncope",
    artist: "C-Cell",
    duration: "3:55",
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    description: "Rhythmic electronic piece with syncopated beats.",
    category: "Boom Bap",
    audioUrl: "/music/syncope.wav",
  },
  {
    title: "Boom Bap Classics",
    artist: "C-Cell",
    duration: "3:40",
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    description: "Old school hip-hop beats with classic samples.",
    category: "Boom Bap",
    audioUrl: "/music/boom-bap-classics.wav",
  }
]; 