// EmailJS Test Function
// Run this in your browser console to test EmailJS directly

function testEmailJS() {
  const testData = {
    from_name: "Test User",
    from_email: "test@example.com", 
    message: "This is a test message",
    company: "Test Company",
    project: "Test Project",
    budget: "$5k - $10k",
    to_name: "Bilal Abbasi",
  to_email: "Info@codeworld.dev",
    reply_to: "test@example.com",
    timestamp: new Date().toLocaleString()
  };

  emailjs.send('service_defm7jo', 'template_contact', testData)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Test email sent successfully!');
    }, function(error) {
      console.log('FAILED...', error);
      alert('Test email failed: ' + error.text);
    });
}

// Run the test
testEmailJS();
