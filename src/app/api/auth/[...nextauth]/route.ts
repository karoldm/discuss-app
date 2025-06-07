export { GET, POST } from '@/auth'

/**
 * The [...nextauth] catch-all route segment is designed to handle all the necessary 
 * sub-routes for authentication (e.g., /api/auth/signin, /api/auth/callback/github, 
 * /api/auth/signout, etc.).
 * 
 * When you need handle auth routes internally you need to crete the GET and POST
 * handlers like this:
 * export async function GET(request: Request) {...}
 * export async function POST(request: Request) {...}
 * 
 * How we are using a github auth (a external social auth) we can just export the GET
 * and POST handlers from the auth module.
 *  */