"use client"

import type React from "react"

import { useState } from "react"
import { Home, User, Star, Settings, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function DashboardPage() {
  const [showVacationForm, setShowVacationForm] = useState(false)

  if (showVacationForm) {
    return <VacationForm onBack={() => setShowVacationForm(false)} />
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex-shrink-0">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-800 rounded" />
              <span className="font-semibold text-sm">Pópulis</span>
            </div>
            <nav className="flex items-center gap-4 text-sm text-gray-600">
              <button className="p-2 hover:text-gray-900">
                <Home className="w-4 h-4" />
              </button>
              <button className="p-2 hover:text-gray-900">
                <User className="w-4 h-4" />
              </button>
              <button className="p-2 hover:text-gray-900">
                <Star className="w-4 h-4" />
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-20 h-5 bg-blue-600 rounded" />
            <button className="p-2 text-sky-600 hover:text-sky-700">
              <Settings className="w-4 h-4" />
            </button>
            <Button variant="ghost" size="sm" className="text-sky-600">
              Configurar Dashboard
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-4 space-y-4 flex-1 overflow-auto">
        {/* Iniciar solicitação */}
        <Card className="p-0 overflow-hidden">
          <div className="bg-sky-400 text-white px-4 py-2 flex items-center justify-between">
            <h2 className="font-semibold text-sm">Iniciar solicitação</h2>
            <div className="flex gap-2">
              <button className="p-1 hover:bg-sky-500 rounded">
                <div className="w-4 h-4 border border-white rounded" />
              </button>
              <button className="p-1 hover:bg-sky-500 rounded">
                <div className="w-4 h-4 border border-white" />
              </button>
              <button className="p-1 hover:bg-sky-500 rounded">
                <div className="w-4 h-4 border border-white">+</div>
              </button>
            </div>
          </div>
          <div className="p-3">
            <div className="flex gap-2">
              <button className="px-4 py-1.5 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                Auxílio creche
              </button>
              <button className="px-4 py-1.5 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                Lançamento de Marcações
              </button>
              <button
                onClick={() => setShowVacationForm(true)}
                className="px-4 py-1.5 text-sm bg-gray-100 text-sky-700 font-medium rounded hover:bg-gray-200"
              >
                Solicitação de Férias
              </button>
            </div>
          </div>
        </Card>

        {/* Meus Dependentes */}
        <Card className="p-0 overflow-hidden">
          <div className="bg-sky-400 text-white px-4 py-2 flex items-center justify-between">
            <h2 className="font-semibold text-sm">Meus Dependentes</h2>
            <div className="flex gap-2">
              <button className="p-1 hover:bg-sky-500 rounded">
                <div className="w-4 h-4 border border-white rounded" />
              </button>
              <button className="p-1 hover:bg-sky-500 rounded">
                <div className="w-4 h-4 border border-white" />
              </button>
              <button className="p-1 hover:bg-sky-500 rounded">
                <div className="w-4 h-4 border border-white">+</div>
              </button>
            </div>
          </div>
          <div className="p-3">
            <div className="flex items-center gap-2 bg-sky-100 p-2 rounded">
              <span className="text-sky-600 font-bold text-lg">+</span>
              <span className="text-gray-700 text-sm"></span>
            </div>
          </div>
        </Card>

        {/* Meus Históricos */}
        <Card className="p-0 overflow-hidden">
          <div className="bg-sky-400 text-white px-4 py-2 flex items-center justify-between">
            <h2 className="font-semibold text-sm">Meus Históricos</h2>
            <div className="flex gap-2">
              <button className="p-1 hover:bg-sky-500 rounded">
                <div className="w-4 h-4 border border-white rounded" />
              </button>
              <button className="p-1 hover:bg-sky-500 rounded">
                <div className="w-4 h-4 border border-white" />
              </button>
              <button className="p-1 hover:bg-sky-500 rounded">
                <div className="w-4 h-4 border border-white">+</div>
              </button>
            </div>
          </div>
          <div className="p-3">
            <div className="flex gap-2 mb-3 overflow-x-auto">
              {["Cargos", "Empresa", "Turnos", "Localizações", "Sindicatos", "Centros de Custo", "Tipos"].map((tab) => (
                <button
                  key={tab}
                  className={`px-3 py-1.5 text-xs whitespace-nowrap rounded ${
                    tab === "Cargos" ? "bg-white border-2 border-sky-500 text-gray-900" : "bg-sky-200 text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="border rounded">
              <table className="w-full">
                <thead className="bg-sky-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700">Início</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700">Nome abrev</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-xs">
                      <button className="text-sky-600 mr-2">▶</button>
                      08/2017
                    </td>
                    <td className="px-4 py-2 text-xs">Nome</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}

function VacationForm({ onBack }: { onBack: () => void }) {
  const [employeeName, setEmployeeName] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [combination, setCombination] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [showCalendar, setShowCalendar] = useState(false)
  const [advance, setAdvance] = useState("")
  const [calendarDate, setCalendarDate] = useState(new Date())

  const combinations = []
  for (let rest = 5; rest <= 23; rest++) {
    for (let bonus = 0; bonus <= 10; bonus += 10) {
      if (rest + bonus / 10 <= 30) {
        combinations.push(`${rest}.0/${bonus}.0`)
      }
    }
  }

  const calculateEndDate = (start: string, combo: string) => {
    if (!start || !combo) return ""

    const [rest] = combo.split("/").map((v) => Number.parseFloat(v))
    const [day, month, year] = start.split("/").map((v) => Number.parseInt(v))

    const startDateObj = new Date(year, month - 1, day)
    const endDateObj = new Date(startDateObj)
    endDateObj.setDate(endDateObj.getDate() + rest - 1)

    return `${String(endDateObj.getDate()).padStart(2, "0")}/${String(endDateObj.getMonth() + 1).padStart(2, "0")}/${endDateObj.getFullYear()}`
  }

  const handleStartDateChange = (value: string) => {
    setStartDate(value)
    if (combination) {
      setEndDate(calculateEndDate(value, combination))
    }
  }

  const handleCombinationChange = (value: string) => {
    setCombination(value)
    if (startDate) {
      setEndDate(calculateEndDate(startDate, value))
    }
  }

  const selectDate = (date: Date) => {
    const formatted = `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`
    handleStartDateChange(formatted)
    setShowCalendar(false)
  }

  const currentMonth = calendarDate.getMonth()
  const currentYear = calendarDate.getFullYear()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDay = new Date(currentYear, currentMonth, 1).getDay()

  const goToPreviousMonth = () => {
    setCalendarDate(new Date(currentYear, currentMonth - 1))
  }

  const goToNextMonth = () => {
    setCalendarDate(new Date(currentYear, currentMonth + 1))
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployeeName(e.target.value.toUpperCase())
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = () => {
    setEmployeeName("")
    setSelectedFile(null)
    setCombination("")
    setStartDate("")
    setEndDate("")
    setAdvance("")
    setCalendarDate(new Date())
    alert("Solicitação de férias enviada com sucesso!")
  }

  return (
    <div className="h-screen bg-gray-100 flex flex-col overflow-hidden">
      <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
        <div className="max-w-4xl w-full h-full flex flex-col">
          <Card className="p-0 overflow-hidden flex flex-col h-full">
            {/* Header */}
            <div className="bg-sky-400 text-white px-4 py-2 flex items-center justify-between flex-shrink-0">
              <h2 className="font-semibold text-sm">Férias - Início</h2>
              <button onClick={onBack} className="hover:bg-sky-500 px-2 py-1 rounded text-sm">
                ✕
              </button>
            </div>

            {/* Dados Solicitação de Férias */}
            <div className="p-3 space-y-2 overflow-y-auto flex-1">
              <div className="border border-gray-300 rounded">
                <div className="bg-sky-50 px-3 py-1.5 border-b border-gray-300">
                  <h3 className="text-xs font-medium text-gray-700">− Dados Solicitação de Férias</h3>
                </div>

                <div className="p-3 space-y-2">
                  {/* Mês/ano */}
                  <div className="grid grid-cols-3 gap-3 items-center">
                    <label className="text-right text-xs font-medium">Mês/ano</label>
                    <input
                      type="text"
                      defaultValue="01/2026"
                      className="col-span-2 px-2 py-1.5 border border-gray-300 rounded bg-gray-50 text-xs"
                    />
                  </div>

                  {/* Funcionário */}
                  <div className="grid grid-cols-3 gap-3 items-center">
                    <label className="text-right text-xs font-medium">Funcionário</label>
                    <div className="col-span-2 flex items-center gap-2">
                      <input
                        type="text"
                        value={employeeName}
                        onChange={handleNameChange}
                        className="flex-1 px-2 py-1.5 bg-sky-50 rounded text-sky-700 font-medium text-xs border border-sky-200"
                      />
                      <Button size="sm" variant="outline" className="text-xs bg-white h-6 px-2 flex-shrink-0">
                        Histórico Férias
                      </Button>
                    </div>
                  </div>

                  {/* Período aquisitivo */}
                  <div className="grid grid-cols-3 gap-3 items-center">
                    <label className="text-right text-xs font-medium">Período aquisitivo</label>
                    <div className="col-span-2 flex gap-2 items-center">
                      <input
                        type="text"
                        defaultValue="07/08/2024"
                        className="w-24 px-2 py-1.5 border border-gray-300 rounded bg-gray-50 text-xs"
                      />
                      <span className="text-gray-400 text-xs">•</span>
                      <input
                        type="text"
                        defaultValue="06/08/2025"
                        className="w-24 px-2 py-1.5 border border-gray-300 rounded bg-gray-50 text-xs"
                      />
                      <div className="text-xs ml-1 flex-shrink-0">
                        <div className="font-medium text-gray-700 text-[10px] leading-tight">Vencimento 2º período</div>
                        <div className="text-gray-600 text-xs">06/08/2026</div>
                      </div>
                    </div>
                  </div>

                  {/* Saldo de férias */}
                  <div className="grid grid-cols-3 gap-3 items-center">
                    <label className="text-right text-xs font-medium">Saldo de férias</label>
                    <input
                      type="text"
                      defaultValue="30"
                      className="px-2 py-1.5 border border-gray-300 rounded bg-sky-50 w-16 text-xs"
                    />
                  </div>

                  {/* Dias de direito */}
                  <div className="grid grid-cols-3 gap-3 items-center">
                    <label className="text-right text-xs font-medium">Dias de direito</label>
                    <input
                      type="text"
                      defaultValue="30"
                      className="px-2 py-1.5 border border-gray-300 rounded bg-sky-50 w-16 text-xs"
                    />
                  </div>

                  {/* Abatimento por falta */}
                  <div className="grid grid-cols-3 gap-3 items-center">
                    <label className="text-right text-xs font-medium">Abatimento por falta</label>
                    <input
                      type="text"
                      defaultValue="0"
                      className="px-2 py-1.5 border border-gray-300 rounded bg-gray-50 w-16 text-xs"
                    />
                  </div>

                  {/* Combinação descanso/abono */}
                  <div className="grid grid-cols-3 gap-3 items-center">
                    <label className="text-right text-xs font-medium">Combinação descanso/abono</label>
                    <select
                      value={combination}
                      onChange={(e) => handleCombinationChange(e.target.value)}
                      className="col-span-2 px-2 py-1.5 border border-gray-300 rounded bg-white text-xs"
                    >
                      <option value="">Selecionar...</option>
                      {combinations.map((combo) => (
                        <option key={combo} value={combo}>
                          {combo}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Data de início */}
                  <div className="grid grid-cols-3 gap-3 items-center relative">
                    <label className="text-right text-xs font-medium">Data de início *</label>
                    <div className="col-span-2 flex gap-2 relative">
                      <input
                        type="text"
                        value={startDate}
                        onChange={(e) => handleStartDateChange(e.target.value)}
                        onClick={() => setShowCalendar(true)}
                        placeholder="dd/mm/yyyy"
                        className="flex-1 px-2 py-1.5 border border-gray-300 rounded bg-white text-xs"
                      />
                      <span className="text-gray-400 text-xs">•</span>
                      <input
                        type="text"
                        value={endDate}
                        readOnly
                        placeholder="dd/mm/yyyy"
                        className="flex-1 px-2 py-1.5 border border-gray-300 rounded bg-gray-50 text-xs"
                      />

                      {/* Mini Calendar */}
                      {showCalendar && (
                        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg p-2 z-10 w-56">
                          <div className="flex items-center justify-between mb-2">
                            <button onClick={goToPreviousMonth} className="p-1 hover:bg-gray-100 rounded">
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <div className="text-center font-medium text-xs">
                              {calendarDate.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
                            </div>
                            <button onClick={goToNextMonth} className="p-1 hover:bg-gray-100 rounded">
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="grid grid-cols-7 gap-1 text-xs">
                            {["D", "S", "T", "Q", "Q", "S", "S"].map((day) => (
                              <div key={day} className="text-center font-medium text-gray-600 p-1">
                                {day}
                              </div>
                            ))}
                            {Array.from({ length: firstDay }, (_, i) => (
                              <div key={`empty-${i}`} />
                            ))}
                            {Array.from({ length: daysInMonth }, (_, i) => {
                              const day = i + 1
                              const date = new Date(currentYear, currentMonth, day)
                              return (
                                <button
                                  key={day}
                                  onClick={() => selectDate(date)}
                                  className="p-1 hover:bg-sky-100 rounded text-center"
                                >
                                  {day}
                                </button>
                              )
                            })}
                          </div>
                          <button
                            onClick={() => setShowCalendar(false)}
                            className="mt-2 w-full text-xs text-gray-600 hover:text-gray-900"
                          >
                            Fechar
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Adiantamento 13º salário */}
                  <div className="grid grid-cols-3 gap-3 items-center">
                    <label className="text-right text-xs font-medium">Adiantamento 13º salário?</label>
                    <div className="col-span-2 flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="advance"
                          value="yes"
                          checked={advance === "yes"}
                          onChange={(e) => setAdvance(e.target.value)}
                          className="w-3 h-3"
                        />
                        <span className="text-xs">Sim</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="advance"
                          value="no"
                          checked={advance === "no"}
                          onChange={(e) => setAdvance(e.target.value)}
                          className="w-3 h-3"
                        />
                        <span className="text-xs">Não</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Observação */}
              <div className="border border-gray-300 rounded">
                <div className="bg-sky-50 px-3 py-1.5 border-b border-gray-300">
                  <h3 className="text-xs font-medium text-gray-700">− Observação</h3>
                </div>
                <div className="p-3">
                  <textarea
                    className="w-full h-16 px-2 py-1.5 border border-gray-300 rounded resize-none text-xs"
                    placeholder="Digite suas observações..."
                  />
                </div>
              </div>

              {/* Anexos */}
              <div className="border border-gray-300 rounded">
                <div className="bg-sky-50 px-3 py-1.5 border-b border-gray-300">
                  <h3 className="text-xs font-medium text-gray-700">− Anexos</h3>
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-4">
                    <label className="text-xs font-medium">Anexo - Documentos</label>
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-7 text-xs bg-transparent px-2"
                        asChild
                      >
                        <span>Escolher arquivo</span>
                      </Button>
                    </label>
                    <input id="file-upload" type="file" onChange={handleFileChange} className="hidden" />
                    <span className="text-xs text-gray-600">
                      {selectedFile ? selectedFile.name : "Nenhum arquivo escolhido"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-white border-t px-3 py-2 flex-shrink-0">
              <Button onClick={handleSubmit} className="bg-sky-500 hover:bg-sky-600 text-white text-xs h-7 px-3">
                Iniciar solicitação
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
