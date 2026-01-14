export type Destination = {
  id: number;
  name: string;
  description: string;
  distance: string;
  travel: string;
  images: {
    png: string;
    webp: string;
  };
};

export type CrewMember = {
  id: number;
  name: string;
  bio: string;
  role: string;
  images: {
    png: string;
    webp: string;
  };
};
