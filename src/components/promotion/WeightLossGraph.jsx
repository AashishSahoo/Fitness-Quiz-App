import React from "react";
import { Box, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function WeightLossGraph({ answers }) {
  const currentWeightData = answers[11];
  const goalWeightData = answers[12];
  const eventDateStr = answers[29];

  const currentWeight = currentWeightData?.value
    ? parseFloat(currentWeightData.value)
    : 86;

  const goalWeight = goalWeightData?.value
    ? parseFloat(goalWeightData.value)
    : 70;

  const unit = currentWeightData?.unit || "KG";

  let startDate = new Date();
  if (eventDateStr && eventDateStr !== "skipped") {
    startDate = new Date(eventDateStr);
  }

  const generateWeightData = () => {
    const data = [];
    const totalWeeks = 4;

    const start = currentWeight;
    const end = goalWeight < currentWeight ? goalWeight : currentWeight - 5;

    const totalDrop = start - end;
    const weeklyLoss = totalDrop / totalWeeks;

    for (let week = 0; week <= totalWeeks; week++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + week * 7);

      const weight = start - weeklyLoss * week;

      data.push({
        date: date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        weight: parseFloat(weight.toFixed(1)),
        displayWeight: `${weight.toFixed(1)} ${unit}`,
      });
    }
    return data;
  };

  const chartData = generateWeightData();

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Box
          sx={{
            backgroundColor: "white",
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: 2,
          }}
        >
          <Typography sx={{ fontSize: "0.85rem", fontWeight: 600 }}>
            {payload[0].payload.date}
          </Typography>
          <Typography sx={{ fontSize: "0.85rem", color: "#16a34a" }}>
            Weight: {payload[0].payload.displayWeight}
          </Typography>
        </Box>
      );
    }
    return null;
  };

  return (
    <Box sx={{ width: "100%", height: "auto", mb: 2 }}>
      <Box
        sx={{
          mb: 3,
          p: 3,
          backgroundColor: "#F5F5F5",
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            mb: 4,
            fontSize: { xs: "1.5rem", md: "1.8rem" },
            color: "#000",
          }}
        >
          Here's how your body will change
        </Typography>

        <Box sx={{ width: "90%", height: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
            >
              <defs>
                <linearGradient id="weightGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ef4848ff" stopOpacity={1} />
                  <stop offset="100%" stopColor="#48ee85ff" stopOpacity={1} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12 }}
                stroke="#444"
                ticks={chartData.map((d) => d.date).slice(0, 5)}
              />

              <YAxis
                label={{
                  angle: -90,
                  position: "insideLeft",
                  style: { fontSize: 12 },
                }}
                tick={{ fontSize: 12 }}
                stroke="#444"
                domain={[goalWeight - 2, currentWeight + 2]}
              />

              <Tooltip content={<CustomTooltip />} />

              <Line
                type="monotone"
                dataKey="weight"
                stroke="url(#weightGradient)"
                strokeWidth={8}
                dot={false}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        <Typography sx={{ color: "#999", fontSize: "0.6rem", mt: 2 }}>
          *Based on app-logged user data. Consult a physician first. The chart
          is a general illustration; individual results may vary.
        </Typography>
      </Box>
    </Box>
  );
}
