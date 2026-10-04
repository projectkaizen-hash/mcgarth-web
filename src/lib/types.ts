import { PortableTextBlock } from "@portabletext/types";
import { Key } from "react";

export interface SanityImage {
  url: string;
  width: number;
  height: number;
  aspectRatio: number;
  alt?: string;
}

export interface ImageBlock {
  _key: string;
  _type: "imageBlock";
  image: SanityImage;
}

export interface GalleryBlock {
  _key: string;
  _type: "galleryBlock";
  images: SanityImage[];
}

export interface ContentBlock {
  _key: string;
  _type: "contentBlock";
  content: PortableTextBlock[];
}

export interface ProgressBlock {
  _key: string;
  _type: "progressBlock";
  progress25?: ProgressImage[];
  progress50?: ProgressImage[];
  progress75?: ProgressImage[];
  progress100?: ProgressImage[];
}

export type ProjectBlock = ImageBlock | GalleryBlock | ContentBlock | ProgressBlock;

// ── Progress ──────────────────────────────────────────────────────────────────

export interface ProgressImage {
  url: string;
  width: number;
  height: number;
}

export interface ProjectProgress {
  progress25?: ProgressImage[];
  progress50?: ProgressImage[];
  progress75?: ProgressImage[];
  progress100?: ProgressImage[];
}

// ── Project ───────────────────────────────────────────────────────────────────

export interface InspectionReport {
  title: string;
  file: string;
}

export interface Project {
  articleClass: string | undefined;
  id: Key | null | undefined;
  _id: string;
  order: string;
  title: string;
  href: string;
  image: string;
  description: string;
  year: number;
  type: string;
  aspectRatio: string;
  width: number;
  height: number;
  location: string;
  startDate: string;
  deadline: string;
  landArea: string;
  numberOfFloors: string;
  totalUnits: number;
  status?: 'pending' | 'active' | 'completed' | 'on-hold';
  brochure?: string;
  inspectionReports?: InspectionReport[];
  overview?: PortableTextBlock[];
  blocks?: ProjectBlock[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface GalleryCard {
  _id: string
  aspectRatio: '1400/875' | '1400/700' | '1400/1200' | '5264/7892'
  cardWidth: '90vw' | '76vw'
  isLinked: boolean
  isFeatured: boolean
  image: {
    asset: {
      url: string
      metadata: {
        dimensions: { width: number; height: number }
      }
    }
    alt?: string
    title?: string
  }
  project?: {
    order: number
    title: string
    slug: { current: string }
    number: number
    year: number
    type: string
  }
}

export interface JobVacancy {
  _id: string
  title: string
  description: string
  location: string
  employmentType: 'full-time' | 'part-time' | 'contract' | 'internship'
  requirements?: string[]
  responsibilities?: string[]
  salary?: string
  isActive: boolean
  order?: number
}