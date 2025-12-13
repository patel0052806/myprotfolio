
import { useState, useEffect } from 'react';
import axios from 'axios';
import PageTransition from '../components/PageTransition';

export default function Admin() {
    const [projects, setProjects] = useState([]);
    const [form, setForm] = useState({ title: '', desc: '', tags: '', link: '', github: '' });

    const fetchP = () => axios.get('http://localhost:5000/projects').then(res => setProjects(res.data));
    useEffect(() => { fetchP() }, []);

    const submit = async (e) => {
        e.preventDefault();
        const payload = { ...form, tags: form.tags.split(',') };
        await axios.post('http://localhost:5000/projects', payload);
        setForm({ title: '', desc: '', tags: '', link: '', github: '' });
        fetchP();
    }
    
    const del = async (id) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            await axios.delete(`http://localhost:5000/projects/${id}`);
            fetchP();
        }
    }

    return (
        <PageTransition className="min-h-screen pt-32 px-6 max-w-5xl mx-auto pb-20">
            <h1 className="text-3xl font-bold mb-8 text-cyan-400">Admin Dashboard</h1>
            
            <div className="grid md:grid-cols-2 gap-10">
                <form onSubmit={submit} className="glass p-8 rounded-2xl space-y-4 h-fit">
                    <h3 className="text-xl font-bold mb-4">Add Project</h3>
                    <input className="input" placeholder="Title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} required/>
                    <textarea className="input" placeholder="Description" value={form.desc} onChange={e=>setForm({...form, desc:e.target.value})} required/>
                    <input className="input" placeholder="Tags (comma separated)" value={form.tags} onChange={e=>setForm({...form, tags:e.target.value})} required/>
                    <input className="input" placeholder="Live Link" value={form.link} onChange={e=>setForm({...form, link:e.target.value})} />
                    <input className="input" placeholder="Github Link" value={form.github} onChange={e=>setForm({...form, github:e.target.value})} />
                    <button className="btn-primary w-full py-2 rounded">Add Project</button>
                </form>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold mb-4">Current Projects</h3>
                    {projects.map(p => (
                        <div key={p._id} className="bg-slate-900 border border-slate-800 p-4 rounded-lg flex justify-between items-center">
                            <div>
                                <h4 className="font-bold">{p.title}</h4>
                                <p className="text-xs text-slate-500">{p.tags.join(', ')}</p>
                            </div>
                            <button onClick={()=>del(p._id)} className="text-red-500 hover:bg-red-900/20 p-2 rounded">Delete</button>
                        </div>
                    ))}
                </div>
            </div>
            
            <style>{`
                .input { width: 100%; background: #1e293b; border: 1px solid #334155; padding: 10px; border-radius: 8px; color: white; outline: none; }
                .input:focus { border-color: #06b6d4; }
                .btn-primary { background: #06b6d4; color: white; font-weight: bold; }
                .btn-primary:hover { background: #0891b2; }
            `}</style>
        </PageTransition>
    )
}
