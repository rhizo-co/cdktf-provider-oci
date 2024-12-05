# `stackMonitoringMaintenanceWindowsRetryFailedOperation` Submodule <a name="`stackMonitoringMaintenanceWindowsRetryFailedOperation` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMaintenanceWindowsRetryFailedOperation <a name="StackMonitoringMaintenanceWindowsRetryFailedOperation" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_retry_failed_operation oci_stack_monitoring_maintenance_windows_retry_failed_operation}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindowsRetryFailedOperation } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation(scope: Construct, id: string, config: StackMonitoringMaintenanceWindowsRetryFailedOperationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig">StackMonitoringMaintenanceWindowsRetryFailedOperationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig">StackMonitoringMaintenanceWindowsRetryFailedOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.putTimeouts"></a>

```typescript
public putTimeouts(value: StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts">StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMaintenanceWindowsRetryFailedOperation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.isConstruct"></a>

```typescript
import { stackMonitoringMaintenanceWindowsRetryFailedOperation } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.isTerraformElement"></a>

```typescript
import { stackMonitoringMaintenanceWindowsRetryFailedOperation } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.isTerraformResource"></a>

```typescript
import { stackMonitoringMaintenanceWindowsRetryFailedOperation } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.generateConfigForImport"></a>

```typescript
import { stackMonitoringMaintenanceWindowsRetryFailedOperation } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StackMonitoringMaintenanceWindowsRetryFailedOperation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackMonitoringMaintenanceWindowsRetryFailedOperation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackMonitoringMaintenanceWindowsRetryFailedOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_retry_failed_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMaintenanceWindowsRetryFailedOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference">StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.maintenanceWindowIdInput">maintenanceWindowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts">StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.maintenanceWindowId">maintenanceWindowId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.timeouts"></a>

```typescript
public readonly timeouts: StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference">StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maintenanceWindowIdInput`<sup>Optional</sup> <a name="maintenanceWindowIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.maintenanceWindowIdInput"></a>

```typescript
public readonly maintenanceWindowIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts">StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintenanceWindowId`<sup>Required</sup> <a name="maintenanceWindowId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.maintenanceWindowId"></a>

```typescript
public readonly maintenanceWindowId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMaintenanceWindowsRetryFailedOperationConfig <a name="StackMonitoringMaintenanceWindowsRetryFailedOperationConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindowsRetryFailedOperation } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMaintenanceWindowsRetryFailedOperationConfig: stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.maintenanceWindowId">maintenanceWindowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_retry_failed_operation#maintenance_window_id StackMonitoringMaintenanceWindowsRetryFailedOperation#maintenance_window_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_retry_failed_operation#id StackMonitoringMaintenanceWindowsRetryFailedOperation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts">StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `maintenanceWindowId`<sup>Required</sup> <a name="maintenanceWindowId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.maintenanceWindowId"></a>

```typescript
public readonly maintenanceWindowId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_retry_failed_operation#maintenance_window_id StackMonitoringMaintenanceWindowsRetryFailedOperation#maintenance_window_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_retry_failed_operation#id StackMonitoringMaintenanceWindowsRetryFailedOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts">StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_retry_failed_operation#timeouts StackMonitoringMaintenanceWindowsRetryFailedOperation#timeouts}

---

### StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts <a name="StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindowsRetryFailedOperation } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts: stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_retry_failed_operation#create StackMonitoringMaintenanceWindowsRetryFailedOperation#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_retry_failed_operation#delete StackMonitoringMaintenanceWindowsRetryFailedOperation#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_retry_failed_operation#update StackMonitoringMaintenanceWindowsRetryFailedOperation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_retry_failed_operation#create StackMonitoringMaintenanceWindowsRetryFailedOperation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_retry_failed_operation#delete StackMonitoringMaintenanceWindowsRetryFailedOperation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_retry_failed_operation#update StackMonitoringMaintenanceWindowsRetryFailedOperation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference <a name="StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindowsRetryFailedOperation } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts">StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsRetryFailedOperation.StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts">StackMonitoringMaintenanceWindowsRetryFailedOperationTimeouts</a>

---


