import { useState } from 'react'
import Icon from './Icon'

const slides = [
  { eyebrow: 'FOCUS NOTES', title: 'Make today count.', text: 'A little focus goes a long way.' },
  { eyebrow: 'DAILY FOCUS', title: 'Small steps, big progress.', text: 'Keep moving forward—every check matters.' },
  { eyebrow: 'WEEKLY REFLECTION', title: 'Celebrate the wins.', text: 'Take a moment to recognize your progress.' },
]

export default function FocusNotes() {
  const [slide, setSlide] = useState(0)
  const changeSlide = (direction) => setSlide((current) => (current + direction + slides.length) % slides.length)

  return (
    <section className="focus-notes" aria-label="Focus Notes carousel">
      <div className="note-accent"><span/><span/><span/></div>
      <div className="note-content" key={slide}>
        <p>
          <span className="desktop-note-label">{slides[slide].eyebrow}</span>
          <span className="mobile-note-label">{slide === 0 ? 'GOOD AFTERNOON' : slides[slide].eyebrow}</span>
          <span className="slide-count">{`0${slide + 1} / 03`}</span>
        </p>
        <h2>{slides[slide].title}</h2>
        <div>{slides[slide].text}</div>
        <div className="mobile-progress"><span style={{ width: `${slide === 0 ? 62 : 50}%` }}/><strong>{slide === 0 ? 62 : 50}%</strong></div>
      </div>
      <div className="carousel-controls">
        {slide === 0 && (
          <div className="next-up-card">
            <span className="next-up-check"><Icon name="check" size={12}/></span>
            <div><small>NEXT UP</small><strong>Design landing page</strong></div>
            <span className="next-up-progress">62%</span>
            <span className="next-up-bar"><i/></span>
          </div>
        )}
        <div className="indicators" aria-label="Choose slide">
          {slides.map((_, index) => (
            <button key={index} type="button" className={slide === index ? 'active' : ''} aria-label={`Show slide ${index + 1}`} aria-current={slide === index ? 'true' : undefined} onClick={() => setSlide(index)}/>
          ))}
        </div>
        <div className="arrow-controls">
          <button type="button" aria-label="Previous slide" onClick={() => changeSlide(-1)}><Icon name="chevronLeft"/></button>
          <button type="button" aria-label="Next slide" onClick={() => changeSlide(1)}><Icon name="chevronRight"/></button>
        </div>
      </div>
    </section>
  )
}
