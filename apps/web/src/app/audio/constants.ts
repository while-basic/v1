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
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
    description: "A calming ambient piece with gentle synth pads and atmospheric textures.",
    category: "R&B",
    audioUrl: "/music/home.mp3",
  },
  {
    title: "Shooter",
    artist: "C-Cell",
    duration: "4:03",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    description: "Modern electronic beats with a futuristic vibe.",
    category: "Hip-Hop",
    audioUrl: "/music/shooter.mp3",
  },
  {
    title: "Trap Type Beat",
    artist: "C-Cell",
    duration: "3:20",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop",
    description: "Hard-hitting trap beats with modern production.",
    category: "Trap",
    audioUrl: "/music/trap-type-beat.mp3",
  },
  {
    title: "Blossom",
    artist: "C-Cell & PAZ",
    duration: "3:55",
    cover: "https://images.unsplash.com/photo-1571974599782-87624638275e?q=80&w=800&auto=format&fit=crop",
    description: "Melodic composition with organic elements and flowing progression.",
    category: "Boom Bap",
    audioUrl: "/music/blossom.mp3",
  },
  {
    title: "BBL Drizzy",
    artist: "C-Cell",
    duration: "3:40",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
    description: "The C-Cell Distrumetnal.",
    category: "Hip-Hop",
    audioUrl: "/music/bbl-drizzy.mp3",
  },
  {
    title: "Bollywood Drill",
    artist: "C-Cell",
    duration: "3:35",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
    description: "Fusion of Bollywood vocal samples with modern drill beats.",
    category: "Drill",
    audioUrl: "/music/bollywood-drill.mp3",
  },
  {
    title: "Clouds",
    artist: "C-Cell & PAZ",
    duration: "4:25",
    cover: "https://images.unsplash.com/photo-1519138130-85a949fdcb4f?q=80&w=800&auto=format&fit=crop",
    description: "Boom bap track with a smooth vibe.",
    category: "Hip-Hop",
    audioUrl: "/music/clouds.mp3",
  },
  {
    title: "Johnny Quest 3023",
    artist: "C-Cell & PAZ",
    duration: "3:50",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
    description: "Indian style beats with cartoon samples.",
    category: "Hip-Hop",
    audioUrl: "/music/johnny-quest-3023.mp3",
  },
  {
    title: "Creep",
    artist: "C-Cell & PAZ",
    duration: "3:30",
    cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop",
    description: "Dark and explicit rap track composition.",
    category: "Rap",
    audioUrl: "/music/creep.mp3",
  },
  {
    title: "Don't You Wanna",
    artist: "C-Cell & Ghost",
    duration: "3:45",
    cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop",
    description: "Groovy pop soul track with catchy vocals.",
    category: "Pop",
    audioUrl: "/music/dont-you-wanna.mp3",
  },
  {
    title: "Hidden Efforts",
    artist: "C-Cell",
    duration: "4:05",
    cover: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=800&auto=format&fit=crop",
    description: "Introspective beats with layered melodies.",
    category: "Boom Bap",
    audioUrl: "/music/hidden-efforts.mp3",
  },
  {
    title: "Syncope",
    artist: "C-Cell",
    duration: "3:55",
    cover: "https://images.unsplash.com/photo-1485579149621-3123dd979885?q=80&w=800&auto=format&fit=crop",
    description: "Rhythmic hip-hop piece with syncopated beats.",
    category: "Boom Bap",
    audioUrl: "/music/syncope.mp3",
  },
  {
    title: "Boom Bap Classics",
    artist: "C-Cell",
    duration: "3:40",
    cover: "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?q=80&w=800&auto=format&fit=crop",
    description: "Old school hip-hop beats with classic samples.",
    category: "Boom Bap",
    audioUrl: "/music/boom-bap-classics.mp3",
  }
]; 