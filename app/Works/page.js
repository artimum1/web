"use client"
import PageTransition from '../pageTransition';

export default function MyComponent() {
  return (
    <PageTransition className="r-page page">
      <div id="test" className="page3 page">
        Works
      </div>
    </PageTransition>
  );
}
