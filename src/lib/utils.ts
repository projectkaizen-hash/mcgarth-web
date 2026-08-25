export function getProjectArticleClass(order: number, total: number): string {
  const position = order % 4
  const isFirst = order === 1
  const isSecond = order === 2
  const isOrphanLast = position === 0 && order === total

  const base = 'c-project-card relative false block col-span-4'

  switch (position) {
    case 1:
      return `${base} xl:col-span-6 mt-[104px] xl:mt-[240px]${isFirst ? ' mt-0! xl:mt-0!' : ''}`
    case 2:
      return `${base} xl:col-span-4 xl:col-start-9 mt-[104px] xl:mt-[240px]${isSecond ? ' mt-[104px]! xl:mt-0!' : ''}`
    case 3:
      return `${base} mt-[104px] xl:col-span-4 xl:col-start-7 xl:mt-[240px]`
    case 0:
      return `${base}${isOrphanLast ? ' mt-[104px]' : ''} xl:col-span-6 xl:col-start-4 xl:mt-[240px]`
    default:
      return `${base} xl:col-span-6 mt-[104px] xl:mt-[240px]`
  }
}