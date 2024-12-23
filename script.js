// সব fieldset কে সিলেক্ট করুন

const fieldsets = document.querySelectorAll('.Single_six');

let activeFieldset = fieldsets[0]; // ডিফল্টভাবে প্রথম fieldset এ সাদা বর্ডার থাকবে


// প্রথম বক্সে ডিফল্ট সাদা বর্ডার অ্যাপ্লাই

function setDefaultBorder() {

  activeFieldset.style.borderColor = 'white';

}


// hover ইভেন্টে সাদা বর্ডার সেট করার ফাংশন

function setHoverBorder(element) {

  // পূর্বের active fieldset এর বর্ডার রিসেট

  activeFieldset.style.borderColor = '#26528F';

  element.style.borderColor = 'white'; // নতুন hover করা fieldset এ সাদা বর্ডার সেট

}


// মাউস সরিয়ে নিলে ডিফল্ট বর্ডার ফিরে আসে

function resetHoverBorder(element) {

  element.style.borderColor = '#26528F';

  setDefaultBorder(); // প্রথম fieldset এ সাদা বর্ডার রিস্টোর

}


// ডিফল্ট বর্ডার সেট করুন প্রথম fieldset এ

setDefaultBorder();


// প্রতিটি fieldset এ hover ইভেন্ট যোগ করা

fieldsets.forEach(fieldset => {

  fieldset.addEventListener('mouseenter', () => setHoverBorder(fieldset));

  fieldset.addEventListener('mouseleave', () => resetHoverBorder(fieldset));

});