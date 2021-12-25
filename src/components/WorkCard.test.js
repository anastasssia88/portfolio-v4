import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import WorkCard from "./WorkCard";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders Card.js data", () => {
  // state, title, dates, company, description, tags
  let state = "past";
  let title = "Frontend developer";
  let dates = "Aug 2020 - Sep 2021";
  let company = "Netflix";
  let description =
    "Build the UI for Netflix platforms. Helped improve team's productivity";
  let tags = ["React.js", "CSS"];

  act(() => {
    render(
      <WorkCard
        state={state}
        title={title}
        dates={dates}
        company={company}
        description={description}
        tags={tags}
      />,
      container
    );
  });
  expect(container.firstChild.querySelector("h3").textContent).toBe(title);
  expect(container.firstChild.querySelectorAll("p")[0].textContent).toBe(dates);
  expect(container.firstChild.querySelectorAll("p")[1].textContent).toBe(
    company
  );
  expect(container.firstChild.querySelectorAll("p")[2].textContent).toBe(
    "- Build the UI for Netflix platforms"
  );
  expect(container.firstChild.querySelectorAll("p")[3].textContent).toBe(
    "- Helped improve team's productivity"
  );
  expect(
    container.firstChild.querySelector("ul li:first-child").textContent
  ).toBe("React.js");
  expect(
    container.firstChild.querySelector("ul li:last-child").textContent
  ).toBe("CSS");
});