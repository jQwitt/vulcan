import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import useQueryParam from "../../src/query-params/useQueryParam";

describe("useQueryParam hook", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    // set initial location
    // jsdom allows setting href directly
    (window as any).location.href = "http://localhost/?foo=bar";
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  test("reads initial query param and updates URL when update is called", () => {
    const exposed: { current: any } = { current: null };

    function TestComp() {
      exposed.current = useQueryParam("foo");
      return null;
    }

    act(() => {
      createRoot(container).render(React.createElement(TestComp));
    });

    // initial value from URL
    expect(exposed.current.foo).toBe("bar");

    act(() => {
      exposed.current.update("baz");
    });

    // URL should be updated
    expect(window.location.search).toContain("foo=baz");

    // hook state should update
    expect(exposed.current.foo).toBe("baz");
  });
});
