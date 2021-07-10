export function addBlog(data) {
  return {
    type: "ADD_BLOG",
    payload:data,
  };
}

export function removeBlog(data) {
    return {
      type: "REMOVE_BLOG",
      payload:data,
    };
  }