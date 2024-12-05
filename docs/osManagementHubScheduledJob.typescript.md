# `osManagementHubScheduledJob` Submodule <a name="`osManagementHubScheduledJob` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubScheduledJob <a name="OsManagementHubScheduledJob" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job oci_os_management_hub_scheduled_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

new osManagementHubScheduledJob.OsManagementHubScheduledJob(scope: Construct, id: string, config: OsManagementHubScheduledJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig">OsManagementHubScheduledJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig">OsManagementHubScheduledJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetIsManagedByAutonomousLinux">resetIsManagedByAutonomousLinux</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetIsSubcompartmentIncluded">resetIsSubcompartmentIncluded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetLifecycleStageIds">resetLifecycleStageIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetLocations">resetLocations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetManagedCompartmentIds">resetManagedCompartmentIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetManagedInstanceGroupIds">resetManagedInstanceGroupIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetManagedInstanceIds">resetManagedInstanceIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetRecurringRule">resetRecurringRule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetRetryIntervals">resetRetryIntervals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOperations` <a name="putOperations" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.putOperations"></a>

```typescript
public putOperations(value: IResolvable | OsManagementHubScheduledJobOperations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.putOperations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.putTimeouts"></a>

```typescript
public putTimeouts(value: OsManagementHubScheduledJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts">OsManagementHubScheduledJobTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsManagedByAutonomousLinux` <a name="resetIsManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetIsManagedByAutonomousLinux"></a>

```typescript
public resetIsManagedByAutonomousLinux(): void
```

##### `resetIsSubcompartmentIncluded` <a name="resetIsSubcompartmentIncluded" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetIsSubcompartmentIncluded"></a>

```typescript
public resetIsSubcompartmentIncluded(): void
```

##### `resetLifecycleStageIds` <a name="resetLifecycleStageIds" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetLifecycleStageIds"></a>

```typescript
public resetLifecycleStageIds(): void
```

##### `resetLocations` <a name="resetLocations" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetLocations"></a>

```typescript
public resetLocations(): void
```

##### `resetManagedCompartmentIds` <a name="resetManagedCompartmentIds" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetManagedCompartmentIds"></a>

```typescript
public resetManagedCompartmentIds(): void
```

##### `resetManagedInstanceGroupIds` <a name="resetManagedInstanceGroupIds" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetManagedInstanceGroupIds"></a>

```typescript
public resetManagedInstanceGroupIds(): void
```

##### `resetManagedInstanceIds` <a name="resetManagedInstanceIds" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetManagedInstanceIds"></a>

```typescript
public resetManagedInstanceIds(): void
```

##### `resetRecurringRule` <a name="resetRecurringRule" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetRecurringRule"></a>

```typescript
public resetRecurringRule(): void
```

##### `resetRetryIntervals` <a name="resetRetryIntervals" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetRetryIntervals"></a>

```typescript
public resetRetryIntervals(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubScheduledJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.isConstruct"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

osManagementHubScheduledJob.OsManagementHubScheduledJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.isTerraformElement"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

osManagementHubScheduledJob.OsManagementHubScheduledJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.isTerraformResource"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

osManagementHubScheduledJob.OsManagementHubScheduledJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.generateConfigForImport"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

osManagementHubScheduledJob.OsManagementHubScheduledJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OsManagementHubScheduledJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubScheduledJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubScheduledJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubScheduledJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isRestricted">isRestricted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.operations">operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList">OsManagementHubScheduledJobOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeLastExecution">timeLastExecution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference">OsManagementHubScheduledJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.workRequestIds">workRequestIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isManagedByAutonomousLinuxInput">isManagedByAutonomousLinuxInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isSubcompartmentIncludedInput">isSubcompartmentIncludedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.lifecycleStageIdsInput">lifecycleStageIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.locationsInput">locationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedCompartmentIdsInput">managedCompartmentIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedInstanceGroupIdsInput">managedInstanceGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedInstanceIdsInput">managedInstanceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.operationsInput">operationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.recurringRuleInput">recurringRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.retryIntervalsInput">retryIntervalsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.scheduleTypeInput">scheduleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeNextExecutionInput">timeNextExecutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts">OsManagementHubScheduledJobTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isManagedByAutonomousLinux">isManagedByAutonomousLinux</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isSubcompartmentIncluded">isSubcompartmentIncluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.lifecycleStageIds">lifecycleStageIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedCompartmentIds">managedCompartmentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedInstanceGroupIds">managedInstanceGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedInstanceIds">managedInstanceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.recurringRule">recurringRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.retryIntervals">retryIntervals</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.scheduleType">scheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeNextExecution">timeNextExecution</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `isRestricted`<sup>Required</sup> <a name="isRestricted" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isRestricted"></a>

```typescript
public readonly isRestricted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `operations`<sup>Required</sup> <a name="operations" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.operations"></a>

```typescript
public readonly operations: OsManagementHubScheduledJobOperationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList">OsManagementHubScheduledJobOperationsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastExecution`<sup>Required</sup> <a name="timeLastExecution" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeLastExecution"></a>

```typescript
public readonly timeLastExecution: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubScheduledJobTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference">OsManagementHubScheduledJobTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `workRequestIds`<sup>Required</sup> <a name="workRequestIds" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.workRequestIds"></a>

```typescript
public readonly workRequestIds: string[];
```

- *Type:* string[]

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isManagedByAutonomousLinuxInput`<sup>Optional</sup> <a name="isManagedByAutonomousLinuxInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isManagedByAutonomousLinuxInput"></a>

```typescript
public readonly isManagedByAutonomousLinuxInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSubcompartmentIncludedInput`<sup>Optional</sup> <a name="isSubcompartmentIncludedInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isSubcompartmentIncludedInput"></a>

```typescript
public readonly isSubcompartmentIncludedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lifecycleStageIdsInput`<sup>Optional</sup> <a name="lifecycleStageIdsInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.lifecycleStageIdsInput"></a>

```typescript
public readonly lifecycleStageIdsInput: string[];
```

- *Type:* string[]

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.locationsInput"></a>

```typescript
public readonly locationsInput: string[];
```

- *Type:* string[]

---

##### `managedCompartmentIdsInput`<sup>Optional</sup> <a name="managedCompartmentIdsInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedCompartmentIdsInput"></a>

```typescript
public readonly managedCompartmentIdsInput: string[];
```

- *Type:* string[]

---

##### `managedInstanceGroupIdsInput`<sup>Optional</sup> <a name="managedInstanceGroupIdsInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedInstanceGroupIdsInput"></a>

```typescript
public readonly managedInstanceGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `managedInstanceIdsInput`<sup>Optional</sup> <a name="managedInstanceIdsInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedInstanceIdsInput"></a>

```typescript
public readonly managedInstanceIdsInput: string[];
```

- *Type:* string[]

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.operationsInput"></a>

```typescript
public readonly operationsInput: IResolvable | OsManagementHubScheduledJobOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>[]

---

##### `recurringRuleInput`<sup>Optional</sup> <a name="recurringRuleInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.recurringRuleInput"></a>

```typescript
public readonly recurringRuleInput: string;
```

- *Type:* string

---

##### `retryIntervalsInput`<sup>Optional</sup> <a name="retryIntervalsInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.retryIntervalsInput"></a>

```typescript
public readonly retryIntervalsInput: number[];
```

- *Type:* number[]

---

##### `scheduleTypeInput`<sup>Optional</sup> <a name="scheduleTypeInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.scheduleTypeInput"></a>

```typescript
public readonly scheduleTypeInput: string;
```

- *Type:* string

---

##### `timeNextExecutionInput`<sup>Optional</sup> <a name="timeNextExecutionInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeNextExecutionInput"></a>

```typescript
public readonly timeNextExecutionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OsManagementHubScheduledJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts">OsManagementHubScheduledJobTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isManagedByAutonomousLinux`<sup>Required</sup> <a name="isManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isManagedByAutonomousLinux"></a>

```typescript
public readonly isManagedByAutonomousLinux: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSubcompartmentIncluded`<sup>Required</sup> <a name="isSubcompartmentIncluded" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.isSubcompartmentIncluded"></a>

```typescript
public readonly isSubcompartmentIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lifecycleStageIds`<sup>Required</sup> <a name="lifecycleStageIds" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.lifecycleStageIds"></a>

```typescript
public readonly lifecycleStageIds: string[];
```

- *Type:* string[]

---

##### `locations`<sup>Required</sup> <a name="locations" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `managedCompartmentIds`<sup>Required</sup> <a name="managedCompartmentIds" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedCompartmentIds"></a>

```typescript
public readonly managedCompartmentIds: string[];
```

- *Type:* string[]

---

##### `managedInstanceGroupIds`<sup>Required</sup> <a name="managedInstanceGroupIds" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedInstanceGroupIds"></a>

```typescript
public readonly managedInstanceGroupIds: string[];
```

- *Type:* string[]

---

##### `managedInstanceIds`<sup>Required</sup> <a name="managedInstanceIds" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.managedInstanceIds"></a>

```typescript
public readonly managedInstanceIds: string[];
```

- *Type:* string[]

---

##### `recurringRule`<sup>Required</sup> <a name="recurringRule" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.recurringRule"></a>

```typescript
public readonly recurringRule: string;
```

- *Type:* string

---

##### `retryIntervals`<sup>Required</sup> <a name="retryIntervals" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.retryIntervals"></a>

```typescript
public readonly retryIntervals: number[];
```

- *Type:* number[]

---

##### `scheduleType`<sup>Required</sup> <a name="scheduleType" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.scheduleType"></a>

```typescript
public readonly scheduleType: string;
```

- *Type:* string

---

##### `timeNextExecution`<sup>Required</sup> <a name="timeNextExecution" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.timeNextExecution"></a>

```typescript
public readonly timeNextExecution: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubScheduledJobConfig <a name="OsManagementHubScheduledJobConfig" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

const osManagementHubScheduledJobConfig: osManagementHubScheduledJob.OsManagementHubScheduledJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#compartment_id OsManagementHubScheduledJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.operations">operations</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>[]</code> | operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.scheduleType">scheduleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#schedule_type OsManagementHubScheduledJob#schedule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.timeNextExecution">timeNextExecution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#time_next_execution OsManagementHubScheduledJob#time_next_execution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#defined_tags OsManagementHubScheduledJob#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#description OsManagementHubScheduledJob#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#display_name OsManagementHubScheduledJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#freeform_tags OsManagementHubScheduledJob#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#id OsManagementHubScheduledJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.isManagedByAutonomousLinux">isManagedByAutonomousLinux</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#is_managed_by_autonomous_linux OsManagementHubScheduledJob#is_managed_by_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.isSubcompartmentIncluded">isSubcompartmentIncluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#is_subcompartment_included OsManagementHubScheduledJob#is_subcompartment_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.lifecycleStageIds">lifecycleStageIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#lifecycle_stage_ids OsManagementHubScheduledJob#lifecycle_stage_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.locations">locations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#locations OsManagementHubScheduledJob#locations}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.managedCompartmentIds">managedCompartmentIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#managed_compartment_ids OsManagementHubScheduledJob#managed_compartment_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.managedInstanceGroupIds">managedInstanceGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#managed_instance_group_ids OsManagementHubScheduledJob#managed_instance_group_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.managedInstanceIds">managedInstanceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#managed_instance_ids OsManagementHubScheduledJob#managed_instance_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.recurringRule">recurringRule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#recurring_rule OsManagementHubScheduledJob#recurring_rule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.retryIntervals">retryIntervals</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#retry_intervals OsManagementHubScheduledJob#retry_intervals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts">OsManagementHubScheduledJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#compartment_id OsManagementHubScheduledJob#compartment_id}.

---

##### `operations`<sup>Required</sup> <a name="operations" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.operations"></a>

```typescript
public readonly operations: IResolvable | OsManagementHubScheduledJobOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>[]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#operations OsManagementHubScheduledJob#operations}

---

##### `scheduleType`<sup>Required</sup> <a name="scheduleType" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.scheduleType"></a>

```typescript
public readonly scheduleType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#schedule_type OsManagementHubScheduledJob#schedule_type}.

---

##### `timeNextExecution`<sup>Required</sup> <a name="timeNextExecution" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.timeNextExecution"></a>

```typescript
public readonly timeNextExecution: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#time_next_execution OsManagementHubScheduledJob#time_next_execution}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#defined_tags OsManagementHubScheduledJob#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#description OsManagementHubScheduledJob#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#display_name OsManagementHubScheduledJob#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#freeform_tags OsManagementHubScheduledJob#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#id OsManagementHubScheduledJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isManagedByAutonomousLinux`<sup>Optional</sup> <a name="isManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.isManagedByAutonomousLinux"></a>

```typescript
public readonly isManagedByAutonomousLinux: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#is_managed_by_autonomous_linux OsManagementHubScheduledJob#is_managed_by_autonomous_linux}.

---

##### `isSubcompartmentIncluded`<sup>Optional</sup> <a name="isSubcompartmentIncluded" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.isSubcompartmentIncluded"></a>

```typescript
public readonly isSubcompartmentIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#is_subcompartment_included OsManagementHubScheduledJob#is_subcompartment_included}.

---

##### `lifecycleStageIds`<sup>Optional</sup> <a name="lifecycleStageIds" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.lifecycleStageIds"></a>

```typescript
public readonly lifecycleStageIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#lifecycle_stage_ids OsManagementHubScheduledJob#lifecycle_stage_ids}.

---

##### `locations`<sup>Optional</sup> <a name="locations" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#locations OsManagementHubScheduledJob#locations}.

---

##### `managedCompartmentIds`<sup>Optional</sup> <a name="managedCompartmentIds" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.managedCompartmentIds"></a>

```typescript
public readonly managedCompartmentIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#managed_compartment_ids OsManagementHubScheduledJob#managed_compartment_ids}.

---

##### `managedInstanceGroupIds`<sup>Optional</sup> <a name="managedInstanceGroupIds" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.managedInstanceGroupIds"></a>

```typescript
public readonly managedInstanceGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#managed_instance_group_ids OsManagementHubScheduledJob#managed_instance_group_ids}.

---

##### `managedInstanceIds`<sup>Optional</sup> <a name="managedInstanceIds" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.managedInstanceIds"></a>

```typescript
public readonly managedInstanceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#managed_instance_ids OsManagementHubScheduledJob#managed_instance_ids}.

---

##### `recurringRule`<sup>Optional</sup> <a name="recurringRule" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.recurringRule"></a>

```typescript
public readonly recurringRule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#recurring_rule OsManagementHubScheduledJob#recurring_rule}.

---

##### `retryIntervals`<sup>Optional</sup> <a name="retryIntervals" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.retryIntervals"></a>

```typescript
public readonly retryIntervals: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#retry_intervals OsManagementHubScheduledJob#retry_intervals}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubScheduledJobTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts">OsManagementHubScheduledJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#timeouts OsManagementHubScheduledJob#timeouts}

---

### OsManagementHubScheduledJobOperations <a name="OsManagementHubScheduledJobOperations" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

const osManagementHubScheduledJobOperations: osManagementHubScheduledJob.OsManagementHubScheduledJobOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.operationType">operationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#operation_type OsManagementHubScheduledJob#operation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.manageModuleStreamsDetails">manageModuleStreamsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails">OsManagementHubScheduledJobOperationsManageModuleStreamsDetails</a></code> | manage_module_streams_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.packageNames">packageNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#package_names OsManagementHubScheduledJob#package_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.softwareSourceIds">softwareSourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_ids OsManagementHubScheduledJob#software_source_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.switchModuleStreamsDetails">switchModuleStreamsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails">OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails</a></code> | switch_module_streams_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.windowsUpdateNames">windowsUpdateNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#windows_update_names OsManagementHubScheduledJob#windows_update_names}. |

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.operationType"></a>

```typescript
public readonly operationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#operation_type OsManagementHubScheduledJob#operation_type}.

---

##### `manageModuleStreamsDetails`<sup>Optional</sup> <a name="manageModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.manageModuleStreamsDetails"></a>

```typescript
public readonly manageModuleStreamsDetails: OsManagementHubScheduledJobOperationsManageModuleStreamsDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails">OsManagementHubScheduledJobOperationsManageModuleStreamsDetails</a>

manage_module_streams_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#manage_module_streams_details OsManagementHubScheduledJob#manage_module_streams_details}

---

##### `packageNames`<sup>Optional</sup> <a name="packageNames" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.packageNames"></a>

```typescript
public readonly packageNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#package_names OsManagementHubScheduledJob#package_names}.

---

##### `softwareSourceIds`<sup>Optional</sup> <a name="softwareSourceIds" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.softwareSourceIds"></a>

```typescript
public readonly softwareSourceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_ids OsManagementHubScheduledJob#software_source_ids}.

---

##### `switchModuleStreamsDetails`<sup>Optional</sup> <a name="switchModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.switchModuleStreamsDetails"></a>

```typescript
public readonly switchModuleStreamsDetails: OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails">OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails</a>

switch_module_streams_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#switch_module_streams_details OsManagementHubScheduledJob#switch_module_streams_details}

---

##### `windowsUpdateNames`<sup>Optional</sup> <a name="windowsUpdateNames" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations.property.windowsUpdateNames"></a>

```typescript
public readonly windowsUpdateNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#windows_update_names OsManagementHubScheduledJob#windows_update_names}.

---

### OsManagementHubScheduledJobOperationsManageModuleStreamsDetails <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

const osManagementHubScheduledJobOperationsManageModuleStreamsDetails: osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails.property.disable">disable</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>[]</code> | disable block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails.property.enable">enable</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>[]</code> | enable block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails.property.install">install</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>[]</code> | install block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails.property.remove">remove</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>[]</code> | remove block. |

---

##### `disable`<sup>Optional</sup> <a name="disable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails.property.disable"></a>

```typescript
public readonly disable: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>[]

disable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#disable OsManagementHubScheduledJob#disable}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails.property.enable"></a>

```typescript
public readonly enable: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>[]

enable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#enable OsManagementHubScheduledJob#enable}

---

##### `install`<sup>Optional</sup> <a name="install" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails.property.install"></a>

```typescript
public readonly install: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>[]

install block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#install OsManagementHubScheduledJob#install}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails.property.remove"></a>

```typescript
public readonly remove: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>[]

remove block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#remove OsManagementHubScheduledJob#remove}

---

### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

const osManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable: osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable.property.moduleName">moduleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable.property.streamName">streamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}. |

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}.

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}.

