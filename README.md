
Childcare Management App (Work-in-Progress)

⚠️ Disclaimer

This is a beginner Django project and a first attempt at building a web-based tool for my wife, a childcare provider. 
It’s under active development and not yet production-ready. The goal is to learn full-stack development.

📍 Project Overview

This app aims to help a childcare provider manage key aspects of their business, including:

  •	👶 Child registration and attendance tracking
  •	📊 Monitoring available spaces
  •	🍽️ Daily menu planning
  •	📅 Holiday scheduling
  •	💰 Financial records (invoices, expenses, tax summaries)
  •	📄 Document storage (policies, terms & conditions)

🛠️ Tech Stack

  Django	: Backend framework
  SQLite	: Development database
  HTML/CSS/JS	: Frontend structure and styling
  Bootstrap	: Responsive UI components
  Django Admin	: Admin interface for data entry

🚀 Getting Started

  1. Clone the repository
      git clone https://github.com/jimsloss/childcare-app.git cd childcare-app 
  
  2. Set up the virtual environment
      python -m venv venv source venv/bin/activate # or venv\Scripts\activate on Windows 
  
  3. Install dependencies
      pip install -r requirements.txt 
  
  4. Apply migrations
      python manage.py migrate 
  
  5. Create a superuser
      python manage.py createsuperuser 
  
  6. Run the server
      python manage.py runserver 

📁 Current App Modules

  accounts : 	 Invoices, Expenditures, Tax returns
  child	:  Child details and attendance
  creche :	Core childcare operations
  login	: Login functionality
  media	: Image and document uploads
  templates	: HTML templates for views
  static : CSS and JS assets

🧪 Development Notes

  •	This project is a sandbox for learning Django architecture.
  •	Folder structure and app separation are evolving.
  •	UI and features are incomplete and subject to change.
  •	This project is intended for educational purposes.

🤝 Contributions

  Not currently accepting contributions, but feedback is welcome via GitHub Issues.

