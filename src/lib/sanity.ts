import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "x37u2l54",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export const projectsQuery = `*[_type == "project"] | order(order asc) {
  _id,
  title,
  "href": "/projects/" + slug.current,
  "image": mainImage.asset->url,
  description,
  year,
  type,
  aspectRatio,
  "width": mainImage.asset->metadata.dimensions.width,
  "height": mainImage.asset->metadata.dimensions.height,
  location,
  startDate,
  deadline,
  totalUnits,
  numberOfFloors,
  landArea,
  order,
  status,
  "brochure": brochure.asset->url,
  "inspectionReports": inspectionReports[]{
    title,
    "file": file.asset->url
  },
  overview,
  coordinates,
  "blocks": blocks[]{
    _type,
    // imageBlock
    _type == "imageBlock" => {
      "image": {
        "url": image.asset->url,
        "width": image.asset->metadata.dimensions.width,
        "height": image.asset->metadata.dimensions.height,
        "aspectRatio": image.asset->metadata.dimensions.aspectRatio,
      }
    },
    // galleryBlock
    _type == "galleryBlock" => {
      "images": images[]{
        "url": asset->url,
        "width": asset->metadata.dimensions.width,
        "height": asset->metadata.dimensions.height,
        "aspectRatio": asset->metadata.dimensions.aspectRatio,
      }
    },
    // contentBlock
    _type == "contentBlock" => {
      content
    },
    // progressBlock
    _type == "progressBlock" => {
      "progress25": progress25[]{
        "url": asset->url,
        "width": asset->metadata.dimensions.width,
        "height": asset->metadata.dimensions.height,
      },
      "progress50": progress50[]{
        "url": asset->url,
        "width": asset->metadata.dimensions.width,
        "height": asset->metadata.dimensions.height,
      },
      "progress75": progress75[]{
        "url": asset->url,
        "width": asset->metadata.dimensions.width,
        "height": asset->metadata.dimensions.height,
      },
      "progress100": progress100[]{
        "url": asset->url,
        "width": asset->metadata.dimensions.width,
        "height": asset->metadata.dimensions.height,
      },
    }
  }
}`;

export const employeesQuery = `*[_type == "employee"] | order(name asc) {
  _id,
  name,
  jobTitle,
  email,
  "img1": profilePhoto.asset->url,
  "img2": profile2.asset->url,
}`;

export const galleryQuery = `*[_type == "gallery"] | order(order asc) {
  _id,
  aspectRatio,
  cardWidth,
  isLinked,
  isFeatured,
  image {
    asset->{ url, metadata { dimensions } },
    alt,
    title
  },
  project->{ title, slug, order, year, type }
}`;

export const featuredGalleryImagesQuery = `*[_type == "gallery" && isFeatured == true] | order(order asc) [0...9] {
  image {
    asset->{ url, metadata { dimensions } },
    alt,
    title
  },
  project->{ title, slug }
}`;

export const jobVacanciesQuery = `*[_type == "jobVacancy" && isActive == true] | order(order asc, _createdAt asc) {
  _id,
  title,
  description,
  location,
  employmentType,
  requirements,
  responsibilities,
  salary,
  isActive,
  order
}`;