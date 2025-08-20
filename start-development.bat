@echo off
echo Starting Full Stack Portfolio...
echo.

:: Start backend in a new window
echo Starting Backend Server...
start "Backend Server" cmd /c "cd /d "%~dp0" && node server\index.cjs"

:: Wait a moment for backend to start
timeout /t 3 /nobreak > nul

:: Start frontend in a new window
echo Starting Frontend Server...
start "Frontend Server" cmd /c "cd /d "%~dp0" && npm run dev"

echo.
echo Both servers are starting...
echo Backend: http://localhost:3001
echo Frontend: http://localhost:5173 (or next available port)
echo.
echo Press any key to exit...
pause > nul
