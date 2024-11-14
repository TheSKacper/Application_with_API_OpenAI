# Generowanie HTML dla Artykułu z OpenAI

## Opis aplikacji

Aplikacja przetwarza treść artykułu w formie pliku tekstowego (`artykul.txt`) i generuje dla niego strukturalny kod HTML. HTML zawiera odpowiednie tagi, wskazując miejsca na obrazy z atrybutem `alt` opisującym ich zawartość. Treść wynikowego kodu HTML jest zapisywana w pliku `artykul.html`.

Dodatkowo, można stworzyć szablon HTML (`szablon.html`), który można uzupełnić wygenerowaną zawartością, co pozwala na pełny podgląd artykułu w przeglądarce.

## Wymagania

Aby uruchomić aplikację, potrzebne są:
- Node.js (wersja 14+)
- Konto OpenAI oraz klucz API (umieszczony w pliku `.env`)
- Pakiet `openai` oraz `dotenv`, które można zainstalować przy użyciu `npm`

## Instalacja

1. Sklonuj repozytorium na swój lokalny komputer:

   ```bash
   git clone https://github.com/TwojeRepozytorium
   cd TwojeRepozytorium
## Instalacja wymaganych pakietów

2. Zainstaluj wymagane pakiety:

   ```bash
   npm install openai dotenv
## Przygotowanie pliku `.env` oraz `artykul.txt`

3. Utwórz plik `.env` w głównym katalogu projektu i dodaj swój klucz API OpenAI:

   ```plaintext
   OPENAI_API_KEY=your_api_key
## Przygotowanie pliku `artykul.txt`

Przygotuj plik `artykul.txt` zawierający treść artykułu, który chcesz przetworzyć, i umieść go w głównym katalogu.

## Uruchamianie aplikacji

Aby uruchomić aplikację i wygenerować HTML dla artykułu, użyj:

`node app.js`

## Kroki aplikacji

Po uruchomieniu aplikacji wykonywane są następujące kroki:

1. Aplikacja odczytuje treść artykułu z pliku `artykul.txt`.
2. Wysyła treść do API OpenAI, aby wygenerować HTML.
3. Wygenerowany HTML jest zapisywany w pliku `artykul.html`.







