# Contributing

Thanks for your interest in contributing! This is an open-source portfolio template, and contributions are welcome.

## How to Contribute

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create a branch** for your change (`git checkout -b feature/your-feature`)
4. **Make your changes**
5. **Run tests** to make sure nothing is broken (`npm test`)
6. **Commit** your changes (`git commit -m "Add your feature"`)
7. **Push** to your fork (`git push origin feature/your-feature`)
8. **Open a Pull Request** against the `main` branch

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/personal-portfolio.git
cd personal-portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Start the dev server
npm run dev
```

## Guidelines

- Keep changes focused — one feature or fix per PR
- Follow the existing code style (TypeScript, Tailwind CSS utilities)
- Add tests for new functionality when applicable
- Make sure `npm run build` and `npm test` pass before submitting
- Update the README if your change affects setup or usage

## Reporting Bugs

Open an issue with:
- A clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## Suggesting Features

Open an issue describing:
- The feature you'd like
- Why it would be useful
- Any implementation ideas you have

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
