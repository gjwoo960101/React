# React

## BuildTool
- vite
```
npm create vite@latest (프로젝트명)
```
- 실행명령어
```
yarn dev / npm run dev
```

## 에러해결
- 무한로딩  
vite의 개발서버 기본 바딩인 주소는 127.0.0.1 또는 localhost여서  
docker로 실행시 컨테이너 내부에서만 접근이 가능  
그래서, 누구나 접근이 가능하도록 (개발시) 0.0.0.0으로 바인딩설정을 해야함  
```
- vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: '0.0.0.0' <--- 바인딩 설정
  }
})

```
