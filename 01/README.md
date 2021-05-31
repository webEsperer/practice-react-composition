> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e03-react-composition` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#01` React: Kompozycja


Twoim pierwszym wyzwaniem będzie napisać komponent złożony `<Table />`, który będzie zawierał dane z pliku `data.json`, a jego struktura ma być podobna do tej przedstawionej niżej:

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
* `<TableHeader />` - zawiera nazwy pól wraz z informacją o kwocie do zapłaty
* `<TableBody />` - zawiera wszystkie wiersze tabeli, pewnie przyda się `.map()` do renderowania wielu `<TableRow />`
* `<TableRow />` - zawiera informacje o danym produkcie wraz z kwotą do zapłaty za ten produkt tj. `price * quantity`
* `<TableFooter />` - zwiera informacje o sumie do zapłaty za wszystkie produkty, można wykorzystać `.reduce()`

Zwróć uwagę na przekazywanie danych z rodzica do dziecka. Nie przekazuj wszystkich danych tylko te, które będa wykorzystane w dziecku.

Proponuję najpierw wykonać całe zadanie jako komponent `<Table />`, potem dopiero wykonać dzielenie na mniejsze komponenty.

Użyj [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) do sprawdzenia jak są przekazywane `props` z rodzica do dziecka.

## Webpack

W pliku `./webpack.config.js` (w katalogu głównym) znajdziesz gotową konfigurację Webpack-a dla React. Znajduje się tam zmienna `taskNumber`, która przechwowuje informacje o zadaniu, które w danym momencie przerabiasz.

Za każdym razem będziesz musiał modyfikować zawartość tej zmiennej i ponownie uruchamiać tryb developerski. Pamiętasz jak to zrobić? Gdzie zapisany jest skrót do odpowiedniej komendy?

Pamiętaj również, że musimy mieć pobrane paczki z npm, które będziemy wykorzystywać podczas pracy z React. Wiesz jak je zainstalować?

&nbsp;

> :arrow_left: ~~*poprzednie zadanie*~~ | [*następne zadanie*](./../02) :arrow_right:
