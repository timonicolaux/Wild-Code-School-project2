import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import ResultPage from './ResultPage';
import QuizAPI from './QuizAPI';
import SelectBar from './SelectBar';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ResultPage" element={<ResultPage />} />
        <Route path="/QuizAPI" element={<QuizAPI />} />
        <Route path="/SelectBar" element={<SelectBar />} />
      </Routes>
    </main>
  );
}
