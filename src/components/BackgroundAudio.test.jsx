import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BackgroundAudio from "./BackgroundAudio";
import { Howl } from "howler";
import "@testing-library/jest-dom/extend-expect"; // for additional matchers like toHaveTextContent

jest.mock("howler", () => {
  return {
    Howl: jest.fn().mockImplementation(() => {
      return {
        play: jest.fn(),
        stop: jest.fn(),
        mute: jest.fn(),
      };
    }),
  };
});

describe("BackgroundAudio Component", () => {
  let soundMock;

  beforeEach(() => {
    soundMock = new Howl();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should initialize and play audio on mount", () => {
    render(<BackgroundAudio />);
    expect(Howl).toHaveBeenCalledWith({
      src: ["/public/Schneit.mp3"],
      autoplay: true,
      loop: true,
      volume: 0.4,
      mute: true,
    });
    expect(soundMock.play).toHaveBeenCalled();
  });

  test("should toggle mute state when button is clicked", () => {
    const { getByRole } = render(<BackgroundAudio />);
    const button = getByRole("button");

    // Initial state should be muted
    expect(button).toHaveTextContent("🔇");

    // Click to unmute
    fireEvent.click(button);
    expect(soundMock.mute).toHaveBeenCalledWith(false);
    expect(button).toHaveTextContent("🔊");

    // Click to mute again
    fireEvent.click(button);
    expect(soundMock.mute).toHaveBeenCalledWith(true);
    expect(button).toHaveTextContent("🔇");
  });

  test("should stop audio on unmount", () => {
    const { unmount } = render(<BackgroundAudio />);
    unmount();
    expect(soundMock.stop).toHaveBeenCalled();
  });
});
