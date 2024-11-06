let division = document.querySelector('.section')
let d = document.querySelector('.rightcontainer')
let details =document. querySelector('.details')
for (let i=1; i<=6; i++) {
    let section1Div = document.createElement('div');
    section1Div.classList.add('section1');
    let imag = document.createElement('img');
    let imag2 = document.createElement('img');
    imag2.src = `image${i}.png`;
    imag.src = `imag${i}.jpeg`;
    imag.classList.add(`image-${i}`)
    imag2.classList.add(`image-${i}`)
    imag2.style.display = 'none';
    imag.addEventListener('mouseenter', function () {
        imag2.style.display = 'block';
        imag2.style.width = '100px'
        imag2.style.height = '100px'
        imag2.style.backgroundColor="black"
        imag2.style.border='0'
        imag2.style.transition = 'transform 0.5s ease';
        imag2.style.transform = getHoverTransform(i);
        imag.style.transition = 'transform 0.5s ease';
        imag.style.transform = getHoverTransform2(i);
        imag.style.filter = 'blur(3px) grayscale(100%)'
    });
    imag.addEventListener('mouseleave', function () {
        imag2.style.transform = 'none';
        imag2.style.display = 'none';
        imag.style.transform = 'none';
        imag.style.filter = 'none'
    });


    imag.addEventListener('click', function () {
        display(imag.src)
        displaytext(i)
    })
    section1Div.appendChild(imag);
    section1Div.appendChild(imag2);
    division.append(section1Div);
}
function display(imgSrc) {
    d.innerHTML = '';
    let imgElement = document.createElement('img');
    imgElement.src = imgSrc;
    d.appendChild(imgElement);
    imgElement.style.width = '300px';
    imgElement.style.height = '400px';
    imgElement.style.borderRadius = '10px';

}

function displaytext(index){
    const characterdetails=character[index];
    details.innerHTML`
    <h3>${characterdetails.name}</h3>
     <p><strong>Ability:</strong> ${characterdetails.Ability}</p>`
}

function getHoverTransform(index) {
    switch (index) {
        case 1: return 'perspective(20px) rotate(2deg) translateY(-250px)';
        case 2: return 'perspective(20px) rotate(2deg) translateY(-240px)';
        case 3: return 'perspective(20px) rotate(2deg) translateY(-230px)';
        case 4: return 'perspective(20px) rotate(2deg) translateY(-250px)';
        case 5: return 'perspective(20px) rotate(2deg) translateY(-240px)';
        case 6: return 'perspective(20px) rotate(2deg) translateY(-230px)';
        default: return 'none';
    }
}

function getHoverTransform2(index) {
    switch (index) {
        case 1: return 'perspective(100px) rotateX(15deg) translateY(-50px)';
        case 2: return 'perspective(100px) rotateX(15deg) translateY(-50px)';
        case 3: return 'perspective(100px) rotateX(15deg) translateY(-50px)';
        case 4: return 'perspective(100px) rotateX(15deg) translateY(-50px)';
        case 5: return 'perspective(100px) rotateX(15deg) translateY(-50px)';
        case 6: return 'perspective(100px) rotateX(15deg) translateY(-50px)';
        default: return 'none';
    }
}
const character = [
    {
        name: 'Tanjiro Kamado',
        Ability: 'Water Breathing (and later, Sun Breathing). His signature techniques include the Water Surface Slash and the Hinokami Kagura (Sun Dance)'


    },
    {
        name: 'Zenitsu Agatsuma',
        Ability: 'Thunder Breathing. His primary technique is Thunderclap and Flash, allowing him to move at incredible speeds and strike opponents.'


    },
    {
        name: 'Kyojuro Rengoku',
        Ability: 'ThunderFlame Hashira. Rengoku uses Flame Breathing techniques, with his signature move being the Flame Tiger Breathing. '


    },
    {
        name: 'Inosuke Hashibira',
        Ability: 'Beast Breathing. Inosuke uses a unique style of combat that mimics animalistic movements and techniques. He wields dual swords and is skilled in using his brute strength.'


    },

    {
        name: 'Tengen Uzu',
        Ability: 'Sound Hashira. He uses Sound Breathing techniques and is known for his enhanced physical abilities and the use of explosive techniques.'


    },
    {
        name: 'Nezuko Kamado',
        Ability: 'Demon abilities include superhuman strength, regenerative healing, and the unique ability to manipulate her size. She can also use Blood Demon Art to create explosive power from her blood.'


    },
]