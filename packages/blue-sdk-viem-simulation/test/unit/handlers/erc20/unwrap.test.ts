import _ from "lodash";
import { parseUnits } from "viem";

import { describe, expect, test } from "vitest";
import {
  Erc20Errors,
  UnknownWrappedTokenError,
  simulateOperation,
} from "../../../../src";
import { tokenA, tokenB, userA, userB, wrapFixtures } from "../../fixtures";

const type = "Erc20_Unwrap";

describe(type, () => {
  const amount = parseUnits("1", 18);

  test("should unwrap", () => {
    const result = simulateOperation(
      {
        type,
        sender: userB,
        address: tokenB,
        args: {
          amount,
          receiver: userA, // Replaced with sender because not ERC20Wrapper.
        },
      },
      wrapFixtures,
    );

    const expected = _.cloneDeep(wrapFixtures);
    // expected.cacheId = expect.any(String);
    expected.holdings[userB]![tokenB]!.balance -= amount;
    expected.holdings[userB]![tokenA]!.balance += parseUnits("1", 6);

    expect(result).toEqual(expected);
  });

  test("should throw if unwrapped token", () => {
    expect(() =>
      simulateOperation(
        {
          type,
          sender: userB,
          address: tokenA,
          args: {
            amount,
            receiver: userA,
          },
        },
        wrapFixtures,
      ),
    ).toThrow(new UnknownWrappedTokenError(tokenA));
  });

  test("should throw if insufficient wallet balance", () => {
    expect(() =>
      simulateOperation(
        {
          type,
          sender: userA,
          address: tokenB,
          args: {
            amount,
            receiver: userA,
          },
        },
        wrapFixtures,
      ),
    ).toThrow(new Erc20Errors.InsufficientBalance(tokenB, userA));
  });
});
