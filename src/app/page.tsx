'use client'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './page.module.css'
import type { EmblaCarouselType } from 'embla-carousel'

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    align: 'start',
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const updateControls = useCallback(
    (emblaApi: EmblaCarouselType) => {
      if (!emblaApi) return
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    },
    [emblaApi]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    updateControls(emblaApi)
    emblaApi.on('reInit', updateControls).on('select', updateControls)
  }, [emblaApi, updateControls])

  return (
    <div className={styles.page}>
      <div className={styles.embla}>
        <button
          className={styles.embla__prev}
          disabled={!canScrollPrev}
          onClick={scrollPrev}
        >
          Prev
        </button>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            <div className={styles.embla__slide}>Slide 1</div>
            <div className={styles.embla__slide}>Slide 2</div>
            <div className={styles.embla__slide}>Slide 3</div>
            <div className={styles.embla__slide}>Slide 4</div>
            <div className={styles.embla__slide}>Slide 5</div>
            <div className={styles.embla__slide}>Slide 6</div>
            <div className={styles.embla__slide}>Slide 7</div>
            <div className={styles.embla__slide}>Slide 8</div>
            <div className={styles.embla__slide}>Slide 9</div>
            <div className={styles.embla__slide}>Slide 10</div>
            <div className={styles.embla__slide}>Slide 11</div>
            <div className={styles.embla__slide}>Slide 12</div>
            <div className={styles.embla__slide}>Slide 13</div>
            <div className={styles.embla__slide}>Slide 14</div>
            <div className={styles.embla__slide}>Slide 15</div>
            <div className={styles.embla__slide}>Slide 16</div>
            <div className={styles.embla__slide}>Slide 17</div>
          </div>
        </div>
        <button
          className={styles.embla__next}
          disabled={!canScrollNext}
          onClick={scrollNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}
