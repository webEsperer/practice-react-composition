> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e03-react-composition` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#01` React: Kompozycja


Twoim pierwszym wyzwaniem jest napisanie komponentu złożonego `<Table />`, który będzie zawierał dane z pliku `data.json`. Niech jego struktura jest podobna do tej poniżej:

```
<Table>
    <TableHeader />
    <TableBody>
        <TableRow />
        <TableRow />
        <TableRow />
    <TableBody>
    <TableFooter />
</Table>
```

Gdzie:
* `<TableHeader />` – zawiera nazwy pól wraz z informacją o kwocie do zapłaty
* `<TableBody />` – zawiera wszystkie wiersze tabeli (do renderowania wielu `<TableRow />` pewnie przyda się `.map()`)
* `<TableRow />` – zawiera informacje o danym produkcie wraz z kwotą do zapłaty za ten produkt, tj. `price * quantity`
* `<TableFooter />` – zwiera informacje o sumie do zapłaty za wszystkie produkty (możesz wykorzystać `.reduce()`).

Zwróć uwagę na przekazywanie danych z rodzica do dziecka. Nie przekazuj wszystkich danych, lecz tylko te, które będą wykorzystane w dziecku.

Proponuję najpierw stworzyć cały komponent `<Table />`, a dopiero potem podzielić go na mniejsze.

Użyj [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) do sprawdzenia, jak są przekazywane `props` z rodzica do dziecka.

## Webpack

W pliku `./webpack.config.js` (w katalogu głównym) mieści się gotowa konfiguracja webpacka dla Reacta. Znajduje się tam zmienna `taskNumber` przechowująca informację o zadaniu, które w danym momencie przerabiasz.

Za każdym razem będziesz musiał modyfikować zawartość tej zmiennej (np. `const  taskNumber  =  '01';`) i ponownie uruchamiać tryb developerski. Pamiętasz, jak to zrobić? Gdzie zapisany jest skrót do odpowiedniej komendy?

Pamiętaj również, żeby pobrać paczki z npm, które będziemy wykorzystywać podczas pracy z Reactem. Wiesz, jak je zainstalować?

&nbsp;

> :arrow_left: ~~*poprzednie zadanie*~~ | [*następne zadanie*](./../02) :arrow_right:
