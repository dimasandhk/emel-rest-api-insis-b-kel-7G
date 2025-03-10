# Emel Rest API Integrasi Sistem B Kelompok 7 G

Anggota Kelompok:

- Naufal Syafi' Hakim 5027231022
- RM Novian Malcolm Bayuputra 5027231035
- Dimas Andhika Diputra 5027231074

# Setup project

- clone repo ini
- `pnpm install`
- setup environment variable dengan membuat file `.env` pada root folder dan isi file dengan template sebagai berikut:

```
MONGODB_URI=mongodb+srv://[username]:[pw]@[cluster-name]/[db-name]?retryWrites=true&w=majority&appName=[]
PORT=3000
JWT_SECRET=[]
```

mongodb bisa local ataupun online

- `npm run start:dev`
