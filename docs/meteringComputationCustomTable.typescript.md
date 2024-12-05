# `meteringComputationCustomTable` Submodule <a name="`meteringComputationCustomTable` Submodule" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MeteringComputationCustomTable <a name="MeteringComputationCustomTable" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table oci_metering_computation_custom_table}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.Initializer"></a>

```typescript
import { meteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

new meteringComputationCustomTable.MeteringComputationCustomTable(scope: Construct, id: string, config: MeteringComputationCustomTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig">MeteringComputationCustomTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig">MeteringComputationCustomTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.putSavedCustomTable">putSavedCustomTable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSavedCustomTable` <a name="putSavedCustomTable" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.putSavedCustomTable"></a>

```typescript
public putSavedCustomTable(value: MeteringComputationCustomTableSavedCustomTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.putSavedCustomTable.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable">MeteringComputationCustomTableSavedCustomTable</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.putTimeouts"></a>

```typescript
public putTimeouts(value: MeteringComputationCustomTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeouts">MeteringComputationCustomTableTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MeteringComputationCustomTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.isConstruct"></a>

```typescript
import { meteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

meteringComputationCustomTable.MeteringComputationCustomTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.isTerraformElement"></a>

```typescript
import { meteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

meteringComputationCustomTable.MeteringComputationCustomTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.isTerraformResource"></a>

```typescript
import { meteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

meteringComputationCustomTable.MeteringComputationCustomTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.generateConfigForImport"></a>

```typescript
import { meteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

meteringComputationCustomTable.MeteringComputationCustomTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MeteringComputationCustomTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MeteringComputationCustomTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MeteringComputationCustomTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MeteringComputationCustomTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.savedCustomTable">savedCustomTable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference">MeteringComputationCustomTableSavedCustomTableOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference">MeteringComputationCustomTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.savedCustomTableInput">savedCustomTableInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable">MeteringComputationCustomTableSavedCustomTable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.savedReportIdInput">savedReportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeouts">MeteringComputationCustomTableTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.savedReportId">savedReportId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `savedCustomTable`<sup>Required</sup> <a name="savedCustomTable" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.savedCustomTable"></a>

```typescript
public readonly savedCustomTable: MeteringComputationCustomTableSavedCustomTableOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference">MeteringComputationCustomTableSavedCustomTableOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.timeouts"></a>

```typescript
public readonly timeouts: MeteringComputationCustomTableTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference">MeteringComputationCustomTableTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `savedCustomTableInput`<sup>Optional</sup> <a name="savedCustomTableInput" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.savedCustomTableInput"></a>

```typescript
public readonly savedCustomTableInput: MeteringComputationCustomTableSavedCustomTable;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable">MeteringComputationCustomTableSavedCustomTable</a>

---

##### `savedReportIdInput`<sup>Optional</sup> <a name="savedReportIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.savedReportIdInput"></a>

```typescript
public readonly savedReportIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MeteringComputationCustomTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeouts">MeteringComputationCustomTableTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `savedReportId`<sup>Required</sup> <a name="savedReportId" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.savedReportId"></a>

```typescript
public readonly savedReportId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MeteringComputationCustomTableConfig <a name="MeteringComputationCustomTableConfig" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.Initializer"></a>

```typescript
import { meteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

const meteringComputationCustomTableConfig: meteringComputationCustomTable.MeteringComputationCustomTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#compartment_id MeteringComputationCustomTable#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.savedCustomTable">savedCustomTable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable">MeteringComputationCustomTableSavedCustomTable</a></code> | saved_custom_table block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.savedReportId">savedReportId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#saved_report_id MeteringComputationCustomTable#saved_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#id MeteringComputationCustomTable#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeouts">MeteringComputationCustomTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#compartment_id MeteringComputationCustomTable#compartment_id}.

---

##### `savedCustomTable`<sup>Required</sup> <a name="savedCustomTable" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.savedCustomTable"></a>

```typescript
public readonly savedCustomTable: MeteringComputationCustomTableSavedCustomTable;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable">MeteringComputationCustomTableSavedCustomTable</a>

saved_custom_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#saved_custom_table MeteringComputationCustomTable#saved_custom_table}

---

##### `savedReportId`<sup>Required</sup> <a name="savedReportId" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.savedReportId"></a>

```typescript
public readonly savedReportId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#saved_report_id MeteringComputationCustomTable#saved_report_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#id MeteringComputationCustomTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MeteringComputationCustomTableTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeouts">MeteringComputationCustomTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#timeouts MeteringComputationCustomTable#timeouts}

---

### MeteringComputationCustomTableSavedCustomTable <a name="MeteringComputationCustomTableSavedCustomTable" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable.Initializer"></a>

```typescript
import { meteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

const meteringComputationCustomTableSavedCustomTable: meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#display_name MeteringComputationCustomTable#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable.property.columnGroupBy">columnGroupBy</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#column_group_by MeteringComputationCustomTable#column_group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable.property.compartmentDepth">compartmentDepth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#compartment_depth MeteringComputationCustomTable#compartment_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable.property.groupByTag">groupByTag</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTag">MeteringComputationCustomTableSavedCustomTableGroupByTag</a>[]</code> | group_by_tag block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable.property.rowGroupBy">rowGroupBy</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#row_group_by MeteringComputationCustomTable#row_group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable.property.version">version</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#version MeteringComputationCustomTable#version}. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#display_name MeteringComputationCustomTable#display_name}.

---

##### `columnGroupBy`<sup>Optional</sup> <a name="columnGroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable.property.columnGroupBy"></a>

```typescript
public readonly columnGroupBy: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#column_group_by MeteringComputationCustomTable#column_group_by}.

---

##### `compartmentDepth`<sup>Optional</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable.property.compartmentDepth"></a>

```typescript
public readonly compartmentDepth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#compartment_depth MeteringComputationCustomTable#compartment_depth}.

---

##### `groupByTag`<sup>Optional</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable.property.groupByTag"></a>

```typescript
public readonly groupByTag: IResolvable | MeteringComputationCustomTableSavedCustomTableGroupByTag[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTag">MeteringComputationCustomTableSavedCustomTableGroupByTag</a>[]

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#group_by_tag MeteringComputationCustomTable#group_by_tag}

---

##### `rowGroupBy`<sup>Optional</sup> <a name="rowGroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable.property.rowGroupBy"></a>

```typescript
public readonly rowGroupBy: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#row_group_by MeteringComputationCustomTable#row_group_by}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#version MeteringComputationCustomTable#version}.

---

### MeteringComputationCustomTableSavedCustomTableGroupByTag <a name="MeteringComputationCustomTableSavedCustomTableGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTag.Initializer"></a>

```typescript
import { meteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

const meteringComputationCustomTableSavedCustomTableGroupByTag: meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTag.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#key MeteringComputationCustomTable#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTag.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#namespace MeteringComputationCustomTable#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#value MeteringComputationCustomTable#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#key MeteringComputationCustomTable#key}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTag.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#namespace MeteringComputationCustomTable#namespace}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#value MeteringComputationCustomTable#value}.

---

### MeteringComputationCustomTableTimeouts <a name="MeteringComputationCustomTableTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeouts.Initializer"></a>

```typescript
import { meteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

const meteringComputationCustomTableTimeouts: meteringComputationCustomTable.MeteringComputationCustomTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#create MeteringComputationCustomTable#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#delete MeteringComputationCustomTable#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#update MeteringComputationCustomTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#create MeteringComputationCustomTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#delete MeteringComputationCustomTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_custom_table#update MeteringComputationCustomTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MeteringComputationCustomTableSavedCustomTableGroupByTagList <a name="MeteringComputationCustomTableSavedCustomTableGroupByTagList" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.Initializer"></a>

```typescript
import { meteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

new meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.get"></a>

```typescript
public get(index: number): MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTag">MeteringComputationCustomTableSavedCustomTableGroupByTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MeteringComputationCustomTableSavedCustomTableGroupByTag[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTag">MeteringComputationCustomTableSavedCustomTableGroupByTag</a>[]

---


### MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference <a name="MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.Initializer"></a>

```typescript
import { meteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

new meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTag">MeteringComputationCustomTableSavedCustomTableGroupByTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MeteringComputationCustomTableSavedCustomTableGroupByTag;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTag">MeteringComputationCustomTableSavedCustomTableGroupByTag</a>

---


### MeteringComputationCustomTableSavedCustomTableOutputReference <a name="MeteringComputationCustomTableSavedCustomTableOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.Initializer"></a>

```typescript
import { meteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

new meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.putGroupByTag">putGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.resetColumnGroupBy">resetColumnGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.resetCompartmentDepth">resetCompartmentDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.resetGroupByTag">resetGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.resetRowGroupBy">resetRowGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroupByTag` <a name="putGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.putGroupByTag"></a>

```typescript
public putGroupByTag(value: IResolvable | MeteringComputationCustomTableSavedCustomTableGroupByTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.putGroupByTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTag">MeteringComputationCustomTableSavedCustomTableGroupByTag</a>[]

---

##### `resetColumnGroupBy` <a name="resetColumnGroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.resetColumnGroupBy"></a>

```typescript
public resetColumnGroupBy(): void
```

##### `resetCompartmentDepth` <a name="resetCompartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.resetCompartmentDepth"></a>

```typescript
public resetCompartmentDepth(): void
```

##### `resetGroupByTag` <a name="resetGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.resetGroupByTag"></a>

```typescript
public resetGroupByTag(): void
```

##### `resetRowGroupBy` <a name="resetRowGroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.resetRowGroupBy"></a>

```typescript
public resetRowGroupBy(): void
```

##### `resetVersion` <a name="resetVersion" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.groupByTag">groupByTag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList">MeteringComputationCustomTableSavedCustomTableGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.columnGroupByInput">columnGroupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.compartmentDepthInput">compartmentDepthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.groupByTagInput">groupByTagInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTag">MeteringComputationCustomTableSavedCustomTableGroupByTag</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.rowGroupByInput">rowGroupByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.columnGroupBy">columnGroupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.compartmentDepth">compartmentDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.rowGroupBy">rowGroupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable">MeteringComputationCustomTableSavedCustomTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupByTag`<sup>Required</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.groupByTag"></a>

```typescript
public readonly groupByTag: MeteringComputationCustomTableSavedCustomTableGroupByTagList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTagList">MeteringComputationCustomTableSavedCustomTableGroupByTagList</a>

---

##### `columnGroupByInput`<sup>Optional</sup> <a name="columnGroupByInput" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.columnGroupByInput"></a>

```typescript
public readonly columnGroupByInput: string[];
```

- *Type:* string[]

---

##### `compartmentDepthInput`<sup>Optional</sup> <a name="compartmentDepthInput" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.compartmentDepthInput"></a>

```typescript
public readonly compartmentDepthInput: number;
```

- *Type:* number

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `groupByTagInput`<sup>Optional</sup> <a name="groupByTagInput" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.groupByTagInput"></a>

```typescript
public readonly groupByTagInput: IResolvable | MeteringComputationCustomTableSavedCustomTableGroupByTag[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableGroupByTag">MeteringComputationCustomTableSavedCustomTableGroupByTag</a>[]

---

##### `rowGroupByInput`<sup>Optional</sup> <a name="rowGroupByInput" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.rowGroupByInput"></a>

```typescript
public readonly rowGroupByInput: string[];
```

- *Type:* string[]

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `columnGroupBy`<sup>Required</sup> <a name="columnGroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.columnGroupBy"></a>

```typescript
public readonly columnGroupBy: string[];
```

- *Type:* string[]

---

##### `compartmentDepth`<sup>Required</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.compartmentDepth"></a>

```typescript
public readonly compartmentDepth: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `rowGroupBy`<sup>Required</sup> <a name="rowGroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.rowGroupBy"></a>

```typescript
public readonly rowGroupBy: string[];
```

- *Type:* string[]

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MeteringComputationCustomTableSavedCustomTable;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableSavedCustomTable">MeteringComputationCustomTableSavedCustomTable</a>

---


### MeteringComputationCustomTableTimeoutsOutputReference <a name="MeteringComputationCustomTableTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { meteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

new meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeouts">MeteringComputationCustomTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MeteringComputationCustomTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.meteringComputationCustomTable.MeteringComputationCustomTableTimeouts">MeteringComputationCustomTableTimeouts</a>

---



