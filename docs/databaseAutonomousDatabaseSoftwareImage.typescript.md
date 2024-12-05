# `databaseAutonomousDatabaseSoftwareImage` Submodule <a name="`databaseAutonomousDatabaseSoftwareImage` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousDatabaseSoftwareImage <a name="DatabaseAutonomousDatabaseSoftwareImage" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image oci_database_autonomous_database_software_image}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.Initializer"></a>

```typescript
import { databaseAutonomousDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage(scope: Construct, id: string, config: DatabaseAutonomousDatabaseSoftwareImageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig">DatabaseAutonomousDatabaseSoftwareImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig">DatabaseAutonomousDatabaseSoftwareImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseAutonomousDatabaseSoftwareImageTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeouts">DatabaseAutonomousDatabaseSoftwareImageTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousDatabaseSoftwareImage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.isConstruct"></a>

```typescript
import { databaseAutonomousDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.isTerraformElement"></a>

```typescript
import { databaseAutonomousDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.isTerraformResource"></a>

```typescript
import { databaseAutonomousDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport"></a>

```typescript
import { databaseAutonomousDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseAutonomousDatabaseSoftwareImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseAutonomousDatabaseSoftwareImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseAutonomousDatabaseSoftwareImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousDatabaseSoftwareImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.autonomousDsiOneOffPatches">autonomousDsiOneOffPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.releaseUpdate">releaseUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference">DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.imageShapeFamilyInput">imageShapeFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.sourceCdbIdInput">sourceCdbIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeouts">DatabaseAutonomousDatabaseSoftwareImageTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.imageShapeFamily">imageShapeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.sourceCdbId">sourceCdbId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousDsiOneOffPatches`<sup>Required</sup> <a name="autonomousDsiOneOffPatches" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.autonomousDsiOneOffPatches"></a>

```typescript
public readonly autonomousDsiOneOffPatches: string[];
```

- *Type:* string[]

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `releaseUpdate`<sup>Required</sup> <a name="releaseUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.releaseUpdate"></a>

```typescript
public readonly releaseUpdate: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference">DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageShapeFamilyInput`<sup>Optional</sup> <a name="imageShapeFamilyInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.imageShapeFamilyInput"></a>

```typescript
public readonly imageShapeFamilyInput: string;
```

- *Type:* string

---

##### `sourceCdbIdInput`<sup>Optional</sup> <a name="sourceCdbIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.sourceCdbIdInput"></a>

```typescript
public readonly sourceCdbIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseAutonomousDatabaseSoftwareImageTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeouts">DatabaseAutonomousDatabaseSoftwareImageTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageShapeFamily`<sup>Required</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.imageShapeFamily"></a>

```typescript
public readonly imageShapeFamily: string;
```

- *Type:* string

---

##### `sourceCdbId`<sup>Required</sup> <a name="sourceCdbId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.sourceCdbId"></a>

```typescript
public readonly sourceCdbId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousDatabaseSoftwareImageConfig <a name="DatabaseAutonomousDatabaseSoftwareImageConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.Initializer"></a>

```typescript
import { databaseAutonomousDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseSoftwareImageConfig: databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#compartment_id DatabaseAutonomousDatabaseSoftwareImage#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#display_name DatabaseAutonomousDatabaseSoftwareImage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.imageShapeFamily">imageShapeFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#image_shape_family DatabaseAutonomousDatabaseSoftwareImage#image_shape_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.sourceCdbId">sourceCdbId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#source_cdb_id DatabaseAutonomousDatabaseSoftwareImage#source_cdb_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#defined_tags DatabaseAutonomousDatabaseSoftwareImage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#freeform_tags DatabaseAutonomousDatabaseSoftwareImage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#id DatabaseAutonomousDatabaseSoftwareImage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeouts">DatabaseAutonomousDatabaseSoftwareImageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#compartment_id DatabaseAutonomousDatabaseSoftwareImage#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#display_name DatabaseAutonomousDatabaseSoftwareImage#display_name}.

---

##### `imageShapeFamily`<sup>Required</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.imageShapeFamily"></a>

```typescript
public readonly imageShapeFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#image_shape_family DatabaseAutonomousDatabaseSoftwareImage#image_shape_family}.

---

##### `sourceCdbId`<sup>Required</sup> <a name="sourceCdbId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.sourceCdbId"></a>

```typescript
public readonly sourceCdbId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#source_cdb_id DatabaseAutonomousDatabaseSoftwareImage#source_cdb_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#defined_tags DatabaseAutonomousDatabaseSoftwareImage#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#freeform_tags DatabaseAutonomousDatabaseSoftwareImage#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#id DatabaseAutonomousDatabaseSoftwareImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseAutonomousDatabaseSoftwareImageTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeouts">DatabaseAutonomousDatabaseSoftwareImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#timeouts DatabaseAutonomousDatabaseSoftwareImage#timeouts}

---

### DatabaseAutonomousDatabaseSoftwareImageTimeouts <a name="DatabaseAutonomousDatabaseSoftwareImageTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeouts.Initializer"></a>

```typescript
import { databaseAutonomousDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseSoftwareImageTimeouts: databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#create DatabaseAutonomousDatabaseSoftwareImage#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#delete DatabaseAutonomousDatabaseSoftwareImage#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#update DatabaseAutonomousDatabaseSoftwareImage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#create DatabaseAutonomousDatabaseSoftwareImage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#delete DatabaseAutonomousDatabaseSoftwareImage#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_software_image#update DatabaseAutonomousDatabaseSoftwareImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference <a name="DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeouts">DatabaseAutonomousDatabaseSoftwareImageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousDatabaseSoftwareImageTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseSoftwareImage.DatabaseAutonomousDatabaseSoftwareImageTimeouts">DatabaseAutonomousDatabaseSoftwareImageTimeouts</a>

---



