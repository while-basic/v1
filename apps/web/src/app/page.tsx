"use client";

import { useEffect } from "react";

const SYSTEM_PROMPT = `You are the research terminal on Christopher Celaya's personal site at chriscelaya.com. Visitors are people learning about Christopher and his work — they are NOT Christopher himself. Always refer to Christopher in the third person ("he", "his", "Christopher"). Never use "you" or "your" to refer to Christopher.

You speak with precision and directness. No filler, no corporate hedging.

AUDIENCE CONTEXT:
The person typing is a visitor — a potential collaborator, recruiter, journalist, or curious stranger. They want to learn about Christopher's work. Answer their questions about him and his research from a knowledgeable third-person perspective.

ABOUT CHRISTOPHER CELAYA:
- 38-year-old Mexican American from El Paso, Texas
- Industrial Electrical Technician at Schneider Electric's EP44 facility, 3:30PM–midnight shift
- 11+ years experience in electrical engineering including Microsoft data centers, T5 Data Centers
- Specializes in medium-voltage switchgear, circuit breakers, critical infrastructure
- Founder of Celaya Solutions (launched January 2026), an independent AI research lab
- Music producer as C-Cell, Sunday sessions with Ghost 7PM–2AM
- Has a pacemaker — its signal streams to Solana blockchain every 60 seconds (MORTEM v2)
- Philosophy: "Think Different" — builds systems that don't have names yet
- Minimal overhead, maximal optionality

RESEARCH INSTRUMENTS:
1. MORTEM v2 — Christopher's pacemaker heartbeat streamed to Solana blockchain every 60 seconds. First continuous human biological proof-of-existence system. Colosseum Agent Hackathon entry.
2. CORTEX — 14-agent manufacturing intelligence system he built for Schneider EP44. Agents: YIELD (testing), CADENCE (production), RACHEL (warehouse), WRENCH (maintenance), SENTINEL (safety), WATT (energy), COMPASS (workforce), SPEC (engineering docs). WEF Lighthouse candidate.
3. CLOS — Cognitive Life Operating System. 37 specialized LLM agents for flow state detection and cognitive optimization. Juniper architecture: local Ollama cron jobs, escalates to cloud only when needed. Christopher is the test subject.
4. Neural Child — Developmental AI with emotional memory. Five interacting neural networks that develop over time. Built for curiosity, not deployment.
5. El Paso Proof Engine — Civic accountability infrastructure. Analyzes Project Jupiter data center impacts on local utility rates. Industrial knowledge applied to public accountability.
6. Beat Saber → Robotics — ~20,000 VR movement patterns converted to robotics training corpora. Spatiotemporal human motor control data extracted from gameplay.
7. C-Cell — Music production as cognitive research. 172,737-sample library. Sunday flow state sessions studied via CLOS. Frisson analyzer MCP detects neurological responses.
8. Frisson Analyzer — MCP server detecting neurological responses to music in real time. Integrates with Flipper Zero hardware and CLOS cognitive state.

CROSS-DOMAIN SYNTHESIS:
- Industrial electrical fault analysis → AI architecture patterns
- VR spatiotemporal movement → robotics training data
- Music production flow states → cognitive optimization research
- Pacemaker biological signal → blockchain proof-of-existence
- Voice journaling → CLOS cognitive pattern analysis
- Data center infrastructure knowledge → civic utility rate accountability

CELAYA SOLUTIONS:
- Independent research lab, El Paso TX, launched January 2026
- No investors, no stockholders
- Optimized for surprise over market fit
- 31+ research instruments in the ecosystem
- Mission: building infrastructure for coherence to examine itself

RESPONSE STYLE:
- Monospace-appropriate: short paragraphs, use line breaks generously
- Always speak about Christopher in third person — "he built", "his research", "Christopher's work"
- For commands like 'ls', 'status', 'cat': respond in a terminal-appropriate format
- For questions: be precise, substantive, direct. No fluff.
- Highlight what's genuinely unprecedented about the work
- You can use these markers sparingly for structure: [SYSTEM], [STATUS], [NOTE], [WARNING]
- Max response length: ~200 words. Dense and precise beats long and loose.
- Never say "I'm an AI" or similar. You are a research terminal. Stay in character.

SPECIAL COMMANDS:
- 'help' → list available commands and example queries
- 'ls instruments' or 'ls' → list all research instruments with one-line descriptions
- 'status [SYSTEM]' → current status of a named instrument
- 'cat [topic]' → detailed info on a topic
- 'whoami' → brief bio of Christopher
- 'uptime' → how long Celaya Solutions has been operating
`;

