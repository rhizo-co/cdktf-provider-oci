# `datasciencePipeline` Submodule <a name="`datasciencePipeline` Submodule" id="rhizo-co-terraform-provider-oci.datasciencePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasciencePipeline <a name="DatasciencePipeline" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline oci_datascience_pipeline}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

new datasciencePipeline.DatasciencePipeline(scope: Construct, id: string, config: DatasciencePipelineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig">DatasciencePipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig">DatasciencePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putConfigurationDetails">putConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putInfrastructureConfigurationDetails">putInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putLogConfigurationDetails">putLogConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putStepArtifact">putStepArtifact</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putStepDetails">putStepDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetConfigurationDetails">resetConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDeleteRelatedPipelineRuns">resetDeleteRelatedPipelineRuns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetInfrastructureConfigurationDetails">resetInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetLogConfigurationDetails">resetLogConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetStepArtifact">resetStepArtifact</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfigurationDetails` <a name="putConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putConfigurationDetails"></a>

```typescript
public putConfigurationDetails(value: DatasciencePipelineConfigurationDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a>

---

##### `putInfrastructureConfigurationDetails` <a name="putInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putInfrastructureConfigurationDetails"></a>

```typescript
public putInfrastructureConfigurationDetails(value: DatasciencePipelineInfrastructureConfigurationDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putInfrastructureConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a>

---

##### `putLogConfigurationDetails` <a name="putLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putLogConfigurationDetails"></a>

```typescript
public putLogConfigurationDetails(value: DatasciencePipelineLogConfigurationDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putLogConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a>

---

##### `putStepArtifact` <a name="putStepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putStepArtifact"></a>

```typescript
public putStepArtifact(value: IResolvable | DatasciencePipelineStepArtifact[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putStepArtifact.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a>[]

---

##### `putStepDetails` <a name="putStepDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putStepDetails"></a>

```typescript
public putStepDetails(value: IResolvable | DatasciencePipelineStepDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putStepDetails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putTimeouts"></a>

```typescript
public putTimeouts(value: DatasciencePipelineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a>

---

##### `resetConfigurationDetails` <a name="resetConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetConfigurationDetails"></a>

```typescript
public resetConfigurationDetails(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDeleteRelatedPipelineRuns` <a name="resetDeleteRelatedPipelineRuns" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDeleteRelatedPipelineRuns"></a>

```typescript
public resetDeleteRelatedPipelineRuns(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInfrastructureConfigurationDetails` <a name="resetInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetInfrastructureConfigurationDetails"></a>

```typescript
public resetInfrastructureConfigurationDetails(): void
```

##### `resetLogConfigurationDetails` <a name="resetLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetLogConfigurationDetails"></a>

```typescript
public resetLogConfigurationDetails(): void
```

##### `resetStepArtifact` <a name="resetStepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetStepArtifact"></a>

```typescript
public resetStepArtifact(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatasciencePipeline resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isConstruct"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

datasciencePipeline.DatasciencePipeline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isTerraformElement"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

datasciencePipeline.DatasciencePipeline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isTerraformResource"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

datasciencePipeline.DatasciencePipeline.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.generateConfigForImport"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

datasciencePipeline.DatasciencePipeline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatasciencePipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasciencePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasciencePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatasciencePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.configurationDetails">configurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference">DatasciencePipelineConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.infrastructureConfigurationDetails">infrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference">DatasciencePipelineInfrastructureConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.logConfigurationDetails">logConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference">DatasciencePipelineLogConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepArtifact">stepArtifact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList">DatasciencePipelineStepArtifactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepDetails">stepDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList">DatasciencePipelineStepDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference">DatasciencePipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.configurationDetailsInput">configurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.deleteRelatedPipelineRunsInput">deleteRelatedPipelineRunsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.infrastructureConfigurationDetailsInput">infrastructureConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.logConfigurationDetailsInput">logConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepArtifactInput">stepArtifactInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepDetailsInput">stepDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.deleteRelatedPipelineRuns">deleteRelatedPipelineRuns</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configurationDetails`<sup>Required</sup> <a name="configurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.configurationDetails"></a>

```typescript
public readonly configurationDetails: DatasciencePipelineConfigurationDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference">DatasciencePipelineConfigurationDetailsOutputReference</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `infrastructureConfigurationDetails`<sup>Required</sup> <a name="infrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.infrastructureConfigurationDetails"></a>

```typescript
public readonly infrastructureConfigurationDetails: DatasciencePipelineInfrastructureConfigurationDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference">DatasciencePipelineInfrastructureConfigurationDetailsOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `logConfigurationDetails`<sup>Required</sup> <a name="logConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.logConfigurationDetails"></a>

```typescript
public readonly logConfigurationDetails: DatasciencePipelineLogConfigurationDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference">DatasciencePipelineLogConfigurationDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stepArtifact`<sup>Required</sup> <a name="stepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepArtifact"></a>

```typescript
public readonly stepArtifact: DatasciencePipelineStepArtifactList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList">DatasciencePipelineStepArtifactList</a>

---

##### `stepDetails`<sup>Required</sup> <a name="stepDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepDetails"></a>

```typescript
public readonly stepDetails: DatasciencePipelineStepDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList">DatasciencePipelineStepDetailsList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeouts"></a>

```typescript
public readonly timeouts: DatasciencePipelineTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference">DatasciencePipelineTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `configurationDetailsInput`<sup>Optional</sup> <a name="configurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.configurationDetailsInput"></a>

```typescript
public readonly configurationDetailsInput: DatasciencePipelineConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deleteRelatedPipelineRunsInput`<sup>Optional</sup> <a name="deleteRelatedPipelineRunsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.deleteRelatedPipelineRunsInput"></a>

```typescript
public readonly deleteRelatedPipelineRunsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `infrastructureConfigurationDetailsInput`<sup>Optional</sup> <a name="infrastructureConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.infrastructureConfigurationDetailsInput"></a>

```typescript
public readonly infrastructureConfigurationDetailsInput: DatasciencePipelineInfrastructureConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a>

---

##### `logConfigurationDetailsInput`<sup>Optional</sup> <a name="logConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.logConfigurationDetailsInput"></a>

```typescript
public readonly logConfigurationDetailsInput: DatasciencePipelineLogConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `stepArtifactInput`<sup>Optional</sup> <a name="stepArtifactInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepArtifactInput"></a>

```typescript
public readonly stepArtifactInput: IResolvable | DatasciencePipelineStepArtifact[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a>[]

---

##### `stepDetailsInput`<sup>Optional</sup> <a name="stepDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepDetailsInput"></a>

```typescript
public readonly stepDetailsInput: IResolvable | DatasciencePipelineStepDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatasciencePipelineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deleteRelatedPipelineRuns`<sup>Required</sup> <a name="deleteRelatedPipelineRuns" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.deleteRelatedPipelineRuns"></a>

```typescript
public readonly deleteRelatedPipelineRuns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasciencePipelineConfig <a name="DatasciencePipelineConfig" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineConfig: datasciencePipeline.DatasciencePipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#compartment_id DatasciencePipeline#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#project_id DatasciencePipeline#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.stepDetails">stepDetails</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a>[]</code> | step_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.configurationDetails">configurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a></code> | configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#defined_tags DatasciencePipeline#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.deleteRelatedPipelineRuns">deleteRelatedPipelineRuns</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#delete_related_pipeline_runs DatasciencePipeline#delete_related_pipeline_runs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#description DatasciencePipeline#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#display_name DatasciencePipeline#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#freeform_tags DatasciencePipeline#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#id DatasciencePipeline#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.infrastructureConfigurationDetails">infrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a></code> | infrastructure_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.logConfigurationDetails">logConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a></code> | log_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.stepArtifact">stepArtifact</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a>[]</code> | step_artifact block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#compartment_id DatasciencePipeline#compartment_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#project_id DatasciencePipeline#project_id}.

---

##### `stepDetails`<sup>Required</sup> <a name="stepDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.stepDetails"></a>

```typescript
public readonly stepDetails: IResolvable | DatasciencePipelineStepDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a>[]

step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_details DatasciencePipeline#step_details}

---

##### `configurationDetails`<sup>Optional</sup> <a name="configurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.configurationDetails"></a>

```typescript
public readonly configurationDetails: DatasciencePipelineConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a>

configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#configuration_details DatasciencePipeline#configuration_details}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#defined_tags DatasciencePipeline#defined_tags}.

---

##### `deleteRelatedPipelineRuns`<sup>Optional</sup> <a name="deleteRelatedPipelineRuns" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.deleteRelatedPipelineRuns"></a>

```typescript
public readonly deleteRelatedPipelineRuns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#delete_related_pipeline_runs DatasciencePipeline#delete_related_pipeline_runs}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#description DatasciencePipeline#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#display_name DatasciencePipeline#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#freeform_tags DatasciencePipeline#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#id DatasciencePipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructureConfigurationDetails`<sup>Optional</sup> <a name="infrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.infrastructureConfigurationDetails"></a>

```typescript
public readonly infrastructureConfigurationDetails: DatasciencePipelineInfrastructureConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a>

infrastructure_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#infrastructure_configuration_details DatasciencePipeline#infrastructure_configuration_details}

---

##### `logConfigurationDetails`<sup>Optional</sup> <a name="logConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.logConfigurationDetails"></a>

```typescript
public readonly logConfigurationDetails: DatasciencePipelineLogConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a>

log_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_configuration_details DatasciencePipeline#log_configuration_details}

---

##### `stepArtifact`<sup>Optional</sup> <a name="stepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.stepArtifact"></a>

```typescript
public readonly stepArtifact: IResolvable | DatasciencePipelineStepArtifact[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a>[]

step_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_artifact DatasciencePipeline#step_artifact}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatasciencePipelineTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#timeouts DatasciencePipeline#timeouts}

---

### DatasciencePipelineConfigurationDetails <a name="DatasciencePipelineConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineConfigurationDetails: datasciencePipeline.DatasciencePipelineConfigurationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#type DatasciencePipeline#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.commandLineArguments">commandLineArguments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#command_line_arguments DatasciencePipeline#command_line_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#environment_variables DatasciencePipeline#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#maximum_runtime_in_minutes DatasciencePipeline#maximum_runtime_in_minutes}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#type DatasciencePipeline#type}.

---

##### `commandLineArguments`<sup>Optional</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#command_line_arguments DatasciencePipeline#command_line_arguments}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#environment_variables DatasciencePipeline#environment_variables}.

---

##### `maximumRuntimeInMinutes`<sup>Optional</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.maximumRuntimeInMinutes"></a>

```typescript
public readonly maximumRuntimeInMinutes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#maximum_runtime_in_minutes DatasciencePipeline#maximum_runtime_in_minutes}.

---

### DatasciencePipelineInfrastructureConfigurationDetails <a name="DatasciencePipelineInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineInfrastructureConfigurationDetails: datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.blockStorageSizeInGbs">blockStorageSizeInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#block_storage_size_in_gbs DatasciencePipeline#block_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.shapeName">shapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_name DatasciencePipeline#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.shapeConfigDetails">shapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a></code> | shape_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#subnet_id DatasciencePipeline#subnet_id}. |

---

##### `blockStorageSizeInGbs`<sup>Required</sup> <a name="blockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.blockStorageSizeInGbs"></a>

```typescript
public readonly blockStorageSizeInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#block_storage_size_in_gbs DatasciencePipeline#block_storage_size_in_gbs}.

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_name DatasciencePipeline#shape_name}.

---

##### `shapeConfigDetails`<sup>Optional</sup> <a name="shapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.shapeConfigDetails"></a>

```typescript
public readonly shapeConfigDetails: DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a>

shape_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_config_details DatasciencePipeline#shape_config_details}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#subnet_id DatasciencePipeline#subnet_id}.

---

### DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails <a name="DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails: datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#memory_in_gbs DatasciencePipeline#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails.property.ocpus">ocpus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#ocpus DatasciencePipeline#ocpus}. |

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#memory_in_gbs DatasciencePipeline#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#ocpus DatasciencePipeline#ocpus}.

---

### DatasciencePipelineLogConfigurationDetails <a name="DatasciencePipelineLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineLogConfigurationDetails: datasciencePipeline.DatasciencePipelineLogConfigurationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.enableAutoLogCreation">enableAutoLogCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#enable_auto_log_creation DatasciencePipeline#enable_auto_log_creation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#enable_logging DatasciencePipeline#enable_logging}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.logGroupId">logGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_group_id DatasciencePipeline#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.logId">logId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_id DatasciencePipeline#log_id}. |

---

##### `enableAutoLogCreation`<sup>Optional</sup> <a name="enableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.enableAutoLogCreation"></a>

```typescript
public readonly enableAutoLogCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#enable_auto_log_creation DatasciencePipeline#enable_auto_log_creation}.

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#enable_logging DatasciencePipeline#enable_logging}.

---

##### `logGroupId`<sup>Optional</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_group_id DatasciencePipeline#log_group_id}.

---

##### `logId`<sup>Optional</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_id DatasciencePipeline#log_id}.

---

### DatasciencePipelineStepArtifact <a name="DatasciencePipelineStepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineStepArtifact: datasciencePipeline.DatasciencePipelineStepArtifact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.artifactContentLength">artifactContentLength</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#artifact_content_length DatasciencePipeline#artifact_content_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.pipelineStepArtifact">pipelineStepArtifact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#pipeline_step_artifact DatasciencePipeline#pipeline_step_artifact}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.stepName">stepName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_name DatasciencePipeline#step_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.artifactContentDisposition">artifactContentDisposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#artifact_content_disposition DatasciencePipeline#artifact_content_disposition}. |

---

##### `artifactContentLength`<sup>Required</sup> <a name="artifactContentLength" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.artifactContentLength"></a>

```typescript
public readonly artifactContentLength: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#artifact_content_length DatasciencePipeline#artifact_content_length}.

---

##### `pipelineStepArtifact`<sup>Required</sup> <a name="pipelineStepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.pipelineStepArtifact"></a>

```typescript
public readonly pipelineStepArtifact: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#pipeline_step_artifact DatasciencePipeline#pipeline_step_artifact}.

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_name DatasciencePipeline#step_name}.

---

##### `artifactContentDisposition`<sup>Optional</sup> <a name="artifactContentDisposition" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.artifactContentDisposition"></a>

```typescript
public readonly artifactContentDisposition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#artifact_content_disposition DatasciencePipeline#artifact_content_disposition}.

---

### DatasciencePipelineStepDetails <a name="DatasciencePipelineStepDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineStepDetails: datasciencePipeline.DatasciencePipelineStepDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepName">stepName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_name DatasciencePipeline#step_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepType">stepType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_type DatasciencePipeline#step_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#depends_on DatasciencePipeline#depends_on}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#description DatasciencePipeline#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.isArtifactUploaded">isArtifactUploaded</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#is_artifact_uploaded DatasciencePipeline#is_artifact_uploaded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.jobId">jobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#job_id DatasciencePipeline#job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepConfigurationDetails">stepConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a></code> | step_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepContainerConfigurationDetails">stepContainerConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a></code> | step_container_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepInfrastructureConfigurationDetails">stepInfrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a></code> | step_infrastructure_configuration_details block. |

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_name DatasciencePipeline#step_name}.

---

##### `stepType`<sup>Required</sup> <a name="stepType" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepType"></a>

```typescript
public readonly stepType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_type DatasciencePipeline#step_type}.

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#depends_on DatasciencePipeline#depends_on}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#description DatasciencePipeline#description}.

---

##### `isArtifactUploaded`<sup>Optional</sup> <a name="isArtifactUploaded" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.isArtifactUploaded"></a>

```typescript
public readonly isArtifactUploaded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#is_artifact_uploaded DatasciencePipeline#is_artifact_uploaded}.

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#job_id DatasciencePipeline#job_id}.

---

##### `stepConfigurationDetails`<sup>Optional</sup> <a name="stepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepConfigurationDetails"></a>

```typescript
public readonly stepConfigurationDetails: DatasciencePipelineStepDetailsStepConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a>

step_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_configuration_details DatasciencePipeline#step_configuration_details}

---

##### `stepContainerConfigurationDetails`<sup>Optional</sup> <a name="stepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepContainerConfigurationDetails"></a>

```typescript
public readonly stepContainerConfigurationDetails: DatasciencePipelineStepDetailsStepContainerConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a>

step_container_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_container_configuration_details DatasciencePipeline#step_container_configuration_details}

---

##### `stepInfrastructureConfigurationDetails`<sup>Optional</sup> <a name="stepInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepInfrastructureConfigurationDetails"></a>

```typescript
public readonly stepInfrastructureConfigurationDetails: DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a>

step_infrastructure_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_infrastructure_configuration_details DatasciencePipeline#step_infrastructure_configuration_details}

---

### DatasciencePipelineStepDetailsStepConfigurationDetails <a name="DatasciencePipelineStepDetailsStepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineStepDetailsStepConfigurationDetails: datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.property.commandLineArguments">commandLineArguments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#command_line_arguments DatasciencePipeline#command_line_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#environment_variables DatasciencePipeline#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#maximum_runtime_in_minutes DatasciencePipeline#maximum_runtime_in_minutes}. |

---

##### `commandLineArguments`<sup>Optional</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#command_line_arguments DatasciencePipeline#command_line_arguments}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#environment_variables DatasciencePipeline#environment_variables}.

---

##### `maximumRuntimeInMinutes`<sup>Optional</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.property.maximumRuntimeInMinutes"></a>

```typescript
public readonly maximumRuntimeInMinutes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#maximum_runtime_in_minutes DatasciencePipeline#maximum_runtime_in_minutes}.

---

### DatasciencePipelineStepDetailsStepContainerConfigurationDetails <a name="DatasciencePipelineStepDetailsStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineStepDetailsStepContainerConfigurationDetails: datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.containerType">containerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#container_type DatasciencePipeline#container_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image DatasciencePipeline#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.cmd">cmd</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#cmd DatasciencePipeline#cmd}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.entrypoint">entrypoint</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#entrypoint DatasciencePipeline#entrypoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.imageDigest">imageDigest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image_digest DatasciencePipeline#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.imageSignatureId">imageSignatureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image_signature_id DatasciencePipeline#image_signature_id}. |

---

##### `containerType`<sup>Required</sup> <a name="containerType" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.containerType"></a>

```typescript
public readonly containerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#container_type DatasciencePipeline#container_type}.

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image DatasciencePipeline#image}.

---

##### `cmd`<sup>Optional</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.cmd"></a>

```typescript
public readonly cmd: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#cmd DatasciencePipeline#cmd}.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.entrypoint"></a>

```typescript
public readonly entrypoint: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#entrypoint DatasciencePipeline#entrypoint}.

---

##### `imageDigest`<sup>Optional</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image_digest DatasciencePipeline#image_digest}.

---

##### `imageSignatureId`<sup>Optional</sup> <a name="imageSignatureId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.imageSignatureId"></a>

```typescript
public readonly imageSignatureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image_signature_id DatasciencePipeline#image_signature_id}.

---

### DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails <a name="DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineStepDetailsStepInfrastructureConfigurationDetails: datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.blockStorageSizeInGbs">blockStorageSizeInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#block_storage_size_in_gbs DatasciencePipeline#block_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.shapeName">shapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_name DatasciencePipeline#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.shapeConfigDetails">shapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a></code> | shape_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#subnet_id DatasciencePipeline#subnet_id}. |

---

##### `blockStorageSizeInGbs`<sup>Required</sup> <a name="blockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.blockStorageSizeInGbs"></a>

```typescript
public readonly blockStorageSizeInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#block_storage_size_in_gbs DatasciencePipeline#block_storage_size_in_gbs}.

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_name DatasciencePipeline#shape_name}.

---

##### `shapeConfigDetails`<sup>Optional</sup> <a name="shapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.shapeConfigDetails"></a>

```typescript
public readonly shapeConfigDetails: DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a>

shape_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_config_details DatasciencePipeline#shape_config_details}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#subnet_id DatasciencePipeline#subnet_id}.

---

### DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails <a name="DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails: datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#memory_in_gbs DatasciencePipeline#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails.property.ocpus">ocpus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#ocpus DatasciencePipeline#ocpus}. |

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#memory_in_gbs DatasciencePipeline#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#ocpus DatasciencePipeline#ocpus}.

---

### DatasciencePipelineTimeouts <a name="DatasciencePipelineTimeouts" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineTimeouts: datasciencePipeline.DatasciencePipelineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#create DatasciencePipeline#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#delete DatasciencePipeline#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#update DatasciencePipeline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#create DatasciencePipeline#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#delete DatasciencePipeline#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#update DatasciencePipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasciencePipelineConfigurationDetailsOutputReference <a name="DatasciencePipelineConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

new datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resetCommandLineArguments">resetCommandLineArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes">resetMaximumRuntimeInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommandLineArguments` <a name="resetCommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resetCommandLineArguments"></a>

```typescript
public resetCommandLineArguments(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetMaximumRuntimeInMinutes` <a name="resetMaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes"></a>

```typescript
public resetMaximumRuntimeInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.commandLineArgumentsInput">commandLineArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput">maximumRuntimeInMinutesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.commandLineArguments">commandLineArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commandLineArgumentsInput`<sup>Optional</sup> <a name="commandLineArgumentsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.commandLineArgumentsInput"></a>

```typescript
public readonly commandLineArgumentsInput: string;
```

- *Type:* string

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maximumRuntimeInMinutesInput`<sup>Optional</sup> <a name="maximumRuntimeInMinutesInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput"></a>

```typescript
public readonly maximumRuntimeInMinutesInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maximumRuntimeInMinutes`<sup>Required</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```typescript
public readonly maximumRuntimeInMinutes: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasciencePipelineConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a>

---


### DatasciencePipelineInfrastructureConfigurationDetailsOutputReference <a name="DatasciencePipelineInfrastructureConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

new datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.putShapeConfigDetails">putShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resetShapeConfigDetails">resetShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putShapeConfigDetails` <a name="putShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.putShapeConfigDetails"></a>

```typescript
public putShapeConfigDetails(value: DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.putShapeConfigDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a>

---

##### `resetShapeConfigDetails` <a name="resetShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resetShapeConfigDetails"></a>

```typescript
public resetShapeConfigDetails(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetails">shapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput">blockStorageSizeInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetailsInput">shapeConfigDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeNameInput">shapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">blockStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shapeConfigDetails`<sup>Required</sup> <a name="shapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetails"></a>

```typescript
public readonly shapeConfigDetails: DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference</a>

---

##### `blockStorageSizeInGbsInput`<sup>Optional</sup> <a name="blockStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput"></a>

```typescript
public readonly blockStorageSizeInGbsInput: number;
```

- *Type:* number

---

##### `shapeConfigDetailsInput`<sup>Optional</sup> <a name="shapeConfigDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetailsInput"></a>

```typescript
public readonly shapeConfigDetailsInput: DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a>

---

##### `shapeNameInput`<sup>Optional</sup> <a name="shapeNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeNameInput"></a>

```typescript
public readonly shapeNameInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `blockStorageSizeInGbs`<sup>Required</sup> <a name="blockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```typescript
public readonly blockStorageSizeInGbs: number;
```

- *Type:* number

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasciencePipelineInfrastructureConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a>

---


### DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference <a name="DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

new datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetOcpus">resetOcpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetMemoryInGbs"></a>

```typescript
public resetMemoryInGbs(): void
```

##### `resetOcpus` <a name="resetOcpus" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetOcpus"></a>

```typescript
public resetOcpus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbsInput"></a>

```typescript
public readonly memoryInGbsInput: number;
```

- *Type:* number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpusInput"></a>

```typescript
public readonly ocpusInput: number;
```

- *Type:* number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a>

---


### DatasciencePipelineLogConfigurationDetailsOutputReference <a name="DatasciencePipelineLogConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

new datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetEnableAutoLogCreation">resetEnableAutoLogCreation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetLogGroupId">resetLogGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetLogId">resetLogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableAutoLogCreation` <a name="resetEnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetEnableAutoLogCreation"></a>

```typescript
public resetEnableAutoLogCreation(): void
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetEnableLogging"></a>

```typescript
public resetEnableLogging(): void
```

##### `resetLogGroupId` <a name="resetLogGroupId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetLogGroupId"></a>

```typescript
public resetLogGroupId(): void
```

##### `resetLogId` <a name="resetLogId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetLogId"></a>

```typescript
public resetLogId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableAutoLogCreationInput">enableAutoLogCreationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableLoggingInput">enableLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logGroupIdInput">logGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logIdInput">logIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableAutoLogCreation">enableAutoLogCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logId">logId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableAutoLogCreationInput`<sup>Optional</sup> <a name="enableAutoLogCreationInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableAutoLogCreationInput"></a>

```typescript
public readonly enableAutoLogCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableLoggingInput"></a>

```typescript
public readonly enableLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logGroupIdInput"></a>

```typescript
public readonly logGroupIdInput: string;
```

- *Type:* string

---

##### `logIdInput`<sup>Optional</sup> <a name="logIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logIdInput"></a>

```typescript
public readonly logIdInput: string;
```

- *Type:* string

---

##### `enableAutoLogCreation`<sup>Required</sup> <a name="enableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableAutoLogCreation"></a>

```typescript
public readonly enableAutoLogCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasciencePipelineLogConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a>

---


### DatasciencePipelineStepArtifactList <a name="DatasciencePipelineStepArtifactList" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

new datasciencePipeline.DatasciencePipelineStepArtifactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.get"></a>

```typescript
public get(index: number): DatasciencePipelineStepArtifactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasciencePipelineStepArtifact[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a>[]

---


### DatasciencePipelineStepArtifactOutputReference <a name="DatasciencePipelineStepArtifactOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

new datasciencePipeline.DatasciencePipelineStepArtifactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.resetArtifactContentDisposition">resetArtifactContentDisposition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArtifactContentDisposition` <a name="resetArtifactContentDisposition" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.resetArtifactContentDisposition"></a>

```typescript
public resetArtifactContentDisposition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentMd5">artifactContentMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactLastModified">artifactLastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentDispositionInput">artifactContentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentLengthInput">artifactContentLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.pipelineStepArtifactInput">pipelineStepArtifactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.stepNameInput">stepNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentDisposition">artifactContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentLength">artifactContentLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.pipelineStepArtifact">pipelineStepArtifact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.stepName">stepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactContentMd5`<sup>Required</sup> <a name="artifactContentMd5" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentMd5"></a>

```typescript
public readonly artifactContentMd5: string;
```

- *Type:* string

---

##### `artifactLastModified`<sup>Required</sup> <a name="artifactLastModified" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactLastModified"></a>

```typescript
public readonly artifactLastModified: string;
```

- *Type:* string

---

##### `artifactContentDispositionInput`<sup>Optional</sup> <a name="artifactContentDispositionInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentDispositionInput"></a>

```typescript
public readonly artifactContentDispositionInput: string;
```

- *Type:* string

---

##### `artifactContentLengthInput`<sup>Optional</sup> <a name="artifactContentLengthInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentLengthInput"></a>

```typescript
public readonly artifactContentLengthInput: string;
```

- *Type:* string

---

##### `pipelineStepArtifactInput`<sup>Optional</sup> <a name="pipelineStepArtifactInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.pipelineStepArtifactInput"></a>

```typescript
public readonly pipelineStepArtifactInput: string;
```

- *Type:* string

---

##### `stepNameInput`<sup>Optional</sup> <a name="stepNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.stepNameInput"></a>

```typescript
public readonly stepNameInput: string;
```

- *Type:* string

---

##### `artifactContentDisposition`<sup>Required</sup> <a name="artifactContentDisposition" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentDisposition"></a>

```typescript
public readonly artifactContentDisposition: string;
```

- *Type:* string

---

##### `artifactContentLength`<sup>Required</sup> <a name="artifactContentLength" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentLength"></a>

```typescript
public readonly artifactContentLength: string;
```

- *Type:* string

---

##### `pipelineStepArtifact`<sup>Required</sup> <a name="pipelineStepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.pipelineStepArtifact"></a>

```typescript
public readonly pipelineStepArtifact: string;
```

- *Type:* string

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasciencePipelineStepArtifact;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a>

---


### DatasciencePipelineStepDetailsList <a name="DatasciencePipelineStepDetailsList" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

new datasciencePipeline.DatasciencePipelineStepDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.get"></a>

```typescript
public get(index: number): DatasciencePipelineStepDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasciencePipelineStepDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a>[]

---


### DatasciencePipelineStepDetailsOutputReference <a name="DatasciencePipelineStepDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

new datasciencePipeline.DatasciencePipelineStepDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepConfigurationDetails">putStepConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepContainerConfigurationDetails">putStepContainerConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepInfrastructureConfigurationDetails">putStepInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetDependsOn">resetDependsOn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetIsArtifactUploaded">resetIsArtifactUploaded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetJobId">resetJobId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetStepConfigurationDetails">resetStepConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetStepContainerConfigurationDetails">resetStepContainerConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetStepInfrastructureConfigurationDetails">resetStepInfrastructureConfigurationDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStepConfigurationDetails` <a name="putStepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepConfigurationDetails"></a>

```typescript
public putStepConfigurationDetails(value: DatasciencePipelineStepDetailsStepConfigurationDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a>

---

##### `putStepContainerConfigurationDetails` <a name="putStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepContainerConfigurationDetails"></a>

```typescript
public putStepContainerConfigurationDetails(value: DatasciencePipelineStepDetailsStepContainerConfigurationDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepContainerConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a>

---

##### `putStepInfrastructureConfigurationDetails` <a name="putStepInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepInfrastructureConfigurationDetails"></a>

```typescript
public putStepInfrastructureConfigurationDetails(value: DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepInfrastructureConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a>

---

##### `resetDependsOn` <a name="resetDependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetDependsOn"></a>

```typescript
public resetDependsOn(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIsArtifactUploaded` <a name="resetIsArtifactUploaded" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetIsArtifactUploaded"></a>

```typescript
public resetIsArtifactUploaded(): void
```

##### `resetJobId` <a name="resetJobId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetJobId"></a>

```typescript
public resetJobId(): void
```

##### `resetStepConfigurationDetails` <a name="resetStepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetStepConfigurationDetails"></a>

```typescript
public resetStepConfigurationDetails(): void
```

##### `resetStepContainerConfigurationDetails` <a name="resetStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetStepContainerConfigurationDetails"></a>

```typescript
public resetStepContainerConfigurationDetails(): void
```

##### `resetStepInfrastructureConfigurationDetails` <a name="resetStepInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetStepInfrastructureConfigurationDetails"></a>

```typescript
public resetStepInfrastructureConfigurationDetails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepConfigurationDetails">stepConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference">DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepContainerConfigurationDetails">stepContainerConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference">DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepInfrastructureConfigurationDetails">stepInfrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.dependsOnInput">dependsOnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.isArtifactUploadedInput">isArtifactUploadedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.jobIdInput">jobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepConfigurationDetailsInput">stepConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepContainerConfigurationDetailsInput">stepContainerConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepInfrastructureConfigurationDetailsInput">stepInfrastructureConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepNameInput">stepNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepTypeInput">stepTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.isArtifactUploaded">isArtifactUploaded</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepName">stepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepType">stepType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stepConfigurationDetails`<sup>Required</sup> <a name="stepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepConfigurationDetails"></a>

```typescript
public readonly stepConfigurationDetails: DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference">DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference</a>

---

##### `stepContainerConfigurationDetails`<sup>Required</sup> <a name="stepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepContainerConfigurationDetails"></a>

```typescript
public readonly stepContainerConfigurationDetails: DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference">DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference</a>

---

##### `stepInfrastructureConfigurationDetails`<sup>Required</sup> <a name="stepInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepInfrastructureConfigurationDetails"></a>

```typescript
public readonly stepInfrastructureConfigurationDetails: DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference</a>

---

##### `dependsOnInput`<sup>Optional</sup> <a name="dependsOnInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.dependsOnInput"></a>

```typescript
public readonly dependsOnInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `isArtifactUploadedInput`<sup>Optional</sup> <a name="isArtifactUploadedInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.isArtifactUploadedInput"></a>

```typescript
public readonly isArtifactUploadedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.jobIdInput"></a>

```typescript
public readonly jobIdInput: string;
```

- *Type:* string

---

##### `stepConfigurationDetailsInput`<sup>Optional</sup> <a name="stepConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepConfigurationDetailsInput"></a>

```typescript
public readonly stepConfigurationDetailsInput: DatasciencePipelineStepDetailsStepConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a>

---

##### `stepContainerConfigurationDetailsInput`<sup>Optional</sup> <a name="stepContainerConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepContainerConfigurationDetailsInput"></a>

```typescript
public readonly stepContainerConfigurationDetailsInput: DatasciencePipelineStepDetailsStepContainerConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a>

---

##### `stepInfrastructureConfigurationDetailsInput`<sup>Optional</sup> <a name="stepInfrastructureConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepInfrastructureConfigurationDetailsInput"></a>

```typescript
public readonly stepInfrastructureConfigurationDetailsInput: DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a>

---

##### `stepNameInput`<sup>Optional</sup> <a name="stepNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepNameInput"></a>

```typescript
public readonly stepNameInput: string;
```

- *Type:* string

---

##### `stepTypeInput`<sup>Optional</sup> <a name="stepTypeInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepTypeInput"></a>

```typescript
public readonly stepTypeInput: string;
```

- *Type:* string

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isArtifactUploaded`<sup>Required</sup> <a name="isArtifactUploaded" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.isArtifactUploaded"></a>

```typescript
public readonly isArtifactUploaded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string

---

##### `stepType`<sup>Required</sup> <a name="stepType" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepType"></a>

```typescript
public readonly stepType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasciencePipelineStepDetails;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a>

---


### DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference <a name="DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

new datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resetCommandLineArguments">resetCommandLineArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes">resetMaximumRuntimeInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommandLineArguments` <a name="resetCommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resetCommandLineArguments"></a>

```typescript
public resetCommandLineArguments(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetMaximumRuntimeInMinutes` <a name="resetMaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes"></a>

```typescript
public resetMaximumRuntimeInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.commandLineArgumentsInput">commandLineArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput">maximumRuntimeInMinutesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments">commandLineArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commandLineArgumentsInput`<sup>Optional</sup> <a name="commandLineArgumentsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.commandLineArgumentsInput"></a>

```typescript
public readonly commandLineArgumentsInput: string;
```

- *Type:* string

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maximumRuntimeInMinutesInput`<sup>Optional</sup> <a name="maximumRuntimeInMinutesInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput"></a>

```typescript
public readonly maximumRuntimeInMinutesInput: string;
```

- *Type:* string

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maximumRuntimeInMinutes`<sup>Required</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```typescript
public readonly maximumRuntimeInMinutes: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasciencePipelineStepDetailsStepConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a>

---


### DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference <a name="DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

new datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetCmd">resetCmd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetEntrypoint">resetEntrypoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetImageDigest">resetImageDigest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetImageSignatureId">resetImageSignatureId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCmd` <a name="resetCmd" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetCmd"></a>

```typescript
public resetCmd(): void
```

##### `resetEntrypoint` <a name="resetEntrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetEntrypoint"></a>

```typescript
public resetEntrypoint(): void
```

##### `resetImageDigest` <a name="resetImageDigest" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetImageDigest"></a>

```typescript
public resetImageDigest(): void
```

##### `resetImageSignatureId` <a name="resetImageSignatureId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetImageSignatureId"></a>

```typescript
public resetImageSignatureId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.cmdInput">cmdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.containerTypeInput">containerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.entrypointInput">entrypointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigestInput">imageDigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureIdInput">imageSignatureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.cmd">cmd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.containerType">containerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint">entrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest">imageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId">imageSignatureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cmdInput`<sup>Optional</sup> <a name="cmdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.cmdInput"></a>

```typescript
public readonly cmdInput: string[];
```

- *Type:* string[]

---

##### `containerTypeInput`<sup>Optional</sup> <a name="containerTypeInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.containerTypeInput"></a>

```typescript
public readonly containerTypeInput: string;
```

- *Type:* string

---

##### `entrypointInput`<sup>Optional</sup> <a name="entrypointInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.entrypointInput"></a>

```typescript
public readonly entrypointInput: string[];
```

- *Type:* string[]

---

##### `imageDigestInput`<sup>Optional</sup> <a name="imageDigestInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigestInput"></a>

```typescript
public readonly imageDigestInput: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `imageSignatureIdInput`<sup>Optional</sup> <a name="imageSignatureIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureIdInput"></a>

```typescript
public readonly imageSignatureIdInput: string;
```

- *Type:* string

---

##### `cmd`<sup>Required</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.cmd"></a>

```typescript
public readonly cmd: string[];
```

- *Type:* string[]

---

##### `containerType`<sup>Required</sup> <a name="containerType" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.containerType"></a>

```typescript
public readonly containerType: string;
```

- *Type:* string

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint"></a>

```typescript
public readonly entrypoint: string[];
```

- *Type:* string[]

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

---

##### `imageSignatureId`<sup>Required</sup> <a name="imageSignatureId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId"></a>

```typescript
public readonly imageSignatureId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasciencePipelineStepDetailsStepContainerConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a>

---


### DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference <a name="DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

new datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.putShapeConfigDetails">putShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resetShapeConfigDetails">resetShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putShapeConfigDetails` <a name="putShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.putShapeConfigDetails"></a>

```typescript
public putShapeConfigDetails(value: DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.putShapeConfigDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a>

---

##### `resetShapeConfigDetails` <a name="resetShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resetShapeConfigDetails"></a>

```typescript
public resetShapeConfigDetails(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetails">shapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput">blockStorageSizeInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetailsInput">shapeConfigDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeNameInput">shapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">blockStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shapeConfigDetails`<sup>Required</sup> <a name="shapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetails"></a>

```typescript
public readonly shapeConfigDetails: DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference</a>

---

##### `blockStorageSizeInGbsInput`<sup>Optional</sup> <a name="blockStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput"></a>

```typescript
public readonly blockStorageSizeInGbsInput: number;
```

- *Type:* number

---

##### `shapeConfigDetailsInput`<sup>Optional</sup> <a name="shapeConfigDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetailsInput"></a>

```typescript
public readonly shapeConfigDetailsInput: DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a>

---

##### `shapeNameInput`<sup>Optional</sup> <a name="shapeNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeNameInput"></a>

```typescript
public readonly shapeNameInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `blockStorageSizeInGbs`<sup>Required</sup> <a name="blockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```typescript
public readonly blockStorageSizeInGbs: number;
```

- *Type:* number

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a>

---


### DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference <a name="DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

new datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetOcpus">resetOcpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetMemoryInGbs"></a>

```typescript
public resetMemoryInGbs(): void
```

##### `resetOcpus` <a name="resetOcpus" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetOcpus"></a>

```typescript
public resetOcpus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbsInput"></a>

```typescript
public readonly memoryInGbsInput: number;
```

- *Type:* number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpusInput"></a>

```typescript
public readonly ocpusInput: number;
```

- *Type:* number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a>

---


### DatasciencePipelineTimeoutsOutputReference <a name="DatasciencePipelineTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.Initializer"></a>

```typescript
import { datasciencePipeline } from 'rhizo-co-terraform-provider-oci'

new datasciencePipeline.DatasciencePipelineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasciencePipelineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a>

---



