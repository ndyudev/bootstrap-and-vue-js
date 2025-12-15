# 🚀 SOF308 - Xây dựng giao diện tương tác Backend

<div align="center">

![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Dự án học tập môn SOF308 - Xây dựng giao diện tương tác Backend**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-profile)

</div>

---

## 📖 Giới thiệu

Đây là **dự án học tập hoàn chỉnh** môn **SOF308 - Xây dựng giao diện tương tác Backend** tại trường. Dự án bao gồm **ASM Practice** (luyện tập), **GD1** (assignment giai đoạn 1), và **GD2** (final project bảo vệ môn), cùng với **8 labs JavaScript** nền tảng.

**Bài tập chính thức để bảo vệ môn:** GD1 + GD2 (ASM Practice chỉ là bài tập luyện tập)

### 🎯 Mục tiêu dự án

- ✅ Học **JavaScript fundamentals** từ cơ bản đến nâng cao (8 Labs)
- ✅ **ASM Practice**: Luyện tập Vue.js 3 với Composition API
- ✅ **GD1**: Bài tập chính thức giai đoạn 1 (HTML/CSS/JS + Bootstrap)
- ✅ **GD2**: Final project bảo vệ môn (Vue.js application)
- ✅ Xây dựng **UI responsive** với Bootstrap 5
- ✅ Phát triển kỹ năng **CRUD operations** và state management
- ✅ Làm quen với **Vue Router** cho SPA navigation
- ✅ **Tổng hợp kiến thức** thành applications thực tế

**📋 Cấu trúc môn SOF308:**

- **ASM Practice**: Bài tập luyện tập (không chấm điểm chính thức)
- **GD1**: Assignment giai đoạn 1 (chấm điểm)
- **GD2**: Final project (bảo vệ môn - quan trọng nhất)
- **Labs**: Kiến thức nền tảng JavaScript

---

## 📊 Tiến độ học tập

<div align="center">

| Assignment         | Trạng thái        | Loại Project         | Mô tả                                     |
| ------------------ | ----------------- | -------------------- | ----------------------------------------- |
| **ASM Practice 1** | ✅ **Hoàn thành** | 🏃‍♂️ Luyện tập         | Job Listings App (Vue.js cơ bản)          |
| **ASM Practice 2** | ✅ **Hoàn thành** | 🏃‍♂️ Luyện tập         | Student Management (Vue.js nâng cao)      |
| **GD1**            | ✅ **Hoàn thành** | 📚 **Assignment**    | Social Blog App (HTML/CSS/JS + Bootstrap) |
| **GD2**            | ✅ **Hoàn thành** | 🎯 **Final Project** | TechTalk Blog (Vue.js - Bảo vệ môn)       |
| **Lab 1**          | ✅ **Hoàn thành** | 🧪 Nền tảng          | JS Basics (Variables, DOM)                |
| **Lab 2**          | ✅ **Hoàn thành** | 🧪 Nền tảng          | Math & Arrays (BMI, games)                |
| **Lab 3**          | ✅ **Hoàn thành** | 🧪 Nền tảng          | Events & Games (Calculator, RPS)          |
| **Lab 4**          | ✅ **Hoàn thành** | 🧪 Nền tảng          | Objects & Functions (Date/Time, objects)  |
| **Lab 5**          | ✅ **Hoàn thành** | 🧪 Nền tảng          | DOM & Shopping Cart (Dynamic HTML)        |
| **Lab 6**          | ✅ **Hoàn thành** | 🧪 Nền tảng          | Local Storage (Data persistence)          |
| **Lab 7**          | ✅ **Hoàn thành** | 🧪 Nền tảng          | API Integration (fetch, async/await)      |
| **Lab 8**          | ✅ **Hoàn thành** | 🧪 Nền tảng          | Final Project (Knowledge synthesis)       |

**📊 Tổng tiến độ: 12/12 (100%) — ĐÃ HOÀN THÀNH ✅**
**🎯 Bài chính thức bảo vệ môn: GD1 + GD2**

</div>

---

## 📁 Cấu trúc dự án tổng quan

