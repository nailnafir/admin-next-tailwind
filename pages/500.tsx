import React from "react";
import EmptyState from "@/layouts/EmptyState/EmptyState";
import serverErrorAnimation from "@/public/images/illustrations/500.json";

export default function _500() {
  return (
    <EmptyState
      lottie={serverErrorAnimation}
      title="500"
      subtitle="Internal Server Error"
      button="Go back home"
    />
  );
}
