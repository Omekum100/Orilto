import { describe, expect, it } from "vitest";
import { caseStudies } from "../content/case-studies";

describe("case study claims", () => {
  it("does not include unsupported performance claims", () => {
    const text = JSON.stringify(caseStudies).toLowerCase();
    expect(text).not.toContain("increased sales");
    expect(text).not.toContain("conversion improvement");
    expect(text).not.toContain("revenue increased");
    expect(text).not.toContain("booking automated");
    expect(text).not.toContain("accuracy improved");
  });
});
