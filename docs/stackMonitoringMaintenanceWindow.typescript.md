# `stackMonitoringMaintenanceWindow` Submodule <a name="`stackMonitoringMaintenanceWindow` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMaintenanceWindow <a name="StackMonitoringMaintenanceWindow" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window oci_stack_monitoring_maintenance_window}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow(scope: Construct, id: string, config: StackMonitoringMaintenanceWindowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig">StackMonitoringMaintenanceWindowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig">StackMonitoringMaintenanceWindowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putResources">putResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResources` <a name="putResources" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putResources"></a>

```typescript
public putResources(value: IResolvable | StackMonitoringMaintenanceWindowResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putResources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>[]

---

##### `putSchedule` <a name="putSchedule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putSchedule"></a>

```typescript
public putSchedule(value: StackMonitoringMaintenanceWindowSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putTimeouts"></a>

```typescript
public putTimeouts(value: StackMonitoringMaintenanceWindowTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMaintenanceWindow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isConstruct"></a>

```typescript
import { stackMonitoringMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformElement"></a>

```typescript
import { stackMonitoringMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformResource"></a>

```typescript
import { stackMonitoringMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport"></a>

```typescript
import { stackMonitoringMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StackMonitoringMaintenanceWindow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackMonitoringMaintenanceWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackMonitoringMaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.resources">resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList">StackMonitoringMaintenanceWindowResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.resourcesDetails">resourcesDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList">StackMonitoringMaintenanceWindowResourcesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference">StackMonitoringMaintenanceWindowScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference">StackMonitoringMaintenanceWindowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.resourcesInput">resourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.scheduleInput">scheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.resources"></a>

```typescript
public readonly resources: StackMonitoringMaintenanceWindowResourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList">StackMonitoringMaintenanceWindowResourcesList</a>

---

##### `resourcesDetails`<sup>Required</sup> <a name="resourcesDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.resourcesDetails"></a>

```typescript
public readonly resourcesDetails: StackMonitoringMaintenanceWindowResourcesDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList">StackMonitoringMaintenanceWindowResourcesDetailsList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.schedule"></a>

```typescript
public readonly schedule: StackMonitoringMaintenanceWindowScheduleOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference">StackMonitoringMaintenanceWindowScheduleOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeouts"></a>

```typescript
public readonly timeouts: StackMonitoringMaintenanceWindowTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference">StackMonitoringMaintenanceWindowTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: IResolvable | StackMonitoringMaintenanceWindowResources[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>[]

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: StackMonitoringMaintenanceWindowSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StackMonitoringMaintenanceWindowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMaintenanceWindowConfig <a name="StackMonitoringMaintenanceWindowConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMaintenanceWindowConfig: stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#compartment_id StackMonitoringMaintenanceWindow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#name StackMonitoringMaintenanceWindow#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.resources">resources</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>[]</code> | resources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a></code> | schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#description StackMonitoringMaintenanceWindow#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#id StackMonitoringMaintenanceWindow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#compartment_id StackMonitoringMaintenanceWindow#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#name StackMonitoringMaintenanceWindow#name}.

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.resources"></a>

```typescript
public readonly resources: IResolvable | StackMonitoringMaintenanceWindowResources[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>[]

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#resources StackMonitoringMaintenanceWindow#resources}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.schedule"></a>

```typescript
public readonly schedule: StackMonitoringMaintenanceWindowSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#schedule StackMonitoringMaintenanceWindow#schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#description StackMonitoringMaintenanceWindow#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#id StackMonitoringMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StackMonitoringMaintenanceWindowTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#timeouts StackMonitoringMaintenanceWindow#timeouts}

---

### StackMonitoringMaintenanceWindowResources <a name="StackMonitoringMaintenanceWindowResources" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMaintenanceWindowResources: stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#resource_id StackMonitoringMaintenanceWindow#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources.property.areMembersIncluded">areMembersIncluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#are_members_included StackMonitoringMaintenanceWindow#are_members_included}. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#resource_id StackMonitoringMaintenanceWindow#resource_id}.

---

##### `areMembersIncluded`<sup>Optional</sup> <a name="areMembersIncluded" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources.property.areMembersIncluded"></a>

```typescript
public readonly areMembersIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#are_members_included StackMonitoringMaintenanceWindow#are_members_included}.

---

### StackMonitoringMaintenanceWindowResourcesDetails <a name="StackMonitoringMaintenanceWindowResourcesDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetails.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMaintenanceWindowResourcesDetails: stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetails = { ... }
```


### StackMonitoringMaintenanceWindowSchedule <a name="StackMonitoringMaintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMaintenanceWindowSchedule: stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.scheduleType">scheduleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#schedule_type StackMonitoringMaintenanceWindow#schedule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.maintenanceWindowDuration">maintenanceWindowDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#maintenance_window_duration StackMonitoringMaintenanceWindow#maintenance_window_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.maintenanceWindowRecurrences">maintenanceWindowRecurrences</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#maintenance_window_recurrences StackMonitoringMaintenanceWindow#maintenance_window_recurrences}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.timeMaintenanceWindowEnd">timeMaintenanceWindowEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#time_maintenance_window_end StackMonitoringMaintenanceWindow#time_maintenance_window_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.timeMaintenanceWindowStart">timeMaintenanceWindowStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#time_maintenance_window_start StackMonitoringMaintenanceWindow#time_maintenance_window_start}. |

---

##### `scheduleType`<sup>Required</sup> <a name="scheduleType" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.scheduleType"></a>

```typescript
public readonly scheduleType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#schedule_type StackMonitoringMaintenanceWindow#schedule_type}.

---

##### `maintenanceWindowDuration`<sup>Optional</sup> <a name="maintenanceWindowDuration" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.maintenanceWindowDuration"></a>

```typescript
public readonly maintenanceWindowDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#maintenance_window_duration StackMonitoringMaintenanceWindow#maintenance_window_duration}.

---

##### `maintenanceWindowRecurrences`<sup>Optional</sup> <a name="maintenanceWindowRecurrences" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.maintenanceWindowRecurrences"></a>

```typescript
public readonly maintenanceWindowRecurrences: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#maintenance_window_recurrences StackMonitoringMaintenanceWindow#maintenance_window_recurrences}.

---

##### `timeMaintenanceWindowEnd`<sup>Optional</sup> <a name="timeMaintenanceWindowEnd" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.timeMaintenanceWindowEnd"></a>

```typescript
public readonly timeMaintenanceWindowEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#time_maintenance_window_end StackMonitoringMaintenanceWindow#time_maintenance_window_end}.

---

##### `timeMaintenanceWindowStart`<sup>Optional</sup> <a name="timeMaintenanceWindowStart" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.timeMaintenanceWindowStart"></a>

```typescript
public readonly timeMaintenanceWindowStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#time_maintenance_window_start StackMonitoringMaintenanceWindow#time_maintenance_window_start}.

---

### StackMonitoringMaintenanceWindowTimeouts <a name="StackMonitoringMaintenanceWindowTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

const stackMonitoringMaintenanceWindowTimeouts: stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#create StackMonitoringMaintenanceWindow#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#delete StackMonitoringMaintenanceWindow#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#update StackMonitoringMaintenanceWindow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#create StackMonitoringMaintenanceWindow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#delete StackMonitoringMaintenanceWindow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#update StackMonitoringMaintenanceWindow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMaintenanceWindowResourcesDetailsList <a name="StackMonitoringMaintenanceWindowResourcesDetailsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.get"></a>

```typescript
public get(index: number): StackMonitoringMaintenanceWindowResourcesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StackMonitoringMaintenanceWindowResourcesDetailsOutputReference <a name="StackMonitoringMaintenanceWindowResourcesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.numberOfMembers">numberOfMembers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetails">StackMonitoringMaintenanceWindowResourcesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `numberOfMembers`<sup>Required</sup> <a name="numberOfMembers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.numberOfMembers"></a>

```typescript
public readonly numberOfMembers: number;
```

- *Type:* number

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMaintenanceWindowResourcesDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetails">StackMonitoringMaintenanceWindowResourcesDetails</a>

---


### StackMonitoringMaintenanceWindowResourcesList <a name="StackMonitoringMaintenanceWindowResourcesList" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.get"></a>

```typescript
public get(index: number): StackMonitoringMaintenanceWindowResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMaintenanceWindowResources[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>[]

---


### StackMonitoringMaintenanceWindowResourcesOutputReference <a name="StackMonitoringMaintenanceWindowResourcesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.resetAreMembersIncluded">resetAreMembersIncluded</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAreMembersIncluded` <a name="resetAreMembersIncluded" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.resetAreMembersIncluded"></a>

```typescript
public resetAreMembersIncluded(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.areMembersIncludedInput">areMembersIncludedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.areMembersIncluded">areMembersIncluded</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `areMembersIncludedInput`<sup>Optional</sup> <a name="areMembersIncludedInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.areMembersIncludedInput"></a>

```typescript
public readonly areMembersIncludedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `areMembersIncluded`<sup>Required</sup> <a name="areMembersIncluded" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.areMembersIncluded"></a>

```typescript
public readonly areMembersIncluded: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMaintenanceWindowResources;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>

---


### StackMonitoringMaintenanceWindowScheduleOutputReference <a name="StackMonitoringMaintenanceWindowScheduleOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetMaintenanceWindowDuration">resetMaintenanceWindowDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetMaintenanceWindowRecurrences">resetMaintenanceWindowRecurrences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetTimeMaintenanceWindowEnd">resetTimeMaintenanceWindowEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetTimeMaintenanceWindowStart">resetTimeMaintenanceWindowStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaintenanceWindowDuration` <a name="resetMaintenanceWindowDuration" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetMaintenanceWindowDuration"></a>

```typescript
public resetMaintenanceWindowDuration(): void
```

##### `resetMaintenanceWindowRecurrences` <a name="resetMaintenanceWindowRecurrences" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetMaintenanceWindowRecurrences"></a>

```typescript
public resetMaintenanceWindowRecurrences(): void
```

##### `resetTimeMaintenanceWindowEnd` <a name="resetTimeMaintenanceWindowEnd" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetTimeMaintenanceWindowEnd"></a>

```typescript
public resetTimeMaintenanceWindowEnd(): void
```

##### `resetTimeMaintenanceWindowStart` <a name="resetTimeMaintenanceWindowStart" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetTimeMaintenanceWindowStart"></a>

```typescript
public resetTimeMaintenanceWindowStart(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowDurationInput">maintenanceWindowDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowRecurrencesInput">maintenanceWindowRecurrencesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.scheduleTypeInput">scheduleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowEndInput">timeMaintenanceWindowEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowStartInput">timeMaintenanceWindowStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowDuration">maintenanceWindowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowRecurrences">maintenanceWindowRecurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.scheduleType">scheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowEnd">timeMaintenanceWindowEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowStart">timeMaintenanceWindowStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maintenanceWindowDurationInput`<sup>Optional</sup> <a name="maintenanceWindowDurationInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowDurationInput"></a>

```typescript
public readonly maintenanceWindowDurationInput: string;
```

- *Type:* string

---

##### `maintenanceWindowRecurrencesInput`<sup>Optional</sup> <a name="maintenanceWindowRecurrencesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowRecurrencesInput"></a>

```typescript
public readonly maintenanceWindowRecurrencesInput: string;
```

- *Type:* string

---

##### `scheduleTypeInput`<sup>Optional</sup> <a name="scheduleTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.scheduleTypeInput"></a>

```typescript
public readonly scheduleTypeInput: string;
```

- *Type:* string

---

##### `timeMaintenanceWindowEndInput`<sup>Optional</sup> <a name="timeMaintenanceWindowEndInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowEndInput"></a>

```typescript
public readonly timeMaintenanceWindowEndInput: string;
```

- *Type:* string

---

##### `timeMaintenanceWindowStartInput`<sup>Optional</sup> <a name="timeMaintenanceWindowStartInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowStartInput"></a>

```typescript
public readonly timeMaintenanceWindowStartInput: string;
```

- *Type:* string

---

##### `maintenanceWindowDuration`<sup>Required</sup> <a name="maintenanceWindowDuration" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowDuration"></a>

```typescript
public readonly maintenanceWindowDuration: string;
```

- *Type:* string

---

##### `maintenanceWindowRecurrences`<sup>Required</sup> <a name="maintenanceWindowRecurrences" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowRecurrences"></a>

```typescript
public readonly maintenanceWindowRecurrences: string;
```

- *Type:* string

---

##### `scheduleType`<sup>Required</sup> <a name="scheduleType" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.scheduleType"></a>

```typescript
public readonly scheduleType: string;
```

- *Type:* string

---

##### `timeMaintenanceWindowEnd`<sup>Required</sup> <a name="timeMaintenanceWindowEnd" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowEnd"></a>

```typescript
public readonly timeMaintenanceWindowEnd: string;
```

- *Type:* string

---

##### `timeMaintenanceWindowStart`<sup>Required</sup> <a name="timeMaintenanceWindowStart" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowStart"></a>

```typescript
public readonly timeMaintenanceWindowStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StackMonitoringMaintenanceWindowSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a>

---


### StackMonitoringMaintenanceWindowTimeoutsOutputReference <a name="StackMonitoringMaintenanceWindowTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.Initializer"></a>

```typescript
import { stackMonitoringMaintenanceWindow } from 'rhizo-co-terraform-provider-oci'

new stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StackMonitoringMaintenanceWindowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a>

---



