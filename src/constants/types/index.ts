export interface NavLinkType {
  label: string;
  href: string;
}

interface Image {
  png: string;
  webp: string;
}

export interface Destination {
  id: string;
  name: string;
  images: Image;
  description: string;
  distance: string;
  travel: string;
}

export interface Crew {
  id: string;
  name: string;
  images: Image;
  role: string;
  bio: string;
}

export interface Technology {
  id: string;
  name: string;
  images: Image;
  description: string;
}

export interface SpaceData {
  destinations: Destination[];
  crew: Crew[];
  technology: Technology[];
}
