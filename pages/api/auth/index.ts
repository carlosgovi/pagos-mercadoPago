import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib/firebase";
import { Auth } from "lib/auth";
import { User } from "lib/user";
import { sendCode } from "lib/controller/auth";
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const result = await sendCode(req.body.email);
  return res.send(result);
}
