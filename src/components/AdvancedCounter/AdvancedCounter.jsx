import React, { useState, useEffect } from 'react';

const AdvancedCounter = () => {
  // Core state
  const [count, setCount] = useState(() => {
    // Initialize from localStorage if available
    const savedCount = localStorage.getItem('counter');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });
  
  // Advanced state
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem('counterHistory');
    return savedHistory ? JSON.parse(savedHistory) : [0];
  });
  const [step, setStep] = useState(1);
  const [saveStatus, setSaveStatus] = useState('Changes saved.');

  // Update history whenever count changes
  useEffect(() => {
    setHistory(prevHistory => [...prevHistory, count]);
  }, [count]);

  // Auto-save functionality
  useEffect(() => {
    setSaveStatus('Saving changes...');
    
    const timer = setTimeout(() => {
      localStorage.setItem('counter', count.toString());
      localStorage.setItem('counterHistory', JSON.stringify(history));
      setSaveStatus('Changes saved.');
    }, 500);
    
    return () => {
      clearTimeout(timer);
    };
  }, [count, history]);

  // Keyboard event listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        increment();
      } else if (e.key === 'ArrowDown') {
        decrement();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [step]); // Re-add listener if step changes

  // Core functions
  const increment = () => {
    setCount(prevCount => prevCount + step);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - step);
  };

  // Advanced functions
  const reset = () => {
    setCount(0);
    setHistory([0]);
  };

  const handleStepChange = (e) => {
    const newStep = parseInt(e.target.value, 10);
    if (!isNaN(newStep)) {
      setStep(newStep);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Advanced Counter</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Current Count: {count}</h2>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <button 
            onClick={decrement}
            style={{ padding: '8px 16px', fontSize: '16px' }}
          >
            Decrement (-{step})
          </button>
          <button 
            onClick={increment}
            style={{ padding: '8px 16px', fontSize: '16px' }}
          >
            Increment (+{step})
          </button>
        </div>
        <button 
          onClick={reset} 
          style={{ padding: '8px 16px', fontSize: '16px', marginBottom: '20px' }}
        >
          Reset Counter
        </button>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="step" style={{ marginRight: '10px' }}>Step Value:</label>
        <input
          id="step"
          type="number"
          value={step}
          onChange={handleStepChange}
          min="1"
          style={{ padding: '5px', width: '60px' }}
        />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <p>{saveStatus}</p>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Count History:</h3>
        <ul style={{ listStyle: 'none', padding: 0, maxHeight: '200px', overflowY: 'auto' }}>
          {history.map((item, index) => (
            <li key={index} style={{ padding: '5px 0', borderBottom: '1px solid #eee' }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <p>Use <strong>ArrowUp</strong> to increment and <strong>ArrowDown</strong> to decrement.</p>
      </div>
    </div>
  );
};

export default AdvancedCounter;