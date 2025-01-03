import { z } from "zod";

export default z.object({
    cv: z.string("You must choose a CV file"),
});
