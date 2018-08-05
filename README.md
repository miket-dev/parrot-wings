# parrot-wings

Папка `back` содержит ASP.NET Web API приложение, файл проекта - `back\ParrotWings.Api\Parrot.Wings.Api.sln`.
Запускаемый проект `ParrotWings.Api`.
Папка `front` содержит React приложение.
## Создание БД

После сборки `ParrotWings.Api.sln` и загрузки nuget пакетов запустить `back\ParrotWings.Api\Parrot.Wings.Api\bin\migrate.bat`. Будет использована строка подключения `PrimaryConnection`, определенная в `web.config` веб проекта.

## Приложение пользовательского интерфейса

Собранная версия приложения находится в папке `front\dist`.

Для самостоятельной сборки в командной строке в папке front выполнить:
```
npm install
npm run build
```

Для запуска в режиме разработки:
```
npm run dev
```
