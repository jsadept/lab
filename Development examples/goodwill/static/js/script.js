const form = document.getElementById('form1');
const formSubmitBtn = document.getElementById('form1-submit');



async function postData(formattedData) {
    const response = await fetch('../form.php',{
        method: 'POST',
        body: formattedData
    });
    const data = await response.text();
    console.log(data);
}


formSubmitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    const formattedFormData = new FormData(form);

    const object = {};
    formattedFormData.forEach((value, key) => {
        if(!object.hasOwnProperty(object, key)){
            object[key] = value;
            return;
        }
        if(!Array.isArray(object[key])){
            object[key] = [object[key]];
        }
        object[key].push(value);
    });
    const json = JSON.stringify(object);

    postData(json);
})