---

##### `softwareSourceId`<sup>Optional</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}.

---

### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

const osManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable: osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable.property.moduleName">moduleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable.property.streamName">streamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}. |

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}.

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}.

---

##### `softwareSourceId`<sup>Optional</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}.

---

### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

const osManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall: osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.property.moduleName">moduleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.property.profileName">profileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#profile_name OsManagementHubScheduledJob#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.property.streamName">streamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}. |

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}.

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#profile_name OsManagementHubScheduledJob#profile_name}.

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}.

---

##### `softwareSourceId`<sup>Optional</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}.

---

### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

const osManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove: osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.property.moduleName">moduleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.property.profileName">profileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#profile_name OsManagementHubScheduledJob#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.property.streamName">streamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}. |

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}.

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#profile_name OsManagementHubScheduledJob#profile_name}.

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}.

---

##### `softwareSourceId`<sup>Optional</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}.

---

### OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails <a name="OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

const osManagementHubScheduledJobOperationsSwitchModuleStreamsDetails: osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails.property.moduleName">moduleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails.property.streamName">streamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}. |

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#module_name OsManagementHubScheduledJob#module_name}.

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#stream_name OsManagementHubScheduledJob#stream_name}.

---

##### `softwareSourceId`<sup>Optional</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#software_source_id OsManagementHubScheduledJob#software_source_id}.

