
// Start Menu

// Start Game Button
$('.start-btn').on('click',function(){
  $('.start-menu').css('display','none')
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
})

// Back Button
$('.back-btn').on('click', function () {
  $('.Instructions').css('display', 'none')
  $('.start-menu').css('display', 'block')
})