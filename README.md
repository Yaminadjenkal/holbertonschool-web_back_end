# Caching — Holberton School

Ce projet a pour objectif de comprendre et d’implémenter différents systèmes de cache en Python.  
Tu vas apprendre comment fonctionnent plusieurs politiques de remplacement utilisées dans les systèmes informatiques.

---

## 📚 Objectifs d’apprentissage

À la fin de ce projet, vous serez capable d’expliquer :

- Ce qu’est un **système de cache**
- Le fonctionnement des politiques :
  - FIFO — First In First Out
  - LIFO — Last In First Out
  - LRU — Least Recently Used
  - MRU — Most Recently Used
  - LFU — Least Frequently Used
- Le rôle d’un système de cache
- Les limites d’un système de cache

---

## �� Concepts importants

### 🔹 Système de cache
Un cache est une mémoire rapide qui stocke temporairement des données pour accélérer l’accès.

### 🔹 FIFO
Le premier élément ajouté est le premier supprimé.

### 🔹 LIFO
Le dernier élément ajouté est le premier supprimé.

### 🔹 LRU
On supprime l’élément **le moins récemment utilisé**.

### 🔹 MRU
On supprime l’élément **le plus récemment utilisé**.

### 🔹 LFU
On supprime l’élément **le moins fréquemment utilisé**.

---

## 🗂️ Structure du projet

Chaque fichier Python correspond à une politique de cache :

- `0-basic_cache.py` — Cache sans limite  
- `1-fifo_cache.py` — Cache FIFO  
- `2-lifo_cache.py` — Cache LIFO  
- `3-lru_cache.py` — Cache LRU  
- `4-mru_cache.py` — Cache MRU  
- `100-lfu_cache.py` — Cache LFU  

Tous les fichiers héritent de `BaseCaching`.

---

## 🧩 BaseCaching

Le fichier `base_caching.py` fournit :

- `MAX_ITEMS = 4`
- `self.cache_data` — dictionnaire contenant les données
- Les méthodes à surcharger :
  - `put()`
  - `get()`

---

## 📝 Exigences

- Python 3.9
- Ubuntu 20.04 LTS
- Style : pycodestyle 2.5
- Tous les fichiers doivent être exécutables
- Documentation obligatoire pour :
  - modules
  - classes
  - fonctions
- Longueur des fichiers vérifiée avec `wc`

---

## 🧪 Exemple d’utilisation

```python
my_cache = BasicCache()
my_cache.put("A", "Hello")
print(my_cache.get("A"))  # Hello
my readme
