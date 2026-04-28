const express = require('express');
const router = express.Router();

// Twoje dane, które zobaczy terminal w pracy
let projects = {
  "1001": {
    "id": "1001",
    "name": "Project Alpha - Produkcja",
    "statuses": {
      "dept1": { "status": 1, "startTime": "08:00", "endTime": "--" }
    }
  },
  "1002": {
    "id": "1002",
    "name": "Project Beta - SATiE System",
    "statuses": {
      "dept2": { "status": 2, "startTime": "09:30", "endTime": "14:00" }
    }
  }
};

router.get('/', (req, res) => {
  res.json(projects);
});

// Aktualizacja statusu projektu
router.post('/:id/status/:dept', (req, res) => {
  const { id, dept } = req.params;
  const { status, startTime, endTime } = req.body;
  
  if (!projects[id]) {
    return res.status(404).json({ error: 'Project not found' });
  }
  
  if (!projects[id].statuses) {
    projects[id].statuses = {};
  }
  
  projects[id].statuses[dept] = {
    status,
    startTime: startTime || projects[id].statuses[dept]?.startTime,
    endTime: endTime || projects[id].statuses[dept]?.endTime
  };
  
  res.json(projects[id]);
});

module.exports = router;
