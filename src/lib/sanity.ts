import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "x37u2l54",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

/** Full projection shared by the detail query and the list query. */
const PROJECT_FULL_PROJECTION = `{
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
  apartmentSize,
  numberOfParking,
  handOverDate,
  rajukApprovalNo,
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
    _key,
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

export const projectsQuery = `*[_type == "project"] | order(order asc) ${PROJECT_FULL_PROJECTION}`;

/** Single document by slug — detail pages no longer fetch the whole list. */
export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] ${PROJECT_FULL_PROJECTION}`;

/** Lightweight SEO fields for generateMetadata. */
export const projectSeoQuery = `*[_type == "project" && slug.current == $slug][0] {
  title,
  description,
  year,
  type,
  location,
  "image": mainImage.asset->url
}`;

/** All slugs for generateStaticParams. */
export const projectSlugsQuery = `*[_type == "project" && defined(slug.current)][].slug.current`;

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
  "title": project->title,
  "href": "/projects/" + project->slug.current,
  "year": project->year,
  "type": project->type,
  "location": project->location
}`;

/**
 * Projects selected for the home rotating gallery (Studio → Home settings
 * singleton). Returns the same shape as `featuredGalleryImagesQuery` so the
 * rotating section can swap sources without markup changes.
 */
export const homeRotatingProjectsQuery = `*[_id == "homeSettings"][0]{
  "projects": rotatingProjects[]->{
    "image": {
      "asset": { "url": mainImage.asset->url },
      "alt": title,
      "title": title
    },
    "title": title,
    "href": "/projects/" + slug.current,
    "year": year,
    "type": type,
    "location": location
  }
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

/**
 * Shared projections for list/modal/portal views. Keep these in sync with
 * the canonical `projectsQuery` above — they intentionally select fewer
 * fields (no blocks/galleries) so list endpoints stay cheap.
 */
export const projectsSummaryQuery = `*[_type == "project"] | order(order asc) {
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
  order,
  status
}`;

/** Lean projection for the contact-page map: markers and filters only. */
export const projectsMapQuery = `*[_type == "project"] | order(order asc) {
  _id,
  "id": _id,
  title,
  "href": "/projects/" + slug.current,
  "image": mainImage.asset->url,
  location,
  status,
  type,
  coordinates
}`;

/** Projection shared by the employee (all) and client (own) portal queries. */
const PROJECT_PORTAL_PROJECTION = `{
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
  order,
  status,
  "brochure": brochure.asset->url,
  "inspectionReport": inspectionReports[0].file.asset->url,
  "inspectionReports": inspectionReports[]{
    title,
    "file": file.asset->url
  },
  "progressBlocks": coalesce(blocks[_type == "progressBlock"] {
    "progress25": coalesce(count(progress25), 0),
    "progress50": coalesce(count(progress50), 0),
    "progress75": coalesce(count(progress75), 0),
    "progress100": coalesce(count(progress100), 0)
  }, [])
}`;

/** Every project for the employee portal. */
export const portalProjectsQuery = `*[_type == "project"] | order(order asc) ${PROJECT_PORTAL_PROJECTION}`;

/** Only the signed-in client's assigned projects. */
export const userProjectsQuery = `*[_type == "project" && _id in $ids] | order(order asc) ${PROJECT_PORTAL_PROJECTION}`;
