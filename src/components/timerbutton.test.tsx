import React from "react"
import { shallow,ShallowWrapper } from "enzyme"
import TimerButton from "./timerbutton"

describe("TimerButton", () => {
  let container: any

  beforeEach(() => {
    container = shallow(
      <TimerButton
      className="timer"
        buttonAction={jest.fn()}
        buttonValue={""}
      />
    )
  })

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })
})