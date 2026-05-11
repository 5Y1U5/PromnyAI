import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        security: resolve(__dirname, 'security.html'),
        contact: resolve(__dirname, 'contact.html'),
        terms: resolve(__dirname, 'terms.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        download: resolve(__dirname, 'download.html'),
        'docs-index': resolve(__dirname, 'docs/index.html'),
        'docs-getting-started': resolve(__dirname, 'docs/getting-started.html'),
        'docs-login-setup': resolve(__dirname, 'docs/login-setup.html'),
        'docs-ai-guide': resolve(__dirname, 'docs/ai-guide.html'),
        'docs-email-reply': resolve(__dirname, 'docs/email-reply.html'),
        'docs-blog-writing': resolve(__dirname, 'docs/blog-writing.html'),
        'docs-review-reply': resolve(__dirname, 'docs/review-reply.html'),
        'docs-line-message': resolve(__dirname, 'docs/line-message.html'),
        'docs-token-management': resolve(__dirname, 'docs/token-management.html'),
        'docs-hub': resolve(__dirname, 'docs/hub.html'),
        'docs-ai-knowledge': resolve(__dirname, 'docs/ai-knowledge.html'),
        'docs-content-generator': resolve(__dirname, 'docs/content-generator.html'),
        'docs-workflow': resolve(__dirname, 'docs/workflow.html'),
        'docs-ai-knowledge-categories': resolve(__dirname, 'docs/ai-knowledge-categories.html'),
        'blog-index': resolve(__dirname, 'blog/index.html'),
        'blog-why-ai-content-feels-generic': resolve(__dirname, 'blog/why-ai-content-feels-generic.html'),
        'blog-sns-workflow-for-shops': resolve(__dirname, 'blog/sns-workflow-for-shops.html'),
        'blog-beauty-salon-product-sns': resolve(__dirname, 'blog/beauty-salon-product-sns.html'),
      },
    },
  },
})
