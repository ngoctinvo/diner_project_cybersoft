// const counters = document.querySelectorAll(".countnumber");
// const speed = 1000;

// counters.forEach(countnumber => {
//     const updateCount = () => {
//         const target = +countnumber.getAttribute('data-target');
//         // console.log(typeof target);
//         const count = +countnumber.innerText;
//         const inc = target / speed;

//         if (count < target) {
//             countnumber.innerText = Math.ceil(count + inc);
//             setTimeout(updateCount, 3);
//         } else {
//             count.innerText = target;
//         }
//     }
//     updateCount();
// });

$('.countnumber').each(function() {
    var $this = $(this),
      countTo = $this.attr('data-count');
  
    $({
      countNum: $this.text()
    }).animate({
        countNum: countTo
      },
  
      {
        duration: 5000,
        easing: 'linear',
        step: function() {
          $this.text(commaSeparateNumber(Math.floor(this.countNum)));
        },
        complete: function() {
          $this.text(commaSeparateNumber(this.countNum));
          //alert('finished');
        }
      }
    );
  
  });
  
  function commaSeparateNumber(val) {
    while (/(\d+)(\d{3})/.test(val.toString())) {
      val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    return val;
  }