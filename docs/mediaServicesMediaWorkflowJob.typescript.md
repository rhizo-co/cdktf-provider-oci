# `mediaServicesMediaWorkflowJob` Submodule <a name="`mediaServicesMediaWorkflowJob` Submodule" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesMediaWorkflowJob <a name="MediaServicesMediaWorkflowJob" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job oci_media_services_media_workflow_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.Initializer"></a>

```typescript
import { mediaServicesMediaWorkflowJob } from 'rhizo-co-terraform-provider-oci'

new mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob(scope: Construct, id: string, config: MediaServicesMediaWorkflowJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig">MediaServicesMediaWorkflowJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig">MediaServicesMediaWorkflowJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.putLocks">putLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetIsLockOverride">resetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetMediaWorkflowConfigurationIds">resetMediaWorkflowConfigurationIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetMediaWorkflowId">resetMediaWorkflowId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetMediaWorkflowName">resetMediaWorkflowName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocks` <a name="putLocks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.putLocks"></a>

```typescript
public putLocks(value: IResolvable | MediaServicesMediaWorkflowJobLocks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.putLocks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks">MediaServicesMediaWorkflowJobLocks</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.putTimeouts"></a>

```typescript
public putTimeouts(value: MediaServicesMediaWorkflowJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeouts">MediaServicesMediaWorkflowJobTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsLockOverride` <a name="resetIsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetIsLockOverride"></a>

```typescript
public resetIsLockOverride(): void
```

##### `resetLocks` <a name="resetLocks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetLocks"></a>

```typescript
public resetLocks(): void
```

##### `resetMediaWorkflowConfigurationIds` <a name="resetMediaWorkflowConfigurationIds" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetMediaWorkflowConfigurationIds"></a>

```typescript
public resetMediaWorkflowConfigurationIds(): void
```

##### `resetMediaWorkflowId` <a name="resetMediaWorkflowId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetMediaWorkflowId"></a>

```typescript
public resetMediaWorkflowId(): void
```

##### `resetMediaWorkflowName` <a name="resetMediaWorkflowName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetMediaWorkflowName"></a>

```typescript
public resetMediaWorkflowName(): void
```

##### `resetParameters` <a name="resetParameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MediaServicesMediaWorkflowJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.isConstruct"></a>

```typescript
import { mediaServicesMediaWorkflowJob } from 'rhizo-co-terraform-provider-oci'

mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.isTerraformElement"></a>

```typescript
import { mediaServicesMediaWorkflowJob } from 'rhizo-co-terraform-provider-oci'

mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.isTerraformResource"></a>

```typescript
import { mediaServicesMediaWorkflowJob } from 'rhizo-co-terraform-provider-oci'

mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.generateConfigForImport"></a>

```typescript
import { mediaServicesMediaWorkflowJob } from 'rhizo-co-terraform-provider-oci'

mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MediaServicesMediaWorkflowJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaServicesMediaWorkflowJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaServicesMediaWorkflowJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MediaServicesMediaWorkflowJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList">MediaServicesMediaWorkflowJobLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.outputs">outputs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList">MediaServicesMediaWorkflowJobOutputsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.runnable">runnable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.taskLifecycleState">taskLifecycleState</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList">MediaServicesMediaWorkflowJobTaskLifecycleStateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference">MediaServicesMediaWorkflowJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.isLockOverrideInput">isLockOverrideInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.locksInput">locksInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks">MediaServicesMediaWorkflowJobLocks</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.mediaWorkflowConfigurationIdsInput">mediaWorkflowConfigurationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.mediaWorkflowIdInput">mediaWorkflowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.mediaWorkflowNameInput">mediaWorkflowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeouts">MediaServicesMediaWorkflowJobTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.workflowIdentifierTypeInput">workflowIdentifierTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.isLockOverride">isLockOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.mediaWorkflowConfigurationIds">mediaWorkflowConfigurationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.mediaWorkflowId">mediaWorkflowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.mediaWorkflowName">mediaWorkflowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.workflowIdentifierType">workflowIdentifierType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.locks"></a>

```typescript
public readonly locks: MediaServicesMediaWorkflowJobLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList">MediaServicesMediaWorkflowJobLocksList</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.outputs"></a>

```typescript
public readonly outputs: MediaServicesMediaWorkflowJobOutputsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList">MediaServicesMediaWorkflowJobOutputsList</a>

---

##### `runnable`<sup>Required</sup> <a name="runnable" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.runnable"></a>

```typescript
public readonly runnable: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `taskLifecycleState`<sup>Required</sup> <a name="taskLifecycleState" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.taskLifecycleState"></a>

```typescript
public readonly taskLifecycleState: MediaServicesMediaWorkflowJobTaskLifecycleStateList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList">MediaServicesMediaWorkflowJobTaskLifecycleStateList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.timeouts"></a>

```typescript
public readonly timeouts: MediaServicesMediaWorkflowJobTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference">MediaServicesMediaWorkflowJobTimeoutsOutputReference</a>

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isLockOverrideInput`<sup>Optional</sup> <a name="isLockOverrideInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.isLockOverrideInput"></a>

```typescript
public readonly isLockOverrideInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.locksInput"></a>

```typescript
public readonly locksInput: IResolvable | MediaServicesMediaWorkflowJobLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks">MediaServicesMediaWorkflowJobLocks</a>[]

---

##### `mediaWorkflowConfigurationIdsInput`<sup>Optional</sup> <a name="mediaWorkflowConfigurationIdsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.mediaWorkflowConfigurationIdsInput"></a>

```typescript
public readonly mediaWorkflowConfigurationIdsInput: string[];
```

- *Type:* string[]

---

##### `mediaWorkflowIdInput`<sup>Optional</sup> <a name="mediaWorkflowIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.mediaWorkflowIdInput"></a>

```typescript
public readonly mediaWorkflowIdInput: string;
```

- *Type:* string

---

##### `mediaWorkflowNameInput`<sup>Optional</sup> <a name="mediaWorkflowNameInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.mediaWorkflowNameInput"></a>

```typescript
public readonly mediaWorkflowNameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MediaServicesMediaWorkflowJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeouts">MediaServicesMediaWorkflowJobTimeouts</a>

---

##### `workflowIdentifierTypeInput`<sup>Optional</sup> <a name="workflowIdentifierTypeInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.workflowIdentifierTypeInput"></a>

```typescript
public readonly workflowIdentifierTypeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mediaWorkflowConfigurationIds`<sup>Required</sup> <a name="mediaWorkflowConfigurationIds" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.mediaWorkflowConfigurationIds"></a>

```typescript
public readonly mediaWorkflowConfigurationIds: string[];
```

- *Type:* string[]

---

##### `mediaWorkflowId`<sup>Required</sup> <a name="mediaWorkflowId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.mediaWorkflowId"></a>

```typescript
public readonly mediaWorkflowId: string;
```

- *Type:* string

---

##### `mediaWorkflowName`<sup>Required</sup> <a name="mediaWorkflowName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.mediaWorkflowName"></a>

```typescript
public readonly mediaWorkflowName: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `workflowIdentifierType`<sup>Required</sup> <a name="workflowIdentifierType" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.workflowIdentifierType"></a>

```typescript
public readonly workflowIdentifierType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesMediaWorkflowJobConfig <a name="MediaServicesMediaWorkflowJobConfig" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.Initializer"></a>

```typescript
import { mediaServicesMediaWorkflowJob } from 'rhizo-co-terraform-provider-oci'

const mediaServicesMediaWorkflowJobConfig: mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#compartment_id MediaServicesMediaWorkflowJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.workflowIdentifierType">workflowIdentifierType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#workflow_identifier_type MediaServicesMediaWorkflowJob#workflow_identifier_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#defined_tags MediaServicesMediaWorkflowJob#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#display_name MediaServicesMediaWorkflowJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#freeform_tags MediaServicesMediaWorkflowJob#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#id MediaServicesMediaWorkflowJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.isLockOverride">isLockOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#is_lock_override MediaServicesMediaWorkflowJob#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.locks">locks</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks">MediaServicesMediaWorkflowJobLocks</a>[]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.mediaWorkflowConfigurationIds">mediaWorkflowConfigurationIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#media_workflow_configuration_ids MediaServicesMediaWorkflowJob#media_workflow_configuration_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.mediaWorkflowId">mediaWorkflowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#media_workflow_id MediaServicesMediaWorkflowJob#media_workflow_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.mediaWorkflowName">mediaWorkflowName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#media_workflow_name MediaServicesMediaWorkflowJob#media_workflow_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#parameters MediaServicesMediaWorkflowJob#parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeouts">MediaServicesMediaWorkflowJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#compartment_id MediaServicesMediaWorkflowJob#compartment_id}.

---

##### `workflowIdentifierType`<sup>Required</sup> <a name="workflowIdentifierType" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.workflowIdentifierType"></a>

```typescript
public readonly workflowIdentifierType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#workflow_identifier_type MediaServicesMediaWorkflowJob#workflow_identifier_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#defined_tags MediaServicesMediaWorkflowJob#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#display_name MediaServicesMediaWorkflowJob#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#freeform_tags MediaServicesMediaWorkflowJob#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#id MediaServicesMediaWorkflowJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#is_lock_override MediaServicesMediaWorkflowJob#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.locks"></a>

```typescript
public readonly locks: IResolvable | MediaServicesMediaWorkflowJobLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks">MediaServicesMediaWorkflowJobLocks</a>[]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#locks MediaServicesMediaWorkflowJob#locks}

---

##### `mediaWorkflowConfigurationIds`<sup>Optional</sup> <a name="mediaWorkflowConfigurationIds" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.mediaWorkflowConfigurationIds"></a>

```typescript
public readonly mediaWorkflowConfigurationIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#media_workflow_configuration_ids MediaServicesMediaWorkflowJob#media_workflow_configuration_ids}.

---

##### `mediaWorkflowId`<sup>Optional</sup> <a name="mediaWorkflowId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.mediaWorkflowId"></a>

```typescript
public readonly mediaWorkflowId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#media_workflow_id MediaServicesMediaWorkflowJob#media_workflow_id}.

---

##### `mediaWorkflowName`<sup>Optional</sup> <a name="mediaWorkflowName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.mediaWorkflowName"></a>

```typescript
public readonly mediaWorkflowName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#media_workflow_name MediaServicesMediaWorkflowJob#media_workflow_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#parameters MediaServicesMediaWorkflowJob#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MediaServicesMediaWorkflowJobTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeouts">MediaServicesMediaWorkflowJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#timeouts MediaServicesMediaWorkflowJob#timeouts}

---

### MediaServicesMediaWorkflowJobLocks <a name="MediaServicesMediaWorkflowJobLocks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks.Initializer"></a>

```typescript
import { mediaServicesMediaWorkflowJob } from 'rhizo-co-terraform-provider-oci'

const mediaServicesMediaWorkflowJobLocks: mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#compartment_id MediaServicesMediaWorkflowJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#type MediaServicesMediaWorkflowJob#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks.property.message">message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#message MediaServicesMediaWorkflowJob#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#related_resource_id MediaServicesMediaWorkflowJob#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks.property.timeCreated">timeCreated</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#time_created MediaServicesMediaWorkflowJob#time_created}. |

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#compartment_id MediaServicesMediaWorkflowJob#compartment_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#type MediaServicesMediaWorkflowJob#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#message MediaServicesMediaWorkflowJob#message}.

---

##### `relatedResourceId`<sup>Optional</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#related_resource_id MediaServicesMediaWorkflowJob#related_resource_id}.

---

##### `timeCreated`<sup>Optional</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#time_created MediaServicesMediaWorkflowJob#time_created}.

---

### MediaServicesMediaWorkflowJobOutputs <a name="MediaServicesMediaWorkflowJobOutputs" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputs.Initializer"></a>

```typescript
import { mediaServicesMediaWorkflowJob } from 'rhizo-co-terraform-provider-oci'

const mediaServicesMediaWorkflowJobOutputs: mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputs = { ... }
```


### MediaServicesMediaWorkflowJobTaskLifecycleState <a name="MediaServicesMediaWorkflowJobTaskLifecycleState" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleState"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleState.Initializer"></a>

```typescript
import { mediaServicesMediaWorkflowJob } from 'rhizo-co-terraform-provider-oci'

const mediaServicesMediaWorkflowJobTaskLifecycleState: mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleState = { ... }
```


### MediaServicesMediaWorkflowJobTimeouts <a name="MediaServicesMediaWorkflowJobTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeouts.Initializer"></a>

```typescript
import { mediaServicesMediaWorkflowJob } from 'rhizo-co-terraform-provider-oci'

const mediaServicesMediaWorkflowJobTimeouts: mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#create MediaServicesMediaWorkflowJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#delete MediaServicesMediaWorkflowJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#update MediaServicesMediaWorkflowJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#create MediaServicesMediaWorkflowJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#delete MediaServicesMediaWorkflowJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow_job#update MediaServicesMediaWorkflowJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesMediaWorkflowJobLocksList <a name="MediaServicesMediaWorkflowJobLocksList" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.Initializer"></a>

```typescript
import { mediaServicesMediaWorkflowJob } from 'rhizo-co-terraform-provider-oci'

new mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.get"></a>

```typescript
public get(index: number): MediaServicesMediaWorkflowJobLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks">MediaServicesMediaWorkflowJobLocks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaServicesMediaWorkflowJobLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks">MediaServicesMediaWorkflowJobLocks</a>[]

---


### MediaServicesMediaWorkflowJobLocksOutputReference <a name="MediaServicesMediaWorkflowJobLocksOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.Initializer"></a>

```typescript
import { mediaServicesMediaWorkflowJob } from 'rhizo-co-terraform-provider-oci'

new mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.resetRelatedResourceId">resetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.resetTimeCreated">resetTimeCreated</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```

##### `resetRelatedResourceId` <a name="resetRelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.resetRelatedResourceId"></a>

```typescript
public resetRelatedResourceId(): void
```

##### `resetTimeCreated` <a name="resetTimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.resetTimeCreated"></a>

```typescript
public resetTimeCreated(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.relatedResourceIdInput">relatedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.timeCreatedInput">timeCreatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks">MediaServicesMediaWorkflowJobLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `relatedResourceIdInput`<sup>Optional</sup> <a name="relatedResourceIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.relatedResourceIdInput"></a>

```typescript
public readonly relatedResourceIdInput: string;
```

- *Type:* string

---

##### `timeCreatedInput`<sup>Optional</sup> <a name="timeCreatedInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.timeCreatedInput"></a>

```typescript
public readonly timeCreatedInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaServicesMediaWorkflowJobLocks;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobLocks">MediaServicesMediaWorkflowJobLocks</a>

---


### MediaServicesMediaWorkflowJobOutputsList <a name="MediaServicesMediaWorkflowJobOutputsList" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.Initializer"></a>

```typescript
import { mediaServicesMediaWorkflowJob } from 'rhizo-co-terraform-provider-oci'

new mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.get"></a>

```typescript
public get(index: number): MediaServicesMediaWorkflowJobOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MediaServicesMediaWorkflowJobOutputsOutputReference <a name="MediaServicesMediaWorkflowJobOutputsOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.Initializer"></a>

```typescript
import { mediaServicesMediaWorkflowJob } from 'rhizo-co-terraform-provider-oci'

new mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.property.assetType">assetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputs">MediaServicesMediaWorkflowJobOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.property.assetType"></a>

```typescript
public readonly assetType: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaServicesMediaWorkflowJobOutputs;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobOutputs">MediaServicesMediaWorkflowJobOutputs</a>

---


### MediaServicesMediaWorkflowJobTaskLifecycleStateList <a name="MediaServicesMediaWorkflowJobTaskLifecycleStateList" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.Initializer"></a>

```typescript
import { mediaServicesMediaWorkflowJob } from 'rhizo-co-terraform-provider-oci'

new mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.get"></a>

```typescript
public get(index: number): MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference <a name="MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.Initializer"></a>

```typescript
import { mediaServicesMediaWorkflowJob } from 'rhizo-co-terraform-provider-oci'

new mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleState">MediaServicesMediaWorkflowJobTaskLifecycleState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaServicesMediaWorkflowJobTaskLifecycleState;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTaskLifecycleState">MediaServicesMediaWorkflowJobTaskLifecycleState</a>

---


### MediaServicesMediaWorkflowJobTimeoutsOutputReference <a name="MediaServicesMediaWorkflowJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { mediaServicesMediaWorkflowJob } from 'rhizo-co-terraform-provider-oci'

new mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeouts">MediaServicesMediaWorkflowJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaServicesMediaWorkflowJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflowJob.MediaServicesMediaWorkflowJobTimeouts">MediaServicesMediaWorkflowJobTimeouts</a>

---



