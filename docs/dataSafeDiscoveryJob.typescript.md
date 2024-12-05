# `dataSafeDiscoveryJob` Submodule <a name="`dataSafeDiscoveryJob` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeDiscoveryJob <a name="DataSafeDiscoveryJob" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job oci_data_safe_discovery_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer"></a>

```typescript
import { dataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataSafeDiscoveryJob.DataSafeDiscoveryJob(scope: Construct, id: string, config: DataSafeDiscoveryJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig">DataSafeDiscoveryJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig">DataSafeDiscoveryJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTablesForDiscovery">putTablesForDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDiscoveryType">resetDiscoveryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsAppDefinedRelationDiscoveryEnabled">resetIsAppDefinedRelationDiscoveryEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsIncludeAllSchemas">resetIsIncludeAllSchemas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsIncludeAllSensitiveTypes">resetIsIncludeAllSensitiveTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsSampleDataCollectionEnabled">resetIsSampleDataCollectionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetSchemasForDiscovery">resetSchemasForDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetSensitiveTypeIdsForDiscovery">resetSensitiveTypeIdsForDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetTablesForDiscovery">resetTablesForDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTablesForDiscovery` <a name="putTablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTablesForDiscovery"></a>

```typescript
public putTablesForDiscovery(value: IResolvable | DataSafeDiscoveryJobTablesForDiscovery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTablesForDiscovery.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeDiscoveryJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDiscoveryType` <a name="resetDiscoveryType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDiscoveryType"></a>

```typescript
public resetDiscoveryType(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsAppDefinedRelationDiscoveryEnabled` <a name="resetIsAppDefinedRelationDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsAppDefinedRelationDiscoveryEnabled"></a>

```typescript
public resetIsAppDefinedRelationDiscoveryEnabled(): void
```

##### `resetIsIncludeAllSchemas` <a name="resetIsIncludeAllSchemas" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsIncludeAllSchemas"></a>

```typescript
public resetIsIncludeAllSchemas(): void
```

##### `resetIsIncludeAllSensitiveTypes` <a name="resetIsIncludeAllSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsIncludeAllSensitiveTypes"></a>

```typescript
public resetIsIncludeAllSensitiveTypes(): void
```

##### `resetIsSampleDataCollectionEnabled` <a name="resetIsSampleDataCollectionEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsSampleDataCollectionEnabled"></a>

```typescript
public resetIsSampleDataCollectionEnabled(): void
```

##### `resetSchemasForDiscovery` <a name="resetSchemasForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetSchemasForDiscovery"></a>

```typescript
public resetSchemasForDiscovery(): void
```

##### `resetSensitiveTypeIdsForDiscovery` <a name="resetSensitiveTypeIdsForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetSensitiveTypeIdsForDiscovery"></a>

```typescript
public resetSensitiveTypeIdsForDiscovery(): void
```

##### `resetTablesForDiscovery` <a name="resetTablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetTablesForDiscovery"></a>