```
bootstrap-and-vue-js/
├── 📁 Home/
│   └── 📁 asm/
│       └── 📁 practice/
│           ├── 📁 asm-pracice-1/ ✅ (Job Listings - Vue.js)
│           │   ├── 📁 src/components/ (JobList.vue, JobDetail.vue, JobForm.vue)
│           │   ├── 📁 src/router/ (Vue Router config)
│           │   ├── App.vue, main.js
│           │   ├── package.json, vite.config.js
│           │   └── index.html
│           └── 📁 asm-pracice-2/ ✅ (Student Management - Vue.js)
│               ├── 📁 src/components/ (ListStudent.vue, StudentDetail.vue, StudentForm.vue)
│               ├── 📁 src/router/ (Vue Router config)
│               ├── student-data.js (Mock data)
│               ├── App.vue, main.js
│               ├── package.json, vite.config.js
│               └── index.html
├── 📁 GD1/ ✅ (Social Blog - HTML/CSS/JS)
│   ├── index.html (Homepage)
│   ├── create-post.html (Post creation)
│   ├── post-detail.html (Post detail)
│   ├── profile.html (User profile)
│   ├── register.html (Registration)
│   ├── signin.html (Login)
│   └── 📁 images/ (Assets)
├── 📁 GD2/ ✅ (TechTalk Blog - Vue.js)
│   ├── Readme.md (Documentation)
│   └── 📁 techtalk-blog-assignment-final/
│       ├── 📁 src/components/ (Blog components)
│       ├── 📁 src/views/ (Blog pages)
│       ├── package.json, vite.config.js
│       └── index.html
├── 📁 Lab1/ ✅ (JavaScript Basics)
│   ├── lab1.html
│   ├── 📁 js/main.js
│   └── 📁 assets/css/style.css
├── 📁 Lab2/ ✅ (Math & Arrays)
│   ├── lab2.html
│   ├── 📁 js/lab2.js
│   └── 📁 assets/css/style.css
├── 📁 Lab3/ ✅ (Event Handling & Games)
│   ├── lab3-1.html (Calculator)
│   ├── lab3-2.html (Multiplication table)
│   ├── lab3-3.html (Calculator UI)
│   ├── lab3-4.html (Rock Paper Scissors)
│   ├── 📁 js/ (JavaScript files)
│   └── 📁 assets/css/ (Stylesheets)
├── 📁 Lab4/ ✅ (Objects & Functions)
│   ├── lab4-1.html (Product Objects)
│   ├── lab4-2.html (Student Objects)
│   ├── lab4-3.html (Date & Time)
│   ├── lab4-4.html (Window Manipulation)
│   ├── lab4-baitap.html (Student Management)
│   ├── 📁 js/ (JavaScript files)
│   └── 📁 assets/css/ (Stylesheets)
├── 📁 Lab5/ ✅ (DOM Manipulation & Shopping Cart)
│   ├── lab5-1.html (Product Display)
│   ├── lab5-2.html (Shopping Cart)
│   ├── 📁 js/ (JavaScript files)
│   └── 📁 assets/css/ (Stylesheets)
├── 📁 Lab6/ ✅ (Local Storage Integration)
│   ├── (Tích hợp localStorage vào các projects)
├── 📁 Lab7/ ✅ (API Integration)
│   ├── (Tích hợp fetch/async-await)
├── 📁 Lab8/ ✅ (Final Project)
│   ├── (Tổng hợp kiến thức)
└── README.md (Documentation)
```

### 📋 Chi tiết từng phần:

#### 🏠 **Home/asm/practice/** - Vue.js Practice (Luyện tập)

- **ASM Practice 1**: Ứng dụng quản lý công việc (Vue.js cơ bản)
- **ASM Practice 2**: Hệ thống quản lý sinh viên (Vue.js nâng cao)
- **Mục đích**: Luyện tập kỹ năng, không phải bài chính thức

#### 📚 **GD1/** - Assignment Giai Đoạn 1 (Bài chính thức)

- **Social Blog**: Website blog xã hội responsive
- **Công nghệ**: HTML5, CSS3, JavaScript, Bootstrap 5
- **Mục đích**: Bài tập chính thức được chấm điểm

#### 🎯 **GD2/** - Final Project (Bảo vệ môn)

- **TechTalk Blog**: Ứng dụng blog với Vue.js
- **Công nghệ**: Vue 3, Vue Router, Bootstrap 5, Vite
- **Mục đích**: Bài tập cuối cùng, quan trọng nhất để bảo vệ môn

