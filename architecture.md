my-furniture-app/
│
├── app/                         # Frontend + Routing (Next.js)
│   ├── layout.js               # Root layout (Navbar + Footer)
│   ├── page.js                 # Home page
│
│   ├── about/
│   │   └── page.js
│
│   ├── products/
│   │   ├── page.js             # Product listing
│   │   └── [id]/
│   │       └── page.js         # Single product detail
│
│   ├── cart/
│   │   └── page.js
│
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.js
│   │   └── register/
│   │       └── page.js
│
│   ├── dashboard/
│   │   ├── layout.js           # Admin/Dashboard layout
│   │   ├── page.js
│   │   ├── products/
│   │   │   └── page.js
│   │   └── orders/
│   │       └── page.js
│
│   └── api/                    # Backend (Next.js API routes)
│       ├── auth/
│       │   └── route.js
│       ├── products/
│       │   └── route.js
│       ├── cart/
│       │   └── route.js
│       └── orders/
│           └── route.js
│
├── components/                 # Reusable UI components
│   ├── layout/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   │
│   ├── ui/
│   │   ├── Button.js
│   │   ├── Card.js
│   │   └── Modal.js
│   │
│   ├── products/
│   │   ├── ProductCard.js
│   │   ├── ProductGrid.js
│   │   └── ProductSlider.js
│   │
│   ├── cart/
│   │   └── CartItem.js
│   │
│   └── auth/
│       └── AuthForm.js
│
├── services/                   # API layer (Axios)
│   ├── axios.js
│   ├── authService.js
│   ├── productService.js
│   ├── cartService.js
│   └── orderService.js
│
├── store/                      # State management
│   ├── index.js               # Redux/Zustand setup
│   ├── authStore.js
│   ├── cartStore.js
│   └── productStore.js
│
├── hooks/
│   ├── useAuth.js
│   ├── useCart.js
│   └── useProducts.js
│
├── utils/
│   ├── helpers.js
│   ├── constants.js
│   └── formatPrice.js
│
├
│
├── middleware.js              # Auth protection (optional)
├── .env.local
├── next.config.js
└── package.json