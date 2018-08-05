# parrot-wings

`back` - содержит ASP.NET Web API приложение, файл проекта - `back\ParrotWings.Api\Parrot.Wings.Api.sln`.

`front` содержит React приложение.
## back

Запускаемый проект `ParrotWings.Api`.

После сборки `ParrotWings.Api.sln` и загрузки nuget пакетов запустить `back\ParrotWings.Api\Parrot.Wings.Api\bin\migrate.bat`. Будет использована строка подключения `PrimaryConnection`, определенная в `web.config` веб проекта.

## UI

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
### Config UI

Адрес сервиса API задан в файле `webpack.config.js` по пути `externals.config.apiUrl`.