# `aiDocumentModel` Submodule <a name="`aiDocumentModel` Submodule" id="rhizo-co-terraform-provider-oci.aiDocumentModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiDocumentModel <a name="AiDocumentModel" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model oci_ai_document_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModel(scope: Construct, id: string, config: AiDocumentModelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig">AiDocumentModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig">AiDocumentModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putComponentModels">putComponentModels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTestingDataset">putTestingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTrainingDataset">putTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putValidationDataset">putValidationDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetComponentModels">resetComponentModels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetIsQuickMode">resetIsQuickMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetMaxTrainingTimeInHours">resetMaxTrainingTimeInHours</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetModelId">resetModelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetModelVersion">resetModelVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetTestingDataset">resetTestingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetTrainingDataset">resetTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetValidationDataset">resetValidationDataset</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComponentModels` <a name="putComponentModels" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putComponentModels"></a>

```typescript
public putComponentModels(value: IResolvable | AiDocumentModelComponentModels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putComponentModels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>[]

---

##### `putTestingDataset` <a name="putTestingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTestingDataset"></a>

```typescript
public putTestingDataset(value: AiDocumentModelTestingDataset): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTestingDataset.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTimeouts"></a>

```typescript
public putTimeouts(value: AiDocumentModelTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a>

---

##### `putTrainingDataset` <a name="putTrainingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTrainingDataset"></a>

```typescript
public putTrainingDataset(value: AiDocumentModelTrainingDataset): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTrainingDataset.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a>

---

##### `putValidationDataset` <a name="putValidationDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putValidationDataset"></a>

