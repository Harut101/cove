import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
const PostsPage = lazy(() => import("./posts-page"));

export default function Pages() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}