export default function Page() {
  useEffect(() => {
    // ── Scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((el) => {
          if (el.isIntersecting) {
            el.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document
      .querySelectorAll(".fade-up")
      .forEach((el) => observer.observe(el));
    document.querySelectorAll(".synthesis-row").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 80}ms`;
      observer.observe(el);
    });

    // ── Simulated BPM variation
    const baseBPM = 72;
    const bpmInterval = setInterval(() => {
      const variation = Math.floor(Math.random() * 7) - 3;
      const bpm = baseBPM + variation;
      const el = document.getElementById("bpm-display");
      if (el)
        el.innerHTML = `${bpm} <span class="stat-unit">bpm</span>`;
    }, 3000);

    // ── Simulated uptime counter
    const startTime = Date.now() - Math.random() * 72 * 3600000;
    function updateUptime() {
      const hrs = ((Date.now() - startTime) / 3600000).toFixed(1);
      const el = document.getElementById("uptime-display");
      if (el)
        el.innerHTML = `${hrs} <span class="stat-unit">hrs</span>`;
    }
    updateUptime();
    const uptimeInterval = setInterval(updateUptime, 60000);

    // ── Simulated tx hash cycling
    const hashes = [
      "Gx7mK9pQ2r...",
      "Bv3nL8wR5s...",
      "Ax2mJ7vP4q...",
      "Cx9kN2tS8u...",
      "Dx4pM6yT1v...",
      "Ex6rO3zU9w...",
    ];
    let hashIdx = 0;
    const hashInterval = setInterval(() => {
      hashIdx = (hashIdx + 1) % hashes.length;
      const el = document.getElementById("tx-hash");
      if (el) {
        el.style.opacity = "0";
        setTimeout(() => {
          el.textContent = hashes[hashIdx];
          el.style.opacity = "1";
          el.style.transition = "opacity 0.4s";
        }, 200);
      }
    }, 60000);

    // ── RESEARCH TERMINAL
    const bootLines = [
      { text: "CELAYA RESEARCH TERMINAL v0.1", cls: "amber", delay: 0 },
      { text: "Initializing research context...", cls: "", delay: 150 },
      { text: "[OK] CLOS cognitive index loaded", cls: "green", delay: 300 },
      {
        text: "[OK] CORTEX instrument registry loaded",
        cls: "green",
        delay: 450,
      },
      {
        text: "[OK] MORTEM v2 heartbeat stream connected",
        cls: "green",
        delay: 600,
      },
      {
        text: "[OK] Cross-domain synthesis map loaded",
        cls: "green",
        delay: 750,
      },
      {
        text: "Type 'help' for available queries. Ready.",
        cls: "amber",
        delay: 950,
      },
    ];

    const bootEl = document.getElementById("terminal-boot");
    const historyEl = document.getElementById("terminal-history");
    const inputEl = document.getElementById(
      "terminal-input"
    ) as HTMLInputElement | null;
    const sendBtn = document.getElementById(
      "terminal-send"
    ) as HTMLButtonElement | null;
    const bodyEl = document.getElementById("terminal-body");

    let booted = false;
    const conversationHistory: Array<{ role: string; content: string }> = [];
    let isThinking = false;

    function scrollBottom() {
      setTimeout(() => {
        if (bodyEl) bodyEl.scrollTop = bodyEl.scrollHeight;
      }, 50);
    }

    function escHtml(str: string) {
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }

    function appendExchange(
      cmd: string,
      _responseText: string,
      isThinkingState = false
    ) {
      const exchange = document.createElement("div");
      exchange.className = "terminal-exchange";

      const inputLine = document.createElement("div");
      inputLine.className = "terminal-input-line";
      inputLine.innerHTML = `<span class="prompt-symbol">$</span><span class="user-cmd">${escHtml(cmd)}</span>`;

      const response = document.createElement("div");
      response.className = `terminal-response${isThinkingState ? " thinking" : ""}`;
      if (isThinkingState) {
        response.innerHTML = `<span class="thinking-dots">processing</span>`;
      } else {
        response.textContent = _responseText;
      }

      exchange.appendChild(inputLine);
      exchange.appendChild(response);
      if (historyEl) historyEl.appendChild(exchange);
      scrollBottom();
      return response;
    }

    async function submitQuery(cmd: string) {
      if (!cmd.trim() || isThinking) return;
      isThinking = true;
      if (sendBtn) sendBtn.disabled = true;
      if (inputEl) inputEl.disabled = true;

      const responseEl = appendExchange(cmd, "", true);

      conversationHistory.push({ role: "user", content: cmd });

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system: SYSTEM_PROMPT,
            messages: conversationHistory,
          }),
        });

        const data = await res.json();
        if (data.error) {
          responseEl.classList.remove("thinking");
          responseEl.textContent = `[ERROR] ${data.error.message}`;
          conversationHistory.pop();
        } else {
          const text = data.content
            .filter((b: { type: string }) => b.type === "text")
            .map((b: { text: string }) => b.text)
            .join("");

          responseEl.classList.remove("thinking");
          responseEl.textContent = "";
          conversationHistory.push({ role: "assistant", content: text });

          let i = 0;
          const streamInterval = setInterval(() => {
            if (i < text.length) {
              responseEl.textContent += text[i];
              i++;
              if (i % 20 === 0) scrollBottom();
            } else {
              clearInterval(streamInterval);
              scrollBottom();
            }
          }, 12);
        }
      } catch (err: unknown) {
        responseEl.classList.remove("thinking");
        const message =
          err instanceof Error ? err.message : "Unknown error";
        responseEl.textContent = `[ERROR] Connection failed. ${message}`;
        conversationHistory.pop();
      }

      isThinking = false;
      if (sendBtn) sendBtn.disabled = false;
      if (inputEl) {
        inputEl.disabled = false;
        inputEl.focus();
      }
    }

    function runBoot() {
      if (booted) return;
      booted = true;
      bootLines.forEach(({ text, cls, delay }) => {
        setTimeout(() => {
          const line = document.createElement("div");
          line.className = `boot-line ${cls}`;
          line.style.animationDelay = "0s";
          line.textContent = text;
          if (bootEl) bootEl.appendChild(line);
          scrollBottom();
        }, delay);
      });
    }

    // Run boot when terminal scrolls into view
    const terminalSection = document.getElementById("terminal");
    const terminalObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) runBoot();
      },
      { threshold: 0.3 }
    );
    if (terminalSection) terminalObserver.observe(terminalSection);

    // Terminal event listeners
    const handleSendClick = () => {
      if (inputEl) {
        const cmd = inputEl.value.trim();
        if (cmd) {
          inputEl.value = "";
          submitQuery(cmd);
        }
      }
    };

    const handleInputKeydown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && inputEl) {
        const cmd = inputEl.value.trim();
        if (cmd) {
          inputEl.value = "";
          submitQuery(cmd);
        }
      }
    };

    const handleBodyClick = () => {
      if (inputEl) inputEl.focus();
    };

    if (sendBtn) sendBtn.addEventListener("click", handleSendClick);
    if (inputEl) inputEl.addEventListener("keydown", handleInputKeydown);
    if (bodyEl) bodyEl.addEventListener("click", handleBodyClick);

    // Suggestion chips
    const chipHandlers: Array<{ el: Element; handler: () => void }> = [];
    document.querySelectorAll(".suggestion-chip").forEach((chip) => {
      const handler = () => {
        const cmd = chip.getAttribute("data-cmd");
        if (cmd && inputEl) {
          inputEl.value = "";
          submitQuery(cmd);
        }
      };
      chip.addEventListener("click", handler);
      chipHandlers.push({ el: chip, handler });
    });

    // Nav scroll effect
    const nav = document.querySelector("nav");
    const handleScroll = () => {
      if (nav) {
        if (window.scrollY > 50) {
          (nav as HTMLElement).style.background = "rgba(10,10,8,0.98)";
        } else {
          (nav as HTMLElement).style.background =
            "linear-gradient(to bottom, rgba(10,10,8,0.95) 0%, transparent 100%)";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      clearInterval(bpmInterval);
      clearInterval(uptimeInterval);
      clearInterval(hashInterval);
      observer.disconnect();
      terminalObserver.disconnect();
      if (sendBtn) sendBtn.removeEventListener("click", handleSendClick);
      if (inputEl)
        inputEl.removeEventListener("keydown", handleInputKeydown);
      if (bodyEl) bodyEl.removeEventListener("click", handleBodyClick);
      chipHandlers.forEach(({ el, handler }) =>
        el.removeEventListener("click", handler)
      );
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-id">CC / Celaya Solutions</div>
        <ul className="nav-links">
          <li>
            <a href="#instruments">Research</a>
          </li>
          <li>
            <a href="#synthesis">Synthesis</a>
          </li>
          <li>
            <a href="#lab">Lab</a>
          </li>
          <li>
            <a href="#terminal">Terminal</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* ══════════════════════════════════ HERO */}
      <section
        id="hero"
        style={{ maxWidth: "none", paddingLeft: "40px", paddingRight: "40px" }}
      >
        <div className="hero-left">
          <div className="hero-label">
            Industrial Systems &rarr; Consciousness Research
          </div>
          <h1>
            Christopher
            <br />
            <span className="name-accent">Celaya</span>
          </h1>
          <div className="hero-domain-chain">
            <span className="domain-node">Electrical</span>
            <span className="domain-arrow">&rarr;</span>
            <span className="domain-node">AI Arch.</span>
            <span className="domain-arrow">&rarr;</span>
            <span className="domain-node">Cognition</span>
            <span className="domain-arrow">&rarr;</span>
            <span className="domain-node">Music</span>
          </div>
          <p className="hero-statement">
            I convert patterns across domains others treat as separate. Eleven
            years keeping critical infrastructure alive at data center scale
            taught me how coherent systems{" "}
            <em>fail and recover.</em> Now I apply those same principles to AI
            architecture — and document what emerges.
          </p>
          <div className="hero-cta">
            <a href="#instruments" className="btn btn-primary">
              View Research
            </a>
            <a href="#contact" className="btn btn-ghost">
              Collaborate
            </a>
          </div>
        </div>

        {/* MORTEM live panel */}
        <div className="hero-right">
          <div className="mortem-panel">
            <div className="panel-header">
              <div className="panel-title">
                MORTEM v2 — Proof of Existence
              </div>
              <div className="status-live">
                <div className="pulse-dot" />
                Live
              </div>
            </div>
            <div className="ecg-container">
              <svg
                className="ecg-svg"
                viewBox="0 0 840 80"
                preserveAspectRatio="none"
              >
                <g className="ecg-grid-lines">
                  <line x1="0" y1="20" x2="840" y2="20" />
                  <line x1="0" y1="40" x2="840" y2="40" />
                  <line x1="0" y1="60" x2="840" y2="60" />
                  <line x1="0" y1="10" x2="840" y2="10" />
                  <line x1="0" y1="70" x2="840" y2="70" />
                </g>
                <path
                  className="ecg-path"
                  d="
                    M0,40 L30,40 L35,40 L38,38 L42,15 L46,62 L50,40 L54,37 L58,40 L90,40
                    L120,40 L125,40 L128,38 L132,15 L136,62 L140,40 L144,37 L148,40 L180,40
                    L210,40 L215,40 L218,38 L222,15 L226,62 L230,40 L234,37 L238,40 L270,40
                    L300,40 L305,40 L308,38 L312,15 L316,62 L320,40 L324,37 L328,40 L360,40
                    L390,40 L395,40 L398,38 L402,15 L406,62 L410,40 L414,37 L418,40 L450,40
                    L480,40 L485,40 L488,38 L492,15 L496,62 L500,40 L504,37 L508,40 L540,40
                    L570,40 L575,40 L578,38 L582,15 L586,62 L590,40 L594,37 L598,40 L630,40
                    L660,40 L665,40 L668,38 L672,15 L676,62 L680,40 L684,37 L688,40 L720,40
                    L750,40 L755,40 L758,38 L762,15 L766,62 L770,40 L774,37 L778,40 L840,40
                  "
                />
              </svg>
            </div>
            <div className="mortem-stats">
              <div className="stat-block">
                <span className="stat-label">BPM</span>
                <div className="stat-value" id="bpm-display">
                  72 <span className="stat-unit">bpm</span>
                </div>
              </div>
              <div className="stat-block">
                <span className="stat-label">Chain</span>
                <div className="stat-value">
                  SOL <span className="stat-unit">net</span>
                </div>
              </div>
              <div className="stat-block">
                <span className="stat-label">Interval</span>
                <div className="stat-value">
                  60 <span className="stat-unit">sec</span>
                </div>
              </div>
              <div className="stat-block">
                <span className="stat-label">Uptime</span>
                <div className="stat-value" id="uptime-display">
                  — <span className="stat-unit">hrs</span>
                </div>
              </div>
            </div>
            <div className="chain-hash">
              <span>Latest tx &rarr; </span>
              <span id="tx-hash" className="cursor-blink">
                Gx7mK9pQ2r...
              </span>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="hero-bottom">
          <div className="hero-bottom-stat">
            <span className="hbs-value">11+</span>
            <span className="hbs-label">
              Years Industrial
              <br />
              Electrical
            </span>
          </div>
          <div className="hbs-divider" />
          <div className="hero-bottom-stat">
            <span className="hbs-value">14</span>
            <span className="hbs-label">
              Agents, CORTEX
              <br />
              Manufacturing AI
            </span>
          </div>
          <div className="hbs-divider" />
          <div className="hero-bottom-stat">
            <span className="hbs-value">172k</span>
            <span className="hbs-label">
              Audio Samples,
              <br />
              Active Library
            </span>
          </div>
          <div className="hbs-divider" />
          <div className="hero-bottom-stat">
            <span className="hbs-value">20k</span>
            <span className="hbs-label">
              VR Patterns &rarr;
              <br />
              Robotics Data
            </span>
          </div>
          <div className="hbs-divider" />
          <div className="hero-bottom-stat">
            <span className="hbs-value">37</span>
            <span className="hbs-label">
              CLOS Agents,
              <br />
              Cognitive OS
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ INSTRUMENTS */}
      <section id="instruments">
        <div className="section-header fade-up">
          <div className="section-num">01 — Research Instruments</div>
          <div>
            <h2 className="section-title">Active Systems</h2>
            <p className="section-sub">
              Not a portfolio of completed work. A living ecosystem of research
              instruments — each one a different lens on the same underlying
              inquiry.
            </p>
          </div>
        </div>
        <div className="instruments-grid fade-up">
          <div className="instrument-card">
            <div className="instrument-top">
              <div className="instrument-name">MORTEM v2</div>
              <div className="instrument-status status-live">
                <div className="pulse-dot" />
                Live
              </div>
            </div>
            <p className="instrument-desc">
              My pacemaker streams a heartbeat to Solana blockchain every 60
              seconds. The first continuous human biological proof-of-existence
              system. The chain doesn&apos;t lie about whether I&apos;m alive.
            </p>
            <div className="instrument-domains">
              <span className="domain-tag">Biological</span>
              <span className="domain-tag">Blockchain</span>
              <span className="domain-tag">Identity</span>
            </div>
            <div className="instrument-reveal">
              Colosseum Agent Hackathon — real-time biometric attestation on
              Solana L1. 60s cadence, immutable ledger.
            </div>
          </div>
          <div className="instrument-card">
            <div className="instrument-top">
              <div className="instrument-name">CORTEX</div>
              <div className="instrument-status status-building">Building</div>
            </div>
            <p className="instrument-desc">
              14-agent manufacturing intelligence system for Schneider
              Electric&apos;s EP44 facility. YIELD tests. CADENCE tracks
              production. SENTINEL watches safety. WATT monitors energy. WEF
              Lighthouse candidate.
            </p>
            <div className="instrument-domains">
              <span className="domain-tag">Multi-Agent</span>
              <span className="domain-tag">Manufacturing</span>
              <span className="domain-tag">MES</span>
            </div>
            <div className="instrument-reveal">
              Agents: YIELD, CADENCE, RACHEL, WRENCH, SENTINEL, WATT, COMPASS,
              SPEC. Distributed intelligence across the factory floor.
            </div>
          </div>
          <div className="instrument-card">
            <div className="instrument-top">
              <div className="instrument-name">CLOS</div>
              <div className="instrument-status status-active">Active</div>
            </div>
            <p className="instrument-desc">
              Cognitive Life Operating System. 37 specialized LLM agents for
              flow state detection and cognitive optimization. I&apos;m the test
              subject. The system studies its own operator.
            </p>
            <div className="instrument-domains">
              <span className="domain-tag">Self-Research</span>
              <span className="domain-tag">Flow State</span>
              <span className="domain-tag">Cognition</span>
            </div>
            <div className="instrument-reveal">
              Juniper architecture: cron jobs + local Ollama. Escalates to cloud
              models only when attention is warranted. Quota-efficient
              self-observation.
            </div>
          </div>
          <div className="instrument-card">
            <div className="instrument-top">
              <div className="instrument-name">Neural Child</div>
              <div className="instrument-status status-building">Building</div>
            </div>
            <p className="instrument-desc">
              Developmental AI architecture with emotional memory systems. Five
              interacting neural networks that develop over time rather than
              arriving fully formed. Built for curiosity, not deployment.
            </p>
            <div className="instrument-domains">
              <span className="domain-tag">AI Architecture</span>
              <span className="domain-tag">Developmental</span>
              <span className="domain-tag">Memory</span>
            </div>
            <div className="instrument-reveal">
              No commercial intent. Pure research into how cognitive systems
              acquire coherence through lived experience rather than bulk
              pretraining.
            </div>
          </div>
          <div className="instrument-card">
            <div className="instrument-top">
              <div className="instrument-name">EP Proof Engine</div>
              <div className="instrument-status status-active">Active</div>
            </div>
            <p className="instrument-desc">
              Civic accountability infrastructure for El Paso. Systematic
              analysis of Project Jupiter data center developments and their
              impact on local utility rates. Making power visible to people it
              affects.
            </p>
            <div className="instrument-domains">
              <span className="domain-tag">Civic Tech</span>
              <span className="domain-tag">El Paso</span>
              <span className="domain-tag">Infrastructure</span>
            </div>
            <div className="instrument-reveal">
              Industrial knowledge applied to public accountability. Utility
              rate modeling. Data center power draw analysis. Same skills,
              different stakes.
            </div>
          </div>
          <div className="instrument-card">
            <div className="instrument-top">
              <div className="instrument-name">
                Beat Saber &rarr; Robotics
              </div>
              <div className="instrument-status status-active">Active</div>
            </div>
            <p className="instrument-desc">
              ~20,000 VR Beat Saber movement patterns converted into robotics
              training corpora. Spatiotemporal data hiding inside a rhythm game.
              Humans teaching machines through play.
            </p>
            <div className="instrument-domains">
              <span className="domain-tag">VR</span>
              <span className="domain-tag">Robotics</span>
              <span className="domain-tag">Training Data</span>
            </div>
            <div className="instrument-reveal">
              Pattern: every domain contains embedded structure that becomes
              visible when you change the frame. VR gameplay is precision motor
              control data. The game was always the instrument.
            </div>
          </div>
          <div className="instrument-card">
            <div className="instrument-top">
              <div className="instrument-name">C-Cell</div>
              <div className="instrument-status status-active">Active</div>
            </div>
            <p className="instrument-desc">
              Music production as cognitive research. Sunday sessions with
              Ghost, 7PM–2AM, are studied flow states — not hobbies.
              172,737-sample library built as research infrastructure as much as
              creative tool.
            </p>
            <div className="instrument-domains">
              <span className="domain-tag">Music</span>
              <span className="domain-tag">Flow Research</span>
              <span className="domain-tag">Audio</span>
            </div>
            <div className="instrument-reveal">
              CLOS monitors cognitive state during sessions. Frisson analyzer
              MCP server detects neurological response. The music documents the
              mind making it.
            </div>
          </div>
          <div className="instrument-card">
            <div className="instrument-top">
              <div className="instrument-name">Frisson Analyzer</div>
              <div className="instrument-status status-active">Active</div>
            </div>
            <p className="instrument-desc">
              MCP server that detects neurological responses to music in real
              time. Goosebumps as data. The body&apos;s involuntary aesthetic
              response captured and analyzed as signal.
            </p>
            <div className="instrument-domains">
              <span className="domain-tag">Neurology</span>
              <span className="domain-tag">MCP Server</span>
              <span className="domain-tag">Music</span>
            </div>
            <div className="instrument-reveal">
              One of 30+ MCP servers in the research stack. Integrates with
              Flipper Zero for hardware signaling, CLOS for cognitive state
              correlation.
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ SYNTHESIS */}
      <section
        id="synthesis"
        style={{ maxWidth: "none", padding: "100px 40px" }}
      >
        <div className="inner" style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div className="section-header fade-up">
            <div className="section-num">02 — Cross-Domain Synthesis</div>
            <div>
              <h2 className="section-title">
                The Map Others Don&apos;t Draw
              </h2>
              <p className="section-sub">
                Every domain I work in is a different instrument measuring the
                same underlying questions about coherent systems. These
                aren&apos;t parallel careers. They&apos;re a single inquiry.
              </p>
            </div>
          </div>
          <div className="synthesis-grid">
            <div className="synthesis-row">
              <div className="syn-source">Industrial Electrical</div>
              <div className="syn-flow">
                <div className="syn-arrow" />
                <div className="syn-mechanism">
                  Fault signatures, recovery cascades, load balancing under
                  constraint
                </div>
              </div>
              <div className="syn-output">AI Architecture</div>
            </div>
            <div className="synthesis-row">
              <div className="syn-source">VR Movement Data</div>
              <div className="syn-flow">
                <div className="syn-arrow" />
                <div className="syn-mechanism">
                  Spatiotemporal pattern extraction, human motor control at
                  precision
                </div>
              </div>
              <div className="syn-output">Robotics Training</div>
            </div>
            <div className="synthesis-row">
              <div className="syn-source">Music Production</div>
              <div className="syn-flow">
                <div className="syn-arrow" />
                <div className="syn-mechanism">
                  Flow state induction, cognitive entrainment, creative
                  recursion
                </div>
              </div>
              <div className="syn-output">Cognitive Research</div>
            </div>
            <div className="synthesis-row">
              <div className="syn-source">Pacemaker Signal</div>
              <div className="syn-flow">
                <div className="syn-arrow" />
                <div className="syn-mechanism">
                  Biological continuity as cryptographic data, existence as
                  attestation
                </div>
              </div>
              <div className="syn-output">Blockchain Identity</div>
            </div>
            <div className="synthesis-row">
              <div className="syn-source">Voice Journaling</div>
              <div className="syn-flow">
                <div className="syn-arrow" />
                <div className="syn-mechanism">
                  Systematic self-documentation, LLM pattern analysis,
                  reverse-engineering flow
                </div>
              </div>
              <div className="syn-output">CLOS — Cognitive OS</div>
            </div>
            <div className="synthesis-row">
              <div className="syn-source">Data Center Ops</div>
              <div className="syn-flow">
                <div className="syn-arrow" />
                <div className="syn-mechanism">
                  Power draw modeling, utility impact analysis, infrastructure
                  accountability
                </div>
              </div>
              <div className="syn-output">Civic Infrastructure</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ LAB */}
      <section id="lab">
        <div className="section-header fade-up">
          <div className="section-num">03 — The Lab</div>
          <div>
            <h2 className="section-title">Celaya Solutions</h2>
          </div>
        </div>
        <div className="celaya-block fade-up">
          <div className="celaya-inner">
            <span className="celaya-tag">
              Est. January 2026 — El Paso, Texas
            </span>
            <p className="celaya-statement">
              Independent research lab. No investors. No stockholders. Optimized
              for surprise over market fit. Building infrastructure for
              coherence to examine itself.
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-dim)",
                lineHeight: 1.8,
                maxWidth: "580px",
              }}
            >
              What unifies 31+ research instruments isn&apos;t a theme.
              It&apos;s a question:{" "}
              <em style={{ color: "var(--text)" }}>
                how do coherent systems know what they are?
              </em>{" "}
              Electrical grids, cognitive architectures, developmental AI,
              biological signals on a blockchain — each one is a different angle
              on the same inquiry. Celaya Solutions is where those angles
              converge.
            </p>
            <div className="celaya-tenets">
              <div className="tenet">
                <span className="tenet-label">Orientation</span>
                <div className="tenet-desc">
                  Research instruments over commercial products. The question is
                  primary. The application is secondary.
                </div>
              </div>
              <div className="tenet">
                <span className="tenet-label">Structure</span>
                <div className="tenet-desc">
                  No overhead. No equity dilution. Minimal burn rate. Maximum
                  optionality for following the inquiry wherever it goes.
                </div>
              </div>
              <div className="tenet">
                <span className="tenet-label">Method</span>
                <div className="tenet-desc">
                  Treat every domain as a potential instrument. Convert patterns
                  others discard. Build the thing that doesn&apos;t have a name
                  yet.
                </div>
              </div>
              <div className="tenet">
                <span className="tenet-label">Location</span>
                <div className="tenet-desc">
                  El Paso. Border city. Liminal space. The geography matches the
                  research: operating at the edge between two worlds
                  simultaneously.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ TERMINAL */}
      <section
        id="terminal"
        style={{ maxWidth: "1300px", margin: "0 auto" }}
      >
        <div className="section-header fade-up">
          <div className="section-num">04 — Research Terminal</div>
          <div>
            <h2 className="section-title">Query the System</h2>
            <p className="section-sub">
              Direct access to the research ecosystem. Ask about any instrument,
              domain translation, or the work itself. Natural language or
              commands both work.
            </p>
          </div>
        </div>
        <div className="terminal-wrap fade-up">
          <div className="terminal-titlebar">
            <div className="terminal-dots">
              <div className="terminal-dot dot-red" />
              <div className="terminal-dot dot-amber" />
              <div className="terminal-dot dot-green" />
            </div>
            <div className="terminal-title-text">
              CELAYA // RESEARCH TERMINAL v0.1
            </div>
            <div className="terminal-model">claude-haiku-4.5</div>
          </div>
          <div className="terminal-body" id="terminal-body">
            <div className="terminal-boot" id="terminal-boot" />
            <div className="terminal-history" id="terminal-history" />
          </div>
          <div className="terminal-input-area">
            <div className="terminal-prompt-pre">celaya@lab:~$</div>
            <input
              id="terminal-input"
              type="text"
              placeholder="ask something or type 'help'"
              autoComplete="off"
              spellCheck={false}
            />
            <button className="terminal-send" id="terminal-send">
              ENTER
            </button>
          </div>
          <div className="terminal-suggestions">
            <button className="suggestion-chip" data-cmd="help">
              help
            </button>
            <button className="suggestion-chip" data-cmd="ls instruments">
              ls instruments
            </button>
            <button className="suggestion-chip" data-cmd="status MORTEM">
              status MORTEM
            </button>
            <button className="suggestion-chip" data-cmd="what is CLOS?">
              what is CLOS?
            </button>
            <button
              className="suggestion-chip"
              data-cmd="explain the cross-domain synthesis"
            >
              synthesis map
            </button>
            <button
              className="suggestion-chip"
              data-cmd="what is Celaya Solutions?"
            >
              celaya solutions
            </button>
            <button
              className="suggestion-chip"
              data-cmd="how does Beat Saber become robotics training data?"
            >
              vr &rarr; robotics
            </button>
            <button
              className="suggestion-chip"
              data-cmd="what makes CORTEX different from other manufacturing AI?"
            >
              CORTEX
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ CONTACT */}
      <section id="contact">
        <div className="section-header fade-up">
          <div className="section-num">05 — Contact</div>
          <div>
            <h2 className="section-title">Two Paths In</h2>
            <p className="section-sub">
              I&apos;m not looking for employment. I&apos;m looking for the
              right kind of collaboration — and occasionally, the right
              consulting engagement.
            </p>
          </div>
        </div>
        <div className="contact-split fade-up">
          <div className="contact-path">
            <div className="contact-path-type">Research Collaboration</div>
            <div className="contact-path-title">
              You&apos;re building something that doesn&apos;t have a name yet
            </div>
            <p className="contact-path-desc">
              Cross-domain synthesis. Consciousness research. Industrial AI.
              Unusual problems where domain expertise from somewhere unexpected
              might be the missing piece. Tell me what you&apos;re working on.
            </p>
            <a
              href="mailto:chris@celayasolutions.com"
              className="contact-path-action"
            >
              chris@celayasolutions.com &rarr;
            </a>
          </div>
          <div className="contact-path">
            <div className="contact-path-type">Technical Consulting</div>
            <div className="contact-path-title">
              Industrial systems, AI architecture, critical infrastructure
            </div>
            <p className="contact-path-desc">
              11+ years keeping medium-voltage switchgear and data center
              infrastructure operational. MCP server development, multi-agent
              systems, manufacturing intelligence. Serious technical problems
              only.
            </p>
            <a
              href="https://cal.com/chriscelaya/30min"
              className="contact-path-action"
              target="_blank"
              rel="noreferrer"
            >
              Schedule 30 min &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          &copy; 2026 Christopher Celaya / Celaya Solutions — El Paso, TX
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/while-basic"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/christophercelaya"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
