# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; React composition #05

Naszym zadaniem będzie napisanie rozwiązanie dla komponentu `<Textarea />`, które będzie zwiększać wysokość dla znacznika `<textarea />` w przypadku gdy wielkość tekstu będzie powodować pojawianie się paska przewijania. Z zatrzeżeniem, że `<textarea />` może zwiększać wysokość dopóki nie przekracza `100px`.

Zauważ, że `state` przechowujący treść pola formularza jest w `<App />` i tak ma zostać czyli zawartość komponentu `<Textarea />` jest kontrolowana przez ten `state`. 

## Podpowiedź

Użyj `.getSnapshotBeforeUpdate()`, które pozwoli sprawdzić wysokość `<textarea />` (`.offsetHeight`) jeszcze przed aktualizacją danych. Zwróć w tej metodzie informacje, które będą określać czy wysokość po aktualizacji ma zostać zmieniona (np. `{ resize: true }`).

W metodzie `.componentDidMount()` zmodyfikuj wysokość dla `<teaxtarea />` jeśli `.offsetHeight < .scrollHeight` oraz gdy `snapshot.resize` jest równe `true`.

Aby móc sprawdzić wysokość `<textarea />` musisz utworzyć referencje dla tego elementu.




