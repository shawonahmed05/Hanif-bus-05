// এই ফাংশন সিট এর ক্লিক ইভেন্ট হ্যান্ডল করে
function handleSeatClick(event) {
  const seat = event.target; // ক্লিক করা সিট এলিমেন্ট
  const seatId = seat.innerText; // সিটের ইনার টেক্সট থেকে সিট আইডি পাওয়া
  
  // সিটের কালার চেঞ্জ করা
  seat.style.backgroundColor = 'red';
  
  // সিট বুকিং কাউন্ট বাড়ানো
  incrementBookingCount();
  
  // বুকিং সিট কালেকশনে সিট যোগ করা
  addToBookingCollection(seatId);
  
  // টোটাল প্রাইস বাড়ানো
  updateTotalPrice();
  
  // গ্র্যান্ড টোটাল বাড়ানো
  updateGrandTotal();

  // ফোন নাম্বারের ইনপুটে ভ্যালু চেক করা এবং নেক্সট বাটন এনেবল করা
  checkPhoneNumberInput();
}

// সিট বুকিং কাউন্ট বাড়ানো
function incrementBookingCount() {
  bookingCount += 1;
}

// বুকিং সিট কালেকশনে সিট যোগ করা
function addToBookingCollection(seatId) {
  bookingCollection.push(seatId);
}

// টোটাল প্রাইস বাড়ানো
function updateTotalPrice() {
  totalPrice = bookingCount * 550;
}

// গ্র্যান্ড টোটাল বাড়ানো
function updateGrandTotal() {
  grandTotal = bookingCount * 550;
}

// ফোন নাম্বারের ইনপুটে ভ্যালু চেক করা এবং নেক্সট বাটন এনেবল করা
function checkPhoneNumberInput() {
  const phoneNumberInput = document.getElementById('phone-number-input');
  const nextButton = document.getElementById('next-button');

  // ফোন নাম্বারের ইনপুট ভ্যালুর লেন্থ চেক করা
  if (phoneNumberInput.value.length > 0 && bookingCount > 0) {
      // নেক্সট বাটন এনেবল করা
      nextButton.disabled = false;
  } else {
      nextButton.disabled = true;
  }
}

// নেক্সট বাটনের ক্লিক ইভেন্ট হ্যান্ডল করে
function handleNextButtonClick() {
  const phoneNumberInputValue = document.getElementById('phone-number-input').value;
  alert(`আপনার ফোন নাম্বার: ${phoneNumberInputValue}, টিকেট সফলভাবে বুক করা হয়েছে।`);
}

// সিটের এলিমেন্ট গুলো ধরে লুপ চালিয়ে গুলোর উপরে ক্লিক ইভেন্ট যুক্ত করা
const seats = document.querySelectorAll('.seat');
seats.forEach(seat => {
  seat.addEventListener('click', handleSeatClick);
});

// নেক্সট বাটনের ক্লিক ইভেন্ট হ্যান্ডল করা
const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', handleNextButtonClick);

// ভেরিয়েবল ডিক্লেয়ার করা
let bookingCount = 0;
let totalPrice = 0;
let grandTotal = 0;
let bookingCollection = [];
