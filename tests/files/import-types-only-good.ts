// check that we can import Topology from the types-only package topojson-specification
import type { Topology } from 'topojson-specification';

function log(x?: Topology) {
  console.log(x);
}

log();