```typescript
public putValidationDataset(value: AiDocumentModelValidationDataset): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putValidationDataset.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a>

---

##### `resetComponentModels` <a name="resetComponentModels" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetComponentModels"></a>

```typescript
public resetComponentModels(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsQuickMode` <a name="resetIsQuickMode" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetIsQuickMode"></a>

```typescript
public resetIsQuickMode(): void
```

##### `resetMaxTrainingTimeInHours` <a name="resetMaxTrainingTimeInHours" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetMaxTrainingTimeInHours"></a>

```typescript
public resetMaxTrainingTimeInHours(): void
```

##### `resetModelId` <a name="resetModelId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetModelId"></a>

```typescript
public resetModelId(): void
```

##### `resetModelVersion` <a name="resetModelVersion" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetModelVersion"></a>

```typescript
public resetModelVersion(): void
```

##### `resetTestingDataset` <a name="resetTestingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetTestingDataset"></a>

```typescript
public resetTestingDataset(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrainingDataset` <a name="resetTrainingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetTrainingDataset"></a>

```typescript
public resetTrainingDataset(): void
```

##### `resetValidationDataset` <a name="resetValidationDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetValidationDataset"></a>

```typescript
public resetValidationDataset(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AiDocumentModel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isConstruct"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

aiDocumentModel.AiDocumentModel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isTerraformElement"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

aiDocumentModel.AiDocumentModel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isTerraformResource"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

aiDocumentModel.AiDocumentModel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.generateConfigForImport"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

aiDocumentModel.AiDocumentModel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AiDocumentModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiDocumentModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiDocumentModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AiDocumentModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.componentModels">componentModels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList">AiDocumentModelComponentModelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.isComposedModel">isComposedModel</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList">AiDocumentModelMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.tenancyId">tenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.testingDataset">testingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference">AiDocumentModelTestingDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference">AiDocumentModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.trainedTimeInHours">trainedTimeInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.trainingDataset">trainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference">AiDocumentModelTrainingDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.validationDataset">validationDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference">AiDocumentModelValidationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.componentModelsInput">componentModelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.isQuickModeInput">isQuickModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.maxTrainingTimeInHoursInput">maxTrainingTimeInHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelIdInput">modelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelTypeInput">modelTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelVersionInput">modelVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.testingDatasetInput">testingDatasetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.trainingDatasetInput">trainingDatasetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.validationDatasetInput">validationDatasetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.isQuickMode">isQuickMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.maxTrainingTimeInHours">maxTrainingTimeInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelType">modelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelVersion">modelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `componentModels`<sup>Required</sup> <a name="componentModels" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.componentModels"></a>

```typescript
public readonly componentModels: AiDocumentModelComponentModelsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList">AiDocumentModelComponentModelsList</a>

---

##### `isComposedModel`<sup>Required</sup> <a name="isComposedModel" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.isComposedModel"></a>

```typescript
public readonly isComposedModel: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.metrics"></a>

```typescript
public readonly metrics: AiDocumentModelMetricsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList">AiDocumentModelMetricsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

---

##### `testingDataset`<sup>Required</sup> <a name="testingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.testingDataset"></a>

```typescript
public readonly testingDataset: AiDocumentModelTestingDatasetOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference">AiDocumentModelTestingDatasetOutputReference</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeouts"></a>

```typescript
public readonly timeouts: AiDocumentModelTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference">AiDocumentModelTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `trainedTimeInHours`<sup>Required</sup> <a name="trainedTimeInHours" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.trainedTimeInHours"></a>

```typescript
public readonly trainedTimeInHours: number;
```

- *Type:* number

---

##### `trainingDataset`<sup>Required</sup> <a name="trainingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.trainingDataset"></a>

```typescript
public readonly trainingDataset: AiDocumentModelTrainingDatasetOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference">AiDocumentModelTrainingDatasetOutputReference</a>

---

##### `validationDataset`<sup>Required</sup> <a name="validationDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.validationDataset"></a>

```typescript
public readonly validationDataset: AiDocumentModelValidationDatasetOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference">AiDocumentModelValidationDatasetOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `componentModelsInput`<sup>Optional</sup> <a name="componentModelsInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.componentModelsInput"></a>

```typescript
public readonly componentModelsInput: IResolvable | AiDocumentModelComponentModels[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>[]

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isQuickModeInput`<sup>Optional</sup> <a name="isQuickModeInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.isQuickModeInput"></a>

```typescript
public readonly isQuickModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxTrainingTimeInHoursInput`<sup>Optional</sup> <a name="maxTrainingTimeInHoursInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.maxTrainingTimeInHoursInput"></a>

```typescript
public readonly maxTrainingTimeInHoursInput: number;
```

- *Type:* number

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelIdInput"></a>

```typescript
public readonly modelIdInput: string;
```

- *Type:* string

---

##### `modelTypeInput`<sup>Optional</sup> <a name="modelTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelTypeInput"></a>

```typescript
public readonly modelTypeInput: string;
```

- *Type:* string

---

##### `modelVersionInput`<sup>Optional</sup> <a name="modelVersionInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelVersionInput"></a>

```typescript
public readonly modelVersionInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `testingDatasetInput`<sup>Optional</sup> <a name="testingDatasetInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.testingDatasetInput"></a>

```typescript
public readonly testingDatasetInput: AiDocumentModelTestingDataset;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AiDocumentModelTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a>

---

##### `trainingDatasetInput`<sup>Optional</sup> <a name="trainingDatasetInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.trainingDatasetInput"></a>

```typescript
public readonly trainingDatasetInput: AiDocumentModelTrainingDataset;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a>

---

##### `validationDatasetInput`<sup>Optional</sup> <a name="validationDatasetInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.validationDatasetInput"></a>

```typescript
public readonly validationDatasetInput: AiDocumentModelValidationDataset;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isQuickMode`<sup>Required</sup> <a name="isQuickMode" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.isQuickMode"></a>

```typescript
public readonly isQuickMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxTrainingTimeInHours`<sup>Required</sup> <a name="maxTrainingTimeInHours" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.maxTrainingTimeInHours"></a>

```typescript
public readonly maxTrainingTimeInHours: number;
```

- *Type:* number

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelType"></a>

```typescript
public readonly modelType: string;
```

- *Type:* string

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelVersion"></a>

```typescript
public readonly modelVersion: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiDocumentModelComponentModels <a name="AiDocumentModelComponentModels" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

const aiDocumentModelComponentModels: aiDocumentModel.AiDocumentModelComponentModels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels.property.modelId">modelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_id AiDocumentModel#model_id}. |

---

##### `modelId`<sup>Optional</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_id AiDocumentModel#model_id}.

---

### AiDocumentModelConfig <a name="AiDocumentModelConfig" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

const aiDocumentModelConfig: aiDocumentModel.AiDocumentModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#compartment_id AiDocumentModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.modelType">modelType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_type AiDocumentModel#model_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#project_id AiDocumentModel#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.componentModels">componentModels</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>[]</code> | component_models block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#defined_tags AiDocumentModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#description AiDocumentModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#display_name AiDocumentModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#freeform_tags AiDocumentModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#id AiDocumentModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.isQuickMode">isQuickMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#is_quick_mode AiDocumentModel#is_quick_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.maxTrainingTimeInHours">maxTrainingTimeInHours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#max_training_time_in_hours AiDocumentModel#max_training_time_in_hours}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.modelId">modelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_id AiDocumentModel#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.modelVersion">modelVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_version AiDocumentModel#model_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.testingDataset">testingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a></code> | testing_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.trainingDataset">trainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a></code> | training_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.validationDataset">validationDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a></code> | validation_dataset block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#compartment_id AiDocumentModel#compartment_id}.

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.modelType"></a>

```typescript
public readonly modelType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_type AiDocumentModel#model_type}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#project_id AiDocumentModel#project_id}.

---

##### `componentModels`<sup>Optional</sup> <a name="componentModels" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.componentModels"></a>

```typescript
public readonly componentModels: IResolvable | AiDocumentModelComponentModels[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>[]

component_models block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#component_models AiDocumentModel#component_models}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#defined_tags AiDocumentModel#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#description AiDocumentModel#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#display_name AiDocumentModel#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#freeform_tags AiDocumentModel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#id AiDocumentModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isQuickMode`<sup>Optional</sup> <a name="isQuickMode" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.isQuickMode"></a>

```typescript
public readonly isQuickMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#is_quick_mode AiDocumentModel#is_quick_mode}.

---

##### `maxTrainingTimeInHours`<sup>Optional</sup> <a name="maxTrainingTimeInHours" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.maxTrainingTimeInHours"></a>

```typescript
public readonly maxTrainingTimeInHours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#max_training_time_in_hours AiDocumentModel#max_training_time_in_hours}.

---

##### `modelId`<sup>Optional</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_id AiDocumentModel#model_id}.

---

##### `modelVersion`<sup>Optional</sup> <a name="modelVersion" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.modelVersion"></a>

```typescript
public readonly modelVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_version AiDocumentModel#model_version}.

---

##### `testingDataset`<sup>Optional</sup> <a name="testingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.testingDataset"></a>

```typescript
public readonly testingDataset: AiDocumentModelTestingDataset;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a>

testing_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#testing_dataset AiDocumentModel#testing_dataset}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AiDocumentModelTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#timeouts AiDocumentModel#timeouts}

---

##### `trainingDataset`<sup>Optional</sup> <a name="trainingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.trainingDataset"></a>

```typescript
public readonly trainingDataset: AiDocumentModelTrainingDataset;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a>

training_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#training_dataset AiDocumentModel#training_dataset}

---

##### `validationDataset`<sup>Optional</sup> <a name="validationDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.validationDataset"></a>

```typescript
public readonly validationDataset: AiDocumentModelValidationDataset;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a>

validation_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#validation_dataset AiDocumentModel#validation_dataset}

---

### AiDocumentModelMetrics <a name="AiDocumentModelMetrics" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetrics.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

const aiDocumentModelMetrics: aiDocumentModel.AiDocumentModelMetrics = { ... }
```


### AiDocumentModelMetricsDatasetSummary <a name="AiDocumentModelMetricsDatasetSummary" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummary.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

const aiDocumentModelMetricsDatasetSummary: aiDocumentModel.AiDocumentModelMetricsDatasetSummary = { ... }
```


### AiDocumentModelMetricsLabelMetricsReport <a name="AiDocumentModelMetricsLabelMetricsReport" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReport"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReport.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

const aiDocumentModelMetricsLabelMetricsReport: aiDocumentModel.AiDocumentModelMetricsLabelMetricsReport = { ... }
```


### AiDocumentModelMetricsLabelMetricsReportConfidenceEntries <a name="AiDocumentModelMetricsLabelMetricsReportConfidenceEntries" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntries.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

const aiDocumentModelMetricsLabelMetricsReportConfidenceEntries: aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntries = { ... }
```


### AiDocumentModelMetricsOverallMetricsReport <a name="AiDocumentModelMetricsOverallMetricsReport" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReport"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReport.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

const aiDocumentModelMetricsOverallMetricsReport: aiDocumentModel.AiDocumentModelMetricsOverallMetricsReport = { ... }
```


### AiDocumentModelMetricsOverallMetricsReportConfidenceEntries <a name="AiDocumentModelMetricsOverallMetricsReportConfidenceEntries" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntries.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

const aiDocumentModelMetricsOverallMetricsReportConfidenceEntries: aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntries = { ... }
```


### AiDocumentModelTestingDataset <a name="AiDocumentModelTestingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

const aiDocumentModelTestingDataset: aiDocumentModel.AiDocumentModelTestingDataset = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.datasetType">datasetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.datasetId">datasetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.object">object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}. |

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.datasetType"></a>

```typescript
public readonly datasetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}.

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}.

---

### AiDocumentModelTimeouts <a name="AiDocumentModelTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

const aiDocumentModelTimeouts: aiDocumentModel.AiDocumentModelTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#create AiDocumentModel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#delete AiDocumentModel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#update AiDocumentModel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#create AiDocumentModel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#delete AiDocumentModel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#update AiDocumentModel#update}.

---

### AiDocumentModelTrainingDataset <a name="AiDocumentModelTrainingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

const aiDocumentModelTrainingDataset: aiDocumentModel.AiDocumentModelTrainingDataset = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.datasetType">datasetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.datasetId">datasetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.object">object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}. |

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.datasetType"></a>

```typescript
public readonly datasetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}.

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}.

---

### AiDocumentModelValidationDataset <a name="AiDocumentModelValidationDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

const aiDocumentModelValidationDataset: aiDocumentModel.AiDocumentModelValidationDataset = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.datasetType">datasetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.datasetId">datasetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.object">object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}. |

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.datasetType"></a>

```typescript
public readonly datasetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}.

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiDocumentModelComponentModelsList <a name="AiDocumentModelComponentModelsList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModelComponentModelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.get"></a>

```typescript
public get(index: number): AiDocumentModelComponentModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiDocumentModelComponentModels[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>[]

---


### AiDocumentModelComponentModelsOutputReference <a name="AiDocumentModelComponentModelsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModelComponentModelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.resetModelId">resetModelId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModelId` <a name="resetModelId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.resetModelId"></a>

```typescript
public resetModelId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.modelIdInput"></a>

```typescript
public readonly modelIdInput: string;
```

- *Type:* string

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiDocumentModelComponentModels;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>

---


### AiDocumentModelMetricsDatasetSummaryList <a name="AiDocumentModelMetricsDatasetSummaryList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.get"></a>

```typescript
public get(index: number): AiDocumentModelMetricsDatasetSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AiDocumentModelMetricsDatasetSummaryOutputReference <a name="AiDocumentModelMetricsDatasetSummaryOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.testSampleCount">testSampleCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.trainingSampleCount">trainingSampleCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.validationSampleCount">validationSampleCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummary">AiDocumentModelMetricsDatasetSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `testSampleCount`<sup>Required</sup> <a name="testSampleCount" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.testSampleCount"></a>

```typescript
public readonly testSampleCount: number;
```

- *Type:* number

---

##### `trainingSampleCount`<sup>Required</sup> <a name="trainingSampleCount" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.trainingSampleCount"></a>

```typescript
public readonly trainingSampleCount: number;
```

- *Type:* number

---

##### `validationSampleCount`<sup>Required</sup> <a name="validationSampleCount" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.validationSampleCount"></a>

```typescript
public readonly validationSampleCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiDocumentModelMetricsDatasetSummary;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummary">AiDocumentModelMetricsDatasetSummary</a>

---


### AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList <a name="AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.get"></a>

```typescript
public get(index: number): AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference <a name="AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.accuracy">accuracy</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.f1Score">f1Score</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.precision">precision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.recall">recall</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntries">AiDocumentModelMetricsLabelMetricsReportConfidenceEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accuracy`<sup>Required</sup> <a name="accuracy" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.accuracy"></a>

```typescript
public readonly accuracy: number;
```

- *Type:* number

---

##### `f1Score`<sup>Required</sup> <a name="f1Score" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.f1Score"></a>

```typescript
public readonly f1Score: number;
```

- *Type:* number

---

##### `precision`<sup>Required</sup> <a name="precision" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.precision"></a>

```typescript
public readonly precision: number;
```

- *Type:* number

---

##### `recall`<sup>Required</sup> <a name="recall" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.recall"></a>

```typescript
public readonly recall: number;
```

- *Type:* number

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiDocumentModelMetricsLabelMetricsReportConfidenceEntries;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntries">AiDocumentModelMetricsLabelMetricsReportConfidenceEntries</a>

---


### AiDocumentModelMetricsLabelMetricsReportList <a name="AiDocumentModelMetricsLabelMetricsReportList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.get"></a>

```typescript
public get(index: number): AiDocumentModelMetricsLabelMetricsReportOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AiDocumentModelMetricsLabelMetricsReportOutputReference <a name="AiDocumentModelMetricsLabelMetricsReportOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.confidenceEntries">confidenceEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList">AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.documentCount">documentCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.meanAveragePrecision">meanAveragePrecision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReport">AiDocumentModelMetricsLabelMetricsReport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `confidenceEntries`<sup>Required</sup> <a name="confidenceEntries" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.confidenceEntries"></a>

```typescript
public readonly confidenceEntries: AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList">AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList</a>

---

##### `documentCount`<sup>Required</sup> <a name="documentCount" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.documentCount"></a>

```typescript
public readonly documentCount: number;
```

- *Type:* number

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `meanAveragePrecision`<sup>Required</sup> <a name="meanAveragePrecision" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.meanAveragePrecision"></a>

```typescript
public readonly meanAveragePrecision: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiDocumentModelMetricsLabelMetricsReport;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReport">AiDocumentModelMetricsLabelMetricsReport</a>

---


### AiDocumentModelMetricsList <a name="AiDocumentModelMetricsList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModelMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.get"></a>

```typescript
public get(index: number): AiDocumentModelMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AiDocumentModelMetricsOutputReference <a name="AiDocumentModelMetricsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModelMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.datasetSummary">datasetSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList">AiDocumentModelMetricsDatasetSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.labelMetricsReport">labelMetricsReport</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList">AiDocumentModelMetricsLabelMetricsReportList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.modelType">modelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.overallMetricsReport">overallMetricsReport</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList">AiDocumentModelMetricsOverallMetricsReportList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetrics">AiDocumentModelMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetSummary`<sup>Required</sup> <a name="datasetSummary" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.datasetSummary"></a>

```typescript
public readonly datasetSummary: AiDocumentModelMetricsDatasetSummaryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList">AiDocumentModelMetricsDatasetSummaryList</a>

---

##### `labelMetricsReport`<sup>Required</sup> <a name="labelMetricsReport" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.labelMetricsReport"></a>

```typescript
public readonly labelMetricsReport: AiDocumentModelMetricsLabelMetricsReportList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList">AiDocumentModelMetricsLabelMetricsReportList</a>

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.modelType"></a>

```typescript
public readonly modelType: string;
```

- *Type:* string

---

##### `overallMetricsReport`<sup>Required</sup> <a name="overallMetricsReport" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.overallMetricsReport"></a>

```typescript
public readonly overallMetricsReport: AiDocumentModelMetricsOverallMetricsReportList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList">AiDocumentModelMetricsOverallMetricsReportList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiDocumentModelMetrics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetrics">AiDocumentModelMetrics</a>

---


### AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList <a name="AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.get"></a>

```typescript
public get(index: number): AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference <a name="AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.accuracy">accuracy</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.f1Score">f1Score</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.precision">precision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.recall">recall</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntries">AiDocumentModelMetricsOverallMetricsReportConfidenceEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accuracy`<sup>Required</sup> <a name="accuracy" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.accuracy"></a>

```typescript
public readonly accuracy: number;
```

- *Type:* number

---

##### `f1Score`<sup>Required</sup> <a name="f1Score" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.f1Score"></a>

```typescript
public readonly f1Score: number;
```

- *Type:* number

---

##### `precision`<sup>Required</sup> <a name="precision" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.precision"></a>

```typescript
public readonly precision: number;
```

- *Type:* number

---

##### `recall`<sup>Required</sup> <a name="recall" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.recall"></a>

```typescript
public readonly recall: number;
```

- *Type:* number

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiDocumentModelMetricsOverallMetricsReportConfidenceEntries;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntries">AiDocumentModelMetricsOverallMetricsReportConfidenceEntries</a>

---


### AiDocumentModelMetricsOverallMetricsReportList <a name="AiDocumentModelMetricsOverallMetricsReportList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.get"></a>

```typescript
public get(index: number): AiDocumentModelMetricsOverallMetricsReportOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AiDocumentModelMetricsOverallMetricsReportOutputReference <a name="AiDocumentModelMetricsOverallMetricsReportOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.confidenceEntries">confidenceEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList">AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.documentCount">documentCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.meanAveragePrecision">meanAveragePrecision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReport">AiDocumentModelMetricsOverallMetricsReport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `confidenceEntries`<sup>Required</sup> <a name="confidenceEntries" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.confidenceEntries"></a>

```typescript
public readonly confidenceEntries: AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList">AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList</a>

---

##### `documentCount`<sup>Required</sup> <a name="documentCount" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.documentCount"></a>

```typescript
public readonly documentCount: number;
```

- *Type:* number

---

##### `meanAveragePrecision`<sup>Required</sup> <a name="meanAveragePrecision" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.meanAveragePrecision"></a>

```typescript
public readonly meanAveragePrecision: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiDocumentModelMetricsOverallMetricsReport;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReport">AiDocumentModelMetricsOverallMetricsReport</a>

---


### AiDocumentModelTestingDatasetOutputReference <a name="AiDocumentModelTestingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModelTestingDatasetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetObject">resetObject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetDatasetId` <a name="resetDatasetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetDatasetId"></a>

```typescript
public resetDatasetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetObject"></a>

```typescript
public resetObject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetTypeInput">datasetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetType">datasetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `datasetTypeInput`<sup>Optional</sup> <a name="datasetTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetTypeInput"></a>

```typescript
public readonly datasetTypeInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetType"></a>

```typescript
public readonly datasetType: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiDocumentModelTestingDataset;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a>

---


### AiDocumentModelTimeoutsOutputReference <a name="AiDocumentModelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModelTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiDocumentModelTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a>

---


### AiDocumentModelTrainingDatasetOutputReference <a name="AiDocumentModelTrainingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetObject">resetObject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetDatasetId` <a name="resetDatasetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetDatasetId"></a>

```typescript
public resetDatasetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetObject"></a>

```typescript
public resetObject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetTypeInput">datasetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetType">datasetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `datasetTypeInput`<sup>Optional</sup> <a name="datasetTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetTypeInput"></a>

```typescript
public readonly datasetTypeInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetType"></a>

```typescript
public readonly datasetType: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiDocumentModelTrainingDataset;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a>

---


### AiDocumentModelValidationDatasetOutputReference <a name="AiDocumentModelValidationDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.Initializer"></a>

```typescript
import { aiDocumentModel } from 'rhizo-co-terraform-provider-oci'

new aiDocumentModel.AiDocumentModelValidationDatasetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetObject">resetObject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetDatasetId` <a name="resetDatasetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetDatasetId"></a>

```typescript
public resetDatasetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetObject"></a>

```typescript
public resetObject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetTypeInput">datasetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetType">datasetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `datasetTypeInput`<sup>Optional</sup> <a name="datasetTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetTypeInput"></a>

```typescript
public readonly datasetTypeInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetType"></a>

```typescript
public readonly datasetType: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiDocumentModelValidationDataset;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a>

---



