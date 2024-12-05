# `datascienceJobRun` Submodule <a name="`datascienceJobRun` Submodule" id="rhizo-co-terraform-provider-oci.datascienceJobRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatascienceJobRun <a name="DatascienceJobRun" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run oci_datascience_job_run}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

new datascienceJobRun.DatascienceJobRun(scope: Construct, id: string, config: DatascienceJobRunConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig">DatascienceJobRunConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig">DatascienceJobRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putJobConfigurationOverrideDetails">putJobConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putJobEnvironmentConfigurationOverrideDetails">putJobEnvironmentConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putJobLogConfigurationOverrideDetails">putJobLogConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetAsynchronous">resetAsynchronous</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetJobConfigurationOverrideDetails">resetJobConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetJobEnvironmentConfigurationOverrideDetails">resetJobEnvironmentConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetJobLogConfigurationOverrideDetails">resetJobLogConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetOpcParentRptUrl">resetOpcParentRptUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putJobConfigurationOverrideDetails` <a name="putJobConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putJobConfigurationOverrideDetails"></a>

```typescript
public putJobConfigurationOverrideDetails(value: DatascienceJobRunJobConfigurationOverrideDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putJobConfigurationOverrideDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails">DatascienceJobRunJobConfigurationOverrideDetails</a>

---

##### `putJobEnvironmentConfigurationOverrideDetails` <a name="putJobEnvironmentConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putJobEnvironmentConfigurationOverrideDetails"></a>

```typescript
public putJobEnvironmentConfigurationOverrideDetails(value: DatascienceJobRunJobEnvironmentConfigurationOverrideDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putJobEnvironmentConfigurationOverrideDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails">DatascienceJobRunJobEnvironmentConfigurationOverrideDetails</a>

---

##### `putJobLogConfigurationOverrideDetails` <a name="putJobLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putJobLogConfigurationOverrideDetails"></a>

```typescript
public putJobLogConfigurationOverrideDetails(value: DatascienceJobRunJobLogConfigurationOverrideDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putJobLogConfigurationOverrideDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails">DatascienceJobRunJobLogConfigurationOverrideDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putTimeouts"></a>

```typescript
public putTimeouts(value: DatascienceJobRunTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts">DatascienceJobRunTimeouts</a>

---

##### `resetAsynchronous` <a name="resetAsynchronous" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetAsynchronous"></a>

```typescript
public resetAsynchronous(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJobConfigurationOverrideDetails` <a name="resetJobConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetJobConfigurationOverrideDetails"></a>

```typescript
public resetJobConfigurationOverrideDetails(): void
```

##### `resetJobEnvironmentConfigurationOverrideDetails` <a name="resetJobEnvironmentConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetJobEnvironmentConfigurationOverrideDetails"></a>

```typescript
public resetJobEnvironmentConfigurationOverrideDetails(): void
```

##### `resetJobLogConfigurationOverrideDetails` <a name="resetJobLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetJobLogConfigurationOverrideDetails"></a>

```typescript
public resetJobLogConfigurationOverrideDetails(): void
```

##### `resetOpcParentRptUrl` <a name="resetOpcParentRptUrl" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetOpcParentRptUrl"></a>

```typescript
public resetOpcParentRptUrl(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatascienceJobRun resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.isConstruct"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

datascienceJobRun.DatascienceJobRun.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.isTerraformElement"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

datascienceJobRun.DatascienceJobRun.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.isTerraformResource"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

datascienceJobRun.DatascienceJobRun.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.generateConfigForImport"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

datascienceJobRun.DatascienceJobRun.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatascienceJobRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatascienceJobRun to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatascienceJobRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatascienceJobRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobConfigurationOverrideDetails">jobConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference">DatascienceJobRunJobConfigurationOverrideDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobEnvironmentConfigurationOverrideDetails">jobEnvironmentConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference">DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobInfrastructureConfigurationDetails">jobInfrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList">DatascienceJobRunJobInfrastructureConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobLogConfigurationOverrideDetails">jobLogConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference">DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobStorageMountConfigurationDetailsList">jobStorageMountConfigurationDetailsList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList">DatascienceJobRunJobStorageMountConfigurationDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.logDetails">logDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList">DatascienceJobRunLogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeAccepted">timeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference">DatascienceJobRunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.asynchronousInput">asynchronousInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobConfigurationOverrideDetailsInput">jobConfigurationOverrideDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails">DatascienceJobRunJobConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobEnvironmentConfigurationOverrideDetailsInput">jobEnvironmentConfigurationOverrideDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails">DatascienceJobRunJobEnvironmentConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobIdInput">jobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobLogConfigurationOverrideDetailsInput">jobLogConfigurationOverrideDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails">DatascienceJobRunJobLogConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.opcParentRptUrlInput">opcParentRptUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts">DatascienceJobRunTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.asynchronous">asynchronous</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.opcParentRptUrl">opcParentRptUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `jobConfigurationOverrideDetails`<sup>Required</sup> <a name="jobConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobConfigurationOverrideDetails"></a>

```typescript
public readonly jobConfigurationOverrideDetails: DatascienceJobRunJobConfigurationOverrideDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference">DatascienceJobRunJobConfigurationOverrideDetailsOutputReference</a>

---

##### `jobEnvironmentConfigurationOverrideDetails`<sup>Required</sup> <a name="jobEnvironmentConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobEnvironmentConfigurationOverrideDetails"></a>

```typescript
public readonly jobEnvironmentConfigurationOverrideDetails: DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference">DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference</a>

---

##### `jobInfrastructureConfigurationDetails`<sup>Required</sup> <a name="jobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobInfrastructureConfigurationDetails"></a>

```typescript
public readonly jobInfrastructureConfigurationDetails: DatascienceJobRunJobInfrastructureConfigurationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList">DatascienceJobRunJobInfrastructureConfigurationDetailsList</a>

---

##### `jobLogConfigurationOverrideDetails`<sup>Required</sup> <a name="jobLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobLogConfigurationOverrideDetails"></a>

```typescript
public readonly jobLogConfigurationOverrideDetails: DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference">DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference</a>

---

##### `jobStorageMountConfigurationDetailsList`<sup>Required</sup> <a name="jobStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobStorageMountConfigurationDetailsList"></a>

```typescript
public readonly jobStorageMountConfigurationDetailsList: DatascienceJobRunJobStorageMountConfigurationDetailsListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList">DatascienceJobRunJobStorageMountConfigurationDetailsListStructList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `logDetails`<sup>Required</sup> <a name="logDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.logDetails"></a>

```typescript
public readonly logDetails: DatascienceJobRunLogDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList">DatascienceJobRunLogDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeAccepted`<sup>Required</sup> <a name="timeAccepted" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeAccepted"></a>

```typescript
public readonly timeAccepted: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeouts"></a>

```typescript
public readonly timeouts: DatascienceJobRunTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference">DatascienceJobRunTimeoutsOutputReference</a>

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `asynchronousInput`<sup>Optional</sup> <a name="asynchronousInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.asynchronousInput"></a>

```typescript
public readonly asynchronousInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jobConfigurationOverrideDetailsInput`<sup>Optional</sup> <a name="jobConfigurationOverrideDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobConfigurationOverrideDetailsInput"></a>

```typescript
public readonly jobConfigurationOverrideDetailsInput: DatascienceJobRunJobConfigurationOverrideDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails">DatascienceJobRunJobConfigurationOverrideDetails</a>

---

##### `jobEnvironmentConfigurationOverrideDetailsInput`<sup>Optional</sup> <a name="jobEnvironmentConfigurationOverrideDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobEnvironmentConfigurationOverrideDetailsInput"></a>

```typescript
public readonly jobEnvironmentConfigurationOverrideDetailsInput: DatascienceJobRunJobEnvironmentConfigurationOverrideDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails">DatascienceJobRunJobEnvironmentConfigurationOverrideDetails</a>

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobIdInput"></a>

```typescript
public readonly jobIdInput: string;
```

- *Type:* string

---

##### `jobLogConfigurationOverrideDetailsInput`<sup>Optional</sup> <a name="jobLogConfigurationOverrideDetailsInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobLogConfigurationOverrideDetailsInput"></a>

```typescript
public readonly jobLogConfigurationOverrideDetailsInput: DatascienceJobRunJobLogConfigurationOverrideDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails">DatascienceJobRunJobLogConfigurationOverrideDetails</a>

---

##### `opcParentRptUrlInput`<sup>Optional</sup> <a name="opcParentRptUrlInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.opcParentRptUrlInput"></a>

```typescript
public readonly opcParentRptUrlInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatascienceJobRunTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts">DatascienceJobRunTimeouts</a>

---

##### `asynchronous`<sup>Required</sup> <a name="asynchronous" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.asynchronous"></a>

```typescript
public readonly asynchronous: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `opcParentRptUrl`<sup>Required</sup> <a name="opcParentRptUrl" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.opcParentRptUrl"></a>

```typescript
public readonly opcParentRptUrl: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRun.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatascienceJobRunConfig <a name="DatascienceJobRunConfig" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

const datascienceJobRunConfig: datascienceJobRun.DatascienceJobRunConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#compartment_id DatascienceJobRun#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.jobId">jobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#job_id DatascienceJobRun#job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#project_id DatascienceJobRun#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.asynchronous">asynchronous</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#asynchronous DatascienceJobRun#asynchronous}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#defined_tags DatascienceJobRun#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#display_name DatascienceJobRun#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#freeform_tags DatascienceJobRun#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#id DatascienceJobRun#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.jobConfigurationOverrideDetails">jobConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails">DatascienceJobRunJobConfigurationOverrideDetails</a></code> | job_configuration_override_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.jobEnvironmentConfigurationOverrideDetails">jobEnvironmentConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails">DatascienceJobRunJobEnvironmentConfigurationOverrideDetails</a></code> | job_environment_configuration_override_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.jobLogConfigurationOverrideDetails">jobLogConfigurationOverrideDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails">DatascienceJobRunJobLogConfigurationOverrideDetails</a></code> | job_log_configuration_override_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.opcParentRptUrl">opcParentRptUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#opc_parent_rpt_url DatascienceJobRun#opc_parent_rpt_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts">DatascienceJobRunTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#compartment_id DatascienceJobRun#compartment_id}.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#job_id DatascienceJobRun#job_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#project_id DatascienceJobRun#project_id}.

---

##### `asynchronous`<sup>Optional</sup> <a name="asynchronous" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.asynchronous"></a>

```typescript
public readonly asynchronous: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#asynchronous DatascienceJobRun#asynchronous}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#defined_tags DatascienceJobRun#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#display_name DatascienceJobRun#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#freeform_tags DatascienceJobRun#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#id DatascienceJobRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jobConfigurationOverrideDetails`<sup>Optional</sup> <a name="jobConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.jobConfigurationOverrideDetails"></a>

```typescript
public readonly jobConfigurationOverrideDetails: DatascienceJobRunJobConfigurationOverrideDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails">DatascienceJobRunJobConfigurationOverrideDetails</a>

job_configuration_override_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#job_configuration_override_details DatascienceJobRun#job_configuration_override_details}

---

##### `jobEnvironmentConfigurationOverrideDetails`<sup>Optional</sup> <a name="jobEnvironmentConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.jobEnvironmentConfigurationOverrideDetails"></a>

```typescript
public readonly jobEnvironmentConfigurationOverrideDetails: DatascienceJobRunJobEnvironmentConfigurationOverrideDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails">DatascienceJobRunJobEnvironmentConfigurationOverrideDetails</a>

job_environment_configuration_override_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#job_environment_configuration_override_details DatascienceJobRun#job_environment_configuration_override_details}

---

##### `jobLogConfigurationOverrideDetails`<sup>Optional</sup> <a name="jobLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.jobLogConfigurationOverrideDetails"></a>

```typescript
public readonly jobLogConfigurationOverrideDetails: DatascienceJobRunJobLogConfigurationOverrideDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails">DatascienceJobRunJobLogConfigurationOverrideDetails</a>

job_log_configuration_override_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#job_log_configuration_override_details DatascienceJobRun#job_log_configuration_override_details}

---

##### `opcParentRptUrl`<sup>Optional</sup> <a name="opcParentRptUrl" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.opcParentRptUrl"></a>

```typescript
public readonly opcParentRptUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#opc_parent_rpt_url DatascienceJobRun#opc_parent_rpt_url}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatascienceJobRunTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts">DatascienceJobRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#timeouts DatascienceJobRun#timeouts}

---

### DatascienceJobRunJobConfigurationOverrideDetails <a name="DatascienceJobRunJobConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

const datascienceJobRunJobConfigurationOverrideDetails: datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails.property.jobType">jobType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#job_type DatascienceJobRun#job_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails.property.commandLineArguments">commandLineArguments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#command_line_arguments DatascienceJobRun#command_line_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#environment_variables DatascienceJobRun#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#maximum_runtime_in_minutes DatascienceJobRun#maximum_runtime_in_minutes}. |

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails.property.jobType"></a>

```typescript
public readonly jobType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#job_type DatascienceJobRun#job_type}.

---

##### `commandLineArguments`<sup>Optional</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#command_line_arguments DatascienceJobRun#command_line_arguments}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#environment_variables DatascienceJobRun#environment_variables}.

---

##### `maximumRuntimeInMinutes`<sup>Optional</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails.property.maximumRuntimeInMinutes"></a>

```typescript
public readonly maximumRuntimeInMinutes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#maximum_runtime_in_minutes DatascienceJobRun#maximum_runtime_in_minutes}.

---

### DatascienceJobRunJobEnvironmentConfigurationOverrideDetails <a name="DatascienceJobRunJobEnvironmentConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

const datascienceJobRunJobEnvironmentConfigurationOverrideDetails: datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#image DatascienceJobRun#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.jobEnvironmentType">jobEnvironmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#job_environment_type DatascienceJobRun#job_environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.cmd">cmd</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#cmd DatascienceJobRun#cmd}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.entrypoint">entrypoint</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#entrypoint DatascienceJobRun#entrypoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.imageDigest">imageDigest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#image_digest DatascienceJobRun#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.imageSignatureId">imageSignatureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#image_signature_id DatascienceJobRun#image_signature_id}. |

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#image DatascienceJobRun#image}.

---

##### `jobEnvironmentType`<sup>Required</sup> <a name="jobEnvironmentType" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.jobEnvironmentType"></a>

```typescript
public readonly jobEnvironmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#job_environment_type DatascienceJobRun#job_environment_type}.

---

##### `cmd`<sup>Optional</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.cmd"></a>

```typescript
public readonly cmd: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#cmd DatascienceJobRun#cmd}.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.entrypoint"></a>

```typescript
public readonly entrypoint: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#entrypoint DatascienceJobRun#entrypoint}.

---

##### `imageDigest`<sup>Optional</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#image_digest DatascienceJobRun#image_digest}.

---

##### `imageSignatureId`<sup>Optional</sup> <a name="imageSignatureId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails.property.imageSignatureId"></a>

```typescript
public readonly imageSignatureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#image_signature_id DatascienceJobRun#image_signature_id}.

---

### DatascienceJobRunJobInfrastructureConfigurationDetails <a name="DatascienceJobRunJobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetails.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

const datascienceJobRunJobInfrastructureConfigurationDetails: datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetails = { ... }
```


### DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails <a name="DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

const datascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails: datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails = { ... }
```


### DatascienceJobRunJobLogConfigurationOverrideDetails <a name="DatascienceJobRunJobLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

const datascienceJobRunJobLogConfigurationOverrideDetails: datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails.property.enableAutoLogCreation">enableAutoLogCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#enable_auto_log_creation DatascienceJobRun#enable_auto_log_creation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#enable_logging DatascienceJobRun#enable_logging}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails.property.logGroupId">logGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#log_group_id DatascienceJobRun#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails.property.logId">logId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#log_id DatascienceJobRun#log_id}. |

---

##### `enableAutoLogCreation`<sup>Optional</sup> <a name="enableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails.property.enableAutoLogCreation"></a>

```typescript
public readonly enableAutoLogCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#enable_auto_log_creation DatascienceJobRun#enable_auto_log_creation}.

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#enable_logging DatascienceJobRun#enable_logging}.

---

##### `logGroupId`<sup>Optional</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#log_group_id DatascienceJobRun#log_group_id}.

---

##### `logId`<sup>Optional</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#log_id DatascienceJobRun#log_id}.

---

### DatascienceJobRunJobStorageMountConfigurationDetailsListStruct <a name="DatascienceJobRunJobStorageMountConfigurationDetailsListStruct" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStruct.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

const datascienceJobRunJobStorageMountConfigurationDetailsListStruct: datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStruct = { ... }
```


### DatascienceJobRunLogDetails <a name="DatascienceJobRunLogDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetails.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

const datascienceJobRunLogDetails: datascienceJobRun.DatascienceJobRunLogDetails = { ... }
```


### DatascienceJobRunTimeouts <a name="DatascienceJobRunTimeouts" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

const datascienceJobRunTimeouts: datascienceJobRun.DatascienceJobRunTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#create DatascienceJobRun#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#delete DatascienceJobRun#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#update DatascienceJobRun#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#create DatascienceJobRun#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#delete DatascienceJobRun#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job_run#update DatascienceJobRun#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatascienceJobRunJobConfigurationOverrideDetailsOutputReference <a name="DatascienceJobRunJobConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

new datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resetCommandLineArguments">resetCommandLineArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resetMaximumRuntimeInMinutes">resetMaximumRuntimeInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommandLineArguments` <a name="resetCommandLineArguments" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resetCommandLineArguments"></a>

```typescript
public resetCommandLineArguments(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetMaximumRuntimeInMinutes` <a name="resetMaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resetMaximumRuntimeInMinutes"></a>

```typescript
public resetMaximumRuntimeInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.commandLineArgumentsInput">commandLineArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.jobTypeInput">jobTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutesInput">maximumRuntimeInMinutesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.commandLineArguments">commandLineArguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.jobType">jobType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails">DatascienceJobRunJobConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commandLineArgumentsInput`<sup>Optional</sup> <a name="commandLineArgumentsInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.commandLineArgumentsInput"></a>

```typescript
public readonly commandLineArgumentsInput: string;
```

- *Type:* string

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `jobTypeInput`<sup>Optional</sup> <a name="jobTypeInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.jobTypeInput"></a>

```typescript
public readonly jobTypeInput: string;
```

- *Type:* string

---

##### `maximumRuntimeInMinutesInput`<sup>Optional</sup> <a name="maximumRuntimeInMinutesInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutesInput"></a>

```typescript
public readonly maximumRuntimeInMinutesInput: string;
```

- *Type:* string

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.commandLineArguments"></a>

```typescript
public readonly commandLineArguments: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.jobType"></a>

```typescript
public readonly jobType: string;
```

- *Type:* string

---

##### `maximumRuntimeInMinutes`<sup>Required</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```typescript
public readonly maximumRuntimeInMinutes: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatascienceJobRunJobConfigurationOverrideDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobConfigurationOverrideDetails">DatascienceJobRunJobConfigurationOverrideDetails</a>

---


### DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference <a name="DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

new datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resetCmd">resetCmd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resetEntrypoint">resetEntrypoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resetImageDigest">resetImageDigest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resetImageSignatureId">resetImageSignatureId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCmd` <a name="resetCmd" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resetCmd"></a>

```typescript
public resetCmd(): void
```

##### `resetEntrypoint` <a name="resetEntrypoint" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resetEntrypoint"></a>

```typescript
public resetEntrypoint(): void
```

##### `resetImageDigest` <a name="resetImageDigest" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resetImageDigest"></a>

```typescript
public resetImageDigest(): void
```

##### `resetImageSignatureId` <a name="resetImageSignatureId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resetImageSignatureId"></a>

```typescript
public resetImageSignatureId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.cmdInput">cmdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.entrypointInput">entrypointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageDigestInput">imageDigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageSignatureIdInput">imageSignatureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.jobEnvironmentTypeInput">jobEnvironmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.cmd">cmd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.entrypoint">entrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageDigest">imageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageSignatureId">imageSignatureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.jobEnvironmentType">jobEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails">DatascienceJobRunJobEnvironmentConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cmdInput`<sup>Optional</sup> <a name="cmdInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.cmdInput"></a>

```typescript
public readonly cmdInput: string[];
```

- *Type:* string[]

---

##### `entrypointInput`<sup>Optional</sup> <a name="entrypointInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.entrypointInput"></a>

```typescript
public readonly entrypointInput: string[];
```

- *Type:* string[]

---

##### `imageDigestInput`<sup>Optional</sup> <a name="imageDigestInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageDigestInput"></a>

```typescript
public readonly imageDigestInput: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `imageSignatureIdInput`<sup>Optional</sup> <a name="imageSignatureIdInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageSignatureIdInput"></a>

```typescript
public readonly imageSignatureIdInput: string;
```

- *Type:* string

---

##### `jobEnvironmentTypeInput`<sup>Optional</sup> <a name="jobEnvironmentTypeInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.jobEnvironmentTypeInput"></a>

```typescript
public readonly jobEnvironmentTypeInput: string;
```

- *Type:* string

---

##### `cmd`<sup>Required</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.cmd"></a>

```typescript
public readonly cmd: string[];
```

- *Type:* string[]

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.entrypoint"></a>

```typescript
public readonly entrypoint: string[];
```

- *Type:* string[]

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

---

##### `imageSignatureId`<sup>Required</sup> <a name="imageSignatureId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageSignatureId"></a>

```typescript
public readonly imageSignatureId: string;
```

- *Type:* string

---

##### `jobEnvironmentType`<sup>Required</sup> <a name="jobEnvironmentType" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.jobEnvironmentType"></a>

```typescript
public readonly jobEnvironmentType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatascienceJobRunJobEnvironmentConfigurationOverrideDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobEnvironmentConfigurationOverrideDetails">DatascienceJobRunJobEnvironmentConfigurationOverrideDetails</a>

---


### DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList <a name="DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

new datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.get"></a>

```typescript
public get(index: number): DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference <a name="DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

new datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a>

---


### DatascienceJobRunJobInfrastructureConfigurationDetailsList <a name="DatascienceJobRunJobInfrastructureConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

new datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.get"></a>

```typescript
public get(index: number): DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference <a name="DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

new datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">blockStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureType">jobInfrastructureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetails">jobShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList">DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetails">DatascienceJobRunJobInfrastructureConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockStorageSizeInGbs`<sup>Required</sup> <a name="blockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```typescript
public readonly blockStorageSizeInGbs: number;
```

- *Type:* number

---

##### `jobInfrastructureType`<sup>Required</sup> <a name="jobInfrastructureType" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureType"></a>

```typescript
public readonly jobInfrastructureType: string;
```

- *Type:* string

---

##### `jobShapeConfigDetails`<sup>Required</sup> <a name="jobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetails"></a>

```typescript
public readonly jobShapeConfigDetails: DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList">DatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList</a>

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatascienceJobRunJobInfrastructureConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobInfrastructureConfigurationDetails">DatascienceJobRunJobInfrastructureConfigurationDetails</a>

---


### DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference <a name="DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

new datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resetEnableAutoLogCreation">resetEnableAutoLogCreation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resetLogGroupId">resetLogGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resetLogId">resetLogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableAutoLogCreation` <a name="resetEnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resetEnableAutoLogCreation"></a>

```typescript
public resetEnableAutoLogCreation(): void
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resetEnableLogging"></a>

```typescript
public resetEnableLogging(): void
```

##### `resetLogGroupId` <a name="resetLogGroupId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resetLogGroupId"></a>

```typescript
public resetLogGroupId(): void
```

##### `resetLogId` <a name="resetLogId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resetLogId"></a>

```typescript
public resetLogId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreationInput">enableAutoLogCreationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableLoggingInput">enableLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logGroupIdInput">logGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logIdInput">logIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation">enableAutoLogCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logId">logId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails">DatascienceJobRunJobLogConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableAutoLogCreationInput`<sup>Optional</sup> <a name="enableAutoLogCreationInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreationInput"></a>

```typescript
public readonly enableAutoLogCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableLoggingInput"></a>

```typescript
public readonly enableLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logGroupIdInput"></a>

```typescript
public readonly logGroupIdInput: string;
```

- *Type:* string

---

##### `logIdInput`<sup>Optional</sup> <a name="logIdInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logIdInput"></a>

```typescript
public readonly logIdInput: string;
```

- *Type:* string

---

##### `enableAutoLogCreation`<sup>Required</sup> <a name="enableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation"></a>

```typescript
public readonly enableAutoLogCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatascienceJobRunJobLogConfigurationOverrideDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobLogConfigurationOverrideDetails">DatascienceJobRunJobLogConfigurationOverrideDetails</a>

---


### DatascienceJobRunJobStorageMountConfigurationDetailsListStructList <a name="DatascienceJobRunJobStorageMountConfigurationDetailsListStructList" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

new datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.get"></a>

```typescript
public get(index: number): DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference <a name="DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

new datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName">destinationDirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath">destinationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.exportId">exportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId">mountTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStruct">DatascienceJobRunJobStorageMountConfigurationDetailsListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `destinationDirectoryName`<sup>Required</sup> <a name="destinationDirectoryName" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName"></a>

```typescript
public readonly destinationDirectoryName: string;
```

- *Type:* string

---

##### `destinationPath`<sup>Required</sup> <a name="destinationPath" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath"></a>

```typescript
public readonly destinationPath: string;
```

- *Type:* string

---

##### `exportId`<sup>Required</sup> <a name="exportId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.exportId"></a>

```typescript
public readonly exportId: string;
```

- *Type:* string

---

##### `mountTargetId`<sup>Required</sup> <a name="mountTargetId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId"></a>

```typescript
public readonly mountTargetId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatascienceJobRunJobStorageMountConfigurationDetailsListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunJobStorageMountConfigurationDetailsListStruct">DatascienceJobRunJobStorageMountConfigurationDetailsListStruct</a>

---


### DatascienceJobRunLogDetailsList <a name="DatascienceJobRunLogDetailsList" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

new datascienceJobRun.DatascienceJobRunLogDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.get"></a>

```typescript
public get(index: number): DatascienceJobRunLogDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatascienceJobRunLogDetailsOutputReference <a name="DatascienceJobRunLogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

new datascienceJobRun.DatascienceJobRunLogDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.logId">logId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetails">DatascienceJobRunLogDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatascienceJobRunLogDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunLogDetails">DatascienceJobRunLogDetails</a>

---


### DatascienceJobRunTimeoutsOutputReference <a name="DatascienceJobRunTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.Initializer"></a>

```typescript
import { datascienceJobRun } from 'rhizo-co-terraform-provider-oci'

new datascienceJobRun.DatascienceJobRunTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts">DatascienceJobRunTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatascienceJobRunTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.datascienceJobRun.DatascienceJobRunTimeouts">DatascienceJobRunTimeouts</a>

---



