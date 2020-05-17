import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status in props should be in state", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("SUBSCRIBE TO BASIC");
  });
   test("after creation span should be displayed with status", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("SUBSCRIBE TO BASIC");
  });
});