import { catenaryAt } from '@lp-labs/catenary-curve';
if (Math.abs(catenaryAt(0, 2).y - 0) > 1e-10) throw new Error('Geometry');
// @ts-expect-error invalid argument must be rejected by declarations
catenaryAt('0', 2);
