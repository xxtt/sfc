ru = document.getElementById("ru");
ua = document.getElementById("ua");
us = document.getElementById("us");

portal = document.getElementById("portal");

h1 = document.getElementById("h1");
text1 = document.getElementById("text1");
h2 = document.getElementById("h2");
text2 = document.getElementById("text2");
h3 = document.getElementById("h3");
text3 = document.getElementById("text3");

more1 = document.getElementById("more1");
more2 = document.getElementById("more2");
more3 = document.getElementById("more3");



function changeRu() {
    ru.style.color = "red";
    ua.style.color = "white";
    us.style.color = "white";

    portal.innerHTML = "информационный медиа портал";

    h1.innerHTML = "Медиа Именинник";
    text1.innerHTML = "Text 1"
    h2.innerHTML = "Медиа Новость";
    text2.innerHTML = "Text 2"
    h3.innerHTML = "Рекомендуем Фильм";
    text3.innerHTML = "Text 3"

    more1.innerHTML = more2.innerHTML = more3.innerHTML = "читать дальше ..."
}

function changeUa() {
    ru.style.color = "white";
    ua.style.color = "red";
    us.style.color = "white";
    portal.innerHTML = "інформаційний медіа портал";

    h1.innerHTML = "Медіа Іменинник";
    text1.innerHTML = "Text 1"

    h2.innerHTML = "Медіа Новина";
    text2.innerHTML = "Text 2"

    h3.innerHTML = "Рекомендуємо Фільм";
    text3.innerHTML = "Text 3"

    more1.innerHTML = more2.innerHTML = more3.innerHTML = "читати далі ..."

    text1.innerHTML = text2.innerHTML = text3.innerHTML = "Lorem ipsum dolor sit amet, in sanctus delenit eleifend vim, mel consul inimicus voluptatum ex. Nisl duis posse in per, sea ut vidit choro copiosae, has ex case omittam expetendis. Eu dico tacimates mandamus mei, delicata adversarium quo in, te prima persecuti eum. At tale eros est, sea ad alii nostrum recusabo. Ea quaeque perfecto delicata est. Tation offendit nam cu. Ne harum admodum qui, nam id aperiri efficiantur delicatissimi. Autem graeco ex pro. Ei vidit nulla sit. Ad illud oportere sit, discere saperet per cu. Pro prima tempor impetus cu. Ut duo duis aperiri copiosae, ex vide doctus nostrud pri. Prima omnesque invenire sit cu, duo legere accusamus efficiantur at, ea mel vidisse iracundia. Populo inermis sit et. Ex commodo alterum vim. Sit possim tamquam perpetua ne, ea munere sanctus vis."

}

function changeUs() {
    ru.style.color = "white";
    ua.style.color = "white";
    us.style.color = "red";

    portal.innerHTML = "information media portal";

    h1.innerHTML = "Media Birthday";
    text1.innerHTML = "Text 1"

    h2.innerHTML = "Media News";
    text2.innerHTML = "Text 2"

    h3.innerHTML = "Recommended Movie";
    text3.innerHTML = "Text 3"

   more1.innerHTML = more2.innerHTML = more3.innerHTML = "read more ..."

}

changeUa();