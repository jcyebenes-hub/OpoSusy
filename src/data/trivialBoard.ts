import { TrivialColor, COLOR_ORDER, TRIVIAL_CATEGORIES } from './trivial';

export interface BoardNode {
  id: string;
  type: 'center' | 'hq' | 'rim' | 'spoke';
  color: TrivialColor | 'all';
  isHQ: boolean;
  x: number;
  y: number;
  angleDeg: number;
  radius: number;
  neighbors: string[];
  name: string;
}

const CENTER_X = 400;
const CENTER_Y = 400;
const OUTER_RADIUS = 300;
const SPOKE_STEPS = 4; // 4 intermediate steps between center and HQ

export function generateTrivialBoard(): Record<string, BoardNode> {
  const nodes: Record<string, BoardNode> = {};

  // 1. Center Hub
  nodes['center'] = {
    id: 'center',
    type: 'center',
    color: 'all',
    isHQ: false,
    x: CENTER_X,
    y: CENTER_Y,
    angleDeg: 0,
    radius: 0,
    neighbors: [],
    name: 'Casilla Central (Plaza nº 204)'
  };

  // 6 Sectors: Angles at -90 (Top), -30, 30, 90, 150, 210
  // Each sector i (0..5) has an HQ at OUTER_RADIUS and angle = -90 + i * 60
  const sectorAngles = [ -90, -30, 30, 90, 150, 210 ];

  // Create Headquarters & Spokes
  for (let s = 0; s < 6; s++) {
    const angleDeg = sectorAngles[s];
    const rad = (angleDeg * Math.PI) / 180;
    const hqColor = COLOR_ORDER[s];
    const hqId = `hq_${s}`;

    // HQ Node at rim
    const hqX = Math.round(CENTER_X + OUTER_RADIUS * Math.cos(rad));
    const hqY = Math.round(CENTER_Y + OUTER_RADIUS * Math.sin(rad));

    nodes[hqId] = {
      id: hqId,
      type: 'hq',
      color: hqColor,
      isHQ: true,
      x: hqX,
      y: hqY,
      angleDeg,
      radius: OUTER_RADIUS,
      neighbors: [],
      name: `Quesito ${TRIVIAL_CATEGORIES[hqColor].name}`
    };

    // Spoke nodes between Center and HQ
    const spokeIds: string[] = [];
    for (let step = 1; step <= SPOKE_STEPS; step++) {
      const stepRadius = Math.round((OUTER_RADIUS / (SPOKE_STEPS + 1)) * step);
      const stepX = Math.round(CENTER_X + stepRadius * Math.cos(rad));
      const stepY = Math.round(CENTER_Y + stepRadius * Math.sin(rad));
      const spokeId = `spoke_${s}_${step}`;

      // Cycle colors along spoke so player gets variety
      const spokeColor = COLOR_ORDER[(s + step) % 6];

      nodes[spokeId] = {
        id: spokeId,
        type: 'spoke',
        color: spokeColor,
        isHQ: false,
        x: stepX,
        y: stepY,
        angleDeg,
        radius: stepRadius,
        neighbors: [],
        name: `Radio ${s + 1} (${TRIVIAL_CATEGORIES[spokeColor].name})`
      };
      spokeIds.push(spokeId);
    }

    // Connect Center <-> spoke 1
    nodes['center'].neighbors.push(spokeIds[0]);
    nodes[spokeIds[0]].neighbors.push('center');

    // Connect spoke steps together
    for (let i = 0; i < spokeIds.length - 1; i++) {
      nodes[spokeIds[i]].neighbors.push(spokeIds[i + 1]);
      nodes[spokeIds[i + 1]].neighbors.push(spokeIds[i]);
    }

    // Connect last spoke step <-> HQ
    nodes[spokeIds[spokeIds.length - 1]].neighbors.push(hqId);
    nodes[hqId].neighbors.push(spokeIds[spokeIds.length - 1]);
  }

  // 3. Connect Outer Rim (between consecutive Headquarters)
  // There are 5 rim spaces between each consecutive pair of HQs (sector s and (s+1)%6)
  const RIM_STEPS = 5;
  for (let s = 0; s < 6; s++) {
    const nextS = (s + 1) % 6;
    const hqStartId = `hq_${s}`;
    const hqEndId = `hq_${nextS}`;
    const startAngle = sectorAngles[s];
    // 60 degrees between sectors
    const stepDeg = 60 / (RIM_STEPS + 1);

    let prevId = hqStartId;

    for (let r = 1; r <= RIM_STEPS; r++) {
      const angle = startAngle + r * stepDeg;
      const rad = (angle * Math.PI) / 180;
      const rimX = Math.round(CENTER_X + OUTER_RADIUS * Math.cos(rad));
      const rimY = Math.round(CENTER_Y + OUTER_RADIUS * Math.sin(rad));
      const rimId = `rim_${s}_${r}`;

      // Alternate colors along the rim
      const rimColor = COLOR_ORDER[(s * 2 + r) % 6];

      nodes[rimId] = {
        id: rimId,
        type: 'rim',
        color: rimColor,
        isHQ: false,
        x: rimX,
        y: rimY,
        angleDeg: angle,
        radius: OUTER_RADIUS,
        neighbors: [prevId],
        name: `Casilla ${TRIVIAL_CATEGORIES[rimColor].name}`
      };

      nodes[prevId].neighbors.push(rimId);
      prevId = rimId;
    }

    // Connect last rim node to the next HQ
    nodes[prevId].neighbors.push(hqEndId);
    nodes[hqEndId].neighbors.push(prevId);
  }

  return nodes;
}

export const BOARD_NODES = generateTrivialBoard();

/**
 * Computes all nodes reachable in exactly `steps` moves from `startId`,
 * preventing immediate 1-step reversal (cannot go A -> B -> A).
 */
export function getReachableNodes(startId: string, steps: number): string[] {
  if (steps <= 0) return [startId];

  // Path element: { current: string, prev: string | null }
  let currentFrontier: { current: string; prev: string | null }[] = [
    { current: startId, prev: null }
  ];

  for (let step = 0; step < steps; step++) {
    const nextFrontier: { current: string; prev: string | null }[] = [];

    for (const item of currentFrontier) {
      const node = BOARD_NODES[item.current];
      if (!node) continue;

      for (const neighborId of node.neighbors) {
        // Do not allow immediately going back to where we just came from
        if (neighborId === item.prev) continue;
        nextFrontier.push({ current: neighborId, prev: item.current });
      }
    }
    currentFrontier = nextFrontier;
  }

  // Return unique reachable node IDs
  return Array.from(new Set(currentFrontier.map((f) => f.current)));
}
