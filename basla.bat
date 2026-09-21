@echo off
REM birsistem.az - sayti yigib isa salir (build + start).
REM Brauzerde acin: http://localhost:3000
cd /d "%~dp0"
call npm run build
if errorlevel 1 (
  echo.
  echo BUILD XETASI - yuxaridaki mesaja baxin.
  pause
  exit /b 1
)
start "" http://localhost:3000
call npm run start
pause
