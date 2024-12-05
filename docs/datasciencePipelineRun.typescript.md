# `datasciencePipelineRun` Submodule <a name="`datasciencePipelineRun` Submodule" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasciencePipelineRun <a name="DatasciencePipelineRun" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run oci_datascience_pipeline_run}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

new datasciencePipelineRun.DatasciencePipelineRun(scope: Construct, id: string, config: DatasciencePipelineRunConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig">DatasciencePipelineRunConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig">DatasciencePipelineRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putConfigurationOverrideDetails">putConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putLogConfigurationOverrideDetails">putLogConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putStepOverrideDetails">putStepOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetConfigurationOverrideDetails">resetConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetDeleteRelatedJobRuns">resetDeleteRelatedJobRuns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetLogConfigurationOverrideDetails">resetLogConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetOpcParentRptUrl">resetOpcParentRptUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetStepOverrideDetails">resetStepOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetSystemTags">resetSystemTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfigurationOverrideDetails` <a name="putConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putConfigurationOverrideDetails"></a>

```typescript
public putConfigurationOverrideDetails(value: DatasciencePipelineRunConfigurationOverrideDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putConfigurationOverrideDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a>

---

##### `putLogConfigurationOverrideDetails` <a name="putLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putLogConfigurationOverrideDetails"></a>

```typescript
public putLogConfigurationOverrideDetails(value: DatasciencePipelineRunLogConfigurationOverrideDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putLogConfigurationOverrideDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a>

---

##### `putStepOverrideDetails` <a name="putStepOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putStepOverrideDetails"></a>

```typescript
public putStepOverrideDetails(value: IResolvable | DatasciencePipelineRunStepOverrideDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putStepOverrideDetails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putTimeouts"></a>

```typescript
public putTimeouts(value: DatasciencePipelineRunTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts">DatasciencePipelineRunTimeouts</a>

---

##### `resetConfigurationOverrideDetails` <a name="resetConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetConfigurationOverrideDetails"></a>

```typescript
public resetConfigurationOverrideDetails(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDeleteRelatedJobRuns` <a name="resetDeleteRelatedJobRuns" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetDeleteRelatedJobRuns"></a>

```typescript
public resetDeleteRelatedJobRuns(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogConfigurationOverrideDetails` <a name="resetLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetLogConfigurationOverrideDetails"></a>

```typescript
public resetLogConfigurationOverrideDetails(): void
```

##### `resetOpcParentRptUrl` <a name="resetOpcParentRptUrl" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetOpcParentRptUrl"></a>

```typescript
public resetOpcParentRptUrl(): void
```

##### `resetStepOverrideDetails` <a name="resetStepOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetStepOverrideDetails"></a>

```typescript
public resetStepOverrideDetails(): void
```

##### `resetSystemTags` <a name="resetSystemTags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetSystemTags"></a>

```typescript
public resetSystemTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatasciencePipelineRun resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isConstruct"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

datasciencePipelineRun.DatasciencePipelineRun.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isTerraformElement"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

datasciencePipelineRun.DatasciencePipelineRun.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isTerraformResource"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

datasciencePipelineRun.DatasciencePipelineRun.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatasciencePipelineRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasciencePipelineRun to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasciencePipelineRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatasciencePipelineRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.configurationDetails">configurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList">DatasciencePipelineRunConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.configurationOverrideDetails">configurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference">DatasciencePipelineRunConfigurationOverrideDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.logConfigurationOverrideDetails">logConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference">DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.logDetails">logDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList">DatasciencePipelineRunLogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.stepOverrideDetails">stepOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList">DatasciencePipelineRunStepOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.stepRuns">stepRuns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList">DatasciencePipelineRunStepRunsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeAccepted">timeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference">DatasciencePipelineRunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.configurationOverrideDetailsInput">configurationOverrideDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.deleteRelatedJobRunsInput">deleteRelatedJobRunsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.logConfigurationOverrideDetailsInput">logConfigurationOverrideDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.opcParentRptUrlInput">opcParentRptUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.pipelineIdInput">pipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.stepOverrideDetailsInput">stepOverrideDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.systemTagsInput">systemTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts">DatasciencePipelineRunTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.deleteRelatedJobRuns">deleteRelatedJobRuns</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.opcParentRptUrl">opcParentRptUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.systemTags">systemTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configurationDetails`<sup>Required</sup> <a name="configurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.configurationDetails"></a>

```typescript
public readonly configurationDetails: DatasciencePipelineRunConfigurationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList">DatasciencePipelineRunConfigurationDetailsList</a>

---

##### `configurationOverrideDetails`<sup>Required</sup> <a name="configurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.configurationOverrideDetails"></a>

```typescript
public readonly configurationOverrideDetails: DatasciencePipelineRunConfigurationOverrideDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference">DatasciencePipelineRunConfigurationOverrideDetailsOutputReference</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `logConfigurationOverrideDetails`<sup>Required</sup> <a name="logConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.logConfigurationOverrideDetails"></a>

```typescript
public readonly logConfigurationOverrideDetails: DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference">DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference</a>

---

##### `logDetails`<sup>Required</sup> <a name="logDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.logDetails"></a>

```typescript
public readonly logDetails: DatasciencePipelineRunLogDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList">DatasciencePipelineRunLogDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stepOverrideDetails`<sup>Required</sup> <a name="stepOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.stepOverrideDetails"></a>

```typescript
public readonly stepOverrideDetails: DatasciencePipelineRunStepOverrideDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList">DatasciencePipelineRunStepOverrideDetailsList</a>

---

##### `stepRuns`<sup>Required</sup> <a name="stepRuns" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.stepRuns"></a>

```typescript
public readonly stepRuns: DatasciencePipelineRunStepRunsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList">DatasciencePipelineRunStepRunsList</a>

---

##### `timeAccepted`<sup>Required</sup> <a name="timeAccepted" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeAccepted"></a>

```typescript
public readonly timeAccepted: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeouts"></a>

```typescript
public readonly timeouts: DatasciencePipelineRunTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference">DatasciencePipelineRunTimeoutsOutputReference</a>

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `configurationOverrideDetailsInput`<sup>Optional</sup> <a name="configurationOverrideDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.configurationOverrideDetailsInput"></a>

```typescript
public readonly configurationOverrideDetailsInput: DatasciencePipelineRunConfigurationOverrideDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deleteRelatedJobRunsInput`<sup>Optional</sup> <a name="deleteRelatedJobRunsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.deleteRelatedJobRunsInput"></a>

```typescript
public readonly deleteRelatedJobRunsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logConfigurationOverrideDetailsInput`<sup>Optional</sup> <a name="logConfigurationOverrideDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.logConfigurationOverrideDetailsInput"></a>

```typescript
public readonly logConfigurationOverrideDetailsInput: DatasciencePipelineRunLogConfigurationOverrideDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a>

---

##### `opcParentRptUrlInput`<sup>Optional</sup> <a name="opcParentRptUrlInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.opcParentRptUrlInput"></a>

```typescript
public readonly opcParentRptUrlInput: string;
```

- *Type:* string

---

##### `pipelineIdInput`<sup>Optional</sup> <a name="pipelineIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.pipelineIdInput"></a>

```typescript
public readonly pipelineIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `stepOverrideDetailsInput`<sup>Optional</sup> <a name="stepOverrideDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.stepOverrideDetailsInput"></a>

```typescript
public readonly stepOverrideDetailsInput: IResolvable | DatasciencePipelineRunStepOverrideDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>[]

---

##### `systemTagsInput`<sup>Optional</sup> <a name="systemTagsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.systemTagsInput"></a>

```typescript
public readonly systemTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatasciencePipelineRunTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts">DatasciencePipelineRunTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deleteRelatedJobRuns`<sup>Required</sup> <a name="deleteRelatedJobRuns" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.deleteRelatedJobRuns"></a>

```typescript
public readonly deleteRelatedJobRuns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `opcParentRptUrl`<sup>Required</sup> <a name="opcParentRptUrl" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.opcParentRptUrl"></a>

```typescript
public readonly opcParentRptUrl: string;
```

- *Type:* string

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.systemTags"></a>

```typescript
public readonly systemTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasciencePipelineRunConfig <a name="DatasciencePipelineRunConfig" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineRunConfig: datasciencePipelineRun.DatasciencePipelineRunConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#compartment_id DatasciencePipelineRun#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.pipelineId">pipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#pipeline_id DatasciencePipelineRun#pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#project_id DatasciencePipelineRun#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.configurationOverrideDetails">configurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a></code> | configuration_override_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#defined_tags DatasciencePipelineRun#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.deleteRelatedJobRuns">deleteRelatedJobRuns</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#delete_related_job_runs DatasciencePipelineRun#delete_related_job_runs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#display_name DatasciencePipelineRun#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#freeform_tags DatasciencePipelineRun#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#id DatasciencePipelineRun#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.logConfigurationOverrideDetails">logConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a></code> | log_configuration_override_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.opcParentRptUrl">opcParentRptUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#opc_parent_rpt_url DatasciencePipelineRun#opc_parent_rpt_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.stepOverrideDetails">stepOverrideDetails</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>[]</code> | step_override_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.systemTags">systemTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#system_tags DatasciencePipelineRun#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts">DatasciencePipelineRunTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#compartment_id DatasciencePipelineRun#compartment_id}.

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#pipeline_id DatasciencePipelineRun#pipeline_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#project_id DatasciencePipelineRun#project_id}.

---

##### `configurationOverrideDetails`<sup>Optional</sup> <a name="configurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.configurationOverrideDetails"></a>

```typescript
public readonly configurationOverrideDetails: DatasciencePipelineRunConfigurationOverrideDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a>

configuration_override_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#configuration_override_details DatasciencePipelineRun#configuration_override_details}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#defined_tags DatasciencePipelineRun#defined_tags}.

---

##### `deleteRelatedJobRuns`<sup>Optional</sup> <a name="deleteRelatedJobRuns" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.deleteRelatedJobRuns"></a>

```typescript
public readonly deleteRelatedJobRuns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#delete_related_job_runs DatasciencePipelineRun#delete_related_job_runs}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#display_name DatasciencePipelineRun#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#freeform_tags DatasciencePipelineRun#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#id DatasciencePipelineRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logConfigurationOverrideDetails`<sup>Optional</sup> <a name="logConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.logConfigurationOverrideDetails"></a>

```typescript
public readonly logConfigurationOverrideDetails: DatasciencePipelineRunLogConfigurationOverrideDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a>

log_configuration_override_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#log_configuration_override_details DatasciencePipelineRun#log_configuration_override_details}

---

##### `opcParentRptUrl`<sup>Optional</sup> <a name="opcParentRptUrl" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.opcParentRptUrl"></a>

```typescript
public readonly opcParentRptUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#opc_parent_rpt_url DatasciencePipelineRun#opc_parent_rpt_url}.

---

##### `stepOverrideDetails`<sup>Optional</sup> <a name="stepOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.stepOverrideDetails"></a>

```typescript
public readonly stepOverrideDetails: IResolvable | DatasciencePipelineRunStepOverrideDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>[]

step_override_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#step_override_details DatasciencePipelineRun#step_override_details}

---

##### `systemTags`<sup>Optional</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.systemTags"></a>

```typescript
public readonly systemTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#system_tags DatasciencePipelineRun#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatasciencePipelineRunTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts">DatasciencePipelineRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#timeouts DatasciencePipelineRun#timeouts}

---

### DatasciencePipelineRunConfigurationDetails <a name="DatasciencePipelineRunConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetails.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineRunConfigurationDetails: datasciencePipelineRun.DatasciencePipelineRunConfigurationDetails = { ... }
```


### DatasciencePipelineRunConfigurationOverrideDetails <a name="DatasciencePipelineRunConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineRunConfigurationOverrideDetails: datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#type DatasciencePipelineRun#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.commandLineArguments">commandLineArguments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#command_line_arguments DatasciencePipelineRun#command_line_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#environment_variables DatasciencePipelineRun#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#maximum_runtime_in_minutes DatasciencePipelineRun#maximum_runtime_in_minutes}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#type DatasciencePipelineRun#type}.

---

##### `commandLineArguments`<sup>Optional</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#command_line_arguments DatasciencePipelineRun#command_line_arguments}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#environment_variables DatasciencePipelineRun#environment_variables}.

---

##### `maximumRuntimeInMinutes`<sup>Optional</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.maximumRuntimeInMinutes"></a>

```typescript
public readonly maximumRuntimeInMinutes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#maximum_runtime_in_minutes DatasciencePipelineRun#maximum_runtime_in_minutes}.

---

### DatasciencePipelineRunLogConfigurationOverrideDetails <a name="DatasciencePipelineRunLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineRunLogConfigurationOverrideDetails: datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.enableAutoLogCreation">enableAutoLogCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#enable_auto_log_creation DatasciencePipelineRun#enable_auto_log_creation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#enable_logging DatasciencePipelineRun#enable_logging}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.logGroupId">logGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#log_group_id DatasciencePipelineRun#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.logId">logId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#log_id DatasciencePipelineRun#log_id}. |

---

##### `enableAutoLogCreation`<sup>Optional</sup> <a name="enableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.enableAutoLogCreation"></a>

```typescript
public readonly enableAutoLogCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#enable_auto_log_creation DatasciencePipelineRun#enable_auto_log_creation}.

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#enable_logging DatasciencePipelineRun#enable_logging}.

---

##### `logGroupId`<sup>Optional</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#log_group_id DatasciencePipelineRun#log_group_id}.

---

##### `logId`<sup>Optional</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#log_id DatasciencePipelineRun#log_id}.

---

### DatasciencePipelineRunLogDetails <a name="DatasciencePipelineRunLogDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetails.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineRunLogDetails: datasciencePipelineRun.DatasciencePipelineRunLogDetails = { ... }
```


### DatasciencePipelineRunStepOverrideDetails <a name="DatasciencePipelineRunStepOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineRunStepOverrideDetails: datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.property.stepConfigurationDetails">stepConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a></code> | step_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.property.stepName">stepName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#step_name DatasciencePipelineRun#step_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.property.stepContainerConfigurationDetails">stepContainerConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a></code> | step_container_configuration_details block. |

---

##### `stepConfigurationDetails`<sup>Required</sup> <a name="stepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.property.stepConfigurationDetails"></a>

```typescript
public readonly stepConfigurationDetails: DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a>

step_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#step_configuration_details DatasciencePipelineRun#step_configuration_details}

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#step_name DatasciencePipelineRun#step_name}.

---

##### `stepContainerConfigurationDetails`<sup>Optional</sup> <a name="stepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.property.stepContainerConfigurationDetails"></a>

```typescript
public readonly stepContainerConfigurationDetails: DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a>

step_container_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#step_container_configuration_details DatasciencePipelineRun#step_container_configuration_details}

---

### DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails <a name="DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineRunStepOverrideDetailsStepConfigurationDetails: datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.property.commandLineArguments">commandLineArguments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#command_line_arguments DatasciencePipelineRun#command_line_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#environment_variables DatasciencePipelineRun#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#maximum_runtime_in_minutes DatasciencePipelineRun#maximum_runtime_in_minutes}. |

---

##### `commandLineArguments`<sup>Optional</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#command_line_arguments DatasciencePipelineRun#command_line_arguments}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#environment_variables DatasciencePipelineRun#environment_variables}.

---

##### `maximumRuntimeInMinutes`<sup>Optional</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.property.maximumRuntimeInMinutes"></a>

```typescript
public readonly maximumRuntimeInMinutes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#maximum_runtime_in_minutes DatasciencePipelineRun#maximum_runtime_in_minutes}.

---

### DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails <a name="DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails: datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.containerType">containerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#container_type DatasciencePipelineRun#container_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image DatasciencePipelineRun#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.cmd">cmd</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#cmd DatasciencePipelineRun#cmd}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.entrypoint">entrypoint</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#entrypoint DatasciencePipelineRun#entrypoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.imageDigest">imageDigest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image_digest DatasciencePipelineRun#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.imageSignatureId">imageSignatureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image_signature_id DatasciencePipelineRun#image_signature_id}. |

---

##### `containerType`<sup>Required</sup> <a name="containerType" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.containerType"></a>

```typescript
public readonly containerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#container_type DatasciencePipelineRun#container_type}.

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image DatasciencePipelineRun#image}.

---

##### `cmd`<sup>Optional</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.cmd"></a>

```typescript
public readonly cmd: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#cmd DatasciencePipelineRun#cmd}.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.entrypoint"></a>

```typescript
public readonly entrypoint: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#entrypoint DatasciencePipelineRun#entrypoint}.

---

##### `imageDigest`<sup>Optional</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image_digest DatasciencePipelineRun#image_digest}.

---

##### `imageSignatureId`<sup>Optional</sup> <a name="imageSignatureId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.imageSignatureId"></a>

```typescript
public readonly imageSignatureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image_signature_id DatasciencePipelineRun#image_signature_id}.

---

### DatasciencePipelineRunStepRuns <a name="DatasciencePipelineRunStepRuns" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRuns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRuns.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineRunStepRuns: datasciencePipelineRun.DatasciencePipelineRunStepRuns = { ... }
```


### DatasciencePipelineRunTimeouts <a name="DatasciencePipelineRunTimeouts" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

const datasciencePipelineRunTimeouts: datasciencePipelineRun.DatasciencePipelineRunTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#create DatasciencePipelineRun#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#delete DatasciencePipelineRun#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#update DatasciencePipelineRun#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#create DatasciencePipelineRun#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#delete DatasciencePipelineRun#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#update DatasciencePipelineRun#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasciencePipelineRunConfigurationDetailsList <a name="DatasciencePipelineRunConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

new datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.get"></a>

```typescript
public get(index: number): DatasciencePipelineRunConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatasciencePipelineRunConfigurationDetailsOutputReference <a name="DatasciencePipelineRunConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

new datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.commandLineArguments">commandLineArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetails">DatasciencePipelineRunConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `maximumRuntimeInMinutes`<sup>Required</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```typescript
public readonly maximumRuntimeInMinutes: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasciencePipelineRunConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetails">DatasciencePipelineRunConfigurationDetails</a>

---


### DatasciencePipelineRunConfigurationOverrideDetailsOutputReference <a name="DatasciencePipelineRunConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

new datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resetCommandLineArguments">resetCommandLineArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resetMaximumRuntimeInMinutes">resetMaximumRuntimeInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommandLineArguments` <a name="resetCommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resetCommandLineArguments"></a>

```typescript
public resetCommandLineArguments(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetMaximumRuntimeInMinutes` <a name="resetMaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resetMaximumRuntimeInMinutes"></a>

```typescript
public resetMaximumRuntimeInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.commandLineArgumentsInput">commandLineArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutesInput">maximumRuntimeInMinutesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.commandLineArguments">commandLineArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commandLineArgumentsInput`<sup>Optional</sup> <a name="commandLineArgumentsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.commandLineArgumentsInput"></a>

```typescript
public readonly commandLineArgumentsInput: string;
```

- *Type:* string

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maximumRuntimeInMinutesInput`<sup>Optional</sup> <a name="maximumRuntimeInMinutesInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutesInput"></a>

```typescript
public readonly maximumRuntimeInMinutesInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maximumRuntimeInMinutes`<sup>Required</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```typescript
public readonly maximumRuntimeInMinutes: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasciencePipelineRunConfigurationOverrideDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a>

---


### DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference <a name="DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

new datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetEnableAutoLogCreation">resetEnableAutoLogCreation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetLogGroupId">resetLogGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetLogId">resetLogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableAutoLogCreation` <a name="resetEnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetEnableAutoLogCreation"></a>

```typescript
public resetEnableAutoLogCreation(): void
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetEnableLogging"></a>

```typescript
public resetEnableLogging(): void
```

##### `resetLogGroupId` <a name="resetLogGroupId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetLogGroupId"></a>

```typescript
public resetLogGroupId(): void
```

##### `resetLogId` <a name="resetLogId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetLogId"></a>

```typescript
public resetLogId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreationInput">enableAutoLogCreationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableLoggingInput">enableLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logGroupIdInput">logGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logIdInput">logIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation">enableAutoLogCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logId">logId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableAutoLogCreationInput`<sup>Optional</sup> <a name="enableAutoLogCreationInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreationInput"></a>

```typescript
public readonly enableAutoLogCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableLoggingInput"></a>

```typescript
public readonly enableLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logGroupIdInput"></a>

```typescript
public readonly logGroupIdInput: string;
```

- *Type:* string

---

##### `logIdInput`<sup>Optional</sup> <a name="logIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logIdInput"></a>

```typescript
public readonly logIdInput: string;
```

- *Type:* string

---

##### `enableAutoLogCreation`<sup>Required</sup> <a name="enableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation"></a>

```typescript
public readonly enableAutoLogCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasciencePipelineRunLogConfigurationOverrideDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a>

---


### DatasciencePipelineRunLogDetailsList <a name="DatasciencePipelineRunLogDetailsList" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

new datasciencePipelineRun.DatasciencePipelineRunLogDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.get"></a>

```typescript
public get(index: number): DatasciencePipelineRunLogDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatasciencePipelineRunLogDetailsOutputReference <a name="DatasciencePipelineRunLogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

new datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.logId">logId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetails">DatasciencePipelineRunLogDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasciencePipelineRunLogDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetails">DatasciencePipelineRunLogDetails</a>

---


### DatasciencePipelineRunStepOverrideDetailsList <a name="DatasciencePipelineRunStepOverrideDetailsList" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

new datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.get"></a>

```typescript
public get(index: number): DatasciencePipelineRunStepOverrideDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasciencePipelineRunStepOverrideDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>[]

---


### DatasciencePipelineRunStepOverrideDetailsOutputReference <a name="DatasciencePipelineRunStepOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

new datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepConfigurationDetails">putStepConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepContainerConfigurationDetails">putStepContainerConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.resetStepContainerConfigurationDetails">resetStepContainerConfigurationDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStepConfigurationDetails` <a name="putStepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepConfigurationDetails"></a>

```typescript
public putStepConfigurationDetails(value: DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a>

---

##### `putStepContainerConfigurationDetails` <a name="putStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepContainerConfigurationDetails"></a>

```typescript
public putStepContainerConfigurationDetails(value: DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepContainerConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a>

---

##### `resetStepContainerConfigurationDetails` <a name="resetStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.resetStepContainerConfigurationDetails"></a>

```typescript
public resetStepContainerConfigurationDetails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepConfigurationDetails">stepConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetails">stepContainerConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepConfigurationDetailsInput">stepConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetailsInput">stepContainerConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepNameInput">stepNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepName">stepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stepConfigurationDetails`<sup>Required</sup> <a name="stepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepConfigurationDetails"></a>

```typescript
public readonly stepConfigurationDetails: DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference</a>

---

##### `stepContainerConfigurationDetails`<sup>Required</sup> <a name="stepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetails"></a>

```typescript
public readonly stepContainerConfigurationDetails: DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference</a>

---

##### `stepConfigurationDetailsInput`<sup>Optional</sup> <a name="stepConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepConfigurationDetailsInput"></a>

```typescript
public readonly stepConfigurationDetailsInput: DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a>

---

##### `stepContainerConfigurationDetailsInput`<sup>Optional</sup> <a name="stepContainerConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetailsInput"></a>

```typescript
public readonly stepContainerConfigurationDetailsInput: DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a>

---

##### `stepNameInput`<sup>Optional</sup> <a name="stepNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepNameInput"></a>

```typescript
public readonly stepNameInput: string;
```

- *Type:* string

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasciencePipelineRunStepOverrideDetails;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>

---


### DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference <a name="DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

new datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resetCommandLineArguments">resetCommandLineArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes">resetMaximumRuntimeInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommandLineArguments` <a name="resetCommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resetCommandLineArguments"></a>

```typescript
public resetCommandLineArguments(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetMaximumRuntimeInMinutes` <a name="resetMaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes"></a>

```typescript
public resetMaximumRuntimeInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArgumentsInput">commandLineArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput">maximumRuntimeInMinutesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments">commandLineArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commandLineArgumentsInput`<sup>Optional</sup> <a name="commandLineArgumentsInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArgumentsInput"></a>

```typescript
public readonly commandLineArgumentsInput: string;
```

- *Type:* string

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maximumRuntimeInMinutesInput`<sup>Optional</sup> <a name="maximumRuntimeInMinutesInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput"></a>

```typescript
public readonly maximumRuntimeInMinutesInput: string;
```

- *Type:* string

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maximumRuntimeInMinutes`<sup>Required</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```typescript
public readonly maximumRuntimeInMinutes: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a>

---


### DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference <a name="DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

new datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetCmd">resetCmd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetEntrypoint">resetEntrypoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetImageDigest">resetImageDigest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetImageSignatureId">resetImageSignatureId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCmd` <a name="resetCmd" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetCmd"></a>

```typescript
public resetCmd(): void
```

##### `resetEntrypoint` <a name="resetEntrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetEntrypoint"></a>

```typescript
public resetEntrypoint(): void
```

##### `resetImageDigest` <a name="resetImageDigest" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetImageDigest"></a>

```typescript
public resetImageDigest(): void
```

##### `resetImageSignatureId` <a name="resetImageSignatureId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetImageSignatureId"></a>

```typescript
public resetImageSignatureId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmdInput">cmdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerTypeInput">containerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypointInput">entrypointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigestInput">imageDigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureIdInput">imageSignatureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmd">cmd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerType">containerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint">entrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest">imageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId">imageSignatureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cmdInput`<sup>Optional</sup> <a name="cmdInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmdInput"></a>

```typescript
public readonly cmdInput: string[];
```

- *Type:* string[]

---

##### `containerTypeInput`<sup>Optional</sup> <a name="containerTypeInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerTypeInput"></a>

```typescript
public readonly containerTypeInput: string;
```

- *Type:* string

---

##### `entrypointInput`<sup>Optional</sup> <a name="entrypointInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypointInput"></a>

```typescript
public readonly entrypointInput: string[];
```

- *Type:* string[]

---

##### `imageDigestInput`<sup>Optional</sup> <a name="imageDigestInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigestInput"></a>

```typescript
public readonly imageDigestInput: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `imageSignatureIdInput`<sup>Optional</sup> <a name="imageSignatureIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureIdInput"></a>

```typescript
public readonly imageSignatureIdInput: string;
```

- *Type:* string

---

##### `cmd`<sup>Required</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmd"></a>

```typescript
public readonly cmd: string[];
```

- *Type:* string[]

---

##### `containerType`<sup>Required</sup> <a name="containerType" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerType"></a>

```typescript
public readonly containerType: string;
```

- *Type:* string

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint"></a>

```typescript
public readonly entrypoint: string[];
```

- *Type:* string[]

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

---

##### `imageSignatureId`<sup>Required</sup> <a name="imageSignatureId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId"></a>

```typescript
public readonly imageSignatureId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a>

---


### DatasciencePipelineRunStepRunsList <a name="DatasciencePipelineRunStepRunsList" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

new datasciencePipelineRun.DatasciencePipelineRunStepRunsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.get"></a>

```typescript
public get(index: number): DatasciencePipelineRunStepRunsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatasciencePipelineRunStepRunsOutputReference <a name="DatasciencePipelineRunStepRunsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

new datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.jobRunId">jobRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.stepName">stepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.stepType">stepType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRuns">DatasciencePipelineRunStepRuns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobRunId`<sup>Required</sup> <a name="jobRunId" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.jobRunId"></a>

```typescript
public readonly jobRunId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string

---

##### `stepType`<sup>Required</sup> <a name="stepType" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.stepType"></a>

```typescript
public readonly stepType: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasciencePipelineRunStepRuns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRuns">DatasciencePipelineRunStepRuns</a>

---


### DatasciencePipelineRunTimeoutsOutputReference <a name="DatasciencePipelineRunTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.Initializer"></a>

```typescript
import { datasciencePipelineRun } from 'rhizo-co-terraform-provider-oci'

new datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts">DatasciencePipelineRunTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasciencePipelineRunTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts">DatasciencePipelineRunTimeouts</a>

---



