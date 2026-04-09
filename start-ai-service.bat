@echo off
echo ========================================
echo   Notion AI Service (Python)
echo ========================================
echo.

cd ai-service

REM Check if virtual environment exists
if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
    echo.
)

REM Activate virtual environment
echo Activating virtual environment...
call venv\Scripts\activate
echo.

REM Install dependencies
echo Installing dependencies...
pip install -r requirements.txt
echo.

REM Start the service
echo ========================================
echo   Starting AI Service on port 5000
echo ========================================
echo.
python app.py

pause
