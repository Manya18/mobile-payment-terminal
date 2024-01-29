import type { NextApiRequest, NextApiResponse } from "next";
import { operators } from "../data/operators";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(operators);
  res.status(200).json(operators);
}
