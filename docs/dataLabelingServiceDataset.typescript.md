# `dataLabelingServiceDataset` Submodule <a name="`dataLabelingServiceDataset` Submodule" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLabelingServiceDataset <a name="DataLabelingServiceDataset" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset oci_data_labeling_service_dataset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataLabelingServiceDataset.DataLabelingServiceDataset(scope: Construct, id: string, config: DataLabelingServiceDatasetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig">DataLabelingServiceDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig">DataLabelingServiceDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetFormatDetails">putDatasetFormatDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetSourceDetails">putDatasetSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putInitialImportDatasetConfiguration">putInitialImportDatasetConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putInitialRecordGenerationConfiguration">putInitialRecordGenerationConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putLabelSet">putLabelSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetInitialImportDatasetConfiguration">resetInitialImportDatasetConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetInitialRecordGenerationConfiguration">resetInitialRecordGenerationConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetLabelingInstructions">resetLabelingInstructions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatasetFormatDetails` <a name="putDatasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetFormatDetails"></a>

```typescript
public putDatasetFormatDetails(value: DataLabelingServiceDatasetDatasetFormatDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetFormatDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a>

---

##### `putDatasetSourceDetails` <a name="putDatasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetSourceDetails"></a>

```typescript
public putDatasetSourceDetails(value: DataLabelingServiceDatasetDatasetSourceDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putDatasetSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a>

---

##### `putInitialImportDatasetConfiguration` <a name="putInitialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putInitialImportDatasetConfiguration"></a>

```typescript
public putInitialImportDatasetConfiguration(value: DataLabelingServiceDatasetInitialImportDatasetConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putInitialImportDatasetConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a>

---

##### `putInitialRecordGenerationConfiguration` <a name="putInitialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putInitialRecordGenerationConfiguration"></a>

```typescript
public putInitialRecordGenerationConfiguration(value: DataLabelingServiceDatasetInitialRecordGenerationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putInitialRecordGenerationConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a>

---

##### `putLabelSet` <a name="putLabelSet" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putLabelSet"></a>

```typescript
public putLabelSet(value: DataLabelingServiceDatasetLabelSet): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putLabelSet.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putTimeouts"></a>

```typescript
public putTimeouts(value: DataLabelingServiceDatasetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialImportDatasetConfiguration` <a name="resetInitialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetInitialImportDatasetConfiguration"></a>

```typescript
public resetInitialImportDatasetConfiguration(): void
```

##### `resetInitialRecordGenerationConfiguration` <a name="resetInitialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetInitialRecordGenerationConfiguration"></a>

```typescript
public resetInitialRecordGenerationConfiguration(): void
```

##### `resetLabelingInstructions` <a name="resetLabelingInstructions" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetLabelingInstructions"></a>

```typescript
public resetLabelingInstructions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataLabelingServiceDataset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isConstruct"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

dataLabelingServiceDataset.DataLabelingServiceDataset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformElement"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformResource"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataLabelingServiceDataset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataLabelingServiceDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataLabelingServiceDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataLabelingServiceDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.additionalProperties">additionalProperties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetFormatDetails">datasetFormatDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference">DataLabelingServiceDatasetDatasetFormatDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetSourceDetails">datasetSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference">DataLabelingServiceDatasetDatasetSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialImportDatasetConfiguration">initialImportDatasetConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference">DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialRecordGenerationConfiguration">initialRecordGenerationConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference">DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelSet">labelSet</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference">DataLabelingServiceDatasetLabelSetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.lifecycleSubstate">lifecycleSubstate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference">DataLabelingServiceDatasetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.annotationFormatInput">annotationFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetFormatDetailsInput">datasetFormatDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetSourceDetailsInput">datasetSourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialImportDatasetConfigurationInput">initialImportDatasetConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialRecordGenerationConfigurationInput">initialRecordGenerationConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelingInstructionsInput">labelingInstructionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelSetInput">labelSetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.annotationFormat">annotationFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelingInstructions">labelingInstructions</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `datasetFormatDetails`<sup>Required</sup> <a name="datasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetFormatDetails"></a>

```typescript
public readonly datasetFormatDetails: DataLabelingServiceDatasetDatasetFormatDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference">DataLabelingServiceDatasetDatasetFormatDetailsOutputReference</a>

---

##### `datasetSourceDetails`<sup>Required</sup> <a name="datasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetSourceDetails"></a>

```typescript
public readonly datasetSourceDetails: DataLabelingServiceDatasetDatasetSourceDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference">DataLabelingServiceDatasetDatasetSourceDetailsOutputReference</a>

---

##### `initialImportDatasetConfiguration`<sup>Required</sup> <a name="initialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialImportDatasetConfiguration"></a>

```typescript
public readonly initialImportDatasetConfiguration: DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference">DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference</a>

---

##### `initialRecordGenerationConfiguration`<sup>Required</sup> <a name="initialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialRecordGenerationConfiguration"></a>

```typescript
public readonly initialRecordGenerationConfiguration: DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference">DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference</a>

---

##### `labelSet`<sup>Required</sup> <a name="labelSet" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelSet"></a>

```typescript
public readonly labelSet: DataLabelingServiceDatasetLabelSetOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference">DataLabelingServiceDatasetLabelSetOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `lifecycleSubstate`<sup>Required</sup> <a name="lifecycleSubstate" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.lifecycleSubstate"></a>

```typescript
public readonly lifecycleSubstate: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeouts"></a>

```typescript
public readonly timeouts: DataLabelingServiceDatasetTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference">DataLabelingServiceDatasetTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `annotationFormatInput`<sup>Optional</sup> <a name="annotationFormatInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.annotationFormatInput"></a>

```typescript
public readonly annotationFormatInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `datasetFormatDetailsInput`<sup>Optional</sup> <a name="datasetFormatDetailsInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetFormatDetailsInput"></a>

```typescript
public readonly datasetFormatDetailsInput: DataLabelingServiceDatasetDatasetFormatDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a>

---

##### `datasetSourceDetailsInput`<sup>Optional</sup> <a name="datasetSourceDetailsInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.datasetSourceDetailsInput"></a>

```typescript
public readonly datasetSourceDetailsInput: DataLabelingServiceDatasetDatasetSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialImportDatasetConfigurationInput`<sup>Optional</sup> <a name="initialImportDatasetConfigurationInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialImportDatasetConfigurationInput"></a>

```typescript
public readonly initialImportDatasetConfigurationInput: DataLabelingServiceDatasetInitialImportDatasetConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a>

---

##### `initialRecordGenerationConfigurationInput`<sup>Optional</sup> <a name="initialRecordGenerationConfigurationInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.initialRecordGenerationConfigurationInput"></a>

```typescript
public readonly initialRecordGenerationConfigurationInput: DataLabelingServiceDatasetInitialRecordGenerationConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a>

---

##### `labelingInstructionsInput`<sup>Optional</sup> <a name="labelingInstructionsInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelingInstructionsInput"></a>

```typescript
public readonly labelingInstructionsInput: string;
```

- *Type:* string

---

##### `labelSetInput`<sup>Optional</sup> <a name="labelSetInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelSetInput"></a>

```typescript
public readonly labelSetInput: DataLabelingServiceDatasetLabelSet;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataLabelingServiceDatasetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a>

---

##### `annotationFormat`<sup>Required</sup> <a name="annotationFormat" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.annotationFormat"></a>

```typescript
public readonly annotationFormat: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labelingInstructions`<sup>Required</sup> <a name="labelingInstructions" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.labelingInstructions"></a>

```typescript
public readonly labelingInstructions: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDataset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLabelingServiceDatasetConfig <a name="DataLabelingServiceDatasetConfig" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataLabelingServiceDatasetConfig: dataLabelingServiceDataset.DataLabelingServiceDatasetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.annotationFormat">annotationFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#annotation_format DataLabelingServiceDataset#annotation_format}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#compartment_id DataLabelingServiceDataset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.datasetFormatDetails">datasetFormatDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a></code> | dataset_format_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.datasetSourceDetails">datasetSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a></code> | dataset_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.labelSet">labelSet</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a></code> | label_set block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#defined_tags DataLabelingServiceDataset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#description DataLabelingServiceDataset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#display_name DataLabelingServiceDataset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#freeform_tags DataLabelingServiceDataset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#id DataLabelingServiceDataset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.initialImportDatasetConfiguration">initialImportDatasetConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a></code> | initial_import_dataset_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.initialRecordGenerationConfiguration">initialRecordGenerationConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a></code> | initial_record_generation_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.labelingInstructions">labelingInstructions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#labeling_instructions DataLabelingServiceDataset#labeling_instructions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `annotationFormat`<sup>Required</sup> <a name="annotationFormat" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.annotationFormat"></a>

```typescript
public readonly annotationFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#annotation_format DataLabelingServiceDataset#annotation_format}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#compartment_id DataLabelingServiceDataset#compartment_id}.

---

##### `datasetFormatDetails`<sup>Required</sup> <a name="datasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.datasetFormatDetails"></a>

```typescript
public readonly datasetFormatDetails: DataLabelingServiceDatasetDatasetFormatDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a>

dataset_format_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#dataset_format_details DataLabelingServiceDataset#dataset_format_details}

---

##### `datasetSourceDetails`<sup>Required</sup> <a name="datasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.datasetSourceDetails"></a>

```typescript
public readonly datasetSourceDetails: DataLabelingServiceDatasetDatasetSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a>

dataset_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#dataset_source_details DataLabelingServiceDataset#dataset_source_details}

---

##### `labelSet`<sup>Required</sup> <a name="labelSet" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.labelSet"></a>

```typescript
public readonly labelSet: DataLabelingServiceDatasetLabelSet;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a>

label_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#label_set DataLabelingServiceDataset#label_set}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#defined_tags DataLabelingServiceDataset#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#description DataLabelingServiceDataset#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#display_name DataLabelingServiceDataset#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#freeform_tags DataLabelingServiceDataset#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#id DataLabelingServiceDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialImportDatasetConfiguration`<sup>Optional</sup> <a name="initialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.initialImportDatasetConfiguration"></a>

```typescript
public readonly initialImportDatasetConfiguration: DataLabelingServiceDatasetInitialImportDatasetConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a>

initial_import_dataset_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#initial_import_dataset_configuration DataLabelingServiceDataset#initial_import_dataset_configuration}

---

##### `initialRecordGenerationConfiguration`<sup>Optional</sup> <a name="initialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.initialRecordGenerationConfiguration"></a>

```typescript
public readonly initialRecordGenerationConfiguration: DataLabelingServiceDatasetInitialRecordGenerationConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a>

initial_record_generation_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#initial_record_generation_configuration DataLabelingServiceDataset#initial_record_generation_configuration}

---

##### `labelingInstructions`<sup>Optional</sup> <a name="labelingInstructions" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.labelingInstructions"></a>

```typescript
public readonly labelingInstructions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#labeling_instructions DataLabelingServiceDataset#labeling_instructions}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataLabelingServiceDatasetTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#timeouts DataLabelingServiceDataset#timeouts}

---

### DataLabelingServiceDatasetDatasetFormatDetails <a name="DataLabelingServiceDatasetDatasetFormatDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataLabelingServiceDatasetDatasetFormatDetails: dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails.property.formatType">formatType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#format_type DataLabelingServiceDataset#format_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails.property.textFileTypeMetadata">textFileTypeMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a></code> | text_file_type_metadata block. |

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails.property.formatType"></a>

```typescript
public readonly formatType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#format_type DataLabelingServiceDataset#format_type}.

---

##### `textFileTypeMetadata`<sup>Optional</sup> <a name="textFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails.property.textFileTypeMetadata"></a>

```typescript
public readonly textFileTypeMetadata: DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a>

text_file_type_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#text_file_type_metadata DataLabelingServiceDataset#text_file_type_metadata}

---

### DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata <a name="DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata: dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.columnIndex">columnIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_index DataLabelingServiceDataset#column_index}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.formatType">formatType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#format_type DataLabelingServiceDataset#format_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.columnDelimiter">columnDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_delimiter DataLabelingServiceDataset#column_delimiter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.columnName">columnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_name DataLabelingServiceDataset#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.escapeCharacter">escapeCharacter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#escape_character DataLabelingServiceDataset#escape_character}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.lineDelimiter">lineDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#line_delimiter DataLabelingServiceDataset#line_delimiter}. |

---

##### `columnIndex`<sup>Required</sup> <a name="columnIndex" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.columnIndex"></a>

```typescript
public readonly columnIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_index DataLabelingServiceDataset#column_index}.

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.formatType"></a>

```typescript
public readonly formatType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#format_type DataLabelingServiceDataset#format_type}.

---

##### `columnDelimiter`<sup>Optional</sup> <a name="columnDelimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.columnDelimiter"></a>

```typescript
public readonly columnDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_delimiter DataLabelingServiceDataset#column_delimiter}.

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#column_name DataLabelingServiceDataset#column_name}.

---

##### `escapeCharacter`<sup>Optional</sup> <a name="escapeCharacter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.escapeCharacter"></a>

```typescript
public readonly escapeCharacter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#escape_character DataLabelingServiceDataset#escape_character}.

---

##### `lineDelimiter`<sup>Optional</sup> <a name="lineDelimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata.property.lineDelimiter"></a>

```typescript
public readonly lineDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#line_delimiter DataLabelingServiceDataset#line_delimiter}.

---

### DataLabelingServiceDatasetDatasetSourceDetails <a name="DataLabelingServiceDatasetDatasetSourceDetails" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataLabelingServiceDatasetDatasetSourceDetails: dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#bucket DataLabelingServiceDataset#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#namespace DataLabelingServiceDataset#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#source_type DataLabelingServiceDataset#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#prefix DataLabelingServiceDataset#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#bucket DataLabelingServiceDataset#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#namespace DataLabelingServiceDataset#namespace}.

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#source_type DataLabelingServiceDataset#source_type}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#prefix DataLabelingServiceDataset#prefix}.

---

### DataLabelingServiceDatasetInitialImportDatasetConfiguration <a name="DataLabelingServiceDatasetInitialImportDatasetConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataLabelingServiceDatasetInitialImportDatasetConfiguration: dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration.property.importFormat">importFormat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a></code> | import_format block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration.property.importMetadataPath">importMetadataPath</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a></code> | import_metadata_path block. |

---

##### `importFormat`<sup>Required</sup> <a name="importFormat" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration.property.importFormat"></a>

```typescript
public readonly importFormat: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a>

import_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#import_format DataLabelingServiceDataset#import_format}

---

##### `importMetadataPath`<sup>Required</sup> <a name="importMetadataPath" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration.property.importMetadataPath"></a>

```typescript
public readonly importMetadataPath: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a>

import_metadata_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#import_metadata_path DataLabelingServiceDataset#import_metadata_path}

---

### DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat <a name="DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat: dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#name DataLabelingServiceDataset#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#version DataLabelingServiceDataset#version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#name DataLabelingServiceDataset#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#version DataLabelingServiceDataset#version}.

---

### DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath <a name="DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath: dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#bucket DataLabelingServiceDataset#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#namespace DataLabelingServiceDataset#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#path DataLabelingServiceDataset#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#source_type DataLabelingServiceDataset#source_type}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#bucket DataLabelingServiceDataset#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#namespace DataLabelingServiceDataset#namespace}.

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#path DataLabelingServiceDataset#path}.

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#source_type DataLabelingServiceDataset#source_type}.

---

### DataLabelingServiceDatasetInitialRecordGenerationConfiguration <a name="DataLabelingServiceDatasetInitialRecordGenerationConfiguration" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataLabelingServiceDatasetInitialRecordGenerationConfiguration: dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration = { ... }
```


### DataLabelingServiceDatasetLabelSet <a name="DataLabelingServiceDatasetLabelSet" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataLabelingServiceDatasetLabelSet: dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet.property.items">items</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>[]</code> | items block. |

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet.property.items"></a>

```typescript
public readonly items: IResolvable | DataLabelingServiceDatasetLabelSetItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>[]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#items DataLabelingServiceDataset#items}

---

### DataLabelingServiceDatasetLabelSetItems <a name="DataLabelingServiceDatasetLabelSetItems" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataLabelingServiceDatasetLabelSetItems: dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#name DataLabelingServiceDataset#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#name DataLabelingServiceDataset#name}.

---

### DataLabelingServiceDatasetTimeouts <a name="DataLabelingServiceDatasetTimeouts" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

const dataLabelingServiceDatasetTimeouts: dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#create DataLabelingServiceDataset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#delete DataLabelingServiceDataset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#update DataLabelingServiceDataset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#create DataLabelingServiceDataset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#delete DataLabelingServiceDataset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_labeling_service_dataset#update DataLabelingServiceDataset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataLabelingServiceDatasetDatasetFormatDetailsOutputReference <a name="DataLabelingServiceDatasetDatasetFormatDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.putTextFileTypeMetadata">putTextFileTypeMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.resetTextFileTypeMetadata">resetTextFileTypeMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTextFileTypeMetadata` <a name="putTextFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.putTextFileTypeMetadata"></a>

```typescript
public putTextFileTypeMetadata(value: DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.putTextFileTypeMetadata.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a>

---

##### `resetTextFileTypeMetadata` <a name="resetTextFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.resetTextFileTypeMetadata"></a>

```typescript
public resetTextFileTypeMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.textFileTypeMetadata">textFileTypeMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.formatTypeInput">formatTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.textFileTypeMetadataInput">textFileTypeMetadataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.formatType">formatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `textFileTypeMetadata`<sup>Required</sup> <a name="textFileTypeMetadata" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.textFileTypeMetadata"></a>

```typescript
public readonly textFileTypeMetadata: DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference</a>

---

##### `formatTypeInput`<sup>Optional</sup> <a name="formatTypeInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.formatTypeInput"></a>

```typescript
public readonly formatTypeInput: string;
```

- *Type:* string

---

##### `textFileTypeMetadataInput`<sup>Optional</sup> <a name="textFileTypeMetadataInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.textFileTypeMetadataInput"></a>

```typescript
public readonly textFileTypeMetadataInput: DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a>

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.formatType"></a>

```typescript
public readonly formatType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLabelingServiceDatasetDatasetFormatDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetails">DataLabelingServiceDatasetDatasetFormatDetails</a>

---


### DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference <a name="DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetColumnDelimiter">resetColumnDelimiter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetEscapeCharacter">resetEscapeCharacter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetLineDelimiter">resetLineDelimiter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnDelimiter` <a name="resetColumnDelimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetColumnDelimiter"></a>

```typescript
public resetColumnDelimiter(): void
```

##### `resetColumnName` <a name="resetColumnName" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetColumnName"></a>

```typescript
public resetColumnName(): void
```

##### `resetEscapeCharacter` <a name="resetEscapeCharacter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetEscapeCharacter"></a>

```typescript
public resetEscapeCharacter(): void
```

##### `resetLineDelimiter` <a name="resetLineDelimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.resetLineDelimiter"></a>

```typescript
public resetLineDelimiter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiterInput">columnDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndexInput">columnIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacterInput">escapeCharacterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatTypeInput">formatTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiterInput">lineDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiter">columnDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndex">columnIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacter">escapeCharacter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatType">formatType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiter">lineDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnDelimiterInput`<sup>Optional</sup> <a name="columnDelimiterInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiterInput"></a>

```typescript
public readonly columnDelimiterInput: string;
```

- *Type:* string

---

##### `columnIndexInput`<sup>Optional</sup> <a name="columnIndexInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndexInput"></a>

```typescript
public readonly columnIndexInput: number;
```

- *Type:* number

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string;
```

- *Type:* string

---

##### `escapeCharacterInput`<sup>Optional</sup> <a name="escapeCharacterInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacterInput"></a>

```typescript
public readonly escapeCharacterInput: string;
```

- *Type:* string

---

##### `formatTypeInput`<sup>Optional</sup> <a name="formatTypeInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatTypeInput"></a>

```typescript
public readonly formatTypeInput: string;
```

- *Type:* string

---

##### `lineDelimiterInput`<sup>Optional</sup> <a name="lineDelimiterInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiterInput"></a>

```typescript
public readonly lineDelimiterInput: string;
```

- *Type:* string

---

##### `columnDelimiter`<sup>Required</sup> <a name="columnDelimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnDelimiter"></a>

```typescript
public readonly columnDelimiter: string;
```

- *Type:* string

---

##### `columnIndex`<sup>Required</sup> <a name="columnIndex" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnIndex"></a>

```typescript
public readonly columnIndex: number;
```

- *Type:* number

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `escapeCharacter`<sup>Required</sup> <a name="escapeCharacter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.escapeCharacter"></a>

```typescript
public readonly escapeCharacter: string;
```

- *Type:* string

---

##### `formatType`<sup>Required</sup> <a name="formatType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.formatType"></a>

```typescript
public readonly formatType: string;
```

- *Type:* string

---

##### `lineDelimiter`<sup>Required</sup> <a name="lineDelimiter" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.lineDelimiter"></a>

```typescript
public readonly lineDelimiter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata">DataLabelingServiceDatasetDatasetFormatDetailsTextFileTypeMetadata</a>

---


### DataLabelingServiceDatasetDatasetSourceDetailsOutputReference <a name="DataLabelingServiceDatasetDatasetSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLabelingServiceDatasetDatasetSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetDatasetSourceDetails">DataLabelingServiceDatasetDatasetSourceDetails</a>

---


### DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference <a name="DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a>

---


### DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference <a name="DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a>

---


### DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference <a name="DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportFormat">putImportFormat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportMetadataPath">putImportMetadataPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImportFormat` <a name="putImportFormat" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportFormat"></a>

```typescript
public putImportFormat(value: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportFormat.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a>

---

##### `putImportMetadataPath` <a name="putImportMetadataPath" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportMetadataPath"></a>

```typescript
public putImportMetadataPath(value: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.putImportMetadataPath.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importFormat">importFormat</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importMetadataPath">importMetadataPath</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importFormatInput">importFormatInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importMetadataPathInput">importMetadataPathInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `importFormat`<sup>Required</sup> <a name="importFormat" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importFormat"></a>

```typescript
public readonly importFormat: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormatOutputReference</a>

---

##### `importMetadataPath`<sup>Required</sup> <a name="importMetadataPath" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importMetadataPath"></a>

```typescript
public readonly importMetadataPath: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPathOutputReference</a>

---

##### `importFormatInput`<sup>Optional</sup> <a name="importFormatInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importFormatInput"></a>

```typescript
public readonly importFormatInput: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportFormat</a>

---

##### `importMetadataPathInput`<sup>Optional</sup> <a name="importMetadataPathInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.importMetadataPathInput"></a>

```typescript
public readonly importMetadataPathInput: DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath">DataLabelingServiceDatasetInitialImportDatasetConfigurationImportMetadataPath</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLabelingServiceDatasetInitialImportDatasetConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialImportDatasetConfiguration">DataLabelingServiceDatasetInitialImportDatasetConfiguration</a>

---


### DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference <a name="DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLabelingServiceDatasetInitialRecordGenerationConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetInitialRecordGenerationConfiguration">DataLabelingServiceDatasetInitialRecordGenerationConfiguration</a>

---


### DataLabelingServiceDatasetLabelSetItemsList <a name="DataLabelingServiceDatasetLabelSetItemsList" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.get"></a>

```typescript
public get(index: number): DataLabelingServiceDatasetLabelSetItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLabelingServiceDatasetLabelSetItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>[]

---


### DataLabelingServiceDatasetLabelSetItemsOutputReference <a name="DataLabelingServiceDatasetLabelSetItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLabelingServiceDatasetLabelSetItems;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>

---


### DataLabelingServiceDatasetLabelSetOutputReference <a name="DataLabelingServiceDatasetLabelSetOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.putItems">putItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.putItems"></a>

```typescript
public putItems(value: IResolvable | DataLabelingServiceDatasetLabelSetItems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.putItems.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList">DataLabelingServiceDatasetLabelSetItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.itemsInput">itemsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.items"></a>

```typescript
public readonly items: DataLabelingServiceDatasetLabelSetItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItemsList">DataLabelingServiceDatasetLabelSetItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: IResolvable | DataLabelingServiceDatasetLabelSetItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetItems">DataLabelingServiceDatasetLabelSetItems</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataLabelingServiceDatasetLabelSet;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetLabelSet">DataLabelingServiceDatasetLabelSet</a>

---


### DataLabelingServiceDatasetTimeoutsOutputReference <a name="DataLabelingServiceDatasetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataLabelingServiceDataset } from 'rhizo-co-terraform-provider-oci'

new dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataLabelingServiceDatasetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataLabelingServiceDataset.DataLabelingServiceDatasetTimeouts">DataLabelingServiceDatasetTimeouts</a>

---



