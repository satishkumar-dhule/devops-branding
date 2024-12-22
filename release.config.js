module.exports = {
    branches: ['main'],
    repositoryUrl: 'https://github.com/satishkumar-dhule/devops-branding.git',
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/github'
    ]
  };
  