document.addEventListener('DOMContentLoaded', () => {


    const catList = document.getElementById('cats');

    function loadCatList() {

        fetch('http://127.0.0.1:8000/cats/api_cat_list/')
        .then(response => response.json())
        .then(data =>{

            data.forEach(cat =>{

                const newLi = document.createElement('li');
                newLi.textContent = `name of cat: ${cat.name}  || age: ${cat.age}`;
                catList.append(newLi);
            })
        }); 
    }


    // lancer la f et interval pour refresh:
    loadCatList();

    setInterval(loadCatList, 10000);


});