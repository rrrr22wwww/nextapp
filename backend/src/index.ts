const server = Bun.serve({
  port: 8000,
  async fetch(req) { 
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return new Response("Главная страница");
    }

    if (url.pathname === "/posts") {
      if (req.method === "GET") {

        const posts:string = "lokwwwas";

        return Response.json(posts);
      }

      if (req.method === "POST") {
        try {

          const newPost = await req.json();
          console.log("Получен новый пост:", newPost);
          return Response.json({ success: true, post: newPost }, { status: 201 });
        } catch (error) {
          return new Response("Неверный формат JSON", { status: 400 });
        }
      }
    }

    return new Response("Страница не найдена", { status: 404 });
  },
  error(error) {

    return new Response("Произошла внутренняя ошибка сервера", { status: 500 });
  }
});

console.log(`Сервер запущен на http://${server.hostname}:${server.port}`);