# `databaseVmClusterRemoveVirtualMachine` Submodule <a name="`databaseVmClusterRemoveVirtualMachine` Submodule" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseVmClusterRemoveVirtualMachine <a name="DatabaseVmClusterRemoveVirtualMachine" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine oci_database_vm_cluster_remove_virtual_machine}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

new databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine(scope: Construct, id: string, config: DatabaseVmClusterRemoveVirtualMachineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig">DatabaseVmClusterRemoveVirtualMachineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig">DatabaseVmClusterRemoveVirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.putDbServers">putDbServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDbServers` <a name="putDbServers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.putDbServers"></a>

```typescript
public putDbServers(value: IResolvable | DatabaseVmClusterRemoveVirtualMachineDbServers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.putDbServers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseVmClusterRemoveVirtualMachineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseVmClusterRemoveVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isConstruct"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformElement"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformResource"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseVmClusterRemoveVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseVmClusterRemoveVirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseVmClusterRemoveVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseVmClusterRemoveVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.cloudAutomationUpdateDetails">cloudAutomationUpdateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.cpusEnabled">cpusEnabled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList">DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dbServers">dbServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList">DatabaseVmClusterRemoveVirtualMachineDbServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.fileSystemConfigurationDetails">fileSystemConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList">DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.giVersion">giVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.isLocalBackupEnabled">isLocalBackupEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.isSparseDiskgroupEnabled">isSparseDiskgroupEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.lastPatchHistoryEntryId">lastPatchHistoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.sshPublicKeys">sshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.systemVersion">systemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference">DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.vmClusterNetworkId">vmClusterNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dbServersInput">dbServersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.vmClusterIdInput">vmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.vmClusterId">vmClusterId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `cloudAutomationUpdateDetails`<sup>Required</sup> <a name="cloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.cloudAutomationUpdateDetails"></a>

```typescript
public readonly cloudAutomationUpdateDetails: DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `cpusEnabled`<sup>Required</sup> <a name="cpusEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.cpusEnabled"></a>

```typescript
public readonly cpusEnabled: number;
```

- *Type:* number

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dataCollectionOptions"></a>

```typescript
public readonly dataCollectionOptions: DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList">DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList</a>

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dataStorageSizeInTbs"></a>

```typescript
public readonly dataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dbNodeStorageSizeInGbs"></a>

```typescript
public readonly dbNodeStorageSizeInGbs: number;
```

- *Type:* number

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dbServers"></a>

```typescript
public readonly dbServers: DatabaseVmClusterRemoveVirtualMachineDbServersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList">DatabaseVmClusterRemoveVirtualMachineDbServersList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.exadataInfrastructureId"></a>

```typescript
public readonly exadataInfrastructureId: string;
```

- *Type:* string

---

##### `fileSystemConfigurationDetails`<sup>Required</sup> <a name="fileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.fileSystemConfigurationDetails"></a>

```typescript
public readonly fileSystemConfigurationDetails: DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList">DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.giVersion"></a>

```typescript
public readonly giVersion: string;
```

- *Type:* string

---

##### `isLocalBackupEnabled`<sup>Required</sup> <a name="isLocalBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.isLocalBackupEnabled"></a>

```typescript
public readonly isLocalBackupEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSparseDiskgroupEnabled`<sup>Required</sup> <a name="isSparseDiskgroupEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.isSparseDiskgroupEnabled"></a>

```typescript
public readonly isSparseDiskgroupEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastPatchHistoryEntryId`<sup>Required</sup> <a name="lastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.lastPatchHistoryEntryId"></a>

```typescript
public readonly lastPatchHistoryEntryId: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.memorySizeInGbs"></a>

```typescript
public readonly memorySizeInGbs: number;
```

- *Type:* number

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.sshPublicKeys"></a>

```typescript
public readonly sshPublicKeys: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemVersion`<sup>Required</sup> <a name="systemVersion" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.systemVersion"></a>

```typescript
public readonly systemVersion: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference">DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference</a>

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `vmClusterNetworkId`<sup>Required</sup> <a name="vmClusterNetworkId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.vmClusterNetworkId"></a>

```typescript
public readonly vmClusterNetworkId: string;
```

- *Type:* string

---

##### `dbServersInput`<sup>Optional</sup> <a name="dbServersInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.dbServersInput"></a>

```typescript
public readonly dbServersInput: IResolvable | DatabaseVmClusterRemoveVirtualMachineDbServers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseVmClusterRemoveVirtualMachineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a>

---

##### `vmClusterIdInput`<sup>Optional</sup> <a name="vmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.vmClusterIdInput"></a>

```typescript
public readonly vmClusterIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.vmClusterId"></a>

```typescript
public readonly vmClusterId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

const databaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails: databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails = { ... }
```


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

const databaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference: databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference = { ... }
```


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

const databaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod: databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod = { ... }
```


### DatabaseVmClusterRemoveVirtualMachineConfig <a name="DatabaseVmClusterRemoveVirtualMachineConfig" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

const databaseVmClusterRemoveVirtualMachineConfig: databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.dbServers">dbServers</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a>[]</code> | db_servers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.vmClusterId">vmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#vm_cluster_id DatabaseVmClusterRemoveVirtualMachine#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#id DatabaseVmClusterRemoveVirtualMachine#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.dbServers"></a>

```typescript
public readonly dbServers: IResolvable | DatabaseVmClusterRemoveVirtualMachineDbServers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a>[]

db_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#db_servers DatabaseVmClusterRemoveVirtualMachine#db_servers}

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.vmClusterId"></a>

```typescript
public readonly vmClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#vm_cluster_id DatabaseVmClusterRemoveVirtualMachine#vm_cluster_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#id DatabaseVmClusterRemoveVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseVmClusterRemoveVirtualMachineTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#timeouts DatabaseVmClusterRemoveVirtualMachine#timeouts}

---

### DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions <a name="DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

const databaseVmClusterRemoveVirtualMachineDataCollectionOptions: databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions = { ... }
```


### DatabaseVmClusterRemoveVirtualMachineDbServers <a name="DatabaseVmClusterRemoveVirtualMachineDbServers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

const databaseVmClusterRemoveVirtualMachineDbServers: databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers.property.dbServerId">dbServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#db_server_id DatabaseVmClusterRemoveVirtualMachine#db_server_id}. |

---

##### `dbServerId`<sup>Required</sup> <a name="dbServerId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers.property.dbServerId"></a>

```typescript
public readonly dbServerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#db_server_id DatabaseVmClusterRemoveVirtualMachine#db_server_id}.

---

### DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails <a name="DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

const databaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails: databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails = { ... }
```


### DatabaseVmClusterRemoveVirtualMachineTimeouts <a name="DatabaseVmClusterRemoveVirtualMachineTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

const databaseVmClusterRemoveVirtualMachineTimeouts: databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#create DatabaseVmClusterRemoveVirtualMachine#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#delete DatabaseVmClusterRemoveVirtualMachine#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#update DatabaseVmClusterRemoveVirtualMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#create DatabaseVmClusterRemoveVirtualMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#delete DatabaseVmClusterRemoveVirtualMachine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_remove_virtual_machine#update DatabaseVmClusterRemoveVirtualMachine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

new databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get"></a>

```typescript
public get(index: number): DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

new databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime">applyUpdatePreferredEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime">applyUpdatePreferredStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applyUpdatePreferredEndTime`<sup>Required</sup> <a name="applyUpdatePreferredEndTime" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredEndTime"></a>

```typescript
public readonly applyUpdatePreferredEndTime: string;
```

- *Type:* string

---

##### `applyUpdatePreferredStartTime`<sup>Required</sup> <a name="applyUpdatePreferredStartTime" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.applyUpdatePreferredStartTime"></a>

```typescript
public readonly applyUpdatePreferredStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreference</a>

---


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

new databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.get"></a>

```typescript
public get(index: number): DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

new databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime">freezePeriodEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime">freezePeriodStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `freezePeriodEndTime`<sup>Required</sup> <a name="freezePeriodEndTime" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodEndTime"></a>

```typescript
public readonly freezePeriodEndTime: string;
```

- *Type:* string

---

##### `freezePeriodStartTime`<sup>Required</sup> <a name="freezePeriodStartTime" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.freezePeriodStartTime"></a>

```typescript
public readonly freezePeriodStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriod</a>

---


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

new databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.get"></a>

```typescript
public get(index: number): DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

new databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference">applyUpdateTimePreference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.freezePeriod">freezePeriod</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled">isEarlyAdoptionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled">isFreezePeriodEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applyUpdateTimePreference`<sup>Required</sup> <a name="applyUpdateTimePreference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.applyUpdateTimePreference"></a>

```typescript
public readonly applyUpdateTimePreference: DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList</a>

---

##### `freezePeriod`<sup>Required</sup> <a name="freezePeriod" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.freezePeriod"></a>

```typescript
public readonly freezePeriod: DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsFreezePeriodList</a>

---

##### `isEarlyAdoptionEnabled`<sup>Required</sup> <a name="isEarlyAdoptionEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.isEarlyAdoptionEnabled"></a>

```typescript
public readonly isEarlyAdoptionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isFreezePeriodEnabled`<sup>Required</sup> <a name="isFreezePeriodEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.isFreezePeriodEnabled"></a>

```typescript
public readonly isFreezePeriodEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails">DatabaseVmClusterRemoveVirtualMachineCloudAutomationUpdateDetails</a>

---


### DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList <a name="DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

new databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.get"></a>

```typescript
public get(index: number): DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

new databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions">DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```typescript
public readonly isDiagnosticsEventsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHealthMonitoringEnabled`<sup>Required</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```typescript
public readonly isHealthMonitoringEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```typescript
public readonly isIncidentLogsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions">DatabaseVmClusterRemoveVirtualMachineDataCollectionOptions</a>

---


### DatabaseVmClusterRemoveVirtualMachineDbServersList <a name="DatabaseVmClusterRemoveVirtualMachineDbServersList" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

new databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.get"></a>

```typescript
public get(index: number): DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseVmClusterRemoveVirtualMachineDbServers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a>[]

---


### DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

new databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.dbServerIdInput">dbServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.dbServerId">dbServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbServerIdInput`<sup>Optional</sup> <a name="dbServerIdInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.dbServerIdInput"></a>

```typescript
public readonly dbServerIdInput: string;
```

- *Type:* string

---

##### `dbServerId`<sup>Required</sup> <a name="dbServerId" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.dbServerId"></a>

```typescript
public readonly dbServerId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseVmClusterRemoveVirtualMachineDbServers;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineDbServers">DatabaseVmClusterRemoveVirtualMachineDbServers</a>

---


### DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList <a name="DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

new databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.get"></a>

```typescript
public get(index: number): DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

new databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb">fileSystemSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails">DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSystemSizeGb`<sup>Required</sup> <a name="fileSystemSizeGb" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.fileSystemSizeGb"></a>

```typescript
public readonly fileSystemSizeGb: number;
```

- *Type:* number

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails">DatabaseVmClusterRemoveVirtualMachineFileSystemConfigurationDetails</a>

---


### DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference <a name="DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseVmClusterRemoveVirtualMachine } from 'rhizo-co-terraform-provider-oci'

new databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseVmClusterRemoveVirtualMachineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterRemoveVirtualMachine.DatabaseVmClusterRemoveVirtualMachineTimeouts">DatabaseVmClusterRemoveVirtualMachineTimeouts</a>

---



