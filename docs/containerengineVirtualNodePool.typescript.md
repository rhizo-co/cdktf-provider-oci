# `containerengineVirtualNodePool` Submodule <a name="`containerengineVirtualNodePool` Submodule" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerengineVirtualNodePool <a name="ContainerengineVirtualNodePool" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool oci_containerengine_virtual_node_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineVirtualNodePool.ContainerengineVirtualNodePool(scope: Construct, id: string, config: ContainerengineVirtualNodePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig">ContainerengineVirtualNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig">ContainerengineVirtualNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putInitialVirtualNodeLabels">putInitialVirtualNodeLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPlacementConfigurations">putPlacementConfigurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPodConfiguration">putPodConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putVirtualNodeTags">putVirtualNodeTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetInitialVirtualNodeLabels">resetInitialVirtualNodeLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetTaints">resetTaints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetVirtualNodeTags">resetVirtualNodeTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInitialVirtualNodeLabels` <a name="putInitialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putInitialVirtualNodeLabels"></a>

```typescript
public putInitialVirtualNodeLabels(value: IResolvable | ContainerengineVirtualNodePoolInitialVirtualNodeLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putInitialVirtualNodeLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>[]

---

##### `putPlacementConfigurations` <a name="putPlacementConfigurations" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPlacementConfigurations"></a>

```typescript
public putPlacementConfigurations(value: IResolvable | ContainerengineVirtualNodePoolPlacementConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPlacementConfigurations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>[]

---

##### `putPodConfiguration` <a name="putPodConfiguration" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPodConfiguration"></a>

```typescript
public putPodConfiguration(value: ContainerengineVirtualNodePoolPodConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPodConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a>

---

##### `putTaints` <a name="putTaints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTaints"></a>

```typescript
public putTaints(value: IResolvable | ContainerengineVirtualNodePoolTaints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTaints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerengineVirtualNodePoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a>

---

##### `putVirtualNodeTags` <a name="putVirtualNodeTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putVirtualNodeTags"></a>

```typescript
public putVirtualNodeTags(value: ContainerengineVirtualNodePoolVirtualNodeTags): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putVirtualNodeTags.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialVirtualNodeLabels` <a name="resetInitialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetInitialVirtualNodeLabels"></a>

```typescript
public resetInitialVirtualNodeLabels(): void
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```

##### `resetTaints` <a name="resetTaints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetTaints"></a>

```typescript
public resetTaints(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVirtualNodeTags` <a name="resetVirtualNodeTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetVirtualNodeTags"></a>

```typescript
public resetVirtualNodeTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerengineVirtualNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isConstruct"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

containerengineVirtualNodePool.ContainerengineVirtualNodePool.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformElement"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformResource"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerengineVirtualNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerengineVirtualNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerengineVirtualNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerengineVirtualNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.initialVirtualNodeLabels">initialVirtualNodeLabels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList">ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.kubernetesVersion">kubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.placementConfigurations">placementConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList">ContainerengineVirtualNodePoolPlacementConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.podConfiguration">podConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference">ContainerengineVirtualNodePoolPodConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.taints">taints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList">ContainerengineVirtualNodePoolTaintsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference">ContainerengineVirtualNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.virtualNodeTags">virtualNodeTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference">ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.initialVirtualNodeLabelsInput">initialVirtualNodeLabelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.placementConfigurationsInput">placementConfigurationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.podConfigurationInput">podConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.taintsInput">taintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.virtualNodeTagsInput">virtualNodeTagsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.size">size</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `initialVirtualNodeLabels`<sup>Required</sup> <a name="initialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.initialVirtualNodeLabels"></a>

```typescript
public readonly initialVirtualNodeLabels: ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList">ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList</a>

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `placementConfigurations`<sup>Required</sup> <a name="placementConfigurations" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.placementConfigurations"></a>

```typescript
public readonly placementConfigurations: ContainerengineVirtualNodePoolPlacementConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList">ContainerengineVirtualNodePoolPlacementConfigurationsList</a>

---

##### `podConfiguration`<sup>Required</sup> <a name="podConfiguration" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.podConfiguration"></a>

```typescript
public readonly podConfiguration: ContainerengineVirtualNodePoolPodConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference">ContainerengineVirtualNodePoolPodConfigurationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `taints`<sup>Required</sup> <a name="taints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.taints"></a>

```typescript
public readonly taints: ContainerengineVirtualNodePoolTaintsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList">ContainerengineVirtualNodePoolTaintsList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerengineVirtualNodePoolTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference">ContainerengineVirtualNodePoolTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `virtualNodeTags`<sup>Required</sup> <a name="virtualNodeTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.virtualNodeTags"></a>

```typescript
public readonly virtualNodeTags: ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference">ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialVirtualNodeLabelsInput`<sup>Optional</sup> <a name="initialVirtualNodeLabelsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.initialVirtualNodeLabelsInput"></a>

```typescript
public readonly initialVirtualNodeLabelsInput: IResolvable | ContainerengineVirtualNodePoolInitialVirtualNodeLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>[]

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `placementConfigurationsInput`<sup>Optional</sup> <a name="placementConfigurationsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.placementConfigurationsInput"></a>

```typescript
public readonly placementConfigurationsInput: IResolvable | ContainerengineVirtualNodePoolPlacementConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>[]

---

##### `podConfigurationInput`<sup>Optional</sup> <a name="podConfigurationInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.podConfigurationInput"></a>

```typescript
public readonly podConfigurationInput: ContainerengineVirtualNodePoolPodConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a>

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.taintsInput"></a>

```typescript
public readonly taintsInput: IResolvable | ContainerengineVirtualNodePoolTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerengineVirtualNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a>

---

##### `virtualNodeTagsInput`<sup>Optional</sup> <a name="virtualNodeTagsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.virtualNodeTagsInput"></a>

```typescript
public readonly virtualNodeTagsInput: ContainerengineVirtualNodePoolVirtualNodeTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerengineVirtualNodePoolConfig <a name="ContainerengineVirtualNodePoolConfig" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.Initializer"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineVirtualNodePoolConfig: containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#cluster_id ContainerengineVirtualNodePool#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#compartment_id ContainerengineVirtualNodePool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#display_name ContainerengineVirtualNodePool#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.placementConfigurations">placementConfigurations</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>[]</code> | placement_configurations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.podConfiguration">podConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a></code> | pod_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#size ContainerengineVirtualNodePool#size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#id ContainerengineVirtualNodePool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.initialVirtualNodeLabels">initialVirtualNodeLabels</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>[]</code> | initial_virtual_node_labels block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.taints">taints</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>[]</code> | taints block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.virtualNodeTags">virtualNodeTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a></code> | virtual_node_tags block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#cluster_id ContainerengineVirtualNodePool#cluster_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#compartment_id ContainerengineVirtualNodePool#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#display_name ContainerengineVirtualNodePool#display_name}.

---

##### `placementConfigurations`<sup>Required</sup> <a name="placementConfigurations" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.placementConfigurations"></a>

```typescript
public readonly placementConfigurations: IResolvable | ContainerengineVirtualNodePoolPlacementConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>[]

placement_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#placement_configurations ContainerengineVirtualNodePool#placement_configurations}

---

##### `podConfiguration`<sup>Required</sup> <a name="podConfiguration" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.podConfiguration"></a>

```typescript
public readonly podConfiguration: ContainerengineVirtualNodePoolPodConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a>

pod_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#pod_configuration ContainerengineVirtualNodePool#pod_configuration}

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#size ContainerengineVirtualNodePool#size}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#id ContainerengineVirtualNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialVirtualNodeLabels`<sup>Optional</sup> <a name="initialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.initialVirtualNodeLabels"></a>

```typescript
public readonly initialVirtualNodeLabels: IResolvable | ContainerengineVirtualNodePoolInitialVirtualNodeLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>[]

initial_virtual_node_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#initial_virtual_node_labels ContainerengineVirtualNodePool#initial_virtual_node_labels}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.taints"></a>

```typescript
public readonly taints: IResolvable | ContainerengineVirtualNodePoolTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>[]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#taints ContainerengineVirtualNodePool#taints}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerengineVirtualNodePoolTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#timeouts ContainerengineVirtualNodePool#timeouts}

---

##### `virtualNodeTags`<sup>Optional</sup> <a name="virtualNodeTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.virtualNodeTags"></a>

```typescript
public readonly virtualNodeTags: ContainerengineVirtualNodePoolVirtualNodeTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a>

virtual_node_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#virtual_node_tags ContainerengineVirtualNodePool#virtual_node_tags}

---

### ContainerengineVirtualNodePoolInitialVirtualNodeLabels <a name="ContainerengineVirtualNodePoolInitialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.Initializer"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineVirtualNodePoolInitialVirtualNodeLabels: containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#key ContainerengineVirtualNodePool#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#value ContainerengineVirtualNodePool#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#key ContainerengineVirtualNodePool#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#value ContainerengineVirtualNodePool#value}.

---

### ContainerengineVirtualNodePoolPlacementConfigurations <a name="ContainerengineVirtualNodePoolPlacementConfigurations" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.Initializer"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineVirtualNodePoolPlacementConfigurations: containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#availability_domain ContainerengineVirtualNodePool#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.faultDomain">faultDomain</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#fault_domain ContainerengineVirtualNodePool#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#subnet_id ContainerengineVirtualNodePool#subnet_id}. |

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#availability_domain ContainerengineVirtualNodePool#availability_domain}.

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.faultDomain"></a>

```typescript
public readonly faultDomain: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#fault_domain ContainerengineVirtualNodePool#fault_domain}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#subnet_id ContainerengineVirtualNodePool#subnet_id}.

---

### ContainerengineVirtualNodePoolPodConfiguration <a name="ContainerengineVirtualNodePoolPodConfiguration" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.Initializer"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineVirtualNodePoolPodConfiguration: containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.shape">shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#shape ContainerengineVirtualNodePool#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#subnet_id ContainerengineVirtualNodePool#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}. |

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#shape ContainerengineVirtualNodePool#shape}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#subnet_id ContainerengineVirtualNodePool#subnet_id}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}.

---

### ContainerengineVirtualNodePoolTaints <a name="ContainerengineVirtualNodePoolTaints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.Initializer"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineVirtualNodePoolTaints: containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.effect">effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#effect ContainerengineVirtualNodePool#effect}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#key ContainerengineVirtualNodePool#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#value ContainerengineVirtualNodePool#value}. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#effect ContainerengineVirtualNodePool#effect}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#key ContainerengineVirtualNodePool#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#value ContainerengineVirtualNodePool#value}.

---

### ContainerengineVirtualNodePoolTimeouts <a name="ContainerengineVirtualNodePoolTimeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.Initializer"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineVirtualNodePoolTimeouts: containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#create ContainerengineVirtualNodePool#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#delete ContainerengineVirtualNodePool#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#update ContainerengineVirtualNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#create ContainerengineVirtualNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#delete ContainerengineVirtualNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#update ContainerengineVirtualNodePool#update}.

---

### ContainerengineVirtualNodePoolVirtualNodeTags <a name="ContainerengineVirtualNodePoolVirtualNodeTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.Initializer"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineVirtualNodePoolVirtualNodeTags: containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}. |

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList <a name="ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.get"></a>

```typescript
public get(index: number): ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineVirtualNodePoolInitialVirtualNodeLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>[]

---


### ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference <a name="ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineVirtualNodePoolInitialVirtualNodeLabels;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>

---


### ContainerengineVirtualNodePoolPlacementConfigurationsList <a name="ContainerengineVirtualNodePoolPlacementConfigurationsList" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.get"></a>

```typescript
public get(index: number): ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineVirtualNodePoolPlacementConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>[]

---


### ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference <a name="ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.faultDomainInput">faultDomainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.faultDomain">faultDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `faultDomainInput`<sup>Optional</sup> <a name="faultDomainInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.faultDomainInput"></a>

```typescript
public readonly faultDomainInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineVirtualNodePoolPlacementConfigurations;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>

---


### ContainerengineVirtualNodePoolPodConfigurationOutputReference <a name="ContainerengineVirtualNodePoolPodConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.shapeInput">shapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.shapeInput"></a>

```typescript
public readonly shapeInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineVirtualNodePoolPodConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a>

---


### ContainerengineVirtualNodePoolTaintsList <a name="ContainerengineVirtualNodePoolTaintsList" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.get"></a>

```typescript
public get(index: number): ContainerengineVirtualNodePoolTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineVirtualNodePoolTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>[]

---


### ContainerengineVirtualNodePoolTaintsOutputReference <a name="ContainerengineVirtualNodePoolTaintsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetEffect">resetEffect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffect` <a name="resetEffect" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetEffect"></a>

```typescript
public resetEffect(): void
```

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineVirtualNodePoolTaints;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>

---


### ContainerengineVirtualNodePoolTimeoutsOutputReference <a name="ContainerengineVirtualNodePoolTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineVirtualNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a>

---


### ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference <a name="ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer"></a>

```typescript
import { containerengineVirtualNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineVirtualNodePoolVirtualNodeTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a>

---



