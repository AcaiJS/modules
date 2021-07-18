import { ExpectAssertionInterface } from "../interfaces/expect";
import ExtraOptionsInterface from "../interfaces/extraOptions";
export default function test(title: string, callback: (expect: ExpectAssertionInterface) => Promise<void> | void): ExtraOptionsInterface;
