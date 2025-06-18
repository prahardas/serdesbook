# 🤝 Contributing to SerDesBook

Thank you for your interest in contributing to **SerDesBook**!  
Our goal is to build a collaborative, high-quality resource for SerDes designers, validation engineers, and signal integrity enthusiasts.

---

## 🧑‍💻 How You Can Contribute

- 📘 Add or improve documentation
- 🛠 Share validation techniques and test setups
- 🧪 Submit tool comparisons or performance evaluations
- ✍️ Fix typos or clarify technical content
- 💡 Suggest new categories or topics

---

## 📁 Folder Structure

Please add your Markdown files inside the appropriate folder under `/docs`:

```
docs/
├── serdes/            ← Fundamentals
├── equalization/      ← CTLE, FFE, DFE
├── validation/        ← Eye analysis, BER
├── tools/             ← MATLAB, Python, IBIS-AMI
```

---

## 📝 Markdown Guidelines

Each file must begin with a **frontmatter block**:

```markdown
---
id: unique-id
title: Page Title
sidebar_position: 1
---
```

- Use `sidebar_position` to control ordering in the sidebar.
- Use `##` for section headings and `###` for sub-sections.
- Prefer plain Markdown; advanced HTML should be avoided unless necessary.

---

## 📦 Submitting a Pull Request

1. Fork the repo and create your feature branch:
   ```bash
   git checkout -b feature/my-new-page
   ```
2. Add and commit your changes:
   ```bash
   git add .
   git commit -m "Add: Eye diagram interpretation guide"
   ```
3. Push and create a PR to `main`.

---

## 📋 Review Process

- The core team will review PRs regularly.
- Small typo fixes will be merged quickly.
- Technical contributions will undergo peer review for accuracy and clarity.

---

## 🙌 Thank You!

Every contribution makes this a better resource.  
Let’s democratize knowledge in SerDes and high-speed I/O systems.