---

### OsManagementHubScheduledJobTimeouts <a name="OsManagementHubScheduledJobTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

const osManagementHubScheduledJobTimeouts: osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#create OsManagementHubScheduledJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#delete OsManagementHubScheduledJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#update OsManagementHubScheduledJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#create OsManagementHubScheduledJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#delete OsManagementHubScheduledJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_scheduled_job#update OsManagementHubScheduledJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubScheduledJobOperationsList <a name="OsManagementHubScheduledJobOperationsList" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

new osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.get"></a>

```typescript
public get(index: number): OsManagementHubScheduledJobOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubScheduledJobOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>[]

---


### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

new osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.get"></a>

```typescript
public get(index: number): OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>[]

---


### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

new osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.resetSoftwareSourceId">resetSoftwareSourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSoftwareSourceId` <a name="resetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.resetSoftwareSourceId"></a>

```typescript
public resetSoftwareSourceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.moduleNameInput">moduleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleNameInput`<sup>Optional</sup> <a name="moduleNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.moduleNameInput"></a>

```typescript
public readonly moduleNameInput: string;
```

- *Type:* string

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.softwareSourceIdInput"></a>

```typescript
public readonly softwareSourceIdInput: string;
```

- *Type:* string

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.streamNameInput"></a>

