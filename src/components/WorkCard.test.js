import { render, screen } from "@testing-library/react";
import WorkCard from "./WorkCard";

describe("WorkCard component", () => {
  let state = "past";
  let title = "Frontend developer";
  let dates = "Aug 2020 - Sep 2021";
  let company = "Apple";
  let description =
    "Build the UI for Netflix platforms. Helped improve team's productivity";
  let tags = ["React.js", "CSS"];

  test("renders heading 'Frontend developer'", () => {
    render(
      <WorkCard
        state={state}
        title={title}
        dates={dates}
        company={company}
        description={description}
        tags={tags}
      />
    );

    const heading = screen.getByText("Frontend developer");
    expect(heading).toBeInTheDocument();
  });

  test("renders company 'Apple'", () => {
    render(
      <WorkCard
        state={state}
        title={title}
        dates={dates}
        company={company}
        description={description}
        tags={tags}
      />
    );

    const paragraph = screen.getByText("Apple");
    expect(paragraph).toBeInTheDocument();
  });

  test("renders not empty tags ul", () => {
    render(
      <WorkCard
        state={state}
        title={title}
        dates={dates}
        company={company}
        description={description}
        tags={tags}
      />
    );

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();

    const listItemsElements = screen.getAllByRole("listitem");
    expect(listItemsElements).not.toHaveLength(0);
  });
});
