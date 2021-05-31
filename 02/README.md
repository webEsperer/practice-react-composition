> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e03-react-composition` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#02` React: Kompozycja

Tym razem naszym zadaniem będzie implementacja kodu, który pozwoli nam uzupełniać listę użytkowników.

W momencie kiedy uzytkonik wpisze imię i nazwisko do formularza i kliknie przycisk to dane z formularza mają zostać dodane do state w komponencie `<App />`.

Komponent form ma być niekontrolowany, a dane należy przekazać do rodzica. Skoro `state` jest w rodzicu to tam trzeba utworzyć metodę, która będzie aktualizować `state`. Natomiast odniesienie do niej przekazać do `<Form />`, w którym zostanie wywołana dzięki `props`.

Komponent `<List />` renderować aktualną listę użytkoników przekazywanych przez `props`. Każdy z elementów tablicy `this.state.usersList` ma być renderowany przez komponent `<ListItem />`. Tutaj również można wykorzystać `.map()`.


&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../01) | [*następne zadanie*](./../03) :arrow_right:
