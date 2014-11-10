ru = document.getElementById("ru");
ua = document.getElementById("ua");
us = document.getElementById("us");

portal = document.getElementById("portal");

h1 = document.getElementById("h1");
text1 = document.getElementById("text1");
mh1 = document.getElementById("mh1");
mtext1 = document.getElementById("mtext1");

h2 = document.getElementById("h2");
text2 = document.getElementById("text2");
h3 = document.getElementById("h3");
text3 = document.getElementById("text3");

more1 = document.getElementById("more1");
more2 = document.getElementById("more2");
more3 = document.getElementById("more3");

text = "Lorem ipsum dolor sit amet, in sanctus delenit eleifend vim, mel consul inimicus voluptatum ex. Nisl duis posse in per, sea ut vidit choro copiosae, has ex case omittam expetendis. Eu dico tacimates mandamus mei, delicata adversarium quo in, te prima persecuti eum. At tale eros est, sea ad alii nostrum recusabo. Ea quaeque perfecto delicata est. Tation offendit nam cu. Ne harum admodum qui, nam id aperiri efficiantur delicatissimi. Autem graeco ex pro. Ei vidit nulla sit. Ad illud oportere sit, discere saperet per cu. Pro prima tempor impetus cu. Ut duo duis aperiri copiosae, ex vide doctus nostrud pri. Prima omnesque invenire sit cu, duo legere accusamus efficiantur at, ea mel vidisse iracundia. Populo inermis sit et. Ex commodo alterum vim. Sit possim tamquam perpetua ne, ea munere sanctus vis.";

function changeRu() {
    ru.style.color = "red";
    ua.style.color = "white";
    us.style.color = "white";

    portal.innerHTML = "информационный медиа портал";

    mh1.innerHTML = h1.innerHTML = "Медиа Именинник";
    mtext1.innerHTML = text1.innerHTML = text;

    mh2.innerHTML = h2.innerHTML = "Медиа Новость";
    mtext2.innerHTML = text2.innerHTML = text;

    mh3.innerHTML = h3.innerHTML = "Рекомендуем Фильм";
    mtext3.innerHTML = text3.innerHTML = text;

    more1.innerHTML = more2.innerHTML = more3.innerHTML = "читать дальше ...";
}

function changeUa() {
    ru.style.color = "white";
    ua.style.color = "red";
    us.style.color = "white";
    portal.innerHTML = "інформаційний медіа портал";

    mh1.innerHTML = h1.innerHTML = "Медіа Іменинник";
    mtext1.innerHTML = text1.innerHTML = text;

    mh2.innerHTML = h2.innerHTML = "Медіа Новина";
    mtext2.innerHTML = text2.innerHTML = text;


    mh3.innerHTML = h3.innerHTML = "Рекомендуємо Фільм";
    mtext3.innerHTML = text3.innerHTML = text;

    more1.innerHTML = more2.innerHTML = more3.innerHTML = "читати далі ...";


}

function changeUs() {
    ru.style.color = "white";
    ua.style.color = "white";
    us.style.color = "red";

    portal.innerHTML = "information media portal";

    mh1.innerHTML = h1.innerHTML = "Media Birthday";
    mtext1.innerHTML = text1.innerHTML = text;

    mh2.innerHTML = h2.innerHTML = "Media News";
    mtext2.innerHTML = text2.innerHTML = text;

    mh3.innerHTML = h3.innerHTML = "Recommended Movie";
    mtext3.innerHTML = text3.innerHTML = text;

    more1.innerHTML = more2.innerHTML = more3.innerHTML = "read more ...";

}

changeUa();