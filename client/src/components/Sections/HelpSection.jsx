import React from 'react'

function HelpSection() {
  return (
    <div>
            <section class="about-us">
        <div class="about-us-1">
          <img src="assets/about.png" />
        </div>
        <div class="about-us-2">
          <div class="about-text">
            <p class="about-heading-2">WE ARE</p>
            <p class="about-heading-2">NON-PROFIT TEAM</p>
            <p class="about-heading-3">
              We are a team of dedicated individuals, volunteers, and supporters
              who share a common vision: to alleviate suffering, promote
              equality, and uplift communities. With unwavering determination
              and a heartfelt passion for change, we have undertaken numerous
              projects and initiatives.
            </p>
            <button
              onClick={() => {
                navigate("causes");
              }}
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HelpSection