```typescript
public readonly streamNameInput: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>

---


### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

new osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.get"></a>

```typescript
public get(index: number): OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>[]

---


### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

new osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.resetSoftwareSourceId">resetSoftwareSourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSoftwareSourceId` <a name="resetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.resetSoftwareSourceId"></a>

```typescript
public resetSoftwareSourceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.moduleNameInput">moduleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleNameInput`<sup>Optional</sup> <a name="moduleNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.moduleNameInput"></a>

```typescript
public readonly moduleNameInput: string;
```

- *Type:* string

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.softwareSourceIdInput"></a>

```typescript
public readonly softwareSourceIdInput: string;
```

- *Type:* string

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.streamNameInput"></a>

```typescript
public readonly streamNameInput: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>

---


### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

new osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.get"></a>

```typescript
public get(index: number): OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>[]

---


### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

new osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.resetSoftwareSourceId">resetSoftwareSourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSoftwareSourceId` <a name="resetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.resetSoftwareSourceId"></a>

```typescript
public resetSoftwareSourceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.moduleNameInput">moduleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.profileNameInput">profileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleNameInput`<sup>Optional</sup> <a name="moduleNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.moduleNameInput"></a>

```typescript
public readonly moduleNameInput: string;
```

- *Type:* string

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.profileNameInput"></a>

