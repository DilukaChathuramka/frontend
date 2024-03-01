import React from 'react'


function Feature() {
  return (
    <div>
        <section class="section featured-car" id="featured-car">
<div class="container">

  <div class="title-wrapper">
    <h2 class="h2 section-title">Featured cars</h2>

    <a href="#" class="featured-car-link">
      <span>View more</span>

      <ion-icon name="arrow-forward-outline"></ion-icon>
    </a>
  </div>

  <ul class="featured-car-list">

 


    <li>
      <div class="featured-car-card">

        <figure class="card-banner">
          <img src="../../public/images/car-6.jpg" alt="BMW 4 Series 2019" loading="lazy" width="440" height="300"
            class="w-100"/>
        </figure>

        <div class="card-content">

          <div class="card-title-wrapper">
            <h3 class="h3 card-title">
              <a href="#">BMW 4 Series</a>
            </h3>

            <data class="year" value="2019">2019</data>
          </div>

          <ul class="card-list">

            <li class="card-list-item">
              <ion-icon name="people-outline"></ion-icon>

              <span class="card-item-text">4 People</span>
            </li>

            <li class="card-list-item">
              <ion-icon name="flash-outline"></ion-icon>

              <span class="card-item-text">Gasoline</span>
            </li>

            <li class="card-list-item">
              <ion-icon name="speedometer-outline"></ion-icon>

              <span class="card-item-text">7.2km / 1-litre</span>
            </li>

            <li class="card-list-item">
              <ion-icon name="hardware-chip-outline"></ion-icon>

              <span class="card-item-text">Automatic</span>
            </li>

          </ul>

          <div class="card-price-wrapper">

            <p class="card-price">
              <strong>$490</strong> / month
            </p>

            <button class="btn fav-btn" aria-label="Add to favourite list">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button class="btn">Rent now</button>

          </div>

        </div>

      </div>
    </li>

  </ul>

</div>
</section>

    </div>
  )
}

export default Feature