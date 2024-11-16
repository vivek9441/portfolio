# Getting Started

## Initial Setup

### Prerequisites

Below are detailed installation instructions for each required tool:

```bash
# Required versions
Node.js >= 22.0.0  # Updated version
pnpm >= 8.0.0
AWS CLI
Git
```

#### 1. Node.js Installation (>= 22.0.0)

**Windows:**

```bash
# Using winget
winget install OpenJS.NodeJS

# Or download installer from https://nodejs.org/
# Select version 22.x (Current)
```

**macOS:**

```bash
# Using Homebrew
brew install node@22

# Using nvm (recommended)
nvm install 22
nvm use 22
```

**Linux:**

```bash
# Using nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 22
nvm use 22

# Using apt (Ubuntu/Debian)
# First, add NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Verify installation:

```bash
node --version  # Should show v22.x.x
npm --version   # Should show 10.x.x
```

> **Note**: Node.js 22 is the current release line as of 2024. It includes the latest features like:
>
> - Built-in test runner improvements
> - WebStreams optimization
> - Enhanced debugging capabilities
> - Better performance metrics
> - Latest ECMAScript features

#### 2. PNPM Installation (>= 8.0.0)

```bash
# Using npm (all platforms)
npm install -g pnpm

# Verify installation
pnpm --version  # Should show 8.x.x
```

#### 3. AWS CLI Installation

**Windows:**

```bash
# Download and run the MSI installer:
# https://awscli.amazonaws.com/AWSCLIV2.msi
```

**macOS:**

```bash
# Using Homebrew
brew install awscli

# Or download the installer:
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /
```

**Linux:**

```bash
# Using curl
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Using apt (Ubuntu/Debian)
sudo apt-get update
sudo apt-get install awscli
```

Verify installation:

```bash
aws --version  # Should show aws-cli/2.x.x
```

#### 4. Git Installation

**Windows:**

```bash
# Using winget
winget install Git.Git

# Or download installer from https://git-scm.com/download/win
```

**macOS:**

```bash
# Using Homebrew
brew install git

# It may also prompt you to install Xcode Command Line Tools
xcode-select --install
```

**Linux:**

```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install git

# Fedora
sudo dnf install git

# Arch Linux
sudo pacman -S git
```

Verify installation:

```bash
git --version  # Should show git version 2.x.x
```

### Core Framework Installation

After installing the prerequisites, install the core frameworks and dependencies:

```bash
# Create a new Next.js project with React 19 RC
pnpm create next-app@latest my-project --typescript
cd my-project

# Install TypeScript
pnpm add typescript@5.4 @types/node @types/react

# Install AWS CDK
pnpm add -g aws-cdk

# Install tRPC and its dependencies
pnpm add @trpc/server @trpc/client @trpc/react-query @tanstack/react-query zod

# Verify installations
npx tsc --version     # Should show 5.4.x
cdk --version         # Should show 2.x.x
```

#### Framework Configuration Files

1. **TypeScript Configuration** (tsconfig.json):

```json
{
  "compilerOptions": {
    "target": "es2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ]
  }
}
```

2. **AWS CDK Configuration** (cdk.json):

```json
{
  "app": "npx ts-node bin/app.ts",
  "watch": {
    "include": ["**"],
    "exclude": [
      "README.md",
      "cdk*.json",
      "**/*.d.ts",
      "**/*.js",
      "tsconfig.json",
      "package*.json",
      "yarn.lock",
      "node_modules",
      "test"
    ]
  }
}
```

#### Framework Troubleshooting

**React/Next.js Issues:**

- If you get dependency conflicts, try `pnpm install --force`
- For React 19 RC specific issues, check the [React RFC discussions](https://github.com/reactjs/rfcs)

**TypeScript Issues:**

- Run `npx tsc --noEmit` to check for type errors
- Ensure your IDE has TypeScript support enabled

**AWS CDK Issues:**

- Run `cdk bootstrap` before first deployment
- Check AWS credentials are properly configured
- For permission issues: `aws configure` with appropriate credentials

**tRPC Issues:**

- Ensure all peer dependencies are installed
- Check API endpoint configuration in Next.js
- Verify client-server type synchronization

For more detailed setup instructions, refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [AWS CDK Guide](https://docs.aws.amazon.com/cdk/latest/guide/)
- [tRPC Documentation](https://trpc.io/docs)

### Installation Troubleshooting

#### Common Node.js Issues

- If you have multiple Node versions installed, use `nvm` to switch between them
- On Windows, ensure Node.js is added to your PATH
- If you get permission errors, don't use `sudo` with npm. Instead, fix permissions or use nvm

#### Common PNPM Issues

- If you get "command not found", ensure global npm modules are in your PATH
- Clear PNPM cache if you encounter package resolution issues: `pnpm store prune`

#### Common AWS CLI Issues

- If credentials aren't working, check `~/.aws/credentials` file
- For "command not found", ensure AWS CLI is in your PATH
- Region errors can be fixed in `~/.aws/config`

#### Common Git Issues

- SSH key setup: `ssh-keygen -t ed25519 -C "your_email@example.com"`
- Git not found in PATH (Windows): Reinstall Git and select "Use Git from Windows Command Prompt"
- Line ending issues: Configure with `git config --global core.autocrlf true` on Windows or `input` on Unix

For additional help, consult:

- [Node.js Documentation](https://nodejs.org/docs)
- [PNPM Documentation](https://pnpm.io/installation)
- [AWS CLI User Guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)
- [Git Documentation](https://git-scm.com/doc)

### Repository Setup

```bash
# Clone the repository
git clone https://github.com/bjornmelin/bjornmelin-platform-io.git
cd bjornmelin-platform-io

# Install dependencies
pnpm install

# Configure environment
cp .env.example .env.local
```

### AWS Configuration

```bash
# Configure AWS CLI
aws configure

# Required AWS credentials
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=your_region
```

## Development Environment

### Local Development Server

```bash
# Start frontend development server
pnpm dev

# Start API development server
pnpm dev:api

# Run both concurrently
pnpm dev:all
```

### Environment Configuration

```yaml
Development:
  API_URL: http://localhost:3000
  DEBUG: true
  LOG_LEVEL: debug

Testing:
  API_URL: http://localhost:3000
  DEBUG: true
  LOG_LEVEL: info
```

## Project Structure

```
bjornmelin-platform-io/
├── app/                   # Next.js application
├── components/           # React components
├── lib/                  # Shared utilities
├── styles/              # CSS and styling
├── public/              # Static assets
└── tests/               # Test files
```

## Available Scripts

### Development

- `pnpm dev` - Start development server
- `pnpm build` - Build production bundle
- `pnpm start` - Start production server
- `pnpm lint` - Run linting
- `pnpm test` - Run tests

### Infrastructure

- `pnpm cdk:deploy` - Deploy infrastructure
- `pnpm cdk:destroy` - Destroy infrastructure
- `pnpm cdk:diff` - Show infrastructure changes

## Common Tasks

### Creating New Components

1. Create component file
2. Add TypeScript types
3. Implement component
4. Add tests
5. Document usage

### Adding API Endpoints

1. Create API route
2. Add validation
3. Implement handler
4. Add tests
5. Update documentation

## Troubleshooting

### Common Issues

- Port conflicts
- Dependencies issues
- AWS credentials
- Environment variables

### Support Resources

- GitHub Issues
- Documentation
- Team chat
