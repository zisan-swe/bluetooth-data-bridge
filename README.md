# Bluetooth Data Bridge

This project demonstrates how to receive Bluetooth data using Node.js and send it to a Laravel API.

---

## 📦 Project Structure

```
bluetooth-data-bridge/
├── node-bluetooth-service/    # Node.js service to scan & send Bluetooth data
├── laravel-bluetooth-api/     # Laravel API to receive & store data
├── .gitignore                 # Ignore unnecessary files
├── LICENSE                    # MIT license
└── README.md                  # This file
```

---

## ⚙️ Setup Instructions

### Node.js Bluetooth Service

```bash
cd node-bluetooth-service
npm install
node index.js
```

> Ensure Bluetooth is enabled and compatible with `@abandonware/noble`.

### Laravel API

```bash
cd laravel-bluetooth-api
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

> Set your Laravel `.env` file and ensure the database is connected.

---

## ✅ API Endpoint

`POST /api/bluetooth-data`

**Payload:**
```json
{
  "device": "DeviceName",
  "value": "SampleValueFromDevice"
}
```

---

## 📄 License

MIT © 2025
