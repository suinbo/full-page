## Available Scripts

`npm start`

`npm test`

`npm run build`

프로덕션 번들 생성

`npm run eject`

숨겨져 있는 모든 설정 밖으로 추출

-   config.scripts 폴더 생성, package.json 내 숨겨진 Dependencies, babel, jest 노출
-   CRA가 자동으로 해주었던 webpack, babel 등 설정을 사용자가 유지보수, 라이브러리 의존성 체크해야 함

---

### note

1. public > manifest.json (메타데이터)

-   index.html 에서

2. index.html > %PUBLIC_URL%

-   빌드하는 동안 'public' 폴더의 URL로 대체
-   'public' 폴더에 있는 파일들만 HTML에서 참조 가능

3. robots.txt

-   웹 사이트에 웹 크롤러와 같은 로봇들 접근 제어
-   반드시 폴더명 끝에 / 추가

```
// 특정 디렉토리 접근 허가
User-agent: 제어할 로봇의 User-Agent
Allow: /foo/bar/

// 특정 디렉토리 접근 차단
User-agent: 제어할 로봇의 User-Agent
Disallow: /foo/bar/

// 모든 문서에 대한 접근 차단
User-agent: *
Disallow: /

// 모든 문서에 대해 접근 차단하고, 첫 페이지에 대해서만 허가
User-agent: *
Disallow: /
Allow: /$

```

4. react-app-env.d.ts

-   타입스크립트 타입 선언 참조
-   node-modules > react-scripts dependency 불러와서 사용
-   bmp, gif, jpeg, png 등 리소스 파일이나 .css, .scss 확장자 가진 css 모듈 가져오기 지원

5. index.tsx > `<React.StrictMode />`

-   애플리케이션 내 잠재적 문제 알아내기 위한 도구
-   strict mode 는 개발 중에만 적용 (배포시 작동 X)

6. reportWebVitals.ts

-   React 프로젝트 성능 측정 파일
-   setupTests.ts : 테스트 실행 설정 파일
