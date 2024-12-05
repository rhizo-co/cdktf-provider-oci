# `databaseDatabaseSoftwareImage` Submodule <a name="`databaseDatabaseSoftwareImage` Submodule" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDatabaseSoftwareImage <a name="DatabaseDatabaseSoftwareImage" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image oci_database_database_software_image}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer"></a>

```typescript
import { databaseDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

new databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage(scope: Construct, id: string, config: DatabaseDatabaseSoftwareImageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig">DatabaseDatabaseSoftwareImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig">DatabaseDatabaseSoftwareImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetDatabaseSoftwareImageOneOffPatches">resetDatabaseSoftwareImageOneOffPatches</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetDatabaseVersion">resetDatabaseVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetImageShapeFamily">resetImageShapeFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetImageType">resetImageType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetLsInventory">resetLsInventory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetPatchSet">resetPatchSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetSourceDbHomeId">resetSourceDbHomeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseDatabaseSoftwareImageTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a>

---

##### `resetDatabaseSoftwareImageOneOffPatches` <a name="resetDatabaseSoftwareImageOneOffPatches" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetDatabaseSoftwareImageOneOffPatches"></a>

```typescript
public resetDatabaseSoftwareImageOneOffPatches(): void
```

##### `resetDatabaseVersion` <a name="resetDatabaseVersion" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetDatabaseVersion"></a>

```typescript
public resetDatabaseVersion(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageShapeFamily` <a name="resetImageShapeFamily" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetImageShapeFamily"></a>

```typescript
public resetImageShapeFamily(): void
```

##### `resetImageType` <a name="resetImageType" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetImageType"></a>

```typescript
public resetImageType(): void
```

##### `resetLsInventory` <a name="resetLsInventory" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetLsInventory"></a>

```typescript
public resetLsInventory(): void
```

##### `resetPatchSet` <a name="resetPatchSet" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetPatchSet"></a>

```typescript
public resetPatchSet(): void
```

##### `resetSourceDbHomeId` <a name="resetSourceDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetSourceDbHomeId"></a>

```typescript
public resetSourceDbHomeId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDatabaseSoftwareImage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isConstruct"></a>

```typescript
import { databaseDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformElement"></a>

```typescript
import { databaseDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformResource"></a>

```typescript
import { databaseDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport"></a>

```typescript
import { databaseDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseDatabaseSoftwareImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseDatabaseSoftwareImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseDatabaseSoftwareImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDatabaseSoftwareImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseSoftwareImageIncludedPatches">databaseSoftwareImageIncludedPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.includedPatchesSummary">includedPatchesSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.isUpgradeSupported">isUpgradeSupported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference">DatabaseDatabaseSoftwareImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseSoftwareImageOneOffPatchesInput">databaseSoftwareImageOneOffPatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseVersionInput">databaseVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageShapeFamilyInput">imageShapeFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageTypeInput">imageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lsInventoryInput">lsInventoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.patchSetInput">patchSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.sourceDbHomeIdInput">sourceDbHomeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseSoftwareImageOneOffPatches">databaseSoftwareImageOneOffPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageShapeFamily">imageShapeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageType">imageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lsInventory">lsInventory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.patchSet">patchSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.sourceDbHomeId">sourceDbHomeId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseSoftwareImageIncludedPatches`<sup>Required</sup> <a name="databaseSoftwareImageIncludedPatches" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseSoftwareImageIncludedPatches"></a>

```typescript
public readonly databaseSoftwareImageIncludedPatches: string[];
```

- *Type:* string[]

---

##### `includedPatchesSummary`<sup>Required</sup> <a name="includedPatchesSummary" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.includedPatchesSummary"></a>

```typescript
public readonly includedPatchesSummary: string;
```

- *Type:* string

---

##### `isUpgradeSupported`<sup>Required</sup> <a name="isUpgradeSupported" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.isUpgradeSupported"></a>

```typescript
public readonly isUpgradeSupported: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseDatabaseSoftwareImageTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference">DatabaseDatabaseSoftwareImageTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `databaseSoftwareImageOneOffPatchesInput`<sup>Optional</sup> <a name="databaseSoftwareImageOneOffPatchesInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseSoftwareImageOneOffPatchesInput"></a>

```typescript
public readonly databaseSoftwareImageOneOffPatchesInput: string[];
```

- *Type:* string[]

---

##### `databaseVersionInput`<sup>Optional</sup> <a name="databaseVersionInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseVersionInput"></a>

```typescript
public readonly databaseVersionInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageShapeFamilyInput`<sup>Optional</sup> <a name="imageShapeFamilyInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageShapeFamilyInput"></a>

```typescript
public readonly imageShapeFamilyInput: string;
```

- *Type:* string

---

##### `imageTypeInput`<sup>Optional</sup> <a name="imageTypeInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageTypeInput"></a>

```typescript
public readonly imageTypeInput: string;
```

- *Type:* string

---

##### `lsInventoryInput`<sup>Optional</sup> <a name="lsInventoryInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lsInventoryInput"></a>

```typescript
public readonly lsInventoryInput: string;
```

- *Type:* string

---

##### `patchSetInput`<sup>Optional</sup> <a name="patchSetInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.patchSetInput"></a>

```typescript
public readonly patchSetInput: string;
```

- *Type:* string

---

##### `sourceDbHomeIdInput`<sup>Optional</sup> <a name="sourceDbHomeIdInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.sourceDbHomeIdInput"></a>

```typescript
public readonly sourceDbHomeIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseDatabaseSoftwareImageTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseSoftwareImageOneOffPatches`<sup>Required</sup> <a name="databaseSoftwareImageOneOffPatches" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseSoftwareImageOneOffPatches"></a>

```typescript
public readonly databaseSoftwareImageOneOffPatches: string[];
```

- *Type:* string[]

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageShapeFamily`<sup>Required</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageShapeFamily"></a>

```typescript
public readonly imageShapeFamily: string;
```

- *Type:* string

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

---

##### `lsInventory`<sup>Required</sup> <a name="lsInventory" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.lsInventory"></a>

```typescript
public readonly lsInventory: string;
```

- *Type:* string

---

##### `patchSet`<sup>Required</sup> <a name="patchSet" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.patchSet"></a>

```typescript
public readonly patchSet: string;
```

- *Type:* string

---

##### `sourceDbHomeId`<sup>Required</sup> <a name="sourceDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.sourceDbHomeId"></a>

```typescript
public readonly sourceDbHomeId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDatabaseSoftwareImageConfig <a name="DatabaseDatabaseSoftwareImageConfig" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.Initializer"></a>

```typescript
import { databaseDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

const databaseDatabaseSoftwareImageConfig: databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#compartment_id DatabaseDatabaseSoftwareImage#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#display_name DatabaseDatabaseSoftwareImage#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.databaseSoftwareImageOneOffPatches">databaseSoftwareImageOneOffPatches</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#database_software_image_one_off_patches DatabaseDatabaseSoftwareImage#database_software_image_one_off_patches}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#database_version DatabaseDatabaseSoftwareImage#database_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#defined_tags DatabaseDatabaseSoftwareImage#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#freeform_tags DatabaseDatabaseSoftwareImage#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#id DatabaseDatabaseSoftwareImage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.imageShapeFamily">imageShapeFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#image_shape_family DatabaseDatabaseSoftwareImage#image_shape_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.imageType">imageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#image_type DatabaseDatabaseSoftwareImage#image_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.lsInventory">lsInventory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#ls_inventory DatabaseDatabaseSoftwareImage#ls_inventory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.patchSet">patchSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#patch_set DatabaseDatabaseSoftwareImage#patch_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.sourceDbHomeId">sourceDbHomeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#source_db_home_id DatabaseDatabaseSoftwareImage#source_db_home_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#compartment_id DatabaseDatabaseSoftwareImage#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#display_name DatabaseDatabaseSoftwareImage#display_name}.

---

##### `databaseSoftwareImageOneOffPatches`<sup>Optional</sup> <a name="databaseSoftwareImageOneOffPatches" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.databaseSoftwareImageOneOffPatches"></a>

```typescript
public readonly databaseSoftwareImageOneOffPatches: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#database_software_image_one_off_patches DatabaseDatabaseSoftwareImage#database_software_image_one_off_patches}.

---

##### `databaseVersion`<sup>Optional</sup> <a name="databaseVersion" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#database_version DatabaseDatabaseSoftwareImage#database_version}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#defined_tags DatabaseDatabaseSoftwareImage#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#freeform_tags DatabaseDatabaseSoftwareImage#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#id DatabaseDatabaseSoftwareImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageShapeFamily`<sup>Optional</sup> <a name="imageShapeFamily" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.imageShapeFamily"></a>

```typescript
public readonly imageShapeFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#image_shape_family DatabaseDatabaseSoftwareImage#image_shape_family}.

---

##### `imageType`<sup>Optional</sup> <a name="imageType" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#image_type DatabaseDatabaseSoftwareImage#image_type}.

---

##### `lsInventory`<sup>Optional</sup> <a name="lsInventory" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.lsInventory"></a>

```typescript
public readonly lsInventory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#ls_inventory DatabaseDatabaseSoftwareImage#ls_inventory}.

---

##### `patchSet`<sup>Optional</sup> <a name="patchSet" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.patchSet"></a>

```typescript
public readonly patchSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#patch_set DatabaseDatabaseSoftwareImage#patch_set}.

---

##### `sourceDbHomeId`<sup>Optional</sup> <a name="sourceDbHomeId" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.sourceDbHomeId"></a>

```typescript
public readonly sourceDbHomeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#source_db_home_id DatabaseDatabaseSoftwareImage#source_db_home_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseDatabaseSoftwareImageTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#timeouts DatabaseDatabaseSoftwareImage#timeouts}

---

### DatabaseDatabaseSoftwareImageTimeouts <a name="DatabaseDatabaseSoftwareImageTimeouts" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.Initializer"></a>

```typescript
import { databaseDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

const databaseDatabaseSoftwareImageTimeouts: databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#create DatabaseDatabaseSoftwareImage#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#delete DatabaseDatabaseSoftwareImage#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#update DatabaseDatabaseSoftwareImage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#create DatabaseDatabaseSoftwareImage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#delete DatabaseDatabaseSoftwareImage#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_database_software_image#update DatabaseDatabaseSoftwareImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDatabaseSoftwareImageTimeoutsOutputReference <a name="DatabaseDatabaseSoftwareImageTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseDatabaseSoftwareImage } from 'rhizo-co-terraform-provider-oci'

new databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseDatabaseSoftwareImageTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseDatabaseSoftwareImage.DatabaseDatabaseSoftwareImageTimeouts">DatabaseDatabaseSoftwareImageTimeouts</a>

---



