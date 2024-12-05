# `stackMonitoringMaintenanceWindowsStop` Submodule <a name="`stackMonitoringMaintenanceWindowsStop` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMaintenanceWindowsStop <a name="StackMonitoringMaintenanceWindowsStop" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop oci_stack_monitoring_maintenance_windows_stop}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindowsStop } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop(scope: Construct, id: string, config: StackMonitoringMaintenanceWindowsStopConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig">StackMonitoringMaintenanceWindowsStopConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig">StackMonitoringMaintenanceWindowsStopConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.putTimeouts"></a>

```typescript
public putTimeouts(value: StackMonitoringMaintenanceWindowsStopTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts">StackMonitoringMaintenanceWindowsStopTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMaintenanceWindowsStop resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isConstruct"></a>

```typescript
import { stackMonitoringMaintenanceWindowsStop } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isTerraformElement"></a>

```typescript
import { stackMonitoringMaintenanceWindowsStop } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isTerraformResource"></a>

```typescript
import { stackMonitoringMaintenanceWindowsStop } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.generateConfigForImport"></a>

```typescript
import { stackMonitoringMaintenanceWindowsStop } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StackMonitoringMaintenanceWindowsStop resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackMonitoringMaintenanceWindowsStop to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackMonitoringMaintenanceWindowsStop that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMaintenanceWindowsStop to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference">StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.maintenanceWindowIdInput">maintenanceWindowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts">StackMonitoringMaintenanceWindowsStopTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.maintenanceWindowId">maintenanceWindowId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.timeouts"></a>

```typescript
public readonly timeouts: StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference">StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maintenanceWindowIdInput`<sup>Optional</sup> <a name="maintenanceWindowIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.maintenanceWindowIdInput"></a>

```typescript
public readonly maintenanceWindowIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StackMonitoringMaintenanceWindowsStopTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts">StackMonitoringMaintenanceWindowsStopTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintenanceWindowId`<sup>Required</sup> <a name="maintenanceWindowId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.maintenanceWindowId"></a>

```typescript
public readonly maintenanceWindowId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStop.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMaintenanceWindowsStopConfig <a name="StackMonitoringMaintenanceWindowsStopConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindowsStop } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMaintenanceWindowsStopConfig: stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.maintenanceWindowId">maintenanceWindowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#maintenance_window_id StackMonitoringMaintenanceWindowsStop#maintenance_window_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#id StackMonitoringMaintenanceWindowsStop#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts">StackMonitoringMaintenanceWindowsStopTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `maintenanceWindowId`<sup>Required</sup> <a name="maintenanceWindowId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.maintenanceWindowId"></a>

```typescript
public readonly maintenanceWindowId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#maintenance_window_id StackMonitoringMaintenanceWindowsStop#maintenance_window_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#id StackMonitoringMaintenanceWindowsStop#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StackMonitoringMaintenanceWindowsStopTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts">StackMonitoringMaintenanceWindowsStopTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#timeouts StackMonitoringMaintenanceWindowsStop#timeouts}

---

### StackMonitoringMaintenanceWindowsStopTimeouts <a name="StackMonitoringMaintenanceWindowsStopTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindowsStop } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMaintenanceWindowsStopTimeouts: stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#create StackMonitoringMaintenanceWindowsStop#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#delete StackMonitoringMaintenanceWindowsStop#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#update StackMonitoringMaintenanceWindowsStop#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#create StackMonitoringMaintenanceWindowsStop#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#delete StackMonitoringMaintenanceWindowsStop#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_windows_stop#update StackMonitoringMaintenanceWindowsStop#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference <a name="StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindowsStop } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts">StackMonitoringMaintenanceWindowsStopTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMaintenanceWindowsStopTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindowsStop.StackMonitoringMaintenanceWindowsStopTimeouts">StackMonitoringMaintenanceWindowsStopTimeouts</a>

---



