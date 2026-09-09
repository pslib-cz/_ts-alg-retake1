# Kontrolní průřezové zadání – Static TypeScript a algoritmizace

## Účel zadání

Toto zadání ověřuje, zda student rozumí základům algoritmizace a programování v Static TypeScriptu a zda dokáže aplikovat znalosti v praxi v programu pracujícím v souboru `/src/index.ts`.

Zadání je zaměřeno na kontrolu, odhalování chyb a ladění již napsaného kódu.

---

## Obecná pravidla

- Pracuj výhradně v souboru `/src/index.ts`.
- Kód píšeš sám.
- Program spusť po každé důležité úpravě.
- Nesmíš používat `map`, `filter`, `reduce`, `sort`, `find`, `some`, `every`.
- Není cílem přepsat kód od začátku, ale najít a opravit konkrétní chyby.
- Vysvětluj vlastními slovy, proč daný krok dává smysl.
- Dbej na čitelnost kódu, názvy proměnných a správné použití datových typů.

---

## Kontrola řešení a ladění kódu

### Zadání

V souboru `/src/index.ts` máš připravený kód, který je neúplný a obsahuje chyby. Tvým úkolem je najít chyby, opravit je a vysvětlit, proč se staly.

Pro snadnější orientaci a testování rozděl program do čtyř funkcí. Aby šlo řešení automaticky zkontrolovat přiloženými testy (`npm test`), musí mít přesně tyto názvy, parametry a návratové typy a musí být exportované (`export function ...` / `export type Student`):

- `sumPoints()` – vrátí součet bodů všech studentů.
- `findBestScore()` – vrátí nejvyšší dosažený počet bodů ze zadaného pole.
- `countPassed()` – vrátí počet studentů, kteří uspěli.
- `computeAverage()` – vrátí průměrný počet bodů.

Nesnaž se kód přepsat úplně od začátku. Zaměř se na to, co je špatně a jak to správně opravit.

Dokud funkce v `index.ts` neexistují nebo obsahují chyby, testy budou selhávat (červené) – to je v pořádku, cílem je postupně je opravovat, dokud všechny neprojdou (zelené).


### Co máš udělat

1. Najdi chyby v kódu.
2. Oprav je tak, aby program správně běžel.
3. Zkontroluj, zda se program správně chová pro:
   - běžný případ,
   - prázdné pole,
   - jednočlenné pole,
   - záporné hodnoty,
   - opakující se výsledky.
4. U každé důležité opravy zapiš krátké vysvětlení:
   - co bylo špatně,
   - proč to bylo problém,
   - jak jsi to opravil.

### Chyby, které máš hledat

Můžeš najít například:
- chybnou hranici cyklu,
- nebezpečné přístupy při práci s indexem,
- špatnou počáteční hodnotu proměnné,
- neřešení prázdného pole,
- logickou chybu v podmínkách,
- nepřehledný nebo málo čitelný kód.

### Důležité

- Nehledej jen to, aby program „běžel“. Hledej i to, aby byl správně navržený.
- Nevyužívej hotové opravené řešení z internetu ani z jiného zdroje.
- Pokud najdeš více chyb, oprav jednu po druhé a vždy si ověř výsledek.
- Vysvětli, které chyby jsou syntaktické, typové, logické nebo algoritmické.
