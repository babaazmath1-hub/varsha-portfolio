import { useState } from 'react';
import { 
  BarChart3, 
  ShieldAlert, 
  Cpu, 
  Compass, 
  EyeOff, 
  Sliders, 
  Radio, 
  Activity, 
  AlertTriangle,
  Play
} from 'lucide-react';

export const DashboardVisual: React.FC = () => {
  return (
    <div className="w-full h-48 sm:h-56 bg-[#0B0F19] p-4 rounded-2xl border border-white/[0.08] flex flex-col justify-between overflow-hidden relative font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[11px] text-[#9CA3AF]">
        <div className="flex items-center gap-1.5">
          <BarChart3 className="w-3.5 h-3.5 text-[#22D3EE]" />
          <span>DSU_Cohort_Analytics.pbix</span>
        </div>
        <span className="text-[#8B5CF6] text-[10px]">Power BI · Live Filter</span>
      </div>

      {/* Mini KPI row */}
      <div className="grid grid-cols-3 gap-2 my-2">
        <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.05]">
          <div className="text-[9px] text-[#9CA3AF]">Mean Score</div>
          <div className="text-sm font-bold text-white">88.4%</div>
        </div>
        <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.05]">
          <div className="text-[9px] text-[#9CA3AF]">Pass Rate</div>
          <div className="text-sm font-bold text-emerald-400">96.2%</div>
        </div>
        <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.05]">
          <div className="text-[9px] text-[#9CA3AF]">Correlation</div>
          <div className="text-sm font-bold text-[#22D3EE]">r = 0.81</div>
        </div>
      </div>

      {/* Simulated Bar chart */}
      <div className="flex items-end justify-between gap-1.5 h-20 pt-2 px-1">
        {[45, 68, 82, 60, 95, 75, 88, 92].map((height, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              style={{ height: `${height}%` }}
              className={`w-full rounded-t-md transition-all duration-500 ${
                i % 2 === 0
                  ? 'bg-gradient-to-t from-[#8B5CF6]/50 to-[#8B5CF6]'
                  : 'bg-gradient-to-t from-[#22D3EE]/50 to-[#22D3EE]'
              }`}
            />
            <span className="text-[8px] text-[#9CA3AF]">C{i + 1}</span>
          </div>
        ))}
      </div>

      <div className="text-[9px] text-slate-500 flex justify-between pt-1 border-t border-white/[0.04]">
        <span>Pandas Imputed Matrix</span>
        <span>Seaborn Heatmap Verified</span>
      </div>
    </div>
  );
};