```typescript
public readonly profileNameInput: string;
```

- *Type:* string

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.softwareSourceIdInput"></a>

```typescript
public readonly softwareSourceIdInput: string;
```

- *Type:* string

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.streamNameInput"></a>

```typescript
public readonly streamNameInput: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>

---


### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

new osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putDisable">putDisable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putEnable">putEnable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putInstall">putInstall</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putRemove">putRemove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resetDisable">resetDisable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resetInstall">resetInstall</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resetRemove">resetRemove</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDisable` <a name="putDisable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putDisable"></a>

```typescript
public putDisable(value: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putDisable.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>[]

---

##### `putEnable` <a name="putEnable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putEnable"></a>

```typescript
public putEnable(value: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putEnable.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>[]

---

##### `putInstall` <a name="putInstall" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putInstall"></a>

```typescript
public putInstall(value: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putInstall.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>[]

---

##### `putRemove` <a name="putRemove" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putRemove"></a>

```typescript
public putRemove(value: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.putRemove.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>[]

---

##### `resetDisable` <a name="resetDisable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resetDisable"></a>

```typescript
public resetDisable(): void
```

##### `resetEnable` <a name="resetEnable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetInstall` <a name="resetInstall" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resetInstall"></a>

```typescript
public resetInstall(): void
```

##### `resetRemove` <a name="resetRemove" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.resetRemove"></a>

```typescript
public resetRemove(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.disable">disable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.enable">enable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.install">install</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.remove">remove</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.disableInput">disableInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.enableInput">enableInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.installInput">installInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.removeInput">removeInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails">OsManagementHubScheduledJobOperationsManageModuleStreamsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disable`<sup>Required</sup> <a name="disable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.disable"></a>

```typescript
public readonly disable: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.enable"></a>

```typescript
public readonly enable: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList</a>

---

##### `install`<sup>Required</sup> <a name="install" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.install"></a>

```typescript
public readonly install: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList</a>

---

##### `remove`<sup>Required</sup> <a name="remove" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.remove"></a>

```typescript
public readonly remove: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList</a>

---

##### `disableInput`<sup>Optional</sup> <a name="disableInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.disableInput"></a>

```typescript
public readonly disableInput: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable</a>[]

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable</a>[]

---

##### `installInput`<sup>Optional</sup> <a name="installInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.installInput"></a>

```typescript
public readonly installInput: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall</a>[]

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.removeInput"></a>

```typescript
public readonly removeInput: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OsManagementHubScheduledJobOperationsManageModuleStreamsDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails">OsManagementHubScheduledJobOperationsManageModuleStreamsDetails</a>

---


### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

new osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.get"></a>

```typescript
public get(index: number): OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>[]

---


### OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference <a name="OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

new osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.resetSoftwareSourceId">resetSoftwareSourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSoftwareSourceId` <a name="resetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.resetSoftwareSourceId"></a>

```typescript
public resetSoftwareSourceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.moduleNameInput">moduleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.profileNameInput">profileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleNameInput`<sup>Optional</sup> <a name="moduleNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.moduleNameInput"></a>

```typescript
public readonly moduleNameInput: string;
```

- *Type:* string

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.profileNameInput"></a>

```typescript
public readonly profileNameInput: string;
```

- *Type:* string

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.softwareSourceIdInput"></a>

```typescript
public readonly softwareSourceIdInput: string;
```

- *Type:* string

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.streamNameInput"></a>

```typescript
public readonly streamNameInput: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove</a>

---


### OsManagementHubScheduledJobOperationsOutputReference <a name="OsManagementHubScheduledJobOperationsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

new osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.putManageModuleStreamsDetails">putManageModuleStreamsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.putSwitchModuleStreamsDetails">putSwitchModuleStreamsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetManageModuleStreamsDetails">resetManageModuleStreamsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetPackageNames">resetPackageNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetSoftwareSourceIds">resetSoftwareSourceIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetSwitchModuleStreamsDetails">resetSwitchModuleStreamsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetWindowsUpdateNames">resetWindowsUpdateNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManageModuleStreamsDetails` <a name="putManageModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.putManageModuleStreamsDetails"></a>

```typescript
public putManageModuleStreamsDetails(value: OsManagementHubScheduledJobOperationsManageModuleStreamsDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.putManageModuleStreamsDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails">OsManagementHubScheduledJobOperationsManageModuleStreamsDetails</a>

---

##### `putSwitchModuleStreamsDetails` <a name="putSwitchModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.putSwitchModuleStreamsDetails"></a>

```typescript
public putSwitchModuleStreamsDetails(value: OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.putSwitchModuleStreamsDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails">OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails</a>

---

##### `resetManageModuleStreamsDetails` <a name="resetManageModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetManageModuleStreamsDetails"></a>

```typescript
public resetManageModuleStreamsDetails(): void
```

##### `resetPackageNames` <a name="resetPackageNames" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetPackageNames"></a>

```typescript
public resetPackageNames(): void
```

##### `resetSoftwareSourceIds` <a name="resetSoftwareSourceIds" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetSoftwareSourceIds"></a>

```typescript
public resetSoftwareSourceIds(): void
```

##### `resetSwitchModuleStreamsDetails` <a name="resetSwitchModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetSwitchModuleStreamsDetails"></a>

```typescript
public resetSwitchModuleStreamsDetails(): void
```

##### `resetWindowsUpdateNames` <a name="resetWindowsUpdateNames" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.resetWindowsUpdateNames"></a>

```typescript
public resetWindowsUpdateNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.manageModuleStreamsDetails">manageModuleStreamsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.switchModuleStreamsDetails">switchModuleStreamsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference">OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.manageModuleStreamsDetailsInput">manageModuleStreamsDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails">OsManagementHubScheduledJobOperationsManageModuleStreamsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.operationTypeInput">operationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.packageNamesInput">packageNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.softwareSourceIdsInput">softwareSourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.switchModuleStreamsDetailsInput">switchModuleStreamsDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails">OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.windowsUpdateNamesInput">windowsUpdateNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.operationType">operationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.packageNames">packageNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.softwareSourceIds">softwareSourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.windowsUpdateNames">windowsUpdateNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manageModuleStreamsDetails`<sup>Required</sup> <a name="manageModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.manageModuleStreamsDetails"></a>

```typescript
public readonly manageModuleStreamsDetails: OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference">OsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference</a>

---

##### `switchModuleStreamsDetails`<sup>Required</sup> <a name="switchModuleStreamsDetails" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.switchModuleStreamsDetails"></a>

```typescript
public readonly switchModuleStreamsDetails: OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference">OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference</a>

---

##### `manageModuleStreamsDetailsInput`<sup>Optional</sup> <a name="manageModuleStreamsDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.manageModuleStreamsDetailsInput"></a>

```typescript
public readonly manageModuleStreamsDetailsInput: OsManagementHubScheduledJobOperationsManageModuleStreamsDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsManageModuleStreamsDetails">OsManagementHubScheduledJobOperationsManageModuleStreamsDetails</a>

---

##### `operationTypeInput`<sup>Optional</sup> <a name="operationTypeInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.operationTypeInput"></a>

```typescript
public readonly operationTypeInput: string;
```

- *Type:* string

---

##### `packageNamesInput`<sup>Optional</sup> <a name="packageNamesInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.packageNamesInput"></a>

```typescript
public readonly packageNamesInput: string[];
```

- *Type:* string[]

---

##### `softwareSourceIdsInput`<sup>Optional</sup> <a name="softwareSourceIdsInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.softwareSourceIdsInput"></a>

```typescript
public readonly softwareSourceIdsInput: string[];
```

- *Type:* string[]

---

##### `switchModuleStreamsDetailsInput`<sup>Optional</sup> <a name="switchModuleStreamsDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.switchModuleStreamsDetailsInput"></a>

```typescript
public readonly switchModuleStreamsDetailsInput: OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails">OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails</a>

---

##### `windowsUpdateNamesInput`<sup>Optional</sup> <a name="windowsUpdateNamesInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.windowsUpdateNamesInput"></a>

```typescript
public readonly windowsUpdateNamesInput: string[];
```

- *Type:* string[]

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.operationType"></a>

```typescript
public readonly operationType: string;
```

- *Type:* string

---

##### `packageNames`<sup>Required</sup> <a name="packageNames" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.packageNames"></a>

```typescript
public readonly packageNames: string[];
```

- *Type:* string[]

---

##### `softwareSourceIds`<sup>Required</sup> <a name="softwareSourceIds" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.softwareSourceIds"></a>

```typescript
public readonly softwareSourceIds: string[];
```

- *Type:* string[]

---

##### `windowsUpdateNames`<sup>Required</sup> <a name="windowsUpdateNames" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.windowsUpdateNames"></a>

```typescript
public readonly windowsUpdateNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubScheduledJobOperations;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperations">OsManagementHubScheduledJobOperations</a>

---


### OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference <a name="OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

new osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.resetSoftwareSourceId">resetSoftwareSourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSoftwareSourceId` <a name="resetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.resetSoftwareSourceId"></a>

```typescript
public resetSoftwareSourceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.moduleNameInput">moduleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails">OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleNameInput`<sup>Optional</sup> <a name="moduleNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.moduleNameInput"></a>

```typescript
public readonly moduleNameInput: string;
```

- *Type:* string

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.softwareSourceIdInput"></a>

```typescript
public readonly softwareSourceIdInput: string;
```

- *Type:* string

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.streamNameInput"></a>

```typescript
public readonly streamNameInput: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails">OsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails</a>

---


### OsManagementHubScheduledJobTimeoutsOutputReference <a name="OsManagementHubScheduledJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { osManagementHubScheduledJob } from 'rhizo-co-terraform-provider-oci'

new osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts">OsManagementHubScheduledJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubScheduledJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubScheduledJob.OsManagementHubScheduledJobTimeouts">OsManagementHubScheduledJobTimeouts</a>

---



