# `databaseExternalcontainerdatabasesStackMonitoring` Submodule <a name="`databaseExternalcontainerdatabasesStackMonitoring` Submodule" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExternalcontainerdatabasesStackMonitoring <a name="DatabaseExternalcontainerdatabasesStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring oci_database_externalcontainerdatabases_stack_monitoring}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer"></a>

```typescript
import { databaseExternalcontainerdatabasesStackMonitoring } from 'rhizo-co-terraform-provider-oci'

new databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring(scope: Construct, id: string, config: DatabaseExternalcontainerdatabasesStackMonitoringConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig">DatabaseExternalcontainerdatabasesStackMonitoringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig">DatabaseExternalcontainerdatabasesStackMonitoringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseExternalcontainerdatabasesStackMonitoringTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts">DatabaseExternalcontainerdatabasesStackMonitoringTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExternalcontainerdatabasesStackMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isConstruct"></a>

```typescript
import { databaseExternalcontainerdatabasesStackMonitoring } from 'rhizo-co-terraform-provider-oci'

databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isTerraformElement"></a>

```typescript
import { databaseExternalcontainerdatabasesStackMonitoring } from 'rhizo-co-terraform-provider-oci'

databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isTerraformResource"></a>

```typescript
import { databaseExternalcontainerdatabasesStackMonitoring } from 'rhizo-co-terraform-provider-oci'

databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.generateConfigForImport"></a>

```typescript
import { databaseExternalcontainerdatabasesStackMonitoring } from 'rhizo-co-terraform-provider-oci'

databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseExternalcontainerdatabasesStackMonitoring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseExternalcontainerdatabasesStackMonitoring to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseExternalcontainerdatabasesStackMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExternalcontainerdatabasesStackMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference">DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.enableStackMonitoringInput">enableStackMonitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.externalContainerDatabaseIdInput">externalContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.externalDatabaseConnectorIdInput">externalDatabaseConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts">DatabaseExternalcontainerdatabasesStackMonitoringTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.enableStackMonitoring">enableStackMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.externalContainerDatabaseId">externalContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.externalDatabaseConnectorId">externalDatabaseConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference">DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference</a>

---

##### `enableStackMonitoringInput`<sup>Optional</sup> <a name="enableStackMonitoringInput" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.enableStackMonitoringInput"></a>

```typescript
public readonly enableStackMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalContainerDatabaseIdInput`<sup>Optional</sup> <a name="externalContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.externalContainerDatabaseIdInput"></a>

```typescript
public readonly externalContainerDatabaseIdInput: string;
```

- *Type:* string

---

##### `externalDatabaseConnectorIdInput`<sup>Optional</sup> <a name="externalDatabaseConnectorIdInput" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.externalDatabaseConnectorIdInput"></a>

```typescript
public readonly externalDatabaseConnectorIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseExternalcontainerdatabasesStackMonitoringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts">DatabaseExternalcontainerdatabasesStackMonitoringTimeouts</a>

---

##### `enableStackMonitoring`<sup>Required</sup> <a name="enableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.enableStackMonitoring"></a>

```typescript
public readonly enableStackMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalContainerDatabaseId`<sup>Required</sup> <a name="externalContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.externalContainerDatabaseId"></a>

```typescript
public readonly externalContainerDatabaseId: string;
```

- *Type:* string

---

##### `externalDatabaseConnectorId`<sup>Required</sup> <a name="externalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.externalDatabaseConnectorId"></a>

```typescript
public readonly externalDatabaseConnectorId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoring.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExternalcontainerdatabasesStackMonitoringConfig <a name="DatabaseExternalcontainerdatabasesStackMonitoringConfig" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.Initializer"></a>

```typescript
import { databaseExternalcontainerdatabasesStackMonitoring } from 'rhizo-co-terraform-provider-oci'

const databaseExternalcontainerdatabasesStackMonitoringConfig: databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.enableStackMonitoring">enableStackMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#enable_stack_monitoring DatabaseExternalcontainerdatabasesStackMonitoring#enable_stack_monitoring}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.externalContainerDatabaseId">externalContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#external_container_database_id DatabaseExternalcontainerdatabasesStackMonitoring#external_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.externalDatabaseConnectorId">externalDatabaseConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#external_database_connector_id DatabaseExternalcontainerdatabasesStackMonitoring#external_database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#id DatabaseExternalcontainerdatabasesStackMonitoring#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts">DatabaseExternalcontainerdatabasesStackMonitoringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enableStackMonitoring`<sup>Required</sup> <a name="enableStackMonitoring" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.enableStackMonitoring"></a>

```typescript
public readonly enableStackMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#enable_stack_monitoring DatabaseExternalcontainerdatabasesStackMonitoring#enable_stack_monitoring}.

---

##### `externalContainerDatabaseId`<sup>Required</sup> <a name="externalContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.externalContainerDatabaseId"></a>

```typescript
public readonly externalContainerDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#external_container_database_id DatabaseExternalcontainerdatabasesStackMonitoring#external_container_database_id}.

---

##### `externalDatabaseConnectorId`<sup>Required</sup> <a name="externalDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.externalDatabaseConnectorId"></a>

```typescript
public readonly externalDatabaseConnectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#external_database_connector_id DatabaseExternalcontainerdatabasesStackMonitoring#external_database_connector_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#id DatabaseExternalcontainerdatabasesStackMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseExternalcontainerdatabasesStackMonitoringTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts">DatabaseExternalcontainerdatabasesStackMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#timeouts DatabaseExternalcontainerdatabasesStackMonitoring#timeouts}

---

### DatabaseExternalcontainerdatabasesStackMonitoringTimeouts <a name="DatabaseExternalcontainerdatabasesStackMonitoringTimeouts" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts.Initializer"></a>

```typescript
import { databaseExternalcontainerdatabasesStackMonitoring } from 'rhizo-co-terraform-provider-oci'

const databaseExternalcontainerdatabasesStackMonitoringTimeouts: databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#create DatabaseExternalcontainerdatabasesStackMonitoring#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#delete DatabaseExternalcontainerdatabasesStackMonitoring#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#update DatabaseExternalcontainerdatabasesStackMonitoring#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#create DatabaseExternalcontainerdatabasesStackMonitoring#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#delete DatabaseExternalcontainerdatabasesStackMonitoring#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_externalcontainerdatabases_stack_monitoring#update DatabaseExternalcontainerdatabasesStackMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference <a name="DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseExternalcontainerdatabasesStackMonitoring } from 'rhizo-co-terraform-provider-oci'

new databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts">DatabaseExternalcontainerdatabasesStackMonitoringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseExternalcontainerdatabasesStackMonitoringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseExternalcontainerdatabasesStackMonitoring.DatabaseExternalcontainerdatabasesStackMonitoringTimeouts">DatabaseExternalcontainerdatabasesStackMonitoringTimeouts</a>

---



