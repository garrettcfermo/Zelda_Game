// Buttons  
// --------------------------------------------------------------------------
// Start Menu
// Start Game Button
$('.start-btn').on('click', function () {
  $('.start-menu').css('display', 'none')
})

// Instruction Game Button
$('.inst-btn').on('click', function () {
  $('.Instructions').css('display', 'block')
  $('.start-menu').css('display', 'none')
})

// Instruction 
// Start Game Instruction Button
$('.start-inst-btn').on('click', function () {
  $('.Instructions').css('display', 'none')
  $('.game').css('display', 'block')
})

// Back Button
$('.back-btn').on('click', function () {
  $('.Instructions').css('display', 'none')
  $('.start-menu').css('display', 'block')
})

// Game 
$('.start-btn').on('click', function () {
  $('.game').css('display', 'block')
})
// --------------------------------------------------------------------------



// Functions
// --------------------------------------------------------------------------
// Boss Function (Images/Health)
function boss() {
  if (bossNumber === 1) {
    $('.boss-img').html(`
          <img src="assets/images/B_1.png" alt="boss_1">
          `)
    bossHealth = 4
  }
  if (bossNumber === 2) {
    $('.boss-img').html(`
          <img src="assets/images/B_2.png" alt="boss_2">
          `)
    bossHealth = 6
  }
  if (bossNumber === 3) {
    $('.boss-img').html(`
          <img src="assets/images/B_3.png" alt="boss_3">
          `)
    bossHealth = 6
  }
}

// Hearts Function
function health() {
  for (let i = 1; i <= heroHealth; i++) {
    $('.hero-health').append(`
    <div class="col-sm-3">
      <img src="assets/images/health_heart.png" alt="">
        </div>
    `)
  }
  for (let i = 1; i <= bossHealth; i++) {
    $('.boss-health').append(`
    <div class="col-sm-3">
      <img src="assets/images/health_heart.png" alt="">
        </div>
    `)
  }
}


// Game Over Function
function gameOver() {
  $('.game').html(`
    <div class='row'>
      <div class="col-lg-12">
            <img class="gameover" src="assets/images/game_over.png" alt="game over" style='width:100%'>
      </div>
    </div>
  `)
}


// Win Function
function winGame() {
  $('.game').html(`
    <div class='row'>
      <div class="col-lg-12">
            <h1 style="color:#d4ce46">Winner!</h1>
            <img class="gameover" src="assets/images/triforce.png" alt="Zelda" style='width:400px ; height:400px'>
      </div>
    </div>
  `)
}


// Reset Attack Rate Function
function reset() {
  $('#attack-rate-1').attr('data-attack', Math.floor(Math.random() * 5))
  $('#attack-rate-2').attr('data-attack', Math.floor(Math.random() * 5))
  $('#attack-rate-3').attr('data-attack', Math.floor(Math.random() * 5))
}
// --------------------------------------------------------------------------


// Initial Website Load/ Global Varables
// --------------------------------------------------------------------------
let bossNumber = 1
let bossHealth = 0
let heroHealth = 8

// Attack Items  Initial Load
for (i = 1; i <= 3; i++) {
  $('.attack-col').append(`
        <div class="row atk-btn-row">
        <button type="button" id="attack-rate-${i}" class="btn-lg btn-secondary atk-btn" data-attack=${Math.floor(Math.random() * 5)}> <img  src="assets/images/attack_${i}.png" alt="attack image ${i}"> </button>
        </div>
  `)
}

// Initial Health/Boss Load
boss()
health()
// --------------------------------------------------------------------------


// User Interface (Click of Attack Buttons)
// --------------------------------------------------------------------------
$('.atk-btn').on('click', function () {
  let attackValue = $(this).attr('data-attack')

  $('.hero-health').empty()
  $('.boss-health').empty()

  bossHealth -= attackValue
  heroHealth--

  if (heroHealth <= 0) {
    gameOver()
  } else if (bossHealth <= 0 && bossNumber === 3) {
    winGame()
  } else if (bossHealth <= 0) {
    bossNumber++
    boss()
    reset()
  }

  health()
})
// --------------------------------------------------------------------------

