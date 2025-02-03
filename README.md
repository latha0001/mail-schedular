# Mailing Scheduler

This project is a mailing scheduling feature built with Next.js 13, using the App Router and latest best practices in the Next.js ecosystem.

## Features

- Create new mailings with mailer, list, and schedule
- Mock API for CRUD operations on mailings
- Form validation using Zod
- Styled with Tailwind CSS and shadcn/ui components

## Prerequisites

- Node.js 14.6.0 or newer
- npm or yarn

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mailing-scheduler.git
   cd mailing-scheduler
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Contains the main application code
  - `api/`: API routes for mock data
  - `components/`: Reusable React components
  - `mailing/`: Mailing-related pages
  - `page.tsx`: Home page
- `lib/`: Utility functions and type definitions

## Technologies Used

- Next.js 13 with App Router
- React Server Components
- Server Actions
- Tailwind CSS
- shadcn/ui components
- Zod for form validation
- React Hook Form
- date-fns for date manipulation

## Deployment

To deploy this project, you can use Vercel, which is optimized for Next.js applications:

1. Push your code to a GitHub repository.
2. Sign up for a Vercel account at https://vercel.com.
3. Create a new project and import your GitHub repository.
4. Vercel will automatically detect that it's a Next.js project and set up the build configuration.
5. Deploy the project.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
