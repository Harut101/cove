export function getPostsApi() {
  let controller = null;

  return {
    async call(url) {
      controller = new AbortController();
      let signal = controller.signal;

      const response = await fetch(url, {
        method: "get",
        signal: signal,
      });

      return response.json();
    },

    cancel() {
        if(controller) controller.abort();
    },
  };
}
