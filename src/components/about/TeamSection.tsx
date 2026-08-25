import { sanityClient, employeesQuery } from "@/lib/sanity";

type Employee = {
  _id: string;
  name: string;
  jobTitle: string;
  email?: string;
  img1: string | null;
  img2: string | null;
};

export default async function TeamSection() {
  const employees: Employee[] = await sanityClient.fetch(employeesQuery);

  return (
    <div className="c-block-team">
      <section className="block undefined" data-scroll>
        <div>
          <div className="c-grid-container">
            <div className="col-span-3 xl:col-span-6 xl:col-start-2">
              <h2 className="c-text-label">Our team</h2>
              <p className="c-appear-blur-in c-heading-h2 mt-[16px] xl:mt-[24px]">
                A committed team, a shared knowledge
              </p>
            </div>
          </div>
          <ul className="c-container mt-[64px] grid grid-cols-2 gap-x-[4px] gap-y-[56px] xl:mt-[95px] xl:grid-cols-4">
            {employees.map((member) => (
              <li key={member._id} is="c-teamate">
                <div className="group relative aspect-[346/432] overflow-hidden rounded-sm">
                  {member.img1 && (
                    <div
                      className="c-image is-loaded w-full -cover -lazy-load ease-[cubic-bezier(0.4,0,1,1)] absolute h-full w-full object-cover transition-all duration-300"
                      style={{ ["--width" as string]: "692", ["--height" as string]: "864", aspectRatio: "0.8009259259259259" }}
                    >
                      <picture className="c-image_inner flex h-full w-full">
                        <img
                          src={member.img1}
                          alt=""
                          fetchPriority="auto"
                          loading="lazy"
                          className="c-image_img"
                          width={692}
                          height={864}
                        />
                      </picture>
                    </div>
                  )}
                  {member.img2 && (
                    <div
                      className="c-image is-loaded w-full -cover -lazy-load ease-[cubic-bezier(0.4,0,0.2,1)] absolute inset-0 h-full w-full scale-[1.05] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                      style={{ ["--width" as string]: "692", ["--height" as string]: "864", aspectRatio: "0.8009259259259259" }}
                    >
                      <picture className="c-image_inner flex h-full w-full">
                        <img
                          src={member.img2}
                          alt=""
                          fetchPriority="auto"
                          loading="lazy"
                          className="c-image_img"
                          width={692}
                          height={864}
                        />
                      </picture>
                    </div>
                  )}
                </div>
                <div className="mt-[8px] flex flex-col">
                  <h3 className="c-text-subtitle">{member.name}</h3>
                  <span className="c-text-small relative -mt-[4px]">{member.jobTitle}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
