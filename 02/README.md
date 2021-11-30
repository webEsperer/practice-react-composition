> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e03-react-composition` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#02` React: Kompozycja

Tym razem Twoim zadaniem jest implementacja kodu, który pozwoli uzupełniać listę użytkowników.

Kiedy użytkownik wpisze w formularzu imię i nazwisko i kliknie przycisk, to dane z formularza mają zostać dodane do `state` w komponencie `<App />`.

Komponent `<Form />` ma być niekontrolowany. Dane z pól należy przekazać do rodzica. Skoro `state` jest w rodzicu, to tam trzeba utworzyć metodę, która ten stan będzie aktualizować. Odniesienie do tej metody trzeba przekazać do `<Form />`, w którym zostanie odebrane dzięki `props` i umieszczone przez Ciebie w odpowiednim miejscu.

Komponent `<List />` ma renderować aktualną listę użytkowników przekazywanych przez `props`. Każdy z elementów tablicy `this.state.usersList` ma być renderowany przez komponent `<ListItem />`. Tutaj również możesz wykorzystać `.map()`.


&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../01) | [*następne zadanie*](./../03) :arrow_right:
