# `dataSafeAuditTrailManagement` Submodule <a name="`dataSafeAuditTrailManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeAuditTrailManagement <a name="DataSafeAuditTrailManagement" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management oci_data_safe_audit_trail_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.Initializer"></a>

```typescript
import { dataSafeAuditTrailManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeAuditTrailManagement.DataSafeAuditTrailManagement(scope: Construct, id: string, config?: DataSafeAuditTrailManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig">DataSafeAuditTrailManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig">DataSafeAuditTrailManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetAuditCollectionStartTime">resetAuditCollectionStartTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetIsAutoPurgeEnabled">resetIsAutoPurgeEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetResumeTrigger">resetResumeTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetStartTrigger">resetStartTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetStopTrigger">resetStopTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetTrailLocation">resetTrailLocation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeAuditTrailManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeouts">DataSafeAuditTrailManagementTimeouts</a>

---

##### `resetAuditCollectionStartTime` <a name="resetAuditCollectionStartTime" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetAuditCollectionStartTime"></a>

```typescript
public resetAuditCollectionStartTime(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsAutoPurgeEnabled` <a name="resetIsAutoPurgeEnabled" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetIsAutoPurgeEnabled"></a>

```typescript
public resetIsAutoPurgeEnabled(): void
```

##### `resetResumeTrigger` <a name="resetResumeTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetResumeTrigger"></a>

```typescript
public resetResumeTrigger(): void
```

##### `resetStartTrigger` <a name="resetStartTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetStartTrigger"></a>

```typescript
public resetStartTrigger(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetState"></a>

```typescript
public resetState(): void
```

##### `resetStopTrigger` <a name="resetStopTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetStopTrigger"></a>

```typescript
public resetStopTrigger(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrailLocation` <a name="resetTrailLocation" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.resetTrailLocation"></a>

```typescript
public resetTrailLocation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeAuditTrailManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.isConstruct"></a>

```typescript
import { dataSafeAuditTrailManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.isTerraformElement"></a>

```typescript
import { dataSafeAuditTrailManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.isTerraformResource"></a>

```typescript
import { dataSafeAuditTrailManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.generateConfigForImport"></a>

```typescript
import { dataSafeAuditTrailManagement } from 'rhizo-co-terraform-provider-oci'

dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeAuditTrailManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeAuditTrailManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeAuditTrailManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeAuditTrailManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.auditProfileId">auditProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.timeLastCollected">timeLastCollected</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference">DataSafeAuditTrailManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.workRequestId">workRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.auditCollectionStartTimeInput">auditCollectionStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.isAutoPurgeEnabledInput">isAutoPurgeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.resumeTriggerInput">resumeTriggerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.startTriggerInput">startTriggerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.stopTriggerInput">stopTriggerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeouts">DataSafeAuditTrailManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.trailLocationInput">trailLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.auditCollectionStartTime">auditCollectionStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.isAutoPurgeEnabled">isAutoPurgeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.resumeTrigger">resumeTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.startTrigger">startTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.stopTrigger">stopTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.trailLocation">trailLocation</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.auditProfileId"></a>

```typescript
public readonly auditProfileId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastCollected`<sup>Required</sup> <a name="timeLastCollected" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.timeLastCollected"></a>

```typescript
public readonly timeLastCollected: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeAuditTrailManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference">DataSafeAuditTrailManagementTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.workRequestId"></a>

```typescript
public readonly workRequestId: string;
```

- *Type:* string

---

##### `auditCollectionStartTimeInput`<sup>Optional</sup> <a name="auditCollectionStartTimeInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.auditCollectionStartTimeInput"></a>

```typescript
public readonly auditCollectionStartTimeInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isAutoPurgeEnabledInput`<sup>Optional</sup> <a name="isAutoPurgeEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.isAutoPurgeEnabledInput"></a>

```typescript
public readonly isAutoPurgeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resumeTriggerInput`<sup>Optional</sup> <a name="resumeTriggerInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.resumeTriggerInput"></a>

```typescript
public readonly resumeTriggerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `startTriggerInput`<sup>Optional</sup> <a name="startTriggerInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.startTriggerInput"></a>

```typescript
public readonly startTriggerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `stopTriggerInput`<sup>Optional</sup> <a name="stopTriggerInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.stopTriggerInput"></a>

```typescript
public readonly stopTriggerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeAuditTrailManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeouts">DataSafeAuditTrailManagementTimeouts</a>

---

##### `trailLocationInput`<sup>Optional</sup> <a name="trailLocationInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.trailLocationInput"></a>

```typescript
public readonly trailLocationInput: string;
```

- *Type:* string

---

##### `auditCollectionStartTime`<sup>Required</sup> <a name="auditCollectionStartTime" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.auditCollectionStartTime"></a>

```typescript
public readonly auditCollectionStartTime: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAutoPurgeEnabled`<sup>Required</sup> <a name="isAutoPurgeEnabled" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.isAutoPurgeEnabled"></a>

```typescript
public readonly isAutoPurgeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resumeTrigger`<sup>Required</sup> <a name="resumeTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.resumeTrigger"></a>

```typescript
public readonly resumeTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `startTrigger`<sup>Required</sup> <a name="startTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.startTrigger"></a>

```typescript
public readonly startTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stopTrigger`<sup>Required</sup> <a name="stopTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.stopTrigger"></a>

```typescript
public readonly stopTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `trailLocation`<sup>Required</sup> <a name="trailLocation" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.trailLocation"></a>

```typescript
public readonly trailLocation: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeAuditTrailManagementConfig <a name="DataSafeAuditTrailManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.Initializer"></a>

```typescript
import { dataSafeAuditTrailManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeAuditTrailManagementConfig: dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.auditCollectionStartTime">auditCollectionStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#audit_collection_start_time DataSafeAuditTrailManagement#audit_collection_start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#compartment_id DataSafeAuditTrailManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#defined_tags DataSafeAuditTrailManagement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#description DataSafeAuditTrailManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#display_name DataSafeAuditTrailManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#freeform_tags DataSafeAuditTrailManagement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#id DataSafeAuditTrailManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.isAutoPurgeEnabled">isAutoPurgeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#is_auto_purge_enabled DataSafeAuditTrailManagement#is_auto_purge_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.resumeTrigger">resumeTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#resume_trigger DataSafeAuditTrailManagement#resume_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.startTrigger">startTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#start_trigger DataSafeAuditTrailManagement#start_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#state DataSafeAuditTrailManagement#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.stopTrigger">stopTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#stop_trigger DataSafeAuditTrailManagement#stop_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#target_id DataSafeAuditTrailManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeouts">DataSafeAuditTrailManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.trailLocation">trailLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#trail_location DataSafeAuditTrailManagement#trail_location}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auditCollectionStartTime`<sup>Optional</sup> <a name="auditCollectionStartTime" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.auditCollectionStartTime"></a>

```typescript
public readonly auditCollectionStartTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#audit_collection_start_time DataSafeAuditTrailManagement#audit_collection_start_time}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#compartment_id DataSafeAuditTrailManagement#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#defined_tags DataSafeAuditTrailManagement#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#description DataSafeAuditTrailManagement#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#display_name DataSafeAuditTrailManagement#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#freeform_tags DataSafeAuditTrailManagement#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#id DataSafeAuditTrailManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAutoPurgeEnabled`<sup>Optional</sup> <a name="isAutoPurgeEnabled" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.isAutoPurgeEnabled"></a>

```typescript
public readonly isAutoPurgeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#is_auto_purge_enabled DataSafeAuditTrailManagement#is_auto_purge_enabled}.

---

##### `resumeTrigger`<sup>Optional</sup> <a name="resumeTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.resumeTrigger"></a>

```typescript
public readonly resumeTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#resume_trigger DataSafeAuditTrailManagement#resume_trigger}.

---

##### `startTrigger`<sup>Optional</sup> <a name="startTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.startTrigger"></a>

```typescript
public readonly startTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#start_trigger DataSafeAuditTrailManagement#start_trigger}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#state DataSafeAuditTrailManagement#state}.

---

##### `stopTrigger`<sup>Optional</sup> <a name="stopTrigger" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.stopTrigger"></a>

```typescript
public readonly stopTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#stop_trigger DataSafeAuditTrailManagement#stop_trigger}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#target_id DataSafeAuditTrailManagement#target_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeAuditTrailManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeouts">DataSafeAuditTrailManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#timeouts DataSafeAuditTrailManagement#timeouts}

---

##### `trailLocation`<sup>Optional</sup> <a name="trailLocation" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementConfig.property.trailLocation"></a>

```typescript
public readonly trailLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#trail_location DataSafeAuditTrailManagement#trail_location}.

---

### DataSafeAuditTrailManagementTimeouts <a name="DataSafeAuditTrailManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeouts.Initializer"></a>

```typescript
import { dataSafeAuditTrailManagement } from 'rhizo-co-terraform-provider-oci'

const dataSafeAuditTrailManagementTimeouts: dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#create DataSafeAuditTrailManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#delete DataSafeAuditTrailManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#update DataSafeAuditTrailManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#create DataSafeAuditTrailManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#delete DataSafeAuditTrailManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_trail_management#update DataSafeAuditTrailManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeAuditTrailManagementTimeoutsOutputReference <a name="DataSafeAuditTrailManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeAuditTrailManagement } from 'rhizo-co-terraform-provider-oci'

new dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeouts">DataSafeAuditTrailManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeAuditTrailManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditTrailManagement.DataSafeAuditTrailManagementTimeouts">DataSafeAuditTrailManagementTimeouts</a>

---