#### 🧪 **Lab1-Lab8/** - JavaScript Learning Path

- **Lab 1**: Cơ bản (variables, console.log, alert, prompt)
- **Lab 2**: Toán học & Mảng (Math, arrays, BMI calculator)
- **Lab 3**: Events & Games (Calculator, Rock-Paper-Scissors)
- **Lab 4**: Objects & Functions (Student/Product objects, Date/Time)
- **Lab 5**: DOM & Shopping Cart (Dynamic HTML, cart functionality)
- **Lab 6**: Local Storage (Data persistence)
- **Lab 7**: API Integration (fetch, async/await)
- **Lab 8**: Final Project (Knowledge synthesis)

### 🎯 **Công nghệ sử dụng trong toàn dự án:**

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Vue.js 3
- **UI Framework**: Bootstrap 5
- **Build Tools**: Vite, NPM
- **Version Control**: Git
- **Development**: VS Code, Chrome DevTools

---

## 🛠️ Công nghệ và công cụ

### 🎨 Frontend Technologies

| Technology                                                                                               | Version | Mục đích                            |
| -------------------------------------------------------------------------------------------------------- | ------- | ----------------------------------- |
| ![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white)             | 3.x     | Framework chính cho reactive UI     |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white)    | 5.x     | CSS framework cho responsive design |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | ES6+    | Logic và reactivity                 |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)                   | Latest  | Build tool và dev server            |

### 🛠️ Development Tools