export const PredictionVisual: React.FC = () => {
  const [years, setYears] = useState(3.5);
  // Simulated linear regression formula: base 4.5 LPA + 1.8 * years
  const predictedSalary = (4.5 + years * 1.85).toFixed(2);

  return (
    <div className="w-full h-48 sm:h-56 bg-[#0B0F19] p-4 rounded-2xl border border-white/[0.08] flex flex-col justify-between overflow-hidden relative font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[11px] text-[#9CA3AF]">
        <div className="flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-[#8B5CF6]" />
          <span>RegressionInference.py</span>
        </div>
        <span className="text-emerald-400 text-[10px]">Scikit-learn Model</span>
      </div>

      {/* Interactive slider */}
      <div className="space-y-1.5 my-1">
        <div className="flex justify-between text-[11px]">
          <span className="text-slate-400">Experience Input:</span>
          <span className="text-[#22D3EE] font-bold">{years} Years</span>
        </div>
        <input
          type="range"
          min="0"
          max="10"
          step="0.5"
          value={years}
          onChange={(e) => setYears(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#8B5CF6]"
        />
      </div>

      {/* Prediction Output Display */}
      <div className="p-3 rounded-xl bg-gradient-to-r from-[#8B5CF6]/15 via-black/40 to-[#22D3EE]/15 border border-white/[0.08] flex items-center justify-between">
        <div>
          <div className="text-[10px] text-[#9CA3AF]">Estimated Annual Package</div>
          <div className="text-lg font-bold text-white flex items-baseline gap-1">
            <span>₹ {predictedSalary}</span>
            <span className="text-xs text-[#22D3EE]">LPA</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[9px] text-[#9CA3AF]">Feature Scaling</div>
          <div className="text-[11px] text-emerald-400 font-semibold">StandardScaler</div>
        </div>
      </div>

      <div className="text-[9px] text-slate-500 flex justify-between pt-1 border-t border-white/[0.04]">
        <span>MSE Evaluated</span>
        <span>Residual Diagnostics Checked</span>
      </div>
    </div>
  );
};

export const CyberSecurityVisual: React.FC = () => {
  return (
    <div className="w-full h-48 sm:h-56 bg-[#0B0F19] p-4 rounded-2xl border border-white/[0.08] flex flex-col justify-between overflow-hidden relative font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[11px] text-[#9CA3AF]">
        <div className="flex items-center gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5 text-red-400 animate-pulse" />
          <span>Cognitive_Defense_Engine</span>
        </div>
        <span className="text-red-400 text-[10px] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
          MONITORING
        </span>
      </div>

      {/* Network Anomaly Radar Display */}
      <div className="grid grid-cols-2 gap-2 my-2">
        <div className="p-2.5 rounded-xl bg-black/50 border border-white/[0.06] space-y-1">
          <div className="text-[9px] text-[#9CA3AF]">Traffic Classifier</div>
          <div className="text-xs font-bold text-white flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>99.4% Benign</span>
          </div>
          <div className="text-[9px] text-emerald-400">Flow Verified</div>
        </div>

        <div className="p-2.5 rounded-xl bg-red-950/20 border border-red-500/20 space-y-1">
          <div className="text-[9px] text-red-300">Anomaly Incident</div>
          <div className="text-xs font-bold text-red-400 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Port Scan Neutralized</span>
          </div>
          <div className="text-[9px] text-slate-400">Payload Dropped</div>
        </div>
      </div>

      {/* Live Log Stream */}
      <div className="text-[10px] space-y-0.5 text-slate-400">
        <div className="truncate"><span className="text-[#8B5CF6]">[SYS]</span> Packet ingest: 14,200 fps</div>
        <div className="truncate"><span className="text-[#22D3EE]">[AI]</span> Threat inference: 0 flags pending</div>
      </div>

      <div className="text-[9px] text-slate-500 flex justify-between pt-1 border-t border-white/[0.04]">
        <span>Real-Time Alert Dispatch</span>
        <span>Python & TensorFlow</span>
      </div>
    </div>
  );
};

export const ExtensionVisual: React.FC = () => {
  const [zenMode, setZenMode] = useState(true);

  return (
    <div className="w-full h-48 sm:h-56 bg-[#0B0F19] p-4 rounded-2xl border border-white/[0.08] flex flex-col justify-between overflow-hidden relative font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[11px] text-[#9CA3AF]">
        <div className="flex items-center gap-1.5">
          <EyeOff className="w-3.5 h-3.5 text-[#22D3EE]" />
          <span>YouTube_Focus_Buddy.crx</span>
        </div>
        <span className="text-emerald-400 text-[10px]">Chrome API Active</span>
      </div>

      {/* Extension control toggles */}
      <div className="space-y-2 my-1">
        <div
          onClick={() => setZenMode(!zenMode)}
          className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between cursor-pointer hover:bg-white/[0.06] transition-colors"
        >
          <div className="flex items-center gap-2 text-xs text-white">
            <Sliders className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>Distraction Shield</span>
          </div>
          <div className={`w-9 h-5 rounded-full p-0.5 transition-colors ${zenMode ? 'bg-[#8B5CF6]' : 'bg-slate-700'}`}>
            <div className={`w-4 h-4 rounded-full bg-white transition-transform ${zenMode ? 'translate-x-4' : 'translate-x-0'}`} />
          </div>
        </div>

        <div className="flex items-center justify-between px-2 text-[10px] text-slate-400">
          <span>{zenMode ? 'Comments & Sidebars Hidden' : 'Full YouTube Interface'}</span>
          <span className="text-[#22D3EE]">Zen Mode {zenMode ? 'ON' : 'OFF'}</span>
        </div>
      </div>

      <div className="p-2 rounded-xl bg-black/40 border border-white/[0.04] text-[10px] text-slate-400 flex items-center gap-2">
        <Play className="w-3 h-3 text-[#22D3EE]" />
        <span>Focused study session without algorithmic rabbit holes</span>
      </div>

      <div className="text-[9px] text-slate-500 flex justify-between pt-1 border-t border-white/[0.04]">
        <span>Chrome Storage API</span>
        <span>Zero-Dependency JS</span>
      </div>
    </div>
  );
};

export const IotVisual: React.FC = () => {
  return (
    <div className="w-full h-48 sm:h-56 bg-[#0B0F19] p-4 rounded-2xl border border-white/[0.08] flex flex-col justify-between overflow-hidden relative font-mono select-none">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[11px] text-[#9CA3AF]">
        <div className="flex items-center gap-1.5">
          <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>IoT_Telemetry_Beacon</span>
        </div>
        <span className="text-emerald-400 text-[10px]">GPS Lock: 11.0168° N</span>
      </div>

      {/* Simulated Map Coordinates & Alert */}
      <div className="p-3 rounded-xl bg-gradient-to-r from-red-950/30 to-black/60 border border-red-500/20 space-y-1.5 my-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-white flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>Emergency Telemetry</span>
          </span>
          <span className="text-[9px] px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
            AUTO-DISPATCH READY
          </span>
        </div>
        <div className="text-[11px] text-slate-300">
          Impact Threshold: <strong className="text-amber-300">&gt; 4.2G Trigger</strong>
        </div>
        <div className="text-[10px] text-slate-400">
          Automated SMS & GPS coordinates sent to emergency responders
        </div>
      </div>

      <div className="text-[9px] text-slate-500 flex justify-between pt-1 border-t border-white/[0.04]">
        <span>Instant Golden Hour Trigger</span>
        <span>Python & Embedded Logic</span>
      </div>
    </div>
  );
};
