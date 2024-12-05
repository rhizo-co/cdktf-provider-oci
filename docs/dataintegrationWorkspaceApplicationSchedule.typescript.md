# `dataintegrationWorkspaceApplicationSchedule` Submodule <a name="`dataintegrationWorkspaceApplicationSchedule` Submodule" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataintegrationWorkspaceApplicationSchedule <a name="DataintegrationWorkspaceApplicationSchedule" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule oci_dataintegration_workspace_application_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule(scope: Construct, id: string, config: DataintegrationWorkspaceApplicationScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig">DataintegrationWorkspaceApplicationScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig">DataintegrationWorkspaceApplicationScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putFrequencyDetails">putFrequencyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putRegistryMetadata">putRegistryMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetFrequencyDetails">resetFrequencyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetIsDaylightAdjustmentEnabled">resetIsDaylightAdjustmentEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetModelVersion">resetModelVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetObjectStatus">resetObjectStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetObjectVersion">resetObjectVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetRegistryMetadata">resetRegistryMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFrequencyDetails` <a name="putFrequencyDetails" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putFrequencyDetails"></a>

```typescript
public putFrequencyDetails(value: DataintegrationWorkspaceApplicationScheduleFrequencyDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putFrequencyDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a>

---

##### `putRegistryMetadata` <a name="putRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putRegistryMetadata"></a>

```typescript
public putRegistryMetadata(value: DataintegrationWorkspaceApplicationScheduleRegistryMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putRegistryMetadata.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putTimeouts"></a>

```typescript
public putTimeouts(value: DataintegrationWorkspaceApplicationScheduleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFrequencyDetails` <a name="resetFrequencyDetails" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetFrequencyDetails"></a>

```typescript
public resetFrequencyDetails(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsDaylightAdjustmentEnabled` <a name="resetIsDaylightAdjustmentEnabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetIsDaylightAdjustmentEnabled"></a>

```typescript
public resetIsDaylightAdjustmentEnabled(): void
```

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetModelVersion` <a name="resetModelVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetModelVersion"></a>

```typescript
public resetModelVersion(): void
```

##### `resetObjectStatus` <a name="resetObjectStatus" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetObjectStatus"></a>

```typescript
public resetObjectStatus(): void
```

##### `resetObjectVersion` <a name="resetObjectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetObjectVersion"></a>

```typescript
public resetObjectVersion(): void
```

##### `resetRegistryMetadata` <a name="resetRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetRegistryMetadata"></a>

```typescript
public resetRegistryMetadata(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimezone` <a name="resetTimezone" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataintegrationWorkspaceApplicationSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isConstruct"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformElement"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformResource"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataintegrationWorkspaceApplicationSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataintegrationWorkspaceApplicationSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataintegrationWorkspaceApplicationSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataintegrationWorkspaceApplicationSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.frequencyDetails">frequencyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList">DataintegrationWorkspaceApplicationScheduleMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.modelType">modelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.parentRef">parentRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList">DataintegrationWorkspaceApplicationScheduleParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.registryMetadata">registryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference">DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference">DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.applicationKeyInput">applicationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.frequencyDetailsInput">frequencyDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.isDaylightAdjustmentEnabledInput">isDaylightAdjustmentEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.modelVersionInput">modelVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectStatusInput">objectStatusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectVersionInput">objectVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.registryMetadataInput">registryMetadataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.applicationKey">applicationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.isDaylightAdjustmentEnabled">isDaylightAdjustmentEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.modelVersion">modelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectStatus">objectStatus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectVersion">objectVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `frequencyDetails`<sup>Required</sup> <a name="frequencyDetails" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.frequencyDetails"></a>

```typescript
public readonly frequencyDetails: DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.metadata"></a>

```typescript
public readonly metadata: DataintegrationWorkspaceApplicationScheduleMetadataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList">DataintegrationWorkspaceApplicationScheduleMetadataList</a>

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.modelType"></a>

```typescript
public readonly modelType: string;
```

- *Type:* string

---

##### `parentRef`<sup>Required</sup> <a name="parentRef" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.parentRef"></a>

```typescript
public readonly parentRef: DataintegrationWorkspaceApplicationScheduleParentRefList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList">DataintegrationWorkspaceApplicationScheduleParentRefList</a>

---

##### `registryMetadata`<sup>Required</sup> <a name="registryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.registryMetadata"></a>

```typescript
public readonly registryMetadata: DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference">DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timeouts"></a>

```typescript
public readonly timeouts: DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference">DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference</a>

---

##### `applicationKeyInput`<sup>Optional</sup> <a name="applicationKeyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.applicationKeyInput"></a>

```typescript
public readonly applicationKeyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `frequencyDetailsInput`<sup>Optional</sup> <a name="frequencyDetailsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.frequencyDetailsInput"></a>

```typescript
public readonly frequencyDetailsInput: DataintegrationWorkspaceApplicationScheduleFrequencyDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a>

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isDaylightAdjustmentEnabledInput`<sup>Optional</sup> <a name="isDaylightAdjustmentEnabledInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.isDaylightAdjustmentEnabledInput"></a>

```typescript
public readonly isDaylightAdjustmentEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `modelVersionInput`<sup>Optional</sup> <a name="modelVersionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.modelVersionInput"></a>

```typescript
public readonly modelVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `objectStatusInput`<sup>Optional</sup> <a name="objectStatusInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectStatusInput"></a>

```typescript
public readonly objectStatusInput: number;
```

- *Type:* number

---

##### `objectVersionInput`<sup>Optional</sup> <a name="objectVersionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectVersionInput"></a>

```typescript
public readonly objectVersionInput: number;
```

- *Type:* number

---

##### `registryMetadataInput`<sup>Optional</sup> <a name="registryMetadataInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.registryMetadataInput"></a>

```typescript
public readonly registryMetadataInput: DataintegrationWorkspaceApplicationScheduleRegistryMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataintegrationWorkspaceApplicationScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `applicationKey`<sup>Required</sup> <a name="applicationKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.applicationKey"></a>

```typescript
public readonly applicationKey: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `isDaylightAdjustmentEnabled`<sup>Required</sup> <a name="isDaylightAdjustmentEnabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.isDaylightAdjustmentEnabled"></a>

```typescript
public readonly isDaylightAdjustmentEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.modelVersion"></a>

```typescript
public readonly modelVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectStatus`<sup>Required</sup> <a name="objectStatus" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectStatus"></a>

```typescript
public readonly objectStatus: number;
```

- *Type:* number

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.objectVersion"></a>

```typescript
public readonly objectVersion: number;
```

- *Type:* number

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataintegrationWorkspaceApplicationScheduleConfig <a name="DataintegrationWorkspaceApplicationScheduleConfig" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceApplicationScheduleConfig: dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.applicationKey">applicationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#application_key DataintegrationWorkspaceApplicationSchedule#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#identifier DataintegrationWorkspaceApplicationSchedule#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#name DataintegrationWorkspaceApplicationSchedule#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#workspace_id DataintegrationWorkspaceApplicationSchedule#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#description DataintegrationWorkspaceApplicationSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.frequencyDetails">frequencyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a></code> | frequency_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#id DataintegrationWorkspaceApplicationSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.isDaylightAdjustmentEnabled">isDaylightAdjustmentEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#is_daylight_adjustment_enabled DataintegrationWorkspaceApplicationSchedule#is_daylight_adjustment_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#key DataintegrationWorkspaceApplicationSchedule#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.modelVersion">modelVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#model_version DataintegrationWorkspaceApplicationSchedule#model_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.objectStatus">objectStatus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_status DataintegrationWorkspaceApplicationSchedule#object_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.objectVersion">objectVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_version DataintegrationWorkspaceApplicationSchedule#object_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.registryMetadata">registryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a></code> | registry_metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.timezone">timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#timezone DataintegrationWorkspaceApplicationSchedule#timezone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationKey`<sup>Required</sup> <a name="applicationKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.applicationKey"></a>

```typescript
public readonly applicationKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#application_key DataintegrationWorkspaceApplicationSchedule#application_key}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#identifier DataintegrationWorkspaceApplicationSchedule#identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#name DataintegrationWorkspaceApplicationSchedule#name}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#workspace_id DataintegrationWorkspaceApplicationSchedule#workspace_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#description DataintegrationWorkspaceApplicationSchedule#description}.

---

##### `frequencyDetails`<sup>Optional</sup> <a name="frequencyDetails" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.frequencyDetails"></a>

```typescript
public readonly frequencyDetails: DataintegrationWorkspaceApplicationScheduleFrequencyDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a>

frequency_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#frequency_details DataintegrationWorkspaceApplicationSchedule#frequency_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#id DataintegrationWorkspaceApplicationSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDaylightAdjustmentEnabled`<sup>Optional</sup> <a name="isDaylightAdjustmentEnabled" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.isDaylightAdjustmentEnabled"></a>

```typescript
public readonly isDaylightAdjustmentEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#is_daylight_adjustment_enabled DataintegrationWorkspaceApplicationSchedule#is_daylight_adjustment_enabled}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#key DataintegrationWorkspaceApplicationSchedule#key}.

---

##### `modelVersion`<sup>Optional</sup> <a name="modelVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.modelVersion"></a>

```typescript
public readonly modelVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#model_version DataintegrationWorkspaceApplicationSchedule#model_version}.

---

##### `objectStatus`<sup>Optional</sup> <a name="objectStatus" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.objectStatus"></a>

```typescript
public readonly objectStatus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_status DataintegrationWorkspaceApplicationSchedule#object_status}.

---

##### `objectVersion`<sup>Optional</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.objectVersion"></a>

```typescript
public readonly objectVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#object_version DataintegrationWorkspaceApplicationSchedule#object_version}.

---

##### `registryMetadata`<sup>Optional</sup> <a name="registryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.registryMetadata"></a>

```typescript
public readonly registryMetadata: DataintegrationWorkspaceApplicationScheduleRegistryMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a>

registry_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#registry_metadata DataintegrationWorkspaceApplicationSchedule#registry_metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataintegrationWorkspaceApplicationScheduleTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#timeouts DataintegrationWorkspaceApplicationSchedule#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#timezone DataintegrationWorkspaceApplicationSchedule#timezone}.

---

### DataintegrationWorkspaceApplicationScheduleFrequencyDetails <a name="DataintegrationWorkspaceApplicationScheduleFrequencyDetails" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceApplicationScheduleFrequencyDetails: dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.modelType">modelType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#model_type DataintegrationWorkspaceApplicationSchedule#model_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.customExpression">customExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#custom_expression DataintegrationWorkspaceApplicationSchedule#custom_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#day_of_week DataintegrationWorkspaceApplicationSchedule#day_of_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.days">days</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#days DataintegrationWorkspaceApplicationSchedule#days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.frequency">frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#frequency DataintegrationWorkspaceApplicationSchedule#frequency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#interval DataintegrationWorkspaceApplicationSchedule#interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.time">time</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a></code> | time block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.weekOfMonth">weekOfMonth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#week_of_month DataintegrationWorkspaceApplicationSchedule#week_of_month}. |

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.modelType"></a>

```typescript
public readonly modelType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#model_type DataintegrationWorkspaceApplicationSchedule#model_type}.

---

##### `customExpression`<sup>Optional</sup> <a name="customExpression" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.customExpression"></a>

```typescript
public readonly customExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#custom_expression DataintegrationWorkspaceApplicationSchedule#custom_expression}.

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#day_of_week DataintegrationWorkspaceApplicationSchedule#day_of_week}.

---

##### `days`<sup>Optional</sup> <a name="days" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.days"></a>

```typescript
public readonly days: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#days DataintegrationWorkspaceApplicationSchedule#days}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#frequency DataintegrationWorkspaceApplicationSchedule#frequency}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#interval DataintegrationWorkspaceApplicationSchedule#interval}.

---

##### `time`<sup>Optional</sup> <a name="time" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.time"></a>

```typescript
public readonly time: DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#time DataintegrationWorkspaceApplicationSchedule#time}

---

##### `weekOfMonth`<sup>Optional</sup> <a name="weekOfMonth" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails.property.weekOfMonth"></a>

```typescript
public readonly weekOfMonth: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#week_of_month DataintegrationWorkspaceApplicationSchedule#week_of_month}.

---

### DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime <a name="DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime: dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.property.hour">hour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#hour DataintegrationWorkspaceApplicationSchedule#hour}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.property.minute">minute</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#minute DataintegrationWorkspaceApplicationSchedule#minute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.property.second">second</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#second DataintegrationWorkspaceApplicationSchedule#second}. |

---

##### `hour`<sup>Optional</sup> <a name="hour" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#hour DataintegrationWorkspaceApplicationSchedule#hour}.

---

##### `minute`<sup>Optional</sup> <a name="minute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#minute DataintegrationWorkspaceApplicationSchedule#minute}.

---

##### `second`<sup>Optional</sup> <a name="second" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime.property.second"></a>

```typescript
public readonly second: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#second DataintegrationWorkspaceApplicationSchedule#second}.

---

### DataintegrationWorkspaceApplicationScheduleMetadata <a name="DataintegrationWorkspaceApplicationScheduleMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadata.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceApplicationScheduleMetadata: dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadata = { ... }
```


### DataintegrationWorkspaceApplicationScheduleMetadataAggregator <a name="DataintegrationWorkspaceApplicationScheduleMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregator.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceApplicationScheduleMetadataAggregator: dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregator = { ... }
```


### DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics <a name="DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceApplicationScheduleMetadataCountStatistics: dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics = { ... }
```


### DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct <a name="DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct: dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct = { ... }
```


### DataintegrationWorkspaceApplicationScheduleParentRef <a name="DataintegrationWorkspaceApplicationScheduleParentRef" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRef.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceApplicationScheduleParentRef: dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRef = { ... }
```


### DataintegrationWorkspaceApplicationScheduleRegistryMetadata <a name="DataintegrationWorkspaceApplicationScheduleRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceApplicationScheduleRegistryMetadata: dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.aggregatorKey">aggregatorKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#aggregator_key DataintegrationWorkspaceApplicationSchedule#aggregator_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.isFavorite">isFavorite</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#is_favorite DataintegrationWorkspaceApplicationSchedule#is_favorite}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#key DataintegrationWorkspaceApplicationSchedule#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.labels">labels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#labels DataintegrationWorkspaceApplicationSchedule#labels}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.registryVersion">registryVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#registry_version DataintegrationWorkspaceApplicationSchedule#registry_version}. |

---

##### `aggregatorKey`<sup>Optional</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.aggregatorKey"></a>

```typescript
public readonly aggregatorKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#aggregator_key DataintegrationWorkspaceApplicationSchedule#aggregator_key}.

---

##### `isFavorite`<sup>Optional</sup> <a name="isFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.isFavorite"></a>

```typescript
public readonly isFavorite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#is_favorite DataintegrationWorkspaceApplicationSchedule#is_favorite}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#key DataintegrationWorkspaceApplicationSchedule#key}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#labels DataintegrationWorkspaceApplicationSchedule#labels}.

---

##### `registryVersion`<sup>Optional</sup> <a name="registryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata.property.registryVersion"></a>

```typescript
public readonly registryVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#registry_version DataintegrationWorkspaceApplicationSchedule#registry_version}.

---

### DataintegrationWorkspaceApplicationScheduleTimeouts <a name="DataintegrationWorkspaceApplicationScheduleTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

const dataintegrationWorkspaceApplicationScheduleTimeouts: dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#create DataintegrationWorkspaceApplicationSchedule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#delete DataintegrationWorkspaceApplicationSchedule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#update DataintegrationWorkspaceApplicationSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#create DataintegrationWorkspaceApplicationSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#delete DataintegrationWorkspaceApplicationSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_schedule#update DataintegrationWorkspaceApplicationSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference <a name="DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.putTime">putTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetCustomExpression">resetCustomExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetTime">resetTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetWeekOfMonth">resetWeekOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTime` <a name="putTime" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.putTime"></a>

```typescript
public putTime(value: DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.putTime.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a>

---

##### `resetCustomExpression` <a name="resetCustomExpression" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetCustomExpression"></a>

```typescript
public resetCustomExpression(): void
```

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetDayOfWeek"></a>

```typescript
public resetDayOfWeek(): void
```

##### `resetDays` <a name="resetDays" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```

##### `resetFrequency` <a name="resetFrequency" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetInterval` <a name="resetInterval" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetTime` <a name="resetTime" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetTime"></a>

```typescript
public resetTime(): void
```

##### `resetWeekOfMonth` <a name="resetWeekOfMonth" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.resetWeekOfMonth"></a>

```typescript
public resetWeekOfMonth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.time">time</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.customExpressionInput">customExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.daysInput">daysInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.modelTypeInput">modelTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.timeInput">timeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.weekOfMonthInput">weekOfMonthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.customExpression">customExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.days">days</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.modelType">modelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.weekOfMonth">weekOfMonth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `time`<sup>Required</sup> <a name="time" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.time"></a>

```typescript
public readonly time: DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference</a>

---

##### `customExpressionInput`<sup>Optional</sup> <a name="customExpressionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.customExpressionInput"></a>

```typescript
public readonly customExpressionInput: string;
```

- *Type:* string

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: number[];
```

- *Type:* number[]

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `modelTypeInput`<sup>Optional</sup> <a name="modelTypeInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.modelTypeInput"></a>

```typescript
public readonly modelTypeInput: string;
```

- *Type:* string

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a>

---

##### `weekOfMonthInput`<sup>Optional</sup> <a name="weekOfMonthInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.weekOfMonthInput"></a>

```typescript
public readonly weekOfMonthInput: string;
```

- *Type:* string

---

##### `customExpression`<sup>Required</sup> <a name="customExpression" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.customExpression"></a>

```typescript
public readonly customExpression: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `days`<sup>Required</sup> <a name="days" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.days"></a>

```typescript
public readonly days: number[];
```

- *Type:* number[]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.modelType"></a>

```typescript
public readonly modelType: string;
```

- *Type:* string

---

##### `weekOfMonth`<sup>Required</sup> <a name="weekOfMonth" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.weekOfMonth"></a>

```typescript
public readonly weekOfMonth: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataintegrationWorkspaceApplicationScheduleFrequencyDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetails">DataintegrationWorkspaceApplicationScheduleFrequencyDetails</a>

---


### DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference <a name="DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resetHour">resetHour</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resetMinute">resetMinute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resetSecond">resetSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHour` <a name="resetHour" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resetHour"></a>

```typescript
public resetHour(): void
```

##### `resetMinute` <a name="resetMinute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resetMinute"></a>

```typescript
public resetMinute(): void
```

##### `resetSecond` <a name="resetSecond" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.resetSecond"></a>

```typescript
public resetSecond(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.hourInput">hourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.minuteInput">minuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.secondInput">secondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.hour">hour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.minute">minute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.second">second</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hourInput`<sup>Optional</sup> <a name="hourInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.hourInput"></a>

```typescript
public readonly hourInput: number;
```

- *Type:* number

---

##### `minuteInput`<sup>Optional</sup> <a name="minuteInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.minuteInput"></a>

```typescript
public readonly minuteInput: number;
```

- *Type:* number

---

##### `secondInput`<sup>Optional</sup> <a name="secondInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.secondInput"></a>

```typescript
public readonly secondInput: number;
```

- *Type:* number

---

##### `hour`<sup>Required</sup> <a name="hour" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.hour"></a>

```typescript
public readonly hour: number;
```

- *Type:* number

---

##### `minute`<sup>Required</sup> <a name="minute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.minute"></a>

```typescript
public readonly minute: number;
```

- *Type:* number

---

##### `second`<sup>Required</sup> <a name="second" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.second"></a>

```typescript
public readonly second: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime">DataintegrationWorkspaceApplicationScheduleFrequencyDetailsTime</a>

---


### DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList <a name="DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.get"></a>

```typescript
public get(index: number): DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference <a name="DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregator">DataintegrationWorkspaceApplicationScheduleMetadataAggregator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataintegrationWorkspaceApplicationScheduleMetadataAggregator;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregator">DataintegrationWorkspaceApplicationScheduleMetadataAggregator</a>

---


### DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList <a name="DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.get"></a>

```typescript
public get(index: number): DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList <a name="DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```typescript
public get(index: number): DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">objectCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct">DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectCount`<sup>Required</sup> <a name="objectCount" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```typescript
public readonly objectCount: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct">DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference <a name="DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.objectTypeCountList">objectTypeCountList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList">DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics">DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectTypeCountList`<sup>Required</sup> <a name="objectTypeCountList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```typescript
public readonly objectTypeCountList: DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList">DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics">DataintegrationWorkspaceApplicationScheduleMetadataCountStatistics</a>

---


### DataintegrationWorkspaceApplicationScheduleMetadataList <a name="DataintegrationWorkspaceApplicationScheduleMetadataList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.get"></a>

```typescript
public get(index: number): DataintegrationWorkspaceApplicationScheduleMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationScheduleMetadataOutputReference <a name="DataintegrationWorkspaceApplicationScheduleMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.aggregator">aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList">DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.countStatistics">countStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList">DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.createdByName">createdByName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.identifierPath">identifierPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.infoFields">infoFields</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.isFavorite">isFavorite</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.registryVersion">registryVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.updatedByName">updatedByName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadata">DataintegrationWorkspaceApplicationScheduleMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregator`<sup>Required</sup> <a name="aggregator" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.aggregator"></a>

```typescript
public readonly aggregator: DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList">DataintegrationWorkspaceApplicationScheduleMetadataAggregatorList</a>

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.aggregatorKey"></a>

```typescript
public readonly aggregatorKey: string;
```

- *Type:* string

---

##### `countStatistics`<sup>Required</sup> <a name="countStatistics" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.countStatistics"></a>

```typescript
public readonly countStatistics: DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList">DataintegrationWorkspaceApplicationScheduleMetadataCountStatisticsList</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `createdByName`<sup>Required</sup> <a name="createdByName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.createdByName"></a>

```typescript
public readonly createdByName: string;
```

- *Type:* string

---

##### `identifierPath`<sup>Required</sup> <a name="identifierPath" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.identifierPath"></a>

```typescript
public readonly identifierPath: string;
```

- *Type:* string

---

##### `infoFields`<sup>Required</sup> <a name="infoFields" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.infoFields"></a>

```typescript
public readonly infoFields: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `isFavorite`<sup>Required</sup> <a name="isFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.isFavorite"></a>

```typescript
public readonly isFavorite: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `registryVersion`<sup>Required</sup> <a name="registryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.registryVersion"></a>

```typescript
public readonly registryVersion: number;
```

- *Type:* number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `updatedByName`<sup>Required</sup> <a name="updatedByName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.updatedByName"></a>

```typescript
public readonly updatedByName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataintegrationWorkspaceApplicationScheduleMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleMetadata">DataintegrationWorkspaceApplicationScheduleMetadata</a>

---


### DataintegrationWorkspaceApplicationScheduleParentRefList <a name="DataintegrationWorkspaceApplicationScheduleParentRefList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.get"></a>

```typescript
public get(index: number): DataintegrationWorkspaceApplicationScheduleParentRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataintegrationWorkspaceApplicationScheduleParentRefOutputReference <a name="DataintegrationWorkspaceApplicationScheduleParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.rootDocId">rootDocId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRef">DataintegrationWorkspaceApplicationScheduleParentRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `rootDocId`<sup>Required</sup> <a name="rootDocId" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.rootDocId"></a>

```typescript
public readonly rootDocId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataintegrationWorkspaceApplicationScheduleParentRef;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleParentRef">DataintegrationWorkspaceApplicationScheduleParentRef</a>

---


### DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference <a name="DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetAggregatorKey">resetAggregatorKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetIsFavorite">resetIsFavorite</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetRegistryVersion">resetRegistryVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregatorKey` <a name="resetAggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetAggregatorKey"></a>

```typescript
public resetAggregatorKey(): void
```

##### `resetIsFavorite` <a name="resetIsFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetIsFavorite"></a>

```typescript
public resetIsFavorite(): void
```

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetLabels` <a name="resetLabels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetRegistryVersion` <a name="resetRegistryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.resetRegistryVersion"></a>

```typescript
public resetRegistryVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.aggregatorKeyInput">aggregatorKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.isFavoriteInput">isFavoriteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.registryVersionInput">registryVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.isFavorite">isFavorite</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.registryVersion">registryVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregatorKeyInput`<sup>Optional</sup> <a name="aggregatorKeyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.aggregatorKeyInput"></a>

```typescript
public readonly aggregatorKeyInput: string;
```

- *Type:* string

---

##### `isFavoriteInput`<sup>Optional</sup> <a name="isFavoriteInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.isFavoriteInput"></a>

```typescript
public readonly isFavoriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: string[];
```

- *Type:* string[]

---

##### `registryVersionInput`<sup>Optional</sup> <a name="registryVersionInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.registryVersionInput"></a>

```typescript
public readonly registryVersionInput: number;
```

- *Type:* number

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.aggregatorKey"></a>

```typescript
public readonly aggregatorKey: string;
```

- *Type:* string

---

##### `isFavorite`<sup>Required</sup> <a name="isFavorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.isFavorite"></a>

```typescript
public readonly isFavorite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `registryVersion`<sup>Required</sup> <a name="registryVersion" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.registryVersion"></a>

```typescript
public readonly registryVersion: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataintegrationWorkspaceApplicationScheduleRegistryMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleRegistryMetadata">DataintegrationWorkspaceApplicationScheduleRegistryMetadata</a>

---


### DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference <a name="DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataintegrationWorkspaceApplicationSchedule } from 'rhizo-co-terraform-provider-oci'

new dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataintegrationWorkspaceApplicationScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationSchedule.DataintegrationWorkspaceApplicationScheduleTimeouts">DataintegrationWorkspaceApplicationScheduleTimeouts</a>

---



