from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from sklearn.cluster import KMeans
import pandas as pd
import numpy as np

class RequestParams(BaseModel):
    competence: int
    year: str

app = FastAPI()

@app.post("/get-overall_data")
def get_overall_amount_of_rows(params: RequestParams):
    competence = params.competence
    year = params.year

    if competence < -1 or competence > 39:
        raise HTTPException(status_code=400, detail="Ошибка. Значение компетенции должно быть в диапозоне 0-39.")

    if year not in ['2018, 2019', '2020', '2021', '2022', '2023', '2024', '2025']:
        raise HTTPException(status_code=400, detail="Некорректный формат. Передавайте год в виде 20XX.")
    else:
        if year == '2022' or year in ['2023', '2024', '2025']:
                sythetic_1 = pd.read_csv("indiv.csv")
                indiv_df = pd.read_csv("synthetic_1.csv")
                group_df = pd.read_csv("group.csv")
        else:
                sythetic_1 = pd.read_csv("synthetic_1.csv")
                indiv_df = pd.read_csv("indiv.csv")
                group_df = pd.read_csv("group.csv")

    if competence > -1:
        competences_list = ['Цифровое ПСР-Предприятие (Lean Smart Plant); ',
       'Управление качеством; ', 'Сварочные технологии; ',
       'Инженер-конструктор; ', 'Геодезия; ', 'Мехатроника; ',
       'Аддитивные технологии; ', 'Инженерное проектирование; ',
       'Промышленная механика и монтаж; ',
       'Вывод из эксплуатации объектов использования атомной энергии; ',
       'Работы на фрезерных универсальных станках; ',
       'Неразрушающий контроль; ', 'Водитель спецавтомобиля; ',
       'Промышленная автоматика; ', 'Строительный контроль; ',
       'Программные решения для бизнеса; ',
       'Инженерное мышление. Каракури; ',
       'Сетевое и системное администрирование; ',
       'Токарные работы на станках с ЧПУ; ',
       'Управление жизненным циклом; ', 'Охрана труда; ',
       'Электромонтаж; ', 'Охрана окружающей среды; ',
       'Радиационный контроль; ', 'Сметное дело; ',
       'Квантовые технологии; ',
       'Технологические системы энергетических объектов; ',
       'Корпоративная защита от внутренних угроз информационной безопасности; ',
       'Информационная безопасность; ',
       'Фрезерные работы на станках с ЧПУ; ', 'Аналитический контроль; ',
       'Технологии композитов; ', 'Электроника; ',
       'Инженер-технолог машиностроения; ',
       'Машинное обучение и большие данные; ',
       'Работы на токарных универсальных станках; ',
       'Бетонные строительные работы; ',
       'Обслуживание и ремонт оборудования релейной защиты и автоматики; ',
       'Изготовление прототипов; ']
        indiv_df = indiv_df[indiv_df["Список компетенций"] == competence_list[competence]]
        sythetic_1 = sythetic_1[sythetic_1["Список компетенций"] == competence_list[competence]]

    indiv_df["Количество сложных задач"].fillna(0, inplace=True)
    indiv_df['Скор/стаж'] = indiv_df['Скор/стаж']*40
    indiv_df["Количество средних задач"].fillna(indiv_df["Количество средних задач"].mean(), inplace=True)
    indiv_df["Скор/стаж"].fillna(indiv_df["Скор/стаж"].median(), inplace=True)
    group_df["Количество сложных задач"].fillna(0, inplace=True)
    group_df["Количество средних задач"].fillna(group_df["Количество средних задач"].mean(), inplace=True)
    group_df['Количество легких задач'] = group_df['group_result']/100*150 - (group_df['Количество средних задач'] + group_df['Количество сложных задач'])
    group_df.sort_values(by='group_result', ascending=True, inplace=True)
    group_df['Rating'] = range(1, len(group_df) + 1)
    group_df.reset_index(drop=True, inplace=True)

    sythetic_1 = pd.read_csv("synthetic_1.csv")
    sythetic_1['Скор/стаж'] = sythetic_1['Скор/стаж']*40
    sythetic_1["Количество сложных задач"].fillna(0, inplace=True)
    sythetic_1["Количество средних задач"].fillna(sythetic_1["Количество средних задач"].mean(), inplace=True)
    sythetic_1["Скор/стаж"].fillna(sythetic_1["Скор/стаж"].median(), inplace=True)

    kmeans = KMeans(n_clusters=3, random_state=42).fit(indiv_df[['Количество сложных задач', 'Скор/стаж', 'individual_result']])
    indiv_df['cluster'] = kmeans.labels_
    pre_clusters = indiv_df['cluster'].value_counts()
    kmeans = KMeans(n_clusters=3, random_state=42).fit(sythetic_1[['Количество сложных задач', 'Скор/стаж', 'individual_result']])
    sythetic_1['cluster'] = kmeans.labels_
    pre_clusters_syth = sythetic_1['cluster'].value_counts()

    competitors_count = int(len(indiv_df))
    mean_done_per = int(indiv_df['individual_result'].mean())
    mean_top_per = int(indiv_df.nlargest(n=10, columns=['individual_result'])['individual_result'].mean())
    clusters_competitors = [int(pre_clusters[0]), int(pre_clusters[1]), int(pre_clusters[2])]
    pre_hard, pre_mean = int(len(indiv_df[indiv_df['Количество сложных задач'] > 0])), int(len(indiv_df[indiv_df['Количество средних задач'] > 0]))
    pre_easy = int(len(indiv_df) - (pre_mean + pre_hard))
    easy_average_hard = [pre_mean, pre_mean, pre_hard]
    print("1")
    age_counts = [int(len(indiv_df[indiv_df['Возраст'] < 20]['Возраст'].dropna())),
    int(len(indiv_df[(indiv_df['Возраст'] > 20) & (indiv_df['Возраст'] < 25)]['Возраст'].dropna())),
    int(len(indiv_df[(indiv_df['Возраст'] > 25) & (indiv_df['Возраст'] < 30)]['Возраст'].dropna())),
    int(len(indiv_df[(indiv_df['Возраст'] > 30) & (indiv_df['Возраст'] < 45)]['Возраст'].dropna())),
    int(len(indiv_df[indiv_df['Возраст'] >  45]['Возраст'].dropna()))]
    
    experience_counts = [int(len(indiv_df[indiv_df['Скор/стаж'] < 1]['Скор/стаж'].dropna())),
    int(len(indiv_df[(indiv_df['Скор/стаж'] > 1) & (indiv_df['Скор/стаж'] < 2)]['Скор/стаж'].dropna())),
    int(len(indiv_df[(indiv_df['Скор/стаж'] > 2) & (indiv_df['Скор/стаж'] < 5)]['Скор/стаж'].dropna())),
    int(len(indiv_df[(indiv_df['Скор/стаж'] > 5) & (indiv_df['Скор/стаж'] < 10)]['Скор/стаж'].dropna())),
    int(len(indiv_df[indiv_df['Скор/стаж'] > 10]['Скор/стаж'].dropna()))]

    pre_gender = indiv_df['Пол'].value_counts()
    gender_counts = [int(pre_gender[0]), int(pre_gender[1])]
    perfomance_increase = int((1 - (sythetic_1['individual_result'].mean() / indiv_df['individual_result'].mean())) * 100)
    competences_increase = int((len(sythetic_1.columns) - len(indiv_df.columns)) + 2)
    competitors_increase = int((1 - abs(len(sythetic_1) / len(indiv_df))) * 100)
    oldies_increase = int(abs(1 - (sythetic_1[sythetic_1.ФИО.isin(indiv_df['ФИО'])]['individual_result'].mean() / indiv_df[indiv_df.ФИО.isin(sythetic_1['ФИО'])]['individual_result'].mean())) * 100)
    diving_increase =  int((1 - (sythetic_1['Количество средних задач'].mean() / indiv_df['Количество средних задач'].mean())) * 100)
    comp_exp_increase =  abs(int((1 - (sythetic_1[['Скор/стаж']].mean() / indiv_df[['Скор/стаж']].mean())) * 100))
    clusters_qualifications = {"2021":[int(pre_clusters[0]), int(pre_clusters[1]), int(pre_clusters[2])], "2022": [int(pre_clusters_syth[0]), int(pre_clusters_syth[1]), int(pre_clusters_syth[2])]}
    compes_table, commands_info = indiv_df[['Перспективность', 'ФИО', 'Список компетенций', 'Место работы', 'individual_result', 'Скор/стаж', 'cluster', 'Возраст']].dropna()[:15].to_json(), group_df[:15].to_json()

    return {"competitors-count": competitors_count,
    "mean-done-per": mean_done_per,
    "mean-top-per": mean_top_per,
    "clusters-competitors": clusters_competitors,
    "easy-average-hard": easy_average_hard,
    "age-counts": age_counts,
    "experience-counts": experience_counts,
    "gender-counts": gender_counts,
    "competitors-increase": competitors_increase,
    "perfomance-increase": perfomance_increase,
    "competences-increase": competences_increase,
    "oldies-increase": oldies_increase,
    "diving-increase": diving_increase,
    "comp-exp-increase": comp_exp_increase,
    "cluster-qualifications": clusters_qualifications,
    "compes-table": compes_table,
    "commands-info": commands_info
    }


