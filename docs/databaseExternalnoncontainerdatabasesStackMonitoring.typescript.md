# `databaseExternalnoncontainerdatabasesStackMonitoring` Submodule <a name="`databaseExternalnoncontainerdatabasesStackMonitoring` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalnoncontainerdatabasesStackMonitoring <a name="DatabaseExternalnoncontainerdatabasesStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring oci_database_externalnoncontainerdatabases_stack_monitoring}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer"></a>

```typescript
import { databaseExternalnoncontainerdatabasesStackMonitoring } from 'rhizo-co-terraform-provider-oci'

new databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring(scope: Construct, id: string, config: DatabaseExternalnoncontainerdatabasesStackMonitoringConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig">DatabaseExternalnoncontainerdatabasesStackMonitoringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig">DatabaseExternalnoncontainerdatabasesStackMonitoringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExternalnoncontainerdatabasesStackMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isConstruct"></a>

```typescript
import { databaseExternalnoncontainerdatabasesStackMonitoring } from 'rhizo-co-terraform-provider-oci'

databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformElement"></a>

```typescript
import { databaseExternalnoncontainerdatabasesStackMonitoring } from 'rhizo-co-terraform-provider-oci'

databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformResource"></a>

```typescript
import { databaseExternalnoncontainerdatabasesStackMonitoring } from 'rhizo-co-terraform-provider-oci'

databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport"></a>

```typescript
import { databaseExternalnoncontainerdatabasesStackMonitoring } from 'rhizo-co-terraform-provider-oci'

databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseExternalnoncontainerdatabasesStackMonitoring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseExternalnoncontainerdatabasesStackMonitoring to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseExternalnoncontainerdatabasesStackMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalnoncontainerdatabasesStackMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.enableStackMonitoringInput">enableStackMonitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalDatabaseConnectorIdInput">externalDatabaseConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalNonContainerDatabaseIdInput">externalNonContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.enableStackMonitoring">enableStackMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalDatabaseConnectorId">externalDatabaseConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalNonContainerDatabaseId">externalNonContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference</a>

---

##### `enableStackMonitoringInput`<sup>Optional</sup> <a name="enableStackMonitoringInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.enableStackMonitoringInput"></a>

```typescript
public readonly enableStackMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalDatabaseConnectorIdInput`<sup>Optional</sup> <a name="externalDatabaseConnectorIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalDatabaseConnectorIdInput"></a>

```typescript
public readonly externalDatabaseConnectorIdInput: string;
```

- *Type:* string

---

##### `externalNonContainerDatabaseIdInput`<sup>Optional</sup> <a name="externalNonContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalNonContainerDatabaseIdInput"></a>

```typescript
public readonly externalNonContainerDatabaseIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts</a>

---

##### `enableStackMonitoring`<sup>Required</sup> <a name="enableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.enableStackMonitoring"></a>

```typescript
public readonly enableStackMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalDatabaseConnectorId`<sup>Required</sup> <a name="externalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalDatabaseConnectorId"></a>

```typescript
public readonly externalDatabaseConnectorId: string;
```

- *Type:* string

---

##### `externalNonContainerDatabaseId`<sup>Required</sup> <a name="externalNonContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.externalNonContainerDatabaseId"></a>

```typescript
public readonly externalNonContainerDatabaseId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoring.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalnoncontainerdatabasesStackMonitoringConfig <a name="DatabaseExternalnoncontainerdatabasesStackMonitoringConfig" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.Initializer"></a>

```typescript
import { databaseExternalnoncontainerdatabasesStackMonitoring } from 'rhizo-co-terraform-provider-oci'

const databaseExternalnoncontainerdatabasesStackMonitoringConfig: databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.enableStackMonitoring">enableStackMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#enable_stack_monitoring DatabaseExternalnoncontainerdatabasesStackMonitoring#enable_stack_monitoring}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.externalDatabaseConnectorId">externalDatabaseConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#external_database_connector_id DatabaseExternalnoncontainerdatabasesStackMonitoring#external_database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.externalNonContainerDatabaseId">externalNonContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#external_non_container_database_id DatabaseExternalnoncontainerdatabasesStackMonitoring#external_non_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#id DatabaseExternalnoncontainerdatabasesStackMonitoring#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enableStackMonitoring`<sup>Required</sup> <a name="enableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.enableStackMonitoring"></a>

```typescript
public readonly enableStackMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#enable_stack_monitoring DatabaseExternalnoncontainerdatabasesStackMonitoring#enable_stack_monitoring}.

---

##### `externalDatabaseConnectorId`<sup>Required</sup> <a name="externalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.externalDatabaseConnectorId"></a>

```typescript
public readonly externalDatabaseConnectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#external_database_connector_id DatabaseExternalnoncontainerdatabasesStackMonitoring#external_database_connector_id}.

---

##### `externalNonContainerDatabaseId`<sup>Required</sup> <a name="externalNonContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.externalNonContainerDatabaseId"></a>

```typescript
public readonly externalNonContainerDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#external_non_container_database_id DatabaseExternalnoncontainerdatabasesStackMonitoring#external_non_container_database_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#id DatabaseExternalnoncontainerdatabasesStackMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#timeouts DatabaseExternalnoncontainerdatabasesStackMonitoring#timeouts}

---

### DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts <a name="DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.Initializer"></a>

```typescript
import { databaseExternalnoncontainerdatabasesStackMonitoring } from 'rhizo-co-terraform-provider-oci'

const databaseExternalnoncontainerdatabasesStackMonitoringTimeouts: databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#create DatabaseExternalnoncontainerdatabasesStackMonitoring#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#delete DatabaseExternalnoncontainerdatabasesStackMonitoring#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#update DatabaseExternalnoncontainerdatabasesStackMonitoring#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#create DatabaseExternalnoncontainerdatabasesStackMonitoring#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#delete DatabaseExternalnoncontainerdatabasesStackMonitoring#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalnoncontainerdatabases_stack_monitoring#update DatabaseExternalnoncontainerdatabasesStackMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference <a name="DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseExternalnoncontainerdatabasesStackMonitoring } from 'rhizo-co-terraform-provider-oci'

new databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExternalnoncontainerdatabasesStackMonitoring.DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts">DatabaseExternalnoncontainerdatabasesStackMonitoringTimeouts</a>

---



