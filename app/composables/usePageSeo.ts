import type { MaybeRefOrGetter } from 'vue'

export function usePageSeo(title: MaybeRefOrGetter<string>, description: MaybeRefOrGetter<string>) {
  const fullTitle = () => `${toValue(title)} | PRO Contadora`
  const pageDescription = () => toValue(description)

  useSeoMeta({
    title: () => toValue(title),
    description: pageDescription,
    ogTitle: fullTitle,
    ogDescription: pageDescription,
    twitterTitle: fullTitle,
    twitterDescription: pageDescription
  })
}
