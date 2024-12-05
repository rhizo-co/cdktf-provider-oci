# `appmgmtControlMonitorPluginManagement` Submodule <a name="`appmgmtControlMonitorPluginManagement` Submodule" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmgmtControlMonitorPluginManagement <a name="AppmgmtControlMonitorPluginManagement" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management oci_appmgmt_control_monitor_plugin_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer"></a>

```typescript
import { appmgmtControlMonitorPluginManagement } from 'rhizo-co-terraform-provider-oci'

new appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement(scope: Construct, id: string, config: AppmgmtControlMonitorPluginManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig">AppmgmtControlMonitorPluginManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig">AppmgmtControlMonitorPluginManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: AppmgmtControlMonitorPluginManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts">AppmgmtControlMonitorPluginManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppmgmtControlMonitorPluginManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isConstruct"></a>

```typescript
import { appmgmtControlMonitorPluginManagement } from 'rhizo-co-terraform-provider-oci'

appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isTerraformElement"></a>

```typescript
import { appmgmtControlMonitorPluginManagement } from 'rhizo-co-terraform-provider-oci'

appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isTerraformResource"></a>

```typescript
import { appmgmtControlMonitorPluginManagement } from 'rhizo-co-terraform-provider-oci'

appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.generateConfigForImport"></a>

```typescript
import { appmgmtControlMonitorPluginManagement } from 'rhizo-co-terraform-provider-oci'

appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppmgmtControlMonitorPluginManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppmgmtControlMonitorPluginManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppmgmtControlMonitorPluginManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppmgmtControlMonitorPluginManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceDescription">monitoredInstanceDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceDisplayName">monitoredInstanceDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceManagementAgentId">monitoredInstanceManagementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference">AppmgmtControlMonitorPluginManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceIdInput">monitoredInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts">AppmgmtControlMonitorPluginManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceId">monitoredInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `monitoredInstanceDescription`<sup>Required</sup> <a name="monitoredInstanceDescription" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceDescription"></a>

```typescript
public readonly monitoredInstanceDescription: string;
```

- *Type:* string

---

##### `monitoredInstanceDisplayName`<sup>Required</sup> <a name="monitoredInstanceDisplayName" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceDisplayName"></a>

```typescript
public readonly monitoredInstanceDisplayName: string;
```

- *Type:* string

---

##### `monitoredInstanceManagementAgentId`<sup>Required</sup> <a name="monitoredInstanceManagementAgentId" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceManagementAgentId"></a>

```typescript
public readonly monitoredInstanceManagementAgentId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.timeouts"></a>

```typescript
public readonly timeouts: AppmgmtControlMonitorPluginManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference">AppmgmtControlMonitorPluginManagementTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `monitoredInstanceIdInput`<sup>Optional</sup> <a name="monitoredInstanceIdInput" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceIdInput"></a>

```typescript
public readonly monitoredInstanceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppmgmtControlMonitorPluginManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts">AppmgmtControlMonitorPluginManagementTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `monitoredInstanceId`<sup>Required</sup> <a name="monitoredInstanceId" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.monitoredInstanceId"></a>

```typescript
public readonly monitoredInstanceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppmgmtControlMonitorPluginManagementConfig <a name="AppmgmtControlMonitorPluginManagementConfig" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.Initializer"></a>

```typescript
import { appmgmtControlMonitorPluginManagement } from 'rhizo-co-terraform-provider-oci'

const appmgmtControlMonitorPluginManagementConfig: appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.monitoredInstanceId">monitoredInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#monitored_instance_id AppmgmtControlMonitorPluginManagement#monitored_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#id AppmgmtControlMonitorPluginManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts">AppmgmtControlMonitorPluginManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `monitoredInstanceId`<sup>Required</sup> <a name="monitoredInstanceId" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.monitoredInstanceId"></a>

```typescript
public readonly monitoredInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#monitored_instance_id AppmgmtControlMonitorPluginManagement#monitored_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#id AppmgmtControlMonitorPluginManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppmgmtControlMonitorPluginManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts">AppmgmtControlMonitorPluginManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#timeouts AppmgmtControlMonitorPluginManagement#timeouts}

---

### AppmgmtControlMonitorPluginManagementTimeouts <a name="AppmgmtControlMonitorPluginManagementTimeouts" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts.Initializer"></a>

```typescript
import { appmgmtControlMonitorPluginManagement } from 'rhizo-co-terraform-provider-oci'

const appmgmtControlMonitorPluginManagementTimeouts: appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#create AppmgmtControlMonitorPluginManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#delete AppmgmtControlMonitorPluginManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#update AppmgmtControlMonitorPluginManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#create AppmgmtControlMonitorPluginManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#delete AppmgmtControlMonitorPluginManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/appmgmt_control_monitor_plugin_management#update AppmgmtControlMonitorPluginManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmgmtControlMonitorPluginManagementTimeoutsOutputReference <a name="AppmgmtControlMonitorPluginManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { appmgmtControlMonitorPluginManagement } from 'rhizo-co-terraform-provider-oci'

new appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts">AppmgmtControlMonitorPluginManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppmgmtControlMonitorPluginManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.appmgmtControlMonitorPluginManagement.AppmgmtControlMonitorPluginManagementTimeouts">AppmgmtControlMonitorPluginManagementTimeouts</a>

---



