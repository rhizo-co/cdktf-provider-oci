# `goldenGateDeployment` Submodule <a name="`goldenGateDeployment` Submodule" id="rhizo-co-terraform-provider-oci.goldenGateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoldenGateDeployment <a name="GoldenGateDeployment" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment oci_golden_gate_deployment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

new goldenGateDeployment.GoldenGateDeployment(scope: Construct, id: string, config: GoldenGateDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig">GoldenGateDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig">GoldenGateDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putLocks">putLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceConfiguration">putMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData">putOggData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDeploymentBackupId">resetDeploymentBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetEnvironmentType">resetEnvironmentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetFqdn">resetFqdn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetIsLockOverride">resetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetIsPublic">resetIsPublic</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetLoadBalancerSubnetId">resetLoadBalancerSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetMaintenanceConfiguration">resetMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetOggData">resetOggData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocks` <a name="putLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putLocks"></a>

```typescript
public putLocks(value: IResolvable | GoldenGateDeploymentLocks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putLocks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>[]

---

##### `putMaintenanceConfiguration` <a name="putMaintenanceConfiguration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceConfiguration"></a>

```typescript
public putMaintenanceConfiguration(value: GoldenGateDeploymentMaintenanceConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: GoldenGateDeploymentMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a>

---

##### `putOggData` <a name="putOggData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData"></a>

```typescript
public putOggData(value: GoldenGateDeploymentOggData): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putTimeouts"></a>

```typescript
public putTimeouts(value: GoldenGateDeploymentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDeploymentBackupId` <a name="resetDeploymentBackupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDeploymentBackupId"></a>

```typescript
public resetDeploymentBackupId(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnvironmentType` <a name="resetEnvironmentType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetEnvironmentType"></a>

```typescript
public resetEnvironmentType(): void
```

##### `resetFqdn` <a name="resetFqdn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetFqdn"></a>

```typescript
public resetFqdn(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsLockOverride` <a name="resetIsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetIsLockOverride"></a>

```typescript
public resetIsLockOverride(): void
```

##### `resetIsPublic` <a name="resetIsPublic" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetIsPublic"></a>

```typescript
public resetIsPublic(): void
```

##### `resetLoadBalancerSubnetId` <a name="resetLoadBalancerSubnetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetLoadBalancerSubnetId"></a>

```typescript
public resetLoadBalancerSubnetId(): void
```

##### `resetLocks` <a name="resetLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetLocks"></a>

```typescript
public resetLocks(): void
```

##### `resetMaintenanceConfiguration` <a name="resetMaintenanceConfiguration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetMaintenanceConfiguration"></a>

```typescript
public resetMaintenanceConfiguration(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```

##### `resetOggData` <a name="resetOggData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetOggData"></a>

```typescript
public resetOggData(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoldenGateDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isConstruct"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

goldenGateDeployment.GoldenGateDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformElement"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

goldenGateDeployment.GoldenGateDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformResource"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

goldenGateDeployment.GoldenGateDeployment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

goldenGateDeployment.GoldenGateDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoldenGateDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoldenGateDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoldenGateDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoldenGateDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentDiagnosticData">deploymentDiagnosticData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList">GoldenGateDeploymentDeploymentDiagnosticDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentUrl">deploymentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.ingressIps">ingressIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList">GoldenGateDeploymentIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isHealthy">isHealthy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLatestVersion">isLatestVersion</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isStorageUtilizationLimitExceeded">isStorageUtilizationLimitExceeded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycleSubState">lifecycleSubState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList">GoldenGateDeploymentLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceConfiguration">maintenanceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference">GoldenGateDeploymentMaintenanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference">GoldenGateDeploymentMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nextMaintenanceActionType">nextMaintenanceActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nextMaintenanceDescription">nextMaintenanceDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.oggData">oggData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference">GoldenGateDeploymentOggDataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.publicIpAddress">publicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.storageUtilizationInBytes">storageUtilizationInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeOfNextMaintenance">timeOfNextMaintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeOggVersionSupportedUntil">timeOggVersionSupportedUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference">GoldenGateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeUpgradeRequired">timeUpgradeRequired</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentBackupIdInput">deploymentBackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.environmentTypeInput">environmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqdnInput">fqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isAutoScalingEnabledInput">isAutoScalingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLockOverrideInput">isLockOverrideInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isPublicInput">isPublicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.licenseModelInput">licenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerSubnetIdInput">loadBalancerSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.locksInput">locksInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceConfigurationInput">maintenanceConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.oggDataInput">oggDataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentBackupId">deploymentBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.environmentType">environmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLockOverride">isLockOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerSubnetId">loadBalancerSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `deploymentDiagnosticData`<sup>Required</sup> <a name="deploymentDiagnosticData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentDiagnosticData"></a>

```typescript
public readonly deploymentDiagnosticData: GoldenGateDeploymentDeploymentDiagnosticDataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList">GoldenGateDeploymentDeploymentDiagnosticDataList</a>

---

##### `deploymentUrl`<sup>Required</sup> <a name="deploymentUrl" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentUrl"></a>

```typescript
public readonly deploymentUrl: string;
```

- *Type:* string

---

##### `ingressIps`<sup>Required</sup> <a name="ingressIps" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.ingressIps"></a>

```typescript
public readonly ingressIps: GoldenGateDeploymentIngressIpsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList">GoldenGateDeploymentIngressIpsList</a>

---

##### `isHealthy`<sup>Required</sup> <a name="isHealthy" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isHealthy"></a>

```typescript
public readonly isHealthy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isLatestVersion`<sup>Required</sup> <a name="isLatestVersion" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLatestVersion"></a>

```typescript
public readonly isLatestVersion: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isStorageUtilizationLimitExceeded`<sup>Required</sup> <a name="isStorageUtilizationLimitExceeded" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isStorageUtilizationLimitExceeded"></a>

```typescript
public readonly isStorageUtilizationLimitExceeded: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `lifecycleSubState`<sup>Required</sup> <a name="lifecycleSubState" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycleSubState"></a>

```typescript
public readonly lifecycleSubState: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.locks"></a>

```typescript
public readonly locks: GoldenGateDeploymentLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList">GoldenGateDeploymentLocksList</a>

---

##### `maintenanceConfiguration`<sup>Required</sup> <a name="maintenanceConfiguration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceConfiguration"></a>

```typescript
public readonly maintenanceConfiguration: GoldenGateDeploymentMaintenanceConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference">GoldenGateDeploymentMaintenanceConfigurationOutputReference</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: GoldenGateDeploymentMaintenanceWindowOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference">GoldenGateDeploymentMaintenanceWindowOutputReference</a>

---

##### `nextMaintenanceActionType`<sup>Required</sup> <a name="nextMaintenanceActionType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nextMaintenanceActionType"></a>

```typescript
public readonly nextMaintenanceActionType: string;
```

- *Type:* string

---

##### `nextMaintenanceDescription`<sup>Required</sup> <a name="nextMaintenanceDescription" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nextMaintenanceDescription"></a>

```typescript
public readonly nextMaintenanceDescription: string;
```

- *Type:* string

---

##### `oggData`<sup>Required</sup> <a name="oggData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.oggData"></a>

```typescript
public readonly oggData: GoldenGateDeploymentOggDataOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference">GoldenGateDeploymentOggDataOutputReference</a>

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.publicIpAddress"></a>

```typescript
public readonly publicIpAddress: string;
```

- *Type:* string

---

##### `storageUtilizationInBytes`<sup>Required</sup> <a name="storageUtilizationInBytes" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.storageUtilizationInBytes"></a>

```typescript
public readonly storageUtilizationInBytes: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeOfNextMaintenance`<sup>Required</sup> <a name="timeOfNextMaintenance" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeOfNextMaintenance"></a>

```typescript
public readonly timeOfNextMaintenance: string;
```

- *Type:* string

---

##### `timeOggVersionSupportedUntil`<sup>Required</sup> <a name="timeOggVersionSupportedUntil" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeOggVersionSupportedUntil"></a>

```typescript
public readonly timeOggVersionSupportedUntil: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeouts"></a>

```typescript
public readonly timeouts: GoldenGateDeploymentTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference">GoldenGateDeploymentTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `timeUpgradeRequired`<sup>Required</sup> <a name="timeUpgradeRequired" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeUpgradeRequired"></a>

```typescript
public readonly timeUpgradeRequired: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cpuCoreCountInput"></a>

```typescript
public readonly cpuCoreCountInput: number;
```

- *Type:* number

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deploymentBackupIdInput`<sup>Optional</sup> <a name="deploymentBackupIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentBackupIdInput"></a>

```typescript
public readonly deploymentBackupIdInput: string;
```

- *Type:* string

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentTypeInput"></a>

```typescript
public readonly deploymentTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `environmentTypeInput`<sup>Optional</sup> <a name="environmentTypeInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.environmentTypeInput"></a>

```typescript
public readonly environmentTypeInput: string;
```

- *Type:* string

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqdnInput"></a>

```typescript
public readonly fqdnInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isAutoScalingEnabledInput`<sup>Optional</sup> <a name="isAutoScalingEnabledInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isAutoScalingEnabledInput"></a>

```typescript
public readonly isAutoScalingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isLockOverrideInput`<sup>Optional</sup> <a name="isLockOverrideInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLockOverrideInput"></a>

```typescript
public readonly isLockOverrideInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPublicInput`<sup>Optional</sup> <a name="isPublicInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isPublicInput"></a>

```typescript
public readonly isPublicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.licenseModelInput"></a>

```typescript
public readonly licenseModelInput: string;
```

- *Type:* string

---

##### `loadBalancerSubnetIdInput`<sup>Optional</sup> <a name="loadBalancerSubnetIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerSubnetIdInput"></a>

```typescript
public readonly loadBalancerSubnetIdInput: string;
```

- *Type:* string

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.locksInput"></a>

```typescript
public readonly locksInput: IResolvable | GoldenGateDeploymentLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>[]

---

##### `maintenanceConfigurationInput`<sup>Optional</sup> <a name="maintenanceConfigurationInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceConfigurationInput"></a>

```typescript
public readonly maintenanceConfigurationInput: GoldenGateDeploymentMaintenanceConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a>

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: GoldenGateDeploymentMaintenanceWindow;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a>

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `oggDataInput`<sup>Optional</sup> <a name="oggDataInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.oggDataInput"></a>

```typescript
public readonly oggDataInput: GoldenGateDeploymentOggData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoldenGateDeploymentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deploymentBackupId`<sup>Required</sup> <a name="deploymentBackupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentBackupId"></a>

```typescript
public readonly deploymentBackupId: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.environmentType"></a>

```typescript
public readonly environmentType: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isAutoScalingEnabled"></a>

```typescript
public readonly isAutoScalingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `loadBalancerSubnetId`<sup>Required</sup> <a name="loadBalancerSubnetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerSubnetId"></a>

```typescript
public readonly loadBalancerSubnetId: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoldenGateDeploymentConfig <a name="GoldenGateDeploymentConfig" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

const goldenGateDeploymentConfig: goldenGateDeployment.GoldenGateDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#compartment_id GoldenGateDeployment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#cpu_core_count GoldenGateDeployment#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.deploymentType">deploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_type GoldenGateDeployment#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#display_name GoldenGateDeployment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_auto_scaling_enabled GoldenGateDeployment#is_auto_scaling_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.licenseModel">licenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#license_model GoldenGateDeployment#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#subnet_id GoldenGateDeployment#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#defined_tags GoldenGateDeployment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.deploymentBackupId">deploymentBackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_backup_id GoldenGateDeployment#deployment_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#description GoldenGateDeployment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.environmentType">environmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#environment_type GoldenGateDeployment#environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.fqdn">fqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#fqdn GoldenGateDeployment#fqdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#freeform_tags GoldenGateDeployment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#id GoldenGateDeployment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isLockOverride">isLockOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_lock_override GoldenGateDeployment#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isPublic">isPublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_public GoldenGateDeployment#is_public}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.loadBalancerSubnetId">loadBalancerSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#load_balancer_subnet_id GoldenGateDeployment#load_balancer_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.locks">locks</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>[]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.maintenanceConfiguration">maintenanceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a></code> | maintenance_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#nsg_ids GoldenGateDeployment#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.oggData">oggData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a></code> | ogg_data block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#state GoldenGateDeployment#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#compartment_id GoldenGateDeployment#compartment_id}.

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#cpu_core_count GoldenGateDeployment#cpu_core_count}.

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_type GoldenGateDeployment#deployment_type}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#display_name GoldenGateDeployment#display_name}.

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isAutoScalingEnabled"></a>

```typescript
public readonly isAutoScalingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_auto_scaling_enabled GoldenGateDeployment#is_auto_scaling_enabled}.

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#license_model GoldenGateDeployment#license_model}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#subnet_id GoldenGateDeployment#subnet_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#defined_tags GoldenGateDeployment#defined_tags}.

---

##### `deploymentBackupId`<sup>Optional</sup> <a name="deploymentBackupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.deploymentBackupId"></a>

```typescript
public readonly deploymentBackupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_backup_id GoldenGateDeployment#deployment_backup_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#description GoldenGateDeployment#description}.

---

##### `environmentType`<sup>Optional</sup> <a name="environmentType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.environmentType"></a>

```typescript
public readonly environmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#environment_type GoldenGateDeployment#environment_type}.

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#fqdn GoldenGateDeployment#fqdn}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#freeform_tags GoldenGateDeployment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#id GoldenGateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_lock_override GoldenGateDeployment#is_lock_override}.

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isPublic"></a>

```typescript
public readonly isPublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_public GoldenGateDeployment#is_public}.

---

##### `loadBalancerSubnetId`<sup>Optional</sup> <a name="loadBalancerSubnetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.loadBalancerSubnetId"></a>

```typescript
public readonly loadBalancerSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#load_balancer_subnet_id GoldenGateDeployment#load_balancer_subnet_id}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.locks"></a>

```typescript
public readonly locks: IResolvable | GoldenGateDeploymentLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>[]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#locks GoldenGateDeployment#locks}

---

##### `maintenanceConfiguration`<sup>Optional</sup> <a name="maintenanceConfiguration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.maintenanceConfiguration"></a>

```typescript
public readonly maintenanceConfiguration: GoldenGateDeploymentMaintenanceConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a>

maintenance_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#maintenance_configuration GoldenGateDeployment#maintenance_configuration}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: GoldenGateDeploymentMaintenanceWindow;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#maintenance_window GoldenGateDeployment#maintenance_window}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#nsg_ids GoldenGateDeployment#nsg_ids}.

---

##### `oggData`<sup>Optional</sup> <a name="oggData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.oggData"></a>

```typescript
public readonly oggData: GoldenGateDeploymentOggData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a>

ogg_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#ogg_data GoldenGateDeployment#ogg_data}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#state GoldenGateDeployment#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoldenGateDeploymentTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#timeouts GoldenGateDeployment#timeouts}

---

### GoldenGateDeploymentDeploymentDiagnosticData <a name="GoldenGateDeploymentDeploymentDiagnosticData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticData.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

const goldenGateDeploymentDeploymentDiagnosticData: goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticData = { ... }
```


### GoldenGateDeploymentIngressIps <a name="GoldenGateDeploymentIngressIps" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIps.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

const goldenGateDeploymentIngressIps: goldenGateDeployment.GoldenGateDeploymentIngressIps = { ... }
```


### GoldenGateDeploymentLocks <a name="GoldenGateDeploymentLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

const goldenGateDeploymentLocks: goldenGateDeployment.GoldenGateDeploymentLocks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#type GoldenGateDeployment#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.property.message">message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#message GoldenGateDeployment#message}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#type GoldenGateDeployment#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#message GoldenGateDeployment#message}.

---

### GoldenGateDeploymentMaintenanceConfiguration <a name="GoldenGateDeploymentMaintenanceConfiguration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

const goldenGateDeploymentMaintenanceConfiguration: goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.bundleReleaseUpgradePeriodInDays">bundleReleaseUpgradePeriodInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#bundle_release_upgrade_period_in_days GoldenGateDeployment#bundle_release_upgrade_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.interimReleaseUpgradePeriodInDays">interimReleaseUpgradePeriodInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#interim_release_upgrade_period_in_days GoldenGateDeployment#interim_release_upgrade_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.isInterimReleaseAutoUpgradeEnabled">isInterimReleaseAutoUpgradeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_interim_release_auto_upgrade_enabled GoldenGateDeployment#is_interim_release_auto_upgrade_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.majorReleaseUpgradePeriodInDays">majorReleaseUpgradePeriodInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#major_release_upgrade_period_in_days GoldenGateDeployment#major_release_upgrade_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.securityPatchUpgradePeriodInDays">securityPatchUpgradePeriodInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#security_patch_upgrade_period_in_days GoldenGateDeployment#security_patch_upgrade_period_in_days}. |

---

##### `bundleReleaseUpgradePeriodInDays`<sup>Optional</sup> <a name="bundleReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.bundleReleaseUpgradePeriodInDays"></a>

```typescript
public readonly bundleReleaseUpgradePeriodInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#bundle_release_upgrade_period_in_days GoldenGateDeployment#bundle_release_upgrade_period_in_days}.

---

##### `interimReleaseUpgradePeriodInDays`<sup>Optional</sup> <a name="interimReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.interimReleaseUpgradePeriodInDays"></a>

```typescript
public readonly interimReleaseUpgradePeriodInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#interim_release_upgrade_period_in_days GoldenGateDeployment#interim_release_upgrade_period_in_days}.

---

##### `isInterimReleaseAutoUpgradeEnabled`<sup>Optional</sup> <a name="isInterimReleaseAutoUpgradeEnabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.isInterimReleaseAutoUpgradeEnabled"></a>

```typescript
public readonly isInterimReleaseAutoUpgradeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_interim_release_auto_upgrade_enabled GoldenGateDeployment#is_interim_release_auto_upgrade_enabled}.

---

##### `majorReleaseUpgradePeriodInDays`<sup>Optional</sup> <a name="majorReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.majorReleaseUpgradePeriodInDays"></a>

```typescript
public readonly majorReleaseUpgradePeriodInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#major_release_upgrade_period_in_days GoldenGateDeployment#major_release_upgrade_period_in_days}.

---

##### `securityPatchUpgradePeriodInDays`<sup>Optional</sup> <a name="securityPatchUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.securityPatchUpgradePeriodInDays"></a>

```typescript
public readonly securityPatchUpgradePeriodInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#security_patch_upgrade_period_in_days GoldenGateDeployment#security_patch_upgrade_period_in_days}.

---

### GoldenGateDeploymentMaintenanceWindow <a name="GoldenGateDeploymentMaintenanceWindow" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

const goldenGateDeploymentMaintenanceWindow: goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.property.day">day</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#day GoldenGateDeployment#day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.property.startHour">startHour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#start_hour GoldenGateDeployment#start_hour}. |

---

##### `day`<sup>Required</sup> <a name="day" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#day GoldenGateDeployment#day}.

---

##### `startHour`<sup>Required</sup> <a name="startHour" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.property.startHour"></a>

```typescript
public readonly startHour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#start_hour GoldenGateDeployment#start_hour}.

---

### GoldenGateDeploymentOggData <a name="GoldenGateDeploymentOggData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

const goldenGateDeploymentOggData: goldenGateDeployment.GoldenGateDeploymentOggData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.deploymentName">deploymentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_name GoldenGateDeployment#deployment_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.adminPassword">adminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#admin_password GoldenGateDeployment#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.adminUsername">adminUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#admin_username GoldenGateDeployment#admin_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#certificate GoldenGateDeployment#certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.credentialStore">credentialStore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#credential_store GoldenGateDeployment#credential_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.groupToRolesMapping">groupToRolesMapping</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a></code> | group_to_roles_mapping block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.identityDomainId">identityDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#identity_domain_id GoldenGateDeployment#identity_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#key GoldenGateDeployment#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.oggVersion">oggVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#ogg_version GoldenGateDeployment#ogg_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#password_secret_id GoldenGateDeployment#password_secret_id}. |

---

##### `deploymentName`<sup>Required</sup> <a name="deploymentName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.deploymentName"></a>

```typescript
public readonly deploymentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_name GoldenGateDeployment#deployment_name}.

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#admin_password GoldenGateDeployment#admin_password}.

---

##### `adminUsername`<sup>Optional</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#admin_username GoldenGateDeployment#admin_username}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#certificate GoldenGateDeployment#certificate}.

---

##### `credentialStore`<sup>Optional</sup> <a name="credentialStore" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.credentialStore"></a>

```typescript
public readonly credentialStore: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#credential_store GoldenGateDeployment#credential_store}.

---

##### `groupToRolesMapping`<sup>Optional</sup> <a name="groupToRolesMapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.groupToRolesMapping"></a>

```typescript
public readonly groupToRolesMapping: GoldenGateDeploymentOggDataGroupToRolesMapping;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a>

group_to_roles_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#group_to_roles_mapping GoldenGateDeployment#group_to_roles_mapping}

---

##### `identityDomainId`<sup>Optional</sup> <a name="identityDomainId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.identityDomainId"></a>

```typescript
public readonly identityDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#identity_domain_id GoldenGateDeployment#identity_domain_id}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#key GoldenGateDeployment#key}.

---

##### `oggVersion`<sup>Optional</sup> <a name="oggVersion" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.oggVersion"></a>

```typescript
public readonly oggVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#ogg_version GoldenGateDeployment#ogg_version}.

---

##### `passwordSecretId`<sup>Optional</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#password_secret_id GoldenGateDeployment#password_secret_id}.

---

### GoldenGateDeploymentOggDataGroupToRolesMapping <a name="GoldenGateDeploymentOggDataGroupToRolesMapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

const goldenGateDeploymentOggDataGroupToRolesMapping: goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#security_group_id GoldenGateDeployment#security_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.administratorGroupId">administratorGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#administrator_group_id GoldenGateDeployment#administrator_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.operatorGroupId">operatorGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#operator_group_id GoldenGateDeployment#operator_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.userGroupId">userGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#user_group_id GoldenGateDeployment#user_group_id}. |

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#security_group_id GoldenGateDeployment#security_group_id}.

---

##### `administratorGroupId`<sup>Optional</sup> <a name="administratorGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.administratorGroupId"></a>

```typescript
public readonly administratorGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#administrator_group_id GoldenGateDeployment#administrator_group_id}.

---

##### `operatorGroupId`<sup>Optional</sup> <a name="operatorGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.operatorGroupId"></a>

```typescript
public readonly operatorGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#operator_group_id GoldenGateDeployment#operator_group_id}.

---

##### `userGroupId`<sup>Optional</sup> <a name="userGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.userGroupId"></a>

```typescript
public readonly userGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#user_group_id GoldenGateDeployment#user_group_id}.

---

### GoldenGateDeploymentTimeouts <a name="GoldenGateDeploymentTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

const goldenGateDeploymentTimeouts: goldenGateDeployment.GoldenGateDeploymentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#create GoldenGateDeployment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#delete GoldenGateDeployment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#update GoldenGateDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#create GoldenGateDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#delete GoldenGateDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#update GoldenGateDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoldenGateDeploymentDeploymentDiagnosticDataList <a name="GoldenGateDeploymentDeploymentDiagnosticDataList" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

new goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.get"></a>

```typescript
public get(index: number): GoldenGateDeploymentDeploymentDiagnosticDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoldenGateDeploymentDeploymentDiagnosticDataOutputReference <a name="GoldenGateDeploymentDeploymentDiagnosticDataOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

new goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.diagnosticState">diagnosticState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.timeDiagnosticEnd">timeDiagnosticEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.timeDiagnosticStart">timeDiagnosticStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticData">GoldenGateDeploymentDeploymentDiagnosticData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `diagnosticState`<sup>Required</sup> <a name="diagnosticState" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.diagnosticState"></a>

```typescript
public readonly diagnosticState: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `timeDiagnosticEnd`<sup>Required</sup> <a name="timeDiagnosticEnd" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.timeDiagnosticEnd"></a>

```typescript
public readonly timeDiagnosticEnd: string;
```

- *Type:* string

---

##### `timeDiagnosticStart`<sup>Required</sup> <a name="timeDiagnosticStart" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.timeDiagnosticStart"></a>

```typescript
public readonly timeDiagnosticStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoldenGateDeploymentDeploymentDiagnosticData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticData">GoldenGateDeploymentDeploymentDiagnosticData</a>

---


### GoldenGateDeploymentIngressIpsList <a name="GoldenGateDeploymentIngressIpsList" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

new goldenGateDeployment.GoldenGateDeploymentIngressIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.get"></a>

```typescript
public get(index: number): GoldenGateDeploymentIngressIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoldenGateDeploymentIngressIpsOutputReference <a name="GoldenGateDeploymentIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

new goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.ingressIp">ingressIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIps">GoldenGateDeploymentIngressIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingressIp`<sup>Required</sup> <a name="ingressIp" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.ingressIp"></a>

```typescript
public readonly ingressIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoldenGateDeploymentIngressIps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIps">GoldenGateDeploymentIngressIps</a>

---


### GoldenGateDeploymentLocksList <a name="GoldenGateDeploymentLocksList" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

new goldenGateDeployment.GoldenGateDeploymentLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.get"></a>

```typescript
public get(index: number): GoldenGateDeploymentLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoldenGateDeploymentLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>[]

---


### GoldenGateDeploymentLocksOutputReference <a name="GoldenGateDeploymentLocksOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

new goldenGateDeployment.GoldenGateDeploymentLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resetMessage">resetMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoldenGateDeploymentLocks;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>

---


### GoldenGateDeploymentMaintenanceConfigurationOutputReference <a name="GoldenGateDeploymentMaintenanceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

new goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetBundleReleaseUpgradePeriodInDays">resetBundleReleaseUpgradePeriodInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetInterimReleaseUpgradePeriodInDays">resetInterimReleaseUpgradePeriodInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetIsInterimReleaseAutoUpgradeEnabled">resetIsInterimReleaseAutoUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetMajorReleaseUpgradePeriodInDays">resetMajorReleaseUpgradePeriodInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetSecurityPatchUpgradePeriodInDays">resetSecurityPatchUpgradePeriodInDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBundleReleaseUpgradePeriodInDays` <a name="resetBundleReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetBundleReleaseUpgradePeriodInDays"></a>

```typescript
public resetBundleReleaseUpgradePeriodInDays(): void
```

##### `resetInterimReleaseUpgradePeriodInDays` <a name="resetInterimReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetInterimReleaseUpgradePeriodInDays"></a>

```typescript
public resetInterimReleaseUpgradePeriodInDays(): void
```

##### `resetIsInterimReleaseAutoUpgradeEnabled` <a name="resetIsInterimReleaseAutoUpgradeEnabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetIsInterimReleaseAutoUpgradeEnabled"></a>

```typescript
public resetIsInterimReleaseAutoUpgradeEnabled(): void
```

##### `resetMajorReleaseUpgradePeriodInDays` <a name="resetMajorReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetMajorReleaseUpgradePeriodInDays"></a>

```typescript
public resetMajorReleaseUpgradePeriodInDays(): void
```

##### `resetSecurityPatchUpgradePeriodInDays` <a name="resetSecurityPatchUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetSecurityPatchUpgradePeriodInDays"></a>

```typescript
public resetSecurityPatchUpgradePeriodInDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDaysInput">bundleReleaseUpgradePeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDaysInput">interimReleaseUpgradePeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabledInput">isInterimReleaseAutoUpgradeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDaysInput">majorReleaseUpgradePeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDaysInput">securityPatchUpgradePeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDays">bundleReleaseUpgradePeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDays">interimReleaseUpgradePeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabled">isInterimReleaseAutoUpgradeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDays">majorReleaseUpgradePeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDays">securityPatchUpgradePeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bundleReleaseUpgradePeriodInDaysInput`<sup>Optional</sup> <a name="bundleReleaseUpgradePeriodInDaysInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDaysInput"></a>

```typescript
public readonly bundleReleaseUpgradePeriodInDaysInput: number;
```

- *Type:* number

---

##### `interimReleaseUpgradePeriodInDaysInput`<sup>Optional</sup> <a name="interimReleaseUpgradePeriodInDaysInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDaysInput"></a>

```typescript
public readonly interimReleaseUpgradePeriodInDaysInput: number;
```

- *Type:* number

---

##### `isInterimReleaseAutoUpgradeEnabledInput`<sup>Optional</sup> <a name="isInterimReleaseAutoUpgradeEnabledInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabledInput"></a>

```typescript
public readonly isInterimReleaseAutoUpgradeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `majorReleaseUpgradePeriodInDaysInput`<sup>Optional</sup> <a name="majorReleaseUpgradePeriodInDaysInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDaysInput"></a>

```typescript
public readonly majorReleaseUpgradePeriodInDaysInput: number;
```

- *Type:* number

---

##### `securityPatchUpgradePeriodInDaysInput`<sup>Optional</sup> <a name="securityPatchUpgradePeriodInDaysInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDaysInput"></a>

```typescript
public readonly securityPatchUpgradePeriodInDaysInput: number;
```

- *Type:* number

---

##### `bundleReleaseUpgradePeriodInDays`<sup>Required</sup> <a name="bundleReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDays"></a>

```typescript
public readonly bundleReleaseUpgradePeriodInDays: number;
```

- *Type:* number

---

##### `interimReleaseUpgradePeriodInDays`<sup>Required</sup> <a name="interimReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDays"></a>

```typescript
public readonly interimReleaseUpgradePeriodInDays: number;
```

- *Type:* number

---

##### `isInterimReleaseAutoUpgradeEnabled`<sup>Required</sup> <a name="isInterimReleaseAutoUpgradeEnabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabled"></a>

```typescript
public readonly isInterimReleaseAutoUpgradeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `majorReleaseUpgradePeriodInDays`<sup>Required</sup> <a name="majorReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDays"></a>

```typescript
public readonly majorReleaseUpgradePeriodInDays: number;
```

- *Type:* number

---

##### `securityPatchUpgradePeriodInDays`<sup>Required</sup> <a name="securityPatchUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDays"></a>

```typescript
public readonly securityPatchUpgradePeriodInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoldenGateDeploymentMaintenanceConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a>

---


### GoldenGateDeploymentMaintenanceWindowOutputReference <a name="GoldenGateDeploymentMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

new goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.startHourInput">startHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.startHour">startHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `startHourInput`<sup>Optional</sup> <a name="startHourInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.startHourInput"></a>

```typescript
public readonly startHourInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `startHour`<sup>Required</sup> <a name="startHour" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.startHour"></a>

```typescript
public readonly startHour: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoldenGateDeploymentMaintenanceWindow;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a>

---


### GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference <a name="GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

new goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetAdministratorGroupId">resetAdministratorGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetOperatorGroupId">resetOperatorGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetUserGroupId">resetUserGroupId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdministratorGroupId` <a name="resetAdministratorGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetAdministratorGroupId"></a>

```typescript
public resetAdministratorGroupId(): void
```

##### `resetOperatorGroupId` <a name="resetOperatorGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetOperatorGroupId"></a>

```typescript
public resetOperatorGroupId(): void
```

##### `resetUserGroupId` <a name="resetUserGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetUserGroupId"></a>

```typescript
public resetUserGroupId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.administratorGroupIdInput">administratorGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.operatorGroupIdInput">operatorGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.userGroupIdInput">userGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.administratorGroupId">administratorGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.operatorGroupId">operatorGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.userGroupId">userGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `administratorGroupIdInput`<sup>Optional</sup> <a name="administratorGroupIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.administratorGroupIdInput"></a>

```typescript
public readonly administratorGroupIdInput: string;
```

- *Type:* string

---

##### `operatorGroupIdInput`<sup>Optional</sup> <a name="operatorGroupIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.operatorGroupIdInput"></a>

```typescript
public readonly operatorGroupIdInput: string;
```

- *Type:* string

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.securityGroupIdInput"></a>

```typescript
public readonly securityGroupIdInput: string;
```

- *Type:* string

---

##### `userGroupIdInput`<sup>Optional</sup> <a name="userGroupIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.userGroupIdInput"></a>

```typescript
public readonly userGroupIdInput: string;
```

- *Type:* string

---

##### `administratorGroupId`<sup>Required</sup> <a name="administratorGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.administratorGroupId"></a>

```typescript
public readonly administratorGroupId: string;
```

- *Type:* string

---

##### `operatorGroupId`<sup>Required</sup> <a name="operatorGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.operatorGroupId"></a>

```typescript
public readonly operatorGroupId: string;
```

- *Type:* string

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `userGroupId`<sup>Required</sup> <a name="userGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.userGroupId"></a>

```typescript
public readonly userGroupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoldenGateDeploymentOggDataGroupToRolesMapping;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a>

---


### GoldenGateDeploymentOggDataOutputReference <a name="GoldenGateDeploymentOggDataOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

new goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.putGroupToRolesMapping">putGroupToRolesMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetAdminUsername">resetAdminUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetCredentialStore">resetCredentialStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetGroupToRolesMapping">resetGroupToRolesMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetIdentityDomainId">resetIdentityDomainId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetOggVersion">resetOggVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetPasswordSecretId">resetPasswordSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroupToRolesMapping` <a name="putGroupToRolesMapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.putGroupToRolesMapping"></a>

```typescript
public putGroupToRolesMapping(value: GoldenGateDeploymentOggDataGroupToRolesMapping): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.putGroupToRolesMapping.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a>

---

##### `resetAdminPassword` <a name="resetAdminPassword" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetAdminPassword"></a>

```typescript
public resetAdminPassword(): void
```

##### `resetAdminUsername` <a name="resetAdminUsername" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetAdminUsername"></a>

```typescript
public resetAdminUsername(): void
```

##### `resetCertificate` <a name="resetCertificate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetCredentialStore` <a name="resetCredentialStore" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetCredentialStore"></a>

```typescript
public resetCredentialStore(): void
```

##### `resetGroupToRolesMapping` <a name="resetGroupToRolesMapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetGroupToRolesMapping"></a>

```typescript
public resetGroupToRolesMapping(): void
```

##### `resetIdentityDomainId` <a name="resetIdentityDomainId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetIdentityDomainId"></a>

```typescript
public resetIdentityDomainId(): void
```

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOggVersion` <a name="resetOggVersion" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetOggVersion"></a>

```typescript
public resetOggVersion(): void
```

##### `resetPasswordSecretId` <a name="resetPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetPasswordSecretId"></a>

```typescript
public resetPasswordSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.groupToRolesMapping">groupToRolesMapping</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference">GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminUsernameInput">adminUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.credentialStoreInput">credentialStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.deploymentNameInput">deploymentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.groupToRolesMappingInput">groupToRolesMappingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.identityDomainIdInput">identityDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.oggVersionInput">oggVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.credentialStore">credentialStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.deploymentName">deploymentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.identityDomainId">identityDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.oggVersion">oggVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupToRolesMapping`<sup>Required</sup> <a name="groupToRolesMapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.groupToRolesMapping"></a>

```typescript
public readonly groupToRolesMapping: GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference">GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference</a>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminPasswordInput"></a>

```typescript
public readonly adminPasswordInput: string;
```

- *Type:* string

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminUsernameInput"></a>

```typescript
public readonly adminUsernameInput: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `credentialStoreInput`<sup>Optional</sup> <a name="credentialStoreInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.credentialStoreInput"></a>

```typescript
public readonly credentialStoreInput: string;
```

- *Type:* string

---

##### `deploymentNameInput`<sup>Optional</sup> <a name="deploymentNameInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.deploymentNameInput"></a>

```typescript
public readonly deploymentNameInput: string;
```

- *Type:* string

---

##### `groupToRolesMappingInput`<sup>Optional</sup> <a name="groupToRolesMappingInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.groupToRolesMappingInput"></a>

```typescript
public readonly groupToRolesMappingInput: GoldenGateDeploymentOggDataGroupToRolesMapping;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a>

---

##### `identityDomainIdInput`<sup>Optional</sup> <a name="identityDomainIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.identityDomainIdInput"></a>

```typescript
public readonly identityDomainIdInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `oggVersionInput`<sup>Optional</sup> <a name="oggVersionInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.oggVersionInput"></a>

```typescript
public readonly oggVersionInput: string;
```

- *Type:* string

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.passwordSecretIdInput"></a>

```typescript
public readonly passwordSecretIdInput: string;
```

- *Type:* string

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `credentialStore`<sup>Required</sup> <a name="credentialStore" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.credentialStore"></a>

```typescript
public readonly credentialStore: string;
```

- *Type:* string

---

##### `deploymentName`<sup>Required</sup> <a name="deploymentName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.deploymentName"></a>

```typescript
public readonly deploymentName: string;
```

- *Type:* string

---

##### `identityDomainId`<sup>Required</sup> <a name="identityDomainId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.identityDomainId"></a>

```typescript
public readonly identityDomainId: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `oggVersion`<sup>Required</sup> <a name="oggVersion" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.oggVersion"></a>

```typescript
public readonly oggVersion: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoldenGateDeploymentOggData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a>

---


### GoldenGateDeploymentTimeoutsOutputReference <a name="GoldenGateDeploymentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer"></a>

```typescript
import { goldenGateDeployment } from 'rhizo-co-terraform-provider-oci'

new goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoldenGateDeploymentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a>

---



