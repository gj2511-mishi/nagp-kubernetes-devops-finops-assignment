# NAGP Kubernetes & DevOps FinOps Assignment

## Overview

This project demonstrates deployment of a containerized Employee API on Kubernetes with persistence, configuration management, autoscaling, self-healing, and cloud deployment on Google Kubernetes Engine (GKE).

## Technology Stack

* Node.js
* MySQL 8.0
* Docker
* Kubernetes
* Google Kubernetes Engine (GKE)

## Features

* Dockerized application
* ConfigMap and Secret management
* Persistent Volume Claim (PVC)
* MySQL database
* Automated database initialization
* 4 API replicas
* Horizontal Pod Autoscaler (HPA)
* Self-healing
* Public LoadBalancer endpoint

## Deployment

```bash
kubectl apply -f kubernetes/namespace.yaml
kubectl apply -f kubernetes/secret.yaml
kubectl apply -f kubernetes/configmap.yaml

kubectl apply -f kubernetes/mysql/init-configmap.yaml
kubectl apply -f kubernetes/mysql/pvc.yaml
kubectl apply -f kubernetes/mysql/deployment.yaml
kubectl apply -f kubernetes/mysql/service.yaml

kubectl apply -f kubernetes/api/deployment.yaml
kubectl apply -f kubernetes/api/service.yaml
kubectl apply -f kubernetes/api/hpa.yaml
```

## Validation

```bash
kubectl get pods -n nagp
kubectl get svc -n nagp
kubectl get hpa -n nagp
kubectl get pvc -n nagp
```

## Public Endpoints

```text
/health
/api/employees
```

## Self-Healing Test

```bash
kubectl delete pod -n nagp <pod-name>
```

Kubernetes automatically recreates the deleted pod.

## Docker Hub

gauravjoshi03/employee-api:v1

## Author

Gaurav Joshi
