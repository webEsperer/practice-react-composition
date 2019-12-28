# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; React composition #03

Ponownie będziemy operować na produktach. Jednak tym razem będziemy chcieli umożliwić wybór produktu do zakupu oraz go usunać z koszyka jeśli taka będzie wola użytkownika.


Do zrealizowania zadania będziemy potrzebować 3 komponentów:
* `<Category />` - wyświetla listę dostępnych produktów. Produkty są renderowane dzięki komponentowi `<Product />`
* `<Cart />` - wyświetla listę wybranych produktów do zakupu. Produkty do zakupu są również renderowane przez komponent `<Product />`
* `<Product />` - pozwala wyświetlić informacje o produkcie. 

## <Product />

Zauważ, że ten komponent jest wykorzystywany w 2 różnych miejscach. 

W `<Category />` mamy mieć możliwość zakupu tego produktu, więc przydałby się przycisk "dodaj do koszyka". Jeśli ten produkt został już dodany do koszyka to ten przycisk ma być nieaktywny tj. "disabled".

Natomiast w `<Cart />` będzie potrzebny przycisk "usuń z koszyka".

Obie akcje tj. dodawanie i usuwanie mają być realizowane na danych w `<App />` dlatego to tam będziemy musieli zdefiniować odpowiednie metody i przekazać je do odpowiednich komponentów.

Rozróżnienie w `<Product />`, które rozwiązanie ma być implementowane można przypisać odpowiedniemu props np. `<Product isCategory={ true } />` lub `<Products isCart={ true } />`.

Spróbuj renderować produkty między komponentami tj. jako ich dzieci:

```
<Cataegory>
    <Product />
    <Product />
</Category>
```

lub

```
<Cart>
    <Product />
    <Product />
</Cart>
```

Możesz używać do tego odpowiedniej zmiennej i .map() np:

```
const list = ... .map( ... );
<Category>
    { list }
</Category>
```

