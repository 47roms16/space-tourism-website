export interface NavLinkType {
  label: string;
  href: string;
}

interface Image {
  png: string;
  webp: string;
}

export interface Destination {
  name: string;
  images: Image;
  description: string;
  distance: string;
  travelTime: string;
}

export interface Crew {
  name: string;
  images: Image;
  role: string;
  bio: string;
}

export interface Technology {
  name: string;
  images: Image;
  description: string;
}

export interface SpaceData {
  destinations: Destination[];
  crew: Crew[];
  technology: Technology[];
}
