import cv2
import numpy as np
import math
import os

# Ensure public/assets directory exists
os.makedirs("public/assets", exist_ok=True)

width, height = 1920, 1080
fps = 60
duration_sec = 6
total_frames = fps * duration_sec
output_path = "public/assets/hero-cinematic.mp4"

# Define Video Writer using mp4v codec
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))

print(f"Generating {total_frames} frames of 1080p 60fps video to {output_path}...")

# 3D Node Mesh (Icosahedron-like structure)
num_nodes = 42
radius = 320

nodes = []
for i in range(num_nodes):
    phi = math.acos(-1 + (2 * i) / num_nodes)
    theta = math.sqrt(num_nodes * math.pi) * phi
    nodes.append([
        radius * math.cos(theta) * math.sin(phi),
        radius * math.sin(theta) * math.sin(phi),
        radius * math.cos(phi)
    ])

# Particle dust field
num_particles = 120
particles = []
np.random.seed(42)
for _ in range(num_particles):
    particles.append({
        'x': np.random.uniform(-width, width),
        'y': np.random.uniform(-height, height),
        'z': np.random.uniform(-500, 500),
        'radius': np.random.uniform(1.0, 3.0),
        'speed': np.random.uniform(0.5, 2.0)
    })

for frame_idx in range(total_frames):
    t = frame_idx / total_frames
    angle_y = t * 2 * math.pi
    angle_x = math.sin(t * 2 * math.pi) * 0.35 + 0.2
    angle_z = t * math.pi * 0.5

    # Create dark base canvas (BGR format for OpenCV)
    canvas = np.zeros((height, width, 3), dtype=np.uint8)
    canvas[:, :] = [14, 10, 8] # #080A0E in BGR

    center_x, center_y = width // 2, height // 2

    # Render particles
    for p in particles:
        pz = p['z'] + (t * 200 * p['speed']) % 1000 - 500
        fov = 500
        scale = fov / (fov + pz + 600)
        px = int(center_x + p['x'] * scale)
        py = int(center_y + p['y'] * scale)
        
        if 0 <= px < width and 0 <= py < height:
            alpha = max(0.1, min(0.8, scale * 0.7))
            color_val = int(220 * alpha)
            cv2.circle(canvas, (px, py), max(1, int(p['radius'] * scale * 2)), (color_val, color_val, color_val), -1)

    # 3D Node Transformation & Projection
    projected = []
    for node in nodes:
        x0, y0, z0 = node
        
        # Y Rotation
        x1 = x0 * math.cos(angle_y) - z0 * math.sin(angle_y)
        z1 = z0 * math.cos(angle_y) + x0 * math.sin(angle_y)
        y1 = y0

        # X Rotation
        y2 = y1 * math.cos(angle_x) - z1 * math.sin(angle_x)
        z2 = z1 * math.cos(angle_x) + y1 * math.sin(angle_x)
        x2 = x1

        # Z Rotation
        x3 = x2 * math.cos(angle_z) - y2 * math.sin(angle_z)
        y3 = y2 * math.cos(angle_z) + x2 * math.sin(angle_z)
        z3 = z2

        fov = 550
        scale = fov / (fov + z3 + 500)
        px = int(center_x + x3 * scale)
        py = int(center_y + y3 * scale)
        projected.append((px, py, scale, z3))

    # Draw Connecting Lines (Cyber-Chrome Glow)
    for i in range(len(projected)):
        for j in range(i + 1, len(projected)):
            p1 = projected[i]
            p2 = projected[j]
            dx = p1[0] - p2[0]
            dy = p1[1] - p2[1]
            dist = math.sqrt(dx*dx + dy*dy)

            if dist < 220:
                alpha = (1 - dist / 220) * 0.65 * ((p1[2] + p2[2]) / 2)
                color = (int(255 * alpha), int(240 * alpha), int(212 * alpha))
                cv2.line(canvas, (p1[0], p1[1]), (p2[0], p2[1]), color, 1, cv2.LINE_AA)

    # Draw Nodes as Glowing Chrome Spheres
    for p in projected:
        alpha = max(0.3, (p[3] + radius) / (radius * 2))
        radius_px = max(2, int(5 * p[2]))
        # Glow ring
        cv2.circle(canvas, (p[0], p[1]), radius_px + 3, (0, int(255 * alpha), int(212 * alpha)), -1, cv2.LINE_AA)
        # Core highlight
        cv2.circle(canvas, (p[0], p[1]), radius_px, (255, 255, 255), -1, cv2.LINE_AA)

    out.write(canvas)
    if (frame_idx + 1) % 60 == 0:
        print(f"Rendered {frame_idx + 1}/{total_frames} frames...")

out.release()
print(f"DONE! Video saved to {output_path}")
