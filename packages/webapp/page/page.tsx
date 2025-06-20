// Generated by An Kun
import { neon } from '@neondatabase/serverless';

export default function Page() {
  async function create(form_data: FormData) {
    'use server';
    // Kết nối tới Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);
    const comment = form_data.get('comment');
    // Thêm comment vào bảng comments
    await sql('INSERT INTO comments (comment) VALUES ($1)', [comment]);
  }

  return (
    <form action={create}>
      <input type="text" placeholder="write a comment" name="comment" />
      <button type="submit">Submit</button>
    </form>
  );
}