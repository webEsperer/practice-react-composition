# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; React composition #04

Tym razem naszym zadaniem jest wyświetlenie zawartości wybranych plików tekstowych poprzez pole formularza.

W komponencie `<App />` mamy `state`, w którym będziemy przechowywać informacje o zawartości pliku, jego nazwie oraz rozmiarze. 

Pamiętaj, aby również dodać uniklane id. Możesz użyć do tego [uuid](https://www.npmjs.com/package/uuid), który opisuję w materiałach.

Zapisane dane powinniśmy przekazać do komponentu `<List />` i w nim je wyrenderować.

## Podpowiedź

Zawartość pliku możesz pobrać za pomocą [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader), który opisywałem w materiałach na temat formularzy (ang Forms).

