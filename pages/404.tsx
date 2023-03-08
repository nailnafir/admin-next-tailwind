import React from "react";
import EmptyState from "@/layouts/EmptyState/EmptyState";
import notFoundAnimation from "@/public/images/illustrations/404.json";

export default function _404() {
  return (
    <EmptyState
      lottie={notFoundAnimation}
      title="404"
      subtitle="Page Not Found"
      button="Go back home"
    />
  );
}
