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

module.exports = router;