```typescript
public resetTablesForDiscovery(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeDiscoveryJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isConstruct"></a>

```typescript
import { dataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

dataSafeDiscoveryJob.DataSafeDiscoveryJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformElement"></a>

```typescript
import { dataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformResource"></a>

```typescript
import { dataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport"></a>

```typescript
import { dataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeDiscoveryJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeDiscoveryJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeDiscoveryJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeDiscoveryJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tablesForDiscovery">tablesForDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList">DataSafeDiscoveryJobTablesForDiscoveryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference">DataSafeDiscoveryJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalColumnsScanned">totalColumnsScanned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalDeletedSensitiveColumns">totalDeletedSensitiveColumns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalModifiedSensitiveColumns">totalModifiedSensitiveColumns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalNewSensitiveColumns">totalNewSensitiveColumns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalObjectsScanned">totalObjectsScanned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalSchemasScanned">totalSchemasScanned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.discoveryTypeInput">discoveryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isAppDefinedRelationDiscoveryEnabledInput">isAppDefinedRelationDiscoveryEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSchemasInput">isIncludeAllSchemasInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSensitiveTypesInput">isIncludeAllSensitiveTypesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isSampleDataCollectionEnabledInput">isSampleDataCollectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.schemasForDiscoveryInput">schemasForDiscoveryInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveDataModelIdInput">sensitiveDataModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveTypeIdsForDiscoveryInput">sensitiveTypeIdsForDiscoveryInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tablesForDiscoveryInput">tablesForDiscoveryInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.discoveryType">discoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isAppDefinedRelationDiscoveryEnabled">isAppDefinedRelationDiscoveryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSchemas">isIncludeAllSchemas</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSensitiveTypes">isIncludeAllSensitiveTypes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isSampleDataCollectionEnabled">isSampleDataCollectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.schemasForDiscovery">schemasForDiscovery</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveTypeIdsForDiscovery">sensitiveTypeIdsForDiscovery</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tablesForDiscovery`<sup>Required</sup> <a name="tablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tablesForDiscovery"></a>

```typescript
public readonly tablesForDiscovery: DataSafeDiscoveryJobTablesForDiscoveryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList">DataSafeDiscoveryJobTablesForDiscoveryList</a>

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeDiscoveryJobTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference">DataSafeDiscoveryJobTimeoutsOutputReference</a>

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `totalColumnsScanned`<sup>Required</sup> <a name="totalColumnsScanned" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalColumnsScanned"></a>

```typescript
public readonly totalColumnsScanned: string;
```

- *Type:* string

---

##### `totalDeletedSensitiveColumns`<sup>Required</sup> <a name="totalDeletedSensitiveColumns" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalDeletedSensitiveColumns"></a>

```typescript
public readonly totalDeletedSensitiveColumns: string;
```

- *Type:* string

---

##### `totalModifiedSensitiveColumns`<sup>Required</sup> <a name="totalModifiedSensitiveColumns" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalModifiedSensitiveColumns"></a>

```typescript
public readonly totalModifiedSensitiveColumns: string;
```

- *Type:* string

---

##### `totalNewSensitiveColumns`<sup>Required</sup> <a name="totalNewSensitiveColumns" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalNewSensitiveColumns"></a>

```typescript
public readonly totalNewSensitiveColumns: string;
```

- *Type:* string

---

##### `totalObjectsScanned`<sup>Required</sup> <a name="totalObjectsScanned" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalObjectsScanned"></a>

```typescript
public readonly totalObjectsScanned: string;
```

- *Type:* string

---

##### `totalSchemasScanned`<sup>Required</sup> <a name="totalSchemasScanned" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalSchemasScanned"></a>

```typescript
public readonly totalSchemasScanned: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `discoveryTypeInput`<sup>Optional</sup> <a name="discoveryTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.discoveryTypeInput"></a>

```typescript
public readonly discoveryTypeInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isAppDefinedRelationDiscoveryEnabledInput`<sup>Optional</sup> <a name="isAppDefinedRelationDiscoveryEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isAppDefinedRelationDiscoveryEnabledInput"></a>

```typescript
public readonly isAppDefinedRelationDiscoveryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isIncludeAllSchemasInput`<sup>Optional</sup> <a name="isIncludeAllSchemasInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSchemasInput"></a>

```typescript
public readonly isIncludeAllSchemasInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isIncludeAllSensitiveTypesInput`<sup>Optional</sup> <a name="isIncludeAllSensitiveTypesInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSensitiveTypesInput"></a>

```typescript
public readonly isIncludeAllSensitiveTypesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSampleDataCollectionEnabledInput`<sup>Optional</sup> <a name="isSampleDataCollectionEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isSampleDataCollectionEnabledInput"></a>

```typescript
public readonly isSampleDataCollectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemasForDiscoveryInput`<sup>Optional</sup> <a name="schemasForDiscoveryInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.schemasForDiscoveryInput"></a>

```typescript
public readonly schemasForDiscoveryInput: string[];
```

- *Type:* string[]

---

##### `sensitiveDataModelIdInput`<sup>Optional</sup> <a name="sensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveDataModelIdInput"></a>

```typescript
public readonly sensitiveDataModelIdInput: string;
```

- *Type:* string

---

##### `sensitiveTypeIdsForDiscoveryInput`<sup>Optional</sup> <a name="sensitiveTypeIdsForDiscoveryInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveTypeIdsForDiscoveryInput"></a>

```typescript
public readonly sensitiveTypeIdsForDiscoveryInput: string[];
```

- *Type:* string[]

---

##### `tablesForDiscoveryInput`<sup>Optional</sup> <a name="tablesForDiscoveryInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tablesForDiscoveryInput"></a>

```typescript
public readonly tablesForDiscoveryInput: IResolvable | DataSafeDiscoveryJobTablesForDiscovery[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeDiscoveryJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `discoveryType`<sup>Required</sup> <a name="discoveryType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.discoveryType"></a>

```typescript
public readonly discoveryType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAppDefinedRelationDiscoveryEnabled`<sup>Required</sup> <a name="isAppDefinedRelationDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isAppDefinedRelationDiscoveryEnabled"></a>

```typescript
public readonly isAppDefinedRelationDiscoveryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isIncludeAllSchemas`<sup>Required</sup> <a name="isIncludeAllSchemas" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSchemas"></a>

```typescript
public readonly isIncludeAllSchemas: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isIncludeAllSensitiveTypes`<sup>Required</sup> <a name="isIncludeAllSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSensitiveTypes"></a>

```typescript
public readonly isIncludeAllSensitiveTypes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSampleDataCollectionEnabled`<sup>Required</sup> <a name="isSampleDataCollectionEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isSampleDataCollectionEnabled"></a>

```typescript
public readonly isSampleDataCollectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemasForDiscovery`<sup>Required</sup> <a name="schemasForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.schemasForDiscovery"></a>

```typescript
public readonly schemasForDiscovery: string[];
```

- *Type:* string[]

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

---

##### `sensitiveTypeIdsForDiscovery`<sup>Required</sup> <a name="sensitiveTypeIdsForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveTypeIdsForDiscovery"></a>

```typescript
public readonly sensitiveTypeIdsForDiscovery: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeDiscoveryJobConfig <a name="DataSafeDiscoveryJobConfig" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.Initializer"></a>

```typescript
import { dataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

const dataSafeDiscoveryJobConfig: dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#compartment_id DataSafeDiscoveryJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_data_model_id DataSafeDiscoveryJob#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#defined_tags DataSafeDiscoveryJob#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.discoveryType">discoveryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#discovery_type DataSafeDiscoveryJob#discovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#display_name DataSafeDiscoveryJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#freeform_tags DataSafeDiscoveryJob#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#id DataSafeDiscoveryJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isAppDefinedRelationDiscoveryEnabled">isAppDefinedRelationDiscoveryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_app_defined_relation_discovery_enabled DataSafeDiscoveryJob#is_app_defined_relation_discovery_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isIncludeAllSchemas">isIncludeAllSchemas</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_schemas DataSafeDiscoveryJob#is_include_all_schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isIncludeAllSensitiveTypes">isIncludeAllSensitiveTypes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_sensitive_types DataSafeDiscoveryJob#is_include_all_sensitive_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isSampleDataCollectionEnabled">isSampleDataCollectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_sample_data_collection_enabled DataSafeDiscoveryJob#is_sample_data_collection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.schemasForDiscovery">schemasForDiscovery</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schemas_for_discovery DataSafeDiscoveryJob#schemas_for_discovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.sensitiveTypeIdsForDiscovery">sensitiveTypeIdsForDiscovery</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_type_ids_for_discovery DataSafeDiscoveryJob#sensitive_type_ids_for_discovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.tablesForDiscovery">tablesForDiscovery</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>[]</code> | tables_for_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#compartment_id DataSafeDiscoveryJob#compartment_id}.

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_data_model_id DataSafeDiscoveryJob#sensitive_data_model_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#defined_tags DataSafeDiscoveryJob#defined_tags}.

---

##### `discoveryType`<sup>Optional</sup> <a name="discoveryType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.discoveryType"></a>

```typescript
public readonly discoveryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#discovery_type DataSafeDiscoveryJob#discovery_type}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#display_name DataSafeDiscoveryJob#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#freeform_tags DataSafeDiscoveryJob#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#id DataSafeDiscoveryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAppDefinedRelationDiscoveryEnabled`<sup>Optional</sup> <a name="isAppDefinedRelationDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isAppDefinedRelationDiscoveryEnabled"></a>

```typescript
public readonly isAppDefinedRelationDiscoveryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_app_defined_relation_discovery_enabled DataSafeDiscoveryJob#is_app_defined_relation_discovery_enabled}.

---

##### `isIncludeAllSchemas`<sup>Optional</sup> <a name="isIncludeAllSchemas" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isIncludeAllSchemas"></a>

```typescript
public readonly isIncludeAllSchemas: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_schemas DataSafeDiscoveryJob#is_include_all_schemas}.

---

##### `isIncludeAllSensitiveTypes`<sup>Optional</sup> <a name="isIncludeAllSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isIncludeAllSensitiveTypes"></a>

```typescript
public readonly isIncludeAllSensitiveTypes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_sensitive_types DataSafeDiscoveryJob#is_include_all_sensitive_types}.

---

##### `isSampleDataCollectionEnabled`<sup>Optional</sup> <a name="isSampleDataCollectionEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isSampleDataCollectionEnabled"></a>

```typescript
public readonly isSampleDataCollectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_sample_data_collection_enabled DataSafeDiscoveryJob#is_sample_data_collection_enabled}.

---

##### `schemasForDiscovery`<sup>Optional</sup> <a name="schemasForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.schemasForDiscovery"></a>

```typescript
public readonly schemasForDiscovery: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schemas_for_discovery DataSafeDiscoveryJob#schemas_for_discovery}.

---

##### `sensitiveTypeIdsForDiscovery`<sup>Optional</sup> <a name="sensitiveTypeIdsForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.sensitiveTypeIdsForDiscovery"></a>

```typescript
public readonly sensitiveTypeIdsForDiscovery: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_type_ids_for_discovery DataSafeDiscoveryJob#sensitive_type_ids_for_discovery}.

---

##### `tablesForDiscovery`<sup>Optional</sup> <a name="tablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.tablesForDiscovery"></a>

```typescript
public readonly tablesForDiscovery: IResolvable | DataSafeDiscoveryJobTablesForDiscovery[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>[]

tables_for_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#tables_for_discovery DataSafeDiscoveryJob#tables_for_discovery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeDiscoveryJobTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#timeouts DataSafeDiscoveryJob#timeouts}

---

### DataSafeDiscoveryJobTablesForDiscovery <a name="DataSafeDiscoveryJobTablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.Initializer"></a>

```typescript
import { dataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

const dataSafeDiscoveryJobTablesForDiscovery: dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schema_name DataSafeDiscoveryJob#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.property.tableNames">tableNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#table_names DataSafeDiscoveryJob#table_names}. |

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schema_name DataSafeDiscoveryJob#schema_name}.

---

##### `tableNames`<sup>Optional</sup> <a name="tableNames" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.property.tableNames"></a>

```typescript
public readonly tableNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#table_names DataSafeDiscoveryJob#table_names}.

---

### DataSafeDiscoveryJobTimeouts <a name="DataSafeDiscoveryJobTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.Initializer"></a>

```typescript
import { dataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

const dataSafeDiscoveryJobTimeouts: dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#create DataSafeDiscoveryJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#delete DataSafeDiscoveryJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#update DataSafeDiscoveryJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#create DataSafeDiscoveryJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#delete DataSafeDiscoveryJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#update DataSafeDiscoveryJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeDiscoveryJobTablesForDiscoveryList <a name="DataSafeDiscoveryJobTablesForDiscoveryList" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer"></a>

```typescript
import { dataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.get"></a>

```typescript
public get(index: number): DataSafeDiscoveryJobTablesForDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeDiscoveryJobTablesForDiscovery[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>[]

---


### DataSafeDiscoveryJobTablesForDiscoveryOutputReference <a name="DataSafeDiscoveryJobTablesForDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer"></a>

```typescript
import { dataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resetTableNames">resetTableNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTableNames` <a name="resetTableNames" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resetTableNames"></a>

```typescript
public resetTableNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.tableNamesInput">tableNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.tableNames">tableNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNamesInput`<sup>Optional</sup> <a name="tableNamesInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.tableNamesInput"></a>

```typescript
public readonly tableNamesInput: string[];
```

- *Type:* string[]

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableNames`<sup>Required</sup> <a name="tableNames" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.tableNames"></a>

```typescript
public readonly tableNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeDiscoveryJobTablesForDiscovery;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>

---


### DataSafeDiscoveryJobTimeoutsOutputReference <a name="DataSafeDiscoveryJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeDiscoveryJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a>

---



