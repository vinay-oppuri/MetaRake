export const MOCK_RAKE_PLANS = [
  { planId: 'RP-001', origin: 'Stockyard A', destination: 'Port X', status: 'Scheduled', departure: '2024-08-01 10:00' },
  { planId: 'RP-002', origin: 'Stockyard B', destination: 'Port Y', status: 'In Transit', departure: '2024-07-30 14:00' },
  { planId: 'RP-003', origin: 'Stockyard A', destination: 'Port X', status: 'Completed', departure: '2024-07-28 08:00' },
  { planId: 'RP-004', origin: 'Stockyard C', destination: 'Port Z', status: 'Scheduled', departure: '2024-08-02 12:00' },
  { planId: 'RP-005', origin: 'Stockyard B', destination: 'Port Y', status: 'Delayed', departure: '2024-07-31 16:00' },
  { planId: 'RP-006', origin: 'Stockyard A', destination: 'Port Z', status: 'Scheduled', departure: '2024-08-03 09:00' },
  { planId: 'RP-007', origin: 'Stockyard C', destination: 'Port X', status: 'Completed', departure: '2024-07-29 11:00' },
];

export const MOCK_DATASETS = [
  { id: 'DS-01', name: 'Stockyard Master', lastUpdated: '2024-07-30 09:00', records: 5, status: 'Validated' },
  { id: 'DS-02', name: 'Sales Orders Q3', lastUpdated: '2024-07-30 08:30', records: 1502, status: 'Validated' },
  { id: 'DS-03', name: 'Wagon Fleet List', lastUpdated: '2024-07-29 15:00', records: 850, status: 'Validated' },
  { id: 'DS-04', name: 'Port Capacity', lastUpdated: '2024-07-28 12:00', records: 3, status: 'Validated' },
];

export const MOCK_CANDIDATES = [
  { candidateId: 'RC-A-01', rakeType: 'BOXN', wagons: 59, tonnage: 4500, origin: 'Stockyard A', destination: 'Port X', score: 95 },
  { candidateId: 'RC-B-01', rakeType: 'BOBYN', wagons: 58, tonnage: 4200, origin: 'Stockyard B', destination: 'Port Y', score: 92 },
  { candidateId: 'RC-A-02', rakeType: 'BOXN', wagons: 59, tonnage: 4550, origin: 'Stockyard A', destination: 'Port Z', score: 88 },
  { candidateId: 'RC-C-01', rakeType: 'BOXN', wagons: 57, tonnage: 4300, origin: 'Stockyard C', destination: 'Port X', score: 85 },
];

export const MOCK_OPTIMIZATION_LOGS = [
  '[INFO] Starting optimization process...',
  '[INFO] Loading parameters: constraints=high, objective=max_throughput',
  '[INFO] Loaded 4 candidate rakes.',
  '[INFO] Running simulation iteration 1/1000...',
  '[INFO] Iteration 500: Best solution score: 0.92',
  '[WARN] Constraint violation detected: Wagon availability at Stockyard B.',
  '[INFO] Adjusting plan for Stockyard B.',
  '[INFO] Iteration 1000: Best solution score: 0.95',
  '[SUCCESS] Optimization complete. Found 3 optimal plans.',
];

export const MOCK_SIMULATION_DATA = [
  { time: '00:00', throughput: 0, queue_length: 5 },
  { time: '04:00', throughput: 2000, queue_length: 3 },
  { time: '08:00', throughput: 4500, queue_length: 8 },
  { time: '12:00', throughput: 6000, queue_length: 6 },
  { time: '16:00', throughput: 7500, queue_length: 10 },
  { time: '20:00', throughput: 8200, queue_length: 4 },
];

export const MOCK_REPLAN_FEED = [
  { id: 1, source: 'system', title: 'Port Congestion Alert', description: 'High congestion at Port Y. Rerouting RP-005.', timestamp: '2 minutes ago' },
  { id: 2, source: 'user', title: 'Priority Order Added', description: 'SO-9876 flagged as high-priority. Initiating replan.', timestamp: '15 minutes ago' },
  { id: 3, source: 'system', title: 'Wagon Defect Detected', description: 'Wagon #54321 reported defect. Removed from candidate RC-A-02.', timestamp: '3 hours ago' },
  { id: 4, source: 'system', title: 'Weather Warning', description: 'Cyclone warning for coastal region. Plans may be delayed.', timestamp: '8 hours ago' },
];

export const MOCK_PLAN_DETAILS_CHART = {
  data: [
    { name: 'Iron Ore Fines', tons: 2500, wagons: 33 },
    { name: 'Iron Ore Lumps', tons: 1500, wagons: 20 },
    { name: 'Pellets', tons: 550, wagons: 6 },
  ],
  config: {
    tons: { label: 'Tonnage (T)', color: 'hsl(var(--chart-1))' },
    wagons: { label: 'Wagons', color: 'hsl(var(--chart-2))' },
  },
};

export const MOCK_MONITORING_DATA = [
    { name: 'API Latency', value: '55ms', status: 'success' },
    { name: 'DB Queries', value: '120/s', status: 'success' },
    { name: 'Optimization Engine', value: 'Idle', status: 'success' },
    { name: 'ML Model API', value: '200 OK', status: 'success' },
    { name: 'Data Ingestion Queue', value: '3 items', status: 'warning' },
]