| Tool                                                                                                       | Mục đích             |
| ---------------------------------------------------------------------------------------------------------- | -------------------- |
| ![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white) | Code editor chính    |
| ![Vue DevTools](https://img.shields.io/badge/Vue_DevTools-4FC08D?style=flat&logo=vue.js&logoColor=white)   | Debug Vue components |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)                        | Version control      |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)            | Runtime environment  |

---

## 🎯 Chi tiết các dự án đã hoàn thành

### 🏃‍♂️ ASM Practice (Bài tập luyện tập)

#### ASM Practice 1: Job Listings App

- **Thư mục**: `Home/asm/practice/asm-pracice-1/`
- **Mục đích**: Luyện tập Vue.js cơ bản
- **Công nghệ**: Vue 3 Composition API, Vue Router, Bootstrap 5
- **Tính năng**: CRUD jobs, search, filter, navigation

#### ASM Practice 2: Student Management System

- **Thư mục**: `Home/asm/practice/asm-pracice-2/`
- **Mục đích**: Luyện tập Vue.js nâng cao
- **Công nghệ**: Vue 3 Composition API, Bootstrap 5, GPA Filtering
- **Tính năng**: CRUD students, advanced filtering, responsive tables

### 📚 GD Assignments (Bài chính thức bảo vệ môn)

#### GD1: Social Blog Application - Assignment Giai Đoạn 1

- **Thư mục**: `GD1/`
- **Mục đích**: **Bài tập chính thức giai đoạn 1**
- **Công nghệ**: HTML5, CSS3, JavaScript (ES6+), Bootstrap 5
- **Tính năng**: Homepage, user profiles, post creation, registration/sign-in, responsive design
- **Đánh giá**: **Được chấm điểm trong bài tập chính thức**

#### GD2: TechTalk Blog Application - Final Project

- **Thư mục**: `GD2/techtalk-blog-assignment-final/`
- **Mục đích**: **Bài tập cuối cùng bảo vệ môn**
- **Công nghệ**: Vue.js 3, Vue Router, Bootstrap 5, Vite
- **Tính năng**: Article listing, category filtering, search, author profiles, tag system
- **Đánh giá**: **Bài bảo vệ môn - quan trọng nhất**

### ✅ JavaScript Learning Labs (Lab1-Lab8)

#### 🧪 Lab 1: JavaScript Cơ bản ✅

- **File**: `Lab1/lab1.html`, `Lab1/js/main.js`
- **Kiến thức**: Variables, console.log, alert, prompt, DOM manipulation
- **Dự án**: Basic JavaScript interactions

#### 🧪 Lab 2: Math & Arrays ✅

- **File**: `Lab2/lab2.html`, `Lab2/js/lab2.js`
- **Kiến thức**: Math functions, arrays, BMI calculator, number guessing game
- **Dự án**: Mathematical calculations và array manipulations

#### 🧪 Lab 3: Event Handling & Games ✅

- **Files**: `Lab3/lab3-1.html` to `Lab3/lab3-4.html`
- **Kiến thức**: Event listeners, DOM updates, switch-case, game logic
- **Dự án**: Calculator, multiplication table, Rock-Paper-Scissors game

#### 🧪 Lab 4: Objects & Functions ✅

- **Files**: `Lab4/lab4-1.html` to `Lab4/lab4-baitap.html`
- **Kiến thức**: Object literals, methods, Date object, window manipulation
- **Dự án**: Product/student management, dynamic table creation

#### 🧪 Lab 5: DOM Manipulation & Shopping Cart ✅

- **Files**: `Lab5/lab5-1.html`, `Lab5/lab5-2.html`
- **Kiến thức**: DOM traversal, cloneNode, shopping cart logic
- **Dự án**: Product display system, add-to-cart functionality

#### 🧪 Lab 6: Local Storage ✅

- **Tích hợp**: localStorage vào các projects trước
- **Kiến thức**: Data persistence, JSON.stringify/parse
- **Dự án**: Persistent shopping cart, saved user data

#### 🧪 Lab 7: API Integration ✅

- **Tích hợp**: fetch API, async/await
- **Kiến thức**: HTTP requests, promise handling, error handling
- **Dự án**: External data fetching, API consumption

#### 🧪 Lab 8: Final Project ✅

- **Tổng hợp**: Kết hợp tất cả kiến thức từ Lab 1-7
- **Kiến thức**: Full-stack JavaScript application
- **Dự án**: Complete web application với DOM + Storage + API

---

## 🚀 Hướng dẫn cài đặt và chạy

### 1. Chuẩn bị môi trường

```bash
# Cài đặt Node.js (version 16+)
# Download từ: https://nodejs.org/

# Kiểm tra version
node --version
npm --version
```

### 2. Clone và setup project

```bash
# Clone repository
git clone https://github.com/your-username/sof308-bootstrap-vue.git
cd sof308-bootstrap-vue

# Vào thư mục assignment cụ thể
cd Home/asm/practice/asm-pracice-2

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

### 3. Truy cập ứng dụng

- Mở browser và truy cập: `http://localhost:5173`
- Vue DevTools sẽ tự động kết nối để debug

### 4. Build production

```bash
# Build cho production
npm run build

# Preview production build
npm run preview
```

---

## 🎨 Vue.js Patterns & Best Practices

### 🏗️ Composition API Structure

```javascript
<script setup>
import { ref, computed, onMounted } from "vue";

// Reactive data
const items = ref([]);
const searchQuery = ref("");

// Computed properties
const filteredItems = computed(() => {
  return items.value.filter(item =>
    item.name.includes(searchQuery.value)
  );
});

// Methods
const addItem = (item) => {
  items.value.push(item);
};

const deleteItem = (id) => {
  items.value = items.value.filter(item => item.id !== id);
};

// Lifecycle
onMounted(() => {
  // Load initial data
  loadData();
});
</script>
```

### 🎨 Bootstrap Integration

```vue
<template>
  <!-- Bootstrap Grid -->
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <!-- Form controls -->
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" v-model="name" />
        </div>
      </div>
    </div>
  </div>
</template>
```

### 🧭 Vue Router Setup

```javascript
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "list", component: ListComponent },
  { path: "/detail/:id", name: "detail", component: DetailComponent },
  { path: "/form/:id?", name: "form", component: FormComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
```

---

## 📚 Tài liệu tham khảo

### 📖 Vue.js Resources

| Resource                                                                                                       | Link                                                                       | Mô tả                  |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------- |
| ![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white)                   | [Vue.js Guide](https://vuejs.org/guide/introduction.html)                  | Official documentation |
| ![Vue School](https://img.shields.io/badge/Vue_School-4FC08D?style=flat&logo=vue.js&logoColor=white)           | [Vue School](https://vueschool.io/)                                        | Interactive tutorials  |
| ![Composition API](https://img.shields.io/badge/Composition_API-4FC08D?style=flat&logo=vue.js&logoColor=white) | [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) | Migration guide        |

### 🎨 Bootstrap Resources

| Resource                                                                                                          | Link                                                                              | Mô tả                  |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------- |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white)             | [Bootstrap Docs](https://getbootstrap.com/docs/5.0/getting-started/introduction/) | Official documentation |
| ![Bootstrap Icons](https://img.shields.io/badge/Bootstrap_Icons-563D7C?style=flat&logo=bootstrap&logoColor=white) | [Icons](https://icons.getbootstrap.com/)                                          | Icon library           |

### 🛠️ Development Tools

| Tool                                                                                                     | Link                                    | Mô tả             |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------- | ----------------- |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)                   | [Vite Guide](https://vitejs.dev/guide/) | Build tool docs   |
| ![Vue DevTools](https://img.shields.io/badge/Vue_DevTools-4FC08D?style=flat&logo=vue.js&logoColor=white) | [DevTools](https://devtools.vuejs.org/) | Browser extension |

---

## 🎯 Kỹ năng học được

### ✅ Vue.js 3 Mastery

- ✅ Composition API (ref, reactive, computed)
- ✅ Component lifecycle (onMounted, onUnmounted)
- ✅ Template syntax và directives
- ✅ Props và emit communication

### 🎨 UI/UX Development

- ✅ Bootstrap 5 components và utilities
- ✅ Responsive design principles
- ✅ Form validation và user feedback
- ✅ Table design và data presentation

### 🏗️ Application Architecture

- ✅ Vue Router cho SPA navigation
- ✅ Component-based architecture
- ✅ State management patterns
- ✅ CRUD operations implementation

### 🔧 Development Workflow

- ✅ Vite build tool
- ✅ NPM package management
- ✅ Git version control
- ✅ Code organization best practices

---

## 🎉 Các dự án đã hoàn thành

### 📚 GD1: Social Blog Application (Assignment Giai Đoạn 1)

- **Hoàn thành**: 100%
- **Tính năng**: Responsive blog với HTML/CSS/JS + Bootstrap
- **Mục đích**: **Bài tập chính thức giai đoạn 1 - được chấm điểm**
- **Kỹ năng**: Frontend development, UI/UX design

### 🎯 GD2: TechTalk Blog Application (Final Project - Bảo vệ môn)

- **Hoàn thành**: 100%
- **Tính năng**: Vue.js blog với routing và components
- **Mục đích**: **Bài tập cuối cùng - quan trọng nhất để bảo vệ môn**
- **Kỹ năng**: Vue.js ecosystem, component architecture

### 🏃‍♂️ ASM Practice (Bài tập luyện tập)

- **ASM Practice 1-2**: Vue.js applications để luyện tập kỹ năng
- **Mục đích**: Ôn luyện, không ảnh hưởng đến điểm số chính thức

---

## 📝 Tips học tập hiệu quả

### 🎯 Vue.js Best Practices

- **Composition API**: Ưu tiên Composition API cho projects mới
- **Component Naming**: Sử dụng PascalCase cho component names
- **Props Validation**: Luôn validate props trong components
- **Reactivity**: Hiểu rõ khi nào dùng ref vs reactive

### 🎨 Bootstrap Integration

- **Grid System**: Master Bootstrap grid cho responsive layouts
- **Components**: Sử dụng Bootstrap components thay vì custom CSS
- **Utilities**: Tận dụng Bootstrap utility classes
- **Customization**: Override Bootstrap variables khi cần

### 🐛 Debugging Vue Apps

- **Vue DevTools**: Inspect component tree và state
- **Console Logging**: Strategic logging trong computed và methods
- **Error Boundaries**: Handle errors gracefully
- **Performance**: Monitor component re-renders

---

## 📄 Giấy phép

Dự án này được tạo ra cho mục đích học tập môn SOF308. Bạn có thể tự do sử dụng, chia sẻ và đóng góp cải tiến.

---

## 🙏 Lời cảm ơn

Cảm ơn các giảng viên và bạn bè đã hỗ trợ trong quá trình học tập môn SOF308.

---

<div align="center">

**🎉 CHÚC MỪNG! Dự án SOF308 đã HOÀN THÀNH 100% 🎉**

_"Practice makes perfect - Thực hành tạo nên sự hoàn hảo! 💪"_


**🎯 Bài tập chính thức để bảo vệ môn: GD1 + GD2**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-profile)

</div></content>

