// src/form-functions.js

const regionsData = {
  'West Coast': ['Brikama', 'Kombo North', 'Kombo South'],
  'Kanifing': ['Kanifing'],
  'North Bank': ['Kerewan', 'Lower Niumi', 'Upper Niumi'],
  'Lower River': ['Mansa Konko', 'Jarra West', 'Jarra East'],
  'Central River': ['Janjanbureh', 'Niamina East', 'Niamina West'],
  'Upper River': ['Basse', 'Wuli East', 'Wuli West'],
};

function populateDistricts(regionId, districtId) {
  const regionSelect = document.getElementById(regionId);
  const districtSelect = document.getElementById(districtId);

  districtSelect.innerHTML = '<option value="">Select district</option>';
  districtSelect.disabled = true;

  const selectedRegion = regionSelect.value;

  if (selectedRegion && regionsData[selectedRegion]) {
    districtSelect.disabled = false;
    regionsData[selectedRegion].forEach(district => {
      const option = document.createElement('option');
      option.value = district;
      option.textContent = district;
      districtSelect.appendChild(option);
    });
  }
}

function validateForm(formId) {
  const form = document.getElementById(formId);
  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;

  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      isValid = false;
      field.classList.add('error'); // Add a class for styling errors
    } else {
      field.classList.remove('error');
    }
  });

  // Email validation (basic)
  const emailField = form.querySelector('input[type="email"]');
  if (emailField && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailField.value)) {
    isValid = false;
    emailField.classList.add('error');
  }

  if (!isValid) {
    alert('Please fill in all required fields correctly.');
  }

  return isValid;
}

async function onSubmit(event, formId) {
    event.preventDefault();

    if (!validateForm(formId)) {
      return;
    }

    const recaptchaContainer = document.getElementById('recaptcha-container');

    const siteKey = "6LeIxAcTAAAAAJcZVRqyHh71riL_dGzKjdR8-PUh";

    grecaptcha.ready(function() {
        grecaptcha.execute(siteKey, {action: 'submit'}).then(function(token) {
            // Add your logic to submit to your backend server along with the token:
            // alert("reCaptcha working. Congrats!");
            // if (token) {
            // } else {
            //     alert("reCaptcha failed.");
            // }

            const form = document.getElementById(formId);

            let formData = new FormData(form);
            formData.append('recaptchaToken', token);

            fetch(form.action, {
                method: form.method,
                body: formData,
            }).then(response => {
                // Handle the response from the server
                console.log(response);
            });
        });
    });

}

export { populateDistricts, validateForm, onSubmit };