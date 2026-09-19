import { myskills } from "./skills";

describe("skills", () => {
  it("should contain all skill categories", () => {
    expect(myskills.map((item) => item.title)).toEqual([
      "Frontend",
      "Backend",
      "Database",
      "DevOps",
      "Fundamentals",
    ]);
  });

  it("should have valid structure", () => {
    myskills.forEach((category) => {
      expect(category).toEqual(
        expect.objectContaining({
          title: expect.any(String),
          description: expect.any(String),
          skills: expect.any(Array),
        }),
      );

      category.skills.forEach((skill) => {
        expect(skill).toEqual(
          expect.objectContaining({
            title: expect.any(String),
            icon: expect.anything(),
          }),
        );
      });
    });
  });

  it("should have contain important technologies", () => {
    const allSkills = myskills.flatMap((category) =>
      category.skills.map((skill) => skill.title),
    );

    expect(allSkills).toEqual(
      expect.arrayContaining([
        "React.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Nest.js",
        "MongoDB",
        "Postgres SQL",
        "Docker*",
        "AWS (EC2/S3/RDS)",
      ]),
    );
  });
});
