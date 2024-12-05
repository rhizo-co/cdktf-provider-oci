# `datascienceJob` Submodule <a name="`datascienceJob` Submodule" id="rhizo-co-terraform-provider-oci.datascienceJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatascienceJob <a name="DatascienceJob" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job oci_datascience_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

new datascienceJob.DatascienceJob(scope: Construct, id: string, config: DatascienceJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig">DatascienceJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig">DatascienceJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobConfigurationDetails">putJobConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobEnvironmentConfigurationDetails">putJobEnvironmentConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobInfrastructureConfigurationDetails">putJobInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobLogConfigurationDetails">putJobLogConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobStorageMountConfigurationDetailsList">putJobStorageMountConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetArtifactContentDisposition">resetArtifactContentDisposition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetArtifactContentLength">resetArtifactContentLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDeleteRelatedJobRuns">resetDeleteRelatedJobRuns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobArtifact">resetJobArtifact</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobEnvironmentConfigurationDetails">resetJobEnvironmentConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobLogConfigurationDetails">resetJobLogConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobStorageMountConfigurationDetailsList">resetJobStorageMountConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putJobConfigurationDetails` <a name="putJobConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobConfigurationDetails"></a>

```typescript
public putJobConfigurationDetails(value: DatascienceJobJobConfigurationDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a>

---

##### `putJobEnvironmentConfigurationDetails` <a name="putJobEnvironmentConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobEnvironmentConfigurationDetails"></a>

```typescript
public putJobEnvironmentConfigurationDetails(value: DatascienceJobJobEnvironmentConfigurationDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobEnvironmentConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a>

---

##### `putJobInfrastructureConfigurationDetails` <a name="putJobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobInfrastructureConfigurationDetails"></a>

```typescript
public putJobInfrastructureConfigurationDetails(value: DatascienceJobJobInfrastructureConfigurationDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobInfrastructureConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a>

---

##### `putJobLogConfigurationDetails` <a name="putJobLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobLogConfigurationDetails"></a>

```typescript
public putJobLogConfigurationDetails(value: DatascienceJobJobLogConfigurationDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobLogConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a>

---

##### `putJobStorageMountConfigurationDetailsList` <a name="putJobStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobStorageMountConfigurationDetailsList"></a>

```typescript
public putJobStorageMountConfigurationDetailsList(value: IResolvable | DatascienceJobJobStorageMountConfigurationDetailsListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobStorageMountConfigurationDetailsList.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putTimeouts"></a>

```typescript
public putTimeouts(value: DatascienceJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts">DatascienceJobTimeouts</a>

---

##### `resetArtifactContentDisposition` <a name="resetArtifactContentDisposition" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetArtifactContentDisposition"></a>

```typescript
public resetArtifactContentDisposition(): void
```

##### `resetArtifactContentLength` <a name="resetArtifactContentLength" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetArtifactContentLength"></a>

```typescript
public resetArtifactContentLength(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDeleteRelatedJobRuns` <a name="resetDeleteRelatedJobRuns" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDeleteRelatedJobRuns"></a>

```typescript
public resetDeleteRelatedJobRuns(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJobArtifact` <a name="resetJobArtifact" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobArtifact"></a>

```typescript
public resetJobArtifact(): void
```

##### `resetJobEnvironmentConfigurationDetails` <a name="resetJobEnvironmentConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobEnvironmentConfigurationDetails"></a>

```typescript
public resetJobEnvironmentConfigurationDetails(): void
```

##### `resetJobLogConfigurationDetails` <a name="resetJobLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobLogConfigurationDetails"></a>

```typescript
public resetJobLogConfigurationDetails(): void
```

##### `resetJobStorageMountConfigurationDetailsList` <a name="resetJobStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobStorageMountConfigurationDetailsList"></a>

```typescript
public resetJobStorageMountConfigurationDetailsList(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatascienceJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isConstruct"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

datascienceJob.DatascienceJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isTerraformElement"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

datascienceJob.DatascienceJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isTerraformResource"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

datascienceJob.DatascienceJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.generateConfigForImport"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

datascienceJob.DatascienceJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatascienceJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatascienceJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatascienceJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatascienceJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentMd5">artifactContentMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactLastModified">artifactLastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.emptyArtifact">emptyArtifact</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobConfigurationDetails">jobConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference">DatascienceJobJobConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobEnvironmentConfigurationDetails">jobEnvironmentConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference">DatascienceJobJobEnvironmentConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobInfrastructureConfigurationDetails">jobInfrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference">DatascienceJobJobInfrastructureConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobLogConfigurationDetails">jobLogConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference">DatascienceJobJobLogConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobStorageMountConfigurationDetailsList">jobStorageMountConfigurationDetailsList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList">DatascienceJobJobStorageMountConfigurationDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference">DatascienceJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentDispositionInput">artifactContentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentLengthInput">artifactContentLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.deleteRelatedJobRunsInput">deleteRelatedJobRunsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobArtifactInput">jobArtifactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobConfigurationDetailsInput">jobConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobEnvironmentConfigurationDetailsInput">jobEnvironmentConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobInfrastructureConfigurationDetailsInput">jobInfrastructureConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobLogConfigurationDetailsInput">jobLogConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobStorageMountConfigurationDetailsListInput">jobStorageMountConfigurationDetailsListInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts">DatascienceJobTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentDisposition">artifactContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentLength">artifactContentLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.deleteRelatedJobRuns">deleteRelatedJobRuns</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobArtifact">jobArtifact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `artifactContentMd5`<sup>Required</sup> <a name="artifactContentMd5" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentMd5"></a>

```typescript
public readonly artifactContentMd5: string;
```

- *Type:* string

---

##### `artifactLastModified`<sup>Required</sup> <a name="artifactLastModified" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactLastModified"></a>

```typescript
public readonly artifactLastModified: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `emptyArtifact`<sup>Required</sup> <a name="emptyArtifact" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.emptyArtifact"></a>

```typescript
public readonly emptyArtifact: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `jobConfigurationDetails`<sup>Required</sup> <a name="jobConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobConfigurationDetails"></a>

```typescript
public readonly jobConfigurationDetails: DatascienceJobJobConfigurationDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference">DatascienceJobJobConfigurationDetailsOutputReference</a>

---

##### `jobEnvironmentConfigurationDetails`<sup>Required</sup> <a name="jobEnvironmentConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobEnvironmentConfigurationDetails"></a>

```typescript
public readonly jobEnvironmentConfigurationDetails: DatascienceJobJobEnvironmentConfigurationDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference">DatascienceJobJobEnvironmentConfigurationDetailsOutputReference</a>

---

##### `jobInfrastructureConfigurationDetails`<sup>Required</sup> <a name="jobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobInfrastructureConfigurationDetails"></a>

```typescript
public readonly jobInfrastructureConfigurationDetails: DatascienceJobJobInfrastructureConfigurationDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference">DatascienceJobJobInfrastructureConfigurationDetailsOutputReference</a>

---

##### `jobLogConfigurationDetails`<sup>Required</sup> <a name="jobLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobLogConfigurationDetails"></a>

```typescript
public readonly jobLogConfigurationDetails: DatascienceJobJobLogConfigurationDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference">DatascienceJobJobLogConfigurationDetailsOutputReference</a>

---

##### `jobStorageMountConfigurationDetailsList`<sup>Required</sup> <a name="jobStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobStorageMountConfigurationDetailsList"></a>

```typescript
public readonly jobStorageMountConfigurationDetailsList: DatascienceJobJobStorageMountConfigurationDetailsListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList">DatascienceJobJobStorageMountConfigurationDetailsListStructList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.timeouts"></a>

```typescript
public readonly timeouts: DatascienceJobTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference">DatascienceJobTimeoutsOutputReference</a>

---

##### `artifactContentDispositionInput`<sup>Optional</sup> <a name="artifactContentDispositionInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentDispositionInput"></a>

```typescript
public readonly artifactContentDispositionInput: string;
```

- *Type:* string

---

##### `artifactContentLengthInput`<sup>Optional</sup> <a name="artifactContentLengthInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentLengthInput"></a>

```typescript
public readonly artifactContentLengthInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deleteRelatedJobRunsInput`<sup>Optional</sup> <a name="deleteRelatedJobRunsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.deleteRelatedJobRunsInput"></a>

```typescript
public readonly deleteRelatedJobRunsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jobArtifactInput`<sup>Optional</sup> <a name="jobArtifactInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobArtifactInput"></a>

```typescript
public readonly jobArtifactInput: string;
```

- *Type:* string

---

##### `jobConfigurationDetailsInput`<sup>Optional</sup> <a name="jobConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobConfigurationDetailsInput"></a>

```typescript
public readonly jobConfigurationDetailsInput: DatascienceJobJobConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a>

---

##### `jobEnvironmentConfigurationDetailsInput`<sup>Optional</sup> <a name="jobEnvironmentConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobEnvironmentConfigurationDetailsInput"></a>

```typescript
public readonly jobEnvironmentConfigurationDetailsInput: DatascienceJobJobEnvironmentConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a>

---

##### `jobInfrastructureConfigurationDetailsInput`<sup>Optional</sup> <a name="jobInfrastructureConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobInfrastructureConfigurationDetailsInput"></a>

```typescript
public readonly jobInfrastructureConfigurationDetailsInput: DatascienceJobJobInfrastructureConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a>

---

##### `jobLogConfigurationDetailsInput`<sup>Optional</sup> <a name="jobLogConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobLogConfigurationDetailsInput"></a>

```typescript
public readonly jobLogConfigurationDetailsInput: DatascienceJobJobLogConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a>

---

##### `jobStorageMountConfigurationDetailsListInput`<sup>Optional</sup> <a name="jobStorageMountConfigurationDetailsListInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobStorageMountConfigurationDetailsListInput"></a>

```typescript
public readonly jobStorageMountConfigurationDetailsListInput: IResolvable | DatascienceJobJobStorageMountConfigurationDetailsListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>[]

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatascienceJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts">DatascienceJobTimeouts</a>

---

##### `artifactContentDisposition`<sup>Required</sup> <a name="artifactContentDisposition" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentDisposition"></a>

```typescript
public readonly artifactContentDisposition: string;
```

- *Type:* string

---

##### `artifactContentLength`<sup>Required</sup> <a name="artifactContentLength" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentLength"></a>

```typescript
public readonly artifactContentLength: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deleteRelatedJobRuns`<sup>Required</sup> <a name="deleteRelatedJobRuns" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.deleteRelatedJobRuns"></a>

```typescript
public readonly deleteRelatedJobRuns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobArtifact`<sup>Required</sup> <a name="jobArtifact" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobArtifact"></a>

```typescript
public readonly jobArtifact: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatascienceJobConfig <a name="DatascienceJobConfig" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.Initializer"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

const datascienceJobConfig: datascienceJob.DatascienceJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#compartment_id DatascienceJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobConfigurationDetails">jobConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a></code> | job_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobInfrastructureConfigurationDetails">jobInfrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a></code> | job_infrastructure_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#project_id DatascienceJob#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.artifactContentDisposition">artifactContentDisposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#artifact_content_disposition DatascienceJob#artifact_content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.artifactContentLength">artifactContentLength</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#artifact_content_length DatascienceJob#artifact_content_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#defined_tags DatascienceJob#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.deleteRelatedJobRuns">deleteRelatedJobRuns</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#delete_related_job_runs DatascienceJob#delete_related_job_runs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#description DatascienceJob#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#display_name DatascienceJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#freeform_tags DatascienceJob#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#id DatascienceJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobArtifact">jobArtifact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_artifact DatascienceJob#job_artifact}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobEnvironmentConfigurationDetails">jobEnvironmentConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a></code> | job_environment_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobLogConfigurationDetails">jobLogConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a></code> | job_log_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobStorageMountConfigurationDetailsList">jobStorageMountConfigurationDetailsList</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>[]</code> | job_storage_mount_configuration_details_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts">DatascienceJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#compartment_id DatascienceJob#compartment_id}.

---

##### `jobConfigurationDetails`<sup>Required</sup> <a name="jobConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobConfigurationDetails"></a>

```typescript
public readonly jobConfigurationDetails: DatascienceJobJobConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a>

job_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_configuration_details DatascienceJob#job_configuration_details}

---

##### `jobInfrastructureConfigurationDetails`<sup>Required</sup> <a name="jobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobInfrastructureConfigurationDetails"></a>

```typescript
public readonly jobInfrastructureConfigurationDetails: DatascienceJobJobInfrastructureConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a>

job_infrastructure_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_infrastructure_configuration_details DatascienceJob#job_infrastructure_configuration_details}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#project_id DatascienceJob#project_id}.

---

##### `artifactContentDisposition`<sup>Optional</sup> <a name="artifactContentDisposition" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.artifactContentDisposition"></a>

```typescript
public readonly artifactContentDisposition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#artifact_content_disposition DatascienceJob#artifact_content_disposition}.

---

##### `artifactContentLength`<sup>Optional</sup> <a name="artifactContentLength" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.artifactContentLength"></a>

```typescript
public readonly artifactContentLength: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#artifact_content_length DatascienceJob#artifact_content_length}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#defined_tags DatascienceJob#defined_tags}.

---

##### `deleteRelatedJobRuns`<sup>Optional</sup> <a name="deleteRelatedJobRuns" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.deleteRelatedJobRuns"></a>

```typescript
public readonly deleteRelatedJobRuns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#delete_related_job_runs DatascienceJob#delete_related_job_runs}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#description DatascienceJob#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#display_name DatascienceJob#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#freeform_tags DatascienceJob#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#id DatascienceJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobArtifact`<sup>Optional</sup> <a name="jobArtifact" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobArtifact"></a>

```typescript
public readonly jobArtifact: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_artifact DatascienceJob#job_artifact}.

---

##### `jobEnvironmentConfigurationDetails`<sup>Optional</sup> <a name="jobEnvironmentConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobEnvironmentConfigurationDetails"></a>

```typescript
public readonly jobEnvironmentConfigurationDetails: DatascienceJobJobEnvironmentConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a>

job_environment_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_environment_configuration_details DatascienceJob#job_environment_configuration_details}

---

##### `jobLogConfigurationDetails`<sup>Optional</sup> <a name="jobLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobLogConfigurationDetails"></a>

```typescript
public readonly jobLogConfigurationDetails: DatascienceJobJobLogConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a>

job_log_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_log_configuration_details DatascienceJob#job_log_configuration_details}

---

##### `jobStorageMountConfigurationDetailsList`<sup>Optional</sup> <a name="jobStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobStorageMountConfigurationDetailsList"></a>

```typescript
public readonly jobStorageMountConfigurationDetailsList: IResolvable | DatascienceJobJobStorageMountConfigurationDetailsListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>[]

job_storage_mount_configuration_details_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_storage_mount_configuration_details_list DatascienceJob#job_storage_mount_configuration_details_list}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatascienceJobTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts">DatascienceJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#timeouts DatascienceJob#timeouts}

---

### DatascienceJobJobConfigurationDetails <a name="DatascienceJobJobConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.Initializer"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

const datascienceJobJobConfigurationDetails: datascienceJob.DatascienceJobJobConfigurationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.jobType">jobType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_type DatascienceJob#job_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.commandLineArguments">commandLineArguments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#command_line_arguments DatascienceJob#command_line_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#environment_variables DatascienceJob#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#maximum_runtime_in_minutes DatascienceJob#maximum_runtime_in_minutes}. |

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.jobType"></a>

```typescript
public readonly jobType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_type DatascienceJob#job_type}.

---

##### `commandLineArguments`<sup>Optional</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#command_line_arguments DatascienceJob#command_line_arguments}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#environment_variables DatascienceJob#environment_variables}.

---

##### `maximumRuntimeInMinutes`<sup>Optional</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.maximumRuntimeInMinutes"></a>

```typescript
public readonly maximumRuntimeInMinutes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#maximum_runtime_in_minutes DatascienceJob#maximum_runtime_in_minutes}.

---

### DatascienceJobJobEnvironmentConfigurationDetails <a name="DatascienceJobJobEnvironmentConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.Initializer"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

const datascienceJobJobEnvironmentConfigurationDetails: datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image DatascienceJob#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.jobEnvironmentType">jobEnvironmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_environment_type DatascienceJob#job_environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.cmd">cmd</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#cmd DatascienceJob#cmd}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.entrypoint">entrypoint</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#entrypoint DatascienceJob#entrypoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.imageDigest">imageDigest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image_digest DatascienceJob#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.imageSignatureId">imageSignatureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image_signature_id DatascienceJob#image_signature_id}. |

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image DatascienceJob#image}.

---

##### `jobEnvironmentType`<sup>Required</sup> <a name="jobEnvironmentType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.jobEnvironmentType"></a>

```typescript
public readonly jobEnvironmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_environment_type DatascienceJob#job_environment_type}.

---

##### `cmd`<sup>Optional</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.cmd"></a>

```typescript
public readonly cmd: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#cmd DatascienceJob#cmd}.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.entrypoint"></a>

```typescript
public readonly entrypoint: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#entrypoint DatascienceJob#entrypoint}.

---

##### `imageDigest`<sup>Optional</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image_digest DatascienceJob#image_digest}.

---

##### `imageSignatureId`<sup>Optional</sup> <a name="imageSignatureId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.imageSignatureId"></a>

```typescript
public readonly imageSignatureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image_signature_id DatascienceJob#image_signature_id}.

---

### DatascienceJobJobInfrastructureConfigurationDetails <a name="DatascienceJobJobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.Initializer"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

const datascienceJobJobInfrastructureConfigurationDetails: datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.blockStorageSizeInGbs">blockStorageSizeInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#block_storage_size_in_gbs DatascienceJob#block_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.jobInfrastructureType">jobInfrastructureType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_infrastructure_type DatascienceJob#job_infrastructure_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.shapeName">shapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#shape_name DatascienceJob#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.jobShapeConfigDetails">jobShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a></code> | job_shape_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#subnet_id DatascienceJob#subnet_id}. |

---

##### `blockStorageSizeInGbs`<sup>Required</sup> <a name="blockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.blockStorageSizeInGbs"></a>

```typescript
public readonly blockStorageSizeInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#block_storage_size_in_gbs DatascienceJob#block_storage_size_in_gbs}.

---

##### `jobInfrastructureType`<sup>Required</sup> <a name="jobInfrastructureType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.jobInfrastructureType"></a>

```typescript
public readonly jobInfrastructureType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_infrastructure_type DatascienceJob#job_infrastructure_type}.

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#shape_name DatascienceJob#shape_name}.

---

##### `jobShapeConfigDetails`<sup>Optional</sup> <a name="jobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.jobShapeConfigDetails"></a>

```typescript
public readonly jobShapeConfigDetails: DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a>

job_shape_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_shape_config_details DatascienceJob#job_shape_config_details}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#subnet_id DatascienceJob#subnet_id}.

---

### DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails <a name="DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails.Initializer"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

const datascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails: datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#memory_in_gbs DatascienceJob#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails.property.ocpus">ocpus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#ocpus DatascienceJob#ocpus}. |

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#memory_in_gbs DatascienceJob#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#ocpus DatascienceJob#ocpus}.

---

### DatascienceJobJobLogConfigurationDetails <a name="DatascienceJobJobLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.Initializer"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

const datascienceJobJobLogConfigurationDetails: datascienceJob.DatascienceJobJobLogConfigurationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.enableAutoLogCreation">enableAutoLogCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#enable_auto_log_creation DatascienceJob#enable_auto_log_creation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#enable_logging DatascienceJob#enable_logging}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.logGroupId">logGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#log_group_id DatascienceJob#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.logId">logId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#log_id DatascienceJob#log_id}. |

---

##### `enableAutoLogCreation`<sup>Optional</sup> <a name="enableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.enableAutoLogCreation"></a>

```typescript
public readonly enableAutoLogCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#enable_auto_log_creation DatascienceJob#enable_auto_log_creation}.

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#enable_logging DatascienceJob#enable_logging}.

---

##### `logGroupId`<sup>Optional</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#log_group_id DatascienceJob#log_group_id}.

---

##### `logId`<sup>Optional</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#log_id DatascienceJob#log_id}.

---

### DatascienceJobJobStorageMountConfigurationDetailsListStruct <a name="DatascienceJobJobStorageMountConfigurationDetailsListStruct" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.Initializer"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

const datascienceJobJobStorageMountConfigurationDetailsListStruct: datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.destinationDirectoryName">destinationDirectoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#destination_directory_name DatascienceJob#destination_directory_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.storageType">storageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#storage_type DatascienceJob#storage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#bucket DatascienceJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.destinationPath">destinationPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#destination_path DatascienceJob#destination_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.exportId">exportId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#export_id DatascienceJob#export_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.mountTargetId">mountTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#mount_target_id DatascienceJob#mount_target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#namespace DatascienceJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#prefix DatascienceJob#prefix}. |

---

##### `destinationDirectoryName`<sup>Required</sup> <a name="destinationDirectoryName" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.destinationDirectoryName"></a>

```typescript
public readonly destinationDirectoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#destination_directory_name DatascienceJob#destination_directory_name}.

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#storage_type DatascienceJob#storage_type}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#bucket DatascienceJob#bucket}.

---

##### `destinationPath`<sup>Optional</sup> <a name="destinationPath" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#destination_path DatascienceJob#destination_path}.

---

##### `exportId`<sup>Optional</sup> <a name="exportId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.exportId"></a>

```typescript
public readonly exportId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#export_id DatascienceJob#export_id}.

---

##### `mountTargetId`<sup>Optional</sup> <a name="mountTargetId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.mountTargetId"></a>

```typescript
public readonly mountTargetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#mount_target_id DatascienceJob#mount_target_id}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#namespace DatascienceJob#namespace}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#prefix DatascienceJob#prefix}.

---

### DatascienceJobTimeouts <a name="DatascienceJobTimeouts" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.Initializer"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

const datascienceJobTimeouts: datascienceJob.DatascienceJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#create DatascienceJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#delete DatascienceJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#update DatascienceJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#create DatascienceJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#delete DatascienceJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#update DatascienceJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatascienceJobJobConfigurationDetailsOutputReference <a name="DatascienceJobJobConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

new datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resetCommandLineArguments">resetCommandLineArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes">resetMaximumRuntimeInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommandLineArguments` <a name="resetCommandLineArguments" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resetCommandLineArguments"></a>

```typescript
public resetCommandLineArguments(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetMaximumRuntimeInMinutes` <a name="resetMaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes"></a>

```typescript
public resetMaximumRuntimeInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.commandLineArgumentsInput">commandLineArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.jobTypeInput">jobTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput">maximumRuntimeInMinutesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.commandLineArguments">commandLineArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.jobType">jobType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commandLineArgumentsInput`<sup>Optional</sup> <a name="commandLineArgumentsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.commandLineArgumentsInput"></a>

```typescript
public readonly commandLineArgumentsInput: string;
```

- *Type:* string

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `jobTypeInput`<sup>Optional</sup> <a name="jobTypeInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.jobTypeInput"></a>

```typescript
public readonly jobTypeInput: string;
```

- *Type:* string

---

##### `maximumRuntimeInMinutesInput`<sup>Optional</sup> <a name="maximumRuntimeInMinutesInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput"></a>

```typescript
public readonly maximumRuntimeInMinutesInput: string;
```

- *Type:* string

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.jobType"></a>

```typescript
public readonly jobType: string;
```

- *Type:* string

---

##### `maximumRuntimeInMinutes`<sup>Required</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```typescript
public readonly maximumRuntimeInMinutes: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatascienceJobJobConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a>

---


### DatascienceJobJobEnvironmentConfigurationDetailsOutputReference <a name="DatascienceJobJobEnvironmentConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

new datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetCmd">resetCmd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetEntrypoint">resetEntrypoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetImageDigest">resetImageDigest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetImageSignatureId">resetImageSignatureId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCmd` <a name="resetCmd" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetCmd"></a>

```typescript
public resetCmd(): void
```

##### `resetEntrypoint` <a name="resetEntrypoint" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetEntrypoint"></a>

```typescript
public resetEntrypoint(): void
```

##### `resetImageDigest` <a name="resetImageDigest" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetImageDigest"></a>

```typescript
public resetImageDigest(): void
```

##### `resetImageSignatureId` <a name="resetImageSignatureId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetImageSignatureId"></a>

```typescript
public resetImageSignatureId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.cmdInput">cmdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.entrypointInput">entrypointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageDigestInput">imageDigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageSignatureIdInput">imageSignatureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.jobEnvironmentTypeInput">jobEnvironmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.cmd">cmd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.entrypoint">entrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageDigest">imageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageSignatureId">imageSignatureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.jobEnvironmentType">jobEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cmdInput`<sup>Optional</sup> <a name="cmdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.cmdInput"></a>

```typescript
public readonly cmdInput: string[];
```

- *Type:* string[]

---

##### `entrypointInput`<sup>Optional</sup> <a name="entrypointInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.entrypointInput"></a>

```typescript
public readonly entrypointInput: string[];
```

- *Type:* string[]

---

##### `imageDigestInput`<sup>Optional</sup> <a name="imageDigestInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageDigestInput"></a>

```typescript
public readonly imageDigestInput: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `imageSignatureIdInput`<sup>Optional</sup> <a name="imageSignatureIdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageSignatureIdInput"></a>

```typescript
public readonly imageSignatureIdInput: string;
```

- *Type:* string

---

##### `jobEnvironmentTypeInput`<sup>Optional</sup> <a name="jobEnvironmentTypeInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.jobEnvironmentTypeInput"></a>

```typescript
public readonly jobEnvironmentTypeInput: string;
```

- *Type:* string

---

##### `cmd`<sup>Required</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.cmd"></a>

```typescript
public readonly cmd: string[];
```

- *Type:* string[]

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.entrypoint"></a>

```typescript
public readonly entrypoint: string[];
```

- *Type:* string[]

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

---

##### `imageSignatureId`<sup>Required</sup> <a name="imageSignatureId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageSignatureId"></a>

```typescript
public readonly imageSignatureId: string;
```

- *Type:* string

---

##### `jobEnvironmentType`<sup>Required</sup> <a name="jobEnvironmentType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.jobEnvironmentType"></a>

```typescript
public readonly jobEnvironmentType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatascienceJobJobEnvironmentConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a>

---


### DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference <a name="DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

new datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resetOcpus">resetOcpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resetMemoryInGbs"></a>

```typescript
public resetMemoryInGbs(): void
```

##### `resetOcpus` <a name="resetOcpus" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resetOcpus"></a>

```typescript
public resetOcpus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbsInput"></a>

```typescript
public readonly memoryInGbsInput: number;
```

- *Type:* number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpusInput"></a>

```typescript
public readonly ocpusInput: number;
```

- *Type:* number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a>

---


### DatascienceJobJobInfrastructureConfigurationDetailsOutputReference <a name="DatascienceJobJobInfrastructureConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

new datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.putJobShapeConfigDetails">putJobShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resetJobShapeConfigDetails">resetJobShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJobShapeConfigDetails` <a name="putJobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.putJobShapeConfigDetails"></a>

```typescript
public putJobShapeConfigDetails(value: DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.putJobShapeConfigDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a>

---

##### `resetJobShapeConfigDetails` <a name="resetJobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resetJobShapeConfigDetails"></a>

```typescript
public resetJobShapeConfigDetails(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetails">jobShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput">blockStorageSizeInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureTypeInput">jobInfrastructureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetailsInput">jobShapeConfigDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.shapeNameInput">shapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">blockStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureType">jobInfrastructureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobShapeConfigDetails`<sup>Required</sup> <a name="jobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetails"></a>

```typescript
public readonly jobShapeConfigDetails: DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference</a>

---

##### `blockStorageSizeInGbsInput`<sup>Optional</sup> <a name="blockStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput"></a>

```typescript
public readonly blockStorageSizeInGbsInput: number;
```

- *Type:* number

---

##### `jobInfrastructureTypeInput`<sup>Optional</sup> <a name="jobInfrastructureTypeInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureTypeInput"></a>

```typescript
public readonly jobInfrastructureTypeInput: string;
```

- *Type:* string

---

##### `jobShapeConfigDetailsInput`<sup>Optional</sup> <a name="jobShapeConfigDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetailsInput"></a>

```typescript
public readonly jobShapeConfigDetailsInput: DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a>

---

##### `shapeNameInput`<sup>Optional</sup> <a name="shapeNameInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.shapeNameInput"></a>

```typescript
public readonly shapeNameInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `blockStorageSizeInGbs`<sup>Required</sup> <a name="blockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```typescript
public readonly blockStorageSizeInGbs: number;
```

- *Type:* number

---

##### `jobInfrastructureType`<sup>Required</sup> <a name="jobInfrastructureType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureType"></a>

```typescript
public readonly jobInfrastructureType: string;
```

- *Type:* string

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatascienceJobJobInfrastructureConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a>

---


### DatascienceJobJobLogConfigurationDetailsOutputReference <a name="DatascienceJobJobLogConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

new datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetEnableAutoLogCreation">resetEnableAutoLogCreation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetLogGroupId">resetLogGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetLogId">resetLogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableAutoLogCreation` <a name="resetEnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetEnableAutoLogCreation"></a>

```typescript
public resetEnableAutoLogCreation(): void
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetEnableLogging"></a>

```typescript
public resetEnableLogging(): void
```

##### `resetLogGroupId` <a name="resetLogGroupId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetLogGroupId"></a>

```typescript
public resetLogGroupId(): void
```

##### `resetLogId` <a name="resetLogId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetLogId"></a>

```typescript
public resetLogId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableAutoLogCreationInput">enableAutoLogCreationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableLoggingInput">enableLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logGroupIdInput">logGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logIdInput">logIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableAutoLogCreation">enableAutoLogCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logId">logId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableAutoLogCreationInput`<sup>Optional</sup> <a name="enableAutoLogCreationInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableAutoLogCreationInput"></a>

```typescript
public readonly enableAutoLogCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableLoggingInput"></a>

```typescript
public readonly enableLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logGroupIdInput"></a>

```typescript
public readonly logGroupIdInput: string;
```

- *Type:* string

---

##### `logIdInput`<sup>Optional</sup> <a name="logIdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logIdInput"></a>

```typescript
public readonly logIdInput: string;
```

- *Type:* string

---

##### `enableAutoLogCreation`<sup>Required</sup> <a name="enableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableAutoLogCreation"></a>

```typescript
public readonly enableAutoLogCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatascienceJobJobLogConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a>

---


### DatascienceJobJobStorageMountConfigurationDetailsListStructList <a name="DatascienceJobJobStorageMountConfigurationDetailsListStructList" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

new datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.get"></a>

```typescript
public get(index: number): DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatascienceJobJobStorageMountConfigurationDetailsListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>[]

---


### DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference <a name="DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

new datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetDestinationPath">resetDestinationPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetExportId">resetExportId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetMountTargetId">resetMountTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetDestinationPath` <a name="resetDestinationPath" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetDestinationPath"></a>

```typescript
public resetDestinationPath(): void
```

##### `resetExportId` <a name="resetExportId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetExportId"></a>

```typescript
public resetExportId(): void
```

##### `resetMountTargetId` <a name="resetMountTargetId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetMountTargetId"></a>

```typescript
public resetMountTargetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPrefix` <a name="resetPrefix" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryNameInput">destinationDirectoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPathInput">destinationPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.exportIdInput">exportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetIdInput">mountTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName">destinationDirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath">destinationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.exportId">exportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId">mountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `destinationDirectoryNameInput`<sup>Optional</sup> <a name="destinationDirectoryNameInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryNameInput"></a>

```typescript
public readonly destinationDirectoryNameInput: string;
```

- *Type:* string

---

##### `destinationPathInput`<sup>Optional</sup> <a name="destinationPathInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPathInput"></a>

```typescript
public readonly destinationPathInput: string;
```

- *Type:* string

---

##### `exportIdInput`<sup>Optional</sup> <a name="exportIdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.exportIdInput"></a>

```typescript
public readonly exportIdInput: string;
```

- *Type:* string

---

##### `mountTargetIdInput`<sup>Optional</sup> <a name="mountTargetIdInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetIdInput"></a>

```typescript
public readonly mountTargetIdInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `destinationDirectoryName`<sup>Required</sup> <a name="destinationDirectoryName" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName"></a>

```typescript
public readonly destinationDirectoryName: string;
```

- *Type:* string

---

##### `destinationPath`<sup>Required</sup> <a name="destinationPath" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

---

##### `exportId`<sup>Required</sup> <a name="exportId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.exportId"></a>

```typescript
public readonly exportId: string;
```

- *Type:* string

---

##### `mountTargetId`<sup>Required</sup> <a name="mountTargetId" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId"></a>

```typescript
public readonly mountTargetId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatascienceJobJobStorageMountConfigurationDetailsListStruct;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>

---


### DatascienceJobTimeoutsOutputReference <a name="DatascienceJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { datascienceJob } from 'rhizo-co-terraform-provider-oci'

new datascienceJob.DatascienceJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts">DatascienceJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatascienceJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts">DatascienceJobTimeouts</a>

---